import { LightningElement,api } from 'lwc';

export default class Child_020923 extends LightningElement 
{
    @api childvar='child variable name';
    
    
    @api clickme()
    {
      this.childvar='child variable name changed after submit clicked';
    }

}