# Intro
This document contains general suggestions for optimal **Adobe tracking implementation** setup.

## General preparations
Optionally make a separated Google Chrome profile. 
Very handy when working for different agencies at the same time.
Allows to have separated logged in Google profiles and separate sets of extensions at the same time.

Use LastPass or a similar extension to manage passwords. You can use separate instances across different browser profiles, but there's little need to do so unless you're being forced by your employer.

## In-browser setup: first steps

1. Adblockers off.
2. Adobe Experience Cloud Debugger: https://experienceleague.adobe.com/docs/debugger/using/experience-cloud-debugger.html?lang=en (Be careful when using across different profiles. This extension can get confused)
3. Debugger for Adobe Analytics: https://chrome.google.com/webstore/detail/debugger-for-adobe-analyt/bdingoflfadhnjohjaplginnpjeclmof?hl=en
4. EditThisCookie or a similar extension: https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en
5. Allow all three extensions to work in Incognito.

## Advanced in-browser setup:

Open your debugging panel and go to Sources. On the left you have Snippets. They are pieces of code you save on the Chrome profile level and then can execute on every page.

I suggest using the following snippets:

1. Build time snippet. Run it to confirm that current library is indeed what you expect it to be. Unfortunately, Adobe is not good enough to surface the library name on the front-end, therefore, we either have to use its API, which would be a bit convoluted at this point, or just verify if current library has been built recently. Very useful:

```
function formattedTimeSinceLastBuild(){
 var ms =  new Date - new Date(_satellite.buildInfo.buildDate);
 let seconds = (ms / 1000).toFixed(1);
 let minutes = (ms / (1000 * 60)).toFixed(1);
 let hours = (ms / (1000 * 60 * 60)).toFixed(1);
 let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
 if (seconds < 60) return seconds + " Sec";
 else if (minutes < 60) return minutes + " Min";
 else if (hours < 24) return hours + " Hrs";
 else return days + " Days"
}

console.log("Time since the last Launch build: >>> " + formattedTimeSinceLastBuild());
```

2. Block Unload Snippet. It's a trivial override of the onbeforeunload function so that the browser would be forced to ask before unloading this page. When it ask, just prevent it from unloading the page and you will see your navigation events. Sure, you can just preserve log, but this way is a lot cleaner.

```
window.onbeforeunload = function(){return false;}
```

3. Set debug to see all the _satellite.logger messages. Useful when you don't need it on pageload. When you just want to debug something quickly and don't want to reload the page or enable debugging extensions. Quick and efficient:

```
_satellite.setDebug(1);
```

_this is work in progress_