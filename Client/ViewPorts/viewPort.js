
'use strict';
class ViewPort {

    constructor(maxWidth, minWidth, height = 0) {

        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.height = height;
        this.gridSize = 12;
        this.columnSize = 1;
    }

    GetImageSize() {

        return {
            width: (this.maxWidth / 12) * this.columnSize,
            height: this.height
        }
    }
}