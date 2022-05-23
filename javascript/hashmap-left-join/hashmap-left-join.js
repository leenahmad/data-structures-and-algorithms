'use strict';


function leftJoin(hashTable1, hashTable2) {
  const leftJoinResult = [];

  hashTable1.table.forEach(bucket => {
    if (bucket) {
      let currentNode = bucket.head;

      while (currentNode) {

        let key = Object.keys(currentNode.value)[0];
        let value1 = Object.values(currentNode.value)[0];
        let value2 = null;

        if (hashTable2.contain(key)) value2 = hashTable2.get(key);

        leftJoinResult.push([key, value1, value2]);

        currentNode = currentNode.next;

      }
    }

  });
  return leftJoinResult;
}


module.exports = leftJoin ;
