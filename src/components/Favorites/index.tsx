import CheckColor from "../CheckColor";
import Navigation from "../Navigation";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import InputWrapper from "../InputWrapper";
import LabeledFormItem from "../LabeledFormItem";
import { COLORS_MAP } from "../../constants";

const Favorites = () => {
  const { data, setChunk } = useContext(DataContext);

  return (
    <>
      <div className="mx-10 grid gap-5">
        <InputWrapper
          name="favorite-book"
          label="Favorite Book"
          defaultValue={data.favoriteBook}
          onBlur={(e) => setChunk({ favoriteBook: e.target.value })}
        />
        <LabeledFormItem name="favorite-colors" label="Favorite Colors">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-5 sm:gap-x-12">
            {COLORS_MAP.map(props => (
              <CheckColor key={props.color} {...props} />
            ))}
          </div>
        </LabeledFormItem>
      </div>
      <Navigation
        canGoNext={!!(data.favoriteBook && data.favoriteColors?.length)}
      />
    </>
  );
};

export default Favorites;
