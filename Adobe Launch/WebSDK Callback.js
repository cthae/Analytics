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
  if (!content.xdm){
    content.xdm = {};
  }
  if (!content.xdm._experience) {
    content.xdm._experience = {};
  }
  if (!content.xdm._experience.analytics) {
    content.xdm._experience.analytics = {};
  }
  if (!content.xdm._experience.analytics.customDimensions) {
    content.xdm._experience.analytics.customDimensions = {};
  }
  if (!content.xdm._experience.analytics.customDimensions.props) {
    content.xdm._experience.analytics.customDimensions.props = {};
  }
  if (!content.xdm._experience.analytics.customDimensions.eVars) {
    content.xdm._experience.analytics.customDimensions.eVars = {};
  }
  return content.xdm._experience.analytics.customDimensions;
}
