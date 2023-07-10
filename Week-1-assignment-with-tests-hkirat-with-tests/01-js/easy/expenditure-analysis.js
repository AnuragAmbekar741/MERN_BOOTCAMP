/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let result = []
  let checked = []
  for (val of transactions) {
    if (!checked.includes(val.category)) {
      let newArr = transactions.filter((transaction) => {
        if (val.category == transaction.category) {
          return [transaction.price]
        }
      })

      checked.push(val.category)

      if (newArr.length != 0) {
        let sum = newArr.reduce((t1, t2) => {
          return t1 + t2.price
        }, 0)

        result.push({
          category: newArr[0].category,
          totalSpent: sum
        })
      }

    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
