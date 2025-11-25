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


//extra challange

function countandsortcategories(categories){
    const counts = categories.reduce((acc , items) => {
        acc[items] = (acc[items] || 0) +1;
        return acc
    } , {})

    const entries = Object.entries(counts)
    entries.sort((a,b) =>b[1]-a[1])
    return entries.map(entry => entry[0])
}


console.log(countandsortcategories(data))
//it gives the order of highest to the lowest