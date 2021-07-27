  import React from 'react';
  import "semantic-ui-css/semantic.min.css";
  import './Signup.scss';
  import { Button, Grid, Form, Header} from "semantic-ui-react";
  import { Link } from "react-router-dom";
  // import { Path } from "../routes/routePaths";

  export default function Signup() {
      return (
          <div className="bg-image bg-login-banner">
          <Grid style={{ height: "100%", margin: 0 }}>
            <Grid.Row>
              <Grid.Column width={16} style={{ position: "relative" }}>
                <div style={{ height: "100%", position: "relative" }}>
                  <div className="login-form">
                    <Form size="small">
                      <br />
                      <center>
                        <Header as="h1" className="header-login">Sign Up</Header>
                      </center>
                      <div className="login-input">
                        <Form.Input
                          fluid
                          maxLength={30}
                          placeholder="First Name"
                          // value={formData.firstName}
                          name="firstName"
                          // onChange={handleInputChange}
                        />
                        <Form.Input
                          fluid
                          maxLength={30}
                          placeholder="Last Name"
                          name="lastName"
                          // value={formData.lastName}
                          // onChange={handleInputChange}
                        />
                        <Form.Input
                          fluid
                          maxLength={70}
                          placeholder="Enter Email"
                          // value={formData.email}
                          name="email"
                          // onChange={handleInputEmail}
                        />
                        <Form.Input
                          fluid
                          type="password"
                          // type={showPassword ? "input" : "password"}
                          maxLength={25}
                          placeholder="******"
                          // onKeyUp={() => setPasswordError(false)}
                          // value={formData.password}
                          name="password"
                          // error={!user.password ? {content: "Password is required"}: false }
                          // onChange={handleInputChangePassword}
                        />
                        <Button
                          className="btn_big_text login-page-btn"
                          // onClick={doUserSignUp}
                          style={{ marginBottom: 8, color: "#fff" }}
                          // disabled={disableSubmit}
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                    <div className="bottom-contant">
                      <span className="text-last-login">
                        Already have an account?
                        <span>
                          <Link to='/login' style={{ color: "#ffa41b" }}>
                            {" "}
                            Sign in
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
  }
