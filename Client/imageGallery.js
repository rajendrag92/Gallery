'use strict';
class ImageGallery {

    constructor(baseUrl, rootElement) {
        this.index = 0;
        this.baseUrl = baseUrl
        this.rootElement = rootElement;
        this.BindCustomEvents();
        this.last_known_scroll_position = 0;
        this.ticking = false;
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
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                this.index++;
                this.DrawImageGallery();
            }
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
