import React from 'react'
import CartCard from './CartCard'
import { Button, Card } from 'react-bootstrap';
export default function Cart() {
    const products = [
    {
      id: 1,
      price: "300",
      name: "Tops",
      category: "dsfj sid jfi jiv kifj ifj jrfi ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 2,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hdfvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 3,
      price: "300",
      name: "neck",
      category: "dsfjsi ifhweiv dfvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 4,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik wfheruifh weivd fvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 5,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hkhwk  ther",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 6,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hhdkhwk theruif ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 7,
      price: "300",
      name: "neck",
      category: "dsfjsid jfiji vdf jghdfjkg hh ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 8,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik hwkth eruifhew uifh",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 9,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hdfjkg hhdkhwk  ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
  ];







  return (
        <Card style={{maxWidth:600 ,margin:"auto",marginBottom:"20px" }} >
            <Card.Header>
                <Card.Title as="h4" className='pt-2'>Checkout Cart</Card.Title>
              </Card.Header>
           {products.map((product)=>(<CartCard product={product}/>))}

           <Button style={{ marginLeft:"10px",marginTop:"5px",marginBottom:"10px" ,width:"25%" ,paddingLeft:"10px"}} className="ml-4" varinet="success">CheckOut</Button>
        </Card>
    )
}
