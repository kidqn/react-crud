"use strict"

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBooks} from '../../actions/booksActions' 

class BooksList extends React.Component{
	componentDidMount(){
		//dispatch an action
		this.props.getBooks();
	}

	render(){
		const booksList = this.props.books.map((book) =>  
			<div key={book.id}>
				<h3>{book.title}</h3>
				<p>{book.desc}</p>
				<p>{book.price}</p>
			</div>
		)
		return (
			<div>
				<h1>Hello this is app REACT CRUD</h1>
				{booksList}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		books: state.books.books
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks: getBooks 
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

