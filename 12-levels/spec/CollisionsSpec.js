describe("Clase CollisionsSpec", function(){
   var canvas, ctx;

   beforeEach(function(){
  loadFixtures('index.html');

  canvas = $('#game')[0];
  expect(canvas).toExist();

  ctx = canvas.getContext('2d');
  expect(ctx).toBeDefined();
      SpriteSheet = {
          map : {missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
                  ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
                  enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
                  enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
                  enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
                  enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 },
                  fireball: {sx:0, sy:64, w: 64, h:64, frames:12}
                }
        };

  });
   

  it("Se destruye nave y misil",function(){
    enemy = new Enemy({ x: 7, y: 7, sprite: 'enemy_purple', B: 100, C: 2 , E: 100 });
    //hace falta reajustar la vida del enemigo para que este muera de un solo tiro
    enemy.health=10;
    var missile = new PlayerMissile(0, 0);
    //Cuando se lanza un misil, su posicion inicial se ajusta para que parezca
    //que sale de los cañones de la nave, asi que hay que volver a reposicionarlo
    missile.x = 7;
    missile.y = 7;
    //no hace falta ponerle el daño al misil porque el propio objeto ya se lo pone
    var gameb=  new GameBoard();
    gameb.add(enemy);
    gameb.add(missile);
    expect(gameb.objects[0].sprite).toBe('enemy_purple');
    expect(gameb.objects[1].sprite).toBe('missile');
    gameb.step(2);
    expect(gameb.objects[0]).toBe(undefined);
    expect(gameb.objects[1]).toBe(undefined);
  });

  it("Baja la vida de la nave",function(){
    var enemy = new Enemy({ x: 7, y: 7, sprite: 'enemy_purple', B: 100, C: 2 , E: 100 });
    enemy.health = 50;
    var missile = new PlayerMissile(0,0);
    missile.x = 7;
    missile.y = 7;
    var gameb=  new GameBoard();
    gameb.add(enemy);
    gameb.add(missile);
    expect(enemy.health).toBe(50);
    gameb.step(30/10000);
    expect(enemy.health).toBe(40);
  });

  it("Se destruye nave pero no bola de fuego",function(){
    enemy = new Enemy({ x: 7, y: 7, sprite: 'enemy_purple', B: 100, C: 2 , E: 100 });
    //hace falta reajustar la vida del enemigo para que este muera de un solo tiro
    enemy.health=10;
    var fireball = new Fireballb(0, 0);
    //Cuando se lanza un misil o bola de fuego, su posicion inicial se ajusta para que parezca
    //que sale de los cañones de la nave, asi que hay que volver a reposicionarlo
    fireball.x = 7;
    fireball.y = 7;
    //no hace falta ponerle el daño al misil porque el propio objeto ya se lo pone
    var gameb=  new GameBoard();
    gameb.add(enemy);
    gameb.add(fireball);
    expect(gameb.objects[0].sprite).toBe('enemy_purple');
    expect(gameb.objects[1].sprite).toBe('fireball');
    gameb.step(2);
    expect(gameb.objects[0].sprite).toBe('fireball');
    expect(gameb.objects[1]).toBe(undefined);
  });

  it("Colisionan y se destruyen la nave del jugador y la del enemigo",function(){

  });
});
