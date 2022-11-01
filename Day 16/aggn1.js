var smartPhone = /** @class */ (function () {
    function smartPhone() {
        this.coordinates = 30;
        this.startVideo = "Video playing";
        this.stopVideo = "Video stoped playing";
        this.pauseVideo = "Video paused";
    }
    smartPhone.prototype.getCoordinates = function () {
        console.log("The coordinates are " + this.coordinates);
    };
    smartPhone.prototype.start = function () {
        console.log(this.startVideo);
    };
    smartPhone.prototype.stop = function () {
        console.log(this.stopVideo);
    };
    smartPhone.prototype.pause = function () {
        console.log(this.pauseVideo);
    };
    return smartPhone;
}());
var obj1 = new smartPhone;
obj1.getCoordinates();
obj1.start();
obj1.stop();
obj1.pause();
