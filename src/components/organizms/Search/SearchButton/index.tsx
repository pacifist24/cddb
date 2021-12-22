import { VFC, useState } from 'react'
import { fetchTlsData } from 'lib/dbAccess'
import { setSearchResults } from 'ducks/search'
import { useAppDispatch } from 'app/hooks'
import Presenter from './presenter'

const SearchButton: VFC = () => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const onClick = async () => {
    setIsLoading(true)
    const data = await fetchTlsData()
    dispatch(setSearchResults(data))
    setIsLoading(false)
  }

  return <Presenter onClick={onClick} disabled={isLoading} />
}

export default SearchButton
