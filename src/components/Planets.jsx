import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets({ data }) {
  return (
    <>
      <h1>Planets</h1> 
      <Grid columns={3}>
        {data && Array.isArray(data) && data.map((planets, i) => (
          <Grid.Column key={i}>
            <Card>
              <Card.Content>
                <Card.Header>{planets.name}</Card.Header>
                <Card.Description>
                    <strong>Name: </strong>
                    {planets.name} <br/>
                  <strong>Climate: </strong>
                   {planets.climate}<br />
                  <strong>Diameter: </strong> 
                  {planets.diameter}<br />
                  <strong>Population: </strong> 
                  {planets.population} <br />
                  <strong>Terrain: </strong> 
                  {planets.terrain} 
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}
