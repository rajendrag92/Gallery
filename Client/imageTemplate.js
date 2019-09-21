
'use strict';

class ImageTemplate {

    constructor(imageData, rootElement = "", size) {
        this.imageData = imageData;
        this.rootElement = rootElement;
        this.size = size;
        this.isLargeView = false;
    }

    DrawImage(srcUrl) {
        let _this = this;
        let image = new Image()
        image.src = srcUrl;
        image.width = this.size.width;
        image.height = this.size.height;
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
        let largeView = new ImageLargeView(this.imageData, this.size);
    }
}