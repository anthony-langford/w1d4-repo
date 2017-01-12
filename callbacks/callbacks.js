const findWaldo = function(arr, found) {
  arr.forEach(found);
}

const actionWhenFound = function(name, index) {
  if (name === "Waldo") {
    console.log("Found Waldo at index " + index + "!");
  }
  else {
    index++;
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);