describe("Clase PlayerMissileSpec", function(){
	var canvas, ctx;

	beforeEach(function(){
		loadFixtures('index.html');

		canvas = $('#game')[0];
		expect(canvas).toExist();

		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
	
   	});

   	
	it ("draw", function(){

		spyOn(SpriteSheet, "draw");
		SpriteSheet.map = {
		    missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
		};
		
		var missile = new PlayerMissile(7, 7);
		missile.draw(ctx);	    

	 	expect(SpriteSheet.draw).toHaveBeenCalled();
	      	expect(SpriteSheet.draw.calls[0].args[1]).toEqual("missile");
		expect(SpriteSheet.draw.calls[0].args[2]).toEqual(missile.x);
		expect(SpriteSheet.draw.calls[0].args[3]).toEqual(missile.y);		
	});
	
	it ("step", function(){
		var gameb = new GameBoard();
		var missile = new PlayerMissile(7, 7);
		
		gameb.add(missile);
		spyOn(gameb, "remove");
	
		gameb.step(1);
		
		expect(gameb.remove).toHaveBeenCalled();	
	});

});

