/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../models/user'

interface Props {
	user: User
}

const Nav = ({ user }: Props) => {
	const logout = async () => {
		await axios.get('/logout')
	}

	return (
		<header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
			<a className='navbar-brand col-md-3 col-lg-2 me-0 px-3' href='#'>
				Company name
			</a>

			<div className='navbar-nav d-flex'>
				<Link className='nav-link px-3' to='/profile'>
					{user.first_name} {user.last_name}
				</Link>
				<Link className='nav-link px-3' to='/login' onClick={logout}>
					Sign out
				</Link>
			</div>
		</header>
	)
}

export default Nav
