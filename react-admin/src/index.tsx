import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import axios from 'axios'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { rootReducer } from './redux/rootReducer'

axios.defaults.baseURL = 'http://localhost:8000/api/admin'
axios.defaults.withCredentials = true

const store = createStore(rootReducer)

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
