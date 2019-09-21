
class SmallDeviceViewPort extends ViewPort {
    constructor(maxWidth = 767, minWidth = 481) {

        super(minWidth, maxWidth, 200);

        this.columnSize = 6;
    }
}