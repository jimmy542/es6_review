
// array
const color  = ['black','green','white','pink']

const [black,green,white] = color

console.log(black)


const[,,,pink] = color

console.log(pink)


// object 

const product={
    productname:"phone",
    price:30000,
    qty:10
}


const {productname:name,price:price,qty:qty}=product

console.log(name)