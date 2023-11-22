import { LightningElement,track } from 'lwc';

export default class Lwc_firstCSS_Eg_1107 extends LightningElement 
{
    @track Name;
    callme(event)
    {
        this.Name=event.target.value;
    }
}