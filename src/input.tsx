import React, { useEffect, useState } from "react";

type Item = {
  id: number;
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
const defaultItem = {
  id: 0,
  name: "",
  url: "",
};

const isItems = (value: unknown): value is Item[] => {
  if (typeof value !== "object") return false;
  if (!Array.isArray(value)) return false;
  return value.every((item) => {
    return (
      "id" in item &&
      "name" in item &&
      "url" in item &&
      typeof item.id === "number" &&
      typeof item.name === "string" &&
      typeof item.url === "string"
    );
  });
};

function Input() {
  const [items, setItems] = useState<Item[]>([defaultItem]);

  const removeState = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const addState = () => {
    setItems((items) => [
      ...items,
      {
        ...defaultItem,
        id: Math.max(...items.map((x) => x.id)) + 1,
      },
    ]);
  };

  const getIdForName = (id: number) => id + "name";
  const getIdForURL = (id: number) => id + "url";

  useEffect(() => {
    try {
      const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");

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
            <th>이름(required)</th>
            <th>이미지 주소(optional)</th>
            <th></th>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const isLastRow = idx === items.length - 1;
              return (
                <tr key={item.id}>
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
                return {
                  data: {
                    name,
                  },
                  pic: url,
                };
              });

              const itemsForStorage: Item[] = result.map((item, idx) => {
                return {
                  id: idx,
                  name: item.data.name ?? "",
                  url: item.pic ?? "",
                };
              });

              window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(itemsForStorage)
              );
              window.onSubmit(result, form["n"]?.value ?? 1);
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
