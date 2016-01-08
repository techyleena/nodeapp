"use strict";

var toAdd = 23;

function summer (sumVal) {
  return function (toAdd) {
    if (!toAdd) {
      throw new Error("Error in trying to pull a fast one?");
    }
    return sumVal + toAdd;
  }
}

module.exports = summer;
