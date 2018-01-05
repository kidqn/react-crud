"use strict";

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//IMPORT REACT
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

import BooksList from './components/pages/booksLists';

//STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(function(){
// 	console.log('current state is: ', store.getState())
// })

render(
	<Provider store={store}>
		<BooksList/>
	</Provider>, document.getElementById('app')
)

//STEP 2 create and dispatch actions
// store.dispatch(postBooks([
// 	{
// 		id:0,
// 		title: 'anh phai song',
// 		price: 33.33,
// 		desc:'cuon sach cua khanh hung'
// 	},
// 	{
// 		id:1,
// 		title: 'tap chi cua Pi',
// 		price: 35.00,
// 		desc:'cuon sach ve Toan hoc'
// 	}
// ]))

// add books
store.dispatch(postBooks([
	{
		id:2,
		title: 'Chien tranh va hoa binh',
		price: 120.5,
		desc:'cuon sach ve chien tranh the gioi 2'
	}
]))

// delete books
store.dispatch(deleteBooks({id:1}))

// update books
store.dispatch(updateBooks(
	{
		id: 2, 
		title:'Son Tung - MTP'
	}
))

// -->> CART ACTION <<--
store.dispatch(addToCart([{id: 2}]))


