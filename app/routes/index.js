export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('dashboards.dashboard-v2');
  }
});
