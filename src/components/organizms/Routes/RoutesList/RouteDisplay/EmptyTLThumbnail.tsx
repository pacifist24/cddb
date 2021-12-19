import { VFC } from 'react'

const EmptyTLThumbnail: VFC = () => (
  <div className="flex items-center px-3 py-2 rounded-md " style={{ width: '415px' }}>
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
)

export default EmptyTLThumbnail
