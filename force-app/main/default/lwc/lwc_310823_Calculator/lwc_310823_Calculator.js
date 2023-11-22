import { LightningElement,track} from 'lwc';
// Track is used to track where ever any value changes. 
export default class Lwc_310823_Calculator extends LightningElement 
{
    @track ResVal;
    Num1;
    Num2;
    callme(event)
    {
        const holding = event.target.name;
        if(holding=='inp1'){this.Num1=event.target.value}
        else{this.Num2=event.target.value}
    }

    Add()
    {
        this.ResVal=parseInt(this.Num1)+parseInt(this.Num2);
    }
    Sub()
    {
        this.ResVal=parseInt(this.Num1)-parseInt(this.Num2);
    }
    Mul()
    {
        this.ResVal=parseInt(this.Num1)*parseInt(this.Num2);
    }
}