class LargeDeviceViewPort extends ViewPort {
    constructor(maxWidth = 2000, minWidth = 1025) {

        super(minWidth, maxWidth);

        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.columnSize = 4;
        this.height = 400;
    }
}