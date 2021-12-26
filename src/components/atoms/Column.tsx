import { FC } from 'react'
import useMedia from 'use-media'
import clsx from 'clsx'

const Column: FC = ({ children }) => {
  const isWide = useMedia({ minWidth: '1000px' })
  return (
    <div
      className={clsx('h-screen overflow-scroll overflow-x-hidden', {
        'pb-10': !isWide,
      })}
    >
      {children}
    </div>
  )
}

export default Column
