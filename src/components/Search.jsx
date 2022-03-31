import React from "react";
import {Form, Container, Col, Button, Row} from 'react-bootstrap'

export default function Search(props){

  const [search, setSearch] = React.useState('');

  return(
    <Container>
      <Form className="mt-2">
        <Row>
          <Col sm={10} className="my-1">
            <Form.Control
              onChange={(e => setSearch(e.target.value))}
              placeholder="Search thy pokemon"/>
          </Col>
          <Col>
            <Button className="h-100"block onClick={(e) => props.getPokemon(search.toLowerCase())}>Search</Button>
          </Col>
          <Col>
            <Button block onClick={(e) => props.getPokemon(Math.floor(Math.random()*898))}>Surprise Me!</Button>
          </Col>

        </Row>
      </Form>
       
    </Container>
  )
}