import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Icon,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { StoreContext } from '../store/store'

const Header = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	const { state } = useContext(StoreContext)

	return (
		<Box
			py={4}
			borderBottom={'1px'}
			borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
			pos={'sticky'}
			top={0}
			zIndex={'50'}
			bg={useColorModeValue('white', 'gray.800')}
		>
			<Flex
				w={{
					base: '90%',
					md: '80%',
				}}
				mx={'auto'}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Heading>I SHOP</Heading>

				<HStack spacing={3}>
					<Flex gap={3}>
						<Link to={'/'}>Home</Link>
						<Link to={'/basket'}>Basket({state.basket?.length})</Link>
					</Flex>
					<Button onClick={toggleColorMode}>
						<Icon
							fontSize={'20px'}
							as={colorMode === 'light' ? BsMoon : BsSun}
						/>
					</Button>
				</HStack>
			</Flex>
		</Box>
	)
}

export default Header
