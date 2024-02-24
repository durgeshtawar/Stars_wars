import React from 'react';
import { Card, Grid } from 'semantic-ui-react'; 

export default function People({data }) {
  return (
   <div>
    <h1>People In the Planets </h1> 
    <Grid columns={3}>
      {data && Array.isArray(data) && data.map((people, i) => (
        <Grid.Column key={i}>
          <Card>
            <Card.Content>
              <Card.Header>{people.name}</Card.Header>
              <Card.Description>
                <strong>Name: </strong>
                {people.name} <br />
                <strong>Gender: </strong>
                {people.gender}<br />
                <strong>Height: </strong>
                 {people.height}<br />
                <strong>Mass: </strong> {people.mass}<br />
                <strong>Hair Color: </strong> {people.hair_color}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
   </div>
  );
}
