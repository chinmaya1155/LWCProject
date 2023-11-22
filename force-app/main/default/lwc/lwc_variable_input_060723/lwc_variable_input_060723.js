import { LightningElement } from 'lwc';

export default class Lwc_variable_input_060723 extends LightningElement 
{
    name;
    city;
    sal=5;
    dob;
    name2;
    finalsal=5;
    Showme()
    {
        const a=this.sal;
        this.finalsal=a*2;
        
    }
}