
class MediumDeviceViewPort extends ViewPort {

    constructor(maxWidth = 1024, minWidth = 768) {

        super(minWidth, maxWidth);

        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.columnSize = 12;
        this.height = 400;

    }
}