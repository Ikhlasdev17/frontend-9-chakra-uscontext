import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Basket from './pages/Basket'
import NotFoundPage from './pages/NotFoundPage'
import Products from './pages/Products'
import { initialState, reducer } from './store/reducer'
import { StoreContext } from './store/store'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Products />} />
					<Route path='/basket' element={<Basket />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</StoreContext.Provider>
	)
}

export default App
