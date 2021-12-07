import { FC } from 'react'

const Column: FC = ({ children }) => (
  <div className="h-screen overflow-scroll overflow-x-hidden">{children}</div>
)

export default Column
