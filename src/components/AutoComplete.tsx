import { useRecoilValue } from "recoil";
import { HiSearch } from "react-icons/hi";
import useAutoComplete from "../hooks/useAutoComplete";
import { suggestions, selectedIndex } from "../context/autoComplete.context";
import type { Option } from "../context/autoComplete.context";

type AutoCompleteProps = {
  options: Option[];
  onChange: (value: Option) => void;
  placeholder?: string | "Search...";
};

export default function AutoComplete({
  options,
  onChange,
  placeholder,
}: AutoCompleteProps) {
  const { bindInput, bindOptions, bindOption } = useAutoComplete({
    onChange,
    source: (search) =>
      options.filter((opt) => new RegExp(search, "i").test(opt.label)),
  });

  const suggestedOptions = useRecoilValue(suggestions);
  const index = useRecoilValue(selectedIndex);

  return (
    <div className="relative w-40 sm:w-80">
      <div className="bg-light border-muted/30 flex items-center rounded-lg border-1 px-2 py-1">
        <HiSearch className="text-primary text-xl" />
        <input
          placeholder={placeholder || "Search..."}
          className="placeholder:text-primary text-secondary placeholder:font-inter font-inter flex-grow px-2 py-1 font-medium outline-none placeholder:text-lg"
          {...bindInput}
        />
      </div>

      {suggestedOptions.length > 0 && (
        <ul
          {...bindOptions}
          className="bg-light border-muted/30 absolute left-0 z-10 mt-1 max-h-50 w-full overflow-y-auto rounded-md border shadow-md"
        >
          {suggestedOptions.map((s, i) => (
            <li
              key={s.value}
              className={`hover:bg-accent/70 cursor-pointer px-2 py-1 ${
                index === i ? "bg-accent/70" : ""
              }`}
              {...bindOption}
            >
              <span className="font-inter text-primary font-medium">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
