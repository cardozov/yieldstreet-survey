import React, { createContext, useState } from 'react'

import { STEP_COUNT } from '../../constants'

type SurveyProviderType = {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
  submitted: boolean;
  finishSurvey: () => void;
}

export const SurveyContext = createContext({} as SurveyProviderType)

export const SurveyProvider = ({ children }: React.Provider<SurveyProviderType> & any) => {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const nextStep = () => {
    if (step >= STEP_COUNT) return

    setStep(step+1)
  }

  const previousStep = () => {
    if (step <= 1) return

    setStep(step-1)
  }

  const finishSurvey = () => setSubmitted(true)

  return (
    <SurveyContext.Provider value={{ step, nextStep, previousStep, submitted, finishSurvey }}>{children}</SurveyContext.Provider>
  )
}