import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Slider',
    value: 50,
    min: 0,
    max: 100,
    tooltip: 'always',
    handle: 'round',
    disabledState: 'false',
    mood: 'warning',
    rangeValue: 100,
    range: [2, 8],
    disabled: function() {
        if (this.get('disabledState') === 'true') {
            return true;
        } else {
            return false;
        }
    }.property('disabledState'),
});
