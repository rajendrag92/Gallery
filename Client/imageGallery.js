'use strict';

class ImageGallery {

    constructor(baseUrl, rootElement) {
        this.index = 0;
        this.baseUrl = baseUrl
        this.rootElement = rootElement;
        this.BindCustomEvents();
    }

    async DrawImageGallery() {
        let viewPort = new ViewPortFactory().GetViewPort(window.innerWidth);
        let repo = new ImageGalleryRepositry(this.baseUrl);
        let pageData = await repo.GetImageGallery(this.index);

        pageData.forEach(element => {
            let image = new ImageTemplate(element, this.rootElement, viewPort);
            image.Append();
        });
    }

    BindCustomEvents() {

        window.onscroll = () => {
            this.index++;
            this.DrawImageGallery();
        };

        window.onload = () => {
            this.DrawImageGallery();
        };

        window.onresize = () => {
            this.DrawImageGallery();
        }
    }
}

(function () {
    let imageGallery = new ImageGallery(window.location.href, "imageGallery");
}
)()
