import { LightningElement } from 'lwc';

export default class Lwc_arrowfunction_eg extends LightningElement 
{
    myTitle ="Let's see how Arrow function works";
    
    Arrow()
    {
        alert('i am called but NOT inside an Arrow function');
    }
    Arrow2=()=>
    {
        alert('i am called from inside an Arrow function');
    }
}