import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Menu from './Menu'
import Nav from './Nav'
import { RootState } from '../redux/rootReducer'
import { setUserAction } from '../redux/actions/setUserAction'

interface Props {
	children: any
}
const Layout = ({ children }: Props) => {
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.user)

	const [redirect, setRedirect] = useState(false)

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get('/user')

				dispatch(setUserAction(data))
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
			<Nav />

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
