import { FC } from 'react'
import useMedia from 'use-media'

const Column: FC = ({ children }) => {
  const isWide = useMedia({ minWidth: '1000px' })
  return (
    <div className="h-screen overflow-scroll overflow-x-hidden">
      {children}
      {!isWide && <div className="h-10" />}
    </div>
  )
}

export default Column
