import { PropsWithChildren } from "react"
import { ViewProps } from "react-native"
import { NumberProp } from "react-native-svg"

export type ColorStops = {
  offset: string
  color: string
  opacity: string
}[]

export type LinearGradientProps = {
  colorList: ColorStops
  angle: number
}

export type LinearGradientBackgroundProps = PropsWithChildren<LinearGradientProps> & ViewProps

export type RadialGradientProps = {
  colorList: ColorStops
  x: NumberProp
  y: NumberProp
  rx: NumberProp
  ry: NumberProp
}

export type RadialGradientBackgroundProps = PropsWithChildren<RadialGradientProps> & ViewProps

export type AngleObject = {
  x1: number
  x2: number
  y1: number
  y2: number
}
