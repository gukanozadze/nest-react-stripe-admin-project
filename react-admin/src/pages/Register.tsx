import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Register = () => {
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password_confirm, setPasswordConfirm] = useState('')

	const [redirect, setRedirect] = useState(false)
	const yle = 'dfs'

	const onSubmit = async (e: any) => {
		e.preventDefault()

		await axios.post('/register', {
			first_name,
			last_name,
			email,
			password,
			password_confirm,
		})

		setRedirect(true)
	}

	if (redirect) {
		return <Navigate to='/login' />
	}

	return (
		<main className='form-signin'>
			<form onSubmit={onSubmit}>
				<h1 className='h3 mb-3 fw-normal'>Please register</h1>

				<div className='form-floating'>
					<input
						name='first_name'
						className='form-control'
						placeholder='First name'
						value={first_name}
						onChange={e => setFirstName(e.target.value)}
					/>
					<label htmlFor='floatingInput'>First Name</label>
				</div>

				<div className='form-floating'>
					<input
						name='last_name'
						className='form-control'
						placeholder='Last name'
						value={last_name}
						onChange={e => setLastName(e.target.value)}
					/>
					<label htmlFor='floatingInput'>Last Name</label>
				</div>

				<div className='form-floating'>
					<input
						name='email'
						type='email'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor='floatingInput'>Email address</label>
				</div>

				<div className='form-floating'>
					<input
						value={password}
						name='password'
						type='password'
						className='form-control'
						placeholder='Password'
						onChange={e => setPassword(e.target.value)}
					/>
					<label>Password</label>
				</div>
				<div className='form-floating'>
					<input
						value={password_confirm}
						name='password_confirm'
						type='password'
						className='form-control'
						placeholder='Password Confirm'
						onChange={e => setPasswordConfirm(e.target.value)}
					/>
					<label>Password Confirm</label>
				</div>

				<div className='checkbox mb-3'>
					<label>
						<input type='checkbox' value='remember-me' /> Remember
						me
					</label>
				</div>
				<button className='w-100 btn btn-lg btn-primary' type='submit'>
					Register
				</button>
			</form>
		</main>
	)
}

export default Register
