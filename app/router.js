import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    this.route('dashboards', {}, function() {
        this.route('dashboard-v1');
        this.route('dashboard-v2');
        this.route('dashboard-v3');
    });

    this.route('charts', {}, function() {
        this.route('charts-v1', {path: 'charts/v1'});
        this.route('charts-v2', {path: 'charts/v2'});
        this.route('charts-v3', {path: 'charts/v3'});
        this.route('charts-v4', {path: 'charts/v4'});
    });

    this.route('realtime', {}, function() {
        this.route('flot-charts');
        this.route('morris-charts');
    });

    this.route('widgets', {}, function() {
        this.route('metrics');
        this.route('numbers');
        this.route('dates');
    });

    this.route('forms', {}, function() {
        this.route('simple-validation');
        this.route('input-masks');
        this.route('date-picker', { path:'date-time-picker' });
        this.route('power-select');
        this.route('text-editor');
        this.route('file-upload');
        this.route('credit-card');
    });

    this.route('ui-controls', {}, function() {
        this.route('breadcrumbs');
        this.route('toastr');
        this.route('slider');
        this.route('spinner');
        this.route('font-awesome');
        this.route('calendar');
        this.route('modals');
        this.route('models-table');
    });

    this.route('galleries', {}, function() {
        this.route('lightbox');
        this.route('carousel');
        this.route('justified');
        this.route('float-grid');
        this.route('masonry');
        this.route('slick');
    });

    this.route('login', {}, function() {
        this.route('login-form');
        this.route('registration-form');
        this.route('password-recovery');
        this.route('lock-screen');
    });

    this.route('landing', {}, function() {
        this.route('landing-page');
    });

});

export default Router;
