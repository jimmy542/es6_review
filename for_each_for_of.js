
const data = [10,20,30,40,50]

console.log("start for of")
for(const number of data){ 
    if(number===30){
        console.log(number)
        break
    }
}

console.log("start for each short")
// no break or continue in foreach 
data.forEach(e=>{
    if(e>=30){
        console.log("hello")
    }
    console.log(`mber in array ${e}`)
})