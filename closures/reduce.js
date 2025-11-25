function countcategories(categories){
    const result = categories.reduce(function(acc,category){
        if (acc[category]){
            acc[category]++
        }
        else{
            acc[category]=1
        }
        return acc
    },{})
    return result
}

const data = [
    "electronics", "clothing", "electronics",
  "toys", "clothing", "toys", "toys"
]

console.log(countcategories(data))