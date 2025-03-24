const coding = ["js", "ruby", "python", "cpp"]
// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
// })

// console.log(values);

//filter
const myNums = [1, 2, 3, 4, 5, 6]

//without starting scope
// let newNums = myNums.filter( (num)=> num > 3) 
// const newNums = myNums.filter( (num) => {
//     return num > 4
//}) //if we start scope then we need to use return
//console.log(newNums)

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers
                .map( (num) => num*10)
                .map( (num) => num + 1)
                .filter( (num) => num>=40)

//const newNums = myNumers.map( (num) => num + 10)

//console.log(newNums);

//reduce

const myNums1 = [1, 2, 3]
// const myTotal = myNums1.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums1.reduce( (acc, curr)=> acc + curr, 0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 765
    },
    {
        itemName : "app dev",
        price : 654
    },
    {
        itemName : "web dev",
        price : 9876
    }
]

const pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetopay)
