import { LightningElement,track } from 'lwc';

export default class Lwc_Calculate_No_060723 extends LightningElement 
{
    @track resvalue;
    num1;
    num2;
    callme(event)
    {
        const eventname = event.target.name; //when any change event happens
        if(eventname=='aval')
        {
            this.num1=event.target.value
        }
        else
        {
            this.num2=event.target.value
        }
    }
    
    addme()
    {        
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue=' Addition of 2 number is : ' +(a+b);
    }
    sub()
    {        
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue=' Substraction of 2 number is : ' +(a-b);
    }
    mul()
    {        
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue=' Multiplication of 2 number is : ' +(a*b);
    }
}