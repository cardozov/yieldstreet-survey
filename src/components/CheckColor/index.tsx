import { CheckIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect } from "react";
import { DataContext } from "../../providers/DataProvider";

const CheckColor = ({ color, style }: { color: string; style: string }) => {
  const { data, setChunk } = useContext(DataContext);

  const change = () => {
    if (data.favoriteColors?.includes(color))
      setChunk({
        favoriteColors: [
          ...(data.favoriteColors?.filter((c) => c !== color) || []),
        ],
      });
    else setChunk({ favoriteColors: [...(data.favoriteColors || []), color] });
  };

  return (
    <div
      className={
        "flex flex-row items-center justify-center cursor-pointer uppercase text-xs rounded-full px-2 text-center border-2 dark:text-gray-500 dark:border-gray-500 " +
        (data.favoriteColors?.includes(color) ? style : "")
      }
      onClick={change}
    >
      {data.favoriteColors?.includes(color) && (
        <CheckIcon className="h-4 w-4 -ml-5" />
      )}
      {color}
    </div>
  );
};

export default CheckColor;
