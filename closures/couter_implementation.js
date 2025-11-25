function createCounter(){
    let c = 0;
    function increment(){
        c++
        
            console.log("Increment",c)
        
    }
    function decrement(){
        c--
        
        console.log("Decrement",c)
        
    }
    return { increment , decrement}
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()


//question 2
//Simulating Private Variables with Closures

function createBankAccount(){
    let balance = 0

    return {
        deposite(amount){
            balance += amount
            console.log(`Deposite: ${amount}`)
        }

        withdraw(amount){
            if (amount <= balance){
                balance -=amount;
                console.log(`withdraw amount: ${amount}`)
            }
            else{
                console.log("Insufficient balance")
            }
        }
        getBalance(){
            return balance
        }
    }
    }

const account = createBankAccount();
account.deposite(500);      
account.withdraw(200);     
account.withdraw(400);    

console.log(account.balance); 
console.log(account.getBalance()); 
    
