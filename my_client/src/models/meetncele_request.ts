export class Meeting_Request {
    _id: any;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    address: string;
    quantity: number;
    note: string;
    meetingType: string;
    StartDate: Date;
    EndDate: Date;
    requestRoom: string; 

    constructor() {
        this._id = "";
        this.lastName = "";
        this.firstName = "";
        this.phone = "";
        this.email = "";
        this.address = "";
        this.quantity = 0;
        this.note="";
        this.meetingType = "";
        this.StartDate = new Date();
        this.EndDate = new Date();
        this.requestRoom= "";

    }



}