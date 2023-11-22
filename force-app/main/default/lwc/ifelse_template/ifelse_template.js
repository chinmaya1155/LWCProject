import { LightningElement,track } from 'lwc';
export default class Ifelse_template extends LightningElement 
{
    @track onclickbuttonlabel='Show';
    mytitle='if else testing working or not tell me';
    @track onvisible= false;
    handleclick(event)
    {
        const label = event.target.label;
        if(label==='Show')
        {
            this.onclickbuttonlabel='Hide';
            this.onvisible=true;
        }
        else if(label==='Hide')
        {
            this.onclickbuttonlabel='Show';
            this.onvisible=false;
        }
    }
}