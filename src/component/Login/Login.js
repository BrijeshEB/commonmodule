import React from 'react'
import "semantic-ui-css/semantic.min.css";
import "./Login.scss";
import { Button, Grid, Form, Header, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './Login.scss'

export default function Login() {
    return (
        <div className="bg-image bg-login-banner">
        <Grid style={{ height: "100%", margin: 0 }}>
          <Grid.Row>
            <Grid.Column width={16} style={{ position: "relative" }}>
              <div style={{ height: "100%", position: "relative" }}>
                <div className="login-form">
                  <Form size="small">
                    <center>
                      <Header as="h1" className="header-login" style={{ marginTop: 30 }}>Common Module</Header>
                    </center>
                    <div className="login-input">
                      <Form.Input
                        fluid
                        type="email"
                        maxLength={50}
                        placeholder="Enter Email"
                        // value={email}
                        name="email"
                      />
                      <Form.Input
                        fluid
                        type='password'
                        // type={showPassword ? "input" : "password"}
                        placeholder="******"
                        // value={password}
                        maxLength={25}
                        name="password"
                        // icon={
                        //   <Icon
                        //     name={showPassword ? "eye slash" : "eye"}
                        //     link
                        //     onClick={showHidePassword}
                        //   />
                        // }
                        // error={
                        //   passwordError
                        //     ? { content: "Password is required" }
                        //     : false
                        // }
                        // onChange={(e) => setPassword(e.target.value)}
                        // onKeyUp={() => setPasswordError(false)}
                      />
                      <center>
                        <Link
                        //   to="/forgot-password"
                          className="lbl_href"
                          style={{ color: "#000", fontWeight: 500 }}
                        >
                          Forgot Password?
                        </Link>
                      </center>
                      <Button
                        className="btn_big_text login-page-btn"
                        // onClick={doUserLogin}
                        style={{ color: "#fff" }}
                        // disabled={disableSubmit}
                      >
                        <Link to="/" className="text-white">Sign In</Link>
                      </Button>
                    </div>
                  </Form>
                    <div className="bottom-contant">
                      <span className="text-last-login">
                        New User?
                        <Link to="/signup" className="text-orange">
                          {" "}
                          Register Now
                        </Link>
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
