import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Text Editor',
    contentHeight: 400,
    postContent: 'Some intial contents go here. Lorem Ipsum is simply dummy text of the printing.',
    editingDisabled: false,

    actions: {
        changeHeight: function(someObject) {
            var height = someObject.doSomeCalculationToGetHeight();
            this.set('contentHeight', height);
        }
    }
});

