import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Modals',
    openModal1: false,
    openModal2: false,
    actions: {
        toggleModal1: function() {
            this.toggleProperty('openModal1');
        },
        toggleModal2: function() {
            this.toggleProperty('openModal2');
        },
        submit: function() {
            this.toast.success('Modal OK');
            this.set('openModal2', false);
        }
    }
});
