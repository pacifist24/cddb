import { VFC } from 'react'
import Column from 'components/atoms/Column'
import SearchButton from 'components/organizms/Search/SearchButton'
import SearchResultList from 'components/organizms/Search/SearchResultList'

const Search: VFC = () => (
  <Column>
    <SearchButton />
    <SearchResultList />
  </Column>
)

export default Search
