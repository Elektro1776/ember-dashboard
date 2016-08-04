const totalImages = 30;
var images = [];

for (let i=1; i<=totalImages; i++) {
    let img = 'images/gallery/'+i+'.jpg';
    images.push({
        src: img,
        thumb: img,
        caption: 'Slick Cat #' + i
    });
}

export default images;
