import { VFC } from 'react'
import { TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import clsx from 'clsx'
import { CHARACTERS_INFO } from 'lib/gameConstants'

type Props = {
  handleClickSubmit: (key: string, value: string) => () => void
  nameFrom: string
  changeNameFrom: (val: string) => void
  nameTo: string
  changeNameTo: (val: string) => void
}

const ConversionRuleInput: VFC<Props> = ({
  handleClickSubmit,
  nameFrom,
  changeNameFrom,
  nameTo,
  changeNameTo,
}) => (
  <div className="flex items-center justify-center mt-8">
    <FormControl size="small" variant="outlined" className="w-52">
      <InputLabel>変換前キャラ名</InputLabel>
      <Select
        value={nameFrom}
        label="変換前キャラ名"
        onChange={(e) => changeNameFrom(e.target.value)}
      >
        {Object.keys(CHARACTERS_INFO)
          .sort()
          .map((name) => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>

    <span className="mx-1 text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </span>
    <TextField
      className="w-1/3"
      size="small"
      label="変換後キャラ名"
      variant="outlined"
      value={nameTo}
      onChange={(e) => changeNameTo(e.target.value)}
    />
    <button
      type="button"
      className={clsx('rounded-full p-1 ml-1 transition-colors duration-300 text-gray-500', {
        'opacity-50 cursor-default': nameFrom === '' || nameTo === '',
        'hover:bg-gray-200 active:bg-gray-400': !(nameFrom === '' || nameTo === ''),
      })}
      onClick={handleClickSubmit(nameFrom, nameTo)}
      disabled={nameFrom === '' || nameTo === ''}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
)

export default ConversionRuleInput
