import { LightningElement,wire,track,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from "lightning/navigation";

export default class Lwc_ssc_wire_contact_070923 extends LightningElement 
{
    @track confirstName;
    @track condlastName;
    @track conPhone;
    @track conEmail;
    @track conFaxNo;
    @api recordId;

    confname(event)  { this.confirstName = event.target.value;  }
    conlname(event)  { this.condlastName = event.target.value;  }
    conph(event)     { this.conPhone = event.target.value;      }
    conemail(event)  { this.conEmail = event.target.value;      }
    confax(event)    { this.conFaxNo = event.target.value;      }

    craeteanewrecord()
    {
        const FIELDS = {'FirstName': this.confirstName,'LastName': this.condlastName,'Phone':this.conPhone,'Email':this.conEmail,'Fax':this.conFaxNo};
        const recordData ={apiName:'Contact',FIELDS};
        createRecord(recordData).then(response=>{
            alert('Contact created with id: '+ response.Id);
            this.recordId=response.Id;
        }).catch(error=>{
            alert('Contact cannot be created has error:' + error.body.message);
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName:'home',
                },
            });
        });        
    }
    deleteme()
    {
        deleteRecord(this.recordId).then(response=>{
            alert('Contact deleted');
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName:'home',
                },
            });
        }).catch(error=>{
            alert('Contact cannot be deleted');
        });    
    }
}