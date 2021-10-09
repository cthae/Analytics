//to block the window reload when navigating out. Helps debugging exit tracking.
window.onbeforeunload = function(){return false;}

//to access connected devices. To debug JS-based app implementations. As in React Native/Electron apps
chrome://inspect/#devices

//Just a snippet to find a cookie 
document.cookie.split('; ').find(row => row.startsWith(cookieName+'=')).split('=')[1]

//Just a snippet to declare the dataLayer for GTM and push an empty event
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event':'eventName'
});

//A snippet for sending JS events. Without the details payload.
document.getElementById('analytics').dispatchEvent(new CustomEvent("analyticsSPAViewLoaded"))

//Useful tool for event monitoring
monitorEvents(document.getElementById('analytics'),"analyticsSPAViewLoaded")

//This becomes useful... when you need to distinguish a navigation from a page refresh. 
function print_nav_timing_data() {
  // Use getEntriesByType() to just get the "navigation" events
  var perfEntries = performance.getEntriesByType("navigation");

  for (var i=0; i < perfEntries.length; i++) {
    console.log("= Navigation entry[" + i + "]");
    var p = perfEntries[i];
    // dom Properties
    console.log("DOM content loaded = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
    console.log("DOM complete = " + p.domComplete);
    console.log("DOM interactive = " + p.interactive);

    // document load and unload time
    console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
    console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));

    // other properties
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}