/* $(document).ready(function() {
    $("#searchService").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".service-item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}); */

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array); 
    },5000)
}

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  makeToast('Text Copied')
};

var toastTime;

function makeToast(text = null, timeOut=4000) {
  $('.toast-text').html(text)
  $('.bs-toast').fadeIn(300);

  toastTime = setTimeout(() => {
    $('.bs-toast').fadeOut(300);
  }, timeOut);
}

function removeToast() {
  $('.bs-toast').fadeOut(300);
  clearTimeout(toastTime);
}

$('.orderToggle').click(function() {
  $(this).parents('.card-order').find('.co-hidden').slideToggle(200);
})

var docScrollTop = $(document).scrollTop()

$(document).scroll(function() {
  docScrollTop = $(document).scrollTop()
  headerScroll(docScrollTop)
})

function headerScroll(docScrollTop) {
  if(docScrollTop > 20) {
    $('#smmspot-na-header').addClass('sticky')
  } else {
    $('#smmspot-na-header').removeClass('sticky')
  }
}

$('.noAuthMenuBtn').click(function() {
  $('.col-menu').slideToggle(200);
})

function rightMenuToggle() {
  $('.app-rightbar').toggleClass('active')
}

function sidebarToggle() {
  $('.app-sidebar').toggleClass('active');
}

var appHeader = document.getElementsByClassName('app-header');

const appHeaderScroll = (x) => {
  if(x > 10) {
    if( !appHeader.classList.contains('active') ) {
      appHeader.classList.add('active');
    }
  }  else {
    if( appHeader.classList.contains('active') ) {
      appHeader.classList.remove('active');
    }
  }
}

if(appHeader.length) {
  appHeader = appHeader[0];

  window.addEventListener('scroll', () => {
    appHeaderScroll(window.pageYOffset);
  })
}

$('.home-ss-tab').click(function() {
    if ($(this).hasClass('active')) {
        $(this).find('.ss-tab-content').slideToggle(200);
        $(this).toggleClass('active');
    } else {
        $('.home-ss-tab').removeClass('active');
        $('.home-ss-tab > .ss-tab-content').slideUp(200);
        $(this).find('.ss-tab-content').slideToggle(200);
        $(this).toggleClass('active');
    }
});

$("#orderform-service").change(function () {
    service_id = $(this).val();
    $("#s_id").text(service_id);

    description = window.modules.siteOrder.services[service_id].description
    $("#s_desc").html(description);

    name = window.modules.siteOrder.services[service_id].name
    $("#s_name").html(name);
})