import { LightningElement } from 'lwc';
export default class Lwc_eventparent_volume_080923 extends LightningElement 
{
    vol=0;
    handlevolincre(event)
    {
        this.vol=this.vol+1;
    }
    handlevoldecre(event)
    {
        if(this.vol>0)
        {
            this.vol=this.vol-1;
        }
    }
}