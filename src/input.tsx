import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "bulma";

// https://github.com/ymssx/ygo-card/tree/master/source/mold/frame
const cardTypes = [
  "monster",
  "monster_cl",
  "monster_lj",
  "monster_rh",
  "monster_tc",
  "monster_tk",
  "monster_tt",
  "monster_xg",
  "monster_ys",
  "spell",
  "trap",
] as const;

type CardType = typeof cardTypes[number];

type Item = {
  checked: boolean;
  id: string;
  name: string;
  url: string;
  type: CardType;
};
const STORAGE_KEY = "table";
const N_KEY = "n";

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
    onMouseMove: () => void;
    setGuideText: (text: string) => void;
  }
}
const defaultItem: Item = {
  id: nanoid(),
  name: "",
  url: "",
  checked: true,
  type: "monster",
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
  const [n, setN] = useState<number | undefined>(undefined);

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
  const getIdForCardType = (id: string) => id + "type";

  useEffect(() => {
    try {
      const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");
      const nFromStorage = parseInt(localStorage.getItem(N_KEY) ?? "");

      setN(isNaN(nFromStorage) ? 1 : nFromStorage);
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
        height: "100%",
      }}
    >
      <div>
        <form>
          <table className="table">
            <thead>
              <th> </th>
              <th>이름(required)</th>
              <th>이미지 주소(optional)</th>
              <th>카드 종류(required)</th>
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
                      <div className="select">
                        <select
                          id={getIdForCardType(item.id)}
                          defaultValue={item.type}
                        >
                          {cardTypes.map((typeName) => (
                            <option key={typeName} value={typeName}>
                              {typeName}
                            </option>
                          ))}
                        </select>
                      </div>
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
                <td colSpan={5}>
                  <button className="button is-info" onClick={addState}>
                    한 명 더 추가하기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mb-3" style={{ display: "flex", alignItems: "center" }}>
            <b>총 {items.length}명</b>
            중에서
            <input
              id="n"
              style={{
                maxWidth: 50,
                margin: "0 5px",
              }}
              className="input is-small"
              type="number"
              defaultValue={n}
            ></input>
            명을 뽑을 거에요.
          </p>
          <div className="notification">
            [경고] 이미지 주소칸을 비우면, 귀여운 고양이 사진이 들어갈 수도
            있습니다.
          </div>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              className="button is-primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const form = document.forms[0];

                const result = items.map((item) => {
                  const name =
                    form[getIdForName(item.id)]?.value ?? defaultItem.name;
                  const url =
                    form[getIdForURL(item.id)]?.value ?? defaultItem.url;
                  const cardType =
                    form[getIdForCardType(item.id)]?.value ?? defaultItem.type;
                  const checked =
                    form[getIdForCheck(item.id)]?.checked ??
                    defaultItem.checked;

                  const typeObj = {
                    type: cardType.split("_")[0],
                    type2:
                      cardType.split("_").length > 1
                        ? cardType.split("_")[1]
                        : undefined,
                  };

                  return {
                    data: {
                      name,
                      ...typeObj,
                    },
                    pic: url,
                    checked,
                    type: cardType,
                  };
                });

                const itemsForStorage: Item[] = result.map((item, idx) => {
                  return {
                    id: nanoid(),
                    name: item.data.name ?? defaultItem.name,
                    url: item.pic ?? defaultItem.url,
                    checked: item.checked ?? defaultItem.checked,
                    type: item.type ?? defaultItem.type,
                  };
                });

                const n = form["n"]?.value ?? 1;

                window.localStorage.setItem(
                  STORAGE_KEY,
                  JSON.stringify(itemsForStorage)
                );
                window.localStorage.setItem(N_KEY, String(n));
                window.onSubmit(
                  result.filter((x) => x.checked),
                  n
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
