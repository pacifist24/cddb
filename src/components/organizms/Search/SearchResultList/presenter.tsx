import { VFC, CSSProperties } from 'react'
import { DBTLDataType } from 'ducks/search'
import TLThumbnail from 'components/molecules/TLThumbnail'
import { FixedSizeList } from 'react-window'

type Props = {
  searchResults: DBTLDataType[]
  makeManuItems: (dbData: DBTLDataType) => { title: string; func: () => void }[]
}

const renderRow =
  (
    searchResults: DBTLDataType[],
    makeManuItems: (dbData: DBTLDataType) => { title: string; func: () => void }[],
  ) =>
  ({ index, style }: { index: number; style: CSSProperties }) =>
    (
      <div style={style}>
        <TLThumbnail
          tl={searchResults[index].tl}
          key={searchResults[index].tl.tlId}
          menuItems={makeManuItems(searchResults[index])}
          authorProfile={{
            userId: searchResults[index].userId,
            userName: searchResults[index].userName,
          }}
          favsNum={searchResults[index].fav}
        />
      </div>
    )

const SearchResultList: VFC<Props> = ({ searchResults, makeManuItems }) => (
  <FixedSizeList height={1000} itemCount={searchResults.length} itemSize={100} width={1000}>
    {renderRow(searchResults, makeManuItems)}
  </FixedSizeList>
)

export default SearchResultList
