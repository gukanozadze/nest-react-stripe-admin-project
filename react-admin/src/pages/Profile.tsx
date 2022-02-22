import React, { Dispatch, SyntheticEvent, useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Layout from '../components/Layout'
import { RootState } from '../redux/rootReducer'
import { setUserAction } from '../redux/actions/setUserAction'

const Profile = () => {
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password_confirm, setPasswordConfirm] = useState('')

	const { user } = useSelector((state: RootState) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		setFirstName(user.first_name)
		setLastName(user.last_name)
		setEmail(user.email)
	}, [user])

	const infoSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		const { data } = await axios.put('users/info', {
			first_name,
			last_name,
			email,
		})
		dispatch(setUserAction(data))
	}

	const passwordSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		await axios.put('users/password', {
			password,
			password_confirm,
		})
	}

	return (
		<Layout>
			<h3>Account Information</h3>
			<form onSubmit={infoSubmit}>
				<div className='mb-3'>
					<TextField
						label='First Name'
						value={first_name}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<TextField
						label='Last Name'
						value={last_name}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<TextField label='Email' value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<Button variant='contained' color='primary' type='submit'>
					Submit
				</Button>
			</form>

			<h3 className='mt-4'>Change Password</h3>
			<form onSubmit={passwordSubmit}>
				<div className='mb-3'>
					<TextField
						label='Password'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<TextField
						label='Password Confirm'
						type='password'
						value={password_confirm}
						onChange={e => setPasswordConfirm(e.target.value)}
					/>
				</div>
				<Button variant='contained' color='primary' type='submit'>
					Submit
				</Button>
			</form>
		</Layout>
	)
}

export default Profile
