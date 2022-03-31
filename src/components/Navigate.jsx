import React from "react";
import {Container, Col, Button, Row} from 'react-bootstrap'

export default function Navigate(props){

  return(
    <Container>
        <Row>
        <Col className="my-1">
            <Button block onClick={(e) => props.getPokemon(props.id-1)}>Previous</Button>
          </Col>
          <Col className="my-1">
            <Button block onClick={(e) => props.getPokemon(props.id+1)}>Next</Button>
          </Col>
        </Row>
    </Container>
  )
}