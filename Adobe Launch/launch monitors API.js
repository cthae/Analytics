/*
This is a snippet featuring the usage of Launch monitors API in conjuction with gtag to log in GA the firing rules
Useful mostly for the first stage cleanup of misgoverned Launch properties
This is meant to be part of s code or a high-priority page load rule
This API is not advised to be used in prod because Adobe doesn't want to commit to maintaining the api.
But it's fine to use it in prod with that fact in mind.
*/
try{
  if(typeof window._satellite === 'object'){
    window._satellite._monitors = window._satellite._monitors || [];
    window._satellite._monitors.push({
      ruleCompleted: function (event) {
        gtag('event', 'Launch Rule Fired', {
          'name' : event?.rule?.name //make sure the custom dimenion is defined in GA.
        });
      }
    });
  }
} catch(err) {
  _satellite.logger.error("@@@LAUNCH ERROR || S Code:  || ERROR: " + err);
}
