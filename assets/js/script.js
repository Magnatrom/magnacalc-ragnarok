var classeAtual = "";
var buildAtual = "";
var pontosAtributoPorNivel = [48,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,20,20,20,20,20,21,21,21,21,21,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,29,29,29,29,29,29,29,30,30,30,30,30,30,30,31,31,31,31];
var pontosGastosPorAtributo = [0,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,16,16,16,16,16,20,20,20,20,20,24,24,24,24,24,28,28,28,28,28,32,32,32,32,32,36,36,36,36,36];
var maxAtributos = 99;
var minNivelBase = 1;
var maxNivelBase = 99;
var maxNivelClasse = 50;
let ataquePorRefino = {
  "1": 2,
  "2": 3,
  "3": 5,
  "4": 7
}
let overPorRefino = {
  "1": 2,
  "2": 5,
  "3": 8,
  "4": 14
}
let todosItensSelecionados = {
  "itemTopo": {},
  "itemMeio": {},
  "itemBaixo": {},
  "itemArmadura": {},
  "itemMaoDireita": {},
  "itemMaoEsquerda": {},
  "itemCapa": {},
  "itemSapatos": {},
  "itemAcessorioD": {},
  "itemAcessorioE": {},
  "itemMalhaSombria": {},
  "itemLuvaSombria": {},
  "itemEscudoSombrio": {},
  "itemGrevaSombria": {},
  "itemBrincoSombrio": {},
  "itemColarSombrio": {}
};
let bonusConsolidados = {};
let menorconjuracaofixaP = 0;
let temInvestigar = false;
let temDrake = false;
let itemHabilitaAtaqueDuplo = false;


function getItemRefino(slot) {
  return (document.querySelector("#" + slot + " select.refino") ? (parseInt(document.querySelector("#" + slot + " select.refino").value)) : 0);
}

function getAtributoBase(atributo) {
  return parseInt(document.querySelector("#" + atributo).value);
}

function getNivelBase() {
  return parseInt(document.querySelector("#nivelPersonagem").value);
}

function getNivelClasse() {
  return parseInt(document.querySelector("#nivelClasse").value);
}

function isClasse(lista) {
  return lista.includes(classeAtual.classeID);
}

function isTipoArma(slot, lista) {
  let armaId = $(".itemSlot#" + slot + " select.equipamento").val();
  if(armaId != "") {
    return lista.includes((filterItemById(armaId)).itemSubtipo);
  } else {
    return false;
  }
}

function getNivelArma(slot) {
  let armaId = $(".itemSlot#" + slot + " select.equipamento").val();
  if(armaId != "") {
    return (filterItemById(armaId)).itemArmaNivel
  } else {
    return 0
  }
}



function hasCombo(slotOriginal, itemOriginal, opcoesItens) {
  let temTodosItens = true;
  opcoesItens.forEach(function(itemCombo, index) {
    let elementosComCombo = $(`select.equipamento, .carta select, #municoes select`).filter(function(item, index) { return itemCombo.includes(($(this).val()).replace(/\D+/g, '')) }).length;
    if(elementosComCombo <= 0) temTodosItens = false;
  });
  let primeiroElementoItemOriginal = $(`select.equipamento, .carta select, #municoes select`).filter(function(item, index) { return $(this).val() == itemOriginal }).eq(0).closest(".itemSlot").attr("id");
  return (temTodosItens && slotOriginal == primeiroElementoItemOriginal);
}

function isEquipped(itemId) {
  return $(".itemSlot select option[value=" + itemId + "]:selected").length > 0;
}

function hasBuff(buffID) {
  let inputs = $("#buffs").find("input[id="+buffID+"]").is(":checked");
  return inputs;
}

function isOpponent(tipo, ids) {
  let quantidadeAlvos = $(`#${tipo}`).filter(function(item, index) { return ids.includes($(this).val()) }).length;
  return quantidadeAlvos > 0;
}

function isOpponentChefe() {
  return $("#chefe").prop("checked");
}


function getClasse(varClasseAtual) {
  return classes.find(obj => { return obj.classeID === varClasseAtual });
}

function setClasse(varClasseAtual) {
  classeAtual = getClasse(varClasseAtual);
  if(classeAtual.transclasse) {
    $("#adotado").prop("checked",false);
  }
}

function setBuildAtual() {
  let tempBuildAtual = $("#buildPersonagem").val().replace(classeAtual.classeID + "--", "");
  console.log("tempBuildAtual: ", tempBuildAtual);
  buildAtual = classeAtual.classeBuilds.find(obj => { return obj.id === tempBuildAtual });
  console.log("buildAtual: ", buildAtual);
}

function getClasseTipo() {
  return classeAtual.classeTipo;
}

function isAdotado() {
  return $("#adotado").is(":checked");
}

function getBuilds(varClasseAtual) {
  let builds = getClasse(varClasseAtual);
  return builds.classeBuilds;
}

function getClasses() {
  $("#classePersonagem").html("<option disabled>## Classe 3 transcendida ##</option>");
  var tempBuilds = "";
  var isDisabled = "";
  classes.forEach(function(item, index) {
    tempBuilds = getBuilds(item.classeID);
    isDisabled = tempBuilds.length == 0 ? "disabled" : "";
    if(item.classeTipo == "ClasseT3") {
      $("#classePersonagem").append("<option value='" + (item.classeID) + "' " + isDisabled + ">" + (item.classeNome) + " (trans)</option>");
    }
  });
  $("#classePersonagem").append("<option disabled>## Classe 3 não-transcendida ##</option>");
  classes.forEach(function(item, index) {
    tempBuilds = getBuilds(item.classeID);
    isDisabled = tempBuilds.length == 0 ? "disabled" : "";
    if(item.classeTipo == "Classe3") {
      $("#classePersonagem").append("<option value='" + (item.classeID) + "' " + isDisabled + ">" + (item.classeNome) + " (não-trans)</option>");
    }
  });
  $("#classePersonagem").append("<option disabled>## Classe expandida 2 ##</option>");
  classes.forEach(function(item, index) {
    tempBuilds = getBuilds(item.classeID);
    isDisabled = tempBuilds.length == 0 ? "disabled" : "";
    if(item.classeTipo == "ClasseExp2") {
      $("#classePersonagem").append("<option value='" + (item.classeID) + "' " + isDisabled + ">" + (item.classeNome) + "</option>");
    }
  });
  $("#classePersonagem").append("<option disabled>## Doram ##</option>");
  classes.forEach(function(item, index) {
    tempBuilds = getBuilds(item.classeID);
    isDisabled = tempBuilds.length == 0 ? "disabled" : "";
    if(item.classeTipo == "Doram") {
      $("#classePersonagem").append("<option value='" + (item.classeID) + "' " + isDisabled + ">" + (item.classeNome) + "</option>");
    }
  });
}

function readClassAndBuild() {
  classePersonagem = $("#classePersonagem").val();
  buildPersonagem = $("#buildPersonagem").val();
}

function filterItemById(id) {
  // filtra os itens usando o ID
  return items.find(obj => { return obj.itemId == id })
}

function filterCartaById(id) {
  // filtra os itens usando o ID
  return cartas.find(obj => { return obj.cartaID == id })
}

function filterAmmoById(id) {
  // filtra os itens usando o ID
  return municoes.find(obj => { return obj.municaoId == id })
}

function filterCartaByBuild(slot) {
  // filtra as cartas usando o tipo e build
  if(buildAtual.requisitos !== undefined) {
    return cartas.filter(obj => {
      return (
        (obj.cartaSlot === slot || obj.cartaSlot === "essencia")
        &&
        obj.itemBonus.some(r=> buildAtual.requisitos.includes(r))
      )
    });
  } else {
    return [];
  }
}

function filterEncantamentoByItem(listaEncantamentos) {
  // filtra as cartas usando o tipo e build
  if(buildAtual.requisitos !== undefined) {
    return cartas.filter(obj => {
      return (
        obj.cartaSlot === "encantamento"
        &&
        listaEncantamentos.includes(obj.cartaID)
      )
    });
  } else {
    return [];
  }
}

function filterItemByBuild(slot) {
  // filtra os itens usando o tipo, classe e build
  if(buildAtual.requisitos !== undefined) {
    return items.filter(obj => {
      return (
        obj.itemTipo === slot
        &&
        ((obj.itemClasses.filter(e => e.indexOf(classePersonagem) >= 0)).length > 0 || obj.itemClasses.includes("todas") || (classeAtual.transclasse && obj.itemClasses.includes("transclasse")))
        &&
        obj.itemBonus.some(r=> buildAtual.requisitos.includes(r))
      );
    });
  } else {
    return [];
  }
}

function filterAmmoByWeaponType(tipo) {
  // filtra os itens usando o tipo, classe e build
  if(buildAtual.requisitos !== undefined) {
    let municoesSelecionadas = municoes.filter(obj => {
      return (
        obj.municaoTipo === tipo
        &&
        parseInt(obj.municaoNivel) <= getNivelBase()
        &&
        obj.municaoBonus.some(r=> buildAtual.requisitos.includes(r))
      )
    });
    return municoesSelecionadas;
  } else {
    return [];
  }
}

function filterArma(slot, mao) {
  // filtra os itens usando o tipo, classe e build
  if(buildAtual.requisitos !== undefined) {
    return items.filter(obj => {
      return (
        obj.itemTipo === slot
        &&
        (obj.itemClasses.includes(classePersonagem) || obj.itemClasses.includes("todas"))
        &&
        obj.itemBonus.some(r=> buildAtual.requisitos.includes(r))
        &&
        (mao.some(r=> obj.itemSubtipo == r) || obj.itemTipo == buildAtual.maoEsquerda[0])
      )
    });
  } else {
    return [];
  }
}

function listarAtributosMaximos() {
  if( (getClasseTipo() == "Classe1" && !(isAdotado())) || (getClasseTipo() == "ClasseT1" && !(isAdotado())) || (getClasseTipo() == "Classe2" && !(isAdotado())) || (getClasseTipo() == "ClasseT2" && !(isAdotado())) || (getClasseTipo() == "ClasseExp1" && !(isAdotado())) ) { maxAtributos = 99; }
  if( (getClasseTipo() == "Classe3" && !(isAdotado())) || (getClasseTipo() == "ClasseT3" && !(isAdotado())) || (getClasseTipo() == "ClasseExp2" && !(isAdotado())) ) { maxAtributos = 130; }
  if(getClasseTipo() == "Doram") { maxAtributos = 125; }
  if( (getClasseTipo() == "Classe1" && isAdotado()) || (getClasseTipo() == "ClasseT1" && isAdotado()) || (getClasseTipo() == "Classe2" && isAdotado()) || (getClasseTipo() == "ClasseT2" && isAdotado()) ) { maxAtributos = 80; }
  if( (getClasseTipo() == "Classe3" && isAdotado()) || (getClasseTipo() == "ClasseT3" && isAdotado()) ) { maxAtributos = 117; }
  if(getClasseTipo() == "ClasseExp1" && isAdotado()) { maxAtributos = 99; }
  if(getClasseTipo() == "ClasseExp2" && isAdotado()) { maxAtributos = 108; }
  let tempFOR = $("#for").val();
  let tempAGI = $("#agi").val();
  let tempVIT = $("#vit").val();
  let tempINT = $("#int").val();
  let tempDES = $("#des").val();
  let tempSOR = $("#sor").val();
  $("#for, #agi, #vit, #int, #des, #sor").html("");
  for(var i = 1; i <= maxAtributos; i++) {
    $("#for, #agi, #vit, #int, #des, #sor").append("<option value='" + i + "'>" + i + "</option>");
  }
  if(tempFOR <= maxAtributos && tempFOR != null) { $("#for").val(tempFOR); }
  if(tempAGI <= maxAtributos && tempAGI != null) { $("#agi").val(tempAGI); }
  if(tempVIT <= maxAtributos && tempVIT != null) { $("#vit").val(tempVIT); }
  if(tempINT <= maxAtributos && tempINT != null) { $("#int").val(tempINT); }
  if(tempDES <= maxAtributos && tempDES != null) { $("#des").val(tempDES); }
  if(tempSOR <= maxAtributos && tempSOR != null) { $("#sor").val(tempSOR); }
  calcularPontosAtributo();
}

function calcularPontosAtributo() {
  pontosAtributoTotais = 0;
  for(var i = 0; i < parseInt($("#nivelPersonagem").val()); i++) {
    pontosAtributoTotais += pontosAtributoPorNivel[i];
  }
  $("#for, #agi, #vit, #int, #des, #sor").each(function(){
    var pontosDistribuidos = parseInt($(this).val());
    if(pontosDistribuidos > maxAtributos) { $(this).val(maxAtributos); pontosDistribuidos = maxAtributos; }
    for(var ii = 0; ii < pontosDistribuidos; ii++) {
      pontosAtributoTotais -= pontosGastosPorAtributo[ii];
    }
    let id = $(this).attr("id");
    id = id.charAt(0).toUpperCase() + id.substring(1);
    $("#custo" + id).val("(" + pontosGastosPorAtributo[pontosDistribuidos] + ")");

  });
  if(getClasseTipo() == "ClasseT1" || getClasseTipo() == "Classe2" || getClasseTipo() == "ClasseT3") { pontosAtributoTotais += 52; }
  $("#disponiveis").val(pontosAtributoTotais);
}

function listarNivelBase() {
  if(getClasseTipo() == "Classe1" || getClasseTipo() == "ClasseT1" || getClasseTipo() == "Classe2" || getClasseTipo() == "ClasseT2" || getClasseTipo() == "ClasseExp1") { maxNivelBase = 99; }
  if(getClasseTipo() == "Classe3" || getClasseTipo() == "ClasseT3" || getClasseTipo() == "ClasseExp2" || getClasseTipo() == "Doram") { maxNivelBase = 175; }
  if(getClasseTipo() == "Classe3" || getClasseTipo() == "ClasseT3" || getClasseTipo() == "ClasseExp2") { minNivelBase = 99; } else { minNivelBase = 1; }
  let tempNivelBase = $("#nivelPersonagem").val();
  $("#nivelPersonagem").html("");
  for(var i = minNivelBase; i <= maxNivelBase; i++) {
    $("#nivelPersonagem").append("<option value='" + i + "'>" + i + "</option>");
  }
  if(tempNivelBase <= maxNivelBase && tempNivelBase >= minNivelBase && tempNivelBase != null) { $("#nivelPersonagem").val(tempNivelBase); }
}

function listarNivelClasse() {
  if(getClasseTipo() == "Classe1" || getClasseTipo() == "Classe2" || getClasseTipo() == "ClasseT1" || getClasseTipo() == "Doram") { maxNivelClasse = 50; }
  if(getClasseTipo() == "ClasseT2" || getClasseTipo() == "ClasseExp1") { maxNivelClasse = 70; }
  if(getClasseTipo() == "ClasseT3" || getClasseTipo() == "ClasseExp2") { maxNivelClasse = 60; }
  let tempNivelClasse = $("#nivelClasse").val();
  $("#nivelClasse").html("");
  for(var i = 1; i <= maxNivelClasse; i++) {
    $("#nivelClasse").append("<option value='" + i + "'>" + i + "</option>");
  }
  if(tempNivelClasse <= maxNivelClasse && tempNivelClasse != null) { $("#nivelClasse").val(tempNivelClasse); }
}

function exibirBuilds() {
  readClassAndBuild();
  $("#buildPersonagem").html("");
  getBuilds(classePersonagem).forEach(function(item, index) {
    $("#buildPersonagem").append("<option value='" + classePersonagem + "--" + (item.id) + "'>" + (item.nome) + "</option>");
  });
  readClassAndBuild();
}

function exibirCartas(posicao) {
  let slotCarta = posicao;
  $("#" + posicao + " div.carta select").val("");
  $("#" + posicao + " div.carta").slice(1).remove();
  $("#" + posicao + " div.carta").html("");
  let slots = 0;
  if(posicao != "") {
    let itemSelecionado = $("#" + posicao + " select.equipamento").val();
    if(itemSelecionado) {
      let item = filterItemById(itemSelecionado);
      if(posicao == "itemTopo" || posicao == "itemMeio") slotCarta = "itemCabeca";
      if(posicao == "itemMaoDireita") slotCarta = "itemArma";
      if(posicao == "itemMaoEsquerda" && item.itemTipo == "itemArma") slotCarta = "itemArma";
      if(posicao == "itemMaoEsquerda" && item.itemTipo == "itemEscudo") slotCarta = "itemEscudo";
      if(posicao == "itemAcessorioD" || posicao == "itemAcessorioE") slotCarta = "itemAcessorio";
      let slots = item.slots;
      let encantamentosItem = (item.encantamentos) ? item.encantamentos : [];
      let qtdEncantamentos = (encantamentosItem.length > 0) ? encantamentosItem.length : 0;

      let htmlcode = `<div class="row carta">`;
      if(slots > 0) {
        let listaCartas = filterCartaByBuild(slotCarta);
        for(let i = 1; i <= slots; i++) {
          if(i % 2 == 1 && i != 1) {
            htmlcode += `</div><div class="row carta">`;
          }
          let tamanhoDiv = ((slots + qtdEncantamentos) % 2 == 1 && i == slots + qtdEncantamentos) ? "col-12" : "col-6";
          htmlcode += `<div class="${tamanhoDiv} carta-${i}"><select><option value="">Carta</option>`;
          listaCartas.forEach(function(carta, index) {
            htmlcode += `<option value="${carta.cartaID}">${carta.cartaNome}</option>`;
          });
          htmlcode += `</select></div>`;
        }
      }
      if(qtdEncantamentos > 0) {
        for (const [index, listaEncantamentos] of encantamentosItem.entries()) {
          if((slots + index + 1) % 2 == 1 && (index + 1 + slots) != 1) {
            htmlcode += `</div><div class="row carta">`;
          }
          let encantamentos = filterEncantamentoByItem(listaEncantamentos);
          let tamanhoDiv = ((slots + qtdEncantamentos) % 2 == 1 && (slots + index + 1 == slots + qtdEncantamentos)) ? "col-12" : "col-6";
          htmlcode += `<div class="${tamanhoDiv} carta-${slots + index}"><select><option value="">Encantamento</option>`;
          encantamentos.forEach(function(carta, index) {
            htmlcode += `<option value="${carta.cartaID}">${carta.cartaNome}</option>`;
          });
          htmlcode += `</select></div>`;
        }
      }
      htmlcode += `</div>`;
      $("#" + posicao + " div.carta").replaceWith(htmlcode);
    }
  }
  $("#" + posicao + " div.carta select").on("change", onChangeInputs);
}

function exibirItens() {

  // Carrega item TOPO
  var itensTopo = filterItemByBuild("itemTopo");
  $("#itemTopo select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemTopo select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item MEIO
  var itensMeio = filterItemByBuild("itemMeio");
  $("#itemMeio select.equipamento").html("<option value=''>Nenhum</option>");
  itensMeio.forEach(function(item, index) {
    $("#itemMeio select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item BAIXO
  var itensBaixo = filterItemByBuild("itemBaixo");
  $("#itemBaixo select.equipamento").html("<option value=''>Nenhum</option>");
  itensBaixo.forEach(function(item, index) {
    $("#itemBaixo select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item ARMADURA
  var itensArmadura = filterItemByBuild("itemArmadura");
  $("#itemArmadura select.equipamento").html("<option value=''>Nenhum</option>");
  itensArmadura.forEach(function(item, index) {
    $("#itemArmadura select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item CAPA
  var itensCapa = filterItemByBuild("itemCapa");
  $("#itemCapa select.equipamento").html("<option value=''>Nenhum</option>");
  itensCapa.forEach(function(item, index) {
    $("#itemCapa select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item SAPATOS
  var itensSapatos = filterItemByBuild("itemSapatos");
  $("#itemSapatos select.equipamento").html("<option value=''>Nenhum</option>");
  itensSapatos.forEach(function(item, index) {
    $("#itemSapatos select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item ACESSÓRIOS
  var itemAcessorio = filterItemByBuild("itemAcessorio");
  var itemAcessorioD = itemAcessorio.slice();
  itemAcessorioD = itemAcessorioD.concat(filterItemByBuild("itemAcessorioD"));
  itemAcessorioD.sort(function (a, b) {
    if (a.itemNome > b.itemNome) { return 1; }
    if (a.itemNome < b.itemNome) { return -1; }
    return 0;
  });
  var itemAcessorioE = itemAcessorio.slice();
  itemAcessorioE = itemAcessorioE.concat(filterItemByBuild("itemAcessorioE"));
  itemAcessorioE.sort(function (a, b) {
    if (a.itemNome > b.itemNome) { return 1; }
    if (a.itemNome < b.itemNome) { return -1; }
    return 0;
  });
  $("#itemAcessorioD select.equipamento").html("<option value=''>Nenhum</option>");
  itemAcessorioD.forEach(function(item, index) {
    $("#itemAcessorioD select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });
  $("#itemAcessorioE select.equipamento").html("<option value=''>Nenhum</option>");
  itemAcessorioE.forEach(function(item, index) {
    $("#itemAcessorioE select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item MÃO DIREITA
  var itemMaoDireita = filterArma("itemArma", buildAtual.maoDireita);
  $("#itemMaoDireita select.equipamento").html("<option value=''>Nenhum</option>");
  itemMaoDireita.forEach(function(item, index) {
    $("#itemMaoDireita select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item MÃO ESQUERDA
  $("#itemMaoEsquerda select.equipamento").html("<option value=''>Nenhum</option>");
  if(buildAtual.maoEsquerda.length >= 1) {
    $("#itemMaoEsquerda select").prop("disabled", false);
    var itemMaoEsquerda = filterArma("itemArma", buildAtual.maoEsquerda);
    if(buildAtual.maoEsquerda[0] == "itemEscudo") { itemMaoEsquerda = filterArma("itemEscudo", buildAtual.maoEsquerda); }
    itemMaoEsquerda.forEach(function(item, index) {
      $("#itemMaoEsquerda select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
    });
  } else {
    $("#itemMaoEsquerda select").val("");
    $("#itemMaoEsquerda select").prop("disabled", true);
  }

  // Carrega item MALHA SOMBRIA
  var itensTopo = filterItemByBuild("itemMalhaSombria");
  $("#itemMalhaSombria select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemMalhaSombria select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item LUVAS SOMBRIAS
  var itensTopo = filterItemByBuild("itemLuvaSombria");
  $("#itemLuvaSombria select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemLuvaSombria select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item ESCUDO SOMBRIO
  var itensTopo = filterItemByBuild("itemEscudoSombrio");
  $("#itemEscudoSombrio select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemEscudoSombrio select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item GREVAS SOMBRIAS
  var itensTopo = filterItemByBuild("itemGrevaSombria");
  $("#itemGrevaSombria select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemGrevaSombria select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item BRINCOS SOMBRIOS
  var itensTopo = filterItemByBuild("itemBrincoSombrio");
  $("#itemBrincoSombrio select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemBrincoSombrio select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

  // Carrega item COLAR SOMBRIO
  var itensTopo = filterItemByBuild("itemColarSombrio");
  $("#itemColarSombrio select.equipamento").html("<option value=''>Nenhum</option>");
  itensTopo.forEach(function(item, index) {
    $("#itemColarSombrio select.equipamento").append("<option value='" + item.itemId + "'>" + item.itemNome + "</option>");
  });

}

function getItemBonusName(bonusId) {
  return bonusId in itemBonuses ? itemBonuses[bonusId].nome : "Bônus não encontrado";
}
function isItemBonusPercentage(bonusId) {
  return bonusId in itemBonuses ? itemBonuses[bonusId].porcentagem : false;
}

function definirBonusItens() {

  // Lendo bônus dos itens equipados
  $("select.equipamento").each(function() {
    let itemId = $(this).val();
    let slot = $(this).closest(".itemSlot").attr("id");
    $(`#${slot} .cool-box--header img`).remove();

    if(itemId != "") {
      $(`#${slot} .cool-box--header`).append(`<img src="https://www.divine-pride.net/img/items/item/bRO/${(itemId).replace(/\D+/g, '')}">`);

      let item = filterItemById(itemId);
      if(slot == "itemMaoDireita") {
        let idMunicao = $("#municoes select").val();
        todosItensSelecionados[slot]["atqarma"] = item.itemArmaATQ + (ataquePorRefino[String(item.itemArmaNivel)] * getItemRefino("itemMaoDireita"));
        if(idMunicao) {
          console.log("entrou na munição?");
          let municaoSelecionada = filterAmmoById(idMunicao);
          let municao = municaoSelecionada.municaoAtaque || 0;
          todosItensSelecionados[slot]["atqmunicao"] = municao;
          $("select#municao").val(String(municaoSelecionada.municaoPropriedade));
          $.each(municaoSelecionada.municaoFuncao(), function(index, value) {
            todosItensSelecionados[slot][index] = (todosItensSelecionados[slot][index] ? todosItensSelecionados[slot][index] : 0) + value;
          });
        } else {
          $("select#municao").val(String(item.itemPropriedade || "0"));
        }
      }

      // Contabilizando bônus dos itens
      let bonusItem = item.itemFuncao(slot, itemId);
      $.each(bonusItem, function(index, value) {
        todosItensSelecionados[slot][index] = (todosItensSelecionados[slot][index] ? todosItensSelecionados[slot][index] : 0) + value;
        if(index == "conjuracaofixap" && value < menorconjuracaofixaP) {
          menorconjuracaofixaP = value;
        }
      });

    }
  });

  // Lendo bônus das cartas equipadas
  $(".carta select").each(function() {
    let cartaId = $(this).val();
    let slot = $(this).closest(".itemSlot").attr("id");
    if(cartaId != "") {
      let carta = filterCartaById(cartaId);

      // Contabilizando bônus dos itens
      let bonusCarta = carta.itemFuncao(slot, cartaId);
      $.each(bonusCarta, function(index, value) {
        todosItensSelecionados[slot][index] = (todosItensSelecionados[slot][index] ? todosItensSelecionados[slot][index] : 0) + value;
        if(index == "conjuracaofixap" && value < menorconjuracaofixaP) {
          menorconjuracaofixaP = value;
        }
      });
    }
  });

  // Exibindo itens na tela
  $.each(todosItensSelecionados, function(indexTodosItens, valueTodosItens) {
    let elemento = $("#" + indexTodosItens + " .itemBonus");
    elemento.html("");
    if(Object.keys(valueTodosItens).length > 0) {
      $.each(valueTodosItens, function(indexBonus, valueBonus) {
        if(valueBonus) {
          let bonusRuim = "";
          if(((["posconjuracao","conjuracaovariavel","conjuracaofixap","conjuracaofixas"].includes(indexBonus) || indexBonus.indexOf("recargade--") >= 0 || indexBonus.indexOf("variavelde--" || indexBonus.indexOf("fixade--") >= 0) >= 0) && (valueBonus > 0)) || (!(["posconjuracao","conjuracaovariavel","conjuracaofixap","conjuracaofixas"].includes(indexBonus) || indexBonus.indexOf("recargade--") >= 0) & (valueBonus < 0))) {
            bonusRuim = `style="color:#ea2465"`;
          }
          if(!(indexBonus.indexOf("--") >= 0 && indexBonus.replace(indexBonus.substr(0,indexBonus.indexOf("--")) + "--","") != buildAtual.id.split("--")[0])) {
            elemento.append(
              `<div class="col-12"><span>${getItemBonusName(indexBonus)}:</span><span ${bonusRuim}>${valueBonus > 0 ? "+" : ""}${valueBonus}${isItemBonusPercentage(indexBonus) ? "%" : ""}</span></div>`
            )
          }
        }
      });
    }
  });

}

function getSkillFormula(prop, base, classe) {
  let formula = buildAtual.formula(prop, base, classe);
  return formula
}

function getBonusPercentage(bonus = 0) {
  return ROUNDDOWN(bonus / 100, 5);
}

function resetResultado() {
  $("#resultados").html("");
}

function adicionarResultado(nome, valor) {
  valor = Math.max(valor, 0);
  $("#resultados").append(`<div class="row"><div class="col-12"><span>${nome}: </span><span>${valor.toLocaleString()}</span></div></div>`)
}

function ROUNDUP(numero, decimais) {
  return (Math.ceil(numero * Math.pow(10, decimais)) / Math.pow(10, decimais));
}

function ROUNDDOWN(numero, decimais) {
  return (Math.floor(numero * Math.pow(10, decimais)) / Math.pow(10, decimais));
}

function calcularAspd() {
  let itemArmaAtual;
  let itemEscudoAtual;
  let Shield_Penalty = 0;

  Job_Base_ASPD = classeAtual.classeAspdBase;
  Job_ASPD = Job_Base_ASPD;
  if($("#itemMaoDireita select.equipamento").val() != "") {
    itemArmaAtual = filterItemById($("#itemMaoDireita select.equipamento").val());
    Job_Weapon_Penalty = (classeAtual.classeArmas.find(obj => { return obj.idArma === itemArmaAtual.itemSubtipo })).penalidade;
    Job_ASPD = Job_Base_ASPD + Job_Weapon_Penalty;
  }
  if($("#itemMaoEsquerda select.equipamento").val() != "") {
    itemEscudoAtual = filterItemById($("#itemMaoEsquerda select.equipamento").val());
    if(itemEscudoAtual.itemTipo == "itemEscudo") {
      Shield_Penalty = classeAtual.classePenEscudo;
    }
  }

  Equips_P = (bonusConsolidados.aspdp || 0);
  Equips_F = (bonusConsolidados.aspdf || 0);
  Total_AGI = (bonusConsolidados.atributoagilidade || 0);
  Total_DEX = (bonusConsolidados.atributodestreza || 0);

  ASPD_Correction = (Total_AGI < 205) ? ROUNDUP((Math.sqrt(205) - Math.sqrt(Total_AGI)) / 7.15, 3) : 0;
  Aspd_Penalty = (Job_Base_ASPD > 145) ? (1 - (Job_ASPD - 144) / 50) : 0.96;
  // Pendente: Adicionar consumíveis de ASPD
  Speed_Potion = 0;
  // Pendente: Adicionar skills de ASPD
  Skill_P = 0;
  if(hasBuff("359") && (buildAtual.ataque.tipoAtaque == "basico" || buildAtual.ataque.tipoAtaque == "basicocritico")) { Skill_P += 30; } // Frenesi
  Base_Aspd = (parseInt((200 - (200 - (Job_ASPD + Shield_Penalty - ASPD_Correction + Math.sqrt((Total_AGI * 9.9987) + (Total_DEX * 0.1922)) * Aspd_Penalty)) * (1 - (Speed_Potion / 100) - (Skill_P / 100))) * 1000) / 1000);
  ASPD_Equipment_P = (parseInt(((195 - Base_Aspd) * (Equips_P / 100)) * 100) / 100);
  Final_ASPD = Math.min(Base_Aspd + ASPD_Equipment_P + Equips_F, 193);

  return Final_ASPD;
}

function calcular() {
  console.log("### Calculando ###");
  bonusConsolidados = {};
  $.each(todosItensSelecionados, function(indexTodosItens, valueTodosItens) {
    $.each(valueTodosItens, function(index, valor) {

      bonusConsolidados[index] = parseFloat((bonusConsolidados[index] ? bonusConsolidados[index] : 0) + valor);
    });
  });

  let nivelClasse = getNivelClasse();

  bonusConsolidados.atributoforca = (bonusConsolidados.atributoforca ? bonusConsolidados.atributoforca : 0) + classeAtual.bonusClasse.for[nivelClasse];
  bonusConsolidados.atributoagilidade = (bonusConsolidados.atributoagilidade ? bonusConsolidados.atributoagilidade : 0) + classeAtual.bonusClasse.agi[nivelClasse];
  bonusConsolidados.atributovitalidade = (bonusConsolidados.atributovitalidade ? bonusConsolidados.atributovitalidade : 0) + classeAtual.bonusClasse.vit[nivelClasse];
  bonusConsolidados.atributointeligencia = (bonusConsolidados.atributointeligencia ? bonusConsolidados.atributointeligencia : 0) + classeAtual.bonusClasse.int[nivelClasse];
  bonusConsolidados.atributodestreza = (bonusConsolidados.atributodestreza ? bonusConsolidados.atributodestreza : 0) + classeAtual.bonusClasse.des[nivelClasse];
  bonusConsolidados.atributosorte = (bonusConsolidados.atributosorte ? bonusConsolidados.atributosorte : 0) + classeAtual.bonusClasse.sor[nivelClasse];

  if(hasBuff("29b") && !hasBuff("29a")) {  bonusConsolidados.atributoagilidade += 7; } // Aumentar Agilidade nv5
  if(hasBuff("29a")) {  bonusConsolidados.atributoagilidade += 12; } // Aumentar Agilidade nv10
  if(hasBuff("34b") && !hasBuff("34a")) {  bonusConsolidados.atributodestreza += 5; bonusConsolidados.atributointeligencia += 5; bonusConsolidados.atributoforca += 5; } // Bênção nv5
  if(hasBuff("34a")) {  bonusConsolidados.atributodestreza += 10; bonusConsolidados.atributointeligencia += 10; bonusConsolidados.atributoforca += 10; } // Bênção nv10

  $("input#bonusFor").val((bonusConsolidados.atributoforca >= 0 ? "+" : "") + bonusConsolidados.atributoforca);
  $("input#bonusAgi").val((bonusConsolidados.atributoagilidade >= 0 ? "+" : "") + bonusConsolidados.atributoagilidade);
  $("input#bonusVit").val((bonusConsolidados.atributovitalidade >= 0 ? "+" : "") + bonusConsolidados.atributovitalidade);
  $("input#bonusInt").val((bonusConsolidados.atributointeligencia >= 0 ? "+" : "") + bonusConsolidados.atributointeligencia);
  $("input#bonusDes").val((bonusConsolidados.atributodestreza >= 0 ? "+" : "") + bonusConsolidados.atributodestreza);
  $("input#bonusSor").val((bonusConsolidados.atributosorte >= 0 ? "+" : "") + bonusConsolidados.atributosorte);

  bonusConsolidados.atributoforca = (bonusConsolidados.atributoforca ? bonusConsolidados.atributoforca : 0) + getAtributoBase("for");
  bonusConsolidados.atributoagilidade = (bonusConsolidados.atributoagilidade ? bonusConsolidados.atributoagilidade : 0) + getAtributoBase("agi");
  bonusConsolidados.atributovitalidade = (bonusConsolidados.atributovitalidade ? bonusConsolidados.atributovitalidade : 0) + getAtributoBase("vit");
  bonusConsolidados.atributointeligencia = (bonusConsolidados.atributointeligencia ? bonusConsolidados.atributointeligencia : 0) + getAtributoBase("int");
  bonusConsolidados.atributodestreza = (bonusConsolidados.atributodestreza ? bonusConsolidados.atributodestreza : 0) + getAtributoBase("des");
  bonusConsolidados.atributosorte = (bonusConsolidados.atributosorte ? bonusConsolidados.atributosorte : 0) + getAtributoBase("sor");

  bonusConsolidados.danofisicop = (bonusConsolidados.danofisicop ? parseInt(bonusConsolidados.danofisicop) : 0) + (isOpponentChefe() ? (bonusConsolidados.danofisicochefe || 0) : 0);

  let skillFormula = getSkillFormula(bonusConsolidados, getNivelBase(), getNivelClasse());
  console.log("Formula: ", skillFormula);
  let itemArmaAtual = filterItemById($("#itemMaoDireita select.equipamento").val());

  let nivelMonstro = parseInt($("#nivelMonstro").val()) || 1;
  let defesaFisicaInicialMonstro = parseInt($("#hardDEF").val()) || 0;
  let defesaMagicaInicialMonstro = parseInt($("#hardDEFM").val()) || 0;
  let monstroFor = parseInt($("#monstroFor").val()) || 1;
  let monstroAgi = parseInt($("#monstroAgi").val()) || 1;
  let monstroVit = parseInt($("#monstroVit").val()) || 1;
  let monstroInt = parseInt($("#monstroInt").val()) || 1;
  let monstroDes = parseInt($("#monstroDes").val()) || 1;
  let monstroSor = parseInt($("#monstroSor").val()) || 1;
  let monstroEsquiva = parseInt($("#monstroEsquiva").val()) || 1;

  let refinoArmaAtual = getItemRefino("itemMaoDireita");

  let propriedadeAtaque = parseInt($("#municao").val());
  if($("#propriedadeConversor").val() != "") { propriedadeAtaque = parseInt($("#propriedadeConversor").val()); }
  let vantagemElemento = getVantagemElemental(propriedadeAtaque);

  let statusAtq = 0;
  let statBonus = 0;
  let overRefino = 0;
  let highRefino = 0;
  let weaponAtq = 0;

  let itemArmaATQ =  0;
  let itemArmaNivel =  0;
  let variance = 0;
  let danoTamanho = 1;
  let weaponAtqMin = 0;
  let weaponAtqMax = 0;
  let extraAtq = 0;
  let atqGroupAMin = 0;
  let atqGroupAMax = 0;
  let atqGroupB = 0;

  statusAtq = parseInt((getNivelBase() / 4) + bonusConsolidados.atributoforca + (bonusConsolidados.atributodestreza / 5) + (bonusConsolidados.atributosorte / 3));

  let hasWeaponEDP = 1;
  let hasEquipEDP = 1;
  if(itemArmaAtual != undefined) {
    let tipoArma = tiposArmas.find(obj => { return obj.armaId === itemArmaAtual.itemSubtipo });

    hasWeaponEDP = (hasBuff("378")) ? 5 : 1;
    hasEquipEDP = (hasBuff("378")) ? 4 : 1;
    itemArmaATQ = itemArmaAtual.itemArmaATQ;
    itemArmaNivel = itemArmaAtual.itemArmaNivel;

    variance = parseInt(0.05 * itemArmaNivel * itemArmaATQ) * hasWeaponEDP;
    bonusRefino = (refinoArmaAtual * ataquePorRefino[itemArmaNivel]);
    overRefino = Math.max(refinoArmaAtual - (8 - itemArmaNivel), 0) * overPorRefino[itemArmaNivel];
    highRefino = (Math.max(refinoArmaAtual - 16, 0) * (parseInt(itemArmaNivel / 2) + 1)) + (16 * (parseInt(itemArmaNivel / 2) + 1) * Math.max(Math.min(refinoArmaAtual - 15, 1), 0));

    danoTamanho = tipoArma.armaPenalidades[$("#tamanhoMonstro").val()];
    if(temDrake) danoTamanho = 1;

    // console.log("danoTamanho: ", danoTamanho)

    let isArmaLongaDistancia = isTipoArma("itemMaoDireita", ["Arma_Arco","Arma_Instrumento","Arma_Chicote","Arma_Pistola","Arma_Rifle","Arma_Metralhadora","Arma_Espingarda","Arma_Granadas"]);
    if($("#itemMaoDireita select.equipamento").val() != "" && isArmaLongaDistancia) {
      statusAtq = parseInt((getNivelBase() / 4) + bonusConsolidados.atributodestreza + (bonusConsolidados.atributoforca / 5) + (bonusConsolidados.atributosorte / 3));
      statBonus = parseInt((itemArmaATQ * bonusConsolidados.atributodestreza) / 200);
    } else {
      statBonus = parseInt((itemArmaATQ * bonusConsolidados.atributoforca) / 200);
    }

    let hasNoVariance = ((buildAtual.ataque.tipoAtaque == "basicocritico" || buildAtual.ataque.tipoAtaque == "skillcritico") ? 1 : -1);
    let hasOver = (!isArmaLongaDistancia ? 1 : 0);
    weaponAtqMin = (((itemArmaATQ * hasWeaponEDP) + (variance * hasNoVariance) + statBonus + bonusRefino + highRefino) * danoTamanho);
    weaponAtqMax = (((itemArmaATQ * hasWeaponEDP) + variance + statBonus + bonusRefino + highRefino + (overRefino * hasOver)) * danoTamanho);
    // console.log("itemArmaATQ: ", itemArmaATQ);
    // console.log("variance: ", variance);
    // console.log("bonusRefino: ", bonusRefino);
    // console.log("overRefino: ", overRefino);
    // console.log("highRefino: ", highRefino);
    // console.log("statBonus: ", statBonus);
    // console.log("weaponAtqMin: ", weaponAtqMin);
    // console.log("weaponAtqMax: ", weaponAtqMax);

    // Pendente: MasteryATK e BuffATK

  }

  // Pendente: Consumíveis e Pseudo Buff (Encanto de Órion, Investigar, etc)
  extraAtq = ((bonusConsolidados.atq || 0) + (bonusConsolidados.atqmunicao || 0)) * hasEquipEDP;
  // console.log("extraAtq: ", extraAtq);
  // console.log("statusAtq: ", statusAtq);

  // Calculo de defesa pesada do monstro
  let defesaFisicaFinalMonstro = defesaFisicaInicialMonstro * (1 - (getBonusPercentage(Math.min(bonusConsolidados.ignoredef || 0, 100))));
  if(temInvestigar) { extraAtq += parseInt(defesaFisicaFinalMonstro / 2); defesaFisicaFinalMonstro = 0; } // Carta Thanatos
  if(hasBuff("2315a") && !hasBuff("2315b")) { extraAtq += 150; } // Aegis Domini 150 DEF
  if(hasBuff("2315b")) {  extraAtq += 170; } // Aegis Domini 170 DEF
  let reducaoDefesaFisicaPesadaMonstro = ((4000 + defesaFisicaFinalMonstro) / (4000 + defesaFisicaFinalMonstro * 10));

  if(hasBuff("286") && propriedadeAtaque == "1") { vantagemElemento += 0.2; } // Dilúvio
  if(hasBuff("285") && propriedadeAtaque == "3") { vantagemElemento += 0.2; } // Vulcão
  if(hasBuff("287") && propriedadeAtaque == "4") { vantagemElemento += 0.2; } // Furacão
  atqGroupAMin = parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt((weaponAtqMin) * (1 + getBonusPercentage(bonusConsolidados.danofisicotamanho))) * (1 + getBonusPercentage(bonusConsolidados.atqarmap))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoraca))) * (1 + getBonusPercentage(bonusConsolidados.danofisicopropriedade))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoalvo))) * (1 + getBonusPercentage(bonusConsolidados.danofisicop))) * vantagemElemento);
  atqGroupAMax = parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt((weaponAtqMax) * (1 + getBonusPercentage(bonusConsolidados.danofisicotamanho))) * (1 + getBonusPercentage(bonusConsolidados.atqarmap))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoraca))) * (1 + getBonusPercentage(bonusConsolidados.danofisicopropriedade))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoalvo))) * (1 + getBonusPercentage(bonusConsolidados.danofisicop))) * vantagemElemento);

  atqGroupB = parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt((extraAtq) * (1 + getBonusPercentage(bonusConsolidados.danofisicotamanho))) * (1 + getBonusPercentage(bonusConsolidados.atqarmap))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoraca))) * (1 + getBonusPercentage(bonusConsolidados.danofisicopropriedade))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoalvo))) * (1 + getBonusPercentage(bonusConsolidados.danofisicop))) * vantagemElemento);

  // atqGroupB = parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt((extraAtq) * (1 + getBonusPercentage(bonusConsolidados.danofisicotamanho))) * (1 + getBonusPercentage(bonusConsolidados.atqarmap))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoraca))) * (1 + getBonusPercentage(bonusConsolidados.danofisicopropriedade))) * (1 + getBonusPercentage(bonusConsolidados.danofisicoalvo))) * (1 + getBonusPercentage(bonusConsolidados.danofisicop))) * vantagemElemento);

  statusAtq = statusAtq * getVantagemElemental("0");

  atqTotalMin = parseInt((statusAtq * 2) + atqGroupAMin + atqGroupB);
  atqTotalMax = parseInt((statusAtq * 2) + atqGroupAMax + atqGroupB);

  // Se for skill, pega a fórmula da habilidade e considera os bônus de dano da habilidade
  let skillModifier = (buildAtual.ataque.tipoAtaque == "skill" || buildAtual.ataque.tipoAtaque == "skillcritico") ? (getBonusPercentage(skillFormula)) : 1;
  let skillBonus = (buildAtual.ataque.tipoAtaque == "skill" || buildAtual.ataque.tipoAtaque == "skillcritico") ? (1 + getBonusPercentage(bonusConsolidados["danode--" + (buildAtual.id.split("--")[0])])) : 1;

  // Curta = dano corpo a corpo | Longa = dano a distância
  if(hasBuff("5002")) { bonusConsolidados.danodistancia = (bonusConsolidados.danodistancia ? bonusConsolidados.danodistancia : 0) + 250; } // Ilimitar
  let distanceModifier = ((buildAtual.ataque.distancia == "curta") ? (1 + getBonusPercentage(bonusConsolidados.danomelee)) : (1 + getBonusPercentage(bonusConsolidados.danodistancia)));

  // Pentente: Frenesi, Olhos de Águia, Força Violenta, Força Violentíssima, Furor, Dedicação
  let damageModifier = skillFormula;
  if(hasBuff("113") && !hasBuff("486")) { damageModifier += 25; } // Força Violentíssima
  if(hasBuff("486")) { damageModifier += 100; } // Força Violentíssima
  if(hasBuff("359") && (buildAtual.ataque.tipoAtaque == "basico" || buildAtual.ataque.tipoAtaque == "basicocritico")) { damageModifier += 200; } // Frenesi
  damageModifier = damageModifier / skillFormula;

  // Calculo defesa leve do monstro
  let reducaoDefesaFisicaLeveMonstro = parseInt((nivelMonstro + monstroVit) / 2) * hasWeaponEDP;
  // console.log("reducaoDefesaFisicaLeveMonstro: ", reducaoDefesaFisicaLeveMonstro)

  // Se for crítico, adiciona +40% de dano
  let modificadorCritBase = ((buildAtual.ataque.tipoAtaque == "basicocritico" || buildAtual.ataque.tipoAtaque == "skillcritico") ? 1.4 : 1);
  let modificadorCritBonus = 1 + ((buildAtual.ataque.tipoAtaque == "basicocritico" || buildAtual.ataque.tipoAtaque == "skillcritico") ? (getBonusPercentage(bonusConsolidados.danocritico)) : 0);

  // Pendente: Garra Sombria
  let multiplicadorFinal1 = 1;
  let multiplicadorFinal2 = 1;
  if(hasBuff("214")) { multiplicadorFinal1 += (isOpponentChefe() ? 0.1 : 0.2); } // Ataque Surpresa
  if(hasBuff("78")) { multiplicadorFinal1 += 1; } // Lex Aeterna
  if(hasBuff("5001") && buildAtual.ataque.distancia == "curta") { multiplicadorFinal2 += 1.5; } // Garra Sombria

  let finalMin = (parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(atqTotalMin * reducaoDefesaFisicaPesadaMonstro) * skillModifier) - reducaoDefesaFisicaLeveMonstro) * skillBonus) * distanceModifier) * damageModifier) * modificadorCritBonus) * modificadorCritBase) * multiplicadorFinal1) * multiplicadorFinal2) * buildAtual.ataque.golpes);
  let finalMax = (parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(parseInt(atqTotalMax * reducaoDefesaFisicaPesadaMonstro) * skillModifier) - reducaoDefesaFisicaLeveMonstro) * skillBonus) * distanceModifier) * damageModifier) * modificadorCritBonus) * modificadorCritBase) * multiplicadorFinal1) * multiplicadorFinal2) * buildAtual.ataque.golpes);

  resetResultado();
  adicionarResultado("Dano mínimo",finalMin);
  adicionarResultado("Dano máximo",finalMax);

  if(buildAtual.ataque.tipoAtaque == "basicocritico" || buildAtual.ataque.tipoAtaque == "skillcritico") {
    let taxacritica = 1 + (bonusConsolidados.crit || 0) + parseInt(bonusConsolidados.atributosorte / 3);
    if(buildAtual.ataque.distancia == "longa") taxacritica += (bonusConsolidados.critd || 0);
    adicionarResultado("Taxa crítica",taxacritica);
  }

  let aspd = calcularAspd();
  adicionarResultado("Velocidade de ataque", ROUNDUP(aspd, 2));
  let golpesPorSegundo = 50 / (200 - aspd);
  let intervaloEntreAtaques = 1 / golpesPorSegundo;

  if(buildAtual.ataque.conjuracaovariavel > 0 || buildAtual.ataque.conjuracaofixa > 0 || buildAtual.ataque.posconjuracao > 0 || buildAtual.ataque.recarga > 0) {
    let conjuracaovariavel = (buildAtual.ataque.conjuracaovariavel || 0) * Math.max(1 + getBonusPercentage(bonusConsolidados.conjuracaovariavel), 0) * Math.max(1 - (((bonusConsolidados.atributodestreza || 0) * 2 + (bonusConsolidados.atributointeligencia || 0)) / 530), 0);
    let conjuracaofixa = (Math.max((buildAtual.ataque.conjuracaofixa || 0) + (bonusConsolidados.conjuracaofixas || 0), 0) * (1 + (menorconjuracaofixaP / 100)));
    let posconjuracao = (buildAtual.ataque.posconjuracao || 0) * (1 + (Math.max((bonusConsolidados.posconjuracao || 0), -100) / 100));
    let recarga = Math.max((buildAtual.ataque.recarga || 0) + (bonusConsolidados["recargade--" + (buildAtual.id.split("--")[0])] || 0), 0);

    let tempoConjuracao = conjuracaovariavel + conjuracaofixa;
    let tempoEspera = Math.max(posconjuracao, recarga);

    intervaloEntreAtaques = Math.max(tempoConjuracao + tempoEspera, intervaloEntreAtaques);
    golpesPorSegundo = 1 / intervaloEntreAtaques;

    if(buildAtual.ataque.conjuracaovariavel > 0) {
      adicionarResultado("Conjuração variável", parseInt(conjuracaovariavel * 100) / 100);
    }
    if(buildAtual.ataque.conjuracaofixa > 0) {
      adicionarResultado("Conjuração fixa", parseInt(conjuracaofixa * 100) / 100);
    }
    if(buildAtual.ataque.posconjuracao > 0) {
      adicionarResultado("Pós-conjuração", parseInt(posconjuracao * 100) / 100);
    }
    if(buildAtual.ataque.recarga > 0) {
      adicionarResultado("Recarga", parseInt(recarga * 100) / 100);
    }
  }

  let modificadorDPS = 1;
  if(
      hasBuff("48")
      &&
      (buildAtual.ataque.tipoAtaque == "basico" || buildAtual.ataque.tipoAtaque == "basicocritico")
      &&
      (isTipoArma("itemMaoDireita", ["Arma_Adaga"]) || itemHabilitaAtaqueDuplo)
    ) { modificadorDPS *= 1.5; } // Ataque Duplo

  let danoPorSegundo = (((finalMin + finalMax) / 2) * golpesPorSegundo) * modificadorDPS;
  if(!hasBuff("78")) {
    adicionarResultado("Ataques por segundo", Math.round(golpesPorSegundo * 100) / 100);
    adicionarResultado("Dano por segundo", parseInt(Math.max(danoPorSegundo, 0)));
  }


  console.log("---------------------------");
}

function exibirMunicoes() {
  let idMaoDireita = $("#itemMaoDireita select.equipamento").val();
  if(idMaoDireita != "") {
    let itemMaoDireita = filterItemById(idMaoDireita);
    let tipoItemMaoDireita = itemMaoDireita.itemSubtipo;
    if(tipoItemMaoDireita == "Arma_Arco" && $("#municoes").length <= 0) {
      let row = $("#itemMaoDireita select.equipamento").closest(".row");
      let municoesAtuais = filterAmmoByWeaponType("flecha");
      let htmlcode = `<div class="col-6" id="municoes"><select><option value="">Munição</option>`;
      municoesAtuais.forEach(function(municao, index) {
        htmlcode += `<option value="${municao.municaoId}">${municao.municaoNome}</option>`;
      });
      htmlcode += `</select></div>`;
      row.append(htmlcode);
      $("#municoes").on("change", onChangeInputs);
    }
    if(tipoItemMaoDireita != "Arma_Arco") {
      $("#municoes").remove();
    }
  } else {
    $("select#municao").val("0");
    $("#municoes").remove();
  }
}

function listarBuffs() {
  let htmlcode = ``;
  buffs.forEach(function(classe, classeIndex) {
    let quantidade = (classe.habilidades.filter(function(buff, buffIndex) { return buff.disponivel })).length;
    if(quantidade > 0) {
      htmlcode += `<div class="classeBuff"><p>${classe.nomeClasse}</p><div class="buffs">`;
      classe.habilidades.forEach(function(buff, buffIndex) {
        if(buff.disponivel) {
          htmlcode += `<div class="buff"><input type="checkbox" id="${buff.skillID}"> <label for="${buff.skillID}"><img src="https://static.divine-pride.net/images/skill/${parseInt(buff.skillID)}.png"> <span>${buff.skillName}</span></label></div>`
        }
      });
      htmlcode += `</div></div>`;
    }
  });
  $("#buffs").append(htmlcode);
  $("#buffs input[type=checkbox]").on("change", onChangeInputs);
}

function zerarTodosItensSelecionados() {
  todosItensSelecionados = {
    "itemTopo": {},
    "itemMeio": {},
    "itemBaixo": {},
    "itemArmadura": {},
    "itemMaoDireita": {},
    "itemMaoEsquerda": {},
    "itemCapa": {},
    "itemSapatos": {},
    "itemAcessorioD": {},
    "itemAcessorioE": {},
    "itemMalhaSombria": {},
    "itemLuvaSombria": {},
    "itemEscudoSombrio": {},
    "itemGrevaSombria": {},
    "itemBrincoSombrio": {},
    "itemColarSombrio": {}
  }
  menorconjuracaofixaP = 0;
  temInvestigar = false;
  temDrake = false;
  itemHabilitaAtaqueDuplo = false;
  $(".itemSlot .itemBonus").html("");
}

function initCalc() {
  // inicia calculadora
  // readClassAndBuild();
  listarBuffs();
  getClasses();
  exibirBuilds();
  setClasse(classePersonagem);
  setBuildAtual();
  listarNivelBase();
  listarNivelClasse();
  listarAtributosMaximos();
  exibirItens();
  calcular();
}

function onChangeInputs() {
  zerarTodosItensSelecionados();
  if($(this).is("select.equipamento")) {
    let posicao = $(this).closest(".itemSlot").attr("id");
    exibirCartas(posicao);
  }
  definirBonusItens();
  exibirMunicoes();
  calcular();
}

$(document).ready(function() {
  // documento carregado
  initCalc();

  $("#classePersonagem").on("change", function() {
    readClassAndBuild();
    setClasse(classePersonagem);
    listarNivelBase();
    listarNivelClasse();
    listarAtributosMaximos();
    exibirBuilds();
    $("#buildPersonagem").trigger("change");
  });

  $("#buildPersonagem").on("change", function() {
    $(".carta select, select.equipamento, select#municoes").val("");
    $("select.refino").val("0");
    $(".carta").html("");

    readClassAndBuild();
    setClasse(classePersonagem);
    setBuildAtual();
    zerarTodosItensSelecionados();
    exibirItens();
    exibirMunicoes();
    onChangeInputs();
  });

  $("#adotado").on("change", function() {
    if(classeAtual.transclasse && $(this).is(":checked")) {
      if($("#classePersonagem option[value=" + classeAtual.classeID + "_NT" + "]").val() != undefined) {
        $("#classePersonagem").val(classeAtual.classeID + "_NT");
      } else {
        $("#adotado").prop("checked",false);
      }
      $("#classePersonagem").trigger("change");
    }
    listarAtributosMaximos();
  });

  $("#nivelPersonagem").on("change", function() {
    calcularPontosAtributo();
  });

  $(".atributoBase").on("change", function() {
    calcularPontosAtributo();
  });

  $("select.refino, select.equipamento, .carta select, .atributoBase, #alvo :input, #municoes select, select#nivelPersonagem, select#nivelClasse, select#propriedadeConversor").on("change", onChangeInputs);

  $(".cool-box--header").on("click", function() {
    let header = $(this);
    $(this).parent().find("> div:last-child").slideToggle(400, "swing", function() {
      header.toggleClass("active")
    });
  });
});

































// FIM
