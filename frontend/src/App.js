import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { styled } from '@mui/material/styles';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import EmojiPicker from 'emoji-picker-react';
import "./api/axiosDefaults";
//import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";

import { withStyles } from "@material-ui/core/styles";
import { TextareaAutosize } from "@material-ui/core";
import { Router } from "react-router-dom";



const useStyles = (theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 450px;
    font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 30%;
    margin-left: 30%;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );





class App extends Component {
  state = {
    filledForm: false,
    messages: [],
    value: "",
    name: "",
    room: "test",
  };

  client = new W3CWebSocket("ws://127.0.0.1:3000/ws/" + this.state.room + "/");

  onButtonClicked = (e) => {
    this.client.send(
      JSON.stringify({
        type: "message",
        text: this.state.value,
        sender: this.state.name,
      })
    );
    this.setState({
      value: ""
  })
    e.preventDefault();
  };

  componentDidMount() {
    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer) {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              msg: dataFromServer.text,
              name: dataFromServer.sender,
            },
          ],
        }));
      }
    };
  }

  render() {

{ console.log("just before nav")}


     // This is the NavBar I am trying to import  
    { console.log("just after nav")}
    const { classes } = this.props;
    return (
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
      <Grid xs={6}>
      <StyledTextarea aria-label="empty textarea" placeholder="Waiting on tutor ... " />
        </Grid>
      <Grid xs={3} component="main" maxWidth="xs">
    
        {this.state.filledForm ? (
          <div style={{ marginTop: 50 }}>
            Room Name: {this.state.room}
            <Paper
              style={{height: 500, maxHeight: 500, overflow: "auto", boxShadow: "none", }}
            >
              {this.state.messages.map((message) => (
                <>
                
                  <Card className={classes.root}>
                    <CardHeader title={message.name} subheader={message.msg} />
                  </Card>
                </>
              ))}
            </Paper>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.onButtonClicked}
            >
              <TextField id="outlined-helperText" label="Write text" defaultValue="Default Value"
                variant="outlined"
                value={this.state.value}
                fullWidth
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                  this.value = this.state.value;
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send Message
              </Button>
            </form>
          </div>
          
        ) : (
          <div>
            <CssBaseline />
            <div className={classes.paper}>
              <form
                className={classes.form}
                noValidate
                onSubmit={(value) => this.setState({ filledForm: true })}
              >
                <TextField variant="outlined" margin="normal" required fullWidth label="Room name"
                  name="Room name"
                  autoFocus
                  value={this.state.room}
                  onChange={(e) => {
                    this.setState({ room: e.target.value });
                    this.value = this.state.room;
                  }}
                />
                <TextField variant="outlined" margin="normal" required fullWidth name="sender" label="sender"
                  type="sender"
                  id="sender"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                    this.value = this.state.name;
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
            </div>
            <Router>
<NavBar /> 
</Router>
          </div>
        )}
      </Grid>
      <div>
      <EmojiPicker height={300} width={200}/>
    </div>
      </Grid>
      </Box>
    );
  }
}

export function EmptyTextarea() {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  }};
export default withStyles(useStyles)(App);