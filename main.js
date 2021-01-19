// Creare uno slider di immagini
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente


//  funzione che al click della freccia in avanti scorra le immagini
$(document).ready(function() {
  // dall'ultimo al primo
  $('.next').click(function() {

    if ($("img.active").hasClass("last")) {
      $('img.first').addClass('active');
      $('img.last').removeClass('active');

      // stesso meccanismo alle icone

      $('i.first').addClass('active');
      $('i.last').removeClass('active');

    } else {

      $('img.active').removeClass('active').next().addClass('active')
      $('i.active').removeClass('active').next().addClass('active')

    }
  })
  // funzione che al click della freccia in dietro scorra le immagini
  $('.prev').click(function() {

    // dal primo torna all'ultimo

    if ($("img.active").hasClass("first")) {
      $('img.first').removeClass('active');
      $('img.last').addClass('active');

      // lo stesso meccanismo alle icone

      $('i.last').addClass('active');
      $('i.first').removeClass('active');

    } else {

      $('img.active').removeClass('active').prev().addClass('active')
      $('i.active').removeClass('active').prev().addClass('active')

    }
  })
})

// funzione per selezionare le immagini direttamente delle icone
$('.nav > i').click(function() {

  $('.nav > i.active').removeClass('active')
  $(this).addClass('active');

  // quale icona?

  var i = $('i.active').index();
  $('img.active').removeClass('active')

  // se quell'icona allora quell'immagine
  $('img').eq(i).addClass('active')

})
