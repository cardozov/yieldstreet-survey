import { useContext } from 'react'

import { STEP_COUNT } from '../../constants'
import { SurveyContext } from '../../providers/SurveyProvider'
import Button from '../Button'

type NavigationType = {
  canGoNext: boolean;
}

const Navigation = ({ canGoNext }: NavigationType) => {
  const { step, nextStep, previousStep, finishSurvey } = useContext(SurveyContext)

  return <div className="mt-10 flex justify-between flex-row-reverse">
    { step === STEP_COUNT && <Button disabled={false} onClick={finishSurvey}>Finish</Button> }
    { step < STEP_COUNT && <Button disabled={!canGoNext} onClick={nextStep}>Next</Button> }
    { step === 1 || <Button onClick={previousStep}>Previous</Button> }
  </div>
}

export default Navigation