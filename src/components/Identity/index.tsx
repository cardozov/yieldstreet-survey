import React, { useContext, useState } from "react";

import { DataContext, SurveyData } from "../../providers/DataProvider";
import InputWrapper from "../InputWrapper";
import Navigation from "../Navigation";

const Identity = () => {
  const { data, setChunk } = useContext(DataContext);
  const [info, setInfo] = useState({
    name: data.name,
    email: data.email,
  });

  const change =
    (prop: keyof SurveyData) =>
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      setInfo({ ...info, [prop]: (event.target as HTMLInputElement).value });
    };

  return (
    <>
      <div className="mx-10 grid gap-5">
        <InputWrapper
          name="name"
          label="Name"
          defaultValue={info.name}
          onInput={change("name")}
          onBlur={() => setChunk({ name: info.name })}
        />
        <InputWrapper
          name="email"
          label="E-mail"
          defaultValue={info.email}
          onInput={change("email")}
          onBlur={() => setChunk({ email: info.email })}
        />
      </div>
      <Navigation canGoNext={true} />
    </>
  );
};

export default Identity;
