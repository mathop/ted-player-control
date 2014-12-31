require(['jquery'], function ($) {

    var player = $('#player-hero')
      , playButton = $('.player-hero__play')
      , pauseButton = '.controls__pause';

    var isPlaying = function() {
        return player.hasClass('player-hero--playing');
    };

    var togglePlay = function() {
        if (isPlaying()) {
            $(pauseButton).trigger('click');
        } else {
            playButton.trigger('click');
        }
    };

    $(document).keydown(function(e) {
        if (e.which == 32) {
            togglePlay();
            return false;
        }
    });

});
