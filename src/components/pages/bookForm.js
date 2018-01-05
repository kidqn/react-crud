import React from 'react';
import {findDOMNode} from 'react-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {postBooks} from '../../actions/booksActions'

class BookForm extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(){
		console.log(this.refs)
		// const book = [{
		// 	title: findDOMNode(this.refs.title).value,
		// 	desc: findDOMNode(this.refs.desc).value,
		// 	price: findDOMNode(this.refs.price).value
		// }]
		// this.props.postBooks(book)
	}
	render(){
		return(
			<div>
				<Form>
					<FormGroup>
						<Label for="title">Title</Label>
	          			<Input type="text" name="title" id="title" placeholder="Name of book" />
					</FormGroup>
					<FormGroup>
						<Label for="desc">Description</Label>
	          			<Input type="text" name="desc" id="desc" placeholder="Description of book" />
					</FormGroup>
					<FormGroup>
						<Label for="price">Price</Label>
	          			<Input type="text" name="price" id="price" placeholder="Price of book" />
					</FormGroup>
					<Button color="primary" onClick={this.handleSubmit}>Save a book</Button>
				</Form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postBooks: postBooks
	}, dispatch)
}
export default connect(mapDispatchToProps)(BookForm)