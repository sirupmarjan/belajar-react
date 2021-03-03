import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

 class CardList extends Component {
    render() {
        return (
            <div>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
                        <Card.Text>{this.props.text}</Card.Text>
                        <Button className="btn btn-primary" href={this.props.link}>Buka Situs</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


function goToPage(data){
    var link = "/"+data;
    console.log(link);   
    return(
        <div>
            <NavLink to={link} />
        </div>
        );
}

export default CardList;

