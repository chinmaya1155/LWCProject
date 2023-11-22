import { LightningElement,track,wire} from 'lwc';
import getContactList from '@salesforce/apex/cl_010923_datatable.getContactList' //wire decorator
import { updateRecord } from 'lightning/uiRecordApi' //mandate for DML operation
import { refreshApex } from '@salesforce/apex'  //optional for refreshing
import { ShowToastEvent } from 'lightning/platformShowToastEvent'  //optional to display toast msg
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName'; //mandate field on which DML operation will happen
import LastName_FIELD from '@salesforce/schema/Contact.LastName'; //mandate field on which DML operation will happen
import ID_FIELD from '@salesforce/schema/Contact.Id'; //mandate field on which DML operation will happen

const columnname=[
    {label:'Contact First Name', fieldName:'FirstName', editable:true},
    {label:'Contact Last Name', fieldName:'LastName', editable:true},
    {label:'Contact Phone', fieldName:'Phone', type:'phone'},
    {label:'Contact Email', fieldName:'Email', type:'email'}
    ];

export default class Lwc_cl_010923_datatable extends LightningElement 
{
    @track col=columnname; //this is dynamic hence needs to be tracked
    @wire(getContactList) contact;
    @track draftValues;
    @track error;
   
    handleSave(event)
    {
        const fields ={};
        fields[ID_FIELD.fieldApiName]=event.detail.draftValues[0].Id;
        fields[FirstName_FIELD.fieldApiName]=event.detail.draftValues[0].FirstName;
        fields[LastName_FIELD.fieldApiName]=event.detail.draftValues[0].LastName;

        const recordInputs={fields};

        updateRecord(recordInputs)
        .then(()=>{
            alert("Record saved successfully");
            this.draftValues=[];    //clear all draft values
            return refreshApex(this.contact);
        }).catch(error =>{
            alert("record could not be saved"+error)
        });
    }
}