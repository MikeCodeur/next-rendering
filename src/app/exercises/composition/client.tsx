'use client'
import React from 'react'
import {CardComponentType} from './card'
import {ComponentTypeEnum, detectActualType} from './util'

export default function Client({children}: {children?: React.ReactNode}) {
  const actualType = detectActualType()

  return (
    <CardComponentType
      componentType={ComponentTypeEnum.CLIENT}
      actualType={actualType}
    >
      {children}
    </CardComponentType>
  )
}
// function detectActualType() {
//   return typeof window === 'undefined'
//     ? ComponentTypeEnum.SERVER
//     : ComponentTypeEnum.CLIENT
// }
