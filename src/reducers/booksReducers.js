"use strict"

//BOOK REDUCERS
export function booksReducers(state = {books:[
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
		}
	]}, action){
	
	switch(action.type){
		case "GET_BOOK": 
			return {
				...state, 
				books: [...state.books]
			}
			break
		case "POST_BOOK":
			return {books: [...state.books, ...action.payload]}
			break
		case "DELETE_BOOK": {
			// create a copy of array of books
			const currBook = [...state.books];
			console.log(action.payload.id)
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