import { LightningElement } from 'lwc';
export default class Lwc_event_080923 extends LightningElement 
{
    btnincrease(event)
    {
     const eventinc = new CustomEvent('eventincre');
     this.dispatchEvent(eventinc);
    }
    btndecrease(event)
    {
        this.dispatchEvent(new CustomEvent('eventdecre'));
    }
}