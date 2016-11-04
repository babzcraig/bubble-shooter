$(document).ready(function(){
    var JollofShooter = window.JollofShooter || {};
    JollofShooter.Game = (function($) {
        var Game = function() {
            this.init = function() {
                console.log('init ran')
                $('.but_start_game').bind("click", startGame);

            };
            var startGame = function() {
                console.log('new game started');
                $(".but_start_game").unbind("click");
                JollofShooter.ui.hideDialog();
            };
        };
        return Game;
    })(jQuery);

    (function(){
        $(function(){
            var game = new JollofShooter.Game();
            game.init();
        })
    })();
});
