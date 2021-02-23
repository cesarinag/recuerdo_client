import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

const authenticatedOptions = (
  <Dropdown>
    <Dropdown.Toggle id="dropdown-basic">
    options
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#change-pw">change password</Dropdown.Item>
      <Dropdown.Item href="#haikus">view haikus</Dropdown.Item>
      <Dropdown.Item href="#create-haiku">post haiku</Dropdown.Item>
      <Dropdown.Item href="#haikus/:id/">search</Dropdown.Item>
      <Dropdown.Item href="#sign-out">sign out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">About</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="secondary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      haiku75.
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auhref">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

// // import React, { useState, Fragment } from 'react'
// // import { Nav.Link } from 'react-router-dom'
// // import Nav from 'react-bootstrap/Nav'
// // import Buthrefn from 'react-bootstrap/Buthrefn'
// // import './Header.css'
// // // import Navbar from 'react-bootstrap/Navbar'
// //
// // function Navbar (user) {
// //   const [click, setClick] = useState(false)
// //   const [buthrefn, setButhrefn] = useState(true)
// //
// //   const handleClick = () => setClick(!click)
// //   const closeMobileMenu = () => setClick(false)
// //
// //   const showButhrefn = () => {
// //     if (window.innerWidth <= 960) {
// //       setButhrefn(false)
// //     } else {
// //       setButhrefn(true)
// //     }
// //   }
// //
// //   window.addEventListener('resize', showButhrefn)
// //
// //   const authenticatedOptions = (
// //     <Fragment>
// //       <Nav.Link href="#change-pw">Change Password</Nav.Link>
// //       <Nav.Link href="#sign-out">Sign Out</Nav.Link>
// //       <Nav.Link href="#haikus">Index</Nav.Link>
// //       <Nav.Link href="#create-haiku">Create</Nav.Link>
// //       <Nav.Link href="#haikus/:id">Show</Nav.Link>
// //     </Fragment>
// //   )
// //   const unauthenticatedOptions = (
// //     <Fragment onclick={closeMobileMenu}>
// //       <Nav.Link href="#sign-up">Sign Up</Nav.Link>
// //       <Nav.Link href="#sign-in">Sign In</Nav.Link>
// //     </Fragment>
// //   )
// //
// //   const alwaysOptions = (
// //     <Fragment>
// //       <Nav.Link href="#/">Home</Nav.Link>
// //     </Fragment>
// //   )
// //
// //   return (
// //     <Fragment>
// //       <nav className="navbar">
// //         <div className="navbar-container">
// //           <Nav.Link href="/" clasName="navbar-logo">
// //         haiku75. <i className='fab fa-typo3' />
// //           </Nav.Link>
// //           <div className='menu-icon' onClick={handleClick}>
// //             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
// //           </div>
// //           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
// //             <li className='nav-item'>
// //               <div className="ml-auhref">
// //                 { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
// //                 { alwaysOptions }
// //                 { user ? authenticatedOptions : unauthenticatedOptions }
// //               </div>
// //             </li>
// //           </ul>
// //           {buthrefn && <Buthrefn buthrefnStyle='btn-outline'>sign up</Buthrefn>}
// //         </div>
// //       </nav>
// //     </Fragment>
// //   )
// // }
// //
// // export default Navbar
//
// import React, { useState, useEffect, Fragment } from 'react'
// import '../Buthrefn/Buthrefn.css'
// import Buthrefn from 'react-bootstrap/Buthrefn'
// import { Nav.Link } from 'react-router-dom'
// import './Header.css'
//
// function Navbar () {
//   const [click, setClick] = useState(false)
//   const [buthrefn, setButhrefn] = useState(true)
//
//   const handleClick = () => setClick(!click)
//   const closeMobileMenu = () => setClick(false)
//
//   const showButhrefn = () => {
//     if (window.innerWidth <= 960) {
//       setButhrefn(false)
//     } else {
//       setButhrefn(true)
//     }
//   }
//   const authenticatedOptions = (
//     <Fragment>
//       <Nav.Link href='/change-pw/'>Change Password</Nav.Link>
//       <Nav.Link href='/sign-out/'>Sign Out</Nav.Link>
//       <Nav.Link href='/haikus/'>Index</Nav.Link>
//       <Nav.Link href='/create-haiku/'>Create</Nav.Link>
//       <Nav.Link href='/haikus/:id/'>Show</Nav.Link>
//     </Fragment>
//   )
//   const unauthenticatedOptions = (
//     <Fragment onclick={closeMobileMenu}>
//       <Nav.Link href='/sign-up/'>Sign Up</Nav.Link>
//       <Nav.Link href='/sign-in/'>Sign In</Nav.Link>
//     </Fragment>
//   )
//
//   const alwaysOptions = (
//     <Fragment>
//       <Nav.Link href='/'>Home</Nav.Link>
//     </Fragment>
//   )
//
// const showNav.Links = (user) => {
//     if (!user) {
//       unauthenticatedOptions
//     } else {
//       authenticatedOptions
//     }
//   }
//
//   useEffect(() => {
//     showButhrefn()
//   }, [])
//
//   window.addEventListener('resize', showButhrefn)
//
//   return (
//     <Fragment>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Nav.Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
//             haiku75.
//             <i className='fab fa-typo3' />
//           </Nav.Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Nav.Link href='/' className='nav-links' onClick={closeMobileMenu}>
//                 home
//               </Nav.Link>
//             </li>
//             <li className='nav-item'>
//               <Nav.Link
//                 href='/sign-in/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 sign in
//               </Nav.Link>
//             </li>
//             <li className='nav-item'>
//               <Nav.Link
//                 href='/sign-up/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 sign up
//               </Nav.Link>
//             </li>
//
//             <li>
//               <Nav.Link
//                 href='/settings/'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 useful links
//               </Nav.Link>
//             </li>
//           </ul>
//           {buthrefn && <Buthrefn buthrefnStyle='btn--outline'>sign up</Buthrefn>}
//         </div>
//       </nav>
//     </Fragment>
//   )
// }
//
// export default Navbar
