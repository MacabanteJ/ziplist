const testData1 = ['a', 'b', 'c'];
const testData2 = [1, 2, 3];

function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}
console.log(zipList(testData1, testData2));
function zipListTheSimpleWay(list1, list2) {
  const newList = _.zip(list1, list2);
  return _.flatten(newList);
}
console.log(zipListTheSimpleWay(testData1, testData2));
