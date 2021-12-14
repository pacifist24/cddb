import { VFC } from 'react'
import Column from 'components/atoms/Column'
import SearchButton from 'components/organizms/Search/SearchButton'
import SearchResultList from 'components/organizms/Search/SearchResultList'
import ConditionsInput from 'components/organizms/Search/ConditionsInput'
import SortConditionRadio from 'components/organizms/Search/SortConditionRadio'

const Search: VFC = () => (
  <Column>
    <ConditionsInput />
    <div className="ml-3">
      <div className="mt-3">
        <SortConditionRadio />
      </div>
      <div className="mt-3">
        <SearchButton />
      </div>
      <div className="mt-5">
        <SearchResultList />
      </div>
    </div>
  </Column>
)

export default Search
