import Ember from 'ember';
import images from '../../utils/image-list';

export default Ember.Controller.extend({
    breadCrumb: 'Slick Carousel',
    images: images,
    options1: {
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        autoplay: true,
        focusOnSelect: true
    },
    options2: {
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: false,
        autoplay: true
    }
});
