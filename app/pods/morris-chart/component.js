export default Ember.Component.extend({
    classNames: ['morris-chart'],
    type: 'line',
    behaveLikeLine: false,
    options: null,
    chartData: null,
    morrisChart: null,

    updateData: function() {
        if (this.get('chartData')) {
            this.get('morrisChart').setData(this.get('chartData'));
        }
    }.observes('chartData'),

    didInsertElement: function() {
        var options = null;

        if (this.get('options')) {
            options = this.get('options');
        }

        if (this.get('chartData')) {
            options.data = this.get('chartData');
        }

        options.element = this.elementId;

        switch (this.get('type')) {
            case 'area':
                this.set('morrisChart', new Morris.Area(options));
                break;
            case 'line':
                this.set('morrisChart', new Morris.Line(options));
                break;
            case 'donut':
                this.set('morrisChart', new Morris.Donut(options));
                break;
            case 'bar':
                this.set('morrisChart', new Morris.Bar(options));
                break;
            default:
                this.set('morrisChart', new Morris.Line(options));
        }
    },

    actions: {
        // Declare component actions
    }
});
