import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {postBooks} from '../../actions/booksActions'

class BookForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formTitle: '',
			formDesc: '',
			formPrice: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(){
		const book = [{
			title: this.state.formTitle,
			desc: this.state.formDesc,
			price: this.state.formPrice
		}]
		this.props.postBooks(book);
	}

	render(){
		return(
			<div>
				<Form>
					<FormGroup>
						<Label for="title">Title</Label>
	          			<Input type="text" name="formTitle" 
	          			onChange={this.handleInputChange} id="title" placeholder="Name of book" />
					</FormGroup>
					<FormGroup>
						<Label for="desc">Description</Label>
	          			<Input type="text" name="formDesc" onChange={this.handleInputChange} id="desc" placeholder="Description of book" />
					</FormGroup>
					<FormGroup>
						<Label for="price">Price</Label>
	          			<Input type="text" name="formPrice" onChange={this.handleInputChange} id="price" placeholder="Price of book" />
					</FormGroup>
					<Button color="primary" onClick={this.handleSubmit}>Save a book</Button>
				</Form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({postBooks}, dispatch)
}
export default connect(null,mapDispatchToProps)(BookForm)