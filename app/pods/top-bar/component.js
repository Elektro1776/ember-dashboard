import Ember from 'ember';

export default Ember.Component.extend({
    menuText: '',
    open: false,
    actions: {
        toggleNavBar: function() {
            this.sendAction('toggleNavBarAction');
        },
        logout() {
            this.sendAction('logout');
        }
    }
});
