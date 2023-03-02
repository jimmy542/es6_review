const data = [10,20,30,40,50]


const new_data = data.map(e=>{
    const a = e*2
    return a 
})

console.log(new_data)

const weather = ['cloud','sunny','rain','fog','wind']

const result = weather.map((e,i)=>{
    return `day ${i+1} , weather : ${e}`
})

console.log(result)


const data3 = [

    { day:"2022-04-24T08:58:54.038Z",weather:'cloud'},
    { day:"2021-12-03T05:40:44.408Z",weather:'rain'},
    { day:"2017-10-25T21:34:19.488Z",weather:'sunny'}
]

const result3 = data3.map(e=>e.weather)
console.log(result3)