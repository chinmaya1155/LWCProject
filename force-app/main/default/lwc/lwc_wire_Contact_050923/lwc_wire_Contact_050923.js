import { LightningElement,track,wire } from 'lwc';
import myContacts from '@salesforce/apex/cl_contact_050923.myContacts';

const column =[
    {label: 'Contact First Name', fieldName: 'FirstName'},
    {label: 'Contact Last Name', fieldName: 'LastName'},
    {label: 'Contact Phone', fieldName: 'Phone', type:'phone'},
    {label: 'Contact Email', fieldName: 'Email', type:'email'} 
];

export default class Lwc_wire_Contact_050923 extends LightningElement 
{
    @track mycol=column;
    @track myData=[];
    @wire(myContacts) 
    MyContacts({data,error})
    {
        if (data){this.myData=data;}
        else if(error){
            console.log('Encountered an error');
        }

    }
}