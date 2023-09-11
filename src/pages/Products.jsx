import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
	Grid,
	GridItem,
	HStack,
	Heading,
	Image,
	useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../store/store'
const Products = () => {
	const { state, dispatch } = useContext(StoreContext)
	const toast = useToast()

	useEffect(() => {
		dispatch({ type: 'FETCHING_PRODUCTS' })
		axios
			.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`)
			.then(res => {
				dispatch({ type: 'FETCHED_PRODUCTS', payload: res.data.meals })
			})
	}, [])

	const addToBasket = product => {
		dispatch({ type: 'ADD_TO_BASKET', payload: product })
		toast({
			title: 'Product added to basket',
			status: 'success',
			position: 'top',
		})
	}

	return (
		<Box
			w={{
				base: '90%',
				md: '80%',
			}}
			mx={'auto'}
			my={12}
		>
			<Grid
				gridTemplateColumns={{
					base: '1fr',
					md: '1fr 1fr',
					lg: '1fr 1fr 1fr',
				}}
				gap={4}
			>
				{state?.products?.map(item => (
					<GridItem>
						<Card>
							<CardBody p={3}>
								<Image
									w={'full'}
									h={'250px'}
									rounded={'md'}
									src={item.strMealThumb}
								/>
								<Heading fontSize={'22px'} my={3}>
									{item.strMeal}
								</Heading>
								<Divider mb={3} />
								<HStack>
									{state.basket.findIndex(b => b.idMeal === item.idMeal) !==
									-1 ? (
										<Button variant={'outline'} colorScheme='teal'>
											<Link to={'/basket'}>Show basket</Link>
										</Button>
									) : (
										<Button
											colorScheme='teal'
											onClick={() => addToBasket(item)}
										>
											Add to cart
										</Button>
									)}
								</HStack>
							</CardBody>
						</Card>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default Products
