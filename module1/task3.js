function isValueExists(value) {
  let result =
    arguments[0] === undefined || arguments[0] === null ? false : true;
  return result;
}

isValueExists(1);
isValueExists(0);
isValueExists("12");
isValueExists("");
isValueExists(false);
isValueExists(undefined);
isValueExists(null);
