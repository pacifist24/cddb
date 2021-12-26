import { FC } from 'react'
import useMedia from 'use-media'

const Column: FC = ({ children }) => {
  const isWide = useMedia({ minWidth: '1000px' })
  return (
    <div className="h-screen overflow-scroll overflow-x-hidden">
      {children}
      {!isWide && <div className="text-transparent h-28">パディング</div>}
    </div>
  )
}

export default Column
