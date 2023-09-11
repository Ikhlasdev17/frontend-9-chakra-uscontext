import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
	Grid,
	GridItem,
	Heading,
	Image,
	useToast,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { StoreContext } from '../store/store'
const Basket = () => {
	const { state, dispatch } = useContext(StoreContext)
	const toast = useToast()

	const removeFromBasket = id => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: id })
		toast({
			title: 'Product removed from basket',
			status: 'info',
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
			<Heading mb={12}>Basket</Heading>
			<Grid
				gridTemplateColumns={{
					base: '1fr',
					md: '1fr 1fr',
					lg: '1fr 1fr 1fr',
				}}
				gap={4}
			>
				{state?.basket?.map(item => (
					<GridItem>
						<Card>
							<CardBody>
								<Image src={item.strMealThumb} />
								<Heading fontSize={'22px'} my={3}>
									{item.strMeal}
								</Heading>
								<Divider mb={3} />
								<Button onClick={() => removeFromBasket(item.idMeal)}>
									Remove from basket
								</Button>
							</CardBody>
						</Card>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default Basket
