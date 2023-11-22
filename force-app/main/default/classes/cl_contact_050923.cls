public with sharing class cl_contact_050923 
{
    @AuraEnabled(cacheable=true)
    public static List<Contact> myContacts()
    {
        try 
        {
            return [Select Id,FirstName,LastName,Phone,Email from Contact Limit 10];
        } 
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }    
}