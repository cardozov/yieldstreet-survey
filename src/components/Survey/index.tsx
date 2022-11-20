import { useContext } from 'react'

import { SurveyContext } from '../../providers/SurveyProvider'
import Header from '../Header'
import PageHandler from '../PageHandler'
import Stepper from '../Stepper'

const Survey = () => {
  const { submitted } = useContext(SurveyContext)

  return (
    <div style={{ display: submitted ? 'none' : 'block' }}>
      <div className="m-10 p-5 flex flex-col gap-5 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-100 dark:to-dark-200 border-1 border-gray-600 rounded-md shadow-md">
        <Header />
        <Stepper />
        <PageHandler />
      </div>
    </div>
  )
}

export default Survey