var cartas = [
  {
    cartaID:     "4359",
    cartaNome:   "Carta Algoz Eremes",
    cartaSlot:   "itemCapa",
    cartaClasses: ["Classe_SC","Classe_SC_NT","Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4694",
    cartaNome:   "Carta Alma de Gertie",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Copia_Explosiva"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Copia_Explosiva": 20 + (getItemRefino(slot) >= 10 ? 20 : 0) + (getNivelArma(slot) == 4 ? 20 : 0)
      }
    }
  },
  {
    cartaID:     "4690",
    cartaNome:   "Carta Alma de Randel",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aegis_Inferi"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Aegis_Inferi": 20 + (getItemRefino(slot) >= 10 ? 20 : 0) + (getNivelArma(slot) == 4 ? 20 : 0)
      }
    }
  },
  {
    cartaID:     "4695",
    cartaNome:   "Carta Alma de Trentini",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Temporal_de_Mil_Flechas"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danode--Temporal_de_Mil_Flechas": 20 + (getItemRefino(slot) >= 10 ? 20 : 0) + (getNivelArma(slot) == 4 ? 20 : 0)
      }
    }
  },
  {
    cartaID:     "4601",
    cartaNome:   "Carta Amdarais",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 15,
        "danomagicop": 15
      }
    }
  },
  {
    cartaID:     "4635",
    cartaNome:   "Carta Amdarais Imortal",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico","REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquiva": getItemRefino(slot) * (-2),
        "hpf": getNivelBase() >= 100 ? 500 : 0
      }
    }
  },
  {
    cartaID:     "4602",
    cartaNome:   "Carta Amdarais Sombrio",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 20,
        "danomagicop": 20
      }
    }
  },
  {
    cartaID:     "4236",
    cartaNome:   "Carta Amon-Ra",
    cartaSlot:   "itemSapatos",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR","REQ_CVar","REQ_Pos","REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
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
    cartaID:     "4062",
    cartaNome:   "Carta Anaconda",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["80","81","82","83"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "27361",
    cartaNome:   "Carta Andarilho Poluto",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicotamanho": isOpponent("tamanhoMonstro",["1","2"]) ? 30 : 0
      }
    }
  },
  {
    cartaID:     "4596",
    cartaNome:   "Carta Antigo Livro Danificado",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": parseInt(getAtributoBase("int") / 10) * 5
      }
    }
  },
  {
    cartaID:     "4514",
    cartaNome:   "Carta Aranha Pom",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["7"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "27086",
    cartaNome:   "Carta Arqueiro Cruel",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": (getItemRefino(slot) >= 10 && isTipoArma(slot, ["Arma_Arco"])) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4633",
    cartaNome:   "Carta Arqueiro Imortal",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 10 + (getNivelBase() >= 100 ? 2 : 0)
      }
    }
  },
  {
    cartaID:     "27296",
    cartaNome:   "Carta Arqueiro Wootan",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": parseInt(getAtributoBase("des") / 10),
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? parseInt(getAtributoBase("des") / 10) : 0,
        "atq": getAtributoBase("des") >= 120 ? 40 : 0,
      }
    }
  },
  {
    cartaID:     "4464",
    cartaNome:   "Carta Aunoe",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 20
      }
    }
  },
  {
    cartaID:     "4145",
    cartaNome:   "Carta Belzebu",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": -30
      }
    }
  },
  {
    cartaID:     "4486",
    cartaNome:   "Carta Belzebu Selada",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": -15
      }
    }
  },
  {
    cartaID:     "4636",
    cartaNome:   "Carta Bijou",
    cartaSlot:   "itemEscudo",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 10,
        "danomagicop": 10,
      }
    }
  },
  {
    cartaID:     "27126",
    cartaNome:   "Carta Boitatá",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["2","11"]) ? 40 : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["20","21","22","23","30","31","32","33"]) ? 40 : 0
      }
    }
  },
  {
    cartaID:     "4519",
    cartaNome:   "Carta Butoijo",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["1"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4426",
    cartaNome:   "Carta Byorgue",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": isClasse(["Classe_SC","Classe_ST","Classe_RO","Classe_ST"]) ? 10 : 0,
        "danomagicop": isClasse(["Classe_SC","Classe_ST","Classe_RO","Classe_ST"]) ? 10 : 0
      }
    }
  },
  {
    cartaID:     "4063",
    cartaNome:   "Carta Caramelo",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["6"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4609",
    cartaNome:   "Carta Cavaleira Khalitzburg",
    cartaSlot:   "itemEscudo",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4608",
    cartaNome:   "Carta Cavaleiro Branco",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 15,
        "danofisicotamanho": isOpponent("tamanhoMonstro",["1","2"]) ? (20 + (hasCombo(slot, itemId, tipoItem, [["4609"]]) ? 15 : 0)) : 0
      }
    }
  },
  {
    cartaID:     "4140",
    cartaNome:   "Carta Cavaleiro do Abismo",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicochefe": 25
      }
    }
  },
  {
    cartaID:     "4526",
    cartaNome:   "Carta Celacanto Cruel",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP","REQ_DEFM"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spp": 5
      }
    }
  },
  {
    cartaID:     "4528",
    cartaNome:   "Carta Celacanto Mutante",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 2 + (parseInt(getItemRefino(slot) / 2)),
        "hpp": (parseInt(getItemRefino(slot) / 2) * (-1))
      }
    }
  },
  {
    cartaID:     "4527",
    cartaNome:   "Carta Celacanto Sombrio",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_DEF"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10
      }
    }
  },
  {
    cartaID:     "4529",
    cartaNome:   "Carta Celacanto Violento",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 2 + (parseInt(getItemRefino(slot) / 2)),
        "spp": (parseInt(getItemRefino(slot) / 2) * (-1))
      }
    }
  },
  {
    cartaID:     "4595",
    cartaNome:   "Carta Cenere",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": parseInt(getAtributoBase("agi") / 10) * 2
      }
    }
  },
  {
    cartaID:     "31017",
    cartaNome:   "Carta Cookie Aterrorizante",
    cartaSlot:   "itemSapatos",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": -2 + (parseInt(getItemRefino(slot) / 2) * (-1)),
        "danomagicop": 1 + parseInt(getItemRefino(slot) / 2),
        "atqarmap": 1 + parseInt(getItemRefino(slot) / 2)
      }
    }
  },
  {
    cartaID:     "4564",
    cartaNome:   "Carta Desordeira Gertie",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["Classe_SC","Classe_SC_NT","Classe_GX","Classe_GX_NT"],
    itemBonus: ["REQ_DMagico","REQ_Precisao"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 20 + (getAtributoBase("sor") >= 110 ? 20 : 0)
      }
    }
  },
  {
    cartaID:     "4506",
    cartaNome:   "Carta Dolomedes",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2 + (isClasse("Classe_SE","Classe_SN","Classe_HU","Classe_TR","Classe_BA","Classe_MI","Classe_MU","Classe_GY","Classe_DA","Classe_AR")) ? (parseInt(getItemRefino(slot) / 3)) : 0
      }
    }
  },
  {
    cartaID:     "4142",
    cartaNome:   "Carta Doppelganger",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10
      }
    }
  },
  {
    cartaID:     "4069",
    cartaNome:   "Carta Drainliar",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["40","41","42","43"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4137",
    cartaNome:   "Carta Drake",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      temDrake = true;
      return {

      }
    }
  },
  {
    cartaID:     "4421",
    cartaNome:   "Carta Drosera",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCritD"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "critd": 15
      }
    }
  },
  {
    cartaID:     "4458",
    cartaNome:   "Carta Duneyrr",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 10
      }
    }
  },
  {
    cartaID:     "4583",
    cartaNome:   "Carta Engkanto",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "ignoredef": isOpponent("racaMonstro",["9"]) ? 30 : 0,
        "danofisicop": isOpponent("propriedadeMonstro",["80","81","82","83"]) ? 30 : 0,
      }
    }
  },
  {
    cartaID:     "4068",
    cartaNome:   "Carta Escorpião",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["9"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4352",
    cartaNome:   "Carta Espadachim Egnigem",
    cartaSlot:   "itemSapatos",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_HP","REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10,
        "spp": 10
      }
    }
  },
  {
    cartaID:     "4094",
    cartaNome:   "Carta Esqueleto Arqueiro",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 10
      }
    }
  },
  {
    cartaID:     "4092",
    cartaNome:   "Carta Esqueleto Operário",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5,
        "danofisicoraca": isOpponent("tamanhoMonstro", ["1"]) ? 15 : 0
      }
    }
  },
  {
    cartaID:     "4086",
    cartaNome:   "Carta Esqueleto Soldado",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 9
      }
    }
  },
  {
    cartaID:     "4250",
    cartaNome:   "Carta Executor",
    cartaSlot:   "itemEscudo",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4556",
    cartaNome:   "Carta Fenrir",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 50 + (getItemRefino(slot) * 5),
        "conjuracaofixap": -70
      }
    }
  },
  {
    cartaID:     "4080",
    cartaNome:   "Carta Flora",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["8"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "27018",
    cartaNome:   "Carta GC109",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 1 + (getNivelBase() >= 90 ? 1 : 0) + (getNivelBase() >= 120 ? 1 : 0)
      }
    }
  },
  {
    cartaID:     "4305",
    cartaNome:   "Carta General Tartaruga",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 20
      }
    }
  },
  {
    cartaID:     "4060",
    cartaNome:   "Carta Goblin",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["2","11"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4072",
    cartaNome:   "Carta Golem",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5
      }
    }
  },
  {
    cartaID:     "4682",
    cartaNome:   "Carta Guardião Real Randel",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isClasse(["Classe_RG","Classe_RG_NT"]) ? 10 : 0,
        "atributoforca": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributoagilidade": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributovitalidade": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributointeligencia": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributodestreza": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributosorte": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0)
      }
    }
  },
  {
    cartaID:     "4430",
    cartaNome:   "Carta Ifrit",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getNivelClasse() / 10),
        "crit": parseInt(getNivelClasse() / 10),
        "precisao": parseInt(getNivelClasse() / 10)
      }
    }
  },
  {
    cartaID:     "27396",
    cartaNome:   "Carta Isaac",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -5
      }
    }
  },
  {
    cartaID:     "4324",
    cartaNome:   "Carta Hatii",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    cartaID:     "300310",
    cartaNome:   "Carta Helmut",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCorp","REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": hasCombo(slot, itemId, tipoItem, [["27333"]]) ? 3 : 0,
        "danodistancia": parseInt(getItemRefino(slot) / 3) * 4,
        "danomelee": parseInt(getItemRefino(slot) / 3) * 4
      }
    }
  },
  {
    cartaID:     "4035",
    cartaNome:   "Carta Hidra",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["5","10"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4065",
    cartaNome:   "Carta Kaho",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["30","31","32","33"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4480",
    cartaNome:   "Carta Kiel Selada",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": (-15) + (getItemRefino(slot) >= 15 ? (-15) : 0)
      }
    }
  },
  {
    cartaID:     "4403",
    cartaNome:   "Carta Kiel-D-01",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -30
      }
    }
  },
  {
    cartaID:     "4091",
    cartaNome:   "Carta Kobold",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "crit": 4
      }
    }
  },
  {
    cartaID:     "4419",
    cartaNome:   "Carta Ktullanux",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? 50 : 0
      }
    }
  },
  {
    cartaID:     "4481",
    cartaNome:   "Carta Ktullanux Selada",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicopropriedade": isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? (25 + (getItemRefino(slot) >= 15 ? 10 : 0)) : 0
      }
    }
  },
  {
    cartaID:     "4082",
    cartaNome:   "Carta Lobo do Deserto",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5,
        "danofisicoraca": isOpponent("tamanhoMonstro", ["0"]) ? 15 : 0
      }
    }
  },
  {
    cartaID:     "4357",
    cartaNome:   "Carta Lorde Seyren",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": -50
      }
    }
  },
  {
    cartaID:     "4513",
    cartaNome:   "Carta Louva-a-deus Angra",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 2 + (isClasse(["Classe_SC","Classe_RO","Classe_ST","Classe_GX","Classe_SX","Classe_AS","Classe_GA"]) ? (parseInt(getItemRefino(slot) / 2)) : 0)
      }
    }
  },
  {
    cartaID:     "4030",
    cartaNome:   "Carta Mandrágora",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["20","21","22","23"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4202",
    cartaNome:   "Carta Mao Guai",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["90","91","92","93"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "31021",
    cartaNome:   "Carta Marionete Demoníaca",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "atqarmap": -3
      }
    }
  },
  {
    cartaID:     "4399",
    cartaNome:   "Carta Memória de Thanatos",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_IgnDef"],
    itemFuncao: function(slot, itemId, tipoItem) {
      temInvestigar = true;
      return {
        "esquiva": -30
      }
    }
  },
  {
    cartaID:     "4593",
    cartaNome:   "Carta Menblatt",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": parseInt(getAtributoBase("des") / 10)
      }
    }
  },
  {
    cartaID:     "4466",
    cartaNome:   "Carta Mestre Beholder",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 3,
        "aspdf": isTipoArma(slot, ["Arma_Arco"]) ? ((getItemRefino(slot) >= 10 ? 1 : 0) + (getItemRefino(slot) >= 14 ? 1 : 0)) : 0
      }
    }
  },
  {
    cartaID:     "300308",
    cartaNome:   "Carta Meyer",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": hasCombo(slot, itemId, tipoItem, [["27331"]]) ? 3 : 0,
        "danomagiconeutro": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicofogo": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicovento": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicoterra": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicoagua": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicosagrado": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicosombrio": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicoveneno": parseInt(getItemRefino(slot) / 3) * 4,
        "danomagicofantasma": parseInt(getItemRefino(slot) / 3) * 4
      }
    }
  },
  {
    cartaID:     "4126",
    cartaNome:   "Carta Minorous",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 5,
        "danofisicoraca": isOpponent("tamanhoMonstro", ["2"]) ? 15 : 0
      }
    }
  },
  {
    cartaID:     "27103",
    cartaNome:   "Carta Mortos-Vivos",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 20,
        "atqarmap": hasCombo(slot, itemId, tipoItem, [["28510"]]) ? (parseInt(getItemRefino(slot) / 3)) : 0
      }
    }
  },
  {
    cartaID:     "4207",
    cartaNome:   "Carta Mysteltainn",
    cartaSlot:   "itemEscudo",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4256",
    cartaNome:   "Carta Orc Arqueiro",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    cartaID:     "4085",
    cartaNome:   "Carta Orc Esqueleto",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["50","51","52","53"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4143",
    cartaNome:   "Carta Orc Herói",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT","REQ_DFisico","REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 3
      }
    }
  },
  {
    cartaID:     "4007",
    cartaNome:   "Carta Ovo de PecoPeco",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["0"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4172",
    cartaNome:   "Carta Papel",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 20,
        "atributoagilidade": hasCombo(slot, itemId, tipoItem, [["4210"],["4230"],["4257"],["4272"]]) ? 5 : 0,
        "atributoforca": hasCombo(slot, itemId, tipoItem, [["4210"],["4230"],["4257"],["4272"]]) ? 5 : 0,
        "aspdp": hasCombo(slot, itemId, tipoItem, [["4210"],["4230"],["4257"],["4272"]]) ? 5 : 0
      }
    }
  },
  {
    cartaID:     "4408",
    cartaNome:   "Carta Pesar Noturno",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro",["1","3"]) ? 40 : 0,
        "danofisicopropriedade": isOpponent("propriedadeMonstro",["50","51","52","53","60","61","62","63"]) ? 40 : 0
      }
    }
  },
  {
    cartaID:     "4594",
    cartaNome:   "Carta Petal",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": parseInt(getAtributoBase("des") / 10) * 2
      }
    }
  },
  {
    cartaID:     "4118",
    cartaNome:   "Carta Petite",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["4"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4468",
    cartaNome:   "Carta Pinguicula Sombria",
    cartaSlot:   "itemCabeca",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 10
      }
    }
  },
  {
    cartaID:     "4337",
    cartaNome:   "Carta Porcellio",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 25
      }
    }
  },
  {
    cartaID:     "4005",
    cartaNome:   "Carta Poring Noel",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["60","61","62","63"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4578",
    cartaNome:   "Carta Pyuriel Furiosa",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 30
      }
    }
  },
  {
    cartaID:     "27164",
    cartaNome:   "Carta Rainha Verme",
    cartaSlot:   "itemSapatos",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 15 + getItemRefino(slot),
        "danocritico": getItemRefino(slot),
        "hpp": -10
      }
    }
  },
  {
    cartaID:     "4682",
    cartaNome:   "Carta Renegada Gertie",
    cartaSlot:   "itemCapa",
    cartaClasses: ["Classe_SC","Classe_SC_NT"],
    itemBonus: ["REQ_DFisico","REQ_FOR","REQ_AGI","REQ_VIT","REQ_INT","REQ_DES","REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": isClasse(["Classe_SC"]) ? 15 : 0,
        "danofisicoraca": isClasse(["Classe_SC"]) ? 5 : 0,
        "atributoforca": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributoagilidade": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributovitalidade": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributointeligencia": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributodestreza": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0),
        "atributosorte": (getNivelBase() >= 175 ? 10 : 0) + (getItemRefino(slot) >= 10 ? 10 : 0)
      }
    }
  },
  {
    cartaID:     "4505",
    cartaNome:   "Carta Scaraba",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 20,
        "hpp": -1
      }
    }
  },
  {
    cartaID:     "4508",
    cartaNome:   "Carta Scaraba Dourado",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 20,
        "spp": -1
      }
    }
  },
  {
    cartaID:     "4135",
    cartaNome:   "Carta Senhor dos Orcs",
    cartaSlot:   "itemArmadura",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {

      }
    }
  },
  {
    cartaID:     "4521",
    cartaNome:   "Carta Sedora",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 15
      }
    }
  },
  {
    cartaID:     "4255",
    cartaNome:   "Carta Senhora Orc",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoalvo": isOpponent("idMonstro",["1023","1273","1213","1153","1189","1152"]) ? 30 : 0
      }
    }
  },
  {
    cartaID:     "27333",
    cartaNome:   "Carta Skia",
    cartaSlot:   "itemAcessorioE",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 5,
        "atqarmap": hasCombo(slot, itemId, tipoItem, [["27197"]]) ? 5 : 0
      }
    }
  },
  {
    cartaID:     "27184",
    cartaNome:   "Carta Skurai",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 20,
        "danofisicoraca": isOpponent("racaMonstro", ["3","7"]) ? 30 : 0
      }
    }
  },
  {
    cartaID:     "4634",
    cartaNome:   "Carta Soldado Imortal",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 9 + (getNivelBase() >= 100 ? 1 : 0),
        "danocritico": (getNivelBase() >= 100 ? 5 : 0)
      }
    }
  },
  {
    cartaID:     "4117",
    cartaNome:   "Carta Sorrateiro",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_ATQDuplo"],
    itemFuncao: function(slot, itemId, tipoItem) {
      itemHabilitaAtaqueDuplo = true;
      return {
      }
    }
  },
  {
    cartaID:     "4263",
    cartaNome:   "Carta Samurai Encarnado",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_IgnDef"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "ignoredef": !isOpponentChefe() ? 100 : 0
      }
    }
  },
  {
    cartaID:     "4111",
    cartaNome:   "Carta Strouf",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("racaMonstro", ["3"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4639",
    cartaNome:   "Carta Tappy",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 1
      }
    }
  },
  {
    cartaID:     "4254",
    cartaNome:   "Carta Tirfing",
    cartaSlot:   "itemEscudo",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4049",
    cartaNome:   "Carta Vadon",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicoraca": isOpponent("propriedadeMonstro", ["10","11","12","13"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "4407",
    cartaNome:   "Carta Valquíria Randgris",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 10
      }
    }
  },
  {
    cartaID:     "27163",
    cartaNome:   "Carta Verme com Rosto",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": (-1) + (hasCombo(slot, itemId, tipoItem, [["27165"]]) ? 2 : 0),
        "atributodestreza": (-1) + (hasCombo(slot, itemId, tipoItem, [["27165"]]) ? 2 : 0),
        "aspdp": 3
      }
    }
  },
  {
    cartaID:     "27165",
    cartaNome:   "Carta Verme Sombrio com Rosto",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": (-1) + (hasCombo(slot, itemId, tipoItem, [["27163"]]) ? 2 : 0),
        "atributointeligencia": (-1) + (hasCombo(slot, itemId, tipoItem, [["27163"]]) ? 2 : 0),
        "posconjuracao": (-3) + (hasCombo(slot, itemId, tipoItem, [["27163"]]) ? (-3) : 0)
      }
    }
  },
  {
    cartaID:     "4631",
    cartaNome:   "Carta Visconde Coruja",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 3
      }
    }
  },
  {
    cartaID:     "4588",
    cartaNome:   "Carta Wakwak",
    cartaSlot:   "itemCapa",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": parseInt(getAtributoBase("for") / 10) * 5
      }
    }
  },
  {
    cartaID:     "4317",
    cartaNome:   "Carta Yakuza",
    cartaSlot:   "itemArma",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 15,
        "crit": isClasse(["Classe_SC","Classe_RO","Classe_ST","Classe_GX","Classe_SX","Classe_AS","Classe_GA"]) ? 4 : 0
      }
    }
  },
  {
    cartaID:     "4064",
    cartaNome:   "Carta Zerom",
    cartaSlot:   "itemAcessorio",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES","REQ_CVar","REQ_Precisao"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 3
      }
    }
  },
  {
    cartaID:     "4914",
    cartaNome:   "Essência de Morroc AGI1",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 1,
        "atributovitalidade": -1,
        "esquiva": 2
      }
    }
  },
  {
    cartaID:     "4915",
    cartaNome:   "Essência de Morroc AGI2",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2,
        "atributovitalidade": -2,
        "esquiva": 4
      }
    }
  },
  {
    cartaID:     "4916",
    cartaNome:   "Essência de Morroc AGI3",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 4,
        "atributovitalidade": -4,
        "esquiva": 8
      }
    }
  },
  {
    cartaID:     "4920",
    cartaNome:   "Essência de Morroc DES1",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 1,
        "atributosorte": -1,
        "precisao": 2
      }
    }
  },
  {
    cartaID:     "4921",
    cartaNome:   "Essência de Morroc DES2",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2,
        "atributosorte": -2,
        "precisao": 4
      }
    }
  },
  {
    cartaID:     "4922",
    cartaNome:   "Essência de Morroc DES3",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 4,
        "atributosorte": -4,
        "precisao": 8
      }
    }
  },
  {
    cartaID:     "4908",
    cartaNome:   "Essência de Morroc FOR1",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1,
        "atributointeligencia": -1,
        "atq": 3
      }
    }
  },
  {
    cartaID:     "4909",
    cartaNome:   "Essência de Morroc FOR2",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2,
        "atributointeligencia": -2,
        "atq": 6
      }
    }
  },
  {
    cartaID:     "4910",
    cartaNome:   "Essência de Morroc FOR3",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 4,
        "atributointeligencia": -4,
        "atq": 12
      }
    }
  },
  {
    cartaID:     "4911",
    cartaNome:   "Essência de Morroc INT1",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 1,
        "atributoforca": -1,
        "atqm": 3
      }
    }
  },
  {
    cartaID:     "4912",
    cartaNome:   "Essência de Morroc INT2",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2,
        "atributoforca": -2,
        "atqm": 6
      }
    }
  },
  {
    cartaID:     "4913",
    cartaNome:   "Essência de Morroc INT3",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 4,
        "atributoforca": -4,
        "atqm": 12
      }
    }
  },
  {
    cartaID:     "4923",
    cartaNome:   "Essência de Morroc SOR1",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 1,
        "atributodestreza": -1,
        "crit": 1
      }
    }
  },
  {
    cartaID:     "4924",
    cartaNome:   "Essência de Morroc SOR2",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 2,
        "atributodestreza": -2,
        "crit": 2
      }
    }
  },
  {
    cartaID:     "4925",
    cartaNome:   "Essência de Morroc SOR3",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 4,
        "atributodestreza": -4,
        "crit": 4
      }
    }
  },
  {
    cartaID:     "4917",
    cartaNome:   "Essência de Morroc VIT1",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 1,
        "atributoagilidade": -1
      }
    }
  },
  {
    cartaID:     "4918",
    cartaNome:   "Essência de Morroc VIT2",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 2,
        "atributoagilidade": -2
      }
    }
  },
  {
    cartaID:     "4919",
    cartaNome:   "Essência de Morroc VIT3",
    cartaSlot:   "essencia",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP","REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 4,
        "atributoagilidade": -4
      }
    }
  },
  {
    cartaID:     "4854",
    cartaNome:   "Super Agilidade",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI","REQ_Aspd","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 1 + (getItemRefino(slot) >= 8 ? 3 : 0),
        "danofisicop": (getItemRefino(slot) >= 9 ? 1 : 0),
        "aspdf": (getItemRefino(slot) >= 12 ? 1 : 0),
        "conjuracaofixap": (getItemRefino(slot) >= 12 ? -7 : 0)
      }
    }
  },
  {
    cartaID:     "4857",
    cartaNome:   "Super Destreza",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES","REQ_Aspd","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 1 + (getItemRefino(slot) >= 8 ? 3 : 0),
        "danomagicop": (getItemRefino(slot) >= 9 ? 1 : 0),
        "aspdf": (getItemRefino(slot) >= 12 ? 1 : 0),
        "conjuracaofixap": (getItemRefino(slot) >= 12 ? -7 : 0)
      }
    }
  },
  {
    cartaID:     "4853",
    cartaNome:   "Super Força",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR","REQ_Aspd","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1 + (getItemRefino(slot) >= 8 ? 3 : 0),
        "danofisicop": (getItemRefino(slot) >= 9 ? 1 : 0),
        "aspdf": (getItemRefino(slot) >= 12 ? 1 : 0),
        "conjuracaofixap": (getItemRefino(slot) >= 12 ? -7 : 0)
      }
    }
  },
  {
    cartaID:     "4856",
    cartaNome:   "Super Inteligência",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT","REQ_Aspd","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 1 + (getItemRefino(slot) >= 8 ? 3 : 0),
        "danomagicop": (getItemRefino(slot) >= 9 ? 1 : 0),
        "aspdf": (getItemRefino(slot) >= 12 ? 1 : 0),
        "conjuracaofixap": (getItemRefino(slot) >= 12 ? -7 : 0)
      }
    }
  },
  {
    cartaID:     "4858",
    cartaNome:   "Super Sorte",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI","REQ_Aspd","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 1 + (getItemRefino(slot) >= 8 ? 3 : 0),
        "hpp": (getItemRefino(slot) >= 9 ? 1 : 0),
        "aspdf": (getItemRefino(slot) >= 12 ? 1 : 0),
        "conjuracaofixap": (getItemRefino(slot) >= 12 ? -7 : 0)
      }
    }
  },
  {
    cartaID:     "4855",
    cartaNome:   "Super Vitalidade",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT","REQ_Aspd","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 1 + (getItemRefino(slot) >= 8 ? 3 : 0),
        "spp": (getItemRefino(slot) >= 9 ? 1 : 0),
        "aspdf": (getItemRefino(slot) >= 12 ? 1 : 0),
        "conjuracaofixap": (getItemRefino(slot) >= 12 ? -7 : 0)
      }
    }
  },
  {
    cartaID:     "4832",
    cartaNome:   "Mira Apurada 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 2
      }
    }
  },
  {
    cartaID:     "4833",
    cartaNome:   "Mira Apurada 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 4
      }
    }
  },
  {
    cartaID:     "4834",
    cartaNome:   "Mira Apurada 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 6
      }
    }
  },
  {
    cartaID:     "4835",
    cartaNome:   "Mira Apurada 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 8
      }
    }
  },
  {
    cartaID:     "4836",
    cartaNome:   "Mira Apurada 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 10
      }
    }
  },
  {
    cartaID:     "4837",
    cartaNome:   "Mira Apurada 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 12
      }
    }
  },
  {
    cartaID:     "4838",
    cartaNome:   "Mira Apurada 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 14
      }
    }
  },
  {
    cartaID:     "4839",
    cartaNome:   "Mira Apurada 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 16
      }
    }
  },
  {
    cartaID:     "4840",
    cartaNome:   "Mira Apurada 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 18
      }
    }
  },
  {
    cartaID:     "4841",
    cartaNome:   "Mira Apurada 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 20,
        "aspdf": 1
      }
    }
  },
  {
    cartaID:     "4811",
    cartaNome:   "Espírito do Lutador 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 6,
        "precisao": 2
      }
    }
  },
  {
    cartaID:     "4810",
    cartaNome:   "Espírito do Lutador 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 9,
        "precisao": 3
      }
    }
  },
  {
    cartaID:     "4809",
    cartaNome:   "Espírito do Lutador 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 12,
        "precisao": 4
      }
    }
  },
  {
    cartaID:     "4808",
    cartaNome:   "Espírito do Lutador 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 15,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4820",
    cartaNome:   "Espírito do Lutador 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 18,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4821",
    cartaNome:   "Espírito do Lutador 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 21,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4822",
    cartaNome:   "Espírito do Lutador 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 24,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4823",
    cartaNome:   "Espírito do Lutador 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 27,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4824",
    cartaNome:   "Espírito do Lutador 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 30,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4825",
    cartaNome:   "Espírito do Lutador 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 50,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4869",
    cartaNome:   "Anti-Atraso 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 4
      }
    }
  },
  {
    cartaID:     "4872",
    cartaNome:   "Anti-Atraso 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 6
      }
    }
  },
  {
    cartaID:     "4873",
    cartaNome:   "Anti-Atraso 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 8
      }
    }
  },
  {
    cartaID:     "4881",
    cartaNome:   "Anti-Atraso 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10
      }
    }
  },
  {
    cartaID:     "4815",
    cartaNome:   "Pedra de Encantamento 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 6,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    cartaID:     "4814",
    cartaNome:   "Pedra de Encantamento 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 9,
        "conjuracaovariavel": -6
      }
    }
  },
  {
    cartaID:     "4813",
    cartaNome:   "Pedra de Encantamento 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 12,
        "conjuracaovariavel": -8
      }
    }
  },
  {
    cartaID:     "4812",
    cartaNome:   "Pedra de Encantamento 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 15,
        "conjuracaovariavel": -10
      }
    }
  },
  {
    cartaID:     "4826",
    cartaNome:   "Pedra de Encantamento 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 18,
        "conjuracaovariavel": -10
      }
    }
  },
  {
    cartaID:     "4827",
    cartaNome:   "Pedra de Encantamento 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 21,
        "conjuracaovariavel": -10
      }
    }
  },
  {
    cartaID:     "4828",
    cartaNome:   "Pedra de Encantamento 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 24,
        "conjuracaovariavel": -10
      }
    }
  },
  {
    cartaID:     "4829",
    cartaNome:   "Pedra de Encantamento 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 27,
        "conjuracaovariavel": -10
      }
    }
  },
  {
    cartaID:     "4830",
    cartaNome:   "Pedra de Encantamento 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 9,
        "conjuracaovariavel": -6
      }
    }
  },
  {
    cartaID:     "4831",
    cartaNome:   "Pedra de Encantamento 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 50,
        "conjuracaovariavel": -20
      }
    }
  },
  {
    cartaID:     "29135",
    cartaNome:   "Faro Aguçado 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 3,
        "danocritico": 1
      }
    }
  },
  {
    cartaID:     "29136",
    cartaNome:   "Faro Aguçado 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 6,
        "danocritico": 2
      }
    }
  },
  {
    cartaID:     "29137",
    cartaNome:   "Faro Aguçado 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 9,
        "danocritico": 3
      }
    }
  },
  {
    cartaID:     "29138",
    cartaNome:   "Faro Aguçado 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 12,
        "danocritico": 4
      }
    }
  },
  {
    cartaID:     "29139",
    cartaNome:   "Faro Aguçado 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 15,
        "danocritico": 5
      }
    }
  },
  {
    cartaID:     "4807",
    cartaNome:   "Vel. Ataque 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": 1
      }
    }
  },
  {
    cartaID:     "4805",
    cartaNome:   "Arcebispo 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 3
      }
    }
  },
  {
    cartaID:     "4850",
    cartaNome:   "Arcebispo 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 6
      }
    }
  },
  {
    cartaID:     "4803",
    cartaNome:   "Cura 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4804",
    cartaNome:   "Catolicismo 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4897",
    cartaNome:   "ATQM +3%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 3
      }
    }
  },
  {
    cartaID:     "29047",
    cartaNome:   "Mortal 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 3
      }
    }
  },
  {
    cartaID:     "29359",
    cartaNome:   "Mortal 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 3 + (hasCombo(slot, itemId, tipoItem, [["29360"],["29361"]]) ? 6 : 0)
      }
    }
  },
  {
    cartaID:     "29360",
    cartaNome:   "Mortal 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 3
      }
    }
  },
  {
    cartaID:     "29361",
    cartaNome:   "Mortal 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danocritico": 20,
        "crit": (hasCombo(slot, itemId, tipoItem, [["29047"],["29359"],["29360"]]) ? 10 : 0)
      }
    }
  },
  {
    cartaID:     "29445",
    cartaNome:   "Pedra de Amplificação 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": getItemRefino(slot)
      }
    }
  },
  {
    cartaID:     "29446",
    cartaNome:   "Pedra de Amplificação 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": getItemRefino(slot) * 2
      }
    }
  },
  {
    cartaID:     "29447",
    cartaNome:   "Pedra de Amplificação 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": getItemRefino(slot) * 3
      }
    }
  },
  {
    cartaID:     "29448",
    cartaNome:   "Pedra de Amplificação 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": getItemRefino(slot) * 4
      }
    }
  },
  {
    cartaID:     "29449",
    cartaNome:   "Pedra de Amplificação 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": getItemRefino(slot) * 5
      }
    }
  },
  {
    cartaID:     "4818",
    cartaNome:   "Pedra de Crítico 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 6,
        "precisao": 2
      }
    }
  },
  {
    cartaID:     "4817",
    cartaNome:   "Pedra de Crítico 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 9,
        "precisao": 3
      }
    }
  },
  {
    cartaID:     "4816",
    cartaNome:   "Pedra de Crítico 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 12,
        "precisao": 4
      }
    }
  },
  {
    cartaID:     "4843",
    cartaNome:   "Pedra de Crítico 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 14,
        "precisao": 5
      }
    }
  },
  {
    cartaID:     "4844",
    cartaNome:   "Pedra de Crítico 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 15,
        "precisao": 6
      }
    }
  },
  {
    cartaID:     "4863",
    cartaNome:   "Fatal 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 1,
        "danocritico": 4
      }
    }
  },
  {
    cartaID:     "4864",
    cartaNome:   "Fatal 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 2,
        "danocritico": 6
      }
    }
  },
  {
    cartaID:     "4865",
    cartaNome:   "Fatal 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 3,
        "danocritico": 8
      }
    }
  },
  {
    cartaID:     "4866",
    cartaNome:   "Fatal 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 4,
        "danocritico": 10
      }
    }
  },
  {
    cartaID:     "4882",
    cartaNome:   "ATQ +1%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 1
      }
    }
  },
  {
    cartaID:     "4767",
    cartaNome:   "ATQ +3%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danofisicop": 3
      }
    }
  },
  {
    cartaID:     "4883",
    cartaNome:   "ATQM 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 1
      }
    }
  },
  {
    cartaID:     "4896",
    cartaNome:   "ATQM 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 2
      }
    }
  },
  {
    cartaID:     "4897",
    cartaNome:   "ATQM 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 3
      }
    }
  },
  {
    cartaID:     "4898",
    cartaNome:   "ATQM 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 4
      }
    }
  },
  {
    cartaID:     "4899",
    cartaNome:   "ATQM 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 5
      }
    }
  },
  {
    cartaID:     "4906",
    cartaNome:   "ATQM 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 6
      }
    }
  },
  {
    cartaID:     "4907",
    cartaNome:   "ATQM 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 7
      }
    }
  },
  {
    cartaID:     "4939",
    cartaNome:   "CRIT +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 2
      }
    }
  },
  {
    cartaID:     "4940",
    cartaNome:   "CRIT +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 4
      }
    }
  },
  {
    cartaID:     "4941",
    cartaNome:   "CRIT +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 6
      }
    }
  },
  {
    cartaID:     "4760",
    cartaNome:   "ATQM +1%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 1,
        "conjuracaofixap": -1
      }
    }
  },
  {
    cartaID:     "4761",
    cartaNome:   "ATQM +2%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 2,
        "conjuracaofixap": -1
      }
    }
  },
  {
    cartaID:     "4806",
    cartaNome:   "ATQM +3%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 3,
        "conjuracaofixap": -1
      }
    }
  },
  {
    cartaID:     "4861",
    cartaNome:   "HP +1%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 1
      }
    }
  },
  {
    cartaID:     "4862",
    cartaNome:   "HP +2%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 2
      }
    }
  },
  {
    cartaID:     "4867",
    cartaNome:   "HP +3%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3
      }
    }
  },
  {
    cartaID:     "4868",
    cartaNome:   "HP +4%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 4
      }
    }
  },
  {
    cartaID:     "4929",
    cartaNome:   "SP +1%",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spp": 4
      }
    }
  },
  {
    cartaID:     "4928",
    cartaNome:   "SP + 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 10
      }
    }
  },
  {
    cartaID:     "4870",
    cartaNome:   "SP + 25",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 25
      }
    }
  },
  {
    cartaID:     "4800",
    cartaNome:   "SP + 50",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 50
      }
    }
  },
  {
    cartaID:     "4871",
    cartaNome:   "SP + 75",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 75
      }
    }
  },
  {
    cartaID:     "4801",
    cartaNome:   "SP + 100",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 100
      }
    }
  },
  {
    cartaID:     "4802",
    cartaNome:   "SP + 150",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spf": 150
      }
    }
  },
  {
    cartaID:     "4875",
    cartaNome:   "Delírio",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4875a",
    cartaNome:   "Delírio - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico","REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 200
      }
    }
  },
  {
    cartaID:     "4877",
    cartaNome:   "Ânimo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_Pos","REQ_EP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4877a",
    cartaNome:   "Ânimo - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd","REQ_Pos","REQ_EP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 100,
        "aspdp": 100
      }
    }
  },
  {
    cartaID:     "4878",
    cartaNome:   "Histeria",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4878a",
    cartaNome:   "Histeria - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 200
      }
    }
  },
  {
    cartaID:     "4876",
    cartaNome:   "Epifania",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4876a",
    cartaNome:   "Epifania - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar","REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 200
      }
    }
  },
  {
    cartaID:     "4879",
    cartaNome:   "Instinto",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES","REQ_CVar","REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4879a",
    cartaNome:   "Instinto - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES","REQ_CVar","REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 200
      }
    }
  },
  {
    cartaID:     "4880",
    cartaNome:   "Euforia",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR","REQ_EP","REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4880a",
    cartaNome:   "Euforia - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR","REQ_EP","REQ_TCrit","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 200
      }
    }
  },
  {
    cartaID:     "4945",
    cartaNome:   "Economia 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: [],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4946",
    cartaNome:   "Economia 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: [],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4947",
    cartaNome:   "Economia 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: [],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
      }
    }
  },
  {
    cartaID:     "4885",
    cartaNome:   "Pedra de Feitiço 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 5,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    cartaID:     "4886",
    cartaNome:   "Pedra de Feitiço 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 10,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    cartaID:     "4887",
    cartaNome:   "Pedra de Feitiço 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 15,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    cartaID:     "4888",
    cartaNome:   "Pedra de Feitiço 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 20,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    cartaID:     "4889",
    cartaNome:   "Pedra de Feitiço 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 30,
        "conjuracaovariavel": -3
      }
    }
  },
  {
    cartaID:     "4948",
    cartaNome:   "Anti-Horário 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -2,
      }
    }
  },
  {
    cartaID:     "4949",
    cartaNome:   "Anti-Horário 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -4,
      }
    }
  },
  {
    cartaID:     "4950",
    cartaNome:   "Anti-Horário 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": -6,
      }
    }
  },
  {
    cartaID:     "4859",
    cartaNome:   "Esquiva +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: [],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquiva": 1,
      }
    }
  },
  {
    cartaID:     "4942",
    cartaNome:   "Esquiva Perfeita +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_EP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 3,
      }
    }
  },
  {
    cartaID:     "4943",
    cartaNome:   "Esquiva Perfeita +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_EP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 4,
      }
    }
  },
  {
    cartaID:     "4944",
    cartaNome:   "Esquiva Perfeita +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_EP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 5,
      }
    }
  },
  {
    cartaID:     "4991",
    cartaNome:   "A-VdA",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": 1
      }
    }
  },
  {
    cartaID:     "4985",
    cartaNome:   "A-ESQV",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_EP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "esquivaperfeita": 3
      }
    }
  },
  {
    cartaID:     "4982",
    cartaNome:   "A-FOR",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": hasCombo(slot, itemId, tipoItem, [[itemId]]) ? (parseInt(getAtributoBase("for") / 10) * 5) + (getItemRefino(slot) >= 7 ? 10 : 0) : 0
      }
    }
  },
  {
    cartaID:     "4983",
    cartaNome:   "A-INT",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": hasCombo(slot, itemId, tipoItem, [[itemId]]) ? (parseInt(getAtributoBase("int") / 10) * 5) + (getItemRefino(slot) >= 7 ? 10 : 0) : 0
      }
    }
  },
  {
    cartaID:     "4986",
    cartaNome:   "A-ATQ",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atq": 20
      }
    }
  },
  {
    cartaID:     "4987",
    cartaNome:   "A-ATQM",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqm": 20
      }
    }
  },
  {
    cartaID:     "4988",
    cartaNome:   "A-HP",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5
      }
    }
  },
  {
    cartaID:     "4989",
    cartaNome:   "A-SP",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 3
      }
    }
  },
  {
    cartaID:     "29061",
    cartaNome:   "Insígnia da Potência 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 3,
        "atqarmap": 3
      }
    }
  },
  {
    cartaID:     "29062",
    cartaNome:   "Insígnia da Potência 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 6,
        "atqarmap": 6
      }
    }
  },
  {
    cartaID:     "29063",
    cartaNome:   "Insígnia da Potência 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 9,
        "atqarmap": 9
      }
    }
  },
  {
    cartaID:     "29064",
    cartaNome:   "Insígnia da Potência 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 12,
        "atqarmap": 12
      }
    }
  },
  {
    cartaID:     "29065",
    cartaNome:   "Insígnia da Potência 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 15,
        "atqarmap": 15
      }
    }
  },
  {
    cartaID:     "29066",
    cartaNome:   "Insígnia da Potência 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 18,
        "atqarmap": 18
      }
    }
  },
  {
    cartaID:     "29067",
    cartaNome:   "Insígnia da Potência 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 21,
        "atqarmap": 21
      }
    }
  },
  {
    cartaID:     "29068",
    cartaNome:   "Insígnia da Potência 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 24,
        "atqarmap": 24
      }
    }
  },
  {
    cartaID:     "29069",
    cartaNome:   "Insígnia da Potência 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 27,
        "atqarmap": 27
      }
    }
  },
  {
    cartaID:     "29070",
    cartaNome:   "Insígnia da Potência 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "precisao": 30,
        "atqarmap": 33
      }
    }
  },
  {
    cartaID:     "29071",
    cartaNome:   "Insígnia da Virtude 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 3,
        "conjuracaofixap": -0.1
      }
    }
  },
  {
    cartaID:     "29072",
    cartaNome:   "Insígnia da Virtude 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 6,
        "conjuracaofixap": -0.2
      }
    }
  },
  {
    cartaID:     "29073",
    cartaNome:   "Insígnia da Virtude 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 9,
        "conjuracaofixap": -0.3
      }
    }
  },
  {
    cartaID:     "29074",
    cartaNome:   "Insígnia da Virtude 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 12,
        "conjuracaofixap": -0.4
      }
    }
  },
  {
    cartaID:     "29075",
    cartaNome:   "Insígnia da Virtude 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 15,
        "conjuracaofixap": -0.5
      }
    }
  },
  {
    cartaID:     "29076",
    cartaNome:   "Insígnia da Virtude 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 18,
        "conjuracaofixap": -0.6
      }
    }
  },
  {
    cartaID:     "29077",
    cartaNome:   "Insígnia da Virtude 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 21,
        "conjuracaofixap": -0.7
      }
    }
  },
  {
    cartaID:     "29078",
    cartaNome:   "Insígnia da Virtude 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 24,
        "conjuracaofixap": -0.8
      }
    }
  },
  {
    cartaID:     "29079",
    cartaNome:   "Insígnia da Virtude 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 27,
        "conjuracaofixap": -0.9
      }
    }
  },
  {
    cartaID:     "29080",
    cartaNome:   "Insígnia da Virtude 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 33,
        "conjuracaofixap": -1
      }
    }
  },
  {
    cartaID:     "29081",
    cartaNome:   "Insígnia do Talento 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 3,
        "danocritico": 10
      }
    }
  },
  {
    cartaID:     "29082",
    cartaNome:   "Insígnia do Talento 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 6,
        "danocritico": 20
      }
    }
  },
  {
    cartaID:     "29083",
    cartaNome:   "Insígnia do Talento 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 9,
        "danocritico": 30
      }
    }
  },
  {
    cartaID:     "29084",
    cartaNome:   "Insígnia do Talento 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 12,
        "danocritico": 40
      }
    }
  },
  {
    cartaID:     "29085",
    cartaNome:   "Insígnia do Talento 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 15,
        "danocritico": 50
      }
    }
  },
  {
    cartaID:     "29086",
    cartaNome:   "Insígnia do Talento 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 18,
        "danocritico": 60
      }
    }
  },
  {
    cartaID:     "29087",
    cartaNome:   "Insígnia do Talento 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 21,
        "danocritico": 70
      }
    }
  },
  {
    cartaID:     "29088",
    cartaNome:   "Insígnia do Talento 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 24,
        "danocritico": 80
      }
    }
  },
  {
    cartaID:     "29089",
    cartaNome:   "Insígnia do Talento 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 27,
        "danocritico": 90
      }
    }
  },
  {
    cartaID:     "29090",
    cartaNome:   "Insígnia do Talento 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 33,
        "danocritico": 110
      }
    }
  },
  {
    cartaID:     "29091",
    cartaNome:   "Insígnia da Maestria 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 1,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 4 : 0
      }
    }
  },
  {
    cartaID:     "29092",
    cartaNome:   "Insígnia da Maestria 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 2,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 8 : 0
      }
    }
  },
  {
    cartaID:     "29093",
    cartaNome:   "Insígnia da Maestria 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 3,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 12 : 0
      }
    }
  },
  {
    cartaID:     "29094",
    cartaNome:   "Insígnia da Maestria 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 4,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 16 : 0
      }
    }
  },
  {
    cartaID:     "29095",
    cartaNome:   "Insígnia da Maestria 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 5,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 20 : 0
      }
    }
  },
  {
    cartaID:     "29096",
    cartaNome:   "Insígnia da Maestria 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 6,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 24 : 0
      }
    }
  },
  {
    cartaID:     "29097",
    cartaNome:   "Insígnia da Maestria 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 7,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 28 : 0
      }
    }
  },
  {
    cartaID:     "29098",
    cartaNome:   "Insígnia da Maestria 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 8,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 32 : 0
      }
    }
  },
  {
    cartaID:     "29099",
    cartaNome:   "Insígnia da Maestria 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 9,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 36 : 0
      }
    }
  },
  {
    cartaID:     "29100",
    cartaNome:   "Insígnia da Maestria 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist","REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdp": 10,
        "danodistancia": isTipoArma("itemMaoDireita", ["Arma_Arco"]) ? 44 : 0
      }
    }
  },
  {
    cartaID:     "29101",
    cartaNome:   "Insígnia da Resiliência 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5
      }
    }
  },
  {
    cartaID:     "29102",
    cartaNome:   "Insígnia da Resiliência 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 10
      }
    }
  },
  {
    cartaID:     "29103",
    cartaNome:   "Insígnia da Resiliência 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 15
      }
    }
  },
  {
    cartaID:     "29104",
    cartaNome:   "Insígnia da Resiliência 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 20
      }
    }
  },
  {
    cartaID:     "29105",
    cartaNome:   "Insígnia da Resiliência 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 25
      }
    }
  },
  {
    cartaID:     "29106",
    cartaNome:   "Insígnia da Resiliência 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 30
      }
    }
  },
  {
    cartaID:     "29107",
    cartaNome:   "Insígnia da Resiliência 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 35
      }
    }
  },
  {
    cartaID:     "29108",
    cartaNome:   "Insígnia da Resiliência 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 40
      }
    }
  },
  {
    cartaID:     "29109",
    cartaNome:   "Insígnia da Resiliência 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 45
      }
    }
  },
  {
    cartaID:     "29110",
    cartaNome:   "Insígnia da Resiliência 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 55
      }
    }
  },
  {
    cartaID:     "29111",
    cartaNome:   "Insígnia da Afeição 1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 5
      }
    }
  },
  {
    cartaID:     "29112",
    cartaNome:   "Insígnia da Afeição 2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 10
      }
    }
  },
  {
    cartaID:     "29113",
    cartaNome:   "Insígnia da Afeição 3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 15
      }
    }
  },
  {
    cartaID:     "29114",
    cartaNome:   "Insígnia da Afeição 4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 20
      }
    }
  },
  {
    cartaID:     "29115",
    cartaNome:   "Insígnia da Afeição 5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 25
      }
    }
  },
  {
    cartaID:     "29116",
    cartaNome:   "Insígnia da Afeição 6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 30
      }
    }
  },
  {
    cartaID:     "29117",
    cartaNome:   "Insígnia da Afeição 7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 35
      }
    }
  },
  {
    cartaID:     "29118",
    cartaNome:   "Insígnia da Afeição 8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 40
      }
    }
  },
  {
    cartaID:     "29119",
    cartaNome:   "Insígnia da Afeição 9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 45
      }
    }
  },
  {
    cartaID:     "29120",
    cartaNome:   "Insígnia da Afeição 10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 55
      }
    }
  },
  {
    cartaID:     "4700",
    cartaNome:   "FOR +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 1
      }
    }
  },
  {
    cartaID:     "4701",
    cartaNome:   "FOR +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 2
      }
    }
  },
  {
    cartaID:     "4702",
    cartaNome:   "FOR +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 3
      }
    }
  },
  {
    cartaID:     "4703",
    cartaNome:   "FOR +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 4
      }
    }
  },
  {
    cartaID:     "4704",
    cartaNome:   "FOR +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 5
      }
    }
  },
  {
    cartaID:     "4705",
    cartaNome:   "FOR +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 6
      }
    }
  },
  {
    cartaID:     "4706",
    cartaNome:   "FOR +7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 7
      }
    }
  },
  {
    cartaID:     "4707",
    cartaNome:   "FOR +8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 8
      }
    }
  },
  {
    cartaID:     "4708",
    cartaNome:   "FOR +9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 9
      }
    }
  },
  {
    cartaID:     "4709",
    cartaNome:   "FOR +10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_FOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 10
      }
    }
  },
  {
    cartaID:     "4730",
    cartaNome:   "AGI +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 1
      }
    }
  },
  {
    cartaID:     "4731",
    cartaNome:   "AGI +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 2
      }
    }
  },
  {
    cartaID:     "4732",
    cartaNome:   "AGI +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 3
      }
    }
  },
  {
    cartaID:     "4733",
    cartaNome:   "AGI +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 4
      }
    }
  },
  {
    cartaID:     "4734",
    cartaNome:   "AGI +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 5
      }
    }
  },
  {
    cartaID:     "4735",
    cartaNome:   "AGI +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 6
      }
    }
  },
  {
    cartaID:     "4736",
    cartaNome:   "AGI +7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 7
      }
    }
  },
  {
    cartaID:     "4737",
    cartaNome:   "AGI +8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 8
      }
    }
  },
  {
    cartaID:     "4738",
    cartaNome:   "AGI +9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 9
      }
    }
  },
  {
    cartaID:     "4739",
    cartaNome:   "AGI +10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 10
      }
    }
  },
  {
    cartaID:     "4740",
    cartaNome:   "VIT +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 1
      }
    }
  },
  {
    cartaID:     "4741",
    cartaNome:   "VIT +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 2
      }
    }
  },
  {
    cartaID:     "4742",
    cartaNome:   "VIT +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 3
      }
    }
  },
  {
    cartaID:     "4743",
    cartaNome:   "VIT +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 4
      }
    }
  },
  {
    cartaID:     "4744",
    cartaNome:   "VIT +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 5
      }
    }
  },
  {
    cartaID:     "4745",
    cartaNome:   "VIT +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 6
      }
    }
  },
  {
    cartaID:     "4746",
    cartaNome:   "VIT +7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 7
      }
    }
  },
  {
    cartaID:     "4747",
    cartaNome:   "VIT +8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 8
      }
    }
  },
  {
    cartaID:     "4748",
    cartaNome:   "VIT +9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 9
      }
    }
  },
  {
    cartaID:     "4749",
    cartaNome:   "VIT +10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 10
      }
    }
  },
  {
    cartaID:     "4710",
    cartaNome:   "INT +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 1
      }
    }
  },
  {
    cartaID:     "4711",
    cartaNome:   "INT +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 2
      }
    }
  },
  {
    cartaID:     "4712",
    cartaNome:   "INT +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 3
      }
    }
  },
  {
    cartaID:     "4713",
    cartaNome:   "INT +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 4
      }
    }
  },
  {
    cartaID:     "4714",
    cartaNome:   "INT +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 5
      }
    }
  },
  {
    cartaID:     "4715",
    cartaNome:   "INT +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 6
      }
    }
  },
  {
    cartaID:     "4716",
    cartaNome:   "INT +7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 7
      }
    }
  },
  {
    cartaID:     "4717",
    cartaNome:   "INT +8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 8
      }
    }
  },
  {
    cartaID:     "4718",
    cartaNome:   "INT +9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 9
      }
    }
  },
  {
    cartaID:     "4719",
    cartaNome:   "INT +10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 3
      }
    }
  },
  {
    cartaID:     "4720",
    cartaNome:   "DES +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 1
      }
    }
  },
  {
    cartaID:     "4721",
    cartaNome:   "DES +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 2
      }
    }
  },
  {
    cartaID:     "4722",
    cartaNome:   "DES +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 3
      }
    }
  },
  {
    cartaID:     "4723",
    cartaNome:   "DES +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 4
      }
    }
  },
  {
    cartaID:     "4724",
    cartaNome:   "DES +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 5
      }
    }
  },
  {
    cartaID:     "4725",
    cartaNome:   "DES +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 6
      }
    }
  },
  {
    cartaID:     "4726",
    cartaNome:   "DES +7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 7
      }
    }
  },
  {
    cartaID:     "4727",
    cartaNome:   "DES +8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 8
      }
    }
  },
  {
    cartaID:     "4728",
    cartaNome:   "DES +9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 9
      }
    }
  },
  {
    cartaID:     "4729",
    cartaNome:   "DES +10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 10
      }
    }
  },
  {
    cartaID:     "4750",
    cartaNome:   "SOR +1",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 1
      }
    }
  },
  {
    cartaID:     "4751",
    cartaNome:   "SOR +2",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 2
      }
    }
  },
  {
    cartaID:     "4752",
    cartaNome:   "SOR +3",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 3
      }
    }
  },
  {
    cartaID:     "4753",
    cartaNome:   "SOR +4",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 4
      }
    }
  },
  {
    cartaID:     "4754",
    cartaNome:   "SOR +5",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 5
      }
    }
  },
  {
    cartaID:     "4755",
    cartaNome:   "SOR +6",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 6
      }
    }
  },
  {
    cartaID:     "4756",
    cartaNome:   "SOR +7",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 7
      }
    }
  },
  {
    cartaID:     "4757",
    cartaNome:   "SOR +8",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 8
      }
    }
  },
  {
    cartaID:     "4758",
    cartaNome:   "SOR +9",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 9
      }
    }
  },
  {
    cartaID:     "4759",
    cartaNome:   "SOR +10",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 10
      }
    }
  },
  {
    cartaID:     "29531",
    cartaNome:   "S-HPMax",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_HP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "hpp": 5,
        "hpf": (getItemRefino(slot) >= 7 ? 500 : 0) + (getItemRefino(slot) >= 9 ? 750 : 0)
      }
    }
  },
  {
    cartaID:     "29530",
    cartaNome:   "S-SPMax",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SP"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "spp": 5,
        "spf": (getItemRefino(slot) >= 7 ? 100 : 0) + (getItemRefino(slot) >= 9 ? 150 : 0)
      }
    }
  },
  {
    cartaID:     "29533",
    cartaNome:   "S-Cura",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Cura"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "efetividadecura": 5 + (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 5 : 0)
      }
    }
  },
  {
    cartaID:     "29534",
    cartaNome:   "S-ATQ",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atqarmap": 5,
        "atq": (getItemRefino(slot) >= 7 ? 25 : 0) + (getItemRefino(slot) >= 9 ? 25 : 0)
      }
    }
  },
  {
    cartaID:     "29535",
    cartaNome:   "S-ATQM",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danomagicop": 5,
        "atqm": (getItemRefino(slot) >= 7 ? 25 : 0) + (getItemRefino(slot) >= 9 ? 25 : 0)
      }
    }
  },
  {
    cartaID:     "29536",
    cartaNome:   "S-Tiro",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "danodistancia": 3 + (getItemRefino(slot) >= 7 ? 2 : 0) + (getItemRefino(slot) >= 9 ? 2 : 0)
      }
    }
  },
  {
    cartaID:     "29537",
    cartaNome:   "S-Rapidez",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Aspd"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "aspdf": 1,
        "aspdp": (getItemRefino(slot) >= 7 ? 3 : 0) + (getItemRefino(slot) >= 9 ? 3 : 0)
      }
    }
  },
  {
    cartaID:     "29538",
    cartaNome:   "S-Magia",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_CVar"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "conjuracaovariavel": (-5) + (getItemRefino(slot) >= 7 ? (-3) : 0) + (getItemRefino(slot) >= 9 ? (-3) : 0)
      }
    }
  },
  {
    cartaID:     "29539",
    cartaNome:   "S-CRIT",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DCrit","REQ_TCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "crit": 10,
        "danocritico": (getItemRefino(slot) >= 7 ? 5 : 0) + (getItemRefino(slot) >= 9 ? 5 : 0)
      }
    }
  },
  {
    cartaID:     "29540",
    cartaNome:   "U-Pós",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_Pos"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": (-5) + (getItemRefino(slot) >= 7 ? (-5) : 0) + (getItemRefino(slot) >= 9 ? (-5) : 0)
      }
    }
  },
  {
    cartaID:     "29541",
    cartaNome:   "U-Fixa",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_CFix"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "posconjuracao": (-0.3) + (getItemRefino(slot) >= 7 ? (-0.2) : 0) + (getItemRefino(slot) >= 9 ? (-0.2) : 0)
      }
    }
  },
  {
    cartaID:     "29550",
    cartaNome:   "L-Superpoder - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DFisico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoforca": 50,
        "atqarmap": 15,
        "danomagicop": -15
      }
    }
  },
  {
    cartaID:     "29551",
    cartaNome:   "L-Lampejo - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_AGI","REQ_DCrit"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributoagilidade": 50,
        "danocritico": 10
      }
    }
  },
  {
    cartaID:     "29547",
    cartaNome:   "L-Eternidade - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_VIT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributovitalidade": 50
      }
    }
  },
  {
    cartaID:     "29548",
    cartaNome:   "L-Sortilégio - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DMagico","REQ_INT"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributointeligencia": 50,
        "danomagicop": 15,
        "atqarmap": -15
      }
    }
  },
  {
    cartaID:     "29549",
    cartaNome:   "L-Astúcia - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_DES","REQ_DDist"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributodestreza": 50,
        "danodistancia": 10
      }
    }
  },
  {
    cartaID:     "29552",
    cartaNome:   "L-Fortuna - Ativo",
    cartaSlot:   "encantamento",
    cartaClasses: ["todas"],
    itemBonus: ["REQ_SOR","REQ_DMagico"],
    itemFuncao: function(slot, itemId, tipoItem) {
      return {
        "atributosorte": 50,
        "danomagiconeutro": 10,
        "danomagicofogo": 10,
        "danomagicovento": 10,
        "danomagicoterra": 10,
        "danomagicoagua": 10,
        "danomagicosagrado": 10,
        "danomagicosombrio": 10,
        "danomagicoveneno": 10,
        "danomagicofantasma": 10
      }
    }
  },
];
