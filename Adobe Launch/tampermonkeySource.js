// ==UserScript==
// @name         Launch Debugging Automation
// @namespace    AutoAdobeLaunchDebug
// @version      0.39
// @description  This contains a bit of code designed to make adobe Launch and Analytics debugging easier.
// @author       Bogdan Nazaruk
// @match        *
// @icon         https://icons.duckduckgo.com/ip2/adobe.com.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const color = "green"; //Feel free to change the color here. Personally I prefer lime since my console is dark. Green is more universal.
  const css = `text-shadow: 1px 1px 1px ${color}, 0 0 1em ${color}, 0 0 0.2em ${color};color: ${color};font-weight: 500;font-size: 1.3em;`;
  console.log("%c >>>[Tampermonkey]%c Local Browser Logging: Launch Debugging Automation script initialized", css, '');
  const sat = window._satellite;
  if(typeof sat === 'undefined'){return;}
  sat.setDebug(1);
  console.log("%c >>>[Tampermonkey]%c Local Launch debugging is now on.", css, '');
  function formattedTimeSinceLastBuild(){
    const ms = new Date - new Date(sat.buildInfo.buildDate);
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days"
  }

  console.log("%c >>>[Tampermonkey]%c Time since the last Launch build: >>> %c" + formattedTimeSinceLastBuild(), css, '', css);
})();