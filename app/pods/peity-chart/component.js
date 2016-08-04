export default Ember.Component.extend({
    classNames: ['peity-chart-component'],
    type: 'line',
    options: {},
    didInsertElement: function() {
        this.$('.peity-chart').peity(this.get('type'), this.get('options'));
    },
});
