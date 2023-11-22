import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import PHONE from '@salesforce/schema/Account.Phone';
import FAX from '@salesforce/schema/Account.Fax';
import SIC from '@salesforce/schema/Account.Sic';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import WEBSITE from '@salesforce/schema/Account.Website';

export default class Lwc_wire_decorator_1 extends LightningElement 
{

    accountObject=ACCOUNT_OBJECT;
    myfields=[NAME,PHONE,FAX,SIC,INDUSTRY,WEBSITE];
   
}