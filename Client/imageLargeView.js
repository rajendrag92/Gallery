
class ImageLargeView {

    constructor(imageData, viewPort) {
        this.imageData = imageData;
        this.viewPort = viewPort;
        this.imagePlaceholder = document.getElementById('imagePlaceHolder');
        this.InitializeOverLay();
        this.DrawLargeView();
    }

    InitializeOverLay() {
        this.largeView = document.getElementById('largeImage');

        this.largeView.style.width = '100%';
        this.largeView.style.height = '100%';
        this.largeView.style.position = "fixed";
        this.largeView.style.top = 0;
        this.largeView.style.opacity = 2;
        this.largeView.style.cursor = "pointer";
        this.largeView.style.display = "initial";
        this.largeView.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.largeView.style.zIndex = "2";

        this.largeView.onclick =  () => {
            this.CloseLargeView();
        };

    }

    CloseLargeView() {
        this.imagePlaceholder.innerHTML = "";
        this.largeView.style.display = "none";
    }

    DrawLargeView() {
        this.AppendImage();
        this.AppendCloseButton();
    }

    AppendImage() {
        let image = new Image();
        image.src = this.imageData.urls.regular;
        image.style.width = this.viewPort.largeImageStyle.width;
        image.style.height = this.viewPort.largeImageStyle.height;
        image.style.marginLeft = this.viewPort.largeImageStyle.marginLeft;
        image.style.cursor = "pointer";
        image.style.float = "left";
        image.onclick = () => {
            this.CloseLargeView();
        }
        this.imagePlaceholder.appendChild(image);
    }

    AppendCloseButton() {
        let closeButton = document.createElement("div");
        closeButton.innerText = "Close";
        closeButton.style.margin = "0% 0% 97% 2%";
        closeButton.style.cursor = "pointer";
        closeButton.style.float = "left";
        closeButton.style.fontSize = "20px";
        closeButton.style.color = "wheat";

        closeButton.onclick = () => {
            this.CloseLargeView();
        };

        this.imagePlaceholder.appendChild(closeButton);

    }

}