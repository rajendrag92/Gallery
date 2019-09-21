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
        let _this = this;

        window.onscroll = function () {
            _this.index++;
            _this.DrawImageGallery();
        };

        window.onload = function () {
            _this.DrawImageGallery();
        };

        window.onresize = function () {
            _this.DrawImageGallery();
        }
    }
}

(function () {
    let imageGallery = new ImageGallery(window.location.href, "imageGallery");
}
)()
