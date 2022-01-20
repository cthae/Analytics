//This will contain examples of unit tests.

const mockData = {
  //mocked fields. Overriding the fields here. mockData overwrites the data object from the template for the purpose of this test.
  whateverUIVariable: 'testVar'
};
//Now we're basically overriding an includable library logic using the mock method:
mock('copyFromDataLayer', key => {
  if (key === 'ecommerce') return {
  checkout: {
    actionField: {
      step: 2
    }
  },
  remove: {
    products: [
      {
        product_id: "12345",
        id: "12345",
        name: "Dell G3 Laptop",
        price: "783.00",
        brand: "Dell",
        category: "laptops",
        variant: "default variant",
        dimension3: "grey",
        sku: "LAP1040201",
        dimension6: "large",
        quantity: 1,
      }
    ]
  }
};
});
// This approach was taken from Simo Ahava.
// Call runCode to run the template's code.
let variableResult = runCode(mockData);

// Verify that the variable returns a result.
//assertThat(variableResult).isNotEqualTo(undefined);

assertThat(variableResult).isEqualTo('testVar2');
