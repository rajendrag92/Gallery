
class MediumDeviceViewPort extends ViewPort {

    constructor(maxWidth = 1024, minWidth = 768) {

        super(minWidth, maxWidth, 400);

        this.columnSize = 12;

    }
}