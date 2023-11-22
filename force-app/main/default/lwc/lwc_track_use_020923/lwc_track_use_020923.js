import { LightningElement,track } from 'lwc';

export default class Lwc_track_use_020923 extends LightningElement 
{
    @track FullName={fname:"",lname:""};
    handleEnter(event)
    {
        const eventname=event.target.name;
        if(eventname==='fname')
        {
            this.FullName.fname=event.target.value;            
        }
        else if(eventname==='lname')
        {
            this.FullName.lname=event.target.value;
        }
    }    
}