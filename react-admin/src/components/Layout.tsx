import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Menu from './Menu'
import Nav from './Nav'
import { User } from '../models/user'

interface Props {
	children: any
}
const Layout = ({ children }: Props) => {
	const [redirect, setRedirect] = useState(false)
	const [user, setUser] = useState<User | null>()

	useEffect(() => {
		;(async () => {
			try {
				const response = await axios.get('/user')
				setUser(response.data)
			} catch (e) {
				setRedirect(true)
			}
		})()
	}, [])

	if (redirect) {
		return <Navigate to='/login' />
	}
	return (
		<div>
			{user && <Nav user={user} />}

			<div className='container-fluid'>
				<div className='row'>
					<Menu />
					<main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
						<div className='table-responsive'>{children}</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Layout
