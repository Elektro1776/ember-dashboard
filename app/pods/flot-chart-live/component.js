import flotChart from 'ember-cli-flot/components/flot-chart';

export default flotChart.extend({

    redraw: function() {
        if (this.get('plot')) {
            this.get('plot').setData(this.get('data'));
            this.get('plot').draw();
        }
    }.observes('data'),

  style: function () {
    return new Ember.Handlebars.SafeString("height: " + this.get('height'));
  }.property("height"),

});
