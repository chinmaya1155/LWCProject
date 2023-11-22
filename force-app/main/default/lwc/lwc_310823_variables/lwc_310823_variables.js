import { LightningElement } from 'lwc';

export default class Lwc_310823_variables extends LightningElement 
{
    name='chinmaya';
    age=35;
    job='engineer';
    salary=45000;
    empid;
    callme()
    {
        this.empid=1234567890;
        this.age=45;
    }
}