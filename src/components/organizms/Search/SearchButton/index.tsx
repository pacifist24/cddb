import { VFC } from 'react'
import { fetchTlsData } from 'lib/dbSearch'
import { setSearchResults } from 'ducks/search'
import { useAppDispatch } from 'app/hooks'
import Presenter from './presenter'

const SearchButton: VFC = () => {
  const dispatch = useAppDispatch()

  const onClick = async () => {
    const data = await fetchTlsData()
    dispatch(setSearchResults(data))
  }

  return <Presenter onClick={onClick} />
}

export default SearchButton
