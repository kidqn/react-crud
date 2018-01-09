"use strict"

//ADD TO CART
export function addToCart(cart){
	return {
		type: "ADD_TO_CART",
		payload: cart
	}
}

//UPDATE TO CART 
export function updateToCart(id,unit){
	return {
		type: "UPDATE_TO_CART",
		id: id,
		unit: unit
	}
}

//DELETE FROM CART
export function deleteToCart(cart){
	return {
		type: "DELETE_CART_ITEM",
		payload: cart
	}
}
