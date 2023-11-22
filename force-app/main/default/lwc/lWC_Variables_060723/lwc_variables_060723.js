import { LightningElement } from 'lwc';

export default class LWC_Variables_060723 extends LightningElement {
    name='Chinmaya Sahoo';
    age=40;
    sal=123456.50;
    city='Bangalore';
    extra;
    var1;
    Callme()
    {
        //variable called with this. again it is case sensitive
        this.name='Damayanti Sahu';
        this.age=35;
        this.extra='be my guest!'
    }
}