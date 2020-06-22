import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';


class Landing extends Component {
  render() {
    return (
      <div>
        <h3>Click below to begin the survey!</h3>
        <br />
        <Link to='/Feeling'> <Button variant="contained" color="primary" size="small" type="submit">Begin</Button></Link>
      </div>
    );
  }
}

export default Landing;
