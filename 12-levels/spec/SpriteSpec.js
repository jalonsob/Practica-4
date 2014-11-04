describe("Clase SpriteSpec", function(){
    // Una vez comenzado el juego deberá aparecer la nave del jugador en
    // la parte inferior

    // La nave debera moverse a izquierda y derecha con las teclas de las
    // flechas izda y dcha

    var canvas, ctx;

    beforeEach(function(){
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

	//Creo los sprites para todo tipo de objetos en el juego, si no los creo puedo tener quejas en this.sprite, linea 235 y 234 del game.js
	SpriteSheet = {
	  map : {missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
		  ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
		  enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
		  enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
		  enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
		  enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 }
		},
	  draw: function(){},
	  merge: function(){},
	  setup: function(){},
	};
  
    });

     it("draw",function(){

        var Sprit= new Sprite();
        spyOn(SpriteSheet, "draw");
        Sprit.draw(ctx);
        expect(SpriteSheet.draw).toHaveBeenCalled();
   	
    });

    it("setup",function(){
	   
	 basic={ x: 100, y: -50, sprite: 'enemy_purple', B: 100, C: 2 , E: 100 }
       	 enemigo= new Enemy(basic);
        
        
	 spyOn(enemigo, "merge");

         enemigo.setup(basic.sprite)
       	 expect(enemigo.merge).toHaveBeenCalled();
 
    });




});
