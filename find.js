
const colors = ['red','white','green','blue']

// indexOf
console.log(colors.indexOf('red'))

// not found data = -1
console.log(colors.indexOf('black'))

// 

const search = colors.find(element=>element==="green")
console.log(search)


const find_index = colors.findIndex(element=>element==="green")

console.log(`findIndex : ${find_index}`)