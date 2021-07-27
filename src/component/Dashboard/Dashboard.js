import React from 'react'
import './Dashboard.scss'
import { List, Grid, Card, Image, Button } from "semantic-ui-react";

export default function Dashboard() {
    return (
    <>
      <header className="App-header" style={{ padding: "15px" }}>
        Dashboard
      </header>
      <div className="ui container">
        <Grid divided>
          <Grid.Row columns={1} centered>
            <Grid.Column width={14}>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                    />
                    <Card.Header>Molly Thomas</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                      Molly wants to add you to the group <strong>musicians</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                    />
                    <Card.Header>Jenny Lawrence</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                      Jenny requested permission to view your contact details
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                    />
                    <Card.Header>Molly Thomas</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                      Molly wants to add you to the group <strong>musicians</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                    />
                    <Card.Header>Jenny Lawrence</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                      Jenny requested permission to view your contact details
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
    )
}
