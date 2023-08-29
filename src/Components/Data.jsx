import image1 from '../assets/Shoes/shoe1.jpg'
import image2 from '../assets/dresses/dress 1.jpg'
import image3 from '../assets/trousers/tr1.jpg'
import image4 from '../assets/watches/watch 2.jpg'
import image5 from '../assets/dresses/dress 2.jpg'
import image6 from '../assets/boot.jpg'
import image7 from '../assets/trousers/tr3.jpg'
import image8 from '../assets/top 2.jpg'
import image9 from '../assets/trench.jpg'
import image10 from '../assets/hood.jpg'
import image11 from '../assets/dresses/night out.png'
import image12 from '../assets/top 2.jpg'
import './Styles/Home.css'
import Products from './Products'
 const Data=()=>{
     const items=[
        
          {
          img:image1,
          name:"man in black",
          price:30,
          id:1
        },
        {
          img:image2,
          name:"smart gown",
          price:10,
          id:2
        },
        {
          img:image3,
          name:"Elegant mank",
          price:20,
          id:3
        },
        {
          img:image4,
          name:"keep time!",
          price:30,
          id:4
        },
        {
          img:image8,
          name:"man in black",
          price:30,
          id:9
        },
        {
          img:image9,
          name:"all weather trench",
          price:40,
          id:10
        },
        {
          img:image10,
          name:"hoddie hoddie",
          price:30,
          id:11
        },
     
        {
          img:image6,
          name:"at the junkie",
          price:30,
          id:6
        },
        {
          img:image5,
          name:"ladies choice",
          price:30,
          id:5
        },
        {
          img:image12,
          name:"night out",
          price:30,
          id:8
        },
        {
          img:image7,
          name:"man in black",
          price:20,
          id:7
        },
        
        
          {
          img:image5,
          name:"ladies choice",
          price:30,
          id:5
        },
        {
          img:image6,
          name:"at the junkie",
          price:30,
          id:6
        },
        {
          img:image7,
          name:"man in black",
          price:20,
          id:7
        },
          {
          img:image12,
          name:"night out",
          price:30,
          id:8
        },
      
          {
          img:image8,
          name:"man in black",
          price:30,
          id:9
        },
        {
          img:image9,
          name:"all weather trench",
          price:40,
          id:10
        },
        {
          img:image10,
          name:"hoddie hoddie",
          price:30,
          id:11
        },
        {
          img:image11,
          name:"night out",
          price:20,
          id:12
        },
      

        {
          img:image6,
          name:"at the junkie",
          price:30,
          id:6
        },
        {
          img:image5,
          name:"ladies choice",
          price:30,
          id:5
        },
        {
          img:image12,
          name:"night out",
          price:30,
          id:8
        },
        {
          img:image7,
          name:"man in black",
          price:20,
          id:7
        },
       
        
      ]
      const items2=[
        {
          img:image12,
          name:"night out",
          price:30,
          id:8
        },
      
          {
          img:image8,
          name:"man in black",
          price:30,
          id:9
        },
        {
          img:image9,
          name:"all weather trench",
          price:40,
          id:10
        },
        {
          img:image10,
          name:"hoddie hoddie",
          price:30,
          id:11
        },
        {
          img:image11,
          name:"night out",
          price:20,
          id:12
        },
      

        {
          img:image6,
          name:"at the junkie",
          price:30,
          id:6
        },
        {
          img:image5,
          name:"ladies choice",
          price:30,
          id:5
        },
        {
          img:image12,
          name:"night out",
          price:30,
          id:8
        },
        {
          img:image7,
          name:"man in black",
          price:20,
          id:7
        },
       
        
      ]
      return(
        <>
        <div id="data" className='product-container'>
        
        {
        items.map((item, id)=>{
       return(
         <ul className='data'>
         <Products key={id}
          item={item} 
          img={item.img}
           name={item.name} 
           title={item.price}/> </ul>
       )
     
     })
     }
     </div>
        </>
      )
    }

export default Data