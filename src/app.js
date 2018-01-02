"use strict";
import {createStore} from 'redux';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';

//STEP 3 of define reducers
const reducer = function(state = {books:[]}, action){

	switch(action.type){
		case "POST_BOOK":
			return {books: [...state.books, ...action.payload]}
			break
		case "DELETE_BOOK": {
			// create a copy of array of books
			const currBook = [...state.books];

			//determine book deleted
			const newArray = currBook.filter(
				e => e.id !== action.payload.id
			)
			return {
				...state,
				books: newArray
			}
			break
		}
		case "UPDATE_BOOK": {
			// create a copy of array of books
			const currBook = [...state.books];
			//determine book deleted
			currBook.map((item, index) => {
				if(item.id === action.payload.id){
					item.title = action.payload.title;
				}	
			})
			return {
				...state,
				books: currBook
			}
			break
		}
	}
	return state;
}

//STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
	console.log('current state is: ', store.getState())
})

//STEP 2 create and dispatch actions
store.dispatch({'type': "POST_BOOK", payload: [
	{
		id:0,
		title: 'anh phai song',
		price: 33.33,
		desc:'cuon sach cua khanh hung'
	},
	{
		id:1,
		title: 'tap chi cua Pi',
		price: 35.00,
		desc:'cuon sach ve Toan hoc'
	},
]
})

// add books
store.dispatch({'type': "POST_BOOK", payload: [
	{
		id:2,
		title: 'Chien tranh va hoa binh',
		price: 120.5,
		desc:'cuon sach ve chien tranh the gioi 2'
	}
]
})

// delete books
store.dispatch({'type': 'DELETE_BOOK', payload: {id: 1}})

// update books
store.dispatch({'type': 'UPDATE_BOOK', payload: {id: 2, title:'Son Tung - MTP'}})


