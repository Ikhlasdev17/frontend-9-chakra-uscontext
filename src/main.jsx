import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { theme } from './config/theme.config.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</BrowserRouter>
)
