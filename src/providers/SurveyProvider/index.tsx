import React, { createContext, useState } from "react";

import { LOCALSTORAGE_KEY, STEP_COUNT } from "../../constants";
import StorageService from "../../services/StorageService";
import { SurveyData } from "../DataProvider";

type SurveyProviderType = {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
  finishSurvey: (data: SurveyData) => void;
  open: boolean;
  openSurvey: () => void;
  closeSurvey: () => void;
};

export const SurveyContext = createContext({} as SurveyProviderType);

export const SurveyProvider = ({
  children,
}: React.Provider<SurveyProviderType> & any) => {
  const { getData, setData } = StorageService();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step >= STEP_COUNT) return;

    setStep(step + 1);
  };

  const previousStep = () => {
    if (step <= 1) return;

    setStep(step - 1);
  };

  const finishSurvey = (data: SurveyData) => {
    setData(data, new Date().toJSON());
    setOpen(false);
  };

  const closeSurvey = () => setOpen(false);

  const openSurvey = () => {
    if (getData().submitted) return;
    setOpen(true);
  }

  return (
    <SurveyContext.Provider
      value={{
        step,
        nextStep,
        previousStep,
        open,
        finishSurvey,
        openSurvey,
        closeSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
