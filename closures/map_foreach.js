

function processProducts(products){
    const productnames = products.map(function(item){
        return item.name
    });
    console.log("productsNames",productnames);

    products.forEach(function(products){
        if(products.price > 50){
            console.log(`${products.name} is above $50`)
        }
        else{
             console.log(`${products.name} is below $50`)
        }
    })
}

const items=[
    {name : "Laptop" , price:25000},
    {name : "tablet" , price:10000}
]

processProducts(items)