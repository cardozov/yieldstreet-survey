import { LOCALSTORAGE_KEY } from "../../constants";
import { SurveyData } from "../../providers/DataProvider";

type StorageModelType = {
  data: Partial<SurveyData>;
  submitted?: {
    timestamp: string;
  };
};

const StorageService = () => {
  const getData: () => StorageModelType = () => {
    const localData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (localData === null) return { data: {} };
    return JSON.parse(localData);
  };

  const setData = (data: Partial<SurveyData>, submittedAt?: string) => {
    const payload: StorageModelType = { data: { ...data } };
    if (submittedAt) payload.submitted = { timestamp: submittedAt };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(payload));
  };

  return { getData, setData };
};

export default StorageService;
