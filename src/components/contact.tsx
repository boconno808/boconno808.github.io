import * as React from 'react'
import { Component } from 'react'
import Container from '@material-ui/core/Container';
import ContactCard from './contactCard';

export default class Contact extends Component {
  render() {
    return(
      <div>
        <h2> Contact </h2>
        <p> Instagram, Linkedin, Email </p>
        <ContactCard/>
      </div>
    )
  }
}
