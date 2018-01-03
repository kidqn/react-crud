"use strict"

// GET BOOK
export function getBooks(){
	return {
		type: 'GET_BOOK'
	}
}

// POST BOOK
export function postBooks(book){
	return {
		type: 'POST_BOOK',
		payload: book
	}
}

// DELETE BOOK
export function deleteBooks(id){
	return {
		type: 'DELETE_BOOK',
		payload: id
	}
}

// UPDATE BOOK
export function updateBooks(book){
	return {
		type: "UPDATE_BOOK",
		payload: book
	}
}