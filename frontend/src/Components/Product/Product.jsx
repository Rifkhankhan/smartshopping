import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
const Product = ({ product }) => {
	console.log(`uploads/${product.image}`)
	return (
		<Card className="my-3 rounded">
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant="top" />
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div" style={{ textOverflow: 'ellipsis' }}>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as="div">
					<Rating value={product.rating} text={product.numReviews} />
				</Card.Text>

				<Card.Text as="p">${product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
