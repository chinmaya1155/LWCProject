public with sharing class leadclass_040923 

{
    @AuraEnabled(cacheable=true)
    public static List<Lead> getmeleads() {
        try {
            return [Select Id,Name,Industry,Company,Status,Email from Lead Limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }    
}