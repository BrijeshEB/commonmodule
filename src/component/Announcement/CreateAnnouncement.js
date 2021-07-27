import React from 'react'
import {Grid,Form,Container,Button} from 'semantic-ui-react';

export default function CreateAnnouncement() {
    return (
    <>
        <header className="App-header" style={{ padding: "15px" }}>
          Create Announcement
        </header>
        <div className="ui container">
        <Container>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={12}>
                    <Form>
                        <Form.Group unstackable widths={2}>
                            <Form.Input label='First name' placeholder='First name' />
                            <Form.Input label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Address' placeholder='Address' />
                            <Form.Input label='Order Number' placeholder='Order Number' />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Order Date' placeholder='Order Date' />
                            <Form.Input label='Product Name' placeholder='Product Name' />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Product Description' placeholder='Product Description' />
                            <Form.Input label='Product Price' placeholder='Product Price' />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Product Quantity' placeholder='Product Quantity' />
                            <Form.Input label='InvoiceNumber' placeholder='InvoiceNumber' />
                        </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button primary type='submit'>Submit</Button>
                    </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </div>
    </>
    )
}
