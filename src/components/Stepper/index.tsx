import { CheckIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { STEP_COUNT } from "../../constants";
import { SurveyContext } from "../../providers/SurveyProvider";

type StepType = {
  value: number;
  checked: boolean;
};

const Step = ({ value, checked }: StepType) => {
  const stepStyle: React.HTMLAttributes<HTMLDivElement>["className"] = `
    h-10 w-10 flex items-center justify-center rounded-full border-2
      ${
        checked
          ? "bg-primary-200 dark:bg-primary-100 border-primary-100 dark:border-primary-200"
          : "bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
      }
  `;
  return (
    <>
      <div className="flex">
        <span className={stepStyle}>
          {checked ? (
            <CheckIcon className="h-5 w-5 text-primary-100 dark:text-primary-200" />
          ) : (
            <span className="text-gray-800 dark:text-gray-400">{value}</span>
          )}
        </span>
      </div>
      <span
        className={`h-1 w-full ${
          checked
            ? "bg-primary-100 dark:bg-primary-200"
            : "bg-gray-300 dark:bg-gray-600"
        } last:hidden`}
      ></span>
    </>
  );
};

const Stepper = () => {
  const { step } = useContext(SurveyContext);
  const stepperMap = Array(STEP_COUNT)
    .fill(0)
    .map((_, index) => index + 1);
  return (
    <div className="flex items-center">
      {stepperMap.map((value) => (
        <Step key={value} value={value} checked={value < step} />
      ))}
    </div>
  );
};

export default Stepper;
