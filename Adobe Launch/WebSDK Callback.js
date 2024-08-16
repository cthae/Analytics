const cDims = PrepareAndGetCustomDimensions();
const props = cDims.props;
const eVars = cDims.eVars;
const href = window.location.href.toLowerCase();

try{
//Your logic goes here

} catch(e) {
  _satellite.logger.err("Web SDK Callback error: " + e);
}

function PrepareAndGetCustomDimensions(){
  content.xdm = content.xdm ? content.xdm : {};
  content.xdm._experience = content.xdm._experience || {};
  content.xdm._experience.analytics = content.xdm._experience.analytics || {};
  content.xdm._experience.analytics.event1to100 = content.xdm._experience.analytics.event1to100 || {};
  content.xdm._experience.analytics.event201to300 = content.xdm._experience.analytics.event201to300 || {};
  content.xdm._experience.analytics.event301to400 = content.xdm._experience.analytics.event301to400 || {};
  content.xdm._experience.analytics.event401to500 = content.xdm._experience.analytics.event401to500 || {};
  content.xdm._experience.analytics.event501to600 = content.xdm._experience.analytics.event501to600 || {};
  content.xdm._experience.analytics.event601to700 = content.xdm._experience.analytics.event601to700 || {};
  content.xdm._experience.analytics.event701to800 = content.xdm._experience.analytics.event701to800 || {};
  content.xdm._experience.analytics.event801to900 = content.xdm._experience.analytics.event801to900 || {};
  content.xdm._experience.analytics.event901to1000 = content.xdm._experience.analytics.event901to1000 || {};
  content.xdm._experience.analytics.customDimensions = content.xdm._experience.analytics.customDimensions || {};
  content.xdm._experience.analytics.customDimensions.props = content.xdm._experience.analytics.customDimensions.props || {};
  content.xdm._experience.analytics.customDimensions.eVars = content.xdm._experience.analytics.customDimensions.eVars || {};
  return content.xdm._experience.analytics.customDimensions;
}
