import { useContext, useEffect } from "react";

import { SurveyContext } from "../../providers/SurveyProvider";
import Button from "../Button";
import Header from "../Header";
import PageHandler from "../PageHandler";
import Stepper from "../Stepper";

declare global {
  interface Window {
    openYieldstreetSurvey: () => void;
  }
}
window.openYieldstreetSurvey = window.openYieldstreetSurvey || {};

const Survey = () => {
  const { open, openSurvey } = useContext(SurveyContext);

  useEffect(() => {
    window.openYieldstreetSurvey = openSurvey;
  }, []);

  const Modal = () => (
    <div
      id="survey-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={open ? "block" : "hidden"}
    >
      <div className="m-10 p-5 flex flex-col gap-5 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-100 dark:to-dark-200 border-1 border-gray-600 rounded-xl shadow-md">
        <Header />
        <Stepper />
        <PageHandler />
      </div>
    </div>
  );

  return (
    <>
      {/* <Button data-modal-toggle="survey-modal" onClick={openSurvey}>Open Survey</Button> */}
      <Modal />
    </>
  );
};

export default Survey;
