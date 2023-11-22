import { LightningElement, wire,track} from 'lwc';
import getmeleads from '@salesforce/apex/leadclass_040923.getmeleads'

const column=   [    
                    { label: 'Lead Name', fieldName: 'Name' },
                    { label: 'Industry', fieldName: 'Industry'},
                    { label: 'Company Name', fieldName: 'Company' },
                    { label: 'Lead Status', fieldName: 'Status'},
                    { label: 'Lead Email Id', fieldName: 'Email' ,type:'email'},          
                ];

export default class LwcWireDemo_040923 extends LightningElement 
{

    @track col = column;
    @track mydata=[];
    // @wire(getmeleads) Lead;

    // //wiredMyLeads is function and passing 2 parameters. data and error which are system predefined prewritten
    // @wire(getmeleads)       
    // wiredMyLeads({data,error}){
    //     if(data){
    //         this.mydata=data;
    //     }
    //     else if(error){
    //         console.log('Encountered an error');
    //     }
    // }      
    // Imperative Method

    @track col = column;
    @track mydata=[];
    
    connectedCallback(){
        getmeleads()
        .then(result=>{
            this.mydata=result;
        })
        .catch(error=>{
            console.log('error has occured');
        })
    }
}