
class SmallDeviceViewPort extends ViewPort {
    constructor(maxWidth = 767, minWidth = 481) {

        super(minWidth, maxWidth, 200);

        this.columnSize = 6;
        this.largeImageStyle = {
            width: "80%",
            height: "100%",
            marginLeft: "10%",
        };
    }

}