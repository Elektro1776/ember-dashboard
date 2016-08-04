import Ember from 'ember';
import flotChartsMixin from '../../mixins/flot-charts';
import morrisChartsMixin from '../../mixins/morris-charts';
import  '../../utils/morris-fix';

export default Ember.Controller.extend(flotChartsMixin, morrisChartsMixin, {
    breadCrumb: 'Dashboard v2',
});
