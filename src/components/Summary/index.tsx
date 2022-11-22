import React, { useContext } from "react";

import { DataContext } from "../../providers/DataProvider";
import Navigation from "../Navigation";

const Summary = () => {
  const { data } = useContext(DataContext);

  const TableRow = ({
    description,
    value,
  }: {
    description: string;
    value?: string | JSX.Element | JSX.Element[];
  }) => (
    <tr className="bg-white dark:bg-gray-800">
      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {description}
      </th>
      <td className="py-4 px-6">{value}</td>
    </tr>
  );

  const Chip = ({ color }: { color: string }) => (
    <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
      {color}
    </span>
  );

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto relative rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Filled Value
              </th>
            </tr>
          </thead>
          <tbody>
            {data.name && <TableRow description="Name" value={data.name} />}
            {data.email && <TableRow description="E-mail" value={data.email} />}
            <TableRow description="Age" value={data.age} />
            <TableRow description="Gender" value={data.gender?.description} />
            <TableRow description="Favorite Book" value={data.favoriteBook} />
            <TableRow
              description="Favorite Colors"
              value={data.favoriteColors?.map((c) => (
                <Chip key={c} color={c} />
              ))}
            />
          </tbody>
        </table>
      </div>

      <Navigation canGoNext={true} />
    </div>
  );
};

export default Summary;
