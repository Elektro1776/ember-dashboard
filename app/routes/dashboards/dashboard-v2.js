import Ember from 'ember';

let hideBreadCrumbs, topBarClass, bottomBarClass, contentClass;

export default Ember.Route.extend({
    setupController: function() {
        hideBreadCrumbs = this.controllerFor('application').get('hideBreadCrumbs');
        topBarClass = this.controllerFor('application').get('topBarClass');
        bottomBarClass = this.controllerFor('application').get('bottomBarClass');
        contentClass = this.controllerFor('application').get('contentClass');

        this.controllerFor('application').set('hideBreadCrumbs', true);
        this.controllerFor('application').set('topBarClass', 'white-bg');
        this.controllerFor('application').set('bottomBarClass', 'white-bg');
        this.controllerFor('application').set('contentClass', 'light-silver-bg');
    },

    deactivate: function() {
        this.controllerFor('application').set('hideBreadCrumbs', hideBreadCrumbs);
        this.controllerFor('application').set('topBarClass', topBarClass);
        this.controllerFor('application').set('bottomBarClass', bottomBarClass);
        this.controllerFor('application').set('contentClass', contentClass);
    }
});
