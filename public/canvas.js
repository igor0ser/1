function getDataUri(url, callback) {
    var image = new Image();
    image.crossOrigin="anonymous" 

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        // callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
}

getDataUri("http://s3-us-west-2.amazonaws.com/files.staging-pro.mashbooths.com/microsite_images/images/000/001/778/original/MB_20150821_130815.jpg?1528461416", () => {
  console.log("success");
});