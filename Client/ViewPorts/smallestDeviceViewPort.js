class SmallestDeviceViewPort extends ViewPort {

    constructor(maxWidth = 480, minWidth = 320) {

        super(minWidth, maxWidth);

        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.columnSize = 12;

        this.height = 200;
    }
}