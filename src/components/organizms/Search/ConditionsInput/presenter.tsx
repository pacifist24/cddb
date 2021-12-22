import { VFC } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import BossNameConditionInput from './BossNameConditionInput'
import LikeNumConditionInput from './LikeNumConditionInput'
import UpdateDateLimitInput from './UpdateDateLimitInput'
import DamageConditionInput from './DamageConditionInput'
import OperationTypeConditionInputs from './OperationTypeConditionInputs'
import TimeRequiredInputs from './TimeRequiredInputs'
import ExcludedCharactersSelectButton from './ExcludedCharactersSelectButton'
import PhaseConditionInput from './PhaseConditionInput'

const ConditionsInput: VFC = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>検索結果絞り込み条件設定</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div className="">
        <BossNameConditionInput />
      </div>
      <div className="mt-5">
        <PhaseConditionInput />
      </div>
      <div className="mt-5">
        <LikeNumConditionInput />
      </div>
      <div className="mt-5">
        <UpdateDateLimitInput />
      </div>
      <div className="mt-5">
        <DamageConditionInput />
      </div>
      <div className="mt-5">
        <TimeRequiredInputs />
      </div>
      <div className="mt-5 mb-3">
        <OperationTypeConditionInputs />
      </div>
      <div>
        <ExcludedCharactersSelectButton />
      </div>
    </AccordionDetails>
  </Accordion>
)

export default ConditionsInput
