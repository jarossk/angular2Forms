(function(app) {
  app.Hero = Hero;
  
  function Hero(id, name, power, alterEgo) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;
  }
  
  // It`s anemic model with few requirements and no behavior.
  var myHero = new Hero(42, 'Jarek', 'Fetch any object at any distace', 'Leslie Rollover');
  console.log('My Hero is called ' + myHero.name);
 
}) (window.app || (window.app = {}));



