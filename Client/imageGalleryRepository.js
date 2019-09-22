
class ImageGalleryRepositry {

    constructor(baseUrl) {

        this.baseUrl = baseUrl;
        this.galleryCache = {};
    }

    GetImageGallery(index) {

        if (this.galleryCache[index] != undefined) {

            return this.galleryCache[index];

        } else {

            let url = `${this.baseUrl}GetImageGallery/?index=${index}`;
            return new Promise((resolve) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.galleryCache[index] = data;
                        resolve(data);
                    });
            });



        }

    }

}