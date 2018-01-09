import React from 'react'
import {Row, Col,Button} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addToCart, updateToCart} from '../../actions/cartActions'

class BookItem extends React.Component{
	addBookToCart(id){
		const book = [{
			id: this.props.id,
			title: this.props.title,
			desc: this.props.desc,
			price: this.props.price,
			quantity: 1
		}]
		
		if(this.props.cart.length > 0){
			let isExistItem =  this.props.cart.filter((item) => item.id === this.props.id)
			if (isExistItem.length > 0){
				//if item existed
				this.props.updateToCart(id,1)
			}else{
				this.props.addToCart(book)
			}
		}else {
			//CART IS EMPTY
			this.props.addToCart(book)
		}	
	}
	render(){
		return(
			<div>
				<Col xs={12} style={{backgroundColor: "grey"}}>
					<h6>{this.props.title}</h6>
					<p>{this.props.desc}</p>
					<h6>{this.props.price}</h6>
					<button onClick={this.addBookToCart.bind(this, this.props.id)} color="primary">Buy now</button>
				</Col>
			</div>
		)
	}
}
function mapStateToProps(state){
	return{
		cart: state.cart.cart
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addToCart: addToCart,
		updateToCart: updateToCart
	},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (BookItem)