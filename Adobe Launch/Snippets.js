//to block the window reload when navigating out. Helps debugging exit tracking.
window.onbeforeunload = function(){return false;}

//to access connected devices. To debug JS-based app implementations. As in React Native/Electron apps
chrome://inspect/#devices

//just a useful thing to avoid typing:
s.linkTrackVars = s.apl(s.linkTrackVars, "eVar80", ",", ",");

//a simple try catch snippet for Launch. event.$rule.name is only available in rules. Don't use in extensions.
try {

} catch (err){
  _satellite.logger.error("@@@LAUNCH ERROR || RULE: " + event.$rule.name + " || ERROR: " + err);
}

// .pop(), but not mutating? EZ!
[1,2,3].slice(-1)[0];

//_satellite.cookie interface is not very intuitive (the expires in an object part):
_satellite.cookie.set("qwe", 123, {expires: 0.021})

//Just a snippet to find a cookie for when satellite.cookie.get is not applicable
document.cookie.split('; ').find(row => row.startsWith(cookieName+'=')).split('=')[1]

//What it says, basically. Decodes URI-encoded strings
decodeURIComponent(getCookie("s_pers"))

//Just a snippet to declare the dataLayer for GTM and push an empty event
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event':'eventName'
});

//Get current property name
_satellite.property.name

//To find out how long ago the library was built:
(function () {
  function formattedTimeSinceLastBuild() {
    var ms = new Date() - new Date(_satellite.buildInfo.buildDate);
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days";
  }

  const color = "lime"; //Feel free to change the color here. Personally I prefer lime since my console is dark. Green is more universal.
  const css = `text-shadow: 1px 1px 1px ${color}, 0 0 1em ${color}, 0 0 0.2em ${color};color: ${color};font-weight: 500;font-size: 1.3em;`;

  console.log(
    "%c Time since the last Launch build: >>> " + formattedTimeSinceLastBuild(),
    css
  );
  console.log("%c ENVIRONMENT: >>> " + _satellite.environment.stage.toUpperCase(), css);
  return ''; //to avoid the annoying undefined in the console.
})();

 
console.log("Time since the last Launch build: >>> " + formattedTimeSinceLastBuild());

//A useful callback for Launch
s.registerPostTrackCallback()

//Just an s.tl() snippet to avoid typing.
s.tl(true, 'o', "Link Name");

//A snippet for sending JS events. Without the details payload.
document.getElementById('analytics').dispatchEvent(new CustomEvent("analyticsSPAViewLoaded"))
//Useful tool for event monitoring
monitorEvents(document.getElementById('analytics'),"analyticsSPAViewLoaded")
//To avoid typing
_satellite.getVisitorId().getMarketingCloudVisitorID()

//A useful function to get all event listeners on a given node...
const listeners = (function listAllEventListeners() {
  let elements = [];
  const allElements = document.querySelectorAll('*');
  const types = [];
  for (let ev in window) {
    if (/^on/.test(ev)) types[types.length] = ev;
  }

  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    for (let j = 0; j < types.length; j++) {
      if (typeof currentElement[types[j]] === 'function') {
        elements.push({
          "node": currentElement,
          "listeners": [ {
            "type": types[j],
            "func": currentElement[types[j]].toString(),
          }]
        });
      }
    }
  }

  return elements.filter(element => element.listeners.length)
})();

console.table(listeners);

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
