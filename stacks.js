let dataStacks = function() {
  // constructor define
  this.storage = "";
}

dataStacks.prototype.push = function(str) {
  // storage manipulation add data
  this.storage = str;

}

dataStacks.prototype.pop = function() {
  // storage manipulation remove data
  let data = this.storage;
  let newData = [];

  for(let i = 0; i < data.length; i++){
    newData.push(data[i]);
  }

  newData.pop();
  return this.storage = newData;

}

dataStacks.prototype.length = function() {
  // storage size
  return this.storage.length;

}

let objStacks = new dataStacks();
objStacks.push('structure');

console.log(objStacks.pop());
console.log(objStacks.length());
