export default Ember.Component.extend({
    classNames: ['options-list-component'],

    // default selection
    selectedMenu: 'home',
    fixedTopToolbar: true,
    fixedBottomToolbar: true,
    hideTopToolbar: false,
    hideBottomToolbar: false,
    hideBreadCrumbs: false,

    updateNavigationOnInit: function() {
        var currentPath = this.get('currentPath'),
            baseRoute = currentPath.split('.')[0];

        if (baseRoute) {
            switch (baseRoute) {
                case 'charts':
                    this.set('selectedMenu', 'charts');
                    break;
                case 'realtime':
                    this.set('selectedMenu', 'realtime');
                    break;
                case 'widgets':
                    this.set('selectedMenu', 'widgets');
                    break;
                case 'forms':
                    this.set('selectedMenu', 'forms');
                    break;
                case 'layouts':
                    this.set('selectedMenu', 'layouts');
                    break;
                case 'ui-controls':
                    this.set('selectedMenu', 'controls');
                    break;
                case 'tables':
                    this.set('selectedMenu', 'tables');
                    break;
                case 'grids':
                    this.set('selectedMenu', 'grids');
                    break;
                case 'galleries':
                    this.set('selectedMenu', 'galleries');
                    break;
                case 'login':
                    this.set('selectedMenu', 'login');
                    break;
                case 'landing':
                    this.set('selectedMenu', 'landing');
                    break;
                default:
                    this.set('selectedMenu', 'home');
            }
        }
    }.on('init').observes('currentPath')

});
