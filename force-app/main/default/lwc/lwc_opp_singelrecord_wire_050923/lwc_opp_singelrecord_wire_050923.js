import { LightningElement,api,track,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS=[
                'Opportunity.Name',
                'Opportunity.Amount',
                'Opportunity.StageName'
            ];
export default class Lwc_opp_singelrecord_wire_050923 extends LightningElement 
{
    @api recordId = '0065j00000SvJMfAAN';
    @wire(getRecord, {recordId:'$recordId', fields:FIELDS}) Opportunity;

    get name()
    {
        return this.Opportunity.data.fields.Name.value;
    }
    get Amount()
    {
        return this.Opportunity.data.fields.Amount.value;
    }
    get StageName()
    {
        return this.Opportunity.data.fields.StageName.value;
    }
}