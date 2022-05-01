export class Book_now{
    checkIn: Date;
    checkOut:Date;
    numOfRoom:number
    constructor(){
        this.checkIn = new Date();
        this.checkOut = new Date();
        this.numOfRoom = 0;
    }
}