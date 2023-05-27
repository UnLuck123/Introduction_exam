$(document).ready(function($) {
        $(".scroll_move").click(function(event){         
                event.preventDefault();
                $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top}, 300);
        });
});
