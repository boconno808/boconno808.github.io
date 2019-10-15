import * as React from 'react'
import { Component } from 'react'
import Container from '@material-ui/core/Container';
import ContactCard from './contactCard';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default class Contact extends Component {
  render() {
    return(
      <div>
        <ContactCard/>
      </div>
    )
  }
}
