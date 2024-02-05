//This is a Default S-code snippet
//s.apl. Get the latest version from here: https://experienceleague.adobe.com/docs/analytics/implementation/vars/plugins/apl.html?lang=en 
//then remap the function to live in s. Or _satellite. Not in global
/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: apl (appendToList) v4.0 */
s.apl = function apl(lv,va,d1,d2,cc){var b=lv,d=va,e=d1,c=d2,g=cc;if("-v"===b)return{plugin:"apl",version:"4.0"};var h=function(){if("undefined"!==typeof window.s_c_il)for(var k=0,b;k<window.s_c_il.length;k++)if(b=window.s_c_il[k],b._c&&"s_c"===b._c)return b}();"undefined"!==typeof h&&(h.contextData.apl="4.0");window.inList=window.inList||function(b,d,c,e){if("string"!==typeof d)return!1;if("string"===typeof b)b=b.split(c||",");else if("object"!==typeof b)return!1;c=0;for(a=b.length;c<a;c++)if(1==e&&d===b[c]||d.toLowerCase()===b[c].toLowerCase())return!0;return!1};if(!b||"string"===typeof b){if("string"!==typeof d||""===d)return b;e=e||",";c=c||e;1==c&&(c=e,g||(g=1));2==c&&1!=g&&(c=e);d=d.split(",");h=d.length;for(var f=0;f<h;f++)window.inList(b,d[f],e,g)||(b=b?b+c+d[f]:d[f])}return b};
/******************************************** END CODE TO DEPLOY ********************************************/

s.usePlugins = true
s.doPlugins = function (s) {
  
  //Keep this at the end of doPlugins:
  s.url = document.location.href;//because AA extension still has little clue about SPAs.
  s.prop69 = s.eVar69 = `${_satellite.property.name}||${_satellite.environment.stage.substring(0,3)}||${window.location.hostname}||${_satellite.buildInfo.buildDate.substring(0,13)}`;
  s.linkTrackEvents = s.apl(s.linkTrackEvents, s.events, ",", ","); //because linkTrackEvents do much more harm than good.
  s.linkTrackVars = s.apl(s.linkTrackVars, "events,products", ",", ","); //because clearing vars is a universal must. 
}
