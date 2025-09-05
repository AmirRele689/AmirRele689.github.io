$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(900, 400, 50, 250);
    createPlatform(500, 625, 50, 25);
    createPlatform(325, 500, 50, 25);
    createPlatform(200, 400, 25, 25);
    createPlatform(250,250,150, 25)
    createPlatform(1200, 625, 100, 25)
    createPlatform(900, 450, 300, 25)
    createPlatform(1250, 500, 150, 25)
    createPlatform(1050,300,100,25)
    createPlatform(1200,200,50,25)
    createPlatform(600,350,200,25)
    createPlatform(600,175,300,25)
    createPlatform(250, 150, 100,25)
    createPlatform(600, 700, 25, 500)
    



    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("steve", 1100, 475);
  



    // TODO 4 - Create Cannons
    createCannon("top", 200, 1100);
    createCannon("right", 300, 1500);
     createCannon("bottom", 500, 1500);
      createCannon("top", 500, 700);
  


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
