const payload = event.message;
const page = payload.page;
const ecommerce = payload.ecommerce;
const items = ecommerce.items;

s.products = items.map(item => {
  return (sanitize(item.item_category) || "No Category") + ";" +
    (sanitize(item.item_name) || "No Name") + ";" +
    (item.quantity || 1) + ";" +
    (item.quantity ? (item.price * item.quantity).toFixed(2) : item.price) + ";;" +
    (ecommerce.transaction_id ? ("|eVar22=" + ecommerce.transaction_id) : '') +
    (item.item_category_id ? ("|eVar23=" + item.item_category_id) : '') +
    (item.item_category ? ("|eVar24=" + item.item_category) : '') +
    (item.item_id ? ("|eVar25=" + item.item_id) : '') +
    (item.item_list_price ? ("|eVar26=" + item.item_list_price) : '') +
    (item.item_brand ? ("|eVar27=" + item.item_brand) : '')
}).join();

function sanitize(value) {
  if (typeof value === "string") {
    return value.replace('\'', '').replace(/\W+/g, " ").trim();
  } else {
    return value;
  }
}

s.pageName = page?.name || "No Page Name";
