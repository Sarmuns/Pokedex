import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";

export default function PokemonData(props){
  return(
    <Container className="mt-2">
      <Row>
      <Col xs={12} md={6}>
          <Card  className="h-100">
            <Card.Header>
              <Row>
                <Col>
              <h5>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h5>                 
              <small class="text-muted">Number: {props.id}</small>
                </Col>
              </Row>
              <Row>
                <Col>
              <img src={props.sprite} alt={props.name}/>
                </Col>
                <Col>
              <img src={props.shiny} alt={props.name}/>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <h5>Abilities</h5>
              {props.abilities.map((ability, key) => (
                <div key={key}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
              <h5>Types</h5>
              {props.types.map((type, key) => (
                <div key={key}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="h-100">
            <Card.Header>
              <h4>Base Stats</h4>
            </Card.Header>
            <Card.Body>
                {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{stat.stat.name}</strong>
                  <ProgressBar now={stat.base_stat} max={200} label={stat.base_stat}/>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}