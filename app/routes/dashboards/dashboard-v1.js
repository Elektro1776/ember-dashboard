import Ember from 'ember';

let hideBreadCrumbs;

export default Ember.Route.extend({
    setupController: function(controller) {
        // Store original values
        //
        hideBreadCrumbs = this.controllerFor('application').get('hideBreadCrumbs');
        //

        controller.set('active', true);

        // Dasboard v2 layout has disabled breadcrumbs by default
        //
        this.controllerFor('application').set('hideBreadCrumbs', true);
        //
    },

    deactivate: function() {
        this.set('controller.active', false);
        // Restore original values
        //
        this.controllerFor('application').set('hideBreadCrumbs', hideBreadCrumbs);
    }
});
