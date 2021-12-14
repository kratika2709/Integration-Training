public class HttpCalloutctrl1{
  @AuraEnabled
    public static map<string,object> getCalloutResponseContents(string url){
      Http h = new Http();
      HttpRequest req = new HttpRequest();
      req.SetEndPoint(url);
      req.setmethod('GET');
      HttpResponse res = h.send(req);
      system.debug('response---->'+ res.getBody());
      map<string,object> resultsmap= (map<string,object>)JSON.deserializeUntyped(res.getBody());
      system.debug('resultsmap-->'+resultsmap);
      return resultsmap; 
    
    }


}
