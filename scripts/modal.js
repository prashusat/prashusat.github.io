$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'New York City Taxi Demand Prediction',
      detail:
        'Predict the number of pickups in a given location in New York City at a particular time interval',
      link: 'https://github.com/prashusat/New-York-City-Taxi-Demand-Prediction'
    },
    ordering: {
      title: 'Microsoft Malware Detection',
      tag: 'NLP,KNN,Random Forrest',
      detail:
        'A multi-class classification problem where we have to identify the type of Malware accurately.',
      link: 'https://github.com/prashusat/Microsoft-Malware-Detection'
    },
    newrelic: {
      title: 'Predicting the funding of Projects in Donors Choose dataset',
      detail:
        'The goal of this project is to predict if a project posted in the donorschoose website will be funded or not.',
      link: 'https://github.com/prashusat/KNN-on-Donors-Choose-Dataset'
    },
    roambi: {
      title: 'Sentiment Analysis',
      detail:
        'Implemented the Naive Bayes algorithm with maximum likelihood and MAP solutions and evaluate it using cross validation on the task of sentiment analysis',
      link: 'https://github.com/prashusat/Sentiment-Analysis'
    },
    roambi_2: {
      title: 'Bayesian Linear Regression',
      detail:
        'Implemented Bayesian methods to train a linear regression model and compared the performance of model selection using cross-validation with that of bayesian model selection.',
      link: 'https://github.com/prashusat/Bayesian-Linear-Regression'
    },
    roambi_3: {
      title: 'Image Orientation Classifier',
      detail:'A computer vision problem where 3 different models were built and compared to predict the orientation of images.',
      link: 'https://github.com/prashusat/Image-Orientation-Classifier'
    },
    roambi_4: {
      title: 'Experiments with Latent Direchlet Allocation',
      detail:'A collapsed Gibbs sampler was implemented for LDA inference and then the performance of Bag of Words was compared to that of LDA for document classification. ',
      link: 'https://github.com/prashusat/Experiments-with-LDA'
    },
    roambi_5: {
      title: 'Part of Speech Tagging',
      tag: 'NLP, Bayes net',
      detail: 'An NLP problem where every word in a sentence has to be tagged using its part of speech.This task was achieved using a Bayes Net.',
      link:
        'https://github.com/prashusat/Part-of-Speech-Tagging-Code-breaker-and-Spam-Classification'
    },
    roambi_6: {
      title: 'Spam Classifier using Naive Bayes algorithm',
      tag: 'NLP,Naive Bayes',
      detail:
        'A naive bayes classifier was trained to identify if the email is a spam or not',
      link: 'https://github.com/prashusat/Part-of-Speech-Tagging-Code-breaker-and-Spam-Classification'
    },
    roambi_7: {
      title: 'Threat detection in a network using Deep neural nets',
      tag: 'Deep learning',
      detail:
        'A deep learning model was built from scratch to identify network security threats.',
        
    },
    roambi_7: {
      title: 'Customizable Dynamic Gesture Recognition System using Siamese Neural Network.',
      tag: 'Deep learning',
      detail:
        'A customizable gesture recognition system was built using a variant of a convolutional neural network.',
        link:'https://ieeexplore.ieee.org/document/8834600'
    },
    
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;


  setDimensions();


  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
