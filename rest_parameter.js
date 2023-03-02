
sum=(...number_array)=>{
    let total=0
    for(let number of number_array) total+=number
    return total
}

console.log(sum(5,10,30))