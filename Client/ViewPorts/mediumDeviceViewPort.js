

'use strict';
class MediumDeviceViewPort extends ViewPort {

    constructor(maxWidth = 1024, minWidth = 768) {

        super(minWidth, maxWidth, 400);

        this.columnSize = 12;
        this.largeImageStyle = {
            width: "80%",
            height: "100%",
            marginLeft: "10%",
        };

    }

}