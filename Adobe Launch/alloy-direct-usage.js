//<script src="https://cdn1.adoberesources.net/alloy/2.14.0/alloy.min.js" async></script>
!function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
  []).push(o),n[o]=function(){var u=arguments;return new Promise(
  function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
  (window,["yourAlloyInstanceName"]);
yourAlloyInstanceName(configure, {
  datastreamId: "datastream id",
  orgId: "orgID@AdobeOrg",
  clickCollectionEnabled: false
});
//If you load this instance separately from Launch, but Launch is present on the page, make sure the instance name is defined in WebSDK Extension. Launch will prevent creating new instances resulting in them failing silently.

const productListItems = products?.map(product => {
    return {
      name: product?.name,
      priceTotal: product?.price,
      quantity: product?.quantity,
      SKU: product?.name,
      id: product?.id,
      _experience: {
        analytics: {
          customDimensions: {
            eVars: {
              eVar111: product?.id
            }
          },
          event1to100: {
            event11: {
              value: product?.price ?? 0
            },
            event12: {
              value: product?.quantity ?? 0,
              id: trimmedTransId
            }
          }
        }
      },
      productCategories: [{
        categoryID: product.category
      }]
    };
  });

  const xdm = {
    eventType: "web.webpagedetails.pageViews",
    web: {
      webPageDetails: {
        URL: window.location.href,
        name: 'Beautiful Page',
        pageViews: {
          value: 1
        },
      },
      webReferrer: {
        "URL": document.referrer
      }
    },
    _experience: {
      analytics: {
        customDimensions: {
          eVars: {
            eVar1: 'v1',
          },
          props: {
            prop1: 'Hello, prop1 value'
          }
        },
        event1to100: {
          event34: {
            value: 1,
            id: trimmedTransId
          },
          event56: {
            value: revenue,
            id: trimmedTransId
          },
          event78: {
            value: tax,
            id: trimmedTransId
          }
        }
      }
    },
    commerce: {
      order: {
        purchaseID: trimmedTransId
      },
      purchases: {
        value: 1
      }
    },
    productListItems: productListItems
  }
  yourAlloyInstanceName('sendEvent', {
    xdm: xdm
  });
