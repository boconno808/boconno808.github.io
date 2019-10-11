import * as React from 'react'
import Eel from './pictures/eel.png';
import Chef from './pictures/greatchef.png';
import Fight from './pictures/fight.png';
import Game from './pictures/game.png';
import Swat from './pictures/swat.png';
import Wakeup from './pictures/WakeUpGirl.png';
//TODO: Add the embedded video links
/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/-pedFJaxXuE"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"></iframe>
*/
export const animTileData = [
  {
    imgPath: Chef,
    label: "A Great Chef",
    materials: "Harmony, After Effects, Storyboard Pro, and Photoshop "
  },
  {
    imgPath: Eel,
    label: "The Snack",
    materials: "Maya and Photoshop"
  },
  {
    imgPath: Fight,
    label: "Girl Vs Centipede",
    materials: "Adobe Animate"
  },
  {
    imgPath: Game,
    label: "Mini Game",
    materials: "Adobe Animate"
  },
  {
    imgPath: Swat,
    label: "Swat",
    materials: "Adobe Animate"
  },
  {
    imgPath: Wakeup,
    label: "Wake Up",
    materials: "Adobe Animate"
  },
]

export default {
  animTileData,
}
