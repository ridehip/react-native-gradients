import { AngleObject } from '../types'
import getPercentageFromAngle from './getPercentageFromAngle'

export default function getAnglePercentageObject(angle: number){
  let realAngle = angle

  let angleObj: AngleObject = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }

  if (realAngle <= 45) {
    realAngle += 360
  }

  if (realAngle <= 135) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 45),
      x2: getPercentageFromAngle(realAngle, 45, true),
      y1: 100,
      y2: 0
    }
  } else if (realAngle <= 225) {
    angleObj = {
      x1: 100,
      x2: 0,
      y1: getPercentageFromAngle(realAngle, 135, true),
      y2: getPercentageFromAngle(realAngle, 135)
    }
  } else if (realAngle <= 315) {
    angleObj = {
      x1: getPercentageFromAngle(realAngle, 225, true),
      x2: getPercentageFromAngle(realAngle, 225),
      y1: 0,
      y2: 100
    }
  } else {
    angleObj = {
      x1: 0,
      x2: 100,
      y1: getPercentageFromAngle(realAngle, 315),
      y2: getPercentageFromAngle(realAngle, 315, true)
    }
  }

  return angleObj
}
