import { LightningElement } from 'lwc';

export default class Lwc_310823_array1 extends LightningElement 
{
    cities=['Hyderabad','Kolkata','Bangalore','Pune','Nasik'];
    employee={
        'Name':'Chinmaya','Age':35,'Salary':45000,'Company':'HCL'
    }
    employees=[
        {'Name':'Chinmaya','Age':35,'Salary':45000,'Company':'HCL'},
        {'Name':'Priyangi','Age':32,'Salary':5000,'Company':'Capgemini'},
        {'Name':'Litu','Age':38,'Salary':85000,'Company':'BT'},
        {'Name':'Shreya','Age':23,'Salary':51000,'Company':'IBM'}
    ]
}