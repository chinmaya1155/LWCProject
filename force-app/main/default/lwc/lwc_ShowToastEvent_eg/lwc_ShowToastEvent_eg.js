import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lwc_ShowToastEvent_eg extends LightningElement {

    sometitle = "Chinmaya test1";
    //1st function
    handleClick()
    {
        this.showToast(this.sometitle)
    }
    //2nd Function
    showToast(someargument) {
        alert(someargument);
        // const event = new ShowToastEvent({
        //     title:'show a toast demo', 
        //     message:'i am a message being callbe my toast event',
        //     variant:'success',
        // })
        // this.dispatchEvent(event);
    }
}