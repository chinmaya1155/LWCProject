import { LightningElement } from 'lwc';

export default class Parent_020923 extends LightningElement 
{
    clickmeparent()
    {
        this.template.querySelector("c-child_020923").clickme();
    }
}