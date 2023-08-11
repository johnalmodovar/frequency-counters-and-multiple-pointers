"use strict";

/** takes two arrays of different lengths, (keys and values)
 * @returns object with key-value pairs
 */

function twoArrayObject(keys, values) {

  const keyValuePairs = {};

  for (let i = 0; i < keys.length; i++) {

    if (i >= values.length) {
      keyValuePairs[keys[i]] = null;
    } else {
      keyValuePairs[keys[i]] = values[i];
    }

  }

  return keyValuePairs;
}

/*
edge cases:
keys array > values array => key value will be null
values array > keys array => ignore extra values

ex:
[x, y, z], [1, 2] => { x: 1, y: 2, z: null }
[a, b, c], [1, 2, 3, 4] => { a: 1, b: 2, c: 3 }

psuedo:
create object variable
walk through keys array
  push all the key elements with the value pairs attached to them in object output
    if key length is greater than value length
      pair the key element with null
return object
 */