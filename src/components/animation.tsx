import * as React from 'react'
import { Component } from 'react'
import Stepper from './stepper'


export default class Animation extends Component {
  render() {
    return(
      <div>
        <h2> Animations </h2>
        <p> works created in Harmony, Adobe Animate, and Photoshop </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-pedFJaxXuE"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"></iframe>
        <Stepper/>

      </div>
    )
  }
}
