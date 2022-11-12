import "bulma";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import TSON from "typescript-json";
import Item, { CardType, cardTypes, defaultItem, isItems } from "./models";

const STORAGE_KEY = "table";
const N_KEY = "n";
const QUERY_KEY = "data";

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


function Input() {
  const [items, setItems] = useState<Item[]>([defaultItem]);
  const [n, setN] = useState<number | undefined>(undefined);

  const [urlForShare, setUrlForShare] = useState<string>('');

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

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      if (params.has(QUERY_KEY)) {
        try {
          const json = JSON.parse(params.get(QUERY_KEY) ?? '');
          console.log({ json })
          const isValidJSON = TSON.is<FormResult>(json)
          console.log({ result: TSON.validate<FormResult>(json) })
          console.log({ isValidJSON })
          if (isValidJSON) {
            setItems(json.cardInfos.map(transformCardInfoToItem))
            setN(json.n);
            return () => { }
          }
        }
        catch (e) {
          console.error(e);
          console.log('error  on TSON')
        }
      }

      const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");
      const nFromStorage = parseInt(localStorage.getItem(N_KEY) ?? "");

      setN(isNaN(nFromStorage) ? 1 : nFromStorage);
      if (isItems(arr)) {
        setItems(arr);
      }
      return () => {

      }
    } catch (e) {
      console.error(e);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);


  const onFormSubmit = (e) => {
    e.preventDefault();

    const { cardInfos, n } = getFormResultFromFormAndIds(items.map(x => x.id));

    const itemsForStorage: Item[] = cardInfos.map(transformCardInfoToItem);

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(itemsForStorage)
    );
    window.localStorage.setItem(N_KEY, String(n));
    window.onSubmit(
      cardInfos.filter((x) => x.checked),
      n
    );
  }

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
        <section className="hero is-primary mb-5" style={{ borderRadius: 3 }}>
          <div className="hero-body">
            <div className="title">ppopkki.3d</div>
          </div>
        </section>
        <form>
          <table className="table">
            <thead>
              <th> </th>
              <th>이름(*)</th>
              <th>이미지 주소</th>
              <th>카드 종류(*)</th>
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
                      <div className="select is-small">
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
                          className="delete is-small"
                          style={{
                            verticalAlign: "middle",
                          }}
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
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="button is-info" onClick={addState}>
                      한 명 더 추가하기
                    </button>
                  </div>
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
                onFormSubmit(e)

              }}
            >
              가즈아
            </button>
          </p>
        </form>
        <p>
          <button className="button is-small is-warning mt-10" onClick={(e) => {
            const results = getFormResultFromFormAndIds(items.map(x => x.id));

            setUrlForShare(`${window.location.origin}${window.location.pathname}?${QUERY_KEY}=${encodeURIComponent(JSON.stringify(results))}`)

          }}>공유용 URL 만들기</button>
          <p className="mt-3">
            {urlForShare && <textarea className="textarea" readOnly value={urlForShare}></textarea>}
          </p>
        </p>
      </div>
    </div>
  );
}

function getIdForName(id: string) { return id + "name" };
function getIdForURL(id: string) { return id + "url" };
function getIdForCheck(id: string) { return id + "checked" };
function getIdForCardType(id: string) { return id + "type" };

type FormResult = {
  cardInfos: CardInfo[];
  n: number;
}
function getFormResultFromFormAndIds(itemIds: string[]): FormResult {
  const form = document.forms[0];

  const cardInfos = itemIds.map((id) => {
    const name =
      form[getIdForName(id)]?.value ?? defaultItem.name;
    const url =
      form[getIdForURL(id)]?.value ?? defaultItem.url;
    const cardType =
      form[getIdForCardType(id)]?.value ?? defaultItem.type;
    const checked =
      form[getIdForCheck(id)]?.checked ??
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

  return {
    cardInfos,
    n: form["n"]?.value ?? 1
  }
}

type CardInfo = {
  data: {
    name: 'string';
    type: string;
    type2?: string;
  };
  pic: string;
  checked: boolean;
  type: CardType;
}
function transformCardInfoToItem(cardInfo: CardInfo): Item {
  return {
    id: nanoid(),
    name: cardInfo.data.name ?? defaultItem.name,
    url: cardInfo.pic ?? defaultItem.url,
    checked: cardInfo.checked ?? defaultItem.checked,
    type: cardInfo.type ?? defaultItem.type,
  }
}
export default Input;
