({
    getResponse : function(component) {
     var action= component.get("c.getCalloutResponseContents");
     action.setParams({
         "url": 'http://data.fixer.io/api/latest?access_key=8b65f016cf6d27fd3911c4afdc02b370'
     });
     action.setcallback(this,function(response){
         var state = response.getState();
         component.set("v.response",response.getReturnValue());
     })
    }
})
