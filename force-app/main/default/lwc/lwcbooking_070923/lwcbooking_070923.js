import { LightningElement,api,track,wire } from 'lwc';
import createNewBooking from '@salesforce/apex/NewBooking_070923.createNewBooking'

export default class Lwcbooking_070923 extends LightningElement 
{
    @track accname;
    @track accrating;
    @track accindustry;

    htmlname(event)
    {
        this.accname=event.target.value;
    }
    htmlrating(event)
    {
        this.accrating=event.target.value;
    }
    htmlindustry(event)
    {
        this.accindustry=event.target.value;
    }
     //wrong not working   
    @wire(createNewBooking,{bname:'$accname',bratingating:'$accrating',bindustry:'$accindustry'})Account;
   
}