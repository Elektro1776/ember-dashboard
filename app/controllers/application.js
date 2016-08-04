import config from '../config/environment';

export default Ember.Controller.extend({
    breadCrumb: 'Home',
    showNavigationBar: true,
    windowWidth: 0,
    topBarClass: '',
    bottomBarClass: '',

    // Theme Options
    //
    autoHideMenu: false,
    nonFixedTopBar: false,
    nonFixedBottomBar: false,
    hideTopToolbar: false,
    hideBottomToolbar: false,
    hideBreadCrumbs: false,
    //

    resize: function() {
        $(window).resize(this.onResize.bind(this));
    }.on('init'),

    onResize: function(event, action) {

        if (this.get('autoHideMenu')) {
            if (action !== 'click' && this.get('windowWidth') !== action && event.target.window === event.target) {
                Ember.run.debounce(this, function() {
                    if ($(document).width() >= 900 && $(document).width() <= 1024) {
                        this.set('showNavigationBar', false);
                    } else if ($(document).width() >= 1264) {
                        this.set('showNavigationBar', true);
                    }
                }, 100);
            }
        }
    },

    actions: {
        toggleNavBar: function() {

            this.toggleProperty('showNavigationBar');
            this.set('windowWidth', $(document).width());

            // Emmit resize event to resize some charts libraries
            //
            Ember.run.next(this, function(){
                setTimeout(function(){
                    $(window).trigger('resize', ['click']);
                }, 400);
            });
            //

            // Center toast view depending on expanded or collapsed app-container
            //
            if (this.get('showNavigationBar')) {
                config['ember-toastr'].toastrOptions.positionClass = 'toast-top-center toast-options ember-dashboard-toast-long';
            } else {
                config['ember-toastr'].toastrOptions.positionClass = 'toast-top-center toast-options ember-dashboard-toast-short';
            }
            //

        },
        logout: function() {
            this.toast.info('Logout');
        }
    }
});
