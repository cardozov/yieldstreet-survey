import { DataProvider } from './providers/DataProvider'
import { SurveyProvider } from './providers/SurveyProvider'
import Survey from './components/Survey'

const App = () => {
  return (
    <DataProvider>
      <SurveyProvider>
        <Survey />
      </SurveyProvider>
    </DataProvider>
  )
}

export default App
