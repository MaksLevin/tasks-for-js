function createObject(obj) {
  const objNew = {
    testField: obj.testField,
    getTestField: obj.getTestField.bind(obj),
  };
  return objNew;
}

const obj1 = {
  testField: 1,
  getTestField: function () {
    return this.testField;
  },
};
const getTestField1 = obj1.getTestField;
getTestField1();

const obj2 = createObject({
  testField: 2,
  getTestField: function () {
    return this.testField;
  },
});

const getTestField2 = obj2.getTestField;
getTestField2();
