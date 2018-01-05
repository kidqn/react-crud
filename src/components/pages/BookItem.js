import React from 'react';
import {Row, Col,Button} from 'reactstrap';

class BookItem extends React.Component{
	render(){
		return(
			<div>
				<Col xs={12} style={{backgroundColor: "grey"}}>
					<h6>{this.props.title}</h6>
					<p>{this.props.desc}</p>
					<h6>{this.props.price}</h6>
					<Button color="primary">Buy now</Button>
				</Col>
			</div>
		)
	}
}
export default BookItem