var classes = [
  {
    classeID: "Classe_SC",
    classeNome: "Renegado",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8],
      agi: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8],
      int: [0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6],
      des: [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4],
      sor: [0,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6]
    },
    classeAspdBase: 156,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -3
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -7
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -159
      },
      {
        idArma: "Arma_Arco",
        penalidade: -7
      }
    ],
    classeBuilds: [
      {
        id: "Arco_Critico",
        nome: "Crítico com Arco",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "basicocritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_TCrit","REQ_TCritD","REQ_DCrit","REQ_IgnDef","REQ_ATQDuplo"]
      },
      {
        id: "Melee_Critico",
        nome: "Crítico com Adaga/Espada",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "basicocritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_TCrit","REQ_DCrit","REQ_IgnDef","REQ_ATQDuplo"]
      },
      {
        id: "Disparo_Triplo",
        nome: "Disparo Triplo",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.5,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return ((300 + (prop.atributoagilidade * 5)) * (nivelBase / 120))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Disparo_Triplo","REQ_IgnDef","REQ_Pos","REQ_Precisao","REQ_CVar","REQ_AGI"]
      },
      {
        id: "Rajada_de_Flechas",
        nome: "Rajada de Flechas",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.1,
          recarga: 0,
          golpes: 2
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 190
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Rajada_de_Flechas","REQ_Precisao"]
      },
      {
        id: "Impacto_de_Tyr",
        nome: "Impacto de Tyr",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.35,
          conjuracaofixa: 0.35,
          posconjuracao: 0,
          recarga: 0,
          golpes: 2
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 500
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Impacto_de_Tyr","REQ_CVar","REQ_CFix","REQ_Precisao"]
      },
      {
        id: "Apunhalar",
        nome: "Apunhalar",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 700
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Apunhalar","REQ_Pos"]
      },
      {
        id: "Soco_Furacao",
        nome: "Soco Furacão",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return parseInt((400 + prop.atributoagilidade) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Soco_Furacao","REQ_Pos"]
      }
    ]
  },
  {
    classeID: "Classe_SC_NT",
    classeNome: "Renegado",
    classeTipo: "Classe3",
    transclasse: false,
    bonusClasse: {
      for: [0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8],
      agi: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8],
      int: [0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6],
      des: [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4],
      sor: [0,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6]
    },
    classeAspdBase: 156,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -3
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -7
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -159
      },
      {
        idArma: "Arma_Arco",
        penalidade: -7
      }
    ],
    classeBuilds: [
      {
        id: "Arco_Critico",
        nome: "Crítico com arco",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "basicocritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_TCrit","REQ_TCritD","REQ_DCrit","REQ_IgnDef","REQ_ATQDuplo"]
      },
      {
        id: "Disparo_Triplo",
        nome: "Disparo Triplo",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.5,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return ((300 + (prop.atributoagilidade * 5)) * (nivelBase / 120))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Disparo_Triplo","REQ_IgnDef","REQ_Pos","REQ_Precisao","REQ_CVar","REQ_AGI"]
      },
      {
        id: "Rajada_de_Flechas",
        nome: "Rajada de Flechas",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.1,
          recarga: 0,
          golpes: 2
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 190
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Rajada_de_Flechas","REQ_Precisao"]
      },
      {
        id: "Impacto_de_Tyr",
        nome: "Impacto de Tyr",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.35,
          conjuracaofixa: 0.35,
          posconjuracao: 0,
          recarga: 0,
          golpes: 2
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 500
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Impacto_de_Tyr","REQ_CVar","REQ_CFix","REQ_Precisao"]
      },
      {
        id: "Apunhalar",
        nome: "Apunhalar",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 700
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Apunhalar","REQ_Pos"]
      }
    ]
  },
  {
    classeID: "Classe_GX",
    classeNome: "Sicário",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,0,0,1,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8],
      agi: [0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6],
      int: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5],
      des: [0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,6,5,5,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2]
    },
    classeAspdBase: 156,
    classePenEscudo: -9,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -2
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -25
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -40
      },
      {
        idArma: "Arma_Katar",
        penalidade: -2
      }
    ],
    classeArmas2: [
      {
        idArma: "Arma_Adaga",
        penalidade: -10
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -16
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -20
      }
    ],
    classeBuilds: [
      {
        id: "Dual_Critico",
        nome: "Crítico com duas armas",
        maoDireita: ["Arma_Espada1","Arma_Adaga","Arma_Machado1"],
        maoEsquerda: ["Arma_Espada1","Arma_Adaga","Arma_Machado1","itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "basicocritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_TCrit","REQ_DCrit","REQ_IgnDef","REQ_ATQDuplo"]
      },
      {
        id: "Katar_Critico",
        nome: "Crítico com Katar",
        maoDireita: ["Arma_Katar"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "basicocritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_TCrit","REQ_DCrit","REQ_IgnDef","REQ_ATQDuplo"]
      },
      {
        id: "Impacto_Meteoro",
        nome: "Impacto Meteoro",
        maoDireita: ["Arma_Espada1","Arma_Adaga","Arma_Machado1","Arma_Katar"],
        maoEsquerda: ["Arma_Espada1","Arma_Adaga","Arma_Machado1","itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.25,
          conjuracaofixa: 0.25,
          posconjuracao: 0.5,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return 440
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Impacto_Meteoro","REQ_Pos","REQ_Precisao"]
      },
      {
        id: "Laminas_de_Loki",
        nome: "Lâminas de Loki",
        maoDireita: ["Arma_Katar"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.2,
          recarga: 0,
          golpes: 1
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return parseInt(300 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_Laminas_de_Loki","REQ_IgnDef"]
      }
    ]
  },
  {
    classeID: "Classe_RK",
    classeNome: "Cavaleiro Rúnico",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 156,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -10
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -12
      },
      {
        idArma: "Arma_Espada2",
        penalidade: -15
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -18
      },
      {
        idArma: "Arma_Machado2",
        penalidade: -20
      },
      {
        idArma: "Arma_Maca",
        penalidade: -5
      },
      {
        idArma: "Arma_Lanca1",
        penalidade: -8
      },
      {
        idArma: "Arma_Lanca2",
        penalidade: -12
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_RG",
    classeNome: "Guardião Real",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7],
      agi: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],
      vit: [0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,7,7],
      int: [0,0,0,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,5,5,6,6,6,6,6,6,6,6,6,6,6,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10],
      des: [0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3]
    },
    classeAspdBase: 156,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -7
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -5
      },
      {
        idArma: "Arma_Espada2",
        penalidade: -9
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -8
      },
      {
        idArma: "Arma_Machado2",
        penalidade: -12
      },
      {
        idArma: "Arma_Maca",
        penalidade: -4
      },
      {
        idArma: "Arma_Lanca1",
        penalidade: -10
      },
      {
        idArma: "Arma_Lanca2",
        penalidade: -10
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_SU",
    classeNome: "Shura",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 158,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Maca",
        penalidade: -5
      },
      {
        idArma: "Arma_Cajado1",
        penalidade: -10
      },
      {
        idArma: "Arma_Cajado2",
        penalidade: -12
      },
      {
        idArma: "Arma_Soqueira",
        penalidade: -1
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_AB",
    classeNome: "Arcebispo",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 151,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Maca",
        penalidade: 0
      },
      {
        idArma: "Arma_Cajado1",
        penalidade: -15
      },
      {
        idArma: "Arma_Cajado2",
        penalidade: -10
      },
      {
        idArma: "Arma_Livro",
        penalidade: 1
      },
      {
        idArma: "Arma_Soqueira",
        penalidade: -5
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_BI",
    classeNome: "Bioquímico",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 156,
    classePenEscudo: -4,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -10
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -4
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -11
      },
      {
        idArma: "Arma_Machado2",
        penalidade: -11
      },
      {
        idArma: "Arma_Maca",
        penalidade: -5
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_ME",
    classeNome: "Mecânico",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 156,
    classePenEscudo: -6,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -20
      },
      {
        idArma: "Arma_Espada1",
        penalidade: -25
      },
      {
        idArma: "Arma_Machado1",
        penalidade: -5
      },
      {
        idArma: "Arma_Machado2",
        penalidade: -8
      },
      {
        idArma: "Arma_Maca",
        penalidade: -8
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_SE",
    classeNome: "Sentinela",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 156,
    classePenEscudo: -8,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -10
      },
      {
        idArma: "Arma_Arco",
        penalidade: -9
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_TR",
    classeNome: "Trovador",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,7,7,7],
      agi: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5],
      vit: [0,0,0,1,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7],
      int: [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9],
      des: [0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,8],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1]
    },
    classeAspdBase: 156,
    classePenEscudo: -7,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -12
      },
      {
        idArma: "Arma_Arco",
        penalidade: -10
      },
      {
        idArma: "Arma_Instrumento",
        penalidade: -5
      }
    ],
    classeBuilds: [
      {
        id: "Temporal_de_Mil_Flechas--1",
        nome: "Temporal de Mil Flechas nv.1",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 1.5,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 5,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.2) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--2",
        nome: "Temporal de Mil Flechas nv.2",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 2,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 5.5,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.4) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--3",
        nome: "Temporal de Mil Flechas nv.3",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 2.5,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 6,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.6) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--4",
        nome: "Temporal de Mil Flechas nv.4",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 6.5,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.8) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--5",
        nome: "Temporal de Mil Flechas nv.5",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3.5,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 7,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 1) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
    ]
  },
  {
    classeID: "Classe_MU",
    classeNome: "Musa",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],
      agi: [0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,6,6,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7],
      int: [0,0,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9],
      des: [0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]
    },
    classeAspdBase: 156,
    classePenEscudo: -7,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -12
      },
      {
        idArma: "Arma_Arco",
        penalidade: -10
      },
      {
        idArma: "Arma_Chicote",
        penalidade: -5
      }
    ],
    classeBuilds: [
      {
        id: "Temporal_de_Mil_Flechas--1",
        nome: "Temporal de Mil Flechas nv.1",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 1.5,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 5,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.2) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--2",
        nome: "Temporal de Mil Flechas nv.2",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 2,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 5.5,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.4) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--3",
        nome: "Temporal de Mil Flechas nv.3",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 2.5,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 6,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.6) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--4",
        nome: "Temporal de Mil Flechas nv.4",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 6.5,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.8) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Temporal_de_Mil_Flechas--5",
        nome: "Temporal de Mil Flechas nv.5",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3.5,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 7,
          golpes: 12
        },
        formula: function(prop, nivelBase, nivelClasse) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 1) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_ATQDuplo","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
    ]
  },
  {
    classeID: "Classe_WL",
    classeNome: "Arcano",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 151,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -7
      },
      {
        idArma: "Arma_Cajado1",
        penalidade: -5
      },
      {
        idArma: "Arma_Cajado2",
        penalidade: -5
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_SO",
    classeNome: "Feiticeiro",
    classeTipo: "ClasseT3",
    transclasse: true,
    classeAspdBase: 156,
    classePenEscudo: -5,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -10
      },
      {
        idArma: "Arma_Cajado1",
        penalidade: -5
      },
      {
        idArma: "Arma_Cajado2",
        penalidade: -5
      },
      {
        idArma: "Arma_Livro",
        penalidade: -5
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_IN",
    classeNome: "Insurgente",
    classeTipo: "ClasseExp2",
    transclasse: false,
    classeAspdBase: 146,
    classePenEscudo: -4,
    classeArmas: [
      {
        idArma: "Arma_Pistola",
        penalidade: 1
      },
      {
        idArma: "Arma_Rifle",
        penalidade: -4
      },
      {
        idArma: "Arma_Metralhadora",
        penalidade: 3
      },
      {
        idArma: "Arma_Espingarda",
        penalidade: -24
      },
      {
        idArma: "Arma_Granadas",
        penalidade: -29
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_KA",
    classeNome: "Kagerou",
    classeTipo: "ClasseExp2",
    transclasse: false,
    classeAspdBase: 156,
    classePenEscudo: -3,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -5
      },
      {
        idArma: "Arma_Shuriken",
        penalidade: -10
      }
    ],
    classeArmas2: [
      {
        idArma: "Arma_Adaga",
        penalidade: -11
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_OB",
    classeNome: "Oboro",
    classeTipo: "ClasseExp2",
    transclasse: false,
    classeAspdBase: 156,
    classePenEscudo: -3,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -5
      },
      {
        idArma: "Arma_Shuriken",
        penalidade: -10
      }
    ],
    classeArmas2: [
      {
        idArma: "Arma_Adaga",
        penalidade: -11
      }
    ],
    classeBuilds: []
  },
  {
    classeID: "Classe_ME",
    classeNome: "Mestre Estelar",
    classeTipo: "ClasseExp2",
    transclasse: false,
    classeAspdBase: 156,
    classePenEscudo: -6,
    classeArmas: [
      {
        idArma: "Arma_Livro",
        penalidade: -5
      }
    ],
    classeArmas2: [],
    classeBuilds: []
  },
  {
    classeID: "Classe_CE",
    classeNome: "Ceifador de Almas",
    classeTipo: "ClasseExp2",
    transclasse: false,
    classeAspdBase: 156,
    classePenEscudo: -6,
    classeArmas: [
      {
        idArma: "Arma_Adaga",
        penalidade: -10
      },
      {
        idArma: "Arma_Cajado1",
        penalidade: -10
      },
      {
        idArma: "Arma_Cajado2",
        penalidade: -10
      }
    ],
    classeArmas2: [],
    classeBuilds: []
  },
  {
    classeID: "Classe_DO",
    classeNome: "Invocador",
    classeTipo: "Doram",
    transclasse: false,
    classeAspdBase: 156,
    classePenEscudo: -7,
    classeArmas: [
      {
        idArma: "Arma_Cajado1",
        penalidade: -20
      }
    ],
    classeBuilds: []
  }
];


var buildsClasses = [];
buildsClasses["Classe_SC"] = [
  { id: "Arco_Critico", nome: "Crítico com arco" },
  { id: "Disparo_Triplo", nome: "Disparo Triplo" },
  { id: "Rajada_de_Flechas", nome: "Rajada de Flechas" },
  { id: "Impacto_de_Tyr", nome: "Impacto de Tyr" },
  { id: "Apunhalar", nome: "Apunhalar" }
];
buildsClasses["Classe_GX"] = [
  { id: "Impacto_Meteoro", nome: "Impacto Meteoro" },
  { id: "Laminas_de_Loki", nome: "Lâminas de Loki" },
  { id: "Lamento_de_Loki", nome: "Lamento de Loki" },
  { id: "Katar_Critico", nome: "Crítico com katar" },
  { id: "Dual_Critico", nome: "Crítico com duas armas" }
];

var buildRequisitos = [];
buildRequisitos["Classe_SC--Arco_Critico"] = [
  ["Arma_Arco"],
  ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_TCrit","REQ_TCritD","REQ_DCrit","REQ_IgnDef"]
];
