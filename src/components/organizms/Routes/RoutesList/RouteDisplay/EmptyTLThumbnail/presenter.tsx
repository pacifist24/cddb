import { VFC } from 'react'

type Props = {
  isWide: boolean
}

const EmptyTLThumbnail: VFC<Props> = ({ isWide }) => (
  <>
    {isWide && (
      <div className="flex items-center py-2 rounded-md" style={{ width: '415px' }}>
        <div className="relative">
          <img src="/empty2.png" className="w-20 h-20" alt="Empty" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center pl-1">持ち越し編成はありません</div>

          <div className="flex">
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
          </div>
        </div>
      </div>
    )}
    {!isWide && (
      <div className="relative py-2" style={{ width: '300px' }}>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />{' '}
            <div className="flex flex-col ml-1">
              <div className="flex">
                <div className="flex items-center pl-1">持ち越し編成はありません</div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
            <img src="/empty2.png" className="w-14 h-14" alt="Empty" />
          </div>
        </div>
      </div>
    )}
  </>
)

export default EmptyTLThumbnail
