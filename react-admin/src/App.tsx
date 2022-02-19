import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Register from './pages/Register'
import Login from './pages/Login'
import RedirectToUsers from './components/RedirectToUsers'
import Links from './pages/Links'
import Products from './pages/products/Products'
import ProductForm from './pages/products/ProductForm'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<RedirectToUsers />} />
				<Route path='/users' element={<Users />} />
				<Route path='/users/:id/links' element={<Links />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/create' element={<ProductForm />} />
				<Route path='/products/:id/edit' element={<ProductForm />} />
				<Route path='/orders' element={<Orders />} />
			</Routes>
		</div>
	)
}

export default App
