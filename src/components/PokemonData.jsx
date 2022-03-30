import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";

export default function PokemonData(props){
  return(
    <Container className="mt-2">
      <Row>
      <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h5>{props.name}</h5>
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
          <Card>
            <Card.Body>
                <h4>base stats</h4>
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