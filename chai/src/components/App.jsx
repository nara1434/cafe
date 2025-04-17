// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Categories from './Categories'
// import Coffees from './Coffees'
// import Tea from './Tea'
// import Beverages from './Beverages'
// import Bakery from './Bakery'
// import Desert from './Desert'
// import NoPage from './NoPage'
// import Login from './Login'
// import Registration from './Registration'
// import CartItems from './CartItems'
// import PaymentPage from './PaymentPage'
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path='' element={<Login/>} />
//         <Route path='home' element={<Home/>} />
//         <Route path='about' element={<About/>}/>
//         <Route path='contact' element={<Contact/>}/>
//         <Route path='login' element={<Login/>}/>
//         <Route path='register' element={<Registration/>}/>
//         <Route path='cart' element={<CartItems/>}/>
//         <Route path='categories' element={<Categories/>}>
//           <Route path='' element={<Home/>} />
//           <Route path='coffee' element={<Coffees/>}/>
//           <Route path='tea' element={<Tea/>}/>
//           <Route path='beverages' element={<Beverages/>}/>
//           <Route path='bakery' element={<Bakery/>}/>
//           <Route path='deserts' element={<Desert/>}/>
//         </Route>
//         <Route path='payment' element={<PaymentPage/>}/>


//         <Route path='*' element={<NoPage/>}/>
//       </Routes>
//     </>
//   )
// }
// export default App 

// App.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Categories from './Categories'
import Coffees from './Coffees'
import Tea from './Tea'
import Beverages from './Beverages'
import Bakery from './Bakery'
import Desert from './Desert'
import NoPage from './NoPage'
import Login from './Login'
import Registration from './Registration'
import CartItems from './CartItems'
import PaymentPage from './PaymentPage'
import ProtectedRoute from '../ProtectedRoute'
import { AuthProvider } from '../AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />

        {/* Protected Routes */}
        <Route path='/' element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path='home' element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path='about' element={
          <ProtectedRoute><About /></ProtectedRoute>
        } />
        <Route path='contact' element={
          <ProtectedRoute><Contact /></ProtectedRoute>
        } />
        <Route path='cart' element={
          <ProtectedRoute><CartItems /></ProtectedRoute>
        } />
        <Route path='payment' element={
          <ProtectedRoute><PaymentPage /></ProtectedRoute>
        } />

        <Route path='categories' element={
          <ProtectedRoute><Categories /></ProtectedRoute>
        }>
          <Route path='' element={<Home />} />
          <Route path='coffee' element={<Coffees />} />
          <Route path='tea' element={<Tea />} />
          <Route path='beverages' element={<Beverages />} />
          <Route path='bakery' element={<Bakery />} />
          <Route path='deserts' element={<Desert />} />
        </Route>

        <Route path='*' element={<NoPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
