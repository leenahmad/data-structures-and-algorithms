'use strict';

function Mergesort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    Mergesort(left);
    Mergesort(right);
    merge(left, right, arr);

  }
  function merge(left, right, arr) {

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      }
      else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
    if (i === left.length) {
      for (k; k < arr.length; k++) {
        arr[k] = right[j];
        j++;
      }
    }
    else {
      for (k; k < arr.length; k++) {
        arr[k] = left[i];
        i++;
      }
    }
  }
}

module.exports = Mergesort;
