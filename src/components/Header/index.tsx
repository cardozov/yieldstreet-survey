import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { SurveyContext } from "../../providers/SurveyProvider";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const { closeSurvey } = useContext(SurveyContext);
  return (
    <div className="sm:h-16 flex flex-col sm:flex-row items-start justify-between sm:items-center">
      <XMarkIcon
        onClick={closeSurvey}
        className="h-5 w-5 rounded-md hover:shadow-inner shadow-black hover:dark:shadow-gray-500 text-dark-100 dark:text-light-100"
      />
      <h1 className="w-full sm:w-auto text-end sm:text-center font-extrabold text-transparent text-xl sm:text-2xl bg-clip-text bg-gradient-to-r from-zinc-700 via-primary-100 to-primary-200 dark:from-primary-100 dark:to-primary-200 hover:scale-110">
        Yieldstreet Survey
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
