

'use strict';
class ImageTemplate {

    constructor(imageData, rootElement = "", viewPort) {
        this.imageData = imageData;
        this.rootElement = rootElement;
        this.viewPort = viewPort;
        this.isLargeView = false;
    }

    DrawImage(srcUrl) {
        let _this = this;
        let image = new Image();
        let imageSize = this.viewPort.GetImageSize();

        image.src = srcUrl;
        image.width = imageSize.width;
        image.height = imageSize.height;
        image.style.margin = "10px";
        image.style.cursor = "pointer";

        image.onclick = function () {
            _this.ShowLargeView();
        }

        document.getElementById(`${this.rootElement}`).appendChild(image);

    }

    Append() {
        this.DrawImage(this.imageData.urls.regular);
    }

    ShowLargeView() {
        this.isLargeView = !this.isLargeView;
        let largeView = new ImageLargeView(this.imageData, this.viewPort);
    }
}