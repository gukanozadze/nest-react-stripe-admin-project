import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => (
	<nav id='sidebarMenu' className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
		<div className='position-sticky pt-3'>
			<ul className='nav flex-column mt-4'>
				<li className='nav-item'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<NavLink className='nav-link active' aria-current='page' to='/'>
						<span data-feather='home' />
						Dashboard
					</NavLink>
				</li>
				<li className='nav-item'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<NavLink to='/products' className='nav-link active' aria-current='page'>
						<span data-feather='home' />
						Products
					</NavLink>
				</li>
				<li className='nav-item'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<NavLink to='/orders' className='nav-link active' aria-current='page'>
						<span data-feather='home' />
						Orders
					</NavLink>
				</li>
			</ul>
		</div>
	</nav>
)

export default Menu
