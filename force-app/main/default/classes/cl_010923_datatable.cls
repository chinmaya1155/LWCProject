public with sharing class cl_010923_datatable 
{
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList()
        {
            return [Select Id,FirstName,LastName,Phone,Email from Contact Limit 10];
            //this way also you can write
            // list<Contact> lcont = [Select Id,FirstName,LastName,Phone,Email from Contact Limit 10];
            // return lcont;
        }
}