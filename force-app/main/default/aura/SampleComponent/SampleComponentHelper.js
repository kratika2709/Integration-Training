({
    getResponse : function(component) {
     var action= component.get("c.getCalloutResponseContents");
     action.setParams({
         "url": 'http://data.fixer.io/api/latest?access_key=8b65f016cf6d27fd3911c4afdc02b370'
     });
     action.setCallback(this,function(response){
         var state = response.getState();
         console.log('Result--->',response.getReturnValue())
         component.set("v.response",response.getReturnValue());    
         var getAllRates = component.get("v.response")['rates'];
         console.log(getAllRates); 
         var CurrencyList =[];
         for (var key in getAllRates){
            CurrencyList.push(key+ '='+getAllRates[key]);
         }   
         component.set("v.ListOfCurrency",CurrencyList);
     });
     $A.enqueueAction(action);
    },
})
