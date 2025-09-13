import { useRef } from "react";
import { useRecoilState } from "recoil";

import {
  suggestions,
  selectedIndex,
  currentText,
} from "../context/autoComplete.context";
import type { Option } from "../context/autoComplete.context";


interface AutoCompleteProps {
  source: (search: string) => Option[];
  onChange: (value: Option) => void;
}

export default function useAutoComplete({
  source,
  onChange,
}: AutoCompleteProps) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [suggestedOptions, setSuggestions] = useRecoilState(suggestions);
  const [Index, setIndex] = useRecoilState(selectedIndex);

  const [textValue, setTextValue] = useRecoilState(currentText);

  function selectOption(index: number) {
    if (index > -1) {
      onChange(suggestedOptions[index]);
      setTextValue(suggestedOptions[index].label);
    }
    clearSuggestions();
  }

  function getSuggestions(searchTerm: string) {
    if (searchTerm && source) {
      const options = source(searchTerm);
      setSuggestions(options);
    } else {
      clearSuggestions();
    }
  }

  function clearSuggestions() {
    setSuggestions([]);
    setIndex(-1);
  }

  function onTextChange(searchTerm: string) {
    setTextValue(searchTerm);
    getSuggestions(searchTerm);
  }

  const optionHeight =
    (listRef.current?.children[0] as HTMLElement | undefined)?.clientHeight ||
    40;

  function scrollUp() {
    if (Index > 0) {
      setIndex(Index - 1);
    }
    if (listRef.current) listRef.current.scrollTop -= optionHeight;
  }

  function scrollDown() {
    if (Index < suggestedOptions.length - 1) {
      setIndex(Index + 1);
    }
    if (listRef.current) listRef.current.scrollTop = Index * optionHeight;
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const keyOperation: Record<string, () => void> = {
      ArrowDown: scrollDown,
      ArrowUp: scrollUp,
      Enter: () => selectOption(Index),
      Escape: clearSuggestions,
    };
    if (keyOperation[e.key]) {
      keyOperation[e.key]();
    } else {
      setIndex(-1);
    }
  }

  return {
    bindOption: {
      onClick: (e: React.MouseEvent<HTMLLIElement>) => {
        if (listRef.current) {
          const nodes = Array.from(listRef.current.children);
          selectOption(nodes.indexOf(e.currentTarget));
        }
      },
    },
    bindInput: {
      value: textValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onTextChange(e.target.value),
      onKeyDown,
    },
    bindOptions: {
      ref: listRef,
    },
    clearInput: () => {
      setTextValue("");
      clearSuggestions();
    }
  };
}
