import { useContext } from 'react'

import { SurveyContext } from '../../providers/SurveyProvider'
import Identity from '../Identity'
import Details from '../Details'
import Favorites from '../Favorites'
import Summary from '../Summary'

const PageHandler = () => {
  const { step } = useContext(SurveyContext)
  
  switch (step) {
    case 1:
      return <Identity />
    case 2:
      return <Details />
    case 3:
      return <Favorites />
    case 4:
      return <Summary />
  
    default:
      return <Identity />;
  }
}

export default PageHandler