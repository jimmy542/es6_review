const data1 = [10,20,30,40,50]



const result  =data1.filter(e=>{
    return e>20
})

console.log(result)


const department = [

    {name:'jimmy',salary:30000,department:"Backend developer"},
    {name:'John',salary:60000,department:"Manager"},
    {name:'Sam',salary:40000,department:"Accountant"},
    {name:'sara',salary:50000,department:"DevOps"},
    {name:'Mackie',salary:30000,department:"Fronent developer"},
    {name:'Arno',salary:15000,department:"intern software developer"},

]

const result3 = department.filter(e=>{
    return e.salary>15000
})

console.log(result3)