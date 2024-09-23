// Define a class that represents the data structure for the server response
export class Info { 
    "url": string;
    "statusCode": number;
    "duration": number;
    "date": number

    constructor(url: string, statusCode: number, duration: number, date: number){
        this.url = url;
        this.statusCode = statusCode;
        this.duration = duration;
        this.date = date;
    }
}