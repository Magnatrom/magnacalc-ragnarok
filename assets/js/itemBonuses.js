let itemBonuses = {
  "atq": {
    "nome": "Ataque de equipamento",
    "porcentagem": false
  },
  "atqm": {
    "nome": "Ataque Mágico de equipamento",
    "porcentagem": false
  },
  "atqarma": {
    "nome": "Ataque da arma",
    "porcentagem": false
  },
  "atqmarma": {
    "nome": "Ataque Mágico da arma",
    "porcentagem": false
  },
  "atqarmap": {
    "nome": "Ataque da arma (%)",
    "porcentagem": true
  },
  "atqmunicao": {
    "nome": "Ataque da munição",
    "porcentagem": false
  },
  "crit": {
    "nome": "Taxa Crítica",
    "porcentagem": false
  },
  "critd": {
    "nome": "Taxa Crítica à distância",
    "porcentagem": false
  },
  "precisao": {
    "nome": "Precisão",
    "porcentagem": false
  },
  "precisaoperfeita": {
    "nome": "Precisão Perfeita",
    "porcentagem": false
  },
  "aspdp": {
    "nome": "Velocidade de ataque",
    "porcentagem": true
  },
  "aspdf": {
    "nome": "Velocidade de ataque",
    "porcentagem": false
  },
  "ignoredef": {
    "nome": "Defesa ignorada",
    "porcentagem": true
  },
  "ignoredefm": {
    "nome": "Defesa Mágica ignorada",
    "porcentagem": true
  },
  "danofisicop": {
    "nome": "Dano físico (%)",
    "porcentagem": true
  },
  "danomagicop": {
    "nome": "Dano mágico (%)",
    "porcentagem": true
  },
   "danodistancia": {
    "nome": "Dano físico a distância",
    "porcentagem": true
  },
  "danomelee": {
    "nome": "Dano físico corpo a corpo",
    "porcentagem": true
  },
  "danocritico": {
    "nome": "Dano crítico",
    "porcentagem": true
  },
  "danofisicoraca": {
    "nome": "Dano físico contra raça",
    "porcentagem": true
  },
  "danomagicoraca": {
    "nome": "Dano mágico contra raça",
    "porcentagem": true
  },
  "danofisicopropriedade": {
    "nome": "Dano físico contra propriedade",
    "porcentagem": true
  },
  "danomagicopropriedade": {
    "nome": "Dano mágico contra propriedade",
    "porcentagem": true
  },
  "danomagiconeutro": {
    "nome": "Dano mágico de propriedade Neutro",
    "porcentagem": true
  },
  "danomagicofogo": {
    "nome": "Dano mágico de propriedade Fogo",
    "porcentagem": true
  },
  "danomagicovento": {
    "nome": "Dano mágico de propriedade Vento",
    "porcentagem": true
  },
  "danomagicoterra": {
    "nome": "Dano mágico de propriedade Terra",
    "porcentagem": true
  },
  "danomagicoagua": {
    "nome": "Dano mágico de propriedade Água",
    "porcentagem": true
  },
  "danomagicosagrado": {
    "nome": "Dano mágico de propriedade Sagrado",
    "porcentagem": true
  },
  "danomagicosombrio": {
    "nome": "Dano mágico de propriedade Sombrio",
    "porcentagem": true
  },
  "danomagicoveneno": {
    "nome": "Dano mágico de propriedade Veneno",
    "porcentagem": true
  },
  "danomagicofantasma": {
    "nome": "Dano mágico de propriedade Fantasma",
    "porcentagem": true
  },
  "danofisicotamanho": {
    "nome": "Dano físico contra tamanho",
    "porcentagem": true
  },
  "danomagicotamanho": {
    "nome": "Dano mágico contra tamanho",
    "porcentagem": true
  },
  "danofisicoalvo": {
    "nome": "Dano físico contra monstro específico",
    "porcentagem": true
  },
  "danomagicoalvo": {
    "nome": "Dano mágico contra monstro específico",
    "porcentagem": true
  },
  "atributoforca": {
    "nome": "Força",
    "porcentagem": false
  },
  "atributoagilidade": {
    "nome": "Agilidade",
    "porcentagem": false
  },
  "atributovitalidade": {
    "nome": "Vitalidade",
    "porcentagem": false
  },
  "atributointeligencia": {
    "nome": "Inteligência",
    "porcentagem": false
  },
  "atributodestreza": {
    "nome": "Destreza",
    "porcentagem": false
  },
  "atributosorte": {
    "nome": "Sorte",
    "porcentagem": false
  },
  "conjuracaovariavel": {
    "nome": "Conjuração variável",
    "porcentagem": true
  },
  "conjuracaofixas": {
    "nome": "Conjuração fixa (segundos)",
    "porcentagem": false
  },
  "conjuracaofixap": {
    "nome": "Conjuração fixa (%)",
    "porcentagem": true
  },
  "posconjuracao": {
    "nome": "Pós-conjuração",
    "porcentagem": true
  },
  "efetividadecura": {
    "nome": "Efetividade de cura",
    "porcentagem": true
  },
  "hpp": {
    "nome": "HP máximo (%)",
    "porcentagem": true
  },
  "spp": {
    "nome": "SP máximo (%)",
    "porcentagem": true
  },
  "hpf": {
    "nome": "HP máximo (fixo)",
    "porcentagem": false
  },
  "spf": {
    "nome": "SP máximo (fixo)",
    "porcentagem": false
  },
  "esquiva": {
    "nome": "Esquiva",
    "porcentagem": false
  },
  "esquivaperfeita": {
    "nome": "Esquiva Perfeita",
    "porcentagem": false
  },
  "danode--Rajada_de_Flechas": {
    "nome": "Dano de Rajada de Flechas",
    "porcentagem": true
  },
  "danode--Chuva_de_Flechas": {
    "nome": "Dano de Chuva de Flechas",
    "porcentagem": true
  },
  "danode--Temporal_de_Mil_Flechas": {
    "nome": "Dano de Temporal de Mil Flechas",
    "porcentagem": true
  },
  "recargade--Temporal_de_Mil_Flechas": {
    "nome": "Recarga de Temporal de Mil Flechas",
    "porcentagem": false
  },
  "danode--Impacto_de_Tyr": {
    "nome": "Dano de Impacto de Tyr",
    "porcentagem": true
  },
  "danode--Golpe_Fulminante": {
    "nome": "Dano de Golpe Fulminante",
    "porcentagem": true
  },
  "danode--Furia_do_Furacao": {
    "nome": "Dano de Fúria do Furacão",
    "porcentagem": true
  },
  "recargade--Furia_do_Furacao": {
    "nome": "Recarga de Fúria do Furacão",
    "porcentagem": false
  },
  "danode--Tempestade_de_Flechas": {
    "nome": "Dano de Tempestade de Flechas",
    "porcentagem": true
  },
  "recargade--Tempestade_de_Flechas": {
    "nome": "Recarga de Tempestade de Flechas",
    "porcentagem": false
  },
  "danode--Tiro_Preciso": {
    "nome": "Dano de Tiro Preciso",
    "porcentagem": true
  },
  "recargade--Tiro_Neutralizante": {
    "nome": "Recarga de Tiro Neutralizante",
    "porcentagem": false
  },
  "danode--Tiro_Neutralizante": {
    "nome": "Dano de Tiro Neutralizante",
    "porcentagem": true
  },
  "danode--Ataque_Aereo": {
    "nome": "Dano de Ataque Aéreo",
    "porcentagem": true
  },
  "danode--Bomba_Relogio": {
    "nome": "Dano de Bomba Relógio",
    "porcentagem": true
  },
  "danode--Disparo_Certeiro": {
    "nome": "Dano de Disparo Certeiro",
    "porcentagem": true
  },
  "recargade--Disparo_Certeiro": {
    "nome": "Recarga de Disparo Certeiro",
    "porcentagem": false
  },
  "danode--Choque_do_Carrinho": {
    "nome": "Dano de Choque do Carrinho",
    "porcentagem": true
  },
  "danode--Perfurar_em_Espiral": {
    "nome": "Dano de Perfurar em Espiral",
    "porcentagem": true
  },
  "danode--Onda_de_Choque": {
    "nome": "Dano de Onda de Choque",
    "porcentagem": true
  },
  "danode--Vulcao_de_Flechas": {
    "nome": "Dano de Vulcão de Flechas",
    "porcentagem": true
  },
  "danode--Estilingue": {
    "nome": "Dano de Estilingue",
    "porcentagem": true
  },
  "danode--Flecha_Melodica": {
    "nome": "Dano de Flecha Melódica",
    "porcentagem": true
  },
  "danode--Ruido_Estridente": {
    "nome": "Dano de Ruído Estridente",
    "porcentagem": true
  },
  "conjuracaovariavel--Ruido_Estridente": {
    "nome": "Conjuração variável de Ruído Estridente",
    "porcentagem": true
  },
  "danode--Disparo_Perfurante": {
    "nome": "Dano de Disparo Perfurante",
    "porcentagem": true
  },
  "danode--Escudo_Compressor": {
    "nome": "Dano de Escudo Compressor",
    "porcentagem": true
  },
  "danode--Toque_do_Oblivio": {
    "nome": "Dano de Toque do Oblívio",
    "porcentagem": true
  },
  "danode--Gemini_Lumen": {
    "nome": "Dano de Gemini Lumen",
    "porcentagem": true
  },
  "danode--Investida_de_Shura": {
    "nome": "Dano de Investida de Shura",
    "porcentagem": true
  },
  "danode--Copia_Explosiva": {
    "nome": "Dano de Cópia Explosiva",
    "porcentagem": true
  },
  "danode--Laminas_Retalhadoras": {
    "nome": "Dano de Lâminas Retalhadoras",
    "porcentagem": true
  },
  "danode--Castigo_de_Loki": {
    "nome": "Dano de Castigo de Loki",
    "porcentagem": true
  },
  "danode--Petalas_Flamejantes": {
    "nome": "Dano de Pétalas Flamejantes",
    "porcentagem": true
  },
  "danode--Lanca_Congelante": {
    "nome": "Dano de Lança Congelante",
    "porcentagem": true
  },
  "danode--Lamina_de_Vento": {
    "nome": "Dano de Lâmina de Vento",
    "porcentagem": true
  },
  "danode--Chamas_de_Hela": {
    "nome": "Dano de Chamas de Hela",
    "porcentagem": true
  },
  "danode--Cometa": {
    "nome": "Dano de Cometa",
    "porcentagem": true
  },
  "danode--Meteoros_de_Nepeta": {
    "nome": "Dano de Meteoros de Nepeta",
    "porcentagem": true
  },
  "recargade--Meteoros_de_Nepeta": {
    "nome": "Recarga de Meteoros de Nepeta",
    "porcentagem": true
  },
  "danode--Espa": {
    "nome": "Dano de Espa",
    "porcentagem": true
  },
  "danode--Eswhoo": {
    "nome": "Dano de Eswhoo",
    "porcentagem": true
  },
  "danode--Canhao_de_Protons": {
    "nome": "Dano de Canhão de Prótons",
    "porcentagem": true
  },
  "danode--Laminas_de_Loki": {
    "nome": "Dano de Lâminas de Loki",
    "porcentagem": true
  },
  "danode--Explosao_Solar": {
    "nome": "Dano de Explosão Solar",
    "porcentagem": true
  },
  "danode--Luz_da_Criacao": {
    "nome": "Dano de Luz da Criação",
    "porcentagem": true
  },
  "danode--Onda_Psiquica": {
    "nome": "Dano de Onda Psíquica",
    "porcentagem": true
  },
  "danode--Judex": {
    "nome": "Dano de Judex",
    "porcentagem": true
  },
  "recargade--Explosao_Espiritual": {
    "nome": "Recarga de Explosão Espiritual",
    "porcentagem": true
  },
  "danode--Execucao": {
    "nome": "Dano de Execução",
    "porcentagem": true
  },
  "danode--Bomba_Acida": {
    "nome": "Dano de Bomba Ácida",
    "porcentagem": true
  },
  "danode--Disparo_Triplo": {
    "nome": "Dano de Disparo Triplo",
    "porcentagem": true
  },
  "danode--Apunhalar": {
    "nome": "Dano de Apunhalar",
    "porcentagem": true
  },
  "danode--Impacto_Meteoro": {
    "nome": "Dano de Impacto Meteoro",
    "porcentagem": true
  },
  "variavelpde--Impacto_Meteoro": {
    "nome": "Conjuração variável de Impacto Meteoro",
    "porcentagem": true
  },
  "danode--Soco_Furacao": {
    "nome": "Dano de Soco Furacão",
    "porcentagem": true
  },
  "danode--Mammonita": {
    "nome": "Dano de Mammonita",
    "porcentagem": true
  },
  "danode--Acerto_de_Contas": {
    "nome": "Dano de Acerto de Contas",
    "porcentagem": true
  },
  "danode--Aegis_Inferi": {
    "nome": "Dano de Aegis Inferi",
    "porcentagem": true
  },
  "variavelfde--Aegis_Inferi": {
    "nome": "Conjuração variável de Aegis Inferi",
    "porcentagem": false
  },
  "variavelfde--Vulcao_de_Flechas": {
    "nome": "Conjuração fixa de Vulcão de Flechas",
    "porcentagem": false
  },
  "pesoEscudo": {
    "nome": "Peso",
    "porcentagem": false
  },
  "defesaEscudo": {
    "nome": "Defesa",
    "porcentagem": false
  },
  "drake": {
    "nome": "Anula a penalidade de tamanho da arma",
    "porcentagem": false
  },
  "danode--Choque_Rapido": {
    "nome": "Dano de Choque Rápido",
    "porcentagem": true
  },
  "danode--Lanca_do_Destino": {
    "nome": "Dano de Lança do Destino",
    "porcentagem": true
  },
}
