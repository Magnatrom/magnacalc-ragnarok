let encantamentosArmasBrasilis = [
  ["29361","4881","4825","29446","4831","4841"]
];

let encantamentosMalangdoFisico = ["4811","4810","4808","4820","4821","4822","4823","4818","4817","4816","4843","4844","4832","29135","4815","4702","4703","4704","4705","4742","4743","4744","4745","4864","4865","4866","4807"];
let encantamentosMalangdoDistancia = ["4818","4811","4810","4832","4833","4834","4835","4836","4837","29135","29136","29137","29138","29139","4815","4732","4733","4734","4735","4752","4753","4754","4755","4869","4872","4873","4807"];
let encantamentosMalangdoMagico = ["4818","4811","4810","4832","29135","4815","4814","4813","4812","4826","4827","4712","4713","4714","4715","4722","4723","4724","4725","4869","4872","4873","4760","4761","29445","29446"];

var items = [
  {
    itemId:     "450158",
    itemNome:   "[MEGA] Robe Gelado [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico"],
    slots: 1,
    encantamentos: [
      ["4706","4736","4726","4756","4948","29135","4832","4811"],
      ["4706","4736","4726","4756","4948","29135","4832","4811","4746","4819","4766","4767","4863","4864","4818","4817","4949","29136","4833","4810"],
      ["4706","4736","4726","4756","4948","29135","4832","4811","4746","4819","4766","4767","4863","4864","4818","4817","4949","29136","4833","4810","4853","4854","4855","4856","4857","4858","4865","4950","4869","4872","4834","4809"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 15,
        "spp": 15,
        "aspdp": 10,
        "danofisicotamanho": (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0),
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? ((hasCombo(slot, itemId, tipoItem, [["4419"]]) ? (getItemRefino(slot) * 8) : 0) + (hasCombo(slot, itemId, tipoItem, [["4481"]]) ? (getItemRefino(slot) * 5) : 0)) : 0
      }
    }
  },
  {
    itemId:     "450286",
    itemNome:   "[MEGA] Vestes de Cardeal [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_Precisao"],
    slots: 1,
    encantamentos: [
      ["4706","4736","4726","4756","4948","29135","4832","4811"],
      ["4706","4736","4726","4756","4948","29135","4832","4811","4746","4819","4766","4767","4863","4864","4818","4817","4949","29136","4833","4810"],
      ["4706","4736","4726","4756","4948","29135","4832","4811","4746","4819","4766","4767","4863","4864","4818","4817","4949","29136","4833","4810","4853","4854","4855","4856","4857","4858","4865","4950","4869","4872","4834","4809"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "danofisicotamanho": 40,
        "danomagicotamanho": 40,
        "precisaoperfeita": getItemRefino(slot) >= 7 ? 25 : 0,
      }
    }
  },
  {
    itemId:     "480064",
    itemNome:   "Abafador de Tempestades",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["Classe_MU","Classe_TR"],
    itemBonus: ["REQ_Temporal_de_Mil_Flechas","REQ_Precisao"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "danodistancia": 22 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "precisaoperfeita": 20,
        "posconjuracao": -10,
        "recargade--Temporal_de_Mil_Flechas": -2 + (hasCombo(slot, itemId, tipoItem, [["1746"],["15368"]]) ? 2 : 0),
        "danode--Temporal_de_Mil_Flechas": 10
      }
    }
  },
  {
    itemId:     "18180",
    itemNome:   "AC-B44-OS [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 190,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Disparo_Triplo"],
    slots: 2,
    bonusaleatorios: [
      ["atq_5-60","crit_3-20","precisao_3-20","atqarmap_1-15","danofisicopropriedade_3-25"],
      ["esquiva_5-45","aspdf_1-2","aspdp_3-20","danocritico_3-20","danodistancia_3-20","danofisicotamanho_3-20","danofisicoraca_3-20"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 135,
        "danodistancia": 5 + (getItemRefino(slot) >= 11 ? 10 : 0),
        "aspdp": getItemRefino(slot) >= 7 ? 7 : 0,
        "danode--Disparo_Triplo": getItemRefino(slot) >= 9 ? 15 : 0
      }
    }
  },
  {
    itemId:     "400054",
    itemNome:   "Acessório Extravagante [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_CFix","REQ_Petalas_Flamejantes","REQ_Lanca_Congelante","REQ_Lamina_de_Vento","REQ_Chamas_de_Hela","REQ_Cometa"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": (parseInt(getItemRefino(slot) / 2) * 20) + (hasCombo(slot, itemId, tipoItem, [["13493","26151"]]) ? 30 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0),
        "danomagiconeutro": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicofogo": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["28755"]]) ? 5 : 0),
        "danomagicovento": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["28755"]]) ? 5 : 0),
        "danomagicoterra": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoagua": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["28755"]]) ? 5 : 0),
        "danomagicosagrado": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicosombrio": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoveneno": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicofantasma": (getItemRefino(slot) >= 9 ? 15 : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danomagicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "danode--Petalas_Flamejantes": (hasCombo(slot, itemId, tipoItem, [["28755"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "danode--Lanca_Congelante": (hasCombo(slot, itemId, tipoItem, [["28755"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "danode--Lamina_de_Vento": (hasCombo(slot, itemId, tipoItem, [["28755"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "danode--Chamas_de_Hela": (hasCombo(slot, itemId, tipoItem, [["13493"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "danode--Cometa": (hasCombo(slot, itemId, tipoItem, [["26151"]]) ? (parseInt(getItemRefino(slot) / 2) * 5) : 0)
      }
    }
  },
  {
    itemId:     "510006",
    itemNome:   "Adaga Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 165,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_Acerto_de_Contas"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino("itemMaoDireita") / 2) * 10,
        "aspdp": parseInt(getItemRefino("itemMaoDireita") / 3) * 2,
        "danode--Acerto_de_Contas": getItemRefino("itemMaoDireita") >= 9 ? 20 : 0,
        "posconjuracao": getItemRefino("itemMaoDireita") >= 11 ? (-7) : 0,
      }
    }
  },
  {
    itemId:     "13061",
    itemNome:   "Adaga Negra [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 142,
    itemArmaNivel: 3,
    itemNivel:  102,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_Acerto_de_Contas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Acerto_de_Contas": 30 + (Math.max(getItemRefino(slot) - 5, 0) * 2)
      }
    }
  },
  {
    itemId:     "510020",
    itemNome:   "Adaga Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 205,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_Acerto_de_Contas"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino("itemMaoDireita") / 2) * 15,
        "aspdp": parseInt(getItemRefino("itemMaoDireita") / 3) * 2,
        "danode--Acerto_de_Contas": getItemRefino("itemMaoDireita") >= 7 ? 25 : 0,
        "posconjuracao": (getItemRefino("itemMaoDireita") >= 9 ? (-7) : 0) + (getItemRefino("itemMaoDireita") >= 11 ? (-7) : 0),
        "danomelee": (getItemRefino("itemMaoDireita") >= 11 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "28705",
    itemNome:   "Adaga Rubi [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 55,
    itemArmaNivel: 3,
    itemNivel:  70,
    itemPropriedade: 0,
    itemClasses: ["Classe_SA","Classe_LO","Classe_RK","Classe_RK_NT","Classe_PA","Classe_RG","Classe_RG_NT","Classe_CR","Classe_BI","Classe_BI_NT","Classe_MF","Classe_MC","Classe_MC_NT","Classe_SX","Classe_GX","Classe_GX_NT","Classe_ST","Classe_SC","Classe_SC_NT","Classe_SN","Classe_SE","Classe_SE_NT","Classe_MI","Classe_TR","Classe_TR_NT","Classe_GY","Classe_MU","Classe_MU_NT","Classe_AQ","Classe_AR","Classe_AR_NT","Classe_PR","Classe_FE","Classe_FE_NT","Classe_ES","Classe_NI","Classe_OB","Classe_KA"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt((getNivelBase() - 70) / 10) * 5) + Math.pow(Math.min(getItemRefino(slot), 15), 2),
        "atqm": parseInt(Math.pow(Math.min(getItemRefino(slot), 15), 2) / 2)
      }
    }
  },
  {
    itemId:     "28706",
    itemNome:   "Adaga Sobrenatural [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 105,
    itemArmaNivel: 4,
    itemNivel:  160,
    itemPropriedade: 0,
    itemClasses: ["Classe_SA","Classe_LO","Classe_RK","Classe_RK_NT","Classe_PA","Classe_RG","Classe_RG_NT","Classe_CR","Classe_BI","Classe_BI_NT","Classe_MF","Classe_MC","Classe_MC_NT","Classe_SX","Classe_GX","Classe_GX_NT","Classe_ST","Classe_SC","Classe_SC_NT","Classe_SN","Classe_SE","Classe_SE_NT","Classe_MI","Classe_TR","Classe_TR_NT","Classe_GY","Classe_MU","Classe_MU_NT","Classe_AQ","Classe_AR","Classe_AR_NT","Classe_PR","Classe_FE","Classe_FE_NT","Classe_ES","Classe_NI","Classe_OB","Classe_KA"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["atqarmap_1-10","drake","danofisicopropriedade_1-20"],
      ["danofisicochefe_1-20","danofisicoraca_1-20","ignoredef_1-30"],
      ["atributoforca_1-10","atributoagilidade_1-10","atributointeligencia_1-10","atq_1-50","atqm_1-50","posconjuracao_1-20","aspdf_1-5","aspdp_1-5","conjuracaovariavel_1-20"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": Math.pow(Math.min(getItemRefino(slot), 15), 2),
        "atqm": parseInt(Math.pow(Math.min(getItemRefino(slot), 15), 2) / 2)
      }
    }
  },
  {
    itemId:     "19437",
    itemNome:   "Adorno Florido",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 40 + (getAtributoBase("sor") >= 90 ? 60 : 0) + (getAtributoBase("sor") >= 125 ? 80 : 0),
        "danocritico": 5 + (getAtributoBase("sor") >= 90 ? 10 : 0) + (getAtributoBase("sor") >= 125 ? 20 : 0)
      }
    }
  },
  {
    itemId:     "1918",
    itemNome:   "Alaúde Oriental",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Instrumento",
    itemArmaATQ: 150,
    itemArmaNivel: 4,
    itemNivel:  65,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Vulcao_de_Flechas": 10,
        "danode--Flecha_Melodica": 10
      }
    }
  },
  {
    itemId:     "2913",
    itemNome:   "Algemas de Presidiário [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  10,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5 + (hasCombo(slot, itemId, tipoItem, [["2295"]]) ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["2655","28388"]]) ? 10 : 0)
      }
    }
  },
  {
    itemId:     "28534",
    itemNome:   "Amuleto da Coragem [1]",
    itemTipo:   "itemAcessorioE",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_CVar","REQ_Aspd","REQ_Pos","REQ_CFix"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 3,
        "danomagicop": 3,
        "conjuracaovariavel": -5,
        "aspdp": 5
      }
    }
  },
  {
    itemId:     "28535",
    itemNome:   "Amuleto da Sabedoria [1]",
    itemTipo:   "itemAcessorioD",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_DDist","REQ_DMagico","REQ_Pos","REQ_CFix"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 3,
        "danodistancia": 3,
        "danomagicopropriedade": 3,
        "aspdp": 5,
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["28534"]])) ? -3 : 0,
        "conjuracaofixas": (hasCombo(slot, itemId, tipoItem, [["28534"]])) ? -0.1 : 0,
      }
    }
  },
  {
    itemId:     "32263",
    itemNome:   "Anel da Égide [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico","REQ_Aegis_Inferi","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 10,
        "atributointeligencia": 10,
        "atributodestreza": 10,
        "danofisicop": 5,
        "atq": 100,
        "posconjuracao": -30,
        "recargade--Aegis_Inferi": -1.5,
        "variavelfde--Aegis_Inferi": -0.5
      }
    }
  },
  {
    itemId:     "490290",
    itemNome:   "Anel de Ameretat [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd","REQ_HP","REQ_SP","REQ_Precisao","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 10 + (hasCombo(slot, itemId, tipoItem, [["4853"]]) ? 30 : 0),
        "danomagicop": 10 + (hasCombo(slot, itemId, tipoItem, [["4856"]]) ? 30 : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["4854"]]) ? 15 : 0),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["4855"]]) ? 25 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["4855"]]) ? 25 : 0),
        "precisaoperfeita": (hasCombo(slot, itemId, tipoItem, [["4857"]]) ? 25 : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["4858"]]) ? (-30) : 0)
      }
    }
  },
  {
    itemId:     "28596",
    itemNome:   "Anel de Brinquedo [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SA","Classe_RK"],
    itemBonus: ["REQ_DFisico","REQ_FOR","REQ_AGI","REQ_VIT","REQ_Impacto_de_Tyr","REQ_Golpe_Fulminante"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50 + (hasCombo(slot, itemId, tipoItem, [["16074"]]) ? 100 : 0),
        "atributoforca": 10,
        "atributoagilidade": 10,
        "atributovitalidade": 10,
        "danode--Impacto_de_Tyr": (parseInt(getNivelBase() / 5) * 3) + (hasCombo(slot, itemId, tipoItem, [["16074"]]) ? 50 : 0),
        "danode--Golpe_Fulminante": parseInt(getNivelBase() / 2)
      }
    }
  },
  {
    itemId:     "2729",
    itemNome:   "Anel de Diabolus [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  1,
    itemClasses: ["Classe_RK","Classe_RG","Classe_BI","Classe_ME","Classe_SC","Classe_GX"],
    itemBonus: ["REQ_HP","REQ_Cura","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 100,
        "spf": 100,
        "danofisicoalvo": (isOpponent("idMonstro", ["1917"])) ? 10 : 0
      }
    }
  },
  {
    itemId:     "32205",
    itemNome:   "Anel de Esmeralda [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_AGI","REQ_DES","REQ_VIT","REQ_Rajada_de_Flechas","REQ_Chuva_de_Flechas","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "atributoagilidade": 5,
        "atributodestreza": 5,
        "atributovitalidade": 5,
        "danode--Rajada_de_Flechas": getNivelBase(),
        "danode--Chuva_de_Flechas": getNivelBase(),
        "danode--Temporal_de_Mil_Flechas": parseInt(getNivelBase() / 10)
      }
    }
  },
  {
    itemId:     "32258",
    itemNome:   "Anel de Júpiter [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": (slot == "itemAcessorioE") ? (parseInt(getAtributoBase("vit") / 10) * 2) : 0,
        "spp": (slot == "itemAcessorioE") ? (parseInt(getAtributoBase("vit") / 10) * 2) : 0,
        "atq": (slot == "itemAcessorioD") ? (parseInt(getAtributoBase("sor") / 10) * 15) : 0,
        "atqm": (slot == "itemAcessorioD") ? (parseInt(getAtributoBase("sor") / 10) * 15) : 0,
        "danofisicochefe": (slot == "itemAcessorioD" && getAtributoBase("sor") >= 125) ? 15 : 0
      }
    }
  },
  {
    itemId:     "2963",
    itemNome:   "Anel de Reforço Físico [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 5,
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["15074"]])) ? -5 : 0,
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["15073"]])) ? 5 : 0
      }
    }
  },
  {
    itemId:     "490068",
    itemNome:   "Anel de Vênus [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_CFix","REQ_DFisico","REQ_DMagico","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": (slot == "itemAcessorioD") ? (parseInt(getAtributoBase("des") / 10) * 1) : 0,
        "conjuracaofixap": (slot == "itemAcessorioD" && getAtributoBase("des") >= 125) ? (-70) : 0,
        "danofisicop": (slot == "itemAcessorioE") ? (parseInt(getAtributoBase("agi") / 10) * 1) : 0,
        "danomagicop": (slot == "itemAcessorioE") ? (parseInt(getAtributoBase("agi") / 10) * 1) : 0,
        "posconjuracao": (slot == "itemAcessorioE" && getAtributoBase("agi") >= 125) ? (-25) : 0
      }
    }
  },
  {
    itemId:     "490076",
    itemNome:   "Anel Distorcido",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 10,
        "danomagicop": 10
      }
    }
  },
  {
    itemId:     "28505",
    itemNome:   "Anel do Capiroto [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico","REQ_Aspd","REQ_HP","REQ_CVar","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 5 + (hasCombo(slot, itemId, tipoItem, [["4908"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4909"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4910"]])) ? 5 : 0,
        "danomagicop": 5 + (hasCombo(slot, itemId, tipoItem, [["4911"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4912"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4913"]])) ? 5 : 0,
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["4914"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4915"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4910"]])) ? 5 : 0,
        "hpp": (hasCombo(slot, itemId, tipoItem, [["4917"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4918"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4919"]])) ? 5 : 0,
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["4920"]])) ? -5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4921"]])) ? -5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4922"]])) ? -5 : 0,
        "danocritico": (hasCombo(slot, itemId, tipoItem, [["4923"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4924"]])) ? 5 : 0 + (hasCombo(slot, itemId, tipoItem, [["4925"]])) ? 5 : 0
      }
    }
  },
  {
    itemId:     "32243",
    itemNome:   "Anel do Desbravador [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_CVar","REQ_DMagico","REQ_CFix"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": 1,
        "conjuracaovariavel": (-20) + (hasCombo(slot, itemId, tipoItem, [["19393"]]) ? -5 : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["19393"]]) ? 30 : 0),
        "atqm": (hasCombo(slot, itemId, tipoItem, [["19393"]]) ? 30 : 0),
        "conjuracaofixas": (hasCombo(slot, itemId, tipoItem, [["19393"]]) ? (-0.2) : 0),
        "danofisicochefe": (hasCombo(slot, itemId, tipoItem, [["19393"]]) ? 20 : 0),
        "danomagicochefe": (hasCombo(slot, itemId, tipoItem, [["19393"]]) ? 20 : 0)
      }
    }
  },
  {
    itemId:     "2988",
    itemNome:   "Anel do Novo Oz [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  130,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": -25
      }
    }
  },
  {
    itemId:     "28517",
    itemNome:   "Anel do Rei Abissal [1]",
    itemTipo:   "itemAcessorio",
    itemNivel: 130,
    itemClasses: ["Classe_GX"],
    itemBonus: ["REQ_Laminas_de_Loki","REQ_Castigo_de_Loki"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "atributoagilidade": 1,
        "danode--Laminas_de_Loki": parseInt(getNivelBase() / 3),
        "danode--Castigo_de_Loki": parseInt(getNivelBase() / 10),
      }
    }
  },
  {
    itemId:     "32221",
    itemNome:   "Anel do Senhor do Tempo [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_CVar","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": (-10) + ((hasCombo(slot, itemId, tipoItem, [["15383"],["20939"],["22204"]])) ? -10 : 0),
        "aspdp": 10,
        "aspdf": (hasCombo(slot, itemId, tipoItem, [["15383"],["20939"],["22204"]])) ? 2 : 0
      }
    }
  },
  {
    itemId:     "490193",
    itemNome:   "Anel do Viajante [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_MU","Classe_TR"],
    itemBonus: ["REQ_DFisico","REQ_Temporal_de_Mil_Flechas","REQ_Precisao"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 10,
        "danode--Temporal_de_Mil_Flechas": parseInt(Math.min(getNivelBase(), 150) / 3),
        "hpp": 10,
        "precisaoperfeita": 15,
        "danofisicochefe": 15
      }
    }
  },
  {
    itemId:     "28561",
    itemNome:   "Anel Dracônico do Veterano [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_HP","REQ_SP","REQ_Impacto_de_Tyr","REQ_Golpe_Fulminante","REQ_Furia_do_Furacao"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "atq": getAtributoBase("for") >= 120 ? 50 : 0,
        "hpp": getAtributoBase("for") >= 120 ? 5 : 0,
        "spp": getAtributoBase("for") >= 120 ? 5 : 0,
        "danode--Impacto_de_Tyr": hasCombo(slot, itemId, tipoItem, [["22129"],["1188","21024"]]) ? ((getItemRefino("itemMaoDireita") >= 9) ? 100 : 0 + (getItemRefino("itemMaoDireita") >= 11) ? 100 : 0) : 0,
        "danode--Golpe_Fulminante": hasCombo(slot, itemId, tipoItem, [["22129"],["1188","21024"]]) ? ((getItemRefino("itemMaoDireita") >= 9) ? 100 : 0 + (getItemRefino("itemMaoDireita") >= 11) ? 100 : 0) : 0,
        "danode--Furia_do_Furacao": hasCombo(slot, itemId, tipoItem, [["22129"],["1384","28114"]]) ? ((getItemRefino("itemMaoDireita") >= 9) ? 20 : 0 + (getItemRefino("itemMaoDireita") >= 11) ? 20 : 0) : 0,
        "recargade--Furia_do_Furacao": hasCombo(slot, itemId, tipoItem, [["22129"],["1384","28114"]]) ? -0.5 : 0,
        "crit": (hasCombo(slot, itemId, tipoItem, [["22129"],["1548","16056"]]) && (isOpponent("racaMonstro", ["3","5","7"]))) ? 50 : 0
      }
    }
  },
  {
    itemId:     "490037",
    itemNome:   "Anel Obscuro [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 10,
        "atributoagilidade": 10,
        "atributodestreza": 10,
        "posconjuracao": -30,
        "spp": 15,
        "aspdf": 2,
        "atq": 200
      }
    }
  },
  {
    itemId:     "28379",
    itemNome:   "Anel Sombrio [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Disparo_Triplo","REQ_Apunhalar"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Apunhalar": getNivelBase() * 2,
        "danode--Disparo_Triplo": hasCombo(slot, itemId, tipoItem, [["28379"]]) ? parseInt(getNivelBase() / 3) : 0
      }
    }
  },
  {
    itemId:     "28594",
    itemNome:   "Anel Temporal [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_Pos","REQ_CVar","REQ_Precisao","REQ_DCrit","REQ_FOR","REQ_INT","REQ_DES","REQ_SOR"],
    slots: 1,
    encantamentos: [
      ["4818","4817","4815","4814","4832","4833","4869","4872","4811","4810","4803","4804","4805","4850","4897","4767"],
      ["4818","4817","4815","4814","4832","4833","4869","4872","4811","4810","4803","4804","4805","4850","4897","4767"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10 + (hasCombo(slot, itemId, tipoItem, [["4875"]]) ? 10 : 0),
        "spp": 10 + (hasCombo(slot, itemId, tipoItem, [["4876"]]) ? 10 : 0),
        "atq": 50,
        "atqm": 50,
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["4875"]]) ? 40 : 0,
        "posconjuracao": hasCombo(slot, itemId, tipoItem, [["4877"]]) ? -30 : 0,
        "esquiva": hasCombo(slot, itemId, tipoItem, [["4877"]]) ? 40 : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["4878"]]) ? -20 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["4876"]]) ? 40 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["4879"]]) ? 40 : 0,
        "precisao": hasCombo(slot, itemId, tipoItem, [["4879"]]) ? 50 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["4880"]]) ? 40 : 0,
        "danocritico": hasCombo(slot, itemId, tipoItem, [["4880"]]) ? 30 : 0
      }
    }
  },
  {
    itemId:     "1701",
    itemNome:   "Arco [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 15,
    itemArmaNivel: 1,
    itemNivel:  4,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {}
    }
  },
  {
    itemId:     "1702",
    itemNome:   "Arco [4]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 15,
    itemArmaNivel: 1,
    itemNivel:  4,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 4,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {}
    }
  },
  {
    itemId:     "18170",
    itemNome:   "Arco Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 180,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Temporal_de_Mil_Flechas"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino("itemMaoDireita") / 2) * 10,
        "danodistancia": parseInt(getItemRefino("itemMaoDireita") / 3) * 4,
        "danode--Temporal_de_Mil_Flechas": getItemRefino("itemMaoDireita") >= 9 ? 10 : 0,
        "recargade--Temporal_de_Mil_Flechas": getItemRefino("itemMaoDireita") >= 11 ? -2 : 0,
      }
    }
  },
  {
    itemId:     "1732",
    itemNome:   "Arco da Terra [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 105,
    itemArmaNivel: 3,
    itemNivel:  55,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1756"]]) ? 25 : 0
      }
    }
  },
  {
    itemId:     "18123",
    itemNome:   "Arco das Tempestades [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 160,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 30,
        "recargade--Temporal_de_Mil_Flechas": -2
      }
    }
  },
  {
    itemId:     "1718",
    itemNome:   "Arco de Caça",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 125,
    itemArmaNivel: 3,
    itemNivel:  33,
    itemPropriedade: 0,
    itemClasses: ["Classe_SE"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1774"]]) ? 25 : 0
      }
    }
  },
  {
    itemId:     "1726",
    itemNome:   "Arco de Caça [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 125,
    itemArmaNivel: 3,
    itemNivel:  33,
    itemPropriedade: 0,
    itemClasses: ["Classe_SE"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1774"]]) ? 25 : 0
      }
    }
  },
  {
    itemId:     "1743",
    itemNome:   "Arco de Caça Glorioso",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 100,
    itemArmaNivel: 4,
    itemNivel:  80,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "ignoredef": isOpponent("racaMonstro", ["10","5"]) ? 20 : 0 + (isOpponent("racaMonstro", ["10","5"]) && getItemRefino("itemMaoDireita") >= 6) ? 5 : 0,
        "danofisicoraca": isOpponent("racaMonstro", ["10","5"]) ? 55 : 0 + (getItemRefino("itemMaoDireita") >= 6 ? Math.pow(getItemRefino("itemMaoDireita") - 4, 2) : 0),
        "danocritico": Math.min(getItemRefino("itemMaoDireita"), 10) * 2,
        "danode--Rajada_de_Flechas": getItemRefino("itemMaoDireita") >= 9 ? 20 : 0
      }
    }
  },
  {
    itemId:     "18119",
    itemNome:   "Arco de Cinzas [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 180,
    itemArmaNivel: 4,
    itemNivel:  120,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_MU","Classe_TR"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 6,
        "atributovitalidade": 6,
        "atributosorte": -6,
      }
    }
  },
  {
    itemId:     "18133",
    itemNome:   "Arco de Iansã [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["8"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["40","41","42","43"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0)
      }
    }
  },
  {
    itemId:     "1734",
    itemNome:   "Arco de Orc",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemNivel:  65,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1753"]]) ? 50 : 0
      }
    }
  },
  {
    itemId:     "18115",
    itemNome:   "Arco de Orc [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemPropriedade: 0,
    itemNivel:  65,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1753"]]) ? 50 : 0
      }
    }
  },
  {
    itemId:     "18142",
    itemNome:   "Arco de Oxóssi [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["2","9"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0)
      }
    }
  },
  {
    itemId:     "18144",
    itemNome:   "Arco de Oxum [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["0","3"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0)
      }
    }
  },
  {
    itemId:     "18152",
    itemNome:   "Arco de Xangô [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["5","6"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["30","31","32","33","40","41","42","43"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1750"]]) ? 15 : 0)
      }
    }
  },
  {
    itemId:     "18125",
    itemNome:   "Arco Demoníaco [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 130,
    itemArmaNivel: 4,
    itemNivel:  80,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 2,
    encantamentos: [encantamentosMalangdoDistancia, encantamentosMalangdoDistancia],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": getItemRefino(slot) >= 9 ? 1 : 0,
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1767"]]) ? 50 : 0
      }
    }
  },
  {
    itemId:     "1733",
    itemNome:   "Arco do Vendaval [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 95,
    itemArmaNivel: 3,
    itemNivel:  55,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1755"]]) ? 25 : 0
      }
    }
  },
  {
    itemId:     "1746",
    itemNome:   "Arco Élfico [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 160,
    itemArmaNivel: 3,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SE","Classe_MU","Classe_TR"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1755"]]) ? 50 : 0
      }
    }
  },
  {
    itemId:     "18122",
    itemNome:   "Arco Gigante [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 195,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_SE"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": -50,
        "danodistancia": 40,
        "aspdp": -15
      }
    }
  },
  {
    itemId:     "1731",
    itemNome:   "Arco Glacial [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 100,
    itemArmaNivel: 3,
    itemNivel:  55,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1754"]]) ? 25 : 0
      }
    }
  },
  {
    itemId:     "1730",
    itemNome:   "Arco Incendiário [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 95,
    itemArmaNivel: 3,
    itemNivel:  55,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["1752"]]) ? 25 : 0
      }
    }
  },
  {
    itemId:     "700069a",
    itemNome:   "Arco Moderno [1] (bRO)",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 160,
    itemArmaATQM: 170,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    slots: 1,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_Disparo_Triplo"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Disparo_Triplo": parseInt(Math.min(getNivelBase(), 150) / 10) * 5,
        "aspdp": parseInt(getItemRefino(slot) / 2) * 2,
        "atributoagilidade": parseInt(getItemRefino(slot) / 2) * 3,
        "atributodestreza": parseInt(getItemRefino(slot) / 2) * 3,
      }
    }
  },
  {
    itemId:     "700069b",
    itemNome:   "Arco Moderno [1] (bRO caso coloquem encantamentos de Malangdo)",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 160,
    itemArmaATQM: 170,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    slots: 1,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia], [...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_Disparo_Triplo"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Disparo_Triplo": parseInt(Math.min(getNivelBase(), 150) / 10) * 5,
        "aspdp": parseInt(getItemRefino(slot) / 2) * 2,
        "atributoagilidade": parseInt(getItemRefino(slot) / 2) * 3,
        "atributodestreza": parseInt(getItemRefino(slot) / 2) * 3,
      }
    }
  },
  {
    itemId:     "700069c",
    itemNome:   "Arco Moderno [1] (jRO)",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 160,
    itemArmaATQM: 170,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    slots: 1,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_Disparo_Triplo"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Disparo_Triplo": getNivelBase(),
        "atributoagilidade": getItemRefino(slot) * 3,
        "atributodestreza": getItemRefino(slot) * 3,
      }
    }
  },
  {
    itemId:     "700013",
    itemNome:   "Arco Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 210,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Temporal_de_Mil_Flechas"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino("itemMaoDireita") / 2) * 15,
        "danodistancia": (parseInt(getItemRefino("itemMaoDireita") / 3) * 4) + (getItemRefino("itemMaoDireita") >= 11 ? 15 : 0),
        "danode--Temporal_de_Mil_Flechas": (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0) + (getItemRefino("itemMaoDireita") >= 11 ? 10 : 0),
        "recargade--Temporal_de_Mil_Flechas": getItemRefino("itemMaoDireita") >= 7 ? -2 : 0,
      }
    }
  },
  {
    itemId:     "18130",
    itemNome:   "Arco Rubi [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 120,
    itemArmaNivel: 3,
    itemNivel:  70,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt((getNivelBase() - 70) / 10) * 5) + Math.pow(Math.min(getItemRefino(slot), 15), 2)
      }
    }
  },
  {
    itemId:     "18121",
    itemNome:   "Arco Sobrenatural [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 175,
    itemArmaNivel: 4,
    itemNivel:  160,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["atqarmap_1-10","drake","danofisicopropriedade_1-20"],
      ["danofisicochefe_1-20","danofisicoraca_1-20","ignoredef_1-30"],
      ["atributoagilidade_1-10","atributodestreza_1-10","atributosorte_1-10","atq_1-50","crit_1-20","danocritico_1-20","aspdf_1-5","aspdp_1-5","danodistancia_1-20"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": Math.pow(Math.min(getItemRefino(slot), 15), 2)
      }
    }
  },
  {
    itemId:     "15272",
    itemNome:   "Armadura da Khalitzburg [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": parseInt(Math.min(getItemRefino(slot), 15) / 3) * 6
      }
    }
  },
  {
    itemId:     "2375",
    itemNome:   "Armadura de Diabolus [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  60,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "atributodestreza": 1,
        "danofisicop": hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 3 : 0,
        "danomagicop": hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 3 : 0
      }
    }
  },
  {
    itemId:     "15240",
    itemNome:   "Armadura do Dragão Vermelho [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Precisao","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 10 + (getItemRefino(slot) >= 6 ? 10 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0),
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1,
        "danofisicochefe": (getItemRefino(slot) >= 6 ? 10 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "15346",
    itemNome:   "Armadura do Herói Afortunado [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DCrit","REQ_DCorp","REQ_TCrit","REQ_Aspd","REQ_IgnDef"],
    bonusaleatorios: [
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"],
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "danocritico": parseInt(getItemRefino(slot) / 3) * 2 + (hasCombo(slot, itemId, tipoItem, [["22118","22011"]]) ? 10 : 0),
        "ignoredef": isOpponent("racaMonstro", ["2","3"]) ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["22118","22011"]]) ? ((getItemRefino(slot) + getItemRefino("itemSapatos") >= 21) ? 20 : 0) : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? (getItemRefino(slot) >= 11 ? 10 : 0) : 0
      }
    }
  },
  {
    itemId:     "15353",
    itemNome:   "Armadura do Herói Ágil [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DCrit","REQ_IgnDef","REQ_Aspd"],
    bonusaleatorios: [
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"],
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 2,
        "aspdf": hasCombo(slot, itemId, tipoItem, [["22115","22010"]]) ? 1 : 0,
        "ignoredef": isOpponent("racaMonstro", ["2","3"]) ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["22115","22010"]]) ? ((getItemRefino(slot) + getItemRefino("itemSapatos") >= 21) ? 20 : 0) : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? (getItemRefino(slot) >= 11 ? 10 : 0) : 0
      }
    }
  },
  {
    itemId:     "15354",
    itemNome:   "Armadura do Herói Astuto [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_DCrit","REQ_IgnDef"],
    bonusaleatorios: [
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"],
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "danodistancia": parseInt(getItemRefino(slot) / 3) * 2 + (hasCombo(slot, itemId, tipoItem, [["22117","22008"]]) ? 5 : 0),
        "ignoredef": isOpponent("racaMonstro", ["2","3"]) ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["22117","22008"]]) ? ((getItemRefino(slot) + getItemRefino("itemSapatos") >= 21) ? 20 : 0) : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? (getItemRefino(slot) >= 11 ? 10 : 0) : 0
      }
    }
  },
  {
    itemId:     "15278",
    itemNome:   "Armadura do Herói Robusto [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DCorp"],
    bonusaleatorios: [
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"],
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "atqarmap": parseInt(getItemRefino(slot) / 3) * 2 + (hasCombo(slot, itemId, tipoItem, [["22113","22006"]]) ? 10 : 0),
        "ignoredef": isOpponent("racaMonstro", ["2","3"]) ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["22113","22006"]]) ? ((getItemRefino(slot) + getItemRefino("itemSapatos") >= 21) ? 20 : 0) : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? (getItemRefino(slot) >= 11 ? 10 : 0) : 0
      }
    }
  },
  {
    itemId:     "15279",
    itemNome:   "Armadura do Herói Sábio [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_Pos","REQ_IgnDefm"],
    bonusaleatorios: [
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"],
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 50,
        "danomagicop": parseInt(getItemRefino(slot) / 3) * 2 + (hasCombo(slot, itemId, tipoItem, [["22113","22006"]]) ? 10 : 0),
        "ignoredefm": isOpponent("racaMonstro", ["2","3"]) ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["22113","22006"]]) ? ((getItemRefino(slot) + getItemRefino("itemSapatos") >= 21) ? 20 : 0) : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? (getItemRefino(slot) >= 11 ? 10 : 0) : 0
      }
    }
  },
  {
    itemId:     "15347",
    itemNome:   "Armadura do Herói Vigoroso [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_SP","REQ_Pos","REQ_IgnDef"],
    bonusaleatorios: [
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"],
      ["hpp_1-5","spp_1-5","hpf_500-1000","spf_50-500","aspdp_1-5","precisao_1-5","esquiva_5-30","atqarmap_1-3","danomagicop_1-3","atq_3-20","atqm_3-20","danocritico_1-5","danodistancia_1-5","efetividadecura_1-5","conjuracaovariavel_1-5","crit_1-5","posconjuracao_1-5"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "hpp": parseInt(getItemRefino(slot) / 3) * 2 + (hasCombo(slot, itemId, tipoItem, [["22113","22006"]]) ? 10 : 0),
        "ignoredef": isOpponent("racaMonstro", ["2","3"]) ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["22113","22006"]]) ? ((getItemRefino(slot) + getItemRefino("itemSapatos") >= 21) ? 20 : 0) : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? (getItemRefino(slot) >= 11 ? 10 : 0) : 0
      }
    }
  },
  {
    itemId:     "15390",
    itemNome:   "Armadura do Monarca [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico","REQ_CVar","REQ_DDist","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["2","6"]) ? 7 : 0,
        "danomagicoraca": isOpponent("racaMonstro", ["2","6"]) ? 7 : 0,
        "hpf": 500 + (parseInt(getItemRefino(slot) / 3) * 50),
        "spf": 100 + (parseInt(getItemRefino(slot) / 3) * 20),
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["22206"],["20945"]]) ? ((-7) + ((getItemRefino(slot) >= 9 && getItemRefino("itemSapatos") >= 9 && getItemRefino("itemCapa") >= 9) ? (-5) : 0)) : 0)
      }
    }
  },
  {
    itemId:     "15189",
    itemNome:   "Armadura dos Esquecidos [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 10 + (hasCombo(slot, itemId, tipoItem, [["20748","20749"]]) ? (getItemRefino("itemCapa") + (getItemRefino("itemCapa") >= 9 ? (parseInt(getAtributoBase("for") / 10) * 5) : 0) + (getItemRefino("itemCapa") >= 11 ? (parseInt(getAtributoBase("for") / 10) * 7) : 0)) : 0)
      }
    }
  },
  {
    itemId:     "15374",
    itemNome:   "Armadura Eclipse [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_CFix","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 15,
        "spp": 15,
        "posconjuracao": getItemRefino(slot) * (-1),
        "conjuracaofixap": ((getItemRefino(slot) >= 10) ? (-50) : 0) + ((getItemRefino(slot) >= 13) ? (-20) : 0),
        "danofisicopropriedade": hasCombo(slot, itemId, tipoItem, [["4324"]]) && isOpponent("propriedadeMonstro",["40","41","42","43"]) ? (getItemRefino(slot) * 5) : 0
      }
    }
  },
  {
    itemId:     "15375",
    itemNome:   "Armadura Eclipse Desgastada [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_CFix"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5,
        "spp": 5,
        "posconjuracao": getItemRefino(slot) * (-1),
        "conjuracaofixap": ((getItemRefino(slot) >= 20) ? -50 : 0)
      }
    }
  },
  {
    itemId:     "15246",
    itemNome:   "Armadura Real [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico","REQ_Pos","REQ_DDist","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["2","6"]) ? 10 : 0,
        "danomagicoraca": isOpponent("racaMonstro", ["2","6"]) ? 10 : 0,
        "hpf": 1000,
        "spf": 200 + (parseInt(getItemRefino(slot) / 3) * 20),
        "hpp": parseInt(getItemRefino(slot) / 3),
        "spp": parseInt(getItemRefino(slot) / 3),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["20902"],["22168"]]) ? ((-7) + ((getItemRefino(slot) >= 9 && getItemRefino("itemSapatos") >= 9 && getItemRefino("itemCapa") >= 9) ? (-8) : 0)) : 0)
      }
    }
  },
  {
    itemId:     "2589",
    itemNome:   "Asas de Arcanjo Caído [1]",
    itemTipo:   "itemCapa",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_DMagico","REQ_DCrit","REQ_TCrit","REQ_CVar","REQ_DDist","REQ_HP","REQ_SP"],
    slots: 1,
    encantamentos: [
      ["4809","4808","4820","4812","4826","4827","4832","4833","4834","4863","4864","4865","4861","4862","4867","4870","4800","4871","4869","4872","4873","4702","4703","4704","4731","4732","4733","4742","4743","4744","4712","4713","4714","4722","4723","4724","4752","4753","4754"],
      ["4809","4808","4820","4812","4826","4827","4832","4833","4834","4863","4864","4865","4861","4862","4867","4870","4800","4871","4869","4872","4873","4702","4703","4704","4731","4732","4733","4742","4743","4744","4712","4713","4714","4722","4723","4724","4752","4753","4754"],
      ["4809","4808","4820","4821","4812","4826","4827","4828","4832","4833","4834","4835","4863","4864","4865","4866","4861","4862","4867","4868","4870","4800","4871","4801","4869","4872","4873","4807","4702","4703","4704","4853","4731","4732","4733","4854","4742","4743","4744","4855","4712","4713","4714","4856","4722","4723","4724","4857","4752","4753","4754","4858"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1,
        "atq": parseInt(getAtributoBase("for") / 20),
        "aspdp": parseInt(getAtributoBase("agi") / 20),
        "atqm": parseInt(getAtributoBase("int") / 20),
        "danodistancia": parseInt(getAtributoBase("des") / 20),
        "danocritico": parseInt(getAtributoBase("sor") / 20)
      }
    }
  },
  {
    itemId:     "400213",
    itemNome:   "Asas de Yggdrasil [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": 10 + (getItemRefino(slot) >= 10 ? 15 : 0) + (getItemRefino(slot) >= 12 ? 15 : 0),
        "danomagicotamanho": 10 + (getItemRefino(slot) >= 10 ? 15 : 0) + (getItemRefino(slot) >= 12 ? 15 : 0),
        "posconjuracao": (getItemRefino(slot) >= 10 ? (-20) : 0)
      }
    }
  },
  {
    itemId:     "400002",
    itemNome:   "Asas Vitoriosas [1]",
    itemTipo:   "itemMeio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DCrit","REQ_DMagico","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5,
        "atqm": 5,
        "posconjuracao": -4,
      }
    }
  },
  {
    itemId:     "19495",
    itemNome:   "Asinhas Discretas [1]",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Precisao","REQ_CVar","REQ_DFisico","REQ_DMagico","REQ_HP","REQ_SP","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 10 + (hasCombo(slot, itemId, tipoItem, [["2375"]]) ? 8 : 0),
        "atributoagilidade": 10,
        "atributovitalidade": 10,
        "atributointeligencia": 10,
        "atributodestreza": 10 + (hasCombo(slot, itemId, tipoItem, [["2375"]]) ? 4 : 0),
        "atributosorte": 10,
        "danofisicoalvo": (isOpponent("idMonstro", ["3091","3092","3098","3099","3096","3097"]) ? (30 + (hasCombo(slot, itemId, tipoItem, [["2375"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2374"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2537"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2433"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 20 : 0)) : 0),
        "danomagicoalvo": (isOpponent("idMonstro", ["3091","3092","3098","3099","3096","3097"]) ? (30 + (hasCombo(slot, itemId, tipoItem, [["2375"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2374"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2537"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2433"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 20 : 0)) : 0),
        "hpf": (hasCombo(slot, itemId, tipoItem, [["2375"]]) ? 1350 : 0) + (hasCombo(slot, itemId, tipoItem, [["2537"]]) ? 900 : 0) + (hasCombo(slot, itemId, tipoItem, [["2433"]]) ? (getNivelBase() * 100) : 0) + (hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 2000 : 0),
        "spf": (hasCombo(slot, itemId, tipoItem, [["2374"]]) ? 350 : 0) + (hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 200 : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["2374"]]) ? (-10) : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["2375"]]) ? (getItemRefino("itemArmadura") * 15) : 0) + (hasCombo(slot, itemId, tipoItem, [["2433"]]) ? (getItemRefino("itemSapatos") * 20) : 0),
        "atqm": (hasCombo(slot, itemId, tipoItem, [["2374"]]) ? (getItemRefino("itemArmadura") * 15) : 0) + (hasCombo(slot, itemId, tipoItem, [["2433"]]) ? (getItemRefino("itemSapatos") * 20) : 0)
      }
    }
  },
  {
    itemId:     "400000",
    itemNome:   "Assobios Musicais",
    itemTipo:   "itemBaixo",
    itemNivel:  120,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_CVar","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 1,
        "danomagicop": 1,
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["2990"]]) ? (-10) : 0) + (hasCombo(slot, itemId, tipoItem, [["2992"]]) ? (-10) : 0),
        "danocritico": (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? (10) : 0) + (hasCombo(slot, itemId, tipoItem, [["2992"]]) ? (10) : 0),
      }
    }
  },
  {
    itemId:     "410000",
    itemNome:   "Aura de Shen",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_IgnDef","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicochefe": isOpponentChefe() ? (4 + (getAtributoBase("for") >= 90 ? 2: 0) + (getAtributoBase("for") >= 125 ? 4: 0)) : (2 + (getAtributoBase("for") >= 90 ? 1: 0) + (getAtributoBase("for") >= 125 ? 2: 0))
      }
    }
  },
  {
    itemId:     "18858",
    itemNome:   "Balão de Angeling Natalino",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 200,
        "aspdf": 1
      }
    }
  },
  {
    itemId:     "18844",
    itemNome:   "Balão de Pouring Natalino",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_EP","REQ_CVar","REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "atributoagilidade": 2,
        "atributovitalidade": 2,
        "atributointeligencia": 2,
        "atributodestreza": 2,
        "atributosorte": 2,
        "esquivaperfeita": 2
      }
    }
  },
  {
    itemId:     "18164",
    itemNome:   "Balista Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 180,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Tempestade_de_Flechas"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10),
        "danode--Tempestade_de_Flechas": (parseInt(getItemRefino(slot) / 3) * 12),
        "aspdp": (getItemRefino(slot) >= 9 ? 10 : 0),
        "danodistancia": (getItemRefino(slot) >= 11 ? 5 : 0)
      }
    }
  },
  {
    itemId:     "700018",
    itemNome:   "Balista Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 205,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Tempestade_de_Flechas","REQ_Pos"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 15),
        "danode--Tempestade_de_Flechas": (parseInt(getItemRefino(slot) / 3) * 12),
        "aspdp": (getItemRefino(slot) >= 7 ? 10 : 0),
        "danodistancia": (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 12 : 0),
        "danocritico": (getItemRefino(slot) >= 9 ? 10 : 0),
        "posconjuracao": (getItemRefino(slot) >= 11 ? (-10) : 0),
        "danode--Tiro_Preciso": (getItemRefino(slot) >= 11 ? 20 : 0)
      }
    }
  },
  {
    itemId:     "1298",
    itemNome:   "Bat-Katar [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 110,
    itemArmaNivel: 4,
    itemNivel:  105,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": getItemRefino(slot),
        "danocritico": (hasCombo(slot, itemId, tipoItem, [["4317"]]) ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["4521"]]) ? 5 : 0)
      }
    }
  },
  {
    itemId:     "400476",
    itemNome:   "Boina Sustenida [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CVar","REQ_CFix","REQ_Tempestade_de_Flechas","REQ_Vulcao_de_Flechas","REQ_Ruido_Estridente"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 15),
        "atqm": (parseInt(getItemRefino(slot) / 2) * 15),
        "danomagiconeutro": (getItemRefino(slot) >= 7 ? 15 : 0),
        "danodistancia": (getItemRefino(slot) >= 9 ? 15 : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danofisicop": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "danomagicop": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["400000"]]) ? 4 : 0),
        "atqarmap": (hasCombo(slot, itemId, tipoItem, [["400000"]]) ? 4 : 0),
        "danode--Temporal_de_Mil_Flechas": (hasCombo(slot, itemId, tipoItem, [["18123"]]) ? (parseInt(getItemRefino(slot) / 2) * 5) : 0),
        "recargade--Tempestade_de_Flechas": (hasCombo(slot, itemId, tipoItem, [["18122"]]) ? (-1.5) : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["18122"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["1935","1990"]]) ? (-25) : 0),
        "danode--Vulcao_de_Flechas": (hasCombo(slot, itemId, tipoItem, [["1935","1990"]]) ? (parseInt(getItemRefino(slot) / 2) * 7) : 0),
        "recargade--Ruido_Estridente": (hasCombo(slot, itemId, tipoItem, [["1989","1934"]]) ? (-2) : 0),
        "danode--Ruido_Estridente": (hasCombo(slot, itemId, tipoItem, [["1989","1934"]]) ? (parseInt(getItemRefino(slot) / 2) * 7) : 0),
      }
    }
  },
  {
    itemId:     "2655",
    itemNome:   "Bola de Ferro Ensanguentada",
    itemTipo:   "itemAcessorio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (hasCombo(slot, itemId, tipoItem, [["2408","22105"]]) ? 50 : 0)
      }
    }
  },
  {
    itemId:     "28388",
    itemNome:   "Bola de Ferro Ensanguentada [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    encantamentos: [
      ["4818","4817","4815","4814","4832","4833","4869","4872","4811","4810","4803","4804","4805","4850","4897","4767"],
      ["4818","4817","4815","4814","4832","4833","4869","4872","4811","4810","4803","4804","4805","4850","4897","4767"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (hasCombo(slot, itemId, tipoItem, [["2408","22105"]]) ? 50 : 0) + (hasCombo(slot, itemId, tipoItem, [["2408","22105"],["2655"]]) ? -50 : 0)
      }
    }
  },
  {
    itemId:     "5342",
    itemNome:   "Boneca de Marianne [1] - Ativado",
    itemTipo:   "itemTopo",
    itemNivel:  60,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "atq": 50
      }
    }
  },
  {
    itemId:     "18795",
    itemNome:   "Boné com Asinhas [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    encantamentos: [
      ["4869","4950","4808","4812","4833","4807","4866","4942","4852"],
      ["4869","4950","4808","4812","4833","4807","4866","4942","4852"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "atributosorte": 1,
        "danodistancia": 5,
        "danode--Temporal_de_Mil_Flechas": getItemRefino(slot) >= 7 ? 15 : 0,
        "recargade--Temporal_de_Mil_Flechas": getItemRefino(slot) >= 9 ? (-2) : 0,
      }
    }
  },
  {
    itemId:     "22172",
    itemNome:   "Botas Aladas",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DDist","REQ_DCrit","REQ_Tiro_Preciso","REQ_Ataque_Aereo","REQ_Bomba_Relogio","REQ_Disparo_Certeiro"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "danocritico": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? (parseInt(getAtributoBase("sor") / 20) * 4) : 0),
        "danodistancia": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 8 : 0) + (getItemRefino("itemArmadura") >= 9 ? 4 : 0)) : 0),
        "danode--Tiro_Preciso": (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 50 : 0) + (getItemRefino("itemArmadura") >= 9 ? 25 : 0)) : 0),
        "danode--Ataque_Aereo": (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 40 : 0) + (getItemRefino("itemArmadura") >= 9 ? 20 : 0)) : 0),
        "danode--Bomba_Relogio": (hasCombo(slot, itemId, tipoItem, [["15043"]]) ? ((parseInt(getAtributoBase("int") / 20) + (getItemRefino("itemArmadura") >= 7 ? 340 : 0) + (getItemRefino("itemArmadura") >= 9 ? 200 : 0)) * 30) : 0),
        "esquivaperfeita": (hasCombo(slot, itemId, tipoItem, [["15043"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 6 : 0) + (getItemRefino("itemArmadura") >= 9 ? 3 : 0)) : 0),
        "danode--Disparo_Certeiro": hasCombo(slot, itemId, tipoItem, [["15043"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 20 : 0) + (getItemRefino("itemArmadura") >= 9 ? 10 : 0)) : 0
      }
    }
  },
  {
    itemId:     "470051",
    itemNome:   "Botas Aladas [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DDist","REQ_DCrit","REQ_Tiro_Preciso","REQ_Ataque_Aereo","REQ_Bomba_Relogio","REQ_Disparo_Certeiro"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "danocritico": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? (parseInt(getAtributoBase("sor") / 20) * 4) : 0),
        "danodistancia": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 8 : 0) + (getItemRefino("itemArmadura") >= 9 ? 4 : 0)) : 0),
        "danode--Tiro_Preciso": (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 50 : 0) + (getItemRefino("itemArmadura") >= 9 ? 25 : 0)) : 0),
        "danode--Ataque_Aereo": (hasCombo(slot, itemId, tipoItem, [["15042"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 40 : 0) + (getItemRefino("itemArmadura") >= 9 ? 20 : 0)) : 0),
        "danode--Bomba_Relogio": (hasCombo(slot, itemId, tipoItem, [["15043"]]) ? ((parseInt(getAtributoBase("int") / 20) + (getItemRefino("itemArmadura") >= 7 ? 340 : 0) + (getItemRefino("itemArmadura") >= 9 ? 200 : 0)) * 30) : 0),
        "esquivaperfeita": (hasCombo(slot, itemId, tipoItem, [["15043"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 6 : 0) + (getItemRefino("itemArmadura") >= 9 ? 3 : 0)) : 0),
        "danode--Disparo_Certeiro": hasCombo(slot, itemId, tipoItem, [["15043"]]) ? ((getItemRefino("itemArmadura") >= 7 ? 20 : 0) + (getItemRefino("itemArmadura") >= 9 ? 10 : 0)) : 0
      }
    }
  },
  {
    itemId:     "22171",
    itemNome:   "Botas Ancestrais [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_CFix","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 500,
        "spf": 50,
        "hpp": parseInt(getItemRefino(slot) / 3) * 2,
        "spp": parseInt(getItemRefino(slot) / 3),
        "conjuracaofixas": (getItemRefino(slot) >= 9 ? -0.3 : 0) + (getItemRefino(slot) >= 12 ? -0.2 : 0),
        "posconjuracao": (getItemRefino(slot) >= 14 ? -5 : 0)
      }
    }
  },
  {
    itemId:     "470036",
    itemNome:   "Botas Camufladas",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_Furia_do_Furacao","REQ_Arremesso_de_Machado"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "atq": (getItemRefino(slot) >= 5 ? 50 : 0) + (getItemRefino(slot) >= 7 ? 50 : 0),
        "aspdp": isClasse(["Classe_ME"]) ? 10 : 0,
        "hpf": isClasse(["Classe_ME"]) ? (getNivelBase() * 100) : 0,
        "danode--Furia_do_Furacao": 150,
        "danode--Arremesso_de_Machado": 100,
        "ignoredef": isClasse(["Classe_ME"]) ? 100 : 0,
        "danofisicochefe": hasCombo(slot, itemId, tipoItem, [["1326"]]) ? ((getItemRefino("itemMaoDireita") >= 10 ? 25 : 0) + (getItemRefino("itemMaoDireita") >= 14 ? 25 : 0)) : 0
      }
    }
  },
  {
    itemId:     "470037",
    itemNome:   "Botas Camufladas [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_Furia_do_Furacao","REQ_Arremesso_de_Machado"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "atq": (getItemRefino(slot) >= 5 ? 50 : 0) + (getItemRefino(slot) >= 7 ? 50 : 0),
        "aspdp": isClasse(["Classe_ME"]) ? 10 : 0,
        "hpf": isClasse(["Classe_ME"]) ? (getNivelBase() * 100) : 0,
        "danode--Furia_do_Furacao": 150,
        "danode--Arremesso_de_Machado": 100,
        "ignoredef": isClasse(["Classe_ME"]) ? 100 : 0,
        "danofisicochefe": hasCombo(slot, itemId, tipoItem, [["1326"]]) ? ((getItemRefino("itemMaoDireita") >= 10 ? 25 : 0) + (getItemRefino("itemMaoDireita") >= 14 ? 25 : 0)) : 0
      }
    }
  },
  {
    itemId:     "2433",
    itemNome:   "Botas de Diabolus [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  1,
    itemClasses: ["transclasse"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": getNivelBase() * 10
      }
    }
  },
  {
    itemId:     "470060",
    itemNome:   "Botas de Teste",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Canhao_de_Protons","REQ_Tornado_do_Carrinho"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "variavelde--Canhao_de_Protons": (getItemRefino(slot) >= 5 ? (-50) : 0) + (getItemRefino(slot) >= 9 ? (-50) : 0),
        "precisao": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0,
        "aspdp": isClasse(["Classe_BI","Classe_BI_NT"]) ? 20 : 0,
        "danode--Tornado_do_Carrinho": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0,
        "danofisicop": isClasse(["Classe_BI","Classe_BI_NT"]) ? 20 : 0,
        "ignoredefm": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0
      }
    }
  },
  {
    itemId:     "470061",
    itemNome:   "Botas de Teste [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DFisico","REQ_Canhao_de_Protons","REQ_Tornado_do_Carrinho"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "variavelde--Canhao_de_Protons": (getItemRefino(slot) >= 5 ? (-50) : 0) + (getItemRefino(slot) >= 9 ? (-50) : 0),
        "precisao": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0,
        "aspdp": isClasse(["Classe_BI","Classe_BI_NT"]) ? 20 : 0,
        "danode--Tornado_do_Carrinho": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0,
        "danofisicop": isClasse(["Classe_BI","Classe_BI_NT"]) ? 20 : 0,
        "ignoredef": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0
      }
    }
  },
  {
    itemId:     "22204",
    itemNome:   "Botas do Conjurador",
    itemTipo:   "itemSapatos",
    itemNivel:  1,
    itemClasses: ["Classe_GX","Classe_GX","Classe_SX"],
    itemBonus: ["REQ_DFisico","REQ_IgnDef","REQ_Impacto_Meteoro"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "danofisicop": 20,
        "danode--Impacto_Meteoro": 300 + (getItemRefino(slot) >= 5 ? getNivelBase() : 0) + (getItemRefino(slot) >= 7 ? getNivelBase() : 0),
        "variavelpde--Impacto_Meteoro": -100,
        "ignoredef": 100
      }
    }
  },
  {
    itemId:     "22206",
    itemNome:   "Botas do Monarca [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DDist","REQ_DCrit","REQ_CVar","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 5,
        "precisao": parseInt(getItemRefino(slot) / 3) * 2,
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["15390"]]) ? 7 : 0,
        "danocritico": hasCombo(slot, itemId, tipoItem, [["15390"]]) && getItemRefino(slot) >= 9 && getItemRefino("itemArmadura") >= 9 ? 7 : 0
      }
    }
  },
  {
    itemId:     "22204",
    itemNome:   "Botas do Senhor do Tempo [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit","REQ_DMagico","REQ_DFisico","REQ_CVar","REQ_Aspd","REQ_CFix"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 10,
        "danocritico": 10,
        "danomagicop": hasCombo(slot, itemId, tipoItem, [["15383"]]) ? 5 : 0,
        "atqarmap": hasCombo(slot, itemId, tipoItem, [["15383"]]) ? 5 : 0,
        "danomagiconeutro": 10,
        "danomagicofogo": 10,
        "danomagicovento": 10,
        "danomagicoterra": 10,
        "danomagicoagua": 10,
        "danomagicosagrado": 10,
        "danomagicosombrio": 10,
        "danomagicoveneno": 10,
        "danomagicofantasma": 10,
      }
    }
  },
  {
    itemId:     "22106",
    itemNome:   "Botas Gigantes [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  85,
    itemClasses: ["Classe_SE","Classe_ME","Classe_RK"],
    itemBonus: ["REQ_DFisico","REQ_Choque_do_Carrinho","REQ_Onda_de_Choque","REQ_Perfurar_em_Espiral","REQ_Tempestade_de_Flechas","REQ_Disparo_Certeiro"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 2 + (getItemRefino(slot) >= 5 ? 4 : 0) + (getItemRefino(slot) >= 7 ? 4 : 0),
        "spp": 2 + (getItemRefino(slot) >= 5 ? 4 : 0) + (getItemRefino(slot) >= 7 ? 4 : 0),
        "danode--Choque_do_Carrinho": hasCombo(slot, itemId, tipoItem, [["1387"]]) ? (((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 7) ? 8 : 0) + ((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 9) ? 12 : 0)) : 0,
        "danofisicochefe": (hasCombo(slot, itemId, tipoItem, [["1387","18122"]]) ? (((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 7) ? 20 : 0) + ((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 9) ? 30 : 0)) : 0),
        "danode--Perfurar_em_Espiral": hasCombo(slot, itemId, tipoItem, [["1490"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 20 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 30 : 0)) : 0,
        "danode--Onda_de_Choque": hasCombo(slot, itemId, tipoItem, [["1490"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 20 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 30 : 0)) : 0,
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["18122"]]) ? (parseInt(getAtributoBase("for") / 10) * 3) : 0,
        "danode--Tempestade_de_Flechas": hasCombo(slot, itemId, tipoItem, [["18122"]]) ? (((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 7) ? 20 : 0) + ((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 9) ? 30 : 0)) : 0,
        "danode--Disparo_Certeiro": hasCombo(slot, itemId, tipoItem, [["18122"]]) ? (((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 7) ? 20 : 0) + ((getItemRefino(slot) >= 7 && getItemRefino("itemMaoDireita") >= 9) ? 30 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "22207",
    itemNome:   "Botas Imperiais",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DDist","REQ_Toque_do_Oblivio","REQ_DFisico","REQ_IgnDef"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "danodistancia": (getItemRefino(slot) >= 5 ? 5 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "danode--Toque_do_Oblivio": 50,
        "danofisicop": 20,
        "ignoredef": 100
      }
    }
  },
  {
    itemId:     "470004",
    itemNome:   "Botas Imperiais [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DDist","REQ_Toque_do_Oblivio","REQ_DFisico","REQ_IgnDef"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "danodistancia": (getItemRefino(slot) >= 5 ? 5 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "danode--Toque_do_Oblivio": 50,
        "danofisicop": 20,
        "ignoredef": 100
      }
    }
  },
  {
    itemId:     "22168",
    itemNome:   "Botas Reais [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DDist","REQ_DCrit","REQ_CVar","REQ_DMagico","REQ_CFix","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 8 + (parseInt(getItemRefino(slot) / 3) * 2),
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["15246"]]) ? 7 : 0,
        "danocritico": hasCombo(slot, itemId, tipoItem, [["15246"]]) && getItemRefino(slot) >= 9 && getItemRefino("itemArmadura") >= 9 ? 10 : 0
      }
    }
  },
  {
    itemId:     "22109",
    itemNome:   "Botas Modificadas AGI",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 3,
        "aspdf": getAtributoBase("agi") >= 120 ? 1 : 0
      }
    }
  },
  {
    itemId:     "22115",
    itemNome:   "Botas Modificadas AGI [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 3,
        "aspdf": getAtributoBase("agi") >= 120 ? 1 : 0
      }
    }
  },
  {
    itemId:     "22002",
    itemNome:   "Botas Temporais AGI",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 3,
        "aspdf": getAtributoBase("agi") >= 120 ? 1 : 0
      }
    }
  },
  {
    itemId:     "22010",
    itemNome:   "Botas Temporais AGI [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 3,
        "aspdf": getAtributoBase("agi") >= 120 ? 1 : 0
      }
    }
  },
  {
    itemId:     "22111",
    itemNome:   "Botas Modificadas DES",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_CFix"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atributodestreza": parseInt(getItemRefino(slot) / 3) * 3,
        "danodistancia": getAtributoBase("des") >= 120 ? 5 : 0,
        "conjuracaofixas": getAtributoBase("des") >= 120 ? -0.5 : 0
      }
    }
  },
  {
    itemId:     "22117",
    itemNome:   "Botas Modificadas DES [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_CFix"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atributodestreza": parseInt(getItemRefino(slot) / 3) * 3,
        "danodistancia": getAtributoBase("des") >= 120 ? 5 : 0,
        "conjuracaofixas": getAtributoBase("des") >= 120 ? -0.5 : 0
      }
    }
  },
  {
    itemId:     "22004",
    itemNome:   "Botas Temporais DES",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_CFix"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atributodestreza": parseInt(getItemRefino(slot) / 3) * 3,
        "danodistancia": getAtributoBase("des") >= 120 ? 5 : 0,
        "conjuracaofixas": getAtributoBase("des") >= 120 ? -0.5 : 0
      }
    }
  },
  {
    itemId:     "22008",
    itemNome:   "Botas Temporais DES [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_CFix"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atributodestreza": parseInt(getItemRefino(slot) / 3) * 3,
        "danodistancia": getAtributoBase("des") >= 120 ? 5 : 0,
        "conjuracaofixas": getAtributoBase("des") >= 120 ? -0.5 : 0
      }
    }
  },
  {
    itemId:     "22107",
    itemNome:   "Botas Modificadas FOR",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atq": (parseInt(getItemRefino(slot) / 3) * 7) + (getAtributoBase("for") >= 120 ? 50 : 0)
      }
    }
  },
  {
    itemId:     "22113",
    itemNome:   "Botas Modificadas FOR [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atq": (parseInt(getItemRefino(slot) / 3) * 7) + (getAtributoBase("for") >= 120 ? 50 : 0)
      }
    }
  },
  {
    itemId:     "22000",
    itemNome:   "Botas Temporais FOR",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atq": (parseInt(getItemRefino(slot) / 3) * 7) + (getAtributoBase("for") >= 120 ? 50 : 0)
      }
    }
  },
  {
    itemId:     "22006",
    itemNome:   "Botas Temporais FOR [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atq": (parseInt(getItemRefino(slot) / 3) * 7) + (getAtributoBase("for") >= 120 ? 50 : 0)
      }
    }
  },
  {
    itemId:     "22108",
    itemNome:   "Botas Modificadas INT",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atqm": (parseInt(getItemRefino(slot) / 3) * 10) + (getAtributoBase("int") >= 120 ? 60 : 0)
      }
    }
  },
  {
    itemId:     "22114",
    itemNome:   "Botas Modificadas INT [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atqm": (parseInt(getItemRefino(slot) / 3) * 10) + (getAtributoBase("int") >= 120 ? 60 : 0)
      }
    }
  },
  {
    itemId:     "22001",
    itemNome:   "Botas Temporais INT",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atqm": (parseInt(getItemRefino(slot) / 3) * 10) + (getAtributoBase("int") >= 120 ? 60 : 0)
      }
    }
  },
  {
    itemId:     "22009",
    itemNome:   "Botas Temporais INT [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar"],
    slots: 1,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "atqm": (parseInt(getItemRefino(slot) / 3) * 10) + (getAtributoBase("int") >= 120 ? 60 : 0)
      }
    }
  },
  {
    itemId:     "22112",
    itemNome:   "Botas Modificadas SOR",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "danocritico": (parseInt(getItemRefino(slot) / 3) * 2) + (getAtributoBase("sor") >= 120 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "22118",
    itemNome:   "Botas Modificadas SOR [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "danocritico": (parseInt(getItemRefino(slot) / 3) * 2) + (getAtributoBase("sor") >= 120 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "22005",
    itemNome:   "Botas Temporais SOR",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "danocritico": (parseInt(getItemRefino(slot) / 3) * 2) + (getAtributoBase("sor") >= 120 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "22011",
    itemNome:   "Botas Temporais SOR [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0,
        "danocritico": (parseInt(getItemRefino(slot) / 3) * 2) + (getAtributoBase("sor") >= 120 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "22110",
    itemNome:   "Botas Modificadas VIT",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0) + (getAtributoBase("sor") >= 120 ? 8 : 0),
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0
      }
    }
  },
  {
    itemId:     "22116",
    itemNome:   "Botas Modificadas VIT [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_IN","Classe_KA","Classe_OB","Classe_ME","Classe_CE"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_HP"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0) + (getAtributoBase("sor") >= 120 ? 8 : 0),
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0
      }
    }
  },
  {
    itemId:     "22003",
    itemNome:   "Botas Temporais VIT",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0) + (getAtributoBase("sor") >= 120 ? 8 : 0),
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0
      }
    }
  },
  {
    itemId:     "22007",
    itemNome:   "Botas Temporais VIT [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    encantamentos: [
      ["4808","4820","4821","4822","4832","4833","4834","4835","4814","4813","4812","4826","4741","4742","4861","4862","4869","4872","4873","4881","4752","4753","4754","4755"],
      ["4875","4875a","4877","4877a","4878","4878a","4876","4876a","4879","4879a","4880","4880a"]
    ],
    itemClasses: ["Classe_SC","Classe_GX","Classe_AB","Classe_SU","Classe_WL","Classe_SO","Classe_RK","Classe_RG","Classe_ME","Classe_BI","Classe_SE","Classe_TR","Classe_MU"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DDist","REQ_DMagico","REQ_CVar","REQ_HP"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 3) * 100),
        "spf": 30 + (parseInt(getItemRefino(slot) / 3) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 15 : 0) + (getAtributoBase("sor") >= 120 ? 8 : 0),
        "spp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? 5 : 0
      }
    }
  },
  {
    itemId:     "22129",
    itemNome:   "Botas Veteranas",
    itemTipo:   "itemSapatos",
    itemNivel:  85,
    itemClasses: ["Classe_RK","Classe_ME","Classe_AB"],
    itemBonus: ["REQ_Impacto_de_Tyr","REQ_Golpe_Fulminante","REQ_Furia_do_Furacao","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Impacto_de_Tyr": hasCombo(slot, itemId, tipoItem, [["1188","21024"]]) ? 100 : 0,
        "danode--Golpe_Fulminante": hasCombo(slot, itemId, tipoItem, [["1188","21024"]]) ? 100 : 0,
        "atq": hasCombo(slot, itemId, tipoItem, [["1384","28114"]]) ? 100 : 0,
        "recargade--Furia_do_Furacao": hasCombo(slot, itemId, tipoItem, [["1384","28114"]]) ? (-1) : 0,
        "aspdp": hasCombo(slot, itemId, tipoItem, [["1548","16056"]]) ? 10 : 0,
        "ignoredef": hasCombo(slot, itemId, tipoItem, [["1548","16056"]]) && isOpponent("racaMonstro", ["3","5","7","10"]) ? 100 : 0,
        "crit": hasCombo(slot, itemId, tipoItem, [["1548","16056"]]) && isOpponent("racaMonstro", ["3","5","7","10"]) ? 50 : 0,
      }
    }
  },
  {
    itemId:     "2989",
    itemNome:   "Bracelete Floral de Igu [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  130,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": -25
      }
    }
  },
  {
    itemId:     "28410",
    itemNome:   "Bracelete Safira [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  50,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DMagico","REQ_Esporo_Explosivo"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 10,
        "atributosorte": 10,
        "atributointeligencia": 10,
        "atqm": 100,
        "danode--Esporo_Explosivo": parseInt(getNivelBase() / 20) * 5
      }
    }
  },
  {
    itemId:     "28411",
    itemNome:   "Brincos de Esmeralda [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Vulcao_de_Flechas","REQ_Estilingue","REQ_Flecha_Melodica","REQ_Ruido_Estridente"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 5 + (isClasse(["Classe_SE","Classe_TR"]) ? 5 : 0),
        "atributoagilidade": 5 + (isClasse(["Classe_SE","Classe_TR"]) ? 5 : 0),
        "atributointeligencia": 5 + (isClasse(["Classe_SE","Classe_TR"]) ? 5 : 0),
        "atqm": (isClasse(["Classe_SE","Classe_TR"]) ? 100 : 0),
        "danode--Vulcao_de_Flechas": getNivelBase(),
        "danode--Estilingue": getNivelBase(),
        "danode--Flecha_Melodica": getNivelBase(),
        "danode--Ruido_Estridente": parseInt(getNivelBase() / 5) * 2,
        "conjuracaovariavel--Ruido_Estridente": parseInt(getNivelBase() / 5) * (-1)
      }
    }
  },
  {
    itemId:     "28392",
    itemNome:   "Brinco Sombrio de Arqueiro",
    itemTipo:   "itemBrincoSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24255"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0),
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["24255"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "24246",
    itemNome:   "Brinco Sombrio de Espadachim",
    itemTipo:   "itemBrincoSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24250"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0),
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["24250"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "24247",
    itemNome:   "Brinco Sombrio de Mercador",
    itemTipo:   "itemBrincoSombrio",
    itemNivel:  1,
    itemClasses: ["Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24251"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0),
        "danode--Mammonita": 20 + (getItemRefino(slot) * 5),
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["24251"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0),
      }
    }
  },
  {
    itemId:     "28391",
    itemNome:   "Brinco Sombrio de Gatuno",
    itemTipo:   "itemBrincoSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24253"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0),
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["24253"]]) ? (1 + (getItemRefino(slot) + getItemRefino("itemColarSombrio") >= 10 ? 2 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "24339",
    itemNome:   "Brinco Sombrio Total",
    itemTipo:   "itemBrincoSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR","REQ_CVar","REQ_Precisao","REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": getItemRefino(slot) * 10,
        "atributoforca": getItemRefino(slot),
        "atributoagilidade": getItemRefino(slot),
        "atributovitalidade": getItemRefino(slot),
        "atributointeligencia": getItemRefino(slot),
        "atributodestreza": getItemRefino(slot),
        "atributosorte": getItemRefino(slot)
      }
    }
  },
  {
    itemId:     "420019",
    itemNome:   "Broto dos Anciões AGI",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DCrit","REQ_IgnDef","REQ_Aspd"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["20964"],["15353"]]) ? (7 + ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 7 : 0)) : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["20964"],["15353"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 14 ? 80 : 0) : 0),
        "aspdf": (hasCombo(slot, itemId, tipoItem, [["20964"],["15353"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 1 : 0) : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["20964"],["15353"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? -10 : 0) : 0)
      }
    }
  },
  {
    itemId:     "420018",
    itemNome:   "Broto dos Anciões DES",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_DCrit","REQ_IgnDef"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": (hasCombo(slot, itemId, tipoItem, [["15354"],["20967"]]) ? (7 + ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 7 : 0)) : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["15354"],["20967"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 14 ? 80 : 0) : 0),
        "atqarmap": (hasCombo(slot, itemId, tipoItem, [["15354"],["20967"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 5 : 0) : 0),
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["15354"],["20967"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? 10 : 0) : 0)
      }
    }
  },
  {
    itemId:     "420017",
    itemNome:   "Broto dos Anciões FOR",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DCorp"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": (hasCombo(slot, itemId, tipoItem, [["15278"],["20963"]]) ? 5 : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["15278"],["20963"]]) ? (((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 14 ? 80 : 0) + ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 30 : 0)) : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["15278"],["20963"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? -7 : 0) : 0),
        "danomelee": (hasCombo(slot, itemId, tipoItem, [["15278"],["20963"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? 10 : 0) : 0)
      }
    }
  },
  {
    itemId:     "420022",
    itemNome:   "Broto dos Anciões INT",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_Pos","REQ_IgnDefm"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? -10 : 0),
        "atqm": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 14 ? 80 : 0) : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? -7 : 0) : 0),
        "danomagiconeutro": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicofogo": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicoagua": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicoterra": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicovento": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicosagrado": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicosombrio": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicoveneno": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicofantasma": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomagicotamanho": (hasCombo(slot, itemId, tipoItem, [["15279"],["20966"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? 10 : 0) : 0)
      }
    }
  },
  {
    itemId:     "420020",
    itemNome:   "Broto dos Anciões SOR",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DCrit","REQ_DCorp","REQ_TCrit","REQ_Aspd","REQ_IgnDef"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["15346"],["20968"]]) ? 5 : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["15346"],["20968"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 14 ? 80 : 0) : 0),
        "danocritico": (hasCombo(slot, itemId, tipoItem, [["15346"],["20968"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 12 : 0) : 0),
        "danofisicotamanho": (hasCombo(slot, itemId, tipoItem, [["15346"],["20968"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "danomelee": (hasCombo(slot, itemId, tipoItem, [["15346"],["20968"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? 10 : 0) : 0),
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["15346"],["20968"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? 10 : 0) : 0)
      }
    }
  },
  {
    itemId:     "420021",
    itemNome:   "Broto dos Anciões VIT",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_SP","REQ_Pos","REQ_IgnDef"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": (hasCombo(slot, itemId, tipoItem, [["15347"],["20965"]]) ? 10 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["15347"],["20965"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 7 : 0) : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["15347"],["20965"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 14 ? 80 : 0) : 0),
        "atqarmap": (hasCombo(slot, itemId, tipoItem, [["15347"],["20965"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 18 ? 10 : 0) : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["15347"],["20965"]]) ? ((getItemRefino("itemArmadura") + getItemRefino("itemCapa")) >= 22 ? -10 : 0) : 0)
      }
    }
  },
  {
    itemId:     "13447",
    itemNome:   "Byeollungum [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Espada1",
    itemArmaATQ: 150,
    itemArmaNivel: 4,
    itemNivel:  40,
    itemPropriedade: 0,
    itemClasses: ["Classe_ES","Classe_GA","Classe_MC","Classe_LO","Classe_PA","Classe_GC","Classe_ST","Classe_MF","Classe_CR","Classe_RK","Classe_RG","Classe_GX","Classe_SC","Classe_MH","Classe_BI"],
    itemBonus: ["REQ_TCrit","REQ_DMagico","REQ_DFisico","REQ_DDist","REQ_Aspd"],
    slots: 2,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia], [...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicochefe": 50,
        "atributoforca": 2,
        "atributoagilidade": 2,
        "atributovitalidade": 2,
        "atributointeligencia": 2,
        "atributodestreza": 2,
        "atributosorte": 2,
        "esquivaperfeita": 2
      }
    }
  },
  {
    itemId:     "20931",
    itemNome:   "Cachecol Arco-íris",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Tempestade_de_Flechas","REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "spp": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0),
        "danodistancia": 2 + (getItemRefino(slot) >= 5 ? 3 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0) + (isClasse(["classe_SE","Classe_SE_NT"]) ? 20 : 0),
        "posconjuracao": isClasse(["classe_SE","Classe_SE_NT"]) ? (-10) : 0,
        "recargade--Tempestade_de_Flechas": isClasse(["classe_SE","Classe_SE_NT"]) ? (-0.2) : 0,
        "danode--Tempestade_de_Flechas": isClasse(["classe_SE","Classe_SE_NT"]) ? 10 : 0,
      }
    }
  },
  {
    itemId:     "420110",
    itemNome:   "Cachecol Camuflado",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": parseInt(getNivelBase() / 10)
      }
    }
  },
  {
    itemId:     "20944",
    itemNome:   "Capa Anti-Magia [1]",
    itemTipo:   "itemCapa",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 300 + (parseInt(getItemRefino(slot) / 2) * 100),
        "hpp": (parseInt(getItemRefino(slot) / 3) * 2) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atqarmap": (getItemRefino(slot) >= 7 ? 7 : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["15073"]]) ? (30 + (getItemRefino("itemArmadura") >= 11 ? 40 : 0)) : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["15073"]]) ? (getItemRefino("itemArmadura") >= 11 ? -10 : 0) : 0) + (hasCombo(slot, itemId, tipoItem, [["2963"]]) ? -5 : 0)
      }
    }
  },
  {
    itemId:     "400287",
    itemNome:   "Capacete de Intensificação [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Pos","REQ_DMagico","REQ_SP"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -20,
        "danofisicoraca": getItemRefino(slot) >= 10 ? 30 : 0,
        "danomagicoraca": getItemRefino(slot) >= 10 ? 30 : 0,
        "hpp": getItemRefino(slot) >= 12 ? 30 : 0,
        "spp": getItemRefino(slot) >= 12 ? 30 : 0
      }
    }
  },
  {
    itemId:     "480077",
    itemNome:   "Capa de Magma [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["Classe_ME"],
    itemBonus: ["REQ_Precisao","REQ_DFisico","REQ_Brandir_Machado","REQ_Furia_do_Furacao"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": 5,
        "hpp": 2 + (getItemRefino(slot) >= 7 ? 1 : 0) + (getItemRefino(slot) >= 9 ? 2 : 0),
        "spp": 2 + (getItemRefino(slot) >= 7 ? 1 : 0) + (getItemRefino(slot) >= 9 ? 2 : 0),
        "aspdp": (getItemRefino(slot) >= 7 ? 5 : 0),
        "precisaoperfeita": 50,
        "danode--Furia_do_Furacao": 100,
        "danode--Brandir_Machado": 100
      }
    }
  },
  {
    itemId:     "20800",
    itemNome:   "Capa do Carrasco [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["Classe_GX"],
    itemBonus: ["REQ_Pos","REQ_Tocaia","REQ_Destruidor_de_Almas","REQ_Laminas_Retalhadoras"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": (-5) + (getItemRefino(slot) >= 7 ? (-3) : 0) + (getItemRefino(slot) >= 9 ? (-3) : 0),
        "danode--Tocaia": 50 + (getItemRefino(slot) >= 9 ? (getItemRefino(slot)) : 0),
        "danode--Destruidor_de_Almas": 50 + (getItemRefino(slot) >= 9 ? parseInt(getItemRefino(slot) / 3) : 0),
        "danode--Laminas_Retalhadoras": 5 + (getItemRefino(slot) >= 9 ? parseInt(getItemRefino(slot) / 30) : 0),
        "hpp": 15,
        "spp": getItemRefino(slot) >= 7 ? 5 : 0
      }
    }
  },
  {
    itemId:     "20925",
    itemNome:   "Capa do Comandante [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    encantamentos: [
      ["4949","4818","4854","4856","4872","4855","4857","4858","4853","4817","4812","4826","4827","4869","4950","4834"],
      ["4949","4818","4854","4856","4872","4855","4857","4858","4853","4817","4812","4826","4827","4869","4950","4834"],
      ["4949","4818","4854","4856","4872","4855","4857","4858","4853","4817","4812","4826","4827","4869","4950","4834"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "atq": 10 + (getItemRefino(slot) >= 5 ? 20 : 0) + (getItemRefino(slot) >= 7 ? 30 : 0),
        "atqm": 10 + (getItemRefino(slot) >= 5 ? 20 : 0) + (getItemRefino(slot) >= 7 ? 30 : 0),
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["22037"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["22037"]]) ? 10 : 0,
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["22036"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["22036"]]) ? 10 : 0,
        "posconjuracao": hasCombo(slot, itemId, tipoItem, [["22036"]]) ? -20 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["22035"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["22035"]]) ? 10 : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["22035"]]) ? -10 : 0
      }
    }
  },
  {
    itemId:     "19316",
    itemNome:   "Capuz de Esquilo [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCritD","REQ_DCrit","REQ_IgnDef"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "critd": 5 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 20 : 0),
        "danocritico": 10 + (getItemRefino(slot) >= 7 ? 2 : 0) + (getItemRefino(slot) >= 9 ? 6 : 0) + (getItemRefino(slot) >= 11 ? 12 : 0),
        "aspdf": 1 + (getItemRefino(slot) >= 7 ? 1 : 0) + (getItemRefino(slot) >= 9 ? 1 : 0) + (getItemRefino(slot) >= 11 ? 1 : 0),
        "ignoredef": 10 + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 25 : 0)
      }
    }
  },
  {
    itemId:     "19316a",
    itemNome:   "Capuz de Esquilo [1] - Ativado",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCritD","REQ_DCrit","REQ_IgnDef"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(getItemRefino(slot) < 11) {
        $("#itemTopo select.refino").val("11");
      }
      return {
        "critd": 50,
        "danocritico": 130,
        "aspdf": 4,
        "ignoredef": 70
      }
    }
  },
  {
    itemId:     "19306",
    itemNome:   "Carta de Comodo",
    itemTipo:   "itemBaixo",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit","REQ_Aspd"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 5 + (hasCombo(slot, itemId, tipoItem, [["5918","410004"]]) ? (2 + (parseInt(getAtributoBase("sor") / 10) * 2) + (getAtributoBase("sor") >= 108 ? 2 : 0) + (getAtributoBase("sor") >= 120 ? 4 : 0)) : 0),
        "aspdf": (hasCombo(slot, itemId, tipoItem, [["5918","410004"]]) ? (1 + (getAtributoBase("sor") >= 108 ? 1 : 0) + (getAtributoBase("sor") >= 120 ? 2 : 0)) : 0),
      }
    }
  },
  {
    itemId:     "400044",
    itemNome:   "Cartola Sombria [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_CFix","REQ_Petalas_Flamejantes","REQ_Lanca_Congelante","REQ_Lamina_de_Vento","REQ_Chamas_de_Hela","REQ_Cometa"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": (parseInt(getItemRefino(slot) / 2) * 20) + (hasCombo(slot, itemId, tipoItem, [["26151"]]) ? 30 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0) + (hasCombo(slot, itemId, tipoItem, [["16089"]]) ? (parseInt(getItemRefino(slot) / 2) * (-3)) : 0),
        "danomagiconeutro": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicofogo": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicovento": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoterra": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoagua": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicosagrado": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["16089"]]) ? 5 : 0),
        "danomagicosombrio": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoveneno": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicofantasma": (getItemRefino(slot) >= 9 ? 15 : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danomagicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "danode--Meteoros_de_Nepeta": (hasCombo(slot, itemId, tipoItem, [["26164"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "recargade--Meteoros_de_Nepeta": (hasCombo(slot, itemId, tipoItem, [["26164"]]) ? (-1) : 0),
        "danode--Espa": (hasCombo(slot, itemId, tipoItem, [["26151"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "danode--Eswhoo": (hasCombo(slot, itemId, tipoItem, [["26151"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0)
      }
    }
  },
  {
    itemId:     "18109",
    itemNome:   "Catapulta [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 150,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC"],
    itemBonus: ["REQ_DFisico","REQ_Disparo_Triplo"],
    slots: 2,
    encantamentos: [
      ["4807","4811","4810","4809","4815","4814","4813","4818","4817","4816","4832","4833","4834","4700","4701","4702","4730","4731","4732","4740","4741","4742","4710","4711","4712","4720","4721","4722","4750","4751","4752"],
      ["4807","4811","4810","4809","4815","4814","4813","4818","4817","4816","4832","4833","4834","4700","4701","4702","4730","4731","4732","4740","4741","4742","4710","4711","4712","4720","4721","4722","4750","4751","4752"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Disparo_Triplo": getItemRefino(slot) * 2
      }
    }
  },
  {
    itemId:     "490031",
    itemNome:   "Cauda de Petal [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCritD","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 5 + (hasCombo(slot, itemId, tipoItem, [["19316"]]) ? ((getItemRefino("itemTopo") >= 6 ? 10 : 0) + (getItemRefino("itemTopo") >= 8 ? 15 : 0)) : 0),
        "critd": 5 + (hasCombo(slot, itemId, tipoItem, [["19316"]]) ? ((getItemRefino("itemTopo") >= 6 ? 10 : 0) + (getItemRefino("itemTopo") >= 8 ? 15 : 0)) : 0),
        "aspdf": 1 + (hasCombo(slot, itemId, tipoItem, [["19316"]]) ? ((getItemRefino("itemTopo") >= 6 ? 1 : 0) + (getItemRefino("itemTopo") >= 8 ? 1 : 0)) : 0),
        "danofisicochefe": 5 + (hasCombo(slot, itemId, tipoItem, [["19316"]]) ? ((getItemRefino("itemTopo") >= 6 ? 10 : 0) + (getItemRefino("itemTopo") >= 8 ? 15 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "410027a",
    itemNome:   "Cesta das Maravilhas + Mascote MVP",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": 10,
        "atq": 200,
        "atqm": 200,
        "atributoforca": 10,
        "atributoagilidade": 10,
        "atributovitalidade": 10,
        "atributointeligencia": 10,
        "atributodestreza": 10,
        "atributosorte": 10
      }
    }
  },
  {
    itemId:     "410027b",
    itemNome:   "Cesta das Maravilhas + Mascote Evoluído 1",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": 20,
        "danomagicotamanho": 10,
        "atq": 200,
        "atqm": 200
      }
    }
  },
  {
    itemId:     "410027c",
    itemNome:   "Cesta das Maravilhas + Mascote Evoluído 2",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": 10,
        "atq": 200,
        "atqm": 200
      }
    }
  },
  {
    itemId:     "410028a",
    itemNome:   "Cesta das Maravilhas [1] + Mascote MVP",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "atq": 200,
        "atqm": 200,
        "atributoforca": 10,
        "atributoagilidade": 10,
        "atributovitalidade": 10,
        "atributointeligencia": 10,
        "atributodestreza": 10,
        "atributosorte": 10
      }
    }
  },
  {
    itemId:     "410028b",
    itemNome:   "Cesta das Maravilhas [1] + Mascote Evoluído 1",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "danofisicotamanho": 10,
        "atq": 200,
        "atqm": 200
      }
    }
  },
  {
    itemId:     "410028c",
    itemNome:   "Cesta das Maravilhas [1] + Mascote Evoluído 2",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_DFisico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "atq": 200,
        "atqm": 200
      }
    }
  },
  {
    itemId:     "1285",
    itemNome:   "Chakram [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 130,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT","Classe_SX"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    encantamentos: [encantamentosMalangdoFisico, encantamentosMalangdoFisico],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 10,
        "danode--Impacto_Meteoro": 20
      }
    }
  },
  {
    itemId:     "19296",
    itemNome:   "Chapéu Chique com Pena [1]",
    itemTipo:   "itemTopo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_CFix","REQ_Disparo_Triplo","REQ_Tempestade_de_Flechas","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 15,
        "danodistancia": (getItemRefino(slot) >= 7 ? 7 : 0) + (getItemRefino(slot) >= 11 ? 5 : 0),
        "atqarmap": (getItemRefino(slot) >= 9 ? 5 : 0),
        "aspdf": (getItemRefino(slot) >= 9 ? 1 : 0),
        "conjuracaofixas": ((getItemRefino(slot) >= 11 ? ((Math.min(getItemRefino(slot), 15) - 10) / (-10)) : 0)),
        "danode--Temporal_de_Mil_Flechas": hasCombo(slot, itemId, tipoItem, [["2544"]]) ? (parseInt(getItemRefino("itemCapa") / 2) * 7) : 0,
        "danode--Tempestade_de_Flechas": hasCombo(slot, itemId, tipoItem, [["2554"]]) ? (parseInt(getItemRefino("itemCapa") / 2) * 12) : 0,
        "danode--Disparo_Triplo": hasCombo(slot, itemId, tipoItem, [["2507","2525"]]) ? (parseInt(getItemRefino("itemCapa") / 2) * 15) : 0
      }
    }
  },
  {
    itemId:     "18541",
    itemNome:   "Chapéu de Caçador [1]",
    itemTipo:   "itemTopo",
    itemNivel:  30,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "danocritico": 10 + (hasCombo(slot, itemId, tipoItem, [["1764"]]) ? (5 + (getItemRefino(slot) >= 7 ? 5 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "400022",
    itemNome:   "Chapéu de Fundição [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CVar","REQ_CFix","REQ_Canhao_de_Protons","REQ_Tempestade_de_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 20) + (hasCombo(slot, itemId, tipoItem, [["16088"]]) ? 30 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0),
        "danodistancia": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["18178"]]) ? (parseInt(getItemRefino(slot) / 2) * 7) : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danofisicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["28136"]]) ? 5 : 0),
        "danode--Canhao_de_Protons": (hasCombo(slot, itemId, tipoItem, [["16088"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "recargade--Tempestade_de_Flechas": (hasCombo(slot, itemId, tipoItem, [["18178"]]) ? (-2.5) : 0)
      }
    }
  },
  {
    itemId:     "5905",
    itemNome:   "Chapéu de Maestro [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["Classe_MU","Classe_TR"],
    itemBonus: ["REQ_DFisico","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Temporal_de_Mil_Flechas": 15,
        "conjuracaofixap": -40
      }
    }
  },
  {
    itemId:     "1970",
    itemNome:   "Chicote da Rainha",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 150,
    itemArmaNivel: 4,
    itemNivel:  65,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia], [...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Vulcao_de_Flechas": 10,
        "danode--Flecha_Melodica": 10
      }
    }
  },
  {
    itemId:     "1976",
    itemNome:   "Chicote da Rainha [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 150,
    itemArmaNivel: 4,
    itemNivel:  65,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia], [...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Vulcao_de_Flechas": 10,
        "danode--Flecha_Melodica": 10
      }
    }
  },
  {
    itemId:     "1980",
    itemNome:   "Chicote do Desequilíbrio [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 110,
    itemArmaNivel: 3,
    itemNivel:  70,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2,
        "atributodestreza": 3
      }
    }
  },
  {
    itemId:     "1981",
    itemNome:   "Chicote Glorioso",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 50,
    itemArmaNivel: 4,
    itemNivel:  80,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["5","10"]) ? (95 + (Math.pow(Math.max(Math.min(getItemRefino(slot), 14) - 4, 0), 2))) : 0,
        "ignoredef": isOpponent("racaMonstro",["5","10"]) ? (20 + (getItemRefino(slot) >= 6 ? 5 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "28501",
    itemNome:   "Chifres de Kirin [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2,
        "aspdp": 2 + (getAtributoBase("agi") >= 100 ? 5 : 0),
        "aspdf": (hasCombo(slot, itemId, tipoItem, [["4869"]]) ? 1 : 0) + (hasCombo(slot, itemId, tipoItem, [["4872"]]) ? 1 : 0)
      }
    }
  },
  {
    itemId:     "400002",
    itemNome:   "Chip de Batalha [1]",
    itemTipo:   "itemMeio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_DCrit","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 10,
        "atqm": 10
      }
    }
  },
  {
    itemId:     "2650",
    itemNome:   "Cinto de Morrigane",
    itemTipo:   "itemAcessorio",
    itemNivel:  61,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCrit","REQ_EP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5,
        "crit": 3
      }
    }
  },
  {
    itemId:     "16049",
    itemNome:   "Clava de Iansã [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 130,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 4,
    itemClasses: ["Classe_SA","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: [encantamentosArmasBrasilis],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["8"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicoraca": isOpponent("propriedadeMonstro", ["40","41","42","43"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0
      }
    }
  },
  {
    itemId:     "16055",
    itemNome:   "Clava de Oxóssi [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 130,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 2,
    itemClasses: ["Classe_SA","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: [encantamentosArmasBrasilis],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["2","9"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicoraca": isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0
      }
    }
  },
  {
    itemId:     "16057",
    itemNome:   "Clava de Oxum [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 130,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 1,
    itemClasses: ["Classe_SA","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: [encantamentosArmasBrasilis],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["0","3"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicoraca": isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0
      }
    }
  },
  {
    itemId:     "16066",
    itemNome:   "Clava de Xangô [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 130,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 3,
    itemClasses: ["Classe_SA","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: [encantamentosArmasBrasilis],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["5","6"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicoraca": isOpponent("propriedadeMonstro", ["30","31","32","33","40","41","42","43"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0
      }
    }
  },
  {
    itemId:     "400006",
    itemNome:   "Cocar do Orc Herói [1]",
    itemTipo:   "itemTopo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(hasCombo(slot, itemId, tipoItem, [["4066","4256","4143","4135","4255"]])) {
        temInvestigar = true;
      }
      return {
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1,
        "hpp": (parseInt(getItemRefino(slot) / 4) * 3) + (hasCombo(slot, itemId, tipoItem, [["4135"]]) ? 50 : 0) + (hasCombo(slot, itemId, tipoItem, [["4143"]]) ? 20 : 0),
        "danofisicoraca": (hasCombo(slot, itemId, tipoItem, [["4255"]]) ? (isOpponent("racaMonstro", ["2","5","10","11"]) ? 10 : 0) : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["4256"]]) ? -3 : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["4256"]]) ? 3 : 0)
      }
    }
  },
  {
    itemId:     "5457",
    itemNome:   "Coelhinho de Cabeça [1]",
    itemTipo:   "itemTopo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    slots: 1,
    encantamentos: [
      ["4722","4702","4732","4712","4752","4742"],
      ["4832","4811","4869","4815","29135","4805"],
      ["4833","4810","4872","4814","29136","4850"],
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5 + (getItemRefino(slot) > 5 ? (getItemRefino(slot) - 5) : 0),
        "atqm": 5 + (getItemRefino(slot) > 5 ? (getItemRefino(slot) - 5) : 0)
      }
    }
  },
  {
    itemId:     "420006",
    itemNome:   "Coleira de Espinhos",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Precisao"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 50) * 4,
        "precisaoperfeita": parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 50) * 5
      }
    }
  },
  {
    itemId:     "19438",
    itemNome:   "Colar da Bruxa",
    itemTipo:   "itemBaixo",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -5
      }
    }
  },
  {
    itemId:     "32295",
    itemNome:   "Colar de Cristal - Ativo",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 10,
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["00","01","02","03","10","11","12","13","40","41","42","43","50","51","52","53","90","91","92","93"]) ? 30 : 0
      }
    }
  },
  {
    itemId:     "28537",
    itemNome:   "Colar de Juperos [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  20,
    itemClasses: ["Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"],
    itemBonus: ["REQ_Cavalo_de_Pau","REQ_Furia_do_Furacao","REQ_Brandir_Machado"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Cavalo_de_Pau": parseInt(getNivelBase() / 3),
        "danode--Furia_do_Furacao": parseInt(getNivelBase() / 5),
        "danode--Brandir_Machado": parseInt(getNivelBase() / 7),
      }
    }
  },
  {
    itemId:     "24047",
    itemNome:   "Colar Sombrio da Velocidade",
    itemTipo:   "itemColarSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_Aspd"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "aspdp": 1 + (getItemRefino(slot) >= 7 ? 1 : 0) + (getItemRefino(slot) >= 9 ? 2 : 0)
      }
    }
  },
  {
    itemId:     "24255",
    itemNome:   "Colar Sombrio de Arqueiro",
    itemTipo:   "itemColarSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_Chuva_de_Flechas","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Chuva_de_Flechas": 20 + (getItemRefino(slot) * 5)
      }
    }
  },
  {
    itemId:     "24250",
    itemNome:   "Colar Sombrio de Espadachim",
    itemTipo:   "itemColarSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_Impacto_Explosivo"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Impacto_Explosivo": 20 + (getItemRefino(slot) * 5)
      }
    }
  },
  {
    itemId:     "24253",
    itemNome:   "Colar Sombrio de Gatuno",
    itemTipo:   "itemColarSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_Envenenar","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Envenenar": 20 + (getItemRefino(slot) * 5)
      }
    }
  },
  {
    itemId:     "24251",
    itemNome:   "Colar Sombrio de Mercador",
    itemTipo:   "itemColarSombrio",
    itemNivel:  1,
    itemClasses: ["Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Cavalo_de_Pau": 20 + (getItemRefino(slot) * 5)
      }
    }
  },
  {
    itemId:     "24340",
    itemNome:   "Colar Sombrio Total",
    itemTipo:   "itemColarSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR","REQ_CVar","REQ_Precisao","REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": getItemRefino(slot) * 10,
        "atributoforca": getItemRefino(slot),
        "atributoagilidade": getItemRefino(slot),
        "atributovitalidade": getItemRefino(slot),
        "atributointeligencia": getItemRefino(slot),
        "atributodestreza": getItemRefino(slot),
        "atributosorte": getItemRefino(slot)
      }
    }
  },
  {
    itemId:     "15128",
    itemNome:   "Colete E.X.C.",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_VIT","REQ_HP","REQ_Pos","REQ_EP","REQ_DFisico","REQ_DMagico","REQ_SP","REQ_Aspd"],
    slots: 0,
    encantamentos: [
      ["4982","4986","4987","4988","4989"],
      ["4983","4986","4987","4988","4989"],
      ["4991","4985","4986","4987","4988","4989"],
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 6 + (getNivelBase >= 130 ? 4 : 0),
        "hpp": parseInt(getItemRefino(slot) / 3) * 4,
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["20773"]]) ? (-10 + (getNivelBase() >= 130 ? -10 : 0)) : 0),
        "esquivaperfeita": (hasCombo(slot, itemId, tipoItem, [["20773"]]) ? (getNivelBase >= 130 ? 6 : 0) : 0),
      }
    }
  },
  {
    itemId:     "1846",
    itemNome:   "Combo Ilusional [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 250,
    itemArmaNivel: 4,
    itemNivel:  120,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Punho_do_Dragao": 10 + (parseInt(getItemRefino(slot) / 2) * 5),
        "danode--Soco_Furacao": 10 + (parseInt(getItemRefino(slot) / 2) * 5),
        "danode--Garra_de_Tigre": (parseInt(getItemRefino(slot) / 3) * 5) + (hasCombo(slot, itemId, tipoItem, [["20838"]]) ? ((getItemRefino(slot) >= 7 && getItemRefino("itemCapa") >= 7 ? 20 : 0) + (getItemRefino(slot) + getItemRefino("itemCapa") >= 22 ? 15 : 0)) : 0),
        "atq": hasCombo(slot, itemId, tipoItem, [["20838"]]) ? 40 : 0,
        "recargade--Combo_Rapido": (hasCombo(slot, itemId, tipoItem, [["20838"]]) && (getItemRefino(slot) + getItemRefino("itemCapa") >= 18) ? (-1) : 0),
      }
    }
  },
  {
    itemId:     "1934",
    itemNome:   "Contrabaixo [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Instrumento",
    itemArmaATQ: 180,
    itemArmaNivel: 3,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "2978",
    itemNome:   "Coração Bondoso [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  110,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Aspd","REQ_DDist","REQ_DCrit"],
    slots: 1,
    encantamentos: [
      ["4700","4701","4702","4703","4730","4731","4732","4733","4740","4741","4742","4723","4710","4711","4712","4743","4720","4721","4722","4713"],
      ["4700","4701","4702","4703","4730","4731","4732","4733","4740","4741","4742","4723","4710","4711","4712","4743","4720","4721","4722","4713"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 500
      }
    }
  },
  {
    itemId:     "2977",
    itemNome:   "Coração Partido [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  110,
    itemClasses: ["todas"],
    itemBonus: ["REQ_SP","REQ_DFisico","REQ_Aspd","REQ_DDist","REQ_DCrit"],
    slots: 1,
    encantamentos: [
      ["4700","4701","4702","4703","4730","4731","4732","4733","4740","4741","4742","4723","4710","4711","4712","4743","4720","4721","4722","4713"],
      ["4700","4701","4702","4703","4730","4731","4732","4733","4740","4741","4742","4723","4710","4711","4712","4743","4720","4721","4722","4713"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 200
      }
    }
  },
  {
    itemId:     "2235",
    itemNome:   "Coroa",
    itemTipo:   "itemTopo",
    itemNivel:  45,
    itemClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2
      }
    }
  },
  {
    itemId:     "5165",
    itemNome:   "Coroa [1]",
    itemTipo:   "itemTopo",
    itemNivel:  45,
    itemClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 1
      }
    }
  },
  {
    itemId:     "19019",
    itemNome:   "Coroa da Rainha de Copas [1]",
    itemTipo:   "itemTopo",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Tempestade_de_Flechas","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 3 + (getNivelBase() >= 130 ? (getItemRefino(slot)) : (parseInt(getItemRefino(slot) / 2))),
        "danodistancia": 4 + (hasCombo(slot, itemId, tipoItem, [["1730","1731","1732","1733"]]) ? 45 : 0)
      }
    }
  },
  {
    itemId:     "19402",
    itemNome:   "Cosmos",
    itemTipo:   "itemBaixo",
    itemNivel:  40,
    itemClasses: ["todas"],
    itemBonus: ["REQ_IgnDef"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "ignoredef": hasCombo(slot, itemId, tipoItem, [["410000"]]) ? 50 : 0
      }
    }
  },
  {
    itemId:     "15283",
    itemNome:   "Couraça de Senshi [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_IgnDef"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 10 + (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 8 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 30 : 0),
        "ignoredef": 10 + (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 8 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0)
      }
    }
  },
  {
    itemId:     "450142",
    itemNome:   "Couraça do Orc [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -10,
        "danofisicop": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "danofisicoraca": (isOpponent("propriedadeMonstro", ["60","61","62","63"]) && hasCombo(slot, itemId, tipoItem, [["4135"]])) ? (getNivelBase() >= 100 ? (getItemRefino(slot) * 10) : (getItemRefino(slot) * 3)) : 0
      }
    }
  },
  {
    itemId:     "19445",
    itemNome:   "Curativo YSF01",
    itemTipo:   "itemMeio",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_AGI","REQ_Aspd","REQ_HP","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 10,
        "hpp": 15,
        "aspdp": 15
      }
    }
  },
  {
    itemId:     "19446",
    itemNome:   "Curativo YSF01 [1]",
    itemTipo:   "itemMeio",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_AGI","REQ_Aspd","REQ_HP","REQ_DCrit"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 10,
        "hpp": 15,
        "aspdp": 15
      }
    }
  },
  {
    itemId:     "19446a",
    itemNome:   "Curativo YSF01 [1] - Ativo",
    itemTipo:   "itemMeio",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_AGI","REQ_Aspd","REQ_HP","REQ_DCrit"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      $(".itemSlot#itemMeio .carta select").eq(0).val("4357");
      return {
        "atributoagilidade": 10,
        "hpp": 15,
        "aspdp": 15,
        "atq": 1000
      }
    }
  },
  {
    itemId:     "28433",
    itemNome:   "Cristal da Luz Azul [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 5 + (getAtributoBase("sor") >= 100 ? 10 : 0),
        "danocritico": 2 + (getAtributoBase("sor") >= 100 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["4818"]]) ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["4817"]]) ? 10 : 0),
        "aspdp": 5,
      }
    }
  },
  {
    itemId:     "2234",
    itemNome:   "Diadema",
    itemTipo:   "itemTopo",
    itemNivel:  45,
    itemClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2
      }
    }
  },
  {
    itemId:     "5164",
    itemNome:   "Diadema [1]",
    itemTipo:   "itemTopo",
    itemNivel:  45,
    itemClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 1
      }
    }
  },
  {
    itemId:     "18823",
    itemNome:   "Diadema do Grifo",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_Disparo_Perfurante","REQ_Escudo_Compressor","REQ_Toque_do_Oblivio"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 1 + (getAtributoBase("agi") >= 108 ? 1 : 0),
        "aspdf": (getAtributoBase("agi") >= 108 ? 1 : 0),
        "danode--Disparo_Perfurante": hasCombo(slot, itemId, tipoItem, [["1433","2153"]]) ? 20 : 0,
        "danode--Escudo_Compressor": hasCombo(slot, itemId, tipoItem, [["1433","2153"]]) ? 20 : 0,
        "danode--Toque_do_Oblivio": hasCombo(slot, itemId, tipoItem, [["1433","2153"]]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "19024",
    itemNome:   "Diadema do Paraíso",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": (-5) + (getAtributoBase("vit") >= 108 ? (-5) : 0) + (hasCombo(slot, itemId, tipoItem, [["5170","18755"]]) ? (5 + (getItemRefino("itemTopo") >= 7 ? 5 : 0)) : 0),
        "hpp": (getAtributoBase("vit") >= 120 ? 3 : 0) + (hasCombo(slot, itemId, tipoItem, [["5170","18755"]]) ? (getItemRefino("itemTopo") >= 9 ? 5 : 0) : 0)
      }
    }
  },
  {
    itemId:     "19455",
    itemNome:   "Diadema do Paraíso [1]",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": (-5) + (getAtributoBase("vit") >= 108 ? (-5) : 0) + (hasCombo(slot, itemId, tipoItem, [["5170"]]) ? (5 + (getItemRefino("itemTopo") >= 7 ? 5 : 0)) : 0),
        "hpp": (getAtributoBase("vit") >= 120 ? 3 : 0) + (hasCombo(slot, itemId, tipoItem, [["5170"]]) ? (getItemRefino("itemTopo") >= 9 ? 5 : 0) : 0)
      }
    }
  },
  {
    itemId:     "19138",
    itemNome:   "Diadema do Serafim",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CVar","REQ_Cura"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "atq": (parseInt(getAtributoBase("int") / 8) * 5) + (getAtributoBase("int") >= 108 ? 50 : 0) + (getAtributoBase("int") >= 120 ? 125 : 0),
        "conjuracaovariavel": parseInt(getAtributoBase("int") / 8) + (getAtributoBase("int") >= 108 ? 4 : 0) + (getAtributoBase("int") >= 120 ? 6 : 0)
      }
    }
  },
  {
    itemId:     "28492",
    itemNome:   "Diário do Renegado [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_AGI","REQ_FOR","REQ_INT"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 5 + (isClasse(["Classe_SC"]) ? 5 : 0),
        "atributoagilidade": 5 + (isClasse(["Classe_SC"]) ? 5 : 0),
        "atributointeligencia": 5 + (isClasse(["Classe_SC"]) ? 5 : 0)
      }
    }
  },
  {
    itemId:     "420013",
    itemNome:   "Donzela Serelepe",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 30,
        "atqm": 30
      }
    }
  },
  {
    itemId:     "1287",
    itemNome:   "Durga [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 190,
    itemArmaNivel: 3,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    encantamentos: [encantamentosMalangdoFisico, encantamentosMalangdoFisico],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "19381",
    itemNome:   "Echarpe do Paraíso",
    itemTipo:   "itemBaixo",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["19024","19455"]]) ? (5 + (getAtributoBase("vit") >= 108 ? 5 : 0) + (getAtributoBase("vit") >= 120 ? 10 : 0)) : 0,
        "aspdp": hasCombo(slot, itemId, tipoItem, [["19024","19455"]]) ? (5 + (getAtributoBase("vit") >= 108 ? 5 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "19499",
    itemNome:   "Echarpe Misteriosa",
    itemTipo:   "itemBaixo",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_Aspd"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": parseInt((getAtributoBase("int") + getAtributoBase("des")) / 50) * 4,
        "aspdp": parseInt((getAtributoBase("int") + getAtributoBase("des")) / 50) * 2
      }
    }
  },
  {
    itemId:     "460000",
    itemNome:   "Égide das Divindades [1]",
    itemTipo:   "itemEscudo",
    itemDefesa: 150,
    itemPeso: 120,
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Cura","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 15 + (getItemRefino(slot) * 2),
        "posconjuracao": (getItemRefino(slot) >= 8 ? (-10) : 0) + (getItemRefino(slot) >= 10 ? (-10) : 0)
      }
    }
  },
  {
    itemId:     "5127",
    itemNome:   "Elmo de Morrigane",
    itemTipo:   "itemTopo",
    itemNivel:  61,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCrit","REQ_EP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 2 + (hasCombo(slot, itemId, tipoItem, [["2519"],["2650"],["2651"]]) ? 9 : 0),
        "atq": 3 + (hasCombo(slot, itemId, tipoItem, [["2519"],["2650"],["2651"]]) ? 18 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["2519"],["2650"],["2651"]]) ? 2 : 0,
        "crit": hasCombo(slot, itemId, tipoItem, [["2519"],["2650"],["2651"]]) ? 15 : 0,
        "esquivaperfeita": hasCombo(slot, itemId, tipoItem, [["2519"],["2650"],["2651"]]) ? 13 : 0
      }
    }
  },
  {
    itemId:     "19263",
    itemNome:   "Elmo do Xogunato [1]",
    itemTipo:   "itemTopo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DCrit","REQ_CFix","REQ_Toque_do_Oblivio","REQ_Garra_de_Tigre"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 15) + (hasCombo(slot, itemId, tipoItem, [["1168","1171"]]) ? (parseInt(getItemRefino(slot) / 2) * 20) : 0),
        "aspdp": (getItemRefino(slot) >= 7 ? 10 : 0),
        "atqarmap": (getItemRefino(slot) >= 9 ? 5 : 0),
        "aspdf": (getItemRefino(slot) >= 9 ? 1 : 0),
        "danocritico": (getItemRefino(slot) >= 11 ? 15 : 0),
        "conjuracaofixas": ((getItemRefino(slot) >= 11 ? ((Math.min(getItemRefino("itemMaoDireita"), 15) - 10) / (-10)) : 0)),
        "danode--Toque_do_Oblivio": hasCombo(slot, itemId, tipoItem, [["1413","1418"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 7) : 0,
        "danode--Garra_de_Tigre": hasCombo(slot, itemId, tipoItem, [["1527","16024"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 7) : 0
      }
    }
  },
  {
    itemId:     "1972",
    itemNome:   "Enguia Elétrica [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 100,
    itemArmaNivel: 4,
    itemNivel:  70,
    itemPropriedade: 4,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2,
        "atributointeligencia": 2
      }
    }
  },
  {
    itemId:     "460023",
    itemNome:   "Escudo da Fênix [1]",
    itemTipo:   "itemEscudo",
    itemDefesa: 170,
    itemPeso: 400,
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DCorp"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": Math.min(getItemRefino(slot) * 3, 30),
        "spp": Math.min(getItemRefino(slot) * 3, 30),
        "danomelee": 15
      }
    }
  },
  {
    itemId:     "28921",
    itemNome:   "Escudo de Anemos [1]",
    itemTipo:   "itemEscudo",
    itemDefesa: 150,
    itemPeso: 350,
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["20","21","22","23"]) ? (5 + (getItemRefino(slot) >= 8 ? 10 : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro",["20","21","22","23"]) ? (5 + (getItemRefino(slot) >= 8 ? 10 : 0)) : 0,
        "atq": (getItemRefino(slot) >= 10 && getAtributoBase("for") >= 90 ? 50 : 0),
        "atqm": (getItemRefino(slot) >= 10 && getAtributoBase("int") >= 90 ? 30 : 0),
        "aspdp": (getItemRefino(slot) >= 10 && getAtributoBase("agi") >= 90 ? 5 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 10 && getAtributoBase("des") >= 90 ? (-5) : 0),
        "danocritico": (getItemRefino(slot) >= 10 && getAtributoBase("sor") >= 90 ? 5 : 0)
      }
    }
  },
  {
    itemId:     "460003",
    itemNome:   "Escudo de Penas [1]",
    itemTipo:   "itemEscudo",
    itemDefesa: 150,
    itemPeso: 40,
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_Pos","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": (-4) + (getItemRefino(slot) >= 7 ? (-4) : 0) + (getItemRefino(slot) >= 9 ? (-4) : 0),
        "aspdp": (4) + (getItemRefino(slot) >= 7 ? (4) : 0) + (getItemRefino(slot) >= 9 ? (4) : 0),
        "atq": (getItemRefino(slot) >= 8 ? (50) : 0),
        "atqm": (getItemRefino(slot) >= 8 ? (50) : 0)
      }
    }
  },
  {
    itemId:     "28962",
    itemNome:   "Escudo Divino",
    itemTipo:   "itemEscudo",
    itemDefesa: 100,
    itemPeso: 60,
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_HP","REQ_SP","REQ_DDist","REQ_Pos"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": (hasCombo(slot, itemId, tipoItem, [["4853"]]) ? 15 : 0),
        "danomagicop": (hasCombo(slot, itemId, tipoItem, [["4856"]]) ? 15 : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["4854"]]) ? 15 : 0),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["4855"]]) ? 15 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["4855"]]) ? 15 : 0),
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["4857"]]) ? 15 : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["4858"]]) ? (-15) : 0)
      }
    }
  },
  {
    itemId:     "28941",
    itemNome:   "Escudo E.X.C [1]",
    itemTipo:   "itemEscudo",
    itemDefesa: 95,
    itemPeso: 120,
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico","REQ_EP","REQ_Aspd"],
    slots: 1,
    encantamentos: [
      ["4982","4991","4986","4987","4988","4989"],
      ["4983","4991","4986","4987","4988","4989"],
      ["4985","4991","4986","4987","4988","4989"],
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 1 + (parseInt(getItemRefino(slot) / 3)) + (getNivelBase() >= 130 ? 1 : 0),
        "spp": 1 + (parseInt(getItemRefino(slot) / 3)) + (getNivelBase() >= 130 ? 1 : 0)
      }
    }
  },
  {
    itemId:     "24327",
    itemNome:   "Escudo Sombrio da Deusa",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_SP","REQ_CVar"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "atributovitalidade": 1,
        "aspdf": isClasse(["Classe_LO","Classe_PA","Classe_SX","Classe_ST","Classe_TA","Classe_MT","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_GX","Classe_GX_NT","Classe_SC","Classe_SC_NT"]) ? 1 : 0,
        "spp": isClasse(["Classe_AQ","Classe_PR","Classe_SU","Classe_MS","Classe_NI","Classe_ES","Classe_AR","Classe_AR_NT","Classe_FE","Classe_FE_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT","Classe_OB","Classe_KA"]) ? 2 : 0,
        "efetividadecura": isClasse(["Classe_AQ","Classe_PR","Classe_SU","Classe_MS","Classe_NI","Classe_ES","Classe_AR","Classe_AR_NT","Classe_FE","Classe_FE_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT","Classe_OB","Classe_KA"]) ? 2 : 0,
        "esquiva": isClasse(["Classe_CR","Classe_MF","Classe_SN","Classe_MI","Classe_GY","Classe_JU","Classe_BI","Classe_BI_NT","Classe_MC","Classe_MC_NT","classe_SE","Classe_SE_NT","Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT","Classe_IN"]) ? 15 : 0,
        "spf": isClasse(["Classe_AP","Classe_SA","Classe_DO"]) ? 300 : 0,
        "conjuracaovariavel": isClasse(["Classe_AP","Classe_SA","Classe_DO"]) ? (-5) : 0
      }
    }
  },
  {
    itemId:     "24304",
    itemNome:   "Escudo Sombrio de Bioquímico",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  99,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aegis_Inferi"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Aegis_Inferi": 20 + (getItemRefino(slot) * 5),
        "hpp": 3 + (hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 5 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 5 : 0),
        "ignoredef": (hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) && !isOpponentChefe() ? 50 : 0),
        "ignoredefm": (hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) && !isOpponentChefe() ? 50 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 10 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 10 : 0,
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["24247"],["24251"],["24259"],["24272"],["24291"]]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "24302",
    itemNome:   "Escudo Sombrio de Guardião Real",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  99,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aegis_Inferi"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Aegis_Inferi": 20 + (getItemRefino(slot) * 5),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 5 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 5 : 0),
        "ignoredef": (hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) && !isOpponentChefe() ? 50 : 0),
        "ignoredefm": (hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) && !isOpponentChefe() ? 50 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 10 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 10 : 0,
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["24246"],["24250"],["24257"],["24289"],["24270"]]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "24313",
    itemNome:   "Escudo Sombrio de Musa",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  99,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 5 : 0),
        "spp": 3 + (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 5 : 0),
        "ignoredef": (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) && !isOpponentChefe() ? 50 : 0),
        "ignoredefm": (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) && !isOpponentChefe() ? 50 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 10 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 10 : 0,
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24268"],["24300"],["24281"]]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "24313",
    itemNome:   "Escudo Sombrio de Trovador",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  99,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 5 : 0),
        "spp": 3 + (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 5 : 0),
        "ignoredef": (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) && !isOpponentChefe() ? 50 : 0),
        "ignoredefm": (hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) && !isOpponentChefe() ? 50 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 10 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 10 : 0,
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["28392"],["24255"],["24267"],["24299"],["24280"]]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "24308a",
    itemNome:   "Escudo Sombrio de Renegado",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 5 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 5 : 0),
        "ignoredef": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) && !isOpponentChefe() ? 50 : 0),
        "ignoredefm": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) && !isOpponentChefe() ? 50 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "24308b",
    itemNome:   "Escudo Sombrio de Renegado - Ativo",
    itemTipo:   "itemEscudoSombrio",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "aspdp": getItemRefino(slot),
        "aspdf": (getItemRefino(slot) >= 7 ? 1 : 0) + (getItemRefino(slot) >= 9 ? 1 : 0),
        "hpp": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 5 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 5 : 0),
        "ignoredef": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) && !isOpponentChefe() ? 50 : 0),
        "ignoredefm": (hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) && !isOpponentChefe() ? 50 : 0),
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributovitalidade": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributointeligencia": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0,
        "atributosorte": hasCombo(slot, itemId, tipoItem, [["24295"],["28391"],["24253"],["24263"],["24276"]]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "490366",
    itemNome:   "Estatueta Misteriosa [1]",
    itemTipo:   "itemAcessorioE",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -10,
        "danofisicop": 10,
        "danomagicop": 10
      }
    }
  },
  {
    itemId:     "19101",
    itemNome:   "Familiar de Combate",
    itemTipo:   "itemBaixo",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DFisico"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -5,
        "danofisicoraca": 2
      }
    }
  },
  {
    itemId:     "1989",
    itemNome:   "Fita Rítmica [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 150,
    itemArmaATQM: 120,
    itemArmaNivel: 3,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 20
      }
    }
  },
  {
    itemId:     "520003",
    itemNome:   "Foice de Fogo Vivo [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 360,
    itemArmaATQM: 290,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: false,
    itemClasses: ["Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Mammonita"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(getItemRefino(slot) >= 10) {
        temDrake = true;
      }
      return {
        "atributoforca": 3,
        "atributointeligencia": 5,
        "danode--Mammonita": getNivelBase() * 10,
        "hpp": getItemRefino(slot) * 2,
        "danofisicop": getItemRefino(slot) * 2,
        "precisaoperfeita": getItemRefino(slot) * 2
      }
    }
  },
  {
    itemId:     "19274",
    itemNome:   "Fone Descolado",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -5
      }
    }
  },
  {
    itemId:     "420160",
    itemNome:   "Força Terrestre ",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": parseInt(Math.min(getNivelBase(), 150) / 10)
      }
    }
  },
  {
    itemId:     "28598",
    itemNome:   "Fragmento de Chip [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_ME"],
    itemBonus: ["REQ_Pos","REQ_DFisico","REQ_Canhao","REQ_Gas_Criogenico","REQ_Lanca_Chamas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 10,
        "atributovitalidade": 10,
        "atributodestreza": 10,
        "atq": 50,
        "variavelde--Canhao": -50,
        "variavelde--Gas_Criogenico": -50,
        "variavelde--Lanca_Chamas": -50,
        "posconjuracao": -30,
      }
    }
  },
  {
    itemId:     "1716",
    itemNome:   "Gakkung [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 100,
    itemArmaNivel: 3,
    itemNivel:  33,
    itemPropriedade: 0,
    itemClasses: ["Classe_SC"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "1847",
    itemNome:   "Garra Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 180,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10),
        "danodistancia": (parseInt(getItemRefino(slot) / 3) * 4),
        "danode--Explosao_Espiritual": (getItemRefino(slot) >= 9 ? 10 : 0),
        "recargade--Explosao_Espiritual": (getItemRefino(slot) >= 11 ? (-1) : 0),
      }
    }
  },
  {
    itemId:     "1837",
    itemNome:   "Garra de Ferro [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 100,
    itemArmaNivel: 3,
    itemNivel:  40,
    itemPropriedade: 0,
    itemClasses: ["Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "ignoredef": 100,
        "aspdp": (-5) + (parseInt(getItemRefino(slot) / 2)),
        "atq": 100
      }
    }
  },
  {
    itemId:     "1841",
    itemNome:   "Garra Prismática [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 140,
    itemArmaNivel: 4,
    itemNivel:  105,
    itemPropriedade: 0,
    itemClasses: ["Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": 1,
        "aspdp": getItemRefino(slot),
        "danofisicotamanho": isOpponent("tamanhoMonstro", ["1"]) ? getItemRefino(slot) : 0,
      }
    }
  },
  {
    itemId:     "1839",
    itemNome:   "Garra Rubi [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 100,
    itemArmaNivel: 3,
    itemNivel:  70,
    itemPropriedade: 0,
    itemClasses: ["Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt((getNivelBase() - 70) / 10) * 5) + Math.pow(Math.min(getItemRefino(slot), 15), 2),
        "atqm": parseInt(Math.pow(Math.min(getItemRefino(slot), 15), 2) / 2)
      }
    }
  },
  {
    itemId:     "1414",
    itemNome:   "Gelerdria",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 145,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  48,
    itemPropriedade: 2,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico","REQ_HP"],
    slots: 0,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia], [...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 800,
        "spf": -50
      }
    }
  },
  {
    itemId:     "1449",
    itemNome:   "Gelerdria [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 145,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  48,
    itemPropriedade: 2,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico","REQ_HP"],
    slots: 3,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 800,
        "spf": -50
      }
    }
  },
  {
    itemId:     "13465",
    itemNome:   "Gládio da Nobreza [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Espada1",
    itemArmaATQ: 170,
    itemArmaATQM: 130,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 9,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      temDrake = true;
      return {
        "crit": 30,
        "esquiva": 20,
        "aspdp": 30,
        "danode--Golpe_Fulminante": getItemRefino(slot) * 20,
        "danode--Crux_Magnum": getItemRefino(slot) * 20,
        "danode--Crux_Divinum": getItemRefino(slot) * 20,
        "efetividadecura": (getItemRefino(slot) >= 6 ? 40 : 0) + (getItemRefino(slot) >= 8 ? 40 : 0)
      }
    }
  },
  {
    itemId:     "22178",
    itemNome:   "Grevas do Poder [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicochefe": 15,
        "atq": getItemRefino(slot) >= 6 ? ((Math.min(getItemRefino(slot), 15) - 5) * 5) : 0,
        "aspdp": getItemRefino(slot) >= 6 ? ((Math.min(getItemRefino(slot), 15) - 5) * 1) : 0,
        "hpp": getItemRefino(slot) >= 6 ? ((Math.min(getItemRefino(slot), 15) - 5) * 2) : 0,
        "spp": getItemRefino(slot) >= 6 ? ((Math.min(getItemRefino(slot), 15) - 5) * 2) : 0,
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["4352"]]) ? (getNivelBase() >= 100 ? (getItemRefino(slot) * 10) : (getItemRefino(slot) * 10)) : 0,
        "esquiva": hasCombo(slot, itemId, tipoItem, [["4352"]]) ? (getNivelBase() >= 100 ? (getItemRefino(slot) * 2) : (getItemRefino(slot) * 2)) : 0
      }
    }
  },
  {
    itemId:     "24259",
    itemNome:   "Greva Sombria de Alquimista",
    itemTipo:   "itemGrevaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "efetividadecura": 30 + (getItemRefino(slot) * 7)
      }
    }
  },
  {
    itemId:     "24263",
    itemNome:   "Greva Sombria de Arruaceiro",
    itemTipo:   "itemGrevaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_SC","Classe_SC_NT","Classe_ST"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "atq": 10 + Math.max(((getItemRefino(slot) - 6) * 10), 0)
      }
    }
  },
  {
    itemId:     "24267",
    itemNome:   "Greva Sombria de Bardo",
    itemTipo:   "itemGrevaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_TR","Classe_TR_NT","Classe_MI"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "atq": 10 + Math.max(((getItemRefino(slot) - 6) * 10), 0)
      }
    }
  },
  {
    itemId:     "24268",
    itemNome:   "Greva Sombria de Odalisca",
    itemTipo:   "itemGrevaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_MU","Classe_MU_NT","Classe_GY"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "atq": 10 + Math.max(((getItemRefino(slot) - 6) * 10), 0)
      }
    }
  },
  {
    itemId:     "24257",
    itemNome:   "Greva Sombria de Templário",
    itemTipo:   "itemGrevaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_PA"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10)
      }
    }
  },
  {
    itemId:     "2408",
    itemNome:   "Grilhões",
    itemTipo:   "itemSapatos",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (hasCombo(slot, itemId, tipoItem, [["2913"]]) ? (Math.min(getItemRefino(slot), 10)) : 0) + (hasCombo(slot, itemId, tipoItem, [["15040"]]) ? (5 + Math.min(getItemRefino(slot), 10)) : 0)
      }
    }
  },
  {
    itemId:     "22105",
    itemNome:   "Grilhões [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    encantamentos: [
      ["4900","4802","29135","29136","4815","4814","4832","4833","4869","4872","4948","4888"],
      ["4900","4802","29135","29136","4815","4814","4832","4833","4869","4872","4948","4888"],
      ["4900","4802","29135","29136","4815","4814","4832","4833","4869","4872","4948","4888"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (hasCombo(slot, itemId, tipoItem, [["2913"]]) ? getItemRefino(slot) : 0) + (hasCombo(slot, itemId, tipoItem, [["15040"]]) ? (5 + getItemRefino(slot)) : 0)
      }
    }
  },
  {
    itemId:     "20955",
    itemNome:   "Guardiã do Natal [1]",
    itemTipo:   "itemCapa",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd","REQ_DDist","REQ_DCrit","REQ_TCrit"],
    slots: 1,
    encantamentos: [
      ["4949","4818","4854","4856","4872","4855","4857","4858","4853","4817","4812","4826","4827","4869","4950","4834"],
      ["4949","4818","4854","4856","4872","4855","4857","4858","4853","4817","4812","4826","4827","4869","4950","4834"],
      ["4949","4818","4854","4856","4872","4855","4857","4858","4853","4817","4812","4826","4827","4869","4950","4834"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": parseInt(getItemRefino(slot) / 2) + (hasCombo(slot, itemId, tipoItem, [["2977"],["2978"]]) ? 10 : 0),
        "danomagicop": parseInt(getItemRefino(slot) / 2) + (hasCombo(slot, itemId, tipoItem, [["2976"],["2980"]]) ? 10 : 0),
        "atq": (getItemRefino(slot) >= 9 ? 30 : 0) + (hasCombo(slot, itemId, tipoItem, [["16029"],["2978"]]) ? 30 : 0),
        "atqm": (getItemRefino(slot) >= 9 ? 30 : 0) + (hasCombo(slot, itemId, tipoItem, [["16029"],["2977"]]) ? 30 : 0) + (hasCombo(slot, itemId, tipoItem, [["13442"],["2980"]]) ? 80 : 0),
        "danode--Gemini_Lumen": (hasCombo(slot, itemId, tipoItem, [["16029"],["2977"]]) ? (40 + (getItemRefino("itemMaoDireita") >= 10 ? 20 : 0)) : 0),
        "danode--Investida_de_Shura": (hasCombo(slot, itemId, tipoItem, [["16029"],["2978"]]) ? (40 + (getItemRefino("itemMaoDireita") >= 10 ? 20 : 0)) : 0),
        "precisao": (hasCombo(slot, itemId, tipoItem, [["2976"],["2980"]]) ? 10 : 0) + ((hasCombo(slot, itemId, tipoItem, [["2977"],["2978"]]) && getItemRefino(slot) >= 10) ? 15 : 0),
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["2976"],["2980"]]) ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["2977"],["2978"]]) ? 10 : 0),
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["2977"],["2978"]]) ? 10 : 0),
        "danocritico": ((hasCombo(slot, itemId, tipoItem, [["2977"],["2978"]]) && getItemRefino(slot) >= 10) ? 15 : 0)
      }
    }
  },
  {
    itemId:     "1924",
    itemNome:   "Guitarra de Batalha B",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Instrumento",
    itemArmaATQ: 50,
    itemArmaNivel: 3,
    itemNivel:  80,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2,
        "danode--Vulcao_de_Flechas": 20,
        "danofisicoraca": isOpponent("racaMonstro",["5","10"]) ? 95 : 0
      }
    }
  },
  {
    itemId:     "1927",
    itemNome:   "Guitarra Gloriosa",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Instrumento",
    itemArmaATQ: 50,
    itemArmaNivel: 4,
    itemNivel:  80,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["5","10"]) ? (95 + (Math.pow(Math.max(Math.min(getItemRefino(slot), 14) - 4, 0), 2))) : 0,
        "ignoredef": isOpponent("racaMonstro",["5","10"]) ? (20 + (getItemRefino(slot) >= 6 ? 5 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "19268",
    itemNome:   "Hálito de Verme com Rosto",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_CVar","REQ_DDist","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicofogo": 1,
        "atq": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? (parseInt(getAtributoBase("for") / 20) * 5) : 0,
        "aspdp": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? (parseInt(getAtributoBase("agi") / 20) * 3) : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? (parseInt(getAtributoBase("int") / 20) * (-4)) : 0,
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? (parseInt(getAtributoBase("des") / 20)) : 0,
        "danocritico": hasCombo(slot, itemId, tipoItem, [["20717","20718"]]) ? (parseInt(getAtributoBase("sor") / 20) * 3) : 0,
      }
    }
  },
  {
    itemId:     "410025",
    itemNome:   "Herança Real",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": getNivelBase()
      }
    }
  },
  {
    itemId:     "410026",
    itemNome:   "Herança Real [1]",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": getNivelBase()
      }
    }
  },
  {
    itemId:     "1862",
    itemNome:   "Incendiária-OS [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 175,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 3,
        "aspdp": getItemRefino(slot) >= 7 ? 7 : 0,
        "danode--Explosao_Espiritual": getItemRefino(slot) >= 9 ? 15 : 0,
        "danofisicotamanho": getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro",["0","1"]) ? 20 : 0,
      }
    }
  },
  {
    itemId:     "480197",
    itemNome:   "Jetpack Crítica [1]",
    itemTipo:   "itemCapa",
    itemNivel:  150,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCrit","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 5,
        "crit": parseInt(getItemRefino(slot) / 2) * 2,
        "danofisicotamanho": parseInt(getItemRefino(slot) / 3) * 3,
        "aspdp": getItemRefino(slot) >= 7 ? 7 : 0,
        "danodistancia": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomelee": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danocritico": hasCombo(slot, itemId, tipoItem, [["410080","400002","410017"]]) ? 7 : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["410080"]]) ? (-15) : 0,
        "posconjuracao": hasCombo(slot, itemId, tipoItem, [["400002"]]) ? (-15) : 0
      }
    }
  },
  {
    itemId:     "480124",
    itemNome:   "Jetpack Físico [1]",
    itemTipo:   "itemCapa",
    itemNivel:  150,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 5,
        "atqarmap": parseInt(getItemRefino(slot) / 2),
        "danofisicotamanho": parseInt(getItemRefino(slot) / 3) * 3,
        "aspdp": getItemRefino(slot) >= 7 ? 7 : 0,
        "danodistancia": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomelee": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danocritico": hasCombo(slot, itemId, tipoItem, [["410080","400002","410017"]]) ? 7 : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["410080"]]) ? (-15) : 0,
        "posconjuracao": hasCombo(slot, itemId, tipoItem, [["400002"]]) ? (-15) : 0
      }
    }
  },
  {
    itemId:     "480125",
    itemNome:   "Jetpack Mágico [1]",
    itemTipo:   "itemCapa",
    itemNivel:  150,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": parseInt(getItemRefino(slot) / 2) * 5,
        "danomagicop": parseInt(getItemRefino(slot) / 2) + (hasCombo(slot, itemId, tipoItem, [["410080","400002","410017"]]) ? 7 : 0),
        "danomagicotamanho": parseInt(getItemRefino(slot) / 3) * 3,
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-7) : 0) + (hasCombo(slot, itemId, tipoItem, [["410080"]]) ? (-15) : 0),
        "danomagiconeutro": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicofogo": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicovento": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicoterra": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicoagua": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicosagrado": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicosombrio": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicoveneno": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "danomagicofantasma": (getItemRefino(slot) >= 11 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["410017"]]) ? 5 : 0),
        "posconjuracao": hasCombo(slot, itemId, tipoItem, [["400002"]]) ? (-15) : 0
      }
    }
  },
  {
    itemId:     "450176",
    itemNome:   "Jetpack Robusta",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_HP","REQ_SP","REQ_Canhao","REQ_Lanca_Chamas","REQ_Gas_Criogenico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 7 : 0),
        "spp": 3 + (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 7 : 0),
        "danofisicochefe": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "danode--Canhao": 75,
        "danode--Lanca_Chamas": 75,
        "danode--Gas_Criogenico": 75
      }
    }
  },
  {
    itemId:     "400021",
    itemNome:   "Joia do Almirante [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CVar","REQ_CFix","REQ_Laminas_de_Loki","REQ_Explosao_Solar"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 20) + (hasCombo(slot, itemId, tipoItem, [["28629"]]) ? 30 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0),
        "danomelee": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["18178"]]) ? (parseInt(getItemRefino(slot) / 2) * 7) : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danofisicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0) + (isOpponent("tamanhoMonstro", ["2"]) && hasCombo(slot, itemId, tipoItem, [["21047"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "danomagicotamanho": (isOpponent("tamanhoMonstro", ["2"]) && hasCombo(slot, itemId, tipoItem, [["21047"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "danode--Laminas_de_Loki": (hasCombo(slot, itemId, tipoItem, [["28038"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "crit": (hasCombo(slot, itemId, tipoItem, [["21047"]]) ? 10 : 0),
        "danode--Explosao_Solar": (hasCombo(slot, itemId, tipoItem, [["28629"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0)
      }
    }
  },
  {
    itemId:     "490096",
    itemNome:   "Joia do Renegado [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SC_NT","Classe_SA"],
    itemBonus: ["REQ_DFisico","REQ_Acerto_de_Contas","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 7,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["4877"]]) ? 40 : 0,
        "danofisicop": 10,
        "danofisicotamanho": hasCombo(slot, itemId, tipoItem, [["4877"]]) ? 10 : 0,
        "danode--Acerto_de_Contas": parseInt(getNivelBase() / 3),
        "posconjuracao": isClasse(["Classe_SC","Classe_SC_NT"]) ? (-30) : 0
      }
    }
  },
  {
    itemId:     "28010",
    itemNome:   "Juliette De Rachel [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 300,
    itemArmaNivel: 4,
    itemNivel:  170,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    encantamentos: [encantamentosMalangdoFisico, encantamentosMalangdoFisico],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": getItemRefino(slot),
        "danofisicop": parseInt(getItemRefino(slot) / 2)
      }
    }
  },
  {
    itemId:     "1250",
    itemNome:   "Jur [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 125,
    itemArmaNivel: 2,
    itemNivel:  18,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT","Classe_SX"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "1251",
    itemNome:   "Jur [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 125,
    itemArmaNivel: 2,
    itemNivel:  18,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT","Classe_SX"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "1264",
    itemNome:   "Jur Especial [4]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 90,
    itemArmaNivel: 1,
    itemNivel:  1,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT","Classe_SX"],
    itemBonus: ["REQ_DFisico"],
    slots: 4,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "610003",
    itemNome:   "Jur Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 185,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 10,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 2,
        "danode--Castigo_de_Loki": getItemRefino(slot) >= 9 ? 20 : 0,
        "posconjuracao": getItemRefino(slot) >= 11 ? (-7) : 0
      }
    }
  },
  {
    itemId:     "610009",
    itemNome:   "Jur Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 275,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 15,
        "aspdp": parseInt(getItemRefino(slot) / 3) * 2,
        "danode--Castigo_de_Loki": getItemRefino(slot) >= 7 ? 25 : 0,
        "danode--Laminas_de_Loki": getItemRefino(slot) >= 7 ? 25 : 0,
        "posconjuracao": getItemRefino(slot) >= 9 ? (-12) : 0,
        "danodistancia": getItemRefino(slot) >= 11 ? 10 : 0,
        "danomelee": getItemRefino(slot) >= 11 ? 10 : 0
      }
    }
  },
  {
    itemId:     "28025",
    itemNome:   "Katar Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 185,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 10,
        "danocritico": parseInt(getItemRefino(slot) / 3) * 4,
        "danofisicoraca": isOpponent("racaMonstro", ["3","11","10","5"]) ? (15 + (getItemRefino(slot) >= 11 ? 20 : 0)) : 0,
        "aspdp": getItemRefino(slot) >= 9 ? 10 : 0
      }
    }
  },
  {
    itemId:     "28025",
    itemNome:   "Katares do Monarca [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 150,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(getItemRefino(slot) >= 12) {
        temInvestigar = true;
      }
      return {
        "danode--Laminas_de_Loki": parseInt(getItemRefino(slot) / 2),
        "danode--Castigo_de_Loki": parseInt(getItemRefino(slot) / 2) * 2,
        "danode--Laminas_Retalhadoras": parseInt(getItemRefino(slot) / 2) * 3,
        "aspdp": (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 5 : 0)
      }
    }
  },
  {
    itemId:     "28000",
    itemNome:   "Katar de Cinzas [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 220,
    itemArmaNivel: 4,
    itemNivel:  120,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 6,
        "atributovitalidade": 6,
        "atributosorte": -6,
      }
    }
  },
  {
    itemId:     "610008",
    itemNome:   "Katar Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 255,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 15,
        "danode--Laminas_Retalhadoras": parseInt(getItemRefino(slot) / 3) * 10,
        "danocritico": getItemRefino(slot) >= 7 ? 15 : 0,
        "aspdp": getItemRefino(slot) >= 7 ? 10 : 0,
        "danofisicoraca": isOpponent("racaMonstro", ["3","11","10","5"]) ? (getItemRefino(slot) >= 9 ? 25 : 0) : 0,
        "crit": (getItemRefino(slot) >= 11 ? 15 : 0)
      }
    }
  },
  {
    itemId:     "500009",
    itemNome:   "Lâmina Sagrada [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Espada1",
    itemArmaATQ: 200,
    itemArmaNivel: 4,
    itemNivel:  99,
    itemPropriedade: 6,
    itemClasses: ["Classe_SA","Classe_ES","Classe_GA","Classe_MC","Classe_LO","Classe_PA","Classe_GC","Classe_ST","Classe_MF","Classe_CR","Classe_RK","Classe_RG","Classe_GX","Classe_SC","Classe_MH","Classe_BI"],
    itemBonus: ["REQ_TCrit","REQ_DMagico","REQ_DFisico","REQ_DDist","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 10,
        "atributointeligencia": 10,
        "danofisicop": getItemRefino(slot) * 10,
        "danomagicosagrado": hasCombo(slot, itemId, tipoItem, [["4407"]]) ? (getNivelBase() >= 100 ? 100 : 30) : 0
      }
    }
  },
  {
    itemId:     "19305a",
    itemNome:   "Lampião das Fadas",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DMagico","REQ_DFisico","REQ_DDist","REQ_Aspd"],
    slots: 0,
    encantamentos: [
      ["4862","4896","29135","4766","4720","4807","4740","4710"],
      ["4805","4815","29136","4810","4832","4949",""]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "32018",
    itemNome:   "Lança Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 180,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico","REQ_Precisao"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 10,
        "danodistancia": parseInt(getItemRefino(slot) / 3) * 4,
        "aspdp": getItemRefino(slot) >= 9 ? 10 : 0,
        "danode--Disparo_Perfurante": (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 20 : 0),
        "danode--Toque_do_Oblivio": (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 20 : 0)
      }
    }
  },
  {
    itemId:     "1421",
    itemNome:   "Lança de Gancho [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 140,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  65,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia], [...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["5","10"]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "1440",
    itemNome:   "Lança de Gancho [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 140,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  65,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["5","10"]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "530028",
    itemNome:   "Lança de Glast Heim [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 110,
    itemArmaATQM: 180,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": getItemRefino(slot) * (-2),
        "danode--Luz_da_Criacao": parseInt(Math.min(getNivelBase(), 150) / 5),
      }
    }
  },
  {
    itemId:     "1447",
    itemNome:   "Lança Peçonhenta [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 150,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel: 100,
    itemPropriedade: 5,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: [[...encantamentosMalangdoFisico, ...encantamentosMalangdoDistancia]],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 10
      }
    }
  },
  {
    itemId:     "530006",
    itemNome:   "Lança Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 195,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico","REQ_Precisao"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 15,
        "danodistancia": parseInt(getItemRefino(slot) / 3) * 4,
        "aspdp": getItemRefino(slot) >= 7 ? 10 : 0,
        "danode--Disparo_Perfurante": (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0),
        "danode--Toque_do_Oblivio": (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0),
        "spp": getItemRefino(slot) >= 11 ? 5 : 0,
        "precisaoperfeita": getItemRefino(slot) >= 11 ? 7 : 0
      }
    }
  },
  {
    itemId:     "28502",
    itemNome:   "Lenço Infame",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DFisico","REQ_DCrit","REQ_DMagico","REQ_CVar","REQ_Cura","REQ_HP","REQ_Aspd"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 80) * 5) : 0,
        "danofisicop": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 80) * 6) : 0,
        "danocritico": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 80) * 10) : 0,
        "atqm": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("int") + getAtributoBase("des")) / 80) * 120) : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("int") + getAtributoBase("des")) / 80) * (-3)) : 0,
        "hpp": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("agi") + getAtributoBase("vit")) / 80) * 5) : 0,
        "aspdp": hasCombo(slot, itemId, tipoItem, [["2203","2204","2201","2202"]]) ? (parseInt((getAtributoBase("agi") + getAtributoBase("vit")) / 80) * 5) : 0
      }
    }
  },
  {
    itemId:     "2922",
    itemNome:   "Luva da Sorte",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 100,
        "spf": 20,
        "crit": parseInt(getAtributoBase("sor") / 10),
        "danocritico": getAtributoBase("sor") >= 110 ? 1 : 0
      }
    }
  },
  {
    itemId:     "2928",
    itemNome:   "Luva da Sorte [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 100,
        "spf": 20,
        "crit": parseInt(getAtributoBase("sor") / 10),
        "danocritico": getAtributoBase("sor") >= 110 ? 1 : 0
      }
    }
  },
  {
    itemId:     "1822",
    itemNome:   "Luva de Combo [4]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 30,
    itemArmaNivel: 3,
    itemNivel:  60,
    itemPropriedade: 0,
    itemClasses: ["Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 4,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--O_Ultimo_Dragao": 20,
        "danode--Combo_Triplo": 15,
        "danode--Combo_Quadruplo": 15
      }
    }
  },
  {
    itemId:     "28533",
    itemNome:   "Luvas da Precisão [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  20,
    itemClasses: ["Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"],
    itemBonus: ["REQ_DFisico","REQ_Precisao","REQ_Tornado_do_Carrinho"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 20,
        "aspdp": 5 + (isClasse(["Classe_BI","Classe_BI_NT"]) ? 5 : 0),
        "atq": isClasse(["Classe_BI","Classe_BI_NT"]) ? 75 : 0,
        "hpp": isClasse(["Classe_BI","Classe_BI_NT"]) ? 10 : 0,
        "danode--Cavalo_de_Pau": getNivelBase(),
        "danode--Canhao_de_Protons": parseInt(getNivelBase() / 20) * 2,
        "danode--Tornado_do_Carrinho": parseInt(getNivelBase() / 30) * 2
      }
    }
  },
  {
    itemId:     "490146",
    itemNome:   "Luvas de Proteção [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DFisico","REQ_Precisao","REQ_Tornado_do_Carrinho"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 7,
        "danofisicop": 10,
        "danode--Tornado_do_Carrinho": parseInt(getNivelBase() / 3) * 2,
        "aspdp": 10,
        "precisaoperfeita": 15,
        "danofisicotamanho": 10,
        "hpf": hasCombo(slot, itemId, tipoItem, [["4875"]]) ? (getNivelBase() * 50) : 0
      }
    }
  },
  {
    itemId:     "28434",
    itemNome:   "Luvas do Pugilista [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_SP"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "spf": 100 + (hasCombo(slot, itemId, tipoItem, [["4811"]]) ? 100 : 0) + (hasCombo(slot, itemId, tipoItem, [["4810"]]) ? 100 : 0),
        "danofisicoraca": 2 + (getAtributoBase("for") >= 100 ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["4811"]]) ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["4810"]]) ? 5 : 0),
        "danomagicoraca": (hasCombo(slot, itemId, tipoItem, [["4811"]]) ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["4810"]]) ? 5 : 0)
      }
    }
  },
  {
    itemId:     "28531",
    itemNome:   "Luvas do Vigor [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DFisico","REQ_IgnDef"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -10,
        "danofisicochefe": 5,
        "ignoredef": 20
      }
    }
  },
  {
    itemId:     "490183",
    itemNome:   "Luvas Militares [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Furia_do_Furacao","REQ_Brandir_Machado","REQ_Arremesso_de_Machado"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 7,
        "danofisicotamanho": 10,
        "danode--Furia_do_Furacao": parseInt(getNivelBase() / 2),
        "danode--Brandir_Machado": parseInt(getNivelBase() / 2),
        "danode--Arremesso_de_Machado": parseInt(getNivelBase() / 2),
        "danofisicopropriedade": isClasse(["Classe_ME"]) ? 10 : 0,
        "aspdp": isClasse(["Classe_ME"]) ? 10 : 0,
        "posconjuracao": isClasse(["Classe_ME"]) ? (-30) : 0,
      }
    }
  },
  {
    itemId:     "24291",
    itemNome:   "Luva Sombria de Bioquímico",
    itemTipo:   "itemLuvaSombria",
    itemNivel:  99,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": getItemRefino(slot),
        "atqm": getItemRefino(slot),
        "danode--Tornado_do_Carrinho": 20 + (getItemRefino(slot) * 5),
        "recargade--Tornado_do_Carrinho": hasCombo(slot, itemId, tipoItem, [["24304"]]) ? (-1) : 0,
        "hpp": hasCombo(slot, itemId, tipoItem, [["24304"]]) ? 2 : 0,
      }
    }
  },
  {
    itemId:     "24289",
    itemNome:   "Luva Sombria de Guardião Real",
    itemTipo:   "itemLuvaSombria",
    itemNivel:  99,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Disparo_Perfurante"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": getItemRefino(slot),
        "atqm": getItemRefino(slot),
        "danode--Disparo_Perfurante": 20 + (getItemRefino(slot) * 5)
      }
    }
  },
  {
    itemId:     "24300",
    itemNome:   "Luva Sombria de Musa",
    itemTipo:   "itemLuvaSombria",
    itemNivel:  99,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (hasCombo(slot, itemId, tipoItem, [["24313"]]) ? 2 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["24313"]]) ? 2 : 0),
        "atq": getItemRefino(slot),
        "atqm": getItemRefino(slot),
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["24313"]]) ? 5 : 0
      }
    }
  },
  {
    itemId:     "24299",
    itemNome:   "Luva Sombria de Trovador",
    itemTipo:   "itemLuvaSombria",
    itemNivel:  99,
    itemClasses: ["Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (hasCombo(slot, itemId, tipoItem, [["24312"]]) ? 2 : 0),
        "spp": (hasCombo(slot, itemId, tipoItem, [["24312"]]) ? 2 : 0),
        "atq": getItemRefino(slot),
        "atqm": getItemRefino(slot),
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["24312"]]) ? 5 : 0
      }
    }
  },
  {
    itemId:     "24295",
    itemNome:   "Luva Sombria de Renegado",
    itemTipo:   "itemLuvaSombria",
    itemNivel:  99,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_Disparo_Triplo"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (getItemRefino(slot)),
        "danode--Disparo_Triplo": 20 + (getItemRefino(slot) * 5) + (hasCombo(slot, itemId, tipoItem, [["24308"]]) ? 20 : 0),
        "atqarmap": hasCombo(slot, itemId, tipoItem, [["24308"]]) ? 2 : 0,
        "danomagicop": hasCombo(slot, itemId, tipoItem, [["24308"]]) ? 2 : 0,
        "danodistancia": hasCombo(slot, itemId, tipoItem, [["24308"]]) ? 2 : 0,
      }
    }
  },
  {
    itemId:     "16003",
    itemNome:   "Maça Carga [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 175,
    itemArmaNivel: 3,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    encantamentos: [encantamentosMalangdoFisico, encantamentosMalangdoFisico],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "16051",
    itemNome:   "Maça da Valquíria Mágica [4]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 50,
    itemArmaATQM: 50,
    itemArmaNivel: 4,
    itemNivel:  70,
    itemPropriedade: false,
    itemClasses: ["Classe_SA","Classe_CR","Classe_MF","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT","Classe_LO","Classe_PA","Classe_RK","Classe_RK","Classe_RG","Classe_RG_NT","Classe_AB","Classe_SH","Classe_AB_NT","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_EP"],
    slots: 4,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (isClasse(["Classe_SA"]) ? 150 : 0) + (isClasse(["Classe_AB","Classe_AB_NT"]) ? 50 : 0) + (isClasse(["Classe_CR","Classe_MF","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"]) ? 100 : 0),
        "atqm": (isClasse(["Classe_SA"]) ? 200 : 0) + (isClasse(["Classe_AB","Classe_AB_NT"]) ? 100 : 0),
        "precisao": (isClasse(["Classe_SA","Classe_CR","Classe_MF","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"]) ? 10 : 0),
        "hpf": (isClasse(["Classe_SA","Classe_LO","Classe_PA","Classe_RK","Classe_RK","Classe_RG","Classe_RG_NT"]) ? 500 : 0) + (isClasse(["Classe_SA"]) ? (Math.min(getItemRefino(slot), 10) * 200) : 0),
        "spf": (isClasse(["Classe_SA"]) ? 400 : 0) + (isClasse(["Classe_LO","Classe_PA","Classe_RK","Classe_RK","Classe_RG","Classe_RG_NT"]) ? 100 : 0) + (isClasse(["Classe_SH","Classe_SH_NT"]) ? 200 : 0),
        "atributovitalidade": (isClasse(["Classe_SA","Classe_LO","Classe_PA","Classe_RK","Classe_RK","Classe_RG","Classe_RG_NT"]) ? Math.min(getItemRefino(slot), 10) : 0),
        "esquivaperfeita": (isClasse(["Classe_SA","Classe_SH","Classe_SH_NT"]) ? Math.min(getItemRefino(slot), 10) : 0),
        "aspdp": (isClasse(["Classe_SA","Classe_AB","Classe_AB_NT"]) ? Math.min(getItemRefino(slot), 10) : 0),
        "conjuracaovariavel": (isClasse(["Classe_SA","Classe_CR","Classe_MF","Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"]) ? parseInt(Math.min(getItemRefino(slot), 10) / (-2)) : 0),
      }
    }
  },
  {
    itemId:     "16063",
    itemNome:   "Maça Longa Ilusional [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Maca",
    itemArmaATQ: 185,
    itemArmaNivel: 4,
    itemNivel:  99,
    itemPropriedade: 0,
    itemClasses: ["Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["atq_5-60","atqarmap_1_7","hpf_100-5000","danofisicopropriedade_1-20"],
      ["esquiva_5-60","danocritico_1-10","posconjuracao_1-10","aspdp_1-15","danodistancia_1-10","danofisicoraca_1-10","danofisicotamanho_1-10"],
      ["ignoredef_5-20"],
      ["ignoredef_3-15","danofisicochefe_3-15"],
    ],
    slots: 2,
    encantamentos: [encantamentosArmasBrasilis],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "1326",
    itemNome:   "Machado Ilusional [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Machado1",
    itemArmaATQ: 180,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  120,
    itemPropriedade: false,
    itemClasses: ["Classe_ME","Classe_BI"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["atq_5-60","atqarmap_1_7","hpf_100-5000","danofisicopropriedade_1-20"],
      ["esquiva_5-60","danocritico_1-10","posconjuracao_1-10","aspdp_1-15","danodistancia_1-10","danofisicoraca_1-10","danofisicotamanho_1-10"],
      ["ignoredef_5-20"],
      ["ignoredef_3-15","danofisicochefe_3-15"],
    ],
    slots: 4,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "atributodestreza": 2,
        "atributosorte": 2,
        "danode--Tornado_do_Carrinho": 75 + (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0),
        "danode--Furia_do_Furacao": 100 + (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0),
        "danode--Arremesso_de_Machado": 100 + (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["22133"]]) && getItemRefino(slot) >= 7 && getItemRefino("itemSapatos") >= 7 ? 15 : 0),
        "atq": hasCombo(slot, itemId, tipoItem, [["22133"]]) ? 40 : 0,
        "atqarmap": (hasCombo(slot, itemId, tipoItem, [["22133"]]) && getItemRefino(slot) + getItemRefino("itemSapatos") >= 18 ? 10 : 0),
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["22133"]]) && getItemRefino(slot) + getItemRefino("itemSapatos") >= 22 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "24326",
    itemNome:   "Malha Sombria da Deusa",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_DDist","REQ_Aspd","REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 1,
        "hpf": (getItemRefino(slot) * 10),
        "precisao": (getItemRefino(slot) * 1),
        "atq": isClasse(["Classe_LO","Classe_PA","Classe_SX","Classe_ST","Classe_TA","Classe_MT","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_GX","Classe_GX_NT","Classe_SC","Classe_SC_NT"]) ? (15 + (getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 15 : 0)) : 0,
        "aspdf": isClasse(["Classe_LO","Classe_PA","Classe_SX","Classe_ST","Classe_TA","Classe_MT","Classe_RK","Classe_RK_NT","Classe_RG","Classe_RG_NT","Classe_GX","Classe_GX_NT","Classe_SC","Classe_SC_NT"]) ? ((getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 1 : 0)) : 0,
        "atqm": isClasse(["Classe_AQ","Classe_PR","Classe_SU","Classe_MS","Classe_NI","Classe_ES","Classe_AR","Classe_AR_NT","Classe_FE","Classe_FE_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT","Classe_OB","Classe_KA"]) ? (15 + (getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 15 : 0)) : 0,
        "spp": isClasse(["Classe_AQ","Classe_PR","Classe_SU","Classe_MS","Classe_NI","Classe_ES","Classe_AR","Classe_AR_NT","Classe_FE","Classe_FE_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT","Classe_OB","Classe_KA"]) ? ((getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 2 : 0)) : 0,
        "efetividadecura": isClasse(["Classe_AQ","Classe_PR","Classe_SU","Classe_MS","Classe_NI","Classe_ES","Classe_AR","Classe_AR_NT","Classe_FE","Classe_FE_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT","Classe_OB","Classe_KA"]) ? ((getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 3 : 0)) : 0,
        "danodistancia": isClasse(["Classe_CR","Classe_MF","Classe_SN","Classe_MI","Classe_GY","Classe_JU","Classe_BI","Classe_BI_NT","Classe_MC","Classe_MC_NT","classe_SE","Classe_SE_NT","Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT","Classe_IN"]) ? (3 + (getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 3 : 0)) : 0,
        "esquiva": isClasse(["Classe_CR","Classe_MF","Classe_SN","Classe_MI","Classe_GY","Classe_JU","Classe_BI","Classe_BI_NT","Classe_MC","Classe_MC_NT","classe_SE","Classe_SE_NT","Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT","Classe_IN"]) ? ((getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 15 : 0)) : 0,
        "hpf": isClasse(["Classe_AP","Classe_SA","Classe_DO"]) ? (1000 + (getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 1000 : 0)) : 0,
        "aspdp": isClasse(["Classe_AP","Classe_SA","Classe_DO"]) ? (5 + (getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 5 : 0)) : 0,
        "spf": isClasse(["Classe_AP","Classe_SA","Classe_DO"]) ? ((getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? 300 : 0)) : 0,
        "conjuracaovariavel": isClasse(["Classe_AP","Classe_SA","Classe_DO"]) ? ((getItemRefino(slot) + getItemRefino("itemEscudoSombrio") >= 17 ? (-5) : 0)) : 0,
      }
    }
  },
  {
    itemId:     "24272",
    itemNome:   "Malha Sombria de Alquimista",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_BI","Classe_BI_NT"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "atq": 10 + Math.max(((getItemRefino(slot) - 6) * 10), 0)
      }
    }
  },
  {
    itemId:     "24276",
    itemNome:   "Malha Sombria de Arruaceiro",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_SC","Classe_SC_NT","Classe_ST"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Ataque_Surpresa"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Ataque_Surpresa": 10 + Math.max(((getItemRefino(slot) - 6) * 10), 0),
        "danofisicotamanho": hasCombo(slot, itemId, tipoItem, [["24263"]]) ? 3 : 0
      }
    }
  },
  {
    itemId:     "24280",
    itemNome:   "Malha Sombria de Bardo",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_TR","Classe_TR_NT","Classe_MI"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10)
      }
    }
  },
  {
    itemId:     "24281a",
    itemNome:   "Malha Sombria de Odalisca",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_MU","Classe_MU_NT","Classe_GY"],
    itemBonus: ["REQ_HP","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10)
      }
    }
  },
  {
    itemId:     "24281b",
    itemNome:   "Malha Sombria de Odalisca - Ativo",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_MU","Classe_MU_NT","Classe_GY"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Ataque_Surpresa"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "aspdp": 50
      }
    }
  },
  {
    itemId:     "24276",
    itemNome:   "Malha Sombria de Templário",
    itemTipo:   "itemMalhaSombria",
    itemNivel:  1,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_PA"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Crux_Magnum","REQ_Crux_Divinum"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getItemRefino(slot) * 10),
        "danode--Crux_Magnum": 20 + (getItemRefino(slot) * 5),
        "danode--Crux_Divinum": hasCombo(slot, itemId, tipoItem, [["24257"]]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "20986",
    itemNome:   "Manto Abstrato [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_EP","REQ_Precisao","REQ_Esporo_Explosivo"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 5 + (getItemRefino(slot) >= 7 ? 8 : 0) + (getItemRefino(slot) >= 9 ? 12 : 0),
        "danodistancia": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "hpf": isClasse(["Classe_BI","Classe_BI_NT"]) ? 15000 : 0,
        "danode--Esporo_Explosivo": isClasse(["Classe_BI","Classe_BI_NT"]) ? 100 : 0,
        "precisaoperfeita": isClasse(["Classe_BI","Classe_BI_NT"]) ? 50 : 0,
        "variavelde--Esporo_Explosivo": isClasse(["Classe_BI","Classe_BI_NT"]) ? (-100) : 0
      }
    }
  },
  {
    itemId:     "480053",
    itemNome:   "Manto Behemoth [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["30","31","32","33"])) ? (15 + (getItemRefino(slot))) : 0,
        "danomagicopropriedade": (isOpponent("propriedadeMonstro", ["30","31","32","33"])) ? (15 + (getItemRefino(slot))) : 0,
        "aspdp": getItemRefino(slot),
        "esquiva": hasCombo(slot, itemId, tipoItem, [["4211"]]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "2519",
    itemNome:   "Manteau de Morrigane",
    itemTipo:   "itemCapa",
    itemNivel:  61,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCrit","REQ_EP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 2,
        "esquivaperfeita": 8
      }
    }
  },
  {
    itemId:     "15121",
    itemNome:   "Manto da Sara [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  145,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_Aspd"],
    slots: 1,
    encantamentos: [
      ["4862","4867","4868","4900","4929","4945","4946","4947","4886","4887","4888","4889","4807","4948","4949","4950","4869","4872","4873","4881","4859","4942","4943","4944"],
      ["4831","29447","4876","4876a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "15121a",
    itemNome:   "Manto da Sara [1] - Ativo",
    itemTipo:   "itemArmadura",
    itemNivel:  145,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_Aspd"],
    slots: 1,
    encantamentos: [
      ["4862","4867","4868","4900","4929","4945","4946","4947","4886","4887","4888","4889","4807","4948","4949","4950","4869","4872","4873","4881","4859","4942","4943","4944"],
      ["4831","29447","4876","4876a"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": getItemRefino(slot) * 8
      }
    }
  },
  {
    itemId:     "2374",
    itemNome:   "Manto de Diabolus [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  60,
    itemClasses: ["Classe_SE","Classe_TR","Classe_MU","Classe_WL","Classe_SO","Classe_AB","Classe_SC"],
    itemBonus: ["REQ_SP","REQ_Pos","REC_Cura","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 150,
        "posconjuracao": -10,
        "danofisicop": hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 3 : 0,
        "danomagicop": hasCombo(slot, itemId, tipoItem, [["2729"]]) ? 3 : 0
      }
    }
  },
  {
    itemId:     "480025a",
    itemNome:   "Manto do Barão [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2,
        "aspdp": 10,
        "atq": getItemRefino(slot) * 6,
        "atqm": getItemRefino(slot) * 6,
        "danofisicotamanho": (hasCombo(slot, itemId, tipoItem, [["4250"]]) && isOpponent("tamanhoMonstro", ["2"])) || (hasCombo(slot, itemId, tipoItem, [["4254"]]) && isOpponent("tamanhoMonstro", ["1"])) || (hasCombo(slot, itemId, tipoItem, [["4207"]]) && isOpponent("tamanhoMonstro", ["0"])) ? 25 : 0
      }
    }
  },
  {
    itemId:     "480025b",
    itemNome:   "Manto do Barão [1] - Ativo",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2,
        "aspdp": 10,
        "atq": getItemRefino(slot) * 6,
        "atqm": getItemRefino(slot) * 6,
        "danofisicotamanho": (hasCombo(slot, itemId, tipoItem, [["4250"]]) && isOpponent("tamanhoMonstro", ["2"])) || (hasCombo(slot, itemId, tipoItem, [["4254"]]) && isOpponent("tamanhoMonstro", ["1"])) || (hasCombo(slot, itemId, tipoItem, [["4207"]]) && isOpponent("tamanhoMonstro", ["0"])) ? 25 : 0
      }
    }
  },
  {
    itemId:     "480081",
    itemNome:   "Manto Do Flamingo Negro [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Disparo_Triplo","REQ_Copia_Explosiva","REQ_Precisao","REQ_CVar"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3 + (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 7 : 0),
        "atributoagilidade": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atributodestreza": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "precisaoperfeita": isClasse(["Classe_SC"]) ? 20 : 0,
        "danofisicotamanho": isClasse(["Classe_SC"]) ? 10 : 0,
        "danode--Disparo_Triplo": isClasse(["Classe_SC"]) ? 150 : 0,
        "danode--Copia_Explosiva": isClasse(["Classe_SC"]) ? 45 : 0
      }
    }
  },
  {
    itemId:     "480045",
    itemNome:   "Manto do Guardião Morto ",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd","REQ_Pos","REQ_HP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 18) * 15,
        "atqm": parseInt((getAtributoBase("int") + getAtributoBase("des")) / 18) * 15,
        "posconjuracao": parseInt((getAtributoBase("for") + getAtributoBase("sor")) / 18) * (-1),
        "conjuracaovariavel": parseInt((getAtributoBase("int") + getAtributoBase("des")) / 18) * (-1),
        "hpp": parseInt((getAtributoBase("agi") + getAtributoBase("vit")) / 18) * 2,
        "aspdp": parseInt((getAtributoBase("agi") + getAtributoBase("vit")) / 18) * 2
      }
    }
  },
  {
    itemId:     "420112",
    itemNome:   "Manto do Herói",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 15
      }
    }
  },
  {
    itemId:     "480094",
    itemNome:   "Manto de Javali [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Tempestade_de_Flechas","REQ_DES"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 6 + (getItemRefino(slot) >= 7 ? 12 : 0) + (getItemRefino(slot) >= 9 ? 12 : 0),
        "aspdp": 3 + (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 7 : 0),
        "danodistancia": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "hpf": isClasse(["classe_SE","Classe_SE_NT"]) ? 10000 : 0,
        "danofisicotamanho": isClasse(["classe_SE","Classe_SE_NT"]) ? 20 : 0,
        "recargade--Tempestade_de_Flechas": isClasse(["classe_SE","Classe_SE_NT"]) ? (-0.3) : 0
      }
    }
  },
  {
    itemId:     "20945",
    itemNome:   "Manto do Monarca [1]",
    itemTipo:   "itemCapa",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_CVar","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquiva": 15,
        "aspdp": 5 + (hasCombo(slot, itemId, tipoItem, [["22206"]]) ? ((getItemRefino(slot) >= 9 && getItemRefino("itemSapatos") >= 9) ? (5) : 0) : 0),
        "conjuracaovariavel": parseInt(getItemRefino(slot) / 3) * (-2),
        "atq": (hasCombo(slot, itemId, tipoItem, [["22206"]]) ? 20 : 0),
        "atqm": (hasCombo(slot, itemId, tipoItem, [["22206"]]) ? 20 : 0)
      }
    }
  },
  {
    itemId:     "20902",
    itemNome:   "Manto Real [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_CVar","REQ_DMagico","REQ_CFix","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquiva": 15,
        "conjuracaovariavel": (-10) + (parseInt(getItemRefino(slot) / 3) * (-5)),
        "conjuracaofixas": hasCombo(slot, itemId, tipoItem, [["22168"]]) && getItemRefino(slot) >= 9 && getItemRefino("itemSapatos") >= 9 ? (-0.5) : 0,
        "danomagiconeutro": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicofogo": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicovento": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicoterra": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicoagua": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicosagrado": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicosombrio": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicoveneno": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0,
        "danomagicofantasma": hasCombo(slot, itemId, tipoItem, [["22168"]]) ? 7 : 0
      }
    }
  },
  {
    itemId:     "20939",
    itemNome:   "Manto do Senhor do Tempo [1]",
    itemTipo:   "itemCapa",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Precisao","REQ_CVar","REQ_Aspd","REQ_CFix"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquiva": 30,
        "precisao": 10,
        "conjuracaovariavel": (-10) + (hasCombo(slot, itemId, tipoItem, [["22204"]]) ? (-10) : 0),
        "aspdp": 10,
        "conjuracaofixas": hasCombo(slot, itemId, tipoItem, [["22204"]]) ? -0.5 : 0
      }
    }
  },
  {
    itemId:     "20748",
    itemNome:   "Manto dos Esquecidos",
    itemTipo:   "itemCapa",
    itemNivel:  120,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_DMagico","REQ_DDist","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (getAtributoBase("for") >= 90 ? (10 + (getItemRefino(slot) * 2)) : 0),
        "aspdp": (getAtributoBase("agi") >= 90 ? (3 + (parseInt(getItemRefino(slot) / 2))) : 0),
        "aspdf": (getAtributoBase("agi") >= 90 ? (getItemRefino(slot) >= 10 ? 1 : 0) : 0),
        "atqm": (getAtributoBase("int") >= 90 ? (10 + (getItemRefino(slot) * 2)) : 0),
        "danodistancia": (getAtributoBase("des") >= 90 ? (3 + (parseInt(getItemRefino(slot) / 2))) : 0),
        "danocritico": (getAtributoBase("sor") >= 90 ? (5 + getItemRefino(slot)) : 0),
      }
    }
  },
  {
    itemId:     "20749",
    itemNome:   "Manto dos Esquecidos [1]",
    itemTipo:   "itemCapa",
    itemNivel:  120,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_Aspd","REQ_DMagico","REQ_DDist","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": parseInt(getItemRefino(slot) / 2),
        "spp": parseInt(getItemRefino(slot) / 2),
        "atq": (getAtributoBase("for") >= 90 ? (10 + (getItemRefino(slot) * 2)) : 0),
        "aspdp": (getAtributoBase("agi") >= 90 ? (3 + (parseInt(getItemRefino(slot) / 2))) : 0),
        "aspdf": (getAtributoBase("agi") >= 90 ? (getItemRefino(slot) >= 10 ? 1 : 0) : 0),
        "atqm": (getAtributoBase("int") >= 90 ? (10 + (getItemRefino(slot) * 2)) : 0),
        "danodistancia": (getAtributoBase("des") >= 90 ? (3 + (parseInt(getItemRefino(slot) / 2))) : 0),
        "danocritico": (getAtributoBase("sor") >= 90 ? (5 + getItemRefino(slot)) : 0),
      }
    }
  },
  {
    itemId:     "20941",
    itemNome:   "Manto Fênix [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["10","11","12","13"])) ? (15 + (getItemRefino(slot))) : 0,
        "danomagicopropriedade": (isOpponent("propriedadeMonstro", ["10","11","12","13"])) ? (15 + (getItemRefino(slot))) : 0,
        "aspdp": getItemRefino(slot),
        "esquiva": hasCombo(slot, itemId, tipoItem, [["4197"]]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "20922",
    itemNome:   "Manto Leviatã [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["40","41","42","43"])) ? (15 + (getItemRefino(slot))) : 0,
        "danomagicopropriedade": (isOpponent("propriedadeMonstro", ["40","41","42","43"])) ? (15 + (getItemRefino(slot))) : 0,
        "aspdp": getItemRefino(slot),
        "esquiva": hasCombo(slot, itemId, tipoItem, [["4306"]]) ? 20 : 0
      }
    }
  },
  {
    itemId:     "15074",
    itemNome:   "Manto Mágico de Geffen [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_CVar","REQ_CFix"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": 15 + (getItemRefino(slot) >= 9 ? (-5) : 0),
      }
    }
  },
  {
    itemId:     "20964",
    itemNome:   "Manto Temporal AGI [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DCrit","REQ_IgnDef","REQ_Aspd"],
    bonusaleatorios: [
      ["hpp_3-10","spp_3-10","hpf_500-2000","spf_50-1000","atq_5-40","atqm_5-40","atqarmap_1-6","danomagicop_1-6","aspdp_3-10","precisao_3-10","esquiva_10-50","danocritico_3-10","danodistancia_3-10","efetividadecura_3-10","conjuracaovariavel_3-10","crit_3-10","posconjuracao_3-15"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10),
        "danocritico": (parseInt(getItemRefino(slot) / 2) * 3) + (hasCombo(slot, itemId, tipoItem, [["22010","22115"]]) ? 7 : 0),
        "danofisicotamanho": (parseInt(getItemRefino(slot) / 4) * 5),
        "atqarmap": (getItemRefino(slot) >= 7 ? 7 : 0),
        "ignoredef": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)) : 0),
        "ignoredefm": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0) +  + ((getItemRefino("itemSapatos") && hasCombo(slot, itemId, tipoItem, [["22010","22115"]])) >= 30 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "20967",
    itemNome:   "Manto Temporal DES [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_DCrit","REQ_IgnDef"],
    bonusaleatorios: [
      ["hpp_3-10","spp_3-10","hpf_500-2000","spf_50-1000","atq_5-40","atqm_5-40","atqarmap_1-6","danomagicop_1-6","aspdp_3-10","precisao_3-10","esquiva_10-50","danocritico_3-10","danodistancia_3-10","efetividadecura_3-10","conjuracaovariavel_3-10","crit_3-10","posconjuracao_3-15"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10),
        "danodistancia": (parseInt(getItemRefino(slot) / 2) * 3) + (hasCombo(slot, itemId, tipoItem, [["22008","22117"]]) ? 7 : 0),
        "danocritico": (parseInt(getItemRefino(slot) / 4) * 3),
        "atqarmap": (getItemRefino(slot) >= 7 ? 7 : 0),
        "ignoredef": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)) : 0),
        "ignoredefm": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0) +  + ((getItemRefino("itemSapatos") && hasCombo(slot, itemId, tipoItem, [["22008","22117"]])) >= 30 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "20963",
    itemNome:   "Manto Temporal FOR [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DCorp"],
    bonusaleatorios: [
      ["hpp_3-10","spp_3-10","hpf_500-2000","spf_50-1000","atq_5-40","atqm_5-40","atqarmap_1-6","danomagicop_1-6","aspdp_3-10","precisao_3-10","esquiva_10-50","danocritico_3-10","danodistancia_3-10","efetividadecura_3-10","conjuracaovariavel_3-10","crit_3-10","posconjuracao_3-15"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10) + (hasCombo(slot, itemId, tipoItem, [["22006","22113"]]) ? 50 : 0),
        "danofisicotamanho": (parseInt(getItemRefino(slot) / 4) * 5),
        "atqarmap": (parseInt(getItemRefino(slot) / 2)) + (getItemRefino(slot) >= 7 ? 7 : 0),
        "ignoredef": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)) : 0),
        "ignoredefm": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0) +  + ((getItemRefino("itemSapatos") && hasCombo(slot, itemId, tipoItem, [["22006","22113"]])) >= 30 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "20966",
    itemNome:   "Manto Temporal INT [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_Pos","REQ_IgnDefm"],
    bonusaleatorios: [
      ["hpp_3-10","spp_3-10","hpf_500-2000","spf_50-1000","atq_5-40","atqm_5-40","atqarmap_1-6","danomagicop_1-6","aspdp_3-10","precisao_3-10","esquiva_10-50","danocritico_3-10","danodistancia_3-10","efetividadecura_3-10","conjuracaovariavel_3-10","crit_3-10","posconjuracao_3-15"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": (parseInt(getItemRefino(slot) / 2) * 10) + (hasCombo(slot, itemId, tipoItem, [["22009","22114"]]) ? 50 : 0),
        "danomagicopropriedade": (parseInt(getItemRefino(slot) / 4) * 3),
        "danomagicop": (parseInt(getItemRefino(slot) / 2)) + (getItemRefino(slot) >= 7 ? 7 : 0),
        "ignoredef": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)) : 0),
        "ignoredefm": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0) +  + ((getItemRefino("itemSapatos") && hasCombo(slot, itemId, tipoItem, [["22009","22114"]])) >= 30 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "20968",
    itemNome:   "Manto Temporal SOR [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DCrit","REQ_DCorp","REQ_TCrit","REQ_Aspd","REQ_IgnDef"],
    bonusaleatorios: [
      ["hpp_3-10","spp_3-10","hpf_500-2000","spf_50-1000","atq_5-40","atqm_5-40","atqarmap_1-6","danomagicop_1-6","aspdp_3-10","precisao_3-10","esquiva_10-50","danocritico_3-10","danodistancia_3-10","efetividadecura_3-10","conjuracaovariavel_3-10","crit_3-10","posconjuracao_3-15"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": (parseInt(getItemRefino(slot) / 2) * 3),
        "danocritico": (parseInt(getItemRefino(slot) / 2) * 3),
        "aspdp": (parseInt(getItemRefino(slot) / 4) * 5),
        "atqarmap": (getItemRefino(slot) >= 7 ? 7 : 0),
        "aspdf": (hasCombo(slot, itemId, tipoItem, [["22011","22118"]]) ? 1 : 0),
        "ignoredef": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)) : 0),
        "ignoredefm": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0) +  + ((getItemRefino("itemSapatos") && hasCombo(slot, itemId, tipoItem, [["22011","22118"]])) >= 30 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "20965",
    itemNome:   "Manto Temporal VIT [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_SP","REQ_Pos","REQ_IgnDef"],
    bonusaleatorios: [
      ["hpp_3-10","spp_3-10","hpf_500-2000","spf_50-1000","atq_5-40","atqm_5-40","atqarmap_1-6","danomagicop_1-6","aspdp_3-10","precisao_3-10","esquiva_10-50","danocritico_3-10","danodistancia_3-10","efetividadecura_3-10","conjuracaovariavel_3-10","crit_3-10","posconjuracao_3-15"]
    ],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10),
        "hpf": (parseInt(getItemRefino(slot) / 2) * 400),
        "hpp": (parseInt(getItemRefino(slot) / 4) * 3),
        "atqarmap": (getItemRefino(slot) >= 7 ? 7 : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["22007","22116"]]) ? (-5) : 0),
        "ignoredef": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)) : 0),
        "ignoredefm": (isOpponent("racaMonstro",["2","3"]) ? ((getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0) +  + ((getItemRefino("itemSapatos") && hasCombo(slot, itemId, tipoItem, [["22007","22116"]])) >= 30 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "490191",
    itemNome:   "Manuscrito dos Gatunos [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SC_NT","Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_DMagico","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -6,
        "danofisicotamanho": 6,
        "danomagicotamanho": 6,
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["18982"]]) ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["18975"]]) ? 15 : 0),
        "recargade--Destruidor_de_Almas": (hasCombo(slot, itemId, tipoItem, [["18982"]]) ? (-0.15) : 0),
        "danode--Disparo_Triplo": (hasCombo(slot, itemId, tipoItem, [["18975"]]) ? 30 : 0),
        "danofisicochefe": (hasCombo(slot, itemId, tipoItem, [["4359"]]) ? 30 : 0),
        "danomagicopropriedade": (hasCombo(slot, itemId, tipoItem, [["4564"]]) ? 30 : 0)
      }
    }
  },
  {
    itemId:     "490175",
    itemNome:   "Manuscrito dos Mercadores [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_BI","Classe_BI_NT","Classe_ME","Classe_ME_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": (-5) + (hasCombo(slot, itemId, tipoItem, [["18973"]]) ? (-5) : 0),
        "danofisicotamanho": 5,
        "danomelee": (hasCombo(slot, itemId, tipoItem, [["18973"]]) ? 20 : 0) + (hasCombo(slot, itemId, tipoItem, [["18977"]]) ? 15 : 0),
        "danodistancia": (hasCombo(slot, itemId, tipoItem, [["18974"]]) ? 15 : 0),
        "danode--Gas_Criogenico": (hasCombo(slot, itemId, tipoItem, [["18974"]]) ? 40 : 0),
        "danode--Planta_Infernal": (hasCombo(slot, itemId, tipoItem, [["18977"]]) ? 20 : 0),
        "danofisicochefe": (hasCombo(slot, itemId, tipoItem, [["4361"]]) ? 40 : 0),
        "danofisicopropriedade": (hasCombo(slot, itemId, tipoItem, [["4563"]]) ? 20 : 0)
      }
    }
  },
  {
    itemId:     "5918",
    itemNome:   "Marcas de Comodo",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit","REQ_Aspd"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 3 + (parseInt(getAtributoBase("sor") / 10)) + (getAtributoBase("sor") >= 108 ? 5 : 0) + (getAtributoBase("sor") >= 120 ? 10 : 0),
        "danocritico": 3 + (parseInt(getAtributoBase("des") / 10) * (-2)) + (getAtributoBase("sor") >= 108 ? 10 : 0) + (getAtributoBase("sor") >= 120 ? 17 : 0),
        "atq": (parseInt(getAtributoBase("sor") / 10) * 2),
        "atqm": (parseInt(getAtributoBase("sor") / 10) * 2)
      }
    }
  },
  {
    itemId:     "410004",
    itemNome:   "Marcas de Comodo [1]",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit","REQ_Aspd"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 3 + (parseInt(getAtributoBase("sor") / 10)) + (getAtributoBase("sor") >= 108 ? 5 : 0) + (getAtributoBase("sor") >= 120 ? 10 : 0),
        "danocritico": 3 + (parseInt(getAtributoBase("des") / 10) * (-2)) + (getAtributoBase("sor") >= 108 ? 10 : 0) + (getAtributoBase("sor") >= 120 ? 17 : 0),
        "atq": (parseInt(getAtributoBase("sor") / 10) * 2),
        "atqm": (parseInt(getAtributoBase("sor") / 10) * 2)
      }
    }
  },
  {
    itemId:     "5361",
    itemNome:   "Máscara de Fugitivo",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5
      }
    }
  },
  {
    itemId:     "28565",
    itemNome:   "Máscara de Oni [1]",
    itemTipo:   "itemAcessorioE",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_IgnDefm","REQ_IgnDef","REQ_EP","REQ_CVar","REQ_Pos","REQ_HP","REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": parseInt(getAtributoBase("for") / 18) * 3,
        "ignoredefm": parseInt(getAtributoBase("for") / 18) * 15,
        "atributosorte": parseInt(getAtributoBase("agi") / 18) * 3,
        "esquivaperfeita": parseInt(getAtributoBase("agi") / 18) * 1,
        "atributodestreza": parseInt(getAtributoBase("vit") / 18) * 3,
        "conjuracaovariavel": parseInt(getAtributoBase("vit") / 18) * (-1),
        "atributoforca": parseInt(getAtributoBase("int") / 18) * 3,
        "posconjuracao": parseInt(getAtributoBase("int") / 18) * (-1),
        "atributovitalidade": parseInt(getAtributoBase("des") / 18) * 3,
        "hpp": parseInt(getAtributoBase("des") / 18) * 1,
        "atributoagilidade": parseInt(getAtributoBase("sor") / 18) * 3,
        "ignoredef": parseInt(getAtributoBase("sor") / 18) * 15,
      }
    }
  },
  {
    itemId:     "5933",
    itemNome:   "Máscara do Tengu Corvo",
    itemTipo:   "itemMeio",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 2 + (getAtributoBase("for") >= 108 ? 2 : 0) + (getAtributoBase("for") >= 120 ? 3 : 0) + (hasCombo(slot, itemId, tipoItem, [["19112"]]) ? (1 + (getAtributoBase("for") >= 108 ? 1 : 0) + (getAtributoBase("for") >= 120 ? 1 : 0)) : 0),
        "danofisicotamanho": 1 + (getAtributoBase("for") >= 108 ? 1 : 0) + (getAtributoBase("for") >= 120 ? 2 : 0) + (hasCombo(slot, itemId, tipoItem, [["19112"]]) ? (1 + (getAtributoBase("for") >= 108 ? 2 : 0) + (getAtributoBase("for") >= 120 ? 3 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "19456",
    itemNome:   "Máscara do Tengu Corvo [1]",
    itemTipo:   "itemMeio",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_DFisico"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 2 + (getAtributoBase("for") >= 108 ? 2 : 0) + (getAtributoBase("for") >= 120 ? 3 : 0) + (hasCombo(slot, itemId, tipoItem, [["19112"]]) ? (1 + (getAtributoBase("for") >= 108 ? 1 : 0) + (getAtributoBase("for") >= 120 ? 1 : 0)) : 0),
        "danofisicop": 1 + (getAtributoBase("for") >= 108 ? 1 : 0) + (getAtributoBase("for") >= 120 ? 2 : 0) + (hasCombo(slot, itemId, tipoItem, [["19112"]]) ? (1 + (getAtributoBase("for") >= 108 ? 2 : 0) + (getAtributoBase("for") >= 120 ? 3 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "490174",
    itemNome:   "Memorável Anel Rústico [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  170,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(hasCombo(slot, itemId, tipoItem, [["18984"]])) {
        temInvestigar = true;
      }
      return {
        "atributoforca": 3,
        "atributoagilidade": 3,
        "atributovitalidade": 3,
        "atributointeligencia": 3,
        "atributodestreza": 3,
        "atributosorte": 3,
        "recargade--Impacto_Flamejante": hasCombo(slot, itemId, tipoItem, [["18971"]]) ? (-1) : 0,
        "variavelpde--Impacto_Flamejante": hasCombo(slot, itemId, tipoItem, [["18971"]]) ? (-100) : 0,
        "posconjuracao": hasCombo(slot, itemId, tipoItem, [["18983","18978","18972","18973"]]) ? (-20) : 0,
        "recargade--Disparo_Perfurante": hasCombo(slot, itemId, tipoItem, [["18983"]]) ? (-1) : 0,
        "recargade--Meteoro_Escarlate": hasCombo(slot, itemId, tipoItem, [["18978"]]) ? (-1) : 0,
        "atqm": hasCombo(slot, itemId, tipoItem, [["18980"]]) ? 100 : 0,
        "danomagicoveneno": hasCombo(slot, itemId, tipoItem, [["18980"]]) ? 70 : 0,
        "conjuracaofixas": (hasCombo(slot, itemId, tipoItem, [["18982","18974"]]) ? (-0.3) : 0) + (hasCombo(slot, itemId, tipoItem, [["18977"]]) ? (-0.5) : 0),
        "ignoredef": hasCombo(slot, itemId, tipoItem, [["18975","18976","18981"]]) ? 70 : 0,
        "ignoredefm": hasCombo(slot, itemId, tipoItem, [["18972"]]) ? 70 : 0,
        "variavelpde--Tempestade_Espiritual": hasCombo(slot, itemId, tipoItem, [["18979"]]) ? (-100) : 0,
        "recargade--Furia_do_Furacao": hasCombo(slot, itemId, tipoItem, [["18973"]]) ? (-1) : 0,
        "variavelpde--Canhao_de_Protons": hasCombo(slot, itemId, tipoItem, [["18977"]]) ? (-100) : 0,
        "variavelpde--Bomba_Napalm": hasCombo(slot, itemId, tipoItem, [["18977"]]) ? (-100) : 0,
        "recargade--Temporal_de_Mil_Flechas": hasCombo(slot, itemId, tipoItem, [["18976","18981"]]) ? (-1) : 0,
      }
    }
  },
  {
    itemId:     "18975",
    itemNome:   "Memorável Artifício das Sombras [1]",
    itemTipo:   "itemTopo",
    itemNivel:  170,
    itemClasses: ["Classe_SC"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Disparo_Triplo"],
    slots: 1,
    encantamentos: [
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754"],
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754"],
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754","29061","29062","29063","29064","29065","29066","29067","29068","29069","29070","29071","29072","29073","29074","29075","29076","29077","29078","29079","29080","29081","29082","29083","29084","29085","29086","29087","29088","29089","29090","29091","29092","29093","29094","29095","29096","29097","29098","29099","29100","29101","29102","29103","29104","29105","29106","29107","29108","29109","29110","29111","29112","29113","29114","29115","29116","29117","29118","29119","29120"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1,
        "atq": getItemRefino(slot) * 4,
        "atqm": getItemRefino(slot) * 4,
        "hpp": parseInt(getItemRefino(slot) / 2),
        "danode--Disparo_Triplo": parseInt(getItemRefino(slot) / 2) * 25
      }
    }
  },
  {
    itemId:     "18981",
    itemNome:   "Memorável Súplica do Cisne [1]",
    itemTipo:   "itemTopo",
    itemNivel:  170,
    itemClasses: ["Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Temporal_de_Mil_Flechas","REQ_Vulcao_de_Flechas"],
    slots: 1,
    encantamentos: [
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754"],
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754"],
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754","29061","29062","29063","29064","29065","29066","29067","29068","29069","29070","29071","29072","29073","29074","29075","29076","29077","29078","29079","29080","29081","29082","29083","29084","29085","29086","29087","29088","29089","29090","29091","29092","29093","29094","29095","29096","29097","29098","29099","29100","29101","29102","29103","29104","29105","29106","29107","29108","29109","29110","29111","29112","29113","29114","29115","29116","29117","29118","29119","29120"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1,
        "danodistancia": getItemRefino(slot),
        "hpp": parseInt(getItemRefino(slot) / 2),
        "spp": parseInt(getItemRefino(slot) / 2),
        "danode--Vulcao_de_Flechas": parseInt(getItemRefino(slot) / 2) * 20,
        "danode--Temporal_de_Mil_Flechas": parseInt(getItemRefino(slot) / 2) * 5
      }
    }
  },
  {
    itemId:     "18976",
    itemNome:   "Memorável Inspiração do Artista [1]",
    itemTipo:   "itemTopo",
    itemNivel:  170,
    itemClasses: ["Classe_TR"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_Temporal_de_Mil_Flechas","REQ_Vulcao_de_Flechas"],
    slots: 1,
    encantamentos: [
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754"],
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754"],
      ["4700","4701","4702","4703","4704","4730","4731","4732","4733","4734","4740","4741","4742","4743","4744","4710","4711","4712","4713","4714","4720","4721","4722","4723","4724","4750","4751","4752","4753","4754","29061","29062","29063","29064","29065","29066","29067","29068","29069","29070","29071","29072","29073","29074","29075","29076","29077","29078","29079","29080","29081","29082","29083","29084","29085","29086","29087","29088","29089","29090","29091","29092","29093","29094","29095","29096","29097","29098","29099","29100","29101","29102","29103","29104","29105","29106","29107","29108","29109","29110","29111","29112","29113","29114","29115","29116","29117","29118","29119","29120"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1,
        "danodistancia": getItemRefino(slot),
        "hpp": parseInt(getItemRefino(slot) / 2),
        "spp": parseInt(getItemRefino(slot) / 2),
        "danode--Vulcao_de_Flechas": parseInt(getItemRefino(slot) / 2) * 20,
        "danode--Temporal_de_Mil_Flechas": parseInt(getItemRefino(slot) / 2) * 5
      }
    }
  },
  {
    itemId:     "28038",
    itemNome:   "Meuchler-OS [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Katar",
    itemArmaATQ: 190,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_GX","Classe_GX_NT","Classe_SX"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 3,
        "aspdp": getItemRefino(slot) >= 7 ? 7 : 0,
        "danode--Castigo_de_Loki": getItemRefino(slot) >= 9 ? 15 : 0,
        "danofisicotamanho": isOpponent("tamanhoMonstro", ["1","2"]) && getItemRefino(slot) >= 11 ? 20 : 0
      }
    }
  },
  {
    itemId:     "1990",
    itemNome:   "Microfone Floral de Igu [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 160,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Vulcao_de_Flechas": hasCombo(slot, itemId, tipoItem, [["2989"]]) ? 200 : 0,
      }
    }
  },
  {
    itemId:     "480114",
    itemNome:   "Mikoshi Sagrado [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Pos","REQ_Precisao"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": getItemRefino(slot) * 2,
        "posconjuracao": getItemRefino(slot) * (-1),
        "atq": isClasse(["Classe_SE","Classe_SE_NT","Classe_MU","Classe_MU_NT","Classe_TR","Classe_TR_NT"]) ? 50 : 0,
        "esquiva": isClasse(["Classe_SE","Classe_SE_NT","Classe_MU","Classe_MU_NT","Classe_TR","Classe_TR_NT"]) ? 50 : 0,
        "precisaoperfeita": getItemRefino(slot) >= 10 ? 25 : 0,
        "aspdp": getItemRefino(slot) >= 10 ? 10 : 0
      }
    }
  },
  {
    itemId:     "19029",
    itemNome:   "Miniatura de Alice [1] + mascote Alice leal",
    itemTipo:   "itemTopo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicochefe": 30
      }
    }
  },
  {
    itemId:     "2576",
    itemNome:   "Mochila da Aventura [1]",
    itemTipo:   "itemCapa",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_DMagico","REQ_DDist","REQ_DCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (getAtributoBase("for") >= 90 ? ((getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0)) : 0),
        "aspdp": (getAtributoBase("agi") >= 90 ? (getItemRefino(slot) >= 7 ? 8 : 0) : 0),
        "aspdf": (getAtributoBase("agi") >= 90 ? (getItemRefino(slot) >= 9 ? 1 : 0) : 0),
        "atqm": (getAtributoBase("int") >= 90 ? ((getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0)) : 0),
        "danodistancia": (getAtributoBase("des") >= 90 ? ((getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 5 : 0)) : 0),
        "danocritico": (getAtributoBase("sor") >= 90 ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 5 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "19137",
    itemNome:   "Morango Suculento",
    itemTipo:   "itemBaixo",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": (getNivelBase() >= 100) ? 2000 : 200
      }
    }
  },
  {
    itemId:     "20773",
    itemNome:   "Motor E.X.C.",
    itemTipo:   "itemCapa",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_EP","REQ_Pos","REQ_DFisico","REQ_DMagico","REQ_HP","REQ_SP"],
    slots: 0,
    encantamentos: [
      ["4991","4986","4987","4988","4989"],
      ["4985","4986","4987","4988","4989"],
      ["4986","4987","4988","4989"],
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 8 + (getNivelBase() >= 130 ? 2 : 0),
        "esquiva": getItemRefino(slot) * 2
      }
    }
  },
  {
    itemId:     "18179",
    itemNome:   "MH-P89-OS [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Arco",
    itemArmaATQ: 170,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_MU"],
    itemBonus: ["REQ_DFisico","REQ_DDist","REQ_Temporal_de_Mil_Flechas"],
    bonusaleatorios: [
      ["atq_5-60","crit_3-20","precisao_3-20","atqarmap_1-15","danofisicopropriedade_3-25"],
      ["esquiva_5-45","aspdf_1-2","aspdp_3-20","danocritico_3-20","danodistancia_3-20","danofisicotamanho_3-20","danofisicoraca_3-20"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 3,
        "danodistancia": getItemRefino(slot) >= 7 ? 7 : 0,
        "recargade--Temporal_de_Mil_Flechas": getItemRefino(slot) >= 9 ? (-2) : 0,
        "danode--Temporal_de_Mil_Flechas": getItemRefino(slot) >= 11 ? 15 : 0,
      }
    }
  },
  {
    itemId:     "2202",
    itemNome:   "Óculos Escuros [1]",
    itemTipo:   "itemMeio",
    itemNivel:  10,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DFisico","REQ_DCrit","REQ_DMagico","REQ_CVar","REQ_Cura","REQ_HP","REQ_Aspd"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "410080",
    itemNome:   "Óculos Neon [1]",
    itemTipo:   "itemMeio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_CVar","REQ_DCrit","REQ_DMagico","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": -5
      }
    }
  },
  {
    itemId:     "18813",
    itemNome:   "Óculos Retrofuturistas",
    itemTipo:   "itemMeio",
    itemNivel:  30,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -10
      }
    }
  },
  {
    itemId:     "19181",
    itemNome:   "Óculos Retrofuturistas [1]",
    itemTipo:   "itemMeio",
    itemNivel:  30,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -5
      }
    }
  },
  {
    itemId:     "19111",
    itemNome:   "Olho da Cecil [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "danodistancia": 10
      }
    }
  },
  {
    itemId:     "19111a",
    itemNome:   "Olho da Cecil [1] - Ativado",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "danodistancia": 10,
        "posconjuracao": -100
      }
    }
  },
  {
    itemId:     "5325",
    itemNome:   "Olhos Biônicos",
    itemTipo:   "itemMeio",
    itemNivel:  10,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 1,
        "danofisicop": 3,
        "danomagicop": 3
      }
    }
  },
  {
    itemId:     "420028",
    itemNome:   "Ombreiras da Glória",
    itemTipo:   "itemBaixo",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": parseInt((getAtributoBase("agi") + getAtributoBase("vit")) / 50) * (-3)
      }
    }
  },
  {
    itemId:     "19139",
    itemNome:   "Orbes Arcanos",
    itemTipo:   "itemBaixo",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_CVar"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 2,
        "danomagicop": 2,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    itemId:     "18934",
    itemNome:   "Orelhas de Flor do Luar [1] - Ativado",
    itemTipo:   "itemTopo",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_TCrit","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2,
        "aspdp": 10,
        "crit": 100,
        "danodistancia": 5 + (getItemRefino(slot) > 6 ? (getItemRefino(slot) - 6) : 0)
      }
    }
  },
  {
    itemId:     "5360",
    itemNome:   "Orelhas Felinas",
    itemTipo:   "itemTopo",
    itemNivel:  45,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 3 + (hasCombo(slot, itemId, tipoItem, [["2855"]]) ? 5 : 0),
        "esquiva": 10,
        "danocritico": 10 + (hasCombo(slot, itemId, tipoItem, [["2855"]]) ? 10 : 0)
      }
    }
  },
  {
    itemId:     "19451",
    itemNome:   "Ornamento Divino",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Precisao","REQ_HP","REQ_Pos","REQ_CVar","REQ_SP","REQ_TCrit","REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": (parseInt(getAtributoBase("for") / 18) * 2),
        "hpp": (parseInt(getAtributoBase("for") / 18) * 2),
        "esquiva": (parseInt(getAtributoBase("agi") / 18) * 2),
        "posconjuracao": (parseInt(getAtributoBase("agi") / 18) * (-2)),
        "conjuracaovariavel": (parseInt(getAtributoBase("vit") / 18) * (-2)),
        "spp": (parseInt(getAtributoBase("int") / 18) * 2),
        "crit": (parseInt(getAtributoBase("des") / 18) * 2),
        "aspdp": (parseInt(getAtributoBase("des") / 18) * 2),
        "atq": (parseInt(getAtributoBase("sor") / 18) * 15),
        "atqm": (parseInt(getAtributoBase("sor") / 18) * 15)
      }
    }
  },
  {
    itemId:     "19452",
    itemNome:   "Ornamento Divino [1]",
    itemTipo:   "itemMeio",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Precisao","REQ_HP","REQ_Pos","REQ_CVar","REQ_SP","REQ_TCrit","REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": (parseInt(getAtributoBase("for") / 18) * 2),
        "hpp": (parseInt(getAtributoBase("for") / 18) * 2),
        "esquiva": (parseInt(getAtributoBase("agi") / 18) * 2),
        "posconjuracao": (parseInt(getAtributoBase("agi") / 18) * (-2)),
        "conjuracaovariavel": (parseInt(getAtributoBase("vit") / 18) * (-2)),
        "spp": (parseInt(getAtributoBase("int") / 18) * 2),
        "crit": (parseInt(getAtributoBase("des") / 18) * 2),
        "aspdp": (parseInt(getAtributoBase("des") / 18) * 2),
        "atq": (parseInt(getAtributoBase("sor") / 18) * 15),
        "atqm": (parseInt(getAtributoBase("sor") / 18) * 15)
      }
    }
  },
  {
    itemId:     "19393",
    itemNome:   "Pedra do Desbravador",
    itemTipo:   "itemMeio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_CFix"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": -5,
        "danomagiconeutro": (parseInt(getAtributoBase("for") / 12) * 2),
        "danomagicovento": (parseInt(getAtributoBase("agi") / 12) * 2),
        "danomagicoagua": (parseInt(getAtributoBase("vit") / 12) * 2),
        "danomagicofogo": (parseInt(getAtributoBase("int") / 12) * 2),
        "danomagicoterra": (parseInt(getAtributoBase("des") / 12) * 2),
        "danomagicosagrado": (parseInt(getAtributoBase("sor") / 12) * 2)
      }
    }
  },
  {
    itemId:     "28506",
    itemNome:   "Pedra Tempestuosa [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  90,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": hasCombo(slot, itemId, tipoItem, [["15037"]]) && getItemRefino("itemArmadura") >= 7 ? 15 : 0,
        "spp": 5 + (hasCombo(slot, itemId, tipoItem, [["2884"]]) ? 5 : 0),
        "atqarmap": 5 + (hasCombo(slot, itemId, tipoItem, [["2884"]]) ? 5 : 0),
        "aspdp": 5 + (hasCombo(slot, itemId, tipoItem, [["2884"]]) ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["2476"]]) && getItemRefino("itemSapatos") >= 7 ? 10 : 0),
        "danode--Vento_Cortante": hasCombo(slot, itemId, tipoItem, [["1414","1449"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 30 : 0) + getItemRefino("itemMaoDireita") >= 9 ? 20 : 0) : 0,
        "danofisicochefe": hasCombo(slot, itemId, tipoItem, [["1414","1449"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 30 : 0) + getItemRefino("itemMaoDireita") >= 9 ? 20 : 0) : 0,
        "danofisicopropriedade": hasCombo(slot, itemId, tipoItem, [["1414","1449"]]) && isOpponent("racaMonstro", ["6","8"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 30 : 0) + getItemRefino("itemMaoDireita") >= 9 ? 20 : 0) : 0,
      }
    }
  },
  {
    itemId:     "20717",
    itemNome:   "Pele da Rainha Verme",
    itemTipo:   "itemCapa",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_CVar","REQ_DDist","REQ_DCrit"],
    slots: 0,
    encantamentos: [
      ["4700","4701","4702","4703","4704","4705","4706","4730","4731","4732","4733","4734","4735","4736","4740","4741","4742","4743","4744","4745","4746","4710","4711","4712","4713","4714","4715","4716","4720","4721","4722","4723","4724","4725","4726","4750","4751","4752","4753","4754","4755","4756"],
      ["4700","4701","4702","4703","4704","4705","4706","4730","4731","4732","4733","4734","4735","4736","4740","4741","4742","4743","4744","4745","4746","4710","4711","4712","4713","4714","4715","4716","4720","4721","4722","4723","4724","4725","4726","4750","4751","4752","4753","4754","4755","4756"],
      ["4853","4854","4855","4856","4857","4858"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "20718",
    itemNome:   "Pele da Rainha Verme [1]",
    itemTipo:   "itemCapa",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_Aspd","REQ_CVar","REQ_DDist","REQ_DCrit"],
    slots: 1,
    encantamentos: [
      ["4700","4701","4702","4703","4704","4705","4706","4730","4731","4732","4733","4734","4735","4736","4740","4741","4742","4743","4744","4745","4746","4710","4711","4712","4713","4714","4715","4716","4720","4721","4722","4723","4724","4725","4726","4750","4751","4752","4753","4754","4755","4756"],
      ["4700","4701","4702","4703","4704","4705","4706","4730","4731","4732","4733","4734","4735","4736","4740","4741","4742","4743","4744","4745","4746","4710","4711","4712","4713","4714","4715","4716","4720","4721","4722","4723","4724","4725","4726","4750","4751","4752","4753","4754","4755","4756"],
      ["4853","4854","4855","4856","4857","4858"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "19112",
    itemNome:   "Pergaminho do Tengu",
    itemTipo:   "itemBaixo",
    itemNivel:  40,
    itemClasses: ["todas"],
    itemBonus: ["REQ_CHP","REQ_DDist","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "32013",
    itemNome:   "Perna de Metal [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Lanca1",
    itemArmaATQ: 180,
    itemArmaATQM: 0,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT","Classe_RK","Classe_RK_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Disparo_Perfurante": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0),
        "posconjuracao": getItemRefino(slot) >= 12 ? (-15) : 0
      }
    }
  },
  {
    itemId:     "22103",
    itemNome:   "Perna E.X.C",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico","REQ_EP","REQ_Aspd"],
    slots: 0,
    encantamentos: [
      ["4982","4986","4987","4988","4989"],
      ["4983","4986","4987","4988","4989"],
      ["4991","4985","4986","4987","4988","4989"],
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5 + (parseInt(getItemRefino(slot) / 3) * 3) + (getNivelBase() >= 130 ? 4 : 0),
        "spp": 5 + (parseInt(getItemRefino(slot) / 3) * 3) + (getNivelBase() >= 130 ? 4 : 0)
      }
    }
  },
  {
    itemId:     "28521",
    itemNome:   "Proteção do Gigante [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_HP","REQ_SP","REQ_Choque_do_Carrinho","REQ_Onda_de_Choque","REQ_Perfurar_em_Espiral","REQ_Disparo_Certeiro","REQ_Tempestade_de_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 5,
        "atq": (getAtributoBase("for") >= 120 ? 50 : 0),
        "hpp": (getAtributoBase("for") >= 120 ? 5 : 0),
        "spp": (getAtributoBase("for") >= 120 ? 5 : 0),
        "danode--Tempestade_de_Flechas": (hasCombo(slot, itemId, tipoItem, [["18122"]]) ? (parseInt(getAtributoBase("for") / 10) * 2) : 0),
        "danofisicochefe": (hasCombo(slot, itemId, tipoItem, [["1387","1490","18122"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 5 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 10 : 0)) : 0),
        "danode--Choque_do_Carrinho": (hasCombo(slot, itemId, tipoItem, [["1387"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 5 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 10 : 0)) : 0),
        "danode--Onda_de_Choque": (hasCombo(slot, itemId, tipoItem, [["1490"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 5 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 10 : 0)) : 0),
        "danode--Perfurar_em_Espiral": (hasCombo(slot, itemId, tipoItem, [["1490"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 5 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 10 : 0)) : 0),
        "danode--Disparo_Certeiro": (hasCombo(slot, itemId, tipoItem, [["18122"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 5 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 10 : 0)) : 0),
        "danode--Tempestade_de_Flechas": (hasCombo(slot, itemId, tipoItem, [["18122"]]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 5 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 10 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "2990",
    itemNome:   "Pingente da Harmonia",
    itemTipo:   "itemAcessorio",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 6,
        "atributoforca": (-5) + (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? 5 : 0),
        "atributoagilidade": (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? 5 : 0),
        "atributovitalidade": (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? 5 : 0),
        "atributointeligencia": (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? 5 : 0),
        "atributodestreza": (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? 5 : 0),
        "atributosorte": (hasCombo(slot, itemId, tipoItem, [["2991"]]) ? 5 : 0)
      }
    }
  },
  {
    itemId:     "2992",
    itemNome:   "Pingente da Voragem",
    itemTipo:   "itemAcessorio",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DFisico","REQ_DCrit","REQ_CVar"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 6,
        "danomagicop": 6,
        "atributoforca": 1,
        "atributoagilidade": 1,
        "atributovitalidade": 1,
        "atributointeligencia": 1,
        "atributodestreza": 1,
        "atributosorte": 1
      }
    }
  },
  {
    itemId:     "2651",
    itemNome:   "Pingente de Morrigane",
    itemTipo:   "itemAcessorio",
    itemNivel:  61,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCrit","REQ_EP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "crit": 3
      }
    }
  },
  {
    itemId:     "2991",
    itemNome:   "Pingente do Caos",
    itemTipo:   "itemAcessorio",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 6,
        "atributointeligencia": (-5)
      }
    }
  },
  {
    itemId:     "19327",
    itemNome:   "Pluma do Serafim",
    itemTipo:   "itemBaixo",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Cura","REQ_CVar"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["19138"]]) ? ((parseInt(getAtributoBase("int") / 8) * (-1)) + (getAtributoBase("int") >= 108 ? (-4) : 0) + (getAtributoBase("int") >= 120 ? (-6) : 0)) : 0)
      }
    }
  },
  {
    itemId:     "19409",
    itemNome:   "Pluma Negra",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_IgnDef","REQ_Copia_Explosiva"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicochefe": isClasse(["Classe_SC"]) ? 50 : 0,
        "danode--Copia_Explosiva": 10 + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 25 : 0),
        "precisao": (getItemRefino(slot) >= 7 ? 30 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0),
        "ignoredef": (getItemRefino(slot) >= 10 ? 100 : 0)
      }
    }
  },
  {
    itemId:     "28438",
    itemNome:   "Pó de Fada [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "posconjuracao": (-5) + (hasCombo(slot, itemId, tipoItem, [["4832"]]) ? (-5) : 0) + (hasCombo(slot, itemId, tipoItem, [["4833"]]) ? (-5) : 0),
        "danodistancia": 2 + (getAtributoBase("des") >= 100 ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["4832"]]) ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["4833"]]) ? 5 : 0)
      }
    }
  },
  {
    itemId:     "19321",
    itemNome:   "Pombinho Branco",
    itemTipo:   "itemBaixo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DFisico","REQ_DMagico"],
    slots: 0,
    encantamentos: [
      ["4700","4710","4720","4740","4730","4750","4859","4859","4929","4861","4939","4883","4882","4850","4807"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 5 + (hasCombo(slot, itemId, tipoItem, [["19109","19110"]]) ? (parseInt(getAtributoBase("sor") / 20) * 5) : 0),
        "aspdp": 5,
        "atq": (hasCombo(slot, itemId, tipoItem, [["19109","19110"]]) ? (parseInt(getAtributoBase("sor") / 20) * 20) : 0),
        "atqm": (hasCombo(slot, itemId, tipoItem, [["19109","19110"]]) ? (parseInt(getAtributoBase("sor") / 20) * 20) : 0)
      }
    }
  },
  {
    itemId:     "18754",
    itemNome:   "Presas Vampíricas",
    itemTipo:   "itemBaixo",
    itemNivel:  40,
    itemClasses: ["todas"],
    itemBonus: ["REQ_CHP"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "490130",
    itemNome:   "Pulseira de Ferro Trançado [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SC_NT","Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico","REQ_Soco_Furacao"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 7 + (isClasse(["Classe_SH","Classe_SH_NT"]) ? 20 : 0),
        "danofisicop": 10,
        "danode--Soco_Furacao": getNivelBase() * 2,
        "danofisicotamanho": isClasse(["Classe_SH","Classe_SH_NT"]) ? 10 : 0,
        "hpp": isClasse(["Classe_SH","Classe_SH_NT"]) ? 20 : 0,
        "spp": isClasse(["Classe_SH","Classe_SH_NT"]) ? 20 : 0,
        "esquiva": isClasse(["Classe_SH","Classe_SH_NT"]) ? 50 : 0
      }
    }
  },
  {
    itemId:     "28708",
    itemNome:   "Punhal de Iansã [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 150,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 4,
    itemClasses: ["Classe_RK","Classe_RG","Classe_WL","Classe_SO","Classe_SE","Classe_TR","Classe_MU","Classe_SC","Classe_GX","Classe_BI","Classe_ME","Classe_KA","Classe_OB"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["8"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["40","41","42","43"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "28491",
    itemNome:   "Punhal de Matagi [1]",
    itemTipo:   "itemAcessorio",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCritD"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 2,
        "precisao": 10 + (getAtributoBase("sor") >= 100 ? 5 : 0) + (hasCombo(slot, itemId, tipoItem, [["29135"]]) ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["29136"]]) ? 15 : 0),
        "critd": 5 + (getAtributoBase("sor") >= 100 ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["29135"]]) ? 10 : 0) + (hasCombo(slot, itemId, tipoItem, [["29136"]]) ? 10 : 0)
      }
    }
  },
  {
    itemId:     "28715",
    itemNome:   "Punhal de Oxóssi [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 150,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 2,
    itemClasses: ["Classe_RK","Classe_RG","Classe_WL","Classe_SO","Classe_SE","Classe_TR","Classe_MU","Classe_SC","Classe_GX","Classe_BI","Classe_ME","Classe_KA","Classe_OB"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["2","9"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["20","21","22","23","30","31","32","33"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "28720",
    itemNome:   "Punhal de Oxum [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 150,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 1,
    itemClasses: ["Classe_RK","Classe_RG","Classe_WL","Classe_SO","Classe_SE","Classe_TR","Classe_MU","Classe_SC","Classe_GX","Classe_BI","Classe_ME","Classe_KA","Classe_OB"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["0","3"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "28727",
    itemNome:   "Punhal de Xangô [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Adaga",
    itemArmaATQ: 150,
    itemArmaNivel: 3,
    itemNivel:  50,
    itemPropriedade: 3,
    itemClasses: ["Classe_RK","Classe_RG","Classe_WL","Classe_SO","Classe_SE","Classe_TR","Classe_MU","Classe_SC","Classe_GX","Classe_BI","Classe_ME","Classe_KA","Classe_OB"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    encantamentos: encantamentosArmasBrasilis,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": (isOpponent("racaMonstro", ["5","6"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0),
        "danofisicopropriedade": (isOpponent("propriedadeMonstro", ["30","31","32","33","40","41","42","43"]) ? ((getItemRefino("itemMaoDireita") >= 7 ? 10 : 0) + (getItemRefino("itemMaoDireita") >= 9 ? 15 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "1836",
    itemNome:   "Punho de Cinzas [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 160,
    itemArmaATQM: 100,
    itemArmaNivel: 4,
    itemNivel:  120,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 6,
        "atributovitalidade": 6,
        "atributosorte": -6
      }
    }
  },
  {
    itemId:     "1830",
    itemNome:   "Punho Violento [1]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 142,
    itemArmaNivel: 3,
    itemNivel:  102,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Impacto_Sismico": 20,
        "danode--Soco_Furacao": 20
      }
    }
  },
  {
    itemId:     "19300",
    itemNome:   "Quepe do Cão-mandante [1]",
    itemTipo:   "itemTopo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CFix","REQ_Furia_do_Furacao","REQ_Descarregar_Tambor"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 15) + (getItemRefino(slot) >= 7 ? 30 : 0) + (hasCombo(slot, itemId, tipoItem, [["28000"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 20) : 0),
        "atqarmap": (getItemRefino(slot) >= 9 ? 5 : 0),
        "aspdf": (getItemRefino(slot) >= 9 ? 1 : 0),
        "danocritico": (getItemRefino(slot) >= 11 ? 3 : 0),
        "danodistancia": (getItemRefino(slot) >= 11 ? 3 : 0),
        "conjuracaofixas": ((getItemRefino(slot) >= 11 ? ((Math.min(getItemRefino(slot), 15) - 10) / (-10)) : 0)),
        "danode--Furia_do_Furacao": hasCombo(slot, itemId, tipoItem, [["28101"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 15) : 0,
        "danode--Descarregar_Tambor": hasCombo(slot, itemId, tipoItem, [["13138"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 6) : 0
      }
    }
  },
  {
    itemId:     "19379",
    itemNome:   "Quepe do General [1]",
    itemTipo:   "itemTopo",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_Precisao","REQ_Pos","REQ_DDist"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 5,
        "atributodestreza": 5,
        "aspdp": 10,
        "precisao": getItemRefino(slot) * 2,
        "posconjuracao": getItemRefino(slot) * (-2),
        "precisaoperfeita": 10 + (getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 20 : 0),
        "danodistancia": 5 + (getItemRefino(slot) >= 9 ? 10 : 0) + (getItemRefino(slot) >= 11 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "400049",
    itemNome:   "Quepe Humilde [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CVar","REQ_CFix","REQ_Disparo_Perfurante","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 20) + (hasCombo(slot, itemId, tipoItem, [["32019"]]) ? 30 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0),
        "danodistancia": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["18179","18180"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danofisicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "danode--Disparo_Perfurante": (hasCombo(slot, itemId, tipoItem, [["32019"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "danode--Temporal_de_Mil_Flechas": (hasCombo(slot, itemId, tipoItem, [["18179"]]) ? 10 : 0),
        "posconjuracao": (hasCombo(slot, itemId, tipoItem, [["18180"]]) ? (-10) : 0)
      }
    }
  },
  {
    itemId:     "2855",
    itemNome:   "Rabo de Gato Preto",
    itemTipo:   "itemAcessorio",
    itemNivel:  45,
    itemClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 7,
        "aspdp": 3
      }
    }
  },
  {
    itemId:     "420227",
    itemNome:   "Raposa Ilusional",
    itemTipo:   "itemBaixo",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (hasCombo(slot, itemId, tipoItem, [["19210"]]) ? (parseInt(getItemRefino("itemTopo") / 2) * 10) : 0) + (hasCombo(slot, itemId, tipoItem, [["20838"]]) ? 50 : 0),
        "atqm": hasCombo(slot, itemId, tipoItem, [["20838"]]) ? 50 : 0,
        "atributodestreza": hasCombo(slot, itemId, tipoItem, [["19210"]]) ? (parseInt(getItemRefino("itemTopo") / 2) * 3) : 0,
        "danofisicotamanho": hasCombo(slot, itemId, tipoItem, [["19210"]]) ? (parseInt(getItemRefino("itemTopo") / 2) * 2) : 0,
        "hpp": hasCombo(slot, itemId, tipoItem, [["22133"]]) ? 10 : 0,
        "spp": hasCombo(slot, itemId, tipoItem, [["22133"]]) ? 10 : 0,
        "spf": hasCombo(slot, itemId, tipoItem, [["16063"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 200) : 0,
        "aspdp": hasCombo(slot, itemId, tipoItem, [["22133"]]) ? (getItemRefino("itemSapatos") >= 9 ? 10 : 0) : 0,
        "conjuracaofixas": hasCombo(slot, itemId, tipoItem, [["22133"]]) ? (getItemRefino("itemSapatos") >= 9 ? (-0.5) : 0) : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["20838"]]) ? (-15) : 0,
        "danofisicochefe": hasCombo(slot, itemId, tipoItem, [["16063"]]) ? (parseInt(getItemRefino("itemMaoDireita") / 2) * 5) : 0,
        "danode--Punho_Supremo_de_Asura": hasCombo(slot, itemId, tipoItem, [["16063"]]) && getItemRefino("itemMaoDireita") >= 11 ? 35 : 0,
      }
    }
  },
  {
    itemId:     "450010",
    itemNome:   "Robe Chique [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 5,
        "atributosorte": 5,
        "atq": getItemRefino(slot) >= 8 ? (parseInt((getAtributoBase("vit") + getAtributoBase("sor")) / 10) * 10) : 0,
        "atqm": getItemRefino(slot) >= 8 ? (parseInt((getAtributoBase("vit") + getAtributoBase("sor")) / 10) * 10) : 0,
        "danofisicoraca": isOpponent("racaMonstro", ["1","4"]) && hasCombo(slot, itemId, tipoItem, [["4635"]]) ? 40 : 0,
        "danomagicoraca": isOpponent("racaMonstro", ["1","4"]) && hasCombo(slot, itemId, tipoItem, [["4635"]]) ? 40 : 0
      }
    }
  },
  {
    itemId:     "15421",
    itemNome:   "Robe da Graça Divina [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_Aspd","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 15,
        "spp": 15,
        "aspdp": getItemRefino(slot),
        "danofisicop": (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "danofisicoraca": (isOpponent("propriedadeMonstro", ["10","11","12","13"]) && hasCombo(slot, itemId, tipoItem, [["4419"]])) ? (getNivelBase() >= 100 ? (getItemRefino(slot) * 5) : 0) : 0
      }
    }
  },
  {
    itemId:     "450224",
    itemNome:   "Robe do Governante [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 5,
        "danofisicop": parseInt(getItemRefino(slot) / 3) * 10,
        "danomagicop": parseInt(getItemRefino(slot) / 3) * 10
      }
    }
  },
  {
    itemId:     "19318",
    itemNome:   "Rosário da Guarda Real",
    itemTipo:   "itemBaixo",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": 1,
        "aspdp": (hasCombo(slot, itemId, tipoItem, [["18823"]]) ? (3 + (getAtributoBase("agi") >= 108 ? 5 : 0) + (getAtributoBase("agi") >= 120 ? 7 : 0)) : 0),
        "atq": (hasCombo(slot, itemId, tipoItem, [["18823"]]) ? (10 + (getAtributoBase("agi") >= 108 ? 20 : 0) + (getAtributoBase("agi") >= 120 ? 40 : 0)) : 0)
      }
    }
  },
  {
    itemId:     "1126",
    itemNome:   "Sabre [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Espada1",
    itemArmaATQ: 115,
    itemArmaNivel: 3,
    itemNivel:  27,
    itemPropriedade: 0,
    itemClasses: ["Classe_ES","Classe_GA","Classe_MC","Classe_LO","Classe_PA","Classe_GC","Classe_ST","Classe_MF","Classe_CR","Classe_RK","Classe_RG","Classe_GX","Classe_SC","Classe_MH","Classe_BI"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    itemId:     "22071",
    itemNome:   "Salto Alto Elegante [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Pos","REQ_CVar","REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR","REQ_Aspd","REQ_TCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": getItemRefino(slot) * (-2),
        "conjuracaovariavel": (hasCombo(slot, itemId, tipoItem, [["2235","5165","2234","5164"]]) ? (10 + (parseInt((getItemRefino(slot) + getItemRefino("itemTopo")) / 2) * (-1))) : 0) + (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (-10) : 0),
        "danofisicop": (hasCombo(slot, itemId, tipoItem, [["2235","5165"]]) ? (parseInt((getItemRefino(slot) + getItemRefino("itemTopo")) / 2)) : 0),
        "danomagicop": (hasCombo(slot, itemId, tipoItem, [["2234","5164"]]) ? (parseInt((getItemRefino(slot) + getItemRefino("itemTopo")) / 2)) : 0),
        "atributoforca": (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (getItemRefino(slot) * 3) : 0),
        "atributoagilidade": (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (getItemRefino(slot) * 3) : 0),
        "atributovitalidade": (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (getItemRefino(slot) * 3) : 0),
        "atributointeligencia": (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (getItemRefino(slot) * 3) : 0),
        "atributodestreza": (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (getItemRefino(slot) * 3) : 0),
        "atributosorte": (hasCombo(slot, itemId, tipoItem, [["4236"]]) ? (getItemRefino(slot) * 3) : 0)
      }
    }
  },
  {
    itemId:     "15368",
    itemNome:   "Saltos da Rainha Scaraba [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  85,
    itemClasses: ["Classe_SC","Classe_SC_NT","Classe_AB","Classe_AB_NT","Classe_SH","Classe_SH_NT","Classe_BI","Classe_BI_NT","Classe_MC","Classe_MC_NT"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 2 + (getItemRefino(slot) >= 5 ? 4 : 0) + (getItemRefino(slot) >= 7 ? 4 : 0),
        "spp": 2 + (getItemRefino(slot) >= 5 ? 4 : 0) + (getItemRefino(slot) >= 7 ? 4 : 0),
        "spf": hasCombo(slot, itemId, tipoItem, [["16003"]]) ? ((getItemRefino("itemMaoDireita") >= 10 ? 400 : 0) + (getItemRefino("itemMaoDireita") >= 12 ? 200 : 0)) : 0,
        "danofisicochefe": (hasCombo(slot, itemId, tipoItem, [["16003","1287"]]) ? ((getItemRefino("itemMaoDireita") >= 10 ? 20 : 0) + (getItemRefino("itemMaoDireita") >= 12 ? 10 : 0)) : 0) + (hasCombo(slot, itemId, tipoItem, [["1746"]]) ? ((getItemRefino("itemMaoDireita") >= 9 ? 20 : 0) + (getItemRefino("itemMaoDireita") >= 11 ? 10 : 0)) : 0),
        "ignoredef": hasCombo(slot, itemId, tipoItem, [["1287"]]) ? 100 : 0,
        "danode--Laminas_de_Loki": hasCombo(slot, itemId, tipoItem, [["1287"]]) ? ((getItemRefino("itemMaoDireita") >= 10 ? 8 : 0) + (getItemRefino("itemMaoDireita") >= 12 ? 4 : 0)) : 0,
        "conjuracaovariavel": hasCombo(slot, itemId, tipoItem, [["1649","1679"]]) ? (getItemRefino(slot) >= 8 ? (-20) : 0) : 0,
        "ignoredefm": hasCombo(slot, itemId, tipoItem, [["1649","1679"]]) ? ((getItemRefino("itemMaoDireita") >= 9 ? 20 : 0) + (getItemRefino("itemMaoDireita") >= 11 ? 10 : 0)) : 0,
        "danomagicochefe": hasCombo(slot, itemId, tipoItem, [["1649","1679"]]) ? ((getItemRefino("itemMaoDireita") >= 9 ? 20 : 0) + (getItemRefino("itemMaoDireita") >= 11 ? 10 : 0)) : 0,
        "recargade--Temporal_de_Mil_Flechas": hasCombo(slot, itemId, tipoItem, [["1746"]]) ? (getItemRefino(slot) >= 8 ? (-2) : 0) : 0,
        "danode--Temporal_de_Mil_Flechas": hasCombo(slot, itemId, tipoItem, [["1746"]]) ? ((getItemRefino("itemMaoDireita") >= 9 ? 8 : 0) + (getItemRefino("itemMaoDireita") >= 11 ? 4 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "28922",
    itemNome:   "Sancti Ilusional [1]",
    itemTipo:   "itemEscudo",
    itemDefesa: 190,
    itemPeso: 160,
    itemNivel:  120,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_Aegis_Inferi"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2,
        "atributovitalidade": 3,
        "danode--Aegis_Inferi": getItemRefino(slot) * 7
      }
    }
  },
  {
    itemId:     "22214",
    itemNome:   "Sapatos de Salto Dourado",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_IgnDef","REQ_IgnDefm","REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR","REQ_CVar"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "ignoredef": 50,
        "ignoredefm": 50,
        "atributoforca": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atributoagilidade": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atributovitalidade": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atributointeligencia": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atributodestreza": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "atributosorte": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "470056",
    itemNome:   "Sapatos do Perseguidor",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_Aspd","REQ_IgnDef","REQ_DFisico","REQ_Acerto_de_Contas"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(isClasse("Classe_SC")) {
        temDrake = true;
      }
      return {
        "esquiva": (isClasse("Classe_SC") ? 52 : 0),
        "ignoredef": (isClasse("Classe_SC") ? 100 : 0),
        "danofisicop": (isClasse("Classe_SC","Classe_RK","Classe_RG","Classe_SA") ? 20 : 0),
        "danode--Acerto_de_Contas": (isClasse("Classe_SC") ? 100 : 0),
        "hpp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "spp": 3 + (getItemRefino(slot) >= 5 ? 7 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0),
        "aspdp": (getItemRefino(slot) >= 5 ? 5 : 0) + (getItemRefino(slot) >= 7 ? 5 : 0)
      }
    }
  },
  {
    itemId:     "22195",
    itemNome:   "Sapatos Inteligentes [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10 + (getAtributoBase("vit") >= 125 ? ((getItemRefino(slot) >= 8 ? 5 : 0) + (getItemRefino(slot) >= 12 ? 5 : 0)) : 0),
        "spp": 10,
        "atq": getAtributoBase("for") >= 125 ? ((getItemRefino(slot) >= 8 ? 90 : 0) + (getItemRefino(slot) >= 12 ? 90 : 0)) : 0,
        "aspdf": getAtributoBase("agi") >= 125 ? ((getItemRefino(slot) >= 8 ? 2 : 0) + (getItemRefino(slot) >= 12 ? 2 : 0)) : 0,
        "atqm": getAtributoBase("int") >= 125 ? ((getItemRefino(slot) >= 8 ? 120 : 0) + (getItemRefino(slot) >= 12 ? 120 : 0)) : 0,
        "danodistancia": getAtributoBase("des") >= 125 ? ((getItemRefino(slot) >= 8 ? 10 : 0) + (getItemRefino(slot) >= 12 ? 10 : 0)) : 0,
        "danocritico": getAtributoBase("sor") >= 125 ? ((getItemRefino(slot) >= 8 ? 20 : 0) + (getItemRefino(slot) >= 12 ? 20 : 0)) : 0
      }
    }
  },
  {
    itemId:     "22244",
    itemNome:   "Sapatos Grã-fino [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0),
        "danomagicopropriedade": 10 + (getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "22082",
    itemNome:   "Sapatos Luxuosos [1]",
    itemTipo:   "itemSapatos",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 1,
    encantamentos: [
      ["4866","4881","4824","4830","4836"],
      ["4702","4742","4712","4722","4752"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["00","01","02","03","10","11","12","13","20","21","22","23","30","31","32","33","40","41","42","43"]) ? (5 + (getItemRefino(slot) >= 5 ? 5 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro", ["00","01","02","03","10","11","12","13","20","21","22","23","30","31","32","33","40","41","42","43"]) ? (5 + (getItemRefino(slot) >= 5 ? 5 : 0) + (getItemRefino(slot) >= 7 ? 10 : 0)) : 0
      }
    }
  },
  {
    itemId:     "2448",
    itemNome:   "Sapatos Velozes",
    itemTipo:   "itemSapatos",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_CVar"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 3,
        "conjuracaovariavel": -3,
        "atributoagilidade": 1
      }
    }
  },
  {
    itemId:     "1978",
    itemNome:   "Serpente de Batalha B",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Chicote",
    itemArmaATQ: 50,
    itemArmaNivel: 3,
    itemNivel:  80,
    itemPropriedade: 0,
    itemClasses: ["Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2,
        "danode--Vulcao_de_Flechas": 20,
        "danofisicoraca": isOpponent("racaMonstro",["5","10"]) ? 95 : 0
      }
    }
  },
  {
    itemId:     "480023",
    itemNome:   "Sobretudo do Mestre [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DCrit","REQ_TCrit"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10,
        "danocritico": 5 + (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 8 ? 20 : 0) + (getItemRefino(slot) >= 9 ? 30 : 0) + (getItemRefino(slot) >= 10 ? 50 : 0),
        "crit": (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 8 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 20 : 0) + (getItemRefino(slot) >= 10 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "15383",
    itemNome:   "Sobretudo do Senhor do Tempo [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_DFisico","REQ_DMagico","REQ_Pos","REQ_CVar","REQ_Aspd"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpf": 500,
        "spf": 100,
        "atq": 50,
        "atqm": 50,
        "posconjuracao": (-10) + (hasCombo(slot, itemId, tipoItem, [["20939"]]) ? (-10) : 0)
      }
    }
  },
  {
    itemId:     "560002",
    itemNome:   "Soqueira Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 185,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 10),
        "danode--Garra_de_Tigre": (parseInt(getItemRefino(slot) / 3) * 4) + (getItemRefino(slot) >= 9 ? 15 : 0),
        "recargade--Garra_de_Tigre": (getItemRefino(slot) >= 11 ? (-1) : 0)
      }
    }
  },
  {
    itemId:     "1835",
    itemNome:   "Soqueira de Spartacus [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 100,
    itemArmaNivel: 4,
    itemNivel:  50,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      if(getItemRefino(slot) >= 10) {
        temDrake = true;
      }
      return {
        "danofisicop": getItemRefino(slot)
      }
    }
  },
  {
    itemId:     "560009",
    itemNome:   "Soqueira Primordial [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Soqueira",
    itemArmaATQ: 205,
    itemArmaNivel: 4,
    itemNivel:  150,
    itemPropriedade: 0,
    itemClasses: ["Classe_SH","Classe_SH_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    bonusaleatorios: [
      ["danofisicopropriedade_3-25","atq_5-40","aspdp_3-12","danodistancia_3-12","danomelee_3-12","aspdf_1-2"],
      ["danofisicoraca_3-25","danocritico_3-12","danofisicochefe_1-12","atqarmap_1-7"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 15),
        "danode--Garra_de_Tigre": (parseInt(getItemRefino(slot) / 3) * 4) + (getItemRefino(slot) >= 7 ? 15 : 0),
        "danode--Portoes_do_Inferno": (getItemRefino(slot) >= 7 ? 20 : 0) + (getItemRefino(slot) >= 11 ? 15 : 0),
        "recargade--Garra_de_Tigre": (getItemRefino(slot) >= 9 ? (-1) : 0),
        "hpp": (getItemRefino(slot) >= 11 ? 10 : 0)
      }
    }
  },
  {
    itemId:     "1935",
    itemNome:   "Ukulele do Novo Oz [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Instrumento",
    itemArmaATQ: 160,
    itemArmaNivel: 4,
    itemNivel:  130,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Vulcao_de_Flechas": hasCombo(slot, itemId, tipoItem, [["2988"]]) ? 200 : 0,
      }
    }
  },
  {
    itemId:     "15040",
    itemNome:   "Uniforme de Presidiário",
    itemTipo:   "itemArmadura",
    itemNivel:  50,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquiva": Math.min(getItemRefino(slot), 10),
        "precisao": Math.min(getItemRefino(slot), 10),
        "esquiva": ((hasCombo(slot, itemId, tipoItem, [["2913"]])) ? (Math.min(getItemRefino(slot), 10) * 2) : 0),
      }
    }
  },
  {
    itemId:     "19443",
    itemNome:   "Tapa-Olho Cósmico",
    itemTipo:   "itemMeio",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_VIT","REQ_DFisico","REQ_DMagico","REQ_SOR","REQ_HP","REQ_TCrit"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("vit") / 10) * 30) : (parseInt(getAtributoBase("vit") / 10) * 10)) : 0,
        "atqm": hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("vit") / 10) * 30) : (parseInt(getAtributoBase("vit") / 10) * 10)) : 0,
        "atributovitalidade": 3 + (hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("sor") / 10) * 3) : (parseInt(getAtributoBase("sor") / 10) * 1)) : 0),
        "atributosorte": (hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("sor") / 10) * 3) : (parseInt(getAtributoBase("sor") / 10) * 1)) : 0)
      }
    }
  },
  {
    itemId:     "19444",
    itemNome:   "Tapa-Olho Cósmico [1]",
    itemTipo:   "itemMeio",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_VIT","REQ_DFisico","REQ_DMagico","REQ_SOR","REQ_HP","REQ_TCrit"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("vit") / 10) * 30) : (parseInt(getAtributoBase("vit") / 10) * 10)) : 0,
        "atqm": hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("vit") / 10) * 30) : (parseInt(getAtributoBase("vit") / 10) * 10)) : 0,
        "atributovitalidade": 3 + (hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("sor") / 10) * 3) : (parseInt(getAtributoBase("sor") / 10) * 1)) : 0),
        "atributosorte": (hasCombo(slot, itemId, tipoItem, [["4143"]]) ? (getNivelBase() >= 100 ? (parseInt(getAtributoBase("sor") / 10) * 3) : (parseInt(getAtributoBase("sor") / 10) * 1)) : 0)
      }
    }
  },
  {
    itemId:     "2910",
    itemNome:   "Tatuagem Amuleto de Bakonawa",
    itemTipo:   "itemAcessorio",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 7,
        "aspdp": 10
      }
    }
  },
  {
    itemId:     "400059",
    itemNome:   "Tiara de Escorpião [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_CFix","REQ_Luz_da_Criacao","REQ_Onda_Psiquica","REQ_Judex"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": (parseInt(getItemRefino(slot) / 2) * 20) + (hasCombo(slot, itemId, tipoItem, [["26151"]]) ? 30 : 0),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0),
        "danomagiconeutro": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicofogo": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicovento": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoterra": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoagua": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicosagrado": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["13493","16089"]]) ? 5 : 0),
        "danomagicosombrio": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicoveneno": (getItemRefino(slot) >= 9 ? 15 : 0),
        "danomagicofantasma": (getItemRefino(slot) >= 9 ? 15 : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danomagicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "danode--Luz_da_Criacao": (hasCombo(slot, itemId, tipoItem, [["13493"]]) ? (parseInt(getItemRefino(slot) / 2) * 4) : 0),
        "danode--Onda_Psiquica": (hasCombo(slot, itemId, tipoItem, [["26151"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "danode--Judex": (hasCombo(slot, itemId, tipoItem, [["16089"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0)
      }
    }
  },
  {
    itemId:     "19109",
    itemNome:   "Tiara de Popstar",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_SP","REQ_TCrit","REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 50
      }
    }
  },
  {
    itemId:     "19110",
    itemNome:   "Tiara de Popstar [1]",
    itemTipo:   "itemMeio",
    itemNivel:  70,
    itemClasses: ["todas"],
    itemBonus: ["REQ_SP","REQ_TCrit","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    encantamentos: [
      ["4700","4730","4740","4710","4720","4750"]
    ],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 50
      }
    }
  },
  {
    itemId:     "400061",
    itemNome:   "Tiara de Sagitário [1]",
    itemTipo:   "itemTopo",
    itemNivel:  130,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_CVar","REQ_CFix","REQ_DDist","REQ_Explosao_Espiritual","REQ_Execucao","REQ_Bomba_Acida"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": (parseInt(getItemRefino(slot) / 2) * 20),
        "conjuracaovariavel": (getItemRefino(slot) >= 7 ? (-15) : 0) + (hasCombo(slot, itemId, tipoItem, [["16088"]]) ? (-10) : 0),
        "danodistancia": (getItemRefino(slot) >= 9 ? 15 : 0) + (hasCombo(slot, itemId, tipoItem, [["1862"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0) + (hasCombo(slot, itemId, tipoItem, [["28253"]]) ? 5 : 0),
        "conjuracaofixas": (getItemRefino(slot) >= 11 ? (-0.2) : 0),
        "danofisicotamanho": (getItemRefino(slot) >= 11 && isOpponent("tamanhoMonstro", ["0","1"]) ? 15 : 0),
        "recargade--Explosao_Espiritual": (hasCombo(slot, itemId, tipoItem, [["1862"]]) ? (-1) : 0),
        "danode--Execucao": (hasCombo(slot, itemId, tipoItem, [["28253"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0),
        "danode--Bomba_Acida": (hasCombo(slot, itemId, tipoItem, [["16088"]]) ? (parseInt(getItemRefino(slot) / 2) * 3) : 0)
      }
    }
  },
  {
    itemId:     "20799",
    itemNome:   "Toalha do Mochileiro [1]",
    itemTipo:   "itemCapa",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Tempestade_de_Flechas","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 2 + (getItemRefino(slot) >= 7 ? 2 : 0) + (getItemRefino(slot) >= 9 ? 3 : 0),
        "danode--Tempestade_de_Flechas": ((hasCombo(slot, itemId, tipoItem, [["1730"],["1752"]]) || hasCombo(slot, itemId, tipoItem, [["1731"],["1754"]]) || hasCombo(slot, itemId, tipoItem, [["1732"],["1756"]]) || hasCombo(slot, itemId, tipoItem, [["1733"],["1755"]])) ? (getItemRefino(slot) * 5) : 0),
        "danode--Temporal_de_Mil_Flechas": ((hasCombo(slot, itemId, tipoItem, [["1730"],["1752"]]) || hasCombo(slot, itemId, tipoItem, [["1731"],["1754"]]) || hasCombo(slot, itemId, tipoItem, [["1732"],["1756"]]) || hasCombo(slot, itemId, tipoItem, [["1733"],["1755"]])) ? (getItemRefino(slot) * 5) : 0),
        "aspdf": ((hasCombo(slot, itemId, tipoItem, [["1730"],["1752"]]) || hasCombo(slot, itemId, tipoItem, [["1731"],["1754"]]) || hasCombo(slot, itemId, tipoItem, [["1732"],["1756"]]) || hasCombo(slot, itemId, tipoItem, [["1733"],["1755"]])) ? (getItemRefino("itemMaoDireita") >= 10 ? 1 : 0) : 0),
      }
    }
  },
  {
    itemId:     "15073",
    itemNome:   "Traje Anti-Magia [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  99,
    itemClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DFisico","REQ_Pos"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5 + (getItemRefino(slot) >= 7 ? 2 : 0)
      }
    }
  },
  {
    itemId:     "15097",
    itemNome:   "Traje Heroico da Ocultação [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  160,
    itemClasses: ["Classe_SC","Classe_GX"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_Disparo_Triplo","REQ_Acerto_de_Contas","REQ_Laminas_Retalhadoras","REQ_Castigo_de_Loki"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5,
        "spp": 5,
        "danode--Disparo_Triplo": 10,
        "danode--Acerto_de_Contas": 10,
        "danode--Laminas_Retalhadoras": 10,
        "danode--Castigo_de_Loki": 10
      }
    }
  },
  {
    itemId:     "15097a",
    itemNome:   "Traje Heroico da Ocultação [1] - Ativado",
    itemTipo:   "itemArmadura",
    itemNivel:  160,
    itemClasses: ["Classe_SC","Classe_GX"],
    itemBonus: ["REQ_HP","REQ_SP","REQ_Disparo_Triplo","REQ_Acerto_de_Contas","REQ_Laminas_Retalhadoras","REQ_Castigo_de_Loki","REQ_TCrit","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5,
        "spp": 5,
        "danode--Disparo_Triplo": 10,
        "danode--Acerto_de_Contas": 10,
        "danode--Laminas_Retalhadoras": 10,
        "danode--Castigo_de_Loki": 10,
        "crit": 20,
        "esquiva": 20,
        "danofisicop": 10,
        "danomagicop": 10
      }
    }
  },
  {
    itemId:     "19048",
    itemNome:   "Traje de Luta Jogos Vorags [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  80,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Tempestade_de_Flechas","REQ_Temporal_de_Mil_Flechas"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 2 + (getItemRefino(slot) >= 8 ? 2 : 0) + (getItemRefino(slot) >= 9 ? 3 : 0) + ((hasCombo(slot, itemId, tipoItem, [["1730"],["1752"]]) || hasCombo(slot, itemId, tipoItem, [["1731"],["1754"]]) || hasCombo(slot, itemId, tipoItem, [["1732"],["1756"]]) || hasCombo(slot, itemId, tipoItem, [["1733"],["1755"]])) ? 20 : 0),
        "aspdf": ((hasCombo(slot, itemId, tipoItem, [["1730"],["1752"]]) || hasCombo(slot, itemId, tipoItem, [["1731"],["1754"]]) || hasCombo(slot, itemId, tipoItem, [["1732"],["1756"]]) || hasCombo(slot, itemId, tipoItem, [["1733"],["1755"]])) ? (getItemRefino("itemMaoDireita") >= 10 ? 1 : 0) : 0)
      }
    }
  },
  {
    itemId:     "450258",
    itemNome:   "Tremor Sonoro [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT"],
    itemBonus: ["REQ_DMagico","REQ_Ruido_Estridente"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10,
        "spp": 10,
        "danode--Ruido_Estridente": (getItemRefino(slot) >= 9 ? 50 : 0) + (getItemRefino(slot) >= 13 ? 50 : 0),
        "danomagiconeutro": (getItemRefino(slot) >= 11 ? 15 : 0),
        "danomagicoraca": isClasse(["Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT"]) ? 20 : 0,
        "atqm": isClasse(["Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT"]) ? 150 : 0,
        "atributointeligencia": isClasse(["Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT"]) ? 30 : 0,
        "posconjuracao": isClasse(["Classe_TR","Classe_TR_NT","Classe_MU","Classe_MU_NT"]) ? 10 : 0
      }
    }
  },
  {
    itemId:     "450214a",
    itemNome:   "Tríade Sombria [1] - com dano físico",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10,
        "spp": 10,
        "precisaoperfeita": (getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0),
        "danofisicoraca": isClasse(["Classe_SC","Classe_SC_NT"]) ? 20 : 0,
        "atq": isClasse(["Classe_SC","Classe_SC_NT"]) ? 150 : 0,
        "atributoagilidade": isClasse(["Classe_SC","Classe_SC_NT"]) ? 30 : 0,
        "atributodestreza": (getItemRefino(slot) >= 10 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "450214b",
    itemNome:   "Tríade Sombria [1] - sem dano físico",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10,
        "spp": 10,
        "precisaoperfeita": (getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0),
        "atq": isClasse(["Classe_SC","Classe_SC_NT"]) ? 150 : 0,
        "atributoagilidade": isClasse(["Classe_SC","Classe_SC_NT"]) ? 30 : 0,
        "atributodestreza": (getItemRefino(slot) >= 10 ? 30 : 0)
      }
    }
  },
  {
    itemId:     "2295",
    itemNome:   "Venda",
    itemTipo:   "itemMeio",
    itemNivel:  10,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    itemId:     "450287",
    itemNome:   "Vestes de Bispo [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  100,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 5,
        "danofisicop": parseInt(getItemRefino(slot) / 3) * 10,
        "danomagicop": parseInt(getItemRefino(slot) / 3) * 10
      }
    }
  },
  {
    itemId:     "450288",
    itemNome:   "Vestes de Diácono [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  1,
    itemClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 5,
        "danofisicop": parseInt(getItemRefino(slot) / 3) * 5,
        "danomagicop": parseInt(getItemRefino(slot) / 3) * 5
      }
    }
  },
  {
    itemId:     "15254",
    itemNome:   "Vestido Abissal [1]",
    itemTipo:   "itemArmadura",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 1,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["3","7"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 15 : 0)) : 0,
        "danomagicoraca": isOpponent("racaMonstro",["3","7"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 15 : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["60","61","62","63","70","71","72","73"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 15 : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro",["60","61","62","63","70","71","72","73"]) ? ((getItemRefino(slot) >= 7 ? 10 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0) + (getItemRefino(slot) >= 11 ? 15 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "15420",
    itemNome:   "Vestido Glacial",
    itemTipo:   "itemArmadura",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["0","5","10","11"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danomagicoraca": isOpponent("racaMonstro",["0","5","10","11"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["10","11","12","13","40","41","42","43"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro",["10","11","12","13","40","41","42","43"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "450143",
    itemNome:   "Vestido Infernal",
    itemTipo:   "itemArmadura",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["2","9"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danomagicoraca": isOpponent("racaMonstro",["2","9"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["50","51","52","53","80","81","82","83"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro",["50","51","52","53","80","81","82","83"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "15352",
    itemNome:   "Vestido Natural",
    itemTipo:   "itemArmadura",
    itemNivel:  90,
    itemClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    slots: 0,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["2","5","10"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danomagicoraca": isOpponent("racaMonstro",["2","5","10"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["20","21","22","23","30","31","32","33"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
        "danomagicopropriedade": isOpponent("propriedadeMonstro",["20","21","22","23","30","31","32","33"]) ? ((getItemRefino(slot) >= 5 ? 10 : 0) + (getItemRefino(slot) >= 7 ? 15 : 0) + (getItemRefino(slot) >= 9 ? 15 : 0)) : 0,
      }
    }
  },
  {
    itemId:     "500003",
    itemNome:   "Vingadora Ancestral [2]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Espada1",
    itemArmaATQ: 130,
    itemArmaATQM: 170,
    itemArmaNivel: 4,
    itemNivel:  100,
    itemPropriedade: false,
    itemClasses: ["Classe_RG","Classe_RG_NT"],
    itemBonus: ["REQ_DFisico"],
    bonusaleatorios: [
      ["danofisicopropriedade_3-20","atq_5-30","aspdp_3-10","danodistancia_3-10","aspdf_1-1"],
      ["danofisicoraca_3-20","danocritico_3-10","danofisicochefe_1-10","atqarmap_1-5"]
    ],
    slots: 2,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getItemRefino(slot) / 2) * 10,
        "danode--Luz_da_Criacao": parseInt(getItemRefino(slot) / 3) * 5,
        "conjuracaovariavel": getItemRefino(slot) >= 9 ? (-10) : 0,
        "danomagicosagrado": getItemRefino(slot) >= 11 ? 15 : 0,
      }
    }
  },
  {
    itemId:     "1925",
    itemNome:   "Violoncelo [3]",
    itemTipo:   "itemArma",
    itemSubtipo: "Arma_Instrumento",
    itemArmaATQ: 110,
    itemArmaNivel: 3,
    itemNivel:  70,
    itemPropriedade: 0,
    itemClasses: ["Classe_TR","Classe_TR_NT"],
    itemBonus: ["REQ_DFisico"],
    slots: 3,
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2,
        "atributodestreza": 3
      }
    }
  },
];
