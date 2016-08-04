import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
        this.controllerFor('login.password-recovery').setProperties({
            email: null
        });
    }
});
