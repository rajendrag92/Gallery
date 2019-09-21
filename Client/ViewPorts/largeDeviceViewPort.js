class LargeDeviceViewPort extends ViewPort {
    constructor(maxWidth = 2000, minWidth = 1025) {

        super(minWidth, maxWidth, 400);
        this.columnSize = 3;
    }
}