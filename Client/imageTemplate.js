
'use strict';

class ImageTemplate {

    constructor(imageData, rootElement = "", size) {
        this.imageData = imageData;
        this.rootElement = rootElement;
        this.size = size;
    }

    DrawImage(srcUrl) {

        let image = new Image()
        image.src = srcUrl;
        image.width = this.size.width;
        image.height = this.size.height;
        image.setAttribute("style","margin:10px ") 

        document.getElementById(`${this.rootElement}`).appendChild(image);

    }

    Append() {
        this.DrawImage(this.imageData.urls.regular);
    }
}