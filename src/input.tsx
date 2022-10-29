import React, { useEffect, useState } from "react";
import {nanoid} from 'nanoid';

type Item = {
  checked: boolean;
  id: string;
  name: string;
  url: string;
};

const STORAGE_KEY = "table";

declare global {
  interface Window {
    onSubmit: (
      arr: {
        data: {
          name: string;
        };
        pic: string;
      }[],
      n: number
    ) => void;
  }
}
const defaultItem: Item = {
  id: nanoid(),
  name: "",
  url: "",
  checked: true,
};

const isItems = (value: unknown): value is Item[] => {
  if (typeof value !== "object") return false;
  if (!Array.isArray(value)) return false;
  return value.every((item) => {
    return (
      "id" in item &&
      "name" in item &&
      "url" in item &&
      "checked" in item &&
      typeof item.id === "string" &&
      typeof item.name === "string" &&
      typeof item.url === "string" &&
      typeof item.checked == "boolean"
    );
  });
};

function Input() {
  const [items, setItems] = useState<Item[]>([defaultItem]);

  const removeState = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const addState = () => {
    setItems((items) => [
      ...items,
      {
        ...defaultItem,
        id: nanoid()
      },
    ]);
  };

  const getIdForName = (id: string) => id + "name";
  const getIdForURL = (id: string) => id + "url";
  const getIdForCheck = (id: string) => id + "checked";

  useEffect(() => {
    try {
      const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");
      console.log({ arr, isItems: isItems(arr) });
      if (isItems(arr)) {
        setItems(arr);
      }
    } catch (e) {
      console.error(e);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return (
    <>
      <form>
        <table>
          <thead>
            <th> </th>
            <th>이름(required)</th>
            <th>이미지 주소(optional)</th>
            <th> </th>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const isLastRow = idx === items.length - 1;
              return (
                <tr key={item.id}>
                  <td>
                    <input
                    type="checkbox"
                    id={getIdForCheck(item.id)}
                    defaultChecked={item.checked}
                    ></input>
                  </td>
                  <td>
                    <input
                      id={getIdForName(item.id)}
                      defaultValue={item.name}
                    ></input>
                  </td>
                  <td>
                    <input
                      id={getIdForURL(item.id)}
                      defaultValue={item.url}
                    ></input>
                  </td>
                  <td>
                    {items.length > 1 && (
                      <button onClick={() => removeState(item.id)}>X</button>
                    )}
                    {isLastRow && <button onClick={addState}>+</button>}
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
        <p>
          중에서 <input id="n" type="number" defaultValue={1}></input> 명을 뽑을
          거에요.
        </p>
        <p>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const form = document.forms[0];

              const result = items.map((item) => {
                const name = form[getIdForName(item.id)]?.value ?? "";
                const url = form[getIdForURL(item.id)]?.value ?? "";
                const checked = form[getIdForCheck(item.id)]?.checked ?? false;
                return {
                  data: {
                    name,
                  },
                  pic: url,
                  checked
                };
              });

              const itemsForStorage: Item[] = result.map((item, idx) => {
                return {
                  id: nanoid(),
                  name: item.data.name ?? "",
                  url: item.pic ?? "",
                  checked: item.checked ?? false,
                };
              });

              window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(itemsForStorage)
              );
              window.onSubmit(result.filter(x=>x.checked), form["n"]?.value ?? 1);
            }}
          >
            가즈아
          </button>
        </p>
      </form>
    </>
  );
}

export default Input;
