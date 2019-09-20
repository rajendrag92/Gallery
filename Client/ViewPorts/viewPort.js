'use strict'
class ViewPort {

    constructor(width, height) {

        this.width = width;
        this.height = height;
        this.gridSize = 12;
        this.columnSize = 1;
    }

    GetImageSize() {

        return {
            width: (this.width / 12) * this.columnSize,
            height: this.height
        }
    }
}