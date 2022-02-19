import React, { SyntheticEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import Layout from '../../components/Layout'

const ProductForm = () => {
	const { id } = useParams()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState('')
	const [price, setPrice] = useState('')
	const [redirect, setRedirect] = useState(false)

	useEffect(() => {
		if (id) {
			;(async () => {
				const { data } = await axios.get(`/products/${id}`)

				setTitle(data.title)
				setDescription(data.description)
				setImage(data.image)
				setPrice(data.price)
			})()
		}
	}, [])

	const onSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()
		const data = {
			title,
			description,
			image,
			price,
		}
		if (id) {
			await axios.put(`/products/${id}`, data)
		} else {
			await axios.post('/products', data)
		}
		setRedirect(true)
	}

	if (redirect) {
		return <Navigate to='/products' />
	}
	return (
		<Layout>
			<form onSubmit={onSubmit} className={'pt-4'}>
				<div className={'mb-3'}>
					<TextField label={'title'} value={title} onChange={e => setTitle(e.target.value)} />
				</div>

				<div className={'mb-3'}>
					<TextField
						label={'description'}
						rows={4}
						value={description}
						multiline
						onChange={e => setDescription(e.target.value)}
					/>
				</div>

				<div className={'mb-3'}>
					<TextField label={'image'} value={image} onChange={e => setImage(e.target.value)} />
				</div>

				<div className={'mb-3'}>
					<TextField
						label={'price'}
						value={price}
						type='number'
						onChange={e => setPrice(e.target.value)}
					/>
				</div>

				<Button variant={'contained'} color='primary' type={'submit'}>
					Submit
				</Button>
			</form>
		</Layout>
	)
}
export default ProductForm
