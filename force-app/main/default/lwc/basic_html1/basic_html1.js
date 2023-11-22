import { LightningElement } from 'lwc';

export default class Basic_html1 extends LightningElement 
{
    callme()
    {
        alert('Hi this is executed from lwc js file');
    }
}