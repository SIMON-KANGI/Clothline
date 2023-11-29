import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/sidebar.css'
import { useDisclosure } from '@chakra-ui/react'

import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react'
function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
   {/* <div className='products'> 
    <nav className='sidenav flex-column'>
      <ul id="nav-items">
      <li id="items"><Link to="/Shoes">Shoes</Link></li>
      <hr/>
      <li id="items"><Link to="/Dresses">Dresses</Link></li>
      <hr/>
      <li id="items"><Link to="">Trousers</Link></li>
      <hr/>
      <li id="items"><Link to="">Tshirts</Link></li>
      <hr/>
      <li id="items"><Link to="/Coats">Coats</Link></li>
      <hr/>
      <li id="items"><Link to="">Shorts</Link></li>
      <hr/>
      <li id="items"><Link to="">Watches</Link></li>
      <hr/>
      <li id="items"><Link to="">Ladies wear</Link></li>
      <hr/>
      </ul>
      

  </nav>
     <footer> <h3>order now</h3></footer>
</div>*/}
<Button onClick={onOpen}>Open Drawer</Button>
<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerHeader borderBottomWidth='1px'>Happy shopping!!</DrawerHeader>
    <DrawerBody>
    <nav className='sidenav flex-column'>
    <ul id="nav-items">
    <li id="items"><Link to="/Shoes">Shoes</Link></li>
    <hr/>
    <li id="items"><Link to="/Dresses">Dresses</Link></li>
    <hr/>
    <li id="items"><Link to="">Trousers</Link></li>
    <hr/>
    <li id="items"><Link to="">Tshirts</Link></li>
    <hr/>
    <li id="items"><Link to="/Coats">Coats</Link></li>
    <hr/>
    <li id="items"><Link to="">Shorts</Link></li>
    <hr/>
    <li id="items"><Link to="">Watches</Link></li>
    <hr/>
    <li id="items"><Link to="">Ladies wear</Link></li>
    <hr/>
    </ul>
    

</nav>
    </DrawerBody>
  </DrawerContent>
</Drawer>
    </div>
  )
}

export default SideBar
