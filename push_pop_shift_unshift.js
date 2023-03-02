const data = [10,20,30]
data.push(40)
// push with seperat member 
data.push(...[50,60,70,100])
console.log(data)

// remove last data
data.pop()
console.log(data)

// delete first data
data.shift() 
console.log(data)


// add data to front 
data.unshift(999)
data.unshift(5555)
console.log(data)