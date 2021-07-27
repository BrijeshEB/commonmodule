import React from 'react'
import {Grid,Card,Image,Button,Table} from 'semantic-ui-react';

export default function SavedAnnouncement() {
    return (
    <>
        <header className="App-header" style={{ padding: "15px" }}>
          Saved Announcement
        </header>
        <div className="ui container">
          <Grid divided>
            <Grid.Row columns={1}>
              <Grid.Column width={16}>
              <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                        <Table.Cell>
                            <Button positive size='mini'>Select</Button>
                            <Button primary size='mini'>Edit</Button>
                            <Button negative size='mini'>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                        <Table.Cell>
                            <Button positive size='mini'>Select</Button>
                            <Button primary size='mini'>Edit</Button>
                            <Button negative size='mini'>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                        <Table.Cell>
                            <Button positive size='mini'>Select</Button>
                            <Button primary size='mini'>Edit</Button>
                            <Button negative size='mini'>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    </>
    )
}
