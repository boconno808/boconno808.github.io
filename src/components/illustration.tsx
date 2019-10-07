import * as React from 'react'
import { Component } from 'react'
import IllustrationGrid from './IllustrationGrid'

export default class Illustration extends Component {
  render() {
    return(
      <div>
        <h2> Illustration </h2>
        <p> Works created in Photoshop and other media </p>
        <IllustrationGrid/>
      </div>
    )
  }
}
