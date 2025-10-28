import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  test('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData = {
      selectedPreferences: [
        'Automação de marketing',
        'Integração com chatbots',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });
});

describe('Serviço de Recomendações — Testes de comportamento e integridade', () => {
  describe('Casos de retorno e filtragem de produtos', () => {
    test('Deve retornar o último produto empatado quando o tipo for SingleProduct', () => {
      const formData = {
        selectedPreferences: [
          'Automação de marketing',
          'Integração com chatbots',
        ],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Conversas');
    });

    test('Deve retornar um array vazio se a lista de produtos estiver vazia', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        []
      );

      expect(recommendations).toHaveLength(0);
    });

    test('Deve retornar nenhum produto se não houver correspondências', () => {
      const formData = {
        selectedPreferences: ['Preferência inexistente'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toHaveLength(0);
    });
  });

  describe('Integridade e consistência dos dados', () => {
    test('Não deve alterar os arrays originais de entrada', () => {
      const originalProducts = [...mockProducts];
      const originalFormData = {
        selectedPreferences: ['Automação de marketing'],
        selectedFeatures: ['Rastreamento de comportamento'],
        selectedRecommendationType: 'SingleProduct',
      };

      recommendationService.getRecommendations(
        originalFormData,
        originalProducts
      );

      expect(originalProducts).toEqual(mockProducts);
      expect(originalFormData.selectedPreferences).toEqual([
        'Automação de marketing',
      ]);
    });

    test('Cada produto retornado deve manter todas as propriedades esperadas', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations[0]).toMatchObject({
        name: expect.any(String),
        score: expect.any(Number),
        originalIndex: expect.any(Number),
        preferences: expect.any(Array),
        features: expect.any(Array),
      });
    });

    test('Deve ignorar produtos com propriedades indefinidas', () => {
      const customProducts = [
        { name: 'Produto Teste', preferences: undefined, features: undefined },
        ...mockProducts,
      ];

      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        customProducts
      );

      expect(recommendations.length).toBeGreaterThan(0);
      expect(recommendations.some((p) => p.name === 'Produto Teste')).toBe(
        false
      );
    });
  });

  describe('Extensibilidade e robustez do serviço', () => {
    test('Permite adicionar novos produtos e preferências sem comprometer o funcionamento', () => {
      const extendedProducts = [
        ...mockProducts,
        {
          name: 'Produto Extendido',
          preferences: ['Nova preferência'],
          features: ['Nova feature'],
        },
      ];

      const formData = {
        selectedPreferences: ['Nova preferência'],
        selectedFeatures: ['Nova feature'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        extendedProducts
      );

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('Produto Extendido');

      const originalFormData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'SingleProduct',
      };

      const originalRecommendations = recommendationService.getRecommendations(
        originalFormData,
        extendedProducts
      );

      expect(
        originalRecommendations.some((p) => p.name === 'RD Station Marketing')
      ).toBe(true);
    });
  });

  describe('Validação de comportamento e segurança de entrada', () => {
    test('Deve retornar array vazio ou lançar erro para tipo de recomendação inválido', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'InvalidType',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        mockProducts
      );

      expect(recommendations).toEqual([]);
    });

    test('Deve ignorar produtos com estruturas de preferences ou features inválidas', () => {
      const invalidProducts = [
        { name: 'Produto Inválido', preferences: 'string', features: null },
        ...mockProducts,
      ];

      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        invalidProducts
      );

      expect(recommendations.some((p) => p.name === 'Produto Inválido')).toBe(
        false
      );
    });

    test('No modo MultipleProducts, deve manter a ordem original em empates', () => {
      const tiedProducts = [
        { name: 'Produto A', preferences: ['Pref1'], features: ['Feat1'] },
        { name: 'Produto B', preferences: ['Pref1'], features: ['Feat1'] },
      ];

      const formData = {
        selectedPreferences: ['Pref1'],
        selectedFeatures: ['Feat1'],
        selectedRecommendationType: 'MultipleProducts',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        tiedProducts
      );

      expect(recommendations.map((p) => p.name)).toEqual([
        'Produto A',
        'Produto B',
      ]);
    });

    test('Produtos retornados devem ser cópias, não referências diretas', () => {
      const productsCopy = JSON.parse(JSON.stringify(mockProducts));
      const formData = {
        selectedPreferences: ['Automação de marketing'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = recommendationService.getRecommendations(
        formData,
        productsCopy
      );

      recommendations[0].name = 'Alterado';

      expect(productsCopy[recommendations[0].originalIndex].name).not.toBe(
        'Alterado'
      );
    });
  });
});
