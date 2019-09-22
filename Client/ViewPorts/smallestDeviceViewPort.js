
class SmallestDeviceViewPort extends ViewPort {

    constructor(maxWidth = 480, minWidth = 320) {

        super(minWidth, maxWidth, 200);

        this.columnSize = 12;
        this.largeImageStyle = {
            width: "80%",
            height: "100%",
            marginLeft: "10%",
        };

    }

}