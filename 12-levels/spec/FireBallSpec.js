describe("Clase FireBall", function(){
  var canvas, ctx;

  beforeEach(function(){
    loadFixtures('index.html');

    canvas = $('#game')[0];
    expect(canvas).toExist();

    ctx = canvas.getContext('2d');
    expect(ctx).toBeDefined();
  
    });

  it("draw (Fireballb Fireballn)",function(){

        //Es mejor crearme el tipo basico de enemigo aqui, porque si uso el de game.js puede que obtenga errores no deseados al usar basura
        //Si hago las pruebas del chasis de un coche, hago la prueba del chasis y no le meto el motor dentro
        spyOn(SpriteSheet, "draw");
        SpriteSheet.map = {
            fireball: {sx:0, sy:64, w: 64, h:64, frames:12},
        };
        
        var fireballb = new Fireballb(7,7);
        var fireballn = new Fireballn(7,7);
        fireballb.draw(ctx);      
        fireballn.draw(ctx);

        expect(SpriteSheet.draw).toHaveBeenCalled();
        expect(SpriteSheet.draw.calls[0].args[1]).toEqual("fireball");
        expect(SpriteSheet.draw.calls[0].args[2]).toEqual(fireballb.x);
        expect(SpriteSheet.draw.calls[0].args[3]).toEqual(fireballn.y);   
        });

    it("step",function(){
        var gameb = new GameBoard();
        var fireballb = new Fireballb(7,7);
        var fireballn = new Fireballn(7,7); 

        gameb.add(fireballb);
        gameb.add(fireballb);

        spyOn(gameb, "remove");
    
        gameb.step(40);
        
        expect(gameb.remove).toHaveBeenCalled();
 
    });


});