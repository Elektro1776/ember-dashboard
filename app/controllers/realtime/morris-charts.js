function data(offset) {
     var ret = [];
      for (var x = 0; x <= 360; x += 10) {
        var v = (offset + x) % 360;
        ret.push({
          x: x,
          y: Math.sin(Math.PI * v / 180).toFixed(4),
          z: Math.cos(Math.PI * v / 180).toFixed(4)
        });
      }
      return ret;
}

export default Ember.Controller.extend({
    breadCrumb: 'Morris Charts',

    nReloads: 0,
    chartElementID: null,
    chartData: data(0),
    active: false,

    options: {
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['sin()', 'cos()'],
        parseTime: false,
        ymin: -1.0,
        ymax: 1.0,
        hideHover: true,
        resize: true
    },

    update: function() {
        this.incrementProperty('nReloads', 1);
        this.set('chartData', data(5 * this.get('nReloads')));
    },

    startUpdating: function() {
        if (this.get('active')) {
            setTimeout(this.startUpdating.bind(this), 500);
            this.update();
        }
    }.observes('active')

});
