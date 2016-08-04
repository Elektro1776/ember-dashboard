export default Ember.Route.extend({
    setupController: function(controller) {
        controller.set('active', true);
    },

    deactivate: function() {
        this.set('controller.active', false);
    }
});
