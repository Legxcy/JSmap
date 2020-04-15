
// Função inicial
    function initMap() {

// Posição dos marcadores

 //Rato ADCC
 var pos = {lat: 38.650046, lng: -9.143014};
 //Centro Paroquial de Bem-Estar Social de Arrentela
 var pos0 = {lat: 38.638311, lng: -9.096125};
 //Centro de Assistência Paroquial de Amora
 var pos1 = {lat: 38.621255, lng: -9.115073};
 //Associação Dá-me a Tua Mão
 var pos2 = {lat: 38.625147, lng: -9.101376};
 //Instituição é Associação de Reformados Pensionistas e Idosos do Fogueteiro
 var pos3 = {lat: 38.615097, lng: -9.110678};
 //ANPAR-Associação Nacional de Pais e Amigos Rett
 var pos4 = {lat: 38.621474, lng: -9.118743};
 //Aurpi TM - Associação Unitária Reformados Pensionistas Idosos da Torre da Marinha
 var pos5 = {lat: 38.616970, lng: -9.102265};
//Associação Pandas
var pos6 = {lat: 38.625443, lng: -9.148136};

 // Map
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: 38.628753, lng: -9.115710}
        });

 // Markers
 // Rato
 var Mark = new google.maps.Marker({
  position: pos,
  map: map,
  animation: google.maps.Animation.DROP,
});
 var Mark0 = new google.maps.Marker({
   position: pos0,
   map: map,
   animation: google.maps.Animation.DROP,
 });
 var Mark1 = new google.maps.Marker({
  position: pos1,
  map: map,
  animation: google.maps.Animation.DROP,
});
 var Mark2 = new google.maps.Marker({
   position: pos2,
   map: map,
   animation: google.maps.Animation.DROP,
});
 var Mark3 = new google.maps.Marker({
   position: pos3,
   map: map,
   animation: google.maps.Animation.DROP,
 });
 var Mark4 = new google.maps.Marker({
   position: pos4,
   map: map,
   animation: google.maps.Animation.DROP,
 });
var Mark5 = new google.maps.Marker({
   position: pos5,
   map: map,
   animation: google.maps.Animation.DROP,
 });
 var Mark6 = new google.maps.Marker({
   position: pos6,
   map: map,
   animation: google.maps.Animation.DROP,
 });

//Listeners
Mark.addListener('click', function() {Janela.open(map, Mark);});
Mark0.addListener('click', function() {Janela0.open(map, Mark0);});
Mark1.addListener('click', function() {Janela1.open(map, Mark1);});
Mark2.addListener('click', function() {Janela2.open(map, Mark2);});
Mark3.addListener('click', function() {Janela3.open(map, Mark3);});
Mark4.addListener('click', function() {Janela4.open(map, Mark4);});
Mark5.addListener('click', function() {Janela5.open(map, Mark5);});
Mark6.addListener('click', function() {Janela6.open(map, Mark6);});

 // Caixas de Texto

 // Rato-adcc
 var  CaixaDeTexto = '<div class="Conteudo">'+
  '<h1 id="Titulo" class=j"titulo">Rato - ADCC</h1>'+
  '<div class = "img"><img src="Logos/ratoadcc.gif" alt="Logo da Rato - ADCC"></div>'+
  '<p>A Rato - Associação para a Divulgação Cultural e Científica é uma organização sem fins lucrativos, vocacionada para a promoção de Sociedade de Informação.</p>'+
  '<p><b>Área do Voluntariado</b>: Área Social, e Área Educativa</p>'+
  '<p><b>Tipo de Voluntariado</b>: Informal</p>'+
  '<p><b>Contactos</b>: <a href="https://rato-adcc.pt" target="_blank">http://rato-adcc.pt/</a>, pelo telemóvel <a href="mailto:voluntariado@rato-adcc.pt">voluntariado@rato-adcc.pt</a> ou então pelo telemóvel +351933778414'+
  '</div>';

// Centro Paroquial de Bem-Estar Social de Arrentela
var CaixaDeTexto0 = '<div class="Conteudo">'+
  '<h1>Centro Paroquial de Bem-Estar Social de Arrentela</h1>'+
  '<div class = "img"><img src="Logos/cpbesa.png" alt="Logo CPBES Arrentela"></div>'+
  '<p>O Centro Paroquial de Bem Estar Social de Arrentela, é uma Instituição de Solidariedade Social, propriedade da Igreja Católica da Diocese de Setúbal, Paróquia de Arrentela.</p>'+
  '<p> <b>Área do Voluntariado:</b> Área Social e Área Educativa</p>'+
  '<p><b>Tipo de Voluntariado</b>: Formal</p>'+
  '<p><b>Contactos</b>: Telefone 21 222 30 51 ou pelo e-mail: <a href="mailto:variasculturas@gmail.com">variasculturas@gmail.com</a></p>'+
  '</div>';

 // CAPA
  var CaixaDeTexto1  = '<div class="Conteudo">'+
  '<h1>CAPA</h1>'+
  '<div class = "img"><img src="Logos/capa.png" alt="Logo do CAPA"></div>'+
  '<p>No cumprimento da sua missão, o Centro de Assistência Paroquial de Amora expressa-se num conjunto de valores, objetivos e atuações, apoiando cerca de 2000 utentes, através das respostas sociais “Creche Familiar, Creche, Pré-escolar, CATL e Refeitório Sociocultural, bem como da Cantina Social, no âmbito do Programa de Emergência Alimentar e do Grupo de Intervenção Comunitária (GIC)”.</p>'+
	  '<p><b>Área do Voluntariado:</b> Área social – distribuição alimentar, organização de donativos apoio no Refeitório Sociocultural;</p>'+
	    '<p><b>Tipo de Voluntariado</b>: Informal</p>'+
	  '<p> <b>Contactos</b>: <a href="mailto:geral@capa-amora.pt">geral@capa-amora.pt</a> / Telef.: 212278073 / Telemóvel.: 962232080</p></div>'+
  '</div>';


 //Associação Dá-me a Tua Mão
  var CaixaDeTexto2 = '<div class="Conteudo">'+
  '<h1>Associação Dá-me a Tua Mão</h1>'+
  '<div class = "img"><img src="Logos/associacaodameatuamao.jpg" alt="Logo da associação Dá-me a tua Mão"></div>'+
  '<p><b>Área do Voluntariado</b>: distribuição de alimentos a população carenciada e sem-abrigo do concelho do Seixal, quer nas instalações da Associação na Arrentela, quer em voltas diárias com uma carrinha que leva apoio alimentar a população referenciada e sem-abrigo do concelho.</p>'+
  '<p> <b>Contactos</b>: e-mail: <a href="mailto:adm.dameatuamao@gmail.com">adm.dameatuamao@gmail.com</a> telefone: 962627429 </p>'+
  '</div>';

//Instituição e Associação de Reformados Pensionistas e Idosos do Fogueteiro
  var CaixaDeTexto3 = '<div class="Conteudo">'+
  '<h1>Associação de Reformados Pensionistas e Idosos do Fogueteiro</h1>'+
  '<div class = "img"><img src="Logos/arpif.jpg" alt="Logo da ARPIF"></div>'+
  '<p>A associação de Reformados Pensionistas e idosos do Fogueteiro trabalha com um público alvo idoso.</p>'+
  '<p><b>Área do Voluntariado</b>: informação não disponível</p>'+
  '<p><b>Tipo de Voluntariado</b>: Informal</p>'+
  '<p><b>Contactos</b>: Tel. 212256044  arpifogueteiro@hotmail.com </p>'+
  '</div>';

//ANPAR-Associação Nacional de Pais e Amigos Ret
  var CaixaDeTexto4 = '<div class="Conteudo">'+
  '<h1>ANPAR</h1>'+
    '<div class = "img"><img src="Logos/anpar.jpg" alt="Logo da ANPAR"></div>'+
  '<p>A Associação Nacional de Síndrome de Rett procura atuar em vários sectores: educacional, médico, científico e jurídico-social, através da implementação de ações e projetos de carácter informativo.</p>'+
  '<p><b>Área de voluntariado</b>: dar apoio a jovens com deficiência que a partir da idade que terminam o seu percurso escolar regular, ficam sem uma estrutura de apoio diária que lhes proporcione um conjunto de actividades (lúdicas, terapêuticas, ocupacionais, etc.)</p>'+
  '<p><b>Tipo de Voluntariado</b>: Informal – carece de uma entrevista e inscrição prévia</p>'+
  '<p><b>Contactos</b>: Telf.: 919 467 392 - 211 340 467 / 910 391 911; Email: <a href="mailto:"geral@anpar.pt">geral@anpar.pt</a> ou <a href="mailto:"anparett@gmail.com">anparett@gmail.com</a>; Internet: <a href="www.anpar.pt" target="_blank">www.anpar.pt</a>, <a href="http://rettportugal.blogspot.com" target="_blank">http://rettportugal.blogspot.com</a> ou <a href="https://www.facebook.com/ANPAR.SindromeRett.Portugal">facebook.com/ANPAR.SindromeRett.Portugal</a></p>'+
  '</div>';

//Aurpi TM - Associação Unitária Reformados Pensionistas Idosos da Torre da Marinha (IPSS)
 var CaixaDeTexto5 = '<div class="Conteudo">'+
 '<h1>AURPITM</h1>'+
 '<div class = "img"><img src="Logos/aurpitm.jpg" alt="Logo da AURPITM"></div>'+
 '<p>A Associação Unitária de Reformados, Pensionistas e Idosos da Torre da Marinha dá resposta às necessidades dos 60 utentes do centro de convívio e integra o Grupo de Expressão Dramática.'+
 '<p><b>Área de voluntariado</b>: informação não disponível</p>'+
 '<p><b>Tipo de Voluntariado</b>: Informal / Formal</p>'+
 '<p><b>Contactos</b>: telefone 212 224 597 ou pelo telemóvel: 917 123 491'+
 '</div>';

//Associação de Apoio Social Os Pandas
 var CaixaDeTexto6 = '<div class="Conteudo">'+
 '<h1>Associação de Apoio Social Os Pandas</h1>'+
 '<div class = "img"><img src="Logos/pandas.jpg" alt="Logo da associação Os Pandas"></div>'+
 '<p>A Sala de Estudo Os Pandas nasceu em 2012 pela mão de quatro voluntárias no Bairro de Santa Marta de Corroios, para ajudar as crianças  no apoio ao estudo desde o 1º ano até ao 12º ano.'+
 '<p><b>Área de voluntariado</b>: Apoio escolar, apoio alimentar, vestuário e produtos de higiene</p>'+
 '<p><b>Tipo de Voluntariado</b>: Informal</p>'+
 '<p><b>Contactos</b>: <a href="mailto:associacaopandas@gmail.com">associacaopandas@gmail.com</a>'+
 '</div>';

 //Janelas
 var Janela = new google.maps.InfoWindow({
   content: CaixaDeTexto
 });
 var Janela0 = new google.maps.InfoWindow({
   content: CaixaDeTexto0
 });
 var Janela1 = new google.maps.InfoWindow({
   content: CaixaDeTexto1
 });
 var Janela2 = new google.maps.InfoWindow({
   content: CaixaDeTexto2
 });
var Janela3 = new google.maps.InfoWindow({
  content: CaixaDeTexto3
 });
 var Janela4 = new google.maps.InfoWindow({
   content: CaixaDeTexto4
 });
 var Janela5 = new google.maps.InfoWindow({
   content: CaixaDeTexto5
 });
 var Janela6 = new google.maps.InfoWindow({
   content: CaixaDeTexto6
 });

}
