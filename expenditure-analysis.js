/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions = [
  {
    id:2,
    timestamp:1656076800001,
    price:12,
    category:"Food",
    itemName:"Pizza"
  },
  {
    id:3,
    timestamp:1656076800002,
    price:15,
    category:"Food",
    itemName:"Burger"
  }
]

let totalTransaction = {
  category: [],
  Totalprice : []
}
function calculateTotalSpentByCategory(transactions) {

  transactions.map((item,key)=>{
    totalTransaction.category[key] = item.category;
    totalTransaction.Totalprice[key] = item.price

  })

  return totalTransaction;
}

// module.exports = calculateTotalSpentByCategory;

let result = calculateTotalSpentByCategory(transactions)

console.log(typeof result)

// for (let key in result) {
//   if (result.hasOwnProperty(key)) {
//     console.log(key, result[key]);
//   }
// }



Object.keys(result).forEach(key => {
  // key is the property name
  // myObject[key] is the property value
  console.log(key, result[key]);
});