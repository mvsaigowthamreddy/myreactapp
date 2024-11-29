import React, { useEffect, useState} from 'react'
import axios from 'axios'


export default function 
() {

  const [products,setProducts] =useState([])
  const url="http://localhost:8080/"
  const getData= async()=>{
    const response= await axios.get(url)
    setProducts(response.data)
  }
  useEffect(()=>{
   getData()
  },[])

  const deleteProduct = async(id)=>{
        await axios.delete(url+id)
        getData()
  }
//   const Navigate = useNavigate();
//   const cartNavi =()=>{
//     Navigate("/Cart")
// }
//   const addToCart = async(id)=>{
//     const response= await axios.get(url+id)
//    return addCart(response.data)
     
//   }
//   const addCart = (response)=>{
//     cartNavi();
//     return(
//       <div>
       
//       <h2>{response.name}</h2>
//       <h4>Rs.{response.price}</h4> 
        
//       </div>
      
//     );
    
//   };
 
  // const products=
  // 
  //     {
  //       name:"Panda Dunks",
  //       price: 10000,
  //       url:"https://picsum.photos/seed/picsum/250/250"
  //     },
  //     {
  //       name:"Strawberry Coughs",
  //       price:32000,
  //       url:"https://picsum.photos/seed/picsum/250/250"
  //     },
  //     {
  //       name:"Chicago Splits",
  //       price:12000,
  //       url:"https://picsum.photos/seed/picsum/250/250"

  //     }


  // ]
  return (
    <div style={{display:'flex' , justifyContent:"center",flexWrap:'wrap'}}>
       {products.map((value,index)=>(
        <div style={{backgroundColor:'pink',margin:'10px',padding:'10px',borderRadius:'6px',alignContent:'center'}}>
          <img src={value.url}></img>
        <h2 key={index}>{value.name}</h2>
        <h4>Rs.{value.price}</h4>
        <button style={{backgroundColor:'whitesmoke',height:'35px',width:'100px',borderRadius:'6px',gap:'10px'}}>Add to Cart</button>
        <button style={{backgroundColor:'whitesmoke',height:'35px',width:'100px',borderRadius:'6px'}} onClick={()=>deleteProduct(value._id)}>Delete</button>
        
        
        </div>
       )
      )}
      
    </div>
  )
}
