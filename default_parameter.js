
getDataCustomer=(customer,customer_address="uk")=>{
    const address = `customer name : ${customer}
    address : ${customer_address}`
    return address

}

console.log(getDataCustomer('jimmy','sheffield'))
console.log(getDataCustomer('john'))