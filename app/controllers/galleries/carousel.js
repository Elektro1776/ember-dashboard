import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Carousel',
    imageList: [
        { src: 'images/wide/1.jpg', caption: 'Wild cats'},
        { src: 'images/wide/2.jpg', caption: 'Ocean'},
        { src: 'images/wide/3.jpg', caption: 'Desert'},
        { src: 'images/wide/4.jpg', caption: 'Mount Rushmore'},
        { src: 'images/wide/5.jpg', caption: 'Japan #1'},
        { src: 'images/wide/6.jpg', caption: 'Japan #2'},
    ],
    activeFirstImage: Ember.on('init', function() {
        if (this.get('imageList') && this.get('imageList.length') > 0) {
            this.set('imageList.firstObject.active', true);
        }
    })
});
