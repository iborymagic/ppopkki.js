import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "bulma";

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

  const addState = (e) => {
    e.preventDefault();
    setItems((items) => [
      ...items,
      {
        ...defaultItem,
        id: nanoid(),
      },
    ]);
  };

  const getIdForName = (id: string) => id + "name";
  const getIdForURL = (id: string) => id + "url";
  const getIdForCheck = (id: string) => id + "checked";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <form>
          <table className="table">
            <thead>
              <th> </th>
              <th>이름(required)</th>
              <th>이미지 주소(optional)</th>
              <th> </th>
            </thead>
            <tbody>
              {items.map((item, idx) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        className="checkbox"
                        type="checkbox"
                        id={getIdForCheck(item.id)}
                        defaultChecked={item.checked}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input is-small"
                        id={getIdForName(item.id)}
                        defaultValue={item.name}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input is-small"
                        id={getIdForURL(item.id)}
                        defaultValue={item.url}
                      ></input>
                    </td>
                    <td>
                      {items.length > 1 && (
                        <button
                          className="button is-danger is-small"
                          onClick={() => removeState(item.id)}
                        >
                          제거
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td rowSpan={4}>
                  <button className="button is-info" onClick={addState}>
                    한 명 더 추가하기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            중에서
            <input
              id="n"
              className="input"
              type="number"
              defaultValue={1}
            ></input>
            명을 뽑을 거에요.
          </p>
          <div className="notification">
            [경고] 이미지 주소칸을 비우면, 귀여운 고양이 사진이 들어갈 수도
            있습니다.
          </div>
          <p>
            <button
              className="button is-primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const form = document.forms[0];

                const result = items.map((item) => {
                  const name = form[getIdForName(item.id)]?.value ?? "";
                  const url = form[getIdForURL(item.id)]?.value ?? "";
                  const checked =
                    form[getIdForCheck(item.id)]?.checked ?? false;
                  return {
                    data: {
                      name,
                    },
                    pic: url,
                    checked,
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
                window.onSubmit(
                  result.filter((x) => x.checked),
                  form["n"]?.value ?? 1
                );
              }}
            >
              가즈아
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Input;
