$(document).ready(function () {
    var images = [
      '../img/queen-card.jpg',
      '../img/queen-card.jpg',
      '../img/seven-card.jpg',
      '../img/seven-card.jpg',
      '../img/king-card.jpg',
      '../img/king-card.jpg',
      '../img/nine-card.jpg',
      '../img/nine-card.jpg',
      '../img/jack-card.jpg',
      '../img/jack-card.jpg',
      '../img/ace-card.jpg',
      '../img/ace-card.jpg'
    ];
  
    // Amestecă array-ul de imagini
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  
    // Adaugă div-urile în container
    var container = $('.container');
  
    // Amestecă array-ul de imagini
    var shuffledImages = shuffleArray(images);
  
    // Adaugă primele 8 imagini în div-uri
    for (var i = 0; i < 12; i++) {
      var imageDiv = $('<button class="image-div button" style="border: none;`"></button>');
      imageDiv.css('background-image', 'url(' + shuffledImages[i] + ')');
      imageDiv.attr('data-img-id', 'img-' + i); // Adaugă un atribut data pentru identificatorul unic

      container.append(imageDiv);
      if (i == 3 || i == 7 || i == 11) {
        imageDiv = $('<br>');
        container.append(imageDiv);
      }
    }


  
    console.log("Containerul a fost populat cu div-uri și imagini.");
  });