import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Members }  from "./FormStyles";

const TeamCard = ( props) => {
  console.log(props);

  return (
    <Members>
      {props.member.map((mem, i) => {
        return (
          <Card key = {i}>
            <CardBody>
              <CardTitle>{mem.name}</CardTitle>
              <CardSubtitle>{mem.role}</CardSubtitle>
              <CardText>{mem.email} </CardText>
            </CardBody>
          </Card>
        );
      })}
    </Members>
  );
  
};

export default TeamCard;
