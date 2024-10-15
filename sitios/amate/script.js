document.addEventListener('DOMContentLoaded', function() {
    const viewer = new PhotoSphereViewer.Viewer({
        container: document.querySelector('#photosphere'),
        panorama: 'img/360.jpeg',
        navbar: true
    });

      });

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    });
