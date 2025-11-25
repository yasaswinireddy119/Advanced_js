function employeePerformance(employees){

    const filtered = employees.filter(function(emp){
         return emp.tasksCompleted > 5
    });
    //map
    const mapping = filtered.map(function(emp){
        let performance=""

        if(emp.rating > 4.5){
           performance="Excellent"
        }
        else if(emp.rating>=3){
            performance="Good"
        }
        else{
            performance="Needs Improvement"
        }

        return {
            name : emp.name,
            performance:performance
        }
    })

    //sort
    const order = {"Excellent":3 , "Good" :2 , "Needs Improvement":1}
    const sorted = mapping.sort(function(a,b){
        return order[b.performance]-order[a.performance]
    })

    return sorted
}


const c = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

console.log(employeePerformance(c))