function isEqual(object1, object2) {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    const bothAreObjects =
      typeof object1[prop] === "object" && typeof object2[prop] === "object";

    if (
      (!bothAreObjects && object1[prop] !== object2[prop]) ||
      (bothAreObjects && !isEqual(object1[prop], object2[prop]))
    ) {
      return false;
    }
  }

  return true;
}

const object1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};
const object2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};
isEqual(object1, object2); // => true

// const object1 = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 5,
//     },
//   },
// };
// const object2 = {
//   a: 1,
//   b: {
//     c: 3,
//     d: {
//       e: 5,
//     },
//   },
// };
// isEqual(object1, object2); // => false

// const object1 = {
// 	a: 1,
// 	b: {
// 		c: 3,
// 		d: {
// 			e: 5,
// 		}
// 	}
// };
// const object2 = {
// 	a: 1,
// 	b: {
// 		c: 3,
// 		d: {
// 			e: 6,
// 		}
// 	}
// };
// isEqual(object1, object2); // => false
