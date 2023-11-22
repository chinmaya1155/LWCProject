import { LightningElement } from 'lwc';

export default class Lwc_071023_Array extends LightningElement 
{
    cities=['Hyderabad','Chennai','Kolkata','Bhubaneswar','NewDelhi'];
    employee={'Name':'Chinmaya','Age':40,'City':'Bangalore','Salary':45000};
    employees=[
                {'Name':'Chinmaya','Age':40,'City':'Bangalore','Salary':45000},
                {'Name':'Tapas','Age':50,'City':'Chennai','Salary':35600},
                {'Name':'sitaram','Age':25,'City':'Gualior','Salary':60000},
                {'Name':'Gita','Age':34,'City':'Kolkata','Salary':80000},
                {'Name':'Lity','Age':30,'City':'Varanasi','Salary':23000}
              ]
}