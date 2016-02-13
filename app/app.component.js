(function(app) {
  app.AppComponent = ng.core
  .Component({
    selector: 'my-app',
    template: '<hero-form></hero-form>',// '<h1>Works</h1>',
    directives: [app.HeroFormComponent]
  })
  .Class({
    constructor: function() {}
  });
})(window.app || (window.app = {}));


//  Component schema
// app.AppComponent = ng.core.Component({}) - The Component method takes a configuration object with two properties.
//                           .Class({});
// The Class method is where we implement the component itself, giving it properties
// and methods that bind to the view and whatever behavior is appropriate for this part of the UI.

// IIFE - Immediately Invoked Function Expression
// (function(app){})(window.app || (window.app = {}));   
