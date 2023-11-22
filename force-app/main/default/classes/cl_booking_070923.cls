public with sharing class cl_booking_070923 
{
    @AuraEnabled
    public static String createNewBooking(String bcomment,String bfrom, String bto)
    {
        String Result;
        try 
        {
            Booking__c a = New Booking__c();
            a.Comments__c=bcomment;
            a.From__c=bfrom;
            a.To__c=bto;
            Insert a;
            Result = 'New Booking Created with Id: '+a.Id;

        } 
        catch (Exception e) 
        {
            Result='Booking Failed';
        }
        Return Result;
    }
}