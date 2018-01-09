"use strict"

const initialState = {
    cart: [],
};

//CART REDUCERS
export function cartReducers(state = initialState, action){
	switch(action.type){
		case "ADD_TO_CART": {
			const newArray = [...state.cart, ...action.payload];
			return {
				...state,
				cart: newArray,
				totalPrice: totalPrice(newArray).totalPrice,
				totalQty: totalQuantity(newArray).totalQty
			}
			break
		}
		case "DELETE_CART_ITEM": {
			// create a copy of array of books
			const currCart = [...state.cart];
			console.log(action.payload.id)
			//determine Cart deleted
			const newArray = currCart.filter(
				e => e.id !== action.payload.id
			)
			return {
				...state,
				cart: newArray,
				totalPrice: totalPrice(newArray).totalPrice,
				totalQty: totalQuantity(newArray).totalQty
			}
			break
		}
		case "UPDATE_TO_CART": {
			// create a copy of array of cart
			const currCart = [...state.cart];
			//determine book deleted
			currCart.map((item, index) => {
				if(item.id === action.id){
					item.quantity += action.unit;
				}	
			})
			return {
				...state,
				cart: currCart,
				totalPrice: totalPrice(currCart).totalPrice,
				totalQty: totalQuantity(currCart).totalQty
			}
			break
		}
	}
	return state;
}

//CALCULATE TOTAL PRICE
export function totalPrice(cart){
	const _totalPrice = cart.map(
		(item) => item.quantity * item.price
	).reduce( (a,b) => a + b, 0)
	return {
		totalPrice: _totalPrice
	}
}

//CALCULATE TOTAL QUANTITY
export function totalQuantity(cart){
	const _totalQty = cart.map((obj) => obj.quantity).reduce( (a,b) => a + b, 0)
	return {
		totalQty: _totalQty
	}
}