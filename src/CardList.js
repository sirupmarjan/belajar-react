import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class CardList extends Component {
    render() {
        return (
            <div>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
                        <Card.Text>{this.props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
