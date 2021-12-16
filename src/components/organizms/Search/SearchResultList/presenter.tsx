import { VFC, CSSProperties } from 'react'
import { DBTLDataType } from 'ducks/search'
import TLThumbnail from 'components/molecules/TLThumbnail'
import { FixedSizeList } from 'react-window'
import SaveGroupSelectDialog from 'components/molecules/SaveGroupSelectDialog'

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

type Props = {
  searchResults: DBTLDataType[]
  makeManuItems: (dbData: DBTLDataType) => { title: string; func: () => void }[]
  groupName: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  handleChangeGroupName: (groupName: string) => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const SearchResultList: VFC<Props> = ({
  searchResults,
  makeManuItems,
  groupName,
  isOpen,
  setIsOpen,
  handleChangeGroupName,
  handleClickOK,
  handleClickCancel,
}) => (
  <>
    <FixedSizeList height={1000} itemCount={searchResults.length} itemSize={100} width={1000}>
      {renderRow(searchResults, makeManuItems)}
    </FixedSizeList>
    <SaveGroupSelectDialog
      groupName={groupName}
      handleChangeGroupName={handleChangeGroupName}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleClickOK={handleClickOK}
      handleClickCancel={handleClickCancel}
    />
  </>
)

export default SearchResultList
