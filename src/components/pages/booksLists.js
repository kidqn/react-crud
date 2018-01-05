"use strict"

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import ACTION 
import {getBooks} from '../../actions/booksActions' 

//import GRID
import { Grid, Row, Col, Button } from 'reactstrap';

//import component
import BookItem from './BookItem';
import BookForm from './bookForm';

class BooksList extends React.Component{
	componentDidMount(){
		//dispatch an action
		this.props.getBooks();
	}

	render(){
		const booksList = this.props.books.map((book) =>  
			<Col xs={12} sm={6} md={4} key={book.id}>
				<BookItem 
				title = {book.title}
				description = {book.desc}
				price = {book.price}
				/>
			</Col>
		)
		return (
			<div>
				<h1>Hello this is app REACT CRUD</h1>

				<Col>
					<BookForm />
				</Col>
				<Row>
					{booksList}
				</Row>
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

