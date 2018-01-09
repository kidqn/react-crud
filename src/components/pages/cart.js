"use strict"
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteToCart, updateToCart} from '../../actions/cartActions'
import {Row, Col,Button, ButtonGroup, Badge} from 'reactstrap'

class Cart extends React.Component{
	onDelete(_id){
		console.log(_id)
		this.props.deleteToCart({id: _id})
	}
	onIncrement(id){
		this.props.updateToCart(id,1)
	}
	onDecrement(id, quantity){
		if(quantity > 1 ){
			this.props.updateToCart(id,-1)
		}
	}
	render(){
		if(this.props.cart.length > 0){
			return this.renderCart()
		}else {	
			return this.renderEmptyCart()
		}
	}
	renderEmptyCart(){
		return (<div></div>)
	}
	renderCart(){
		const cartItemList = this.props.cart.map((book)=>
			<div key={book.id}>
				<h6>{book.title}</h6>
				<h6>qty: <Badge color="warning">{book.quantity}</Badge></h6>
				<ButtonGroup>
			        <Button onClick={()=>this.onIncrement(book.id)}>+</Button>
			        <Button onClick={()=>this.onDecrement(book.id, book.quantity)}>-</Button>
			     </ButtonGroup>
				<Button color="danger" onClick={this.onDelete.bind(this,book.id)}>Delete</Button>
			</div>
		)
		return (
			<div>
			Length: ${cartItemList.length}
			{cartItemList}
			<h2>Total Price: {this.props.totalPrice}</h2>
			<h2>Total Books: {this.props.totalQty}</h2>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		cart: state.cart.cart,
		totalPrice: state.cart.totalPrice,
		totalQty: state.cart.totalQty

	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		deleteToCart: deleteToCart,
		updateToCart: updateToCart
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)