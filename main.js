enchant();

/*

Core
-rootScene
--Sprite(bear)
*/
window.onload = function(){

  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.onload = function(){

/*
      var bear = new Sprite(32, 32);
      bear.image = core.assets['chara1.png'];
      bear.x = 0;
      bear.y = 0;


      bear.addEventListener('enterframe', function(){
          if(core.input.right)this.x +=5;
          // 衝突判定
          // interesect
          // if(this.intersect(enemy)){
          //   label.text ='hit';
          // }
          // within
          if(this.within(enemy, 10)){
          //   label.text = 'HIT!';
              core.pushScene(gameOverScene);
              core.stop();
          }


      });

      var enemy = new Sprite(32, 32);
      enemy.image = core.assets['chara1.png'];
      enemy.x = 80;
      enemy.y = 0;
      enemy.frame = 5;

      var gameOverScene = new Scene();
      gameOverScene.backgroundColor ='black';

      bear.on('touchstart', function(){
          core.rootScene.removeChild(this);
      });

      core.rootScene.on('touchstart', function(e){
          bear.x = e.x;
          bear.y = e.y;
      });

      var label = new Label();
      label.x = 250;
      label.y = 5;
      label.color = 'red';
      label.font = '14px "Arial"';
      // label.text = '0';
      // label.on('enterframe', function(){
      //     label.text = (core.frame /core.fps).toFixed(2);
      // });

      core.rootScene.addChild(label);
      core.rootScene.addChild(bear);
      core.rootScene.addChild(enemy);
*/

        var Bear = Class.create(Sprite, {
          initialize: function(x, y){
            Sprite.call(this, 32, 32);
            this.x = x;
            this.y = y;
            this.frame = rand(5);
            this.opacity = rand(100) / 100;
            this.image = core.assets['chara1.png'];

            this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
                   .moveBy(-rand(100), -rand(20), rand(20))
                   .fadeOut(20)
                   .fadeIn(10)
                   .loop();

            core.rootScene.addChild(this);
          }
        });

        var bears = [];
        for(var i = 0; i < 100; i++){
          bears[i] = new Bear(rand(320), rand(320));
        }

      }
  core.start();

};

function rand(n){
  return Math.floor(Math.random() * (n+1));
}
