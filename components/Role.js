import React from 'react'

export default function Role({ title, isLast, isSecondLast }) {
  return (
    <span>
      <span className={'underline underline-offset-4 decoration-dashed decoration-2 decoration-gray-900/15'}>
        {title}
      </span>
      {isLast ? '' : isSecondLast ? ' & ' : ', '}
    </span>
  )
}