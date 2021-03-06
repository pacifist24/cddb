import { VFC } from 'react'
import useMedia from 'use-media'
import Presenter from './presenter'

const EmptyTLThumbnail: VFC = () => {
  const isWide = useMedia({ minWidth: '500px' })
  return <Presenter isWide={isWide} />
}

export default EmptyTLThumbnail
