import { VFC } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import GroupNameInput from './GroupNameInput'
import AttackNumRadio from './AttackNumRadio'
import DoesCalcRestCheckbox from './DoesCalcRestCheckbox'
import ExcludedCharactersSelectButton from './ExcludedCharactersSelectButton'
import BossNameMustContainsInput from './BossNameMustContainsInput'

const CalcRoutesConditionsInput: VFC = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>凸ルート検索条件設定</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        <GroupNameInput />
      </div>
      <div className="mt-3">
        <BossNameMustContainsInput />
      </div>
      <div className="mt-3">
        <AttackNumRadio />
      </div>
      <div className="mt-3">
        <DoesCalcRestCheckbox />
      </div>
      <div className="mt-3">
        <ExcludedCharactersSelectButton />
      </div>
    </AccordionDetails>
  </Accordion>
)

export default CalcRoutesConditionsInput
