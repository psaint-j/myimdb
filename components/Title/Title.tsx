import { useContext } from "react";
import { DarKModeContext } from "@/contexts/DarkModeContext";

type Props = {
  title: string | undefined;
  date: string | undefined;
  genre: [] | undefined;
};

const Title = ({ title, date, genre }: Props) => {
  const { darkMode } = useContext(DarKModeContext);
  const year = date ? new Date(date).getFullYear(): null
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 py-4">
      <h1 className="inline-flex md:text-2xl text-xl font-semibold">
        {`${title} (${year})`}
      </h1>
      <div className="flex gap-2">
        {genre?.map(({ id, name }) => (
          <span
            key={id}
            className={`inline-flex gap-2 truncate items-center rounded-md ${
              darkMode ? "bg-gray-50" : "bg-blue-100"
            } px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Title;
