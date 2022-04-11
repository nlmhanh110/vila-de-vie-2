export class Reservation {
    constructor(
        public address: string,
        public email: string,
        public lastname: string, public firstname: string,
        public paymentMethod: string,
        public phone: string
    ) { }
}