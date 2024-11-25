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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((300 + (prop.atributoagilidade * 5)) * (nivelBase / 120))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Disparo_Triplo","REQ_IgnDef","REQ_Pos","REQ_Precisao","REQ_CVar","REQ_AGI"]
      },
      {
        id: "Disparo_Triplo--2",
        nome: "Disparo Triplo (nv. 200)",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.35,
          recarga: 0.2
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((2300 + (prop.atributoagilidade * 3)) * (nivelBase / 100))
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [2, 2]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [2, 2]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [(tipoArma == "Arma_Adaga" ? 2 : 1), (tipoArma == "Arma_Adaga" ? 2 : 1)]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return 700
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Apunhalar","REQ_Pos"]
      },
      {
        id: "Soco_Furacao--1",
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((400 + prop.atributoagilidade) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Soco_Furacao","REQ_Pos"]
      },
      {
        id: "Soco_Furacao--2",
        nome: "Soco Furacão (nv. 200)",
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1000 + prop.atributoagilidade) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Soco_Furacao","REQ_Pos"]
      },
      {
        id: "Ofensiva_Fatal--1",
        nome: "Ofensiva Fatal",
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [(tipoArma == "Arma_Adaga" ? 2 : 1), (tipoArma == "Arma_Adaga" ? 2 : 1)]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1100) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Ofensiva_Fatal","REQ_Pos","REQ_Precisao"]
      },
      {
        id: "Ofensiva_Fatal--2",
        nome: "Ofensiva Fatal (rebalance nv. 200)",
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [(tipoArma == "Arma_Adaga" ? 2 : 1), (tipoArma == "Arma_Adaga" ? 2 : 1)]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((1200 + (prop.atributoagilidade * 2)) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Ofensiva_Fatal","REQ_Pos","REQ_Precisao"]
      },
      {
        id: "Copia_Explosiva--1",
        nome: "Cópia Explosiva",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 1,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((prop.atributodestreza * 2) * parseInt(nivelClasse / 10) * parseInt(nivelBase / 120))
        },
        requisitos: ["REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Copia_Explosiva"]
      },
      {
        id: "Copia_Explosiva--2",
        nome: "Cópia Explosiva (nv. 185)",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 1,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (11 * parseInt(prop.atributodestreza / 2) * parseInt(nivelClasse / 10) * parseInt(nivelBase / 120))
        },
        requisitos: ["REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Copia_Explosiva"]
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_TCrit","REQ_TCritD","REQ_DCrit","REQ_IgnDef","REQ_ATQDuplo"]
      },
      {
        id: "Disparo_Triplo--1",
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((300 + (prop.atributoagilidade * 5)) * (nivelBase / 120))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Disparo_Triplo","REQ_IgnDef","REQ_Pos","REQ_Precisao","REQ_CVar","REQ_AGI"]
      },
      {
        id: "Disparo_Triplo--2",
        nome: "Disparo Triplo (nv. 200)",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.35,
          recarga: 0.2
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((2300 + (prop.atributoagilidade * 3)) * (nivelBase / 100))
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [2, 2]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [(tipoArma == "Arma_Adaga" ? 2 : 1), (tipoArma == "Arma_Adaga" ? 2 : 1)]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return ((1400 + (prop.atributoforca * 5)) * (nivelBase / 100))
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt(450 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_Laminas_de_Loki","REQ_IgnDef"]
      },
      {
        id: "Laminas_Retalhadoras--1",
        nome: "Lâminas Retalhadoras (adaga/espada, acerto crítico)",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["Arma_Espada1","Arma_Adaga","itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skillcritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0.7
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt(1750 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_Laminas_Retalhadoras","REQ_IgnDef","REQ_DCrit","REQ_TCrit"]
      },
      {
        id: "Laminas_Retalhadoras--2",
        nome: "Lâminas Retalhadoras (adaga/espada, sem crítico)",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["Arma_Espada1","Arma_Adaga","itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0.7
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt(1750 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_Laminas_Retalhadoras","REQ_IgnDef","REQ_DCrit","REQ_TCrit"]
      },
      {
        id: "Laminas_Retalhadoras--3",
        nome: "Lâminas Retalhadoras (katar, acerto crítico)",
        maoDireita: ["Arma_Katar"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skillcritico",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0.7
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt(1750 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_Laminas_Retalhadoras","REQ_IgnDef","REQ_DCrit","REQ_TCrit"]
      },
      {
        id: "Laminas_Retalhadoras--4",
        nome: "Lâminas Retalhadoras (katar, sem crítico)",
        maoDireita: ["Arma_Katar"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0.7
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt(1750 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_Laminas_Retalhadoras","REQ_IgnDef","REQ_DCrit","REQ_TCrit"]
      },
      {
        id: "Destruidor_de_Almas--1",
        nome: "Destruidor de Almas (adaga/espada, acerto crítico)",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["Arma_Espada1","Arma_Adaga","itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skillcritico",
          propriedade: false,
          conjuracaovariavel: 0.25,
          conjuracaofixa: 0.25,
          posconjuracao: 2,
          recarga: 0.15
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1400 + prop.atributoforca + prop.atributointeligencia) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Destruidor_de_Almas","REQ_IgnDef","REQ_DCrit","REQ_TCrit","REQ_CVar","REQ_CFix","REQ_Pos"]
      },
      {
        id: "Destruidor_de_Almas--2",
        nome: "Destruidor de Almas (adaga/espada, sem crítico)",
        maoDireita: ["Arma_Espada1","Arma_Adaga"],
        maoEsquerda: ["Arma_Espada1","Arma_Adaga","itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.25,
          conjuracaofixa: 0.25,
          posconjuracao: 2,
          recarga: 0.15
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1400 + prop.atributoforca + prop.atributointeligencia) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Destruidor_de_Almas","REQ_IgnDef","REQ_CVar","REQ_CFix","REQ_Pos"]
      },
      {
        id: "Destruidor_de_Almas--3",
        nome: "Destruidor de Almas (katar, acerto crítico)",
        maoDireita: ["Arma_Katar"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skillcritico",
          propriedade: false,
          conjuracaovariavel: 0.25,
          conjuracaofixa: 0.25,
          posconjuracao: 2,
          recarga: 0.15
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1400 + prop.atributoforca + prop.atributointeligencia) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Destruidor_de_Almas","REQ_IgnDef","REQ_DCrit","REQ_TCrit","REQ_CVar","REQ_CFix","REQ_Pos"]
      },
      {
        id: "Destruidor_de_Almas--4",
        nome: "Destruidor de Almas (katar, sem crítico)",
        maoDireita: ["Arma_Katar"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0.25,
          conjuracaofixa: 0.25,
          posconjuracao: 2,
          recarga: 0.15
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1400 + prop.atributoforca + prop.atributointeligencia) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_Destruidor_de_Almas","REQ_IgnDef","REQ_CVar","REQ_CFix","REQ_Pos"]
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
    classeBuilds: [
      {
        id: "Aegis_Inferi",
        nome: "Aegis Inferi",
        maoDireita: ["Arma_Lanca1","Arma_Espada1","Arma_Adaga","Arma_Machado1","Arma_Maca"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: 2,
          conjuracaovariavel: 1,
          conjuracaofixa: 0,
          posconjuracao: 1,
          recarga: 3
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          prop.pesoEscudo = prop.pesoEscudo ? prop.pesoEscudo : 0;
          return ((6 * prop.pesoEscudo) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Aegis_Inferi","REQ_CVar","REQ_Pos"]
      }
    ]
  },
  {
    classeID: "Classe_SH",
    classeNome: "Shura",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,0,0,1,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8],
      agi: [0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6],
      int: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6],
      des: [0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,8,8,8],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]
    },
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
    classeBuilds: [
      {
        id: "Soco_Furacao--1",
        nome: "Soco Furacão",
        maoDireita: ["Arma_Maca","Arma_Cajado1","Arma_Soqueira"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((400 + prop.atributoagilidade) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Soco_Furacao","REQ_Pos"]
      },
      {
        id: "Soco_Furacao--2",
        nome: "Soco Furacão (nv. 200)",
        maoDireita: ["Arma_Maca","Arma_Cajado1","Arma_Soqueira"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0.5,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return parseInt((1000 + prop.atributoagilidade) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Soco_Furacao","REQ_Pos"]
      }
    ]
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
    bonusClasse: {
      for: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3],
      agi: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6],
      int: [0,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,7,7,7,7,7,8,8,8,9,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,12],
      des: [0,0,0,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,8,8],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2]
    },
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
    classeBuilds: [
      {
        id: "Mammonita",
        nome: "Mammonita",
        maoDireita: ["Arma_Espada1","Arma_Adaga","Arma_Machado1","Arma_Maca"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "curta",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 0,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return 600
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DCorp","REQ_IgnDef","REQ_Mammonita"]
      }
    ]
  },
  {
    classeID: "Classe_ME",
    classeNome: "Mecânico",
    classeTipo: "ClasseT3",
    transclasse: true,
    bonusClasse: {
      for: [0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8],
      agi: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8],
      int: [0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6],
      des: [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5],
      sor: [0,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6]
    },
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
    bonusClasse: {
      for: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      agi: [0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10],
      vit: [0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6],
      int: [0,0,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9],
      des: [0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8],
      sor: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2]
    },
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
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return 100
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_TCrit","REQ_TCritD","REQ_DCrit","REQ_IgnDef"]
      },
      {
        id: "Tempestade_de_Flechas",
        nome: "Tempestade de Flechas",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3.8,
          conjuracaofixa: 0,
          posconjuracao: 0,
          recarga: 3.2
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (1800 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Tempestade_de_Flechas"]
      },
      {
        id: "Disparo_Certeiro--1",
        nome: "Disparo Certeiro (não imobilizado)",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 4,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (1000 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Disparo_Certeiro","REQ_CFix"]
      },
      {
        id: "Disparo_Certeiro--2",
        nome: "Disparo Certeiro (imobilizado)",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 4,
          conjuracaofixa: 0.5,
          posconjuracao: 1,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [
            (isOpponent("tamanhoMonstro",["0"]) ? 2 : (isOpponent("tamanhoMonstro",["1"]) ? 3 : (isOpponent("tamanhoMonstro",["2"]) ? 4 : 0))),
            (isOpponent("tamanhoMonstro",["0"]) ? 3 : (isOpponent("tamanhoMonstro",["1"]) ? 4 : (isOpponent("tamanhoMonstro",["2"]) ? 5 : 0)))
          ]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (1000 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Disparo_Certeiro","REQ_CFix"]
      },
      {
        id: "Disparo_Certeiro--3",
        nome: "Disparo Certeiro (nv.185)",
        maoDireita: ["Arma_Arco"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 2,
          conjuracaofixa: 1,
          posconjuracao: 1,
          recarga: 1
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [
            (isOpponent("tamanhoMonstro",["0"]) ? 2 : (isOpponent("tamanhoMonstro",["1"]) ? 3 : (isOpponent("tamanhoMonstro",["2"]) ? 4 : 0))),
            (isOpponent("tamanhoMonstro",["0"]) ? 3 : (isOpponent("tamanhoMonstro",["1"]) ? 4 : (isOpponent("tamanhoMonstro",["2"]) ? 5 : 0)))
          ]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (700 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Disparo_Certeiro","REQ_CFix"]
      },
    ]
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
          recarga: 5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.2) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 5.5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.4) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 6
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.6) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 6.5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.8) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 7
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 1) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Vulcao_de_Flechas",
        nome: "Vulcão de Flechas",
        maoDireita: ["Arma_Chicote","Arma_Instrumento"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3.04,
          conjuracaofixa: 0.76,
          posconjuracao: 2,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (1500 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Vulcao_de_Flechas","REQ_Pos","REQ_CVar","REQ_CFix"]
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
          recarga: 5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.2) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 5.5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.4) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 6
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.6) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 6.5
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 0.8) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
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
          recarga: 7
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [12, 12]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (((prop.atributodestreza + prop.atributoagilidade) * 1) * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Temporal_de_Mil_Flechas","REQ_Pos","REQ_CVar"]
      },
      {
        id: "Vulcao_de_Flechas",
        nome: "Vulcão de Flechas",
        maoDireita: ["Arma_Chicote","Arma_Instrumento"],
        maoEsquerda: ["itemEscudo"],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 3.04,
          conjuracaofixa: 0.76,
          posconjuracao: 2,
          recarga: 0
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (1500 * (nivelBase / 100))
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Vulcao_de_Flechas","REQ_Pos","REQ_CVar","REQ_CFix"]
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
    bonusClasse: {
      for: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],
      agi: [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6],
      vit: [0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
      int: [0,0,0,0,1,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8],
      des: [0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8],
      sor: [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5]
    },
    transclasse: false,
    classeAspdBase: 151,
    classePenEscudo: -10,
    classeArmas: [
      {
        idArma: "Arma_Pistola",
        penalidade: -5
      },
      {
        idArma: "Arma_Rifle",
        penalidade: -10
      },
      {
        idArma: "Arma_Metralhadora",
        penalidade: -3
      },
      {
        idArma: "Arma_Espingarda",
        penalidade: -30
      },
      {
        idArma: "Arma_Granadas",
        penalidade: -35
      }
    ],
    classeBuilds: [
      {
        id: "Tiro_Neutralizante",
        nome: "Tiro Neutralizante",
        maoDireita: ["Arma_Espingarda"],
        maoEsquerda: [],
        ataque: {
          tipoDano: "fisico",
          distancia: "longa",
          tipoAtaque: "skill",
          propriedade: false,
          conjuracaovariavel: 1,
          conjuracaofixa: 1,
          posconjuracao: 0,
          recarga: 2
        },
        golpes: function(prop, nivelBase, nivelClasse, tipoArma) {
          return [1, 1]
        },
        formula: function(prop, nivelBase, nivelClasse, tipoArma) {
          return (3500)
        },
        requisitos: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_IgnDef","REQ_Tiro_Neutralizante","REQ_CFix"]
      },]
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
