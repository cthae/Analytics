function checkConsent() {
  /*
  This script is meant to help with OT debugging and testing. It shows the vital information from the OT cookie in a comfortable and parsable way.
  */
  //Change the colors appropriately. The default set is for the dark devtools theme.
  var color = {
    good: 'lime',
    bad: 'red',
    info: 'white',
    info2: 'yellow',
    data: 'lightgrey'
  }
  window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
  const fullCookie = window.getCookie("OptanonConsent");
  console.log("%c Consent check script initiated. \n", css(color.info));
  console.log("%c Total Cookies on this page: " + document.cookie.split(";").length, css(color.info2));
  console.log("%c The length of the OptanonConsent is " + (!fullCookie ? "0" : fullCookie.length), css(color.info2));
  console.log("%c The raw OptanonConsent is:", css(color.info2));
  console.log("%c " + fullCookie, css(color.data));

  if (!/groups/i.test(fullCookie)) {
    console.log("%c Consent is not recorded", css("red"));
    return;
  }
  console.log("%c \nThe Groups Breakdown:", css(color.info));
  console.log("%c NOTE! The default groups are: C0001 - Necessary; C0002 - Performance; C0003 - Functional; C0004 - Targeting. But they can be tweaked.", css("white"));
  decodeURIComponent(fullCookie.split("groups=")[1].split("&")[0]).split(",").forEach((groupPair) => {
    let c = groupPair.split(":")[1] === "1" ? color.good : color.bad;
    console.log("%c Group " + groupPair.split(":")[0] + " = " + groupPair.split(":")[1], css(c));
  })
}

function css(c) {
  return `text-shadow: 1px 1px 1px ${c}, 0 0 1em ${c}, 0 0 0.2em ${c};color: ${c};font-weight: 500;font-size: 1.3em;`;
}
checkConsent();
