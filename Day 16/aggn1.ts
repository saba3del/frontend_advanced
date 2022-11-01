interface GPS
{
    coordinates:number

    getCoordinates():void;
}

interface MediaPlayer
{
    startVideo:string
    stopVideo:string
    pauseVideo:string

    start():void;
    stop():void;
    pause():void;
}

class smartPhone implements GPS,MediaPlayer{
    public coordinates:number = 30
    public startVideo:string = "Video playing"
    public stopVideo:string = "Video stoped playing"
    public pauseVideo:string = "Video paused"

    public getCoordinates(): void {
        console.log("The coordinates are " + this.coordinates)
    }

    public start(): void {
        console.log(this.startVideo)
    }

    public stop(): void {
        console.log(this.stopVideo)
    }

    public pause(): void {
        console.log(this.pauseVideo)
    }
}

var obj1:smartPhone = new smartPhone;
obj1.getCoordinates();
obj1.start();
obj1.stop();
obj1.pause();
