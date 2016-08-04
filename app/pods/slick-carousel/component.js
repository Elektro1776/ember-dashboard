import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {
    options: null,
    didInsertElement: function() {
      this.$().slick(this.get('options'));
    }
});
