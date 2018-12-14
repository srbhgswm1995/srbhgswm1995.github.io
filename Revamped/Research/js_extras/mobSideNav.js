$(document).ready(function () {
        $("#mobSideNav").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').click( function () {
            // hide sidebar
            $('#mobSideNav').removeClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').click(function () {
            // open sidebar
            $('#mobSideNav').addClass('active');
            // fade in the overlay
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });
