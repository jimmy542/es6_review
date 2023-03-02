
const data = [10,20,30,40]


// const result = data.map(e=>100)

// console.log(result)

// const result2 = data.filter(e=>e>20)

// console.log(result2)

const result = data.reduce((value,e)=>{
    const total = e+value
    return total
},0)

const result2 =data.reduce((value,e)=>e+value,0)

console.log(result2)

const cart = [
    {productname:"bag",price:5000},
    {productname:"handbag",price:3500},
    {productname:"ring",price:2599}
]

const result3 = cart.reduce((value,e)=>e.price+value,0)

console.log(result3)