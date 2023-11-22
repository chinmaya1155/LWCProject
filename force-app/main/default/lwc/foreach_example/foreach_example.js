import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/cl_010923_datatable.getContactList'

export default class Foreach_example extends LightningElement 
{
    @track data=[];
    @wire(getContactList) cont;
}