'use strict'

class ImageLargeView {

    constructor(imageData, size) {
        this.imageData = imageData;
        this.size = size;
        this.largeView = document.getElementById('largeImage');
        this.DrawLargeView();
    }

    CloseLargeView() {
        this.largeView.innerHTML = "";
        this.largeView.style.display = "none";
    }

    // DrawLargeView() {

    //     let _this = this;

    //     this.ctx.canvas.style.width = `${window.innerWidth}px`;
    //     this.ctx.canvas.style.height = `${window.innerHeight}px`;
    //     this.ctx.canvas.style.position = "fixed";
    //     this.ctx.canvas.style.top = 0;
    //     this.ctx.canvas.style.opacity = 2;
    //     this.ctx.canvas.style.display ="initial";

    //     this.ctx.fillStyle = 'lightGray';
    //     this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    //     let image = new Image();
    //     image.src = this.imageData.urls.regular;

    //     image.onload = function () {
    //         _this.ctx.drawImage(image, 10, 0,  _this.size.width * 0.3, _this.size.height * 0.3);
    //     };

    //     this.ctx.canvas.onclick = function(){
    //         _this.CloseLargeView();
    //     };

    // }

    DrawLargeView() {
        
        let closeButton = document.createElement("div");
        closeButton.innerText = "Close";
        closeButton.style.margin = "0% 0% 97% 80%";
        closeButton.style.cursor = "pointer";
        closeButton.onclick = function(){
            _this.CloseLargeView();
        };
        this.largeView.append(closeButton);

        let image = new Image(), _this = this;
        image.src = this.imageData.urls.regular;
        image.style.width = "40%";
        image.style.height = "100%";
        image.style.margin ="0% 30% 0% 30%";
        image.style.cursor = "pointer";
        image.onclick = function(){
            _this.CloseLargeView();
        }
        this.largeView.append(image);

        this.largeView.style.width = '100%';
        this.largeView.style.height = '100%';
        this.largeView.style.position = "fixed";
        this.largeView.style.top = 0;
        this.largeView.style.opacity = 2;
        this.largeView.style.display = "initial";
        this.largeView.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.largeView.style.zIndex = "2";
        

        this.largeView.onclick = function(){
            _this.CloseLargeView();
        }
    }

}