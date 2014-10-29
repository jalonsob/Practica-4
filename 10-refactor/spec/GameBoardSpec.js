describe("Clase GameBoardSpec", function(){
	var canvas, ctx;

	beforeEach(function(){
		loadFixtures('index.html');

		canvas = $('#game')[0];
		expect(canvas).toExist();

		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
	
   	});

   	
   	it("add",function(){
   		var obj="foo";
   		var gameb=  new GameBoard();
   		gameb.add(obj);
   		expect(gameb.objects).toEqual(['foo']);  	
   	});
   	
   	it("resetRemoved",function(){
   		
   		var gameb=  new GameBoard();
   		
   		gameb.resetRemoved();
   		
   		expect(gameb.removed).toBeDefined();  	
   	});
   	
   	it("removed",function(){
   		var obj="foo";
   		var gameb=  new GameBoard();
   		
   		gameb.add(obj);
   		gameb.resetRemoved();
   		gameb.remove(obj);
   		
   		expect(gameb.removed[0]).toEqual('foo');  	
   	});
   	
   	it("finalizeRemoved",function(){
   		var obj="foo";
   		var gameb=  new GameBoard();
   		
   		gameb.add(obj);
   		gameb.resetRemoved();
   		gameb.remove(obj);
   		gameb.finalizeRemoved();
   		
   		expect(gameb.objects[0]).toEqual(undefined);  	
   	});
   	
   	it("iterate",function(){
   		
   		var gameb = new GameBoard();
		spyOn(gameb, "iterate"); 

		gameb.iterate("resetRemoved", ctx);

		expect(gameb.iterate).toHaveBeenCalled();
   	});
   	
   	it("detect",function(){
   		
   		var obj="foo";
   		var gameb = new GameBoard();
   		
   		var testdet= function(objx){
   			objx=="foo";
   		}
	
		gameb.add(obj);
		spyOn(gameb, "detect");
		
		gameb.detect(testdet);
		
		expect(gameb.detect).toHaveBeenCalledWith(testdet);
		expect(gameb.detect).toBeTruthy();
		
   	});
   	
   	it ("step", function(){
		var gameb = new GameBoard();
		var dt = 30 / 1000;
		
		spyOn(gameb, "iterate");
		gameb.step(dt);
	
		expect(gameb.iterate).toHaveBeenCalledWith('step',dt);		
	});
	
	it ("draw", function(){
		var gameb = new GameBoard();
		var ct = "foo";
		
		spyOn(gameb, "iterate");
		gameb.draw(ct);
	
		expect(gameb.iterate).toHaveBeenCalledWith('draw',ct);		
	});
	
	it ("overlap", function(){
		var gameb = new GameBoard();
		var obj1 = {w:3,h:3,x:0,y:0};
		var obj2 = {w:3,h:3,x:1,y:1};
	
		expect(gameb.overlap(obj1,obj2)).toBeTruthy();
	});
	
	it ("collide", function(){
		var gameb = new GameBoard();
		var obj1 = {w:3,h:3,x:0,y:0};
	
		expect(gameb.collide(obj1)).toBeFalsy();
	});


});




