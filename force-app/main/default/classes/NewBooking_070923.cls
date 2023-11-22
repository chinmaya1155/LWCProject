public with sharing class NewBooking_070923 
{
    @AuraEnabled(cacheable = true)
    public static String createNewBooking(String bname,String brating, String bindustry)
    {
        String res;
        try 
        {
            Account a = New Account();
            a.Name=bname;
            a.Rating=brating;
            a.Industry=bindustry;
            Insert a;
            res = 'New Account Created with Id: '+a.Id;

        } 
        catch (Exception e) 
        {
            res='Account creation failed';
        }
        Return res;
    }
}