
'use strict';
class ViewPortFactory {

    constructor(viewPortWidth) {

        let largePort = new LargeDeviceViewPort();
        let mediumViewPort = new MediumDeviceViewPort();
        let smallViewPort = new SmallDeviceViewPort();
        let smallestViewPort = new SmallestDeviceViewPort();

        this.viewPorts = {};
        this.viewPorts[largePort.minWidth] = largePort;
        this.viewPorts[mediumViewPort.minWidth] = mediumViewPort;
        this.viewPorts[smallViewPort.minWidth] = smallViewPort;
        this.viewPorts[smallestViewPort.minWidth] = smallestViewPort;

        this.viewPorts[largePort.maxWidth] = largePort;
        this.viewPorts[mediumViewPort.maxWidth] = mediumViewPort;
        this.viewPorts[smallViewPort.maxWidth] = smallViewPort;
        this.viewPorts[smallestViewPort.maxWidth] = smallestViewPort;
    }

    GetViewPort(windowWidth) {

        let key = Object.keys(this.viewPorts).map(e => parseInt(e)).find(e => e >= windowWidth);

        return this.viewPorts[key];
    }

}