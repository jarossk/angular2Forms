(function(app) {
  app.HeroFormComponent = ng.core
  .Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
  })
  .Class({
    constructor: function() {
      this.powers = ['Really Smart', 'Super Flexible', 'Super hot', 'Weather Changer'];
      
      this.model = new app.Hero(18, 'Dr IQ', this.powers[0], 'Chuck OverStreet');
      
      this.submitted = false;
    },
    onSubmit: function() {
      this.submitted = true;
    },
    // TODO: Remove this when we`re done
    diagnostic: function() {
      return JSON.stringify(this.model);
    },
  });
})(window.app || (window.app = {}));
