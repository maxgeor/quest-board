import React from 'react'

export default function Role({ title, isLast, isSecondLast, useUnderlines }) {
  return (
    <span>
      <span className={useUnderlines ? 'underline underline-offset-4 decoration-dashed decoration-1 decoration-gray-400' : ''}>
        {title.trim()}
      </span>
      {isLast ? '' : isSecondLast ? ' & ' : ', '}
    </span>
  )
}