import React from 'react'

export default function Role({ title, isLast, isSecondLast }) {
  return (
    <span>
      <span className={'underline underline-offset-4 decoration-dashed decoration-1 decoration-gray-400/90'}>
        {title}
      </span>
      {isLast ? '' : isSecondLast ? ' & ' : ', '}
    </span>
  )
}