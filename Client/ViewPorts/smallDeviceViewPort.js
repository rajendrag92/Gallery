
class SmallDeviceViewPort extends ViewPort {
    constructor(maxWidth = 767, minWidth = 481) {

        super(minWidth, maxWidth);

        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.columnSize = 6;
        this.height = 200;

    }
}