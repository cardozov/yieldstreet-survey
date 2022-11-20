import { useContext } from "react";
import { GENDER_MAP } from "../../constants";
import { DataContext } from "../../providers/DataProvider";
import LabeledFormItem from "../LabeledFormItem";
import Navigation from "../Navigation";

const Details = () => {
  const { data, setChunk } = useContext(DataContext);
  const ageList = Array(99)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <>
      <div className="mx-10 grid gap-5">
        <LabeledFormItem name="age" label="Age">
          <select
            name="age"
            className="form-input text-sm w-24 py-1"
            defaultValue={data.age}
            onChange={(e) => setChunk({ age: e.target.value })}
          >
            {ageList.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </LabeledFormItem>
        <LabeledFormItem name="gender" label="Gender">
          <div
            className="grid grid-cols-3"
            onChange={(e) =>
              setChunk({
                gender: GENDER_MAP.find(
                  (gender) => gender.id === (e.target as any).id
                ),
              })
            }
          >
            {GENDER_MAP.map(({ id, description }) => (
              <div key={id}>
                <input
                  id={id}
                  name="gender"
                  type="radio"
                  className="w-6 accent-primary-100 dark:accent-primary-200 "
                  defaultChecked={id === data.gender?.id}
                />
                <label htmlFor={id} className="dark:text-light-100">{description}</label>
              </div>
            ))}
          </div>
        </LabeledFormItem>
      </div>
      <Navigation canGoNext={!!(data.age && data.gender?.id)} />
    </>
  );
};

export default Details;
