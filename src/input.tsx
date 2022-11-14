import "bulma";
import { nanoid } from "nanoid";
import React, { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { setQuaternionFromProperEuler } from "three/src/math/MathUtils";

import { CardInfo } from "./models/card-info";
import { cardTypes } from "./models/card-type";
import { FormResult, formResultSchema, isFormResult } from "./models/form-result";
import { defaultItem, isItems, Item } from "./models/item";
import useExternalFormState, { getURLFromResult, saveResultOnLocalStorage } from "./use-external-form-state";

declare global {
  interface Window {
    onSubmit: (result: FormResult) => void;
    onMouseMove: () => void;
    setGuideText: (text: string) => void;
  }
}

function Input() {

  const { getFormResult, setFromResult, items, n, remove, add } = useFormState();
  const [urlForShare, setUrlForShare] = useState<string>('');

  useExternalFormState((result) => {
    setFromResult(result);
  })
  const onAddButtonClick: MouseEventHandler = (e) => {
    e.preventDefault();

    add();
  };

  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const formResult = getFormResultFromFormAndIds(items.map(x => x.id), document.forms[0]);

    const { cardInfos, n } = formResult;

    saveResultOnLocalStorage(formResult);

    window.onSubmit(
      {
        cardInfos: cardInfos.filter((x) => x.checked),
        n
      }
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
              {items.map((item) => {
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
                          onClick={() => remove(item.id)}
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
                    <button className="button is-info" onClick={onAddButtonClick}>
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
            const formResult = getFormResult();
            if (!formResult) return;
            setUrlForShare(getURLFromResult(formResult))

          }}>공유용 URL 만들기</button>
          <p className="mt-3">
            {urlForShare && <textarea className="textarea" style={{ fontSize: '8px' }} readOnly value={urlForShare} rows={6}></textarea>}
          </p>
        </p>
      </div>
    </div>
  );
}



function useFormState() {
  const [items, setItems] = useState<Item[]>([defaultItem]);
  const [n, setN] = useState<number>(1);

  const getFormResult = (): FormResult | null => {
    const formResult = {
      n,
      cardInfos: items.map(x => x.id).map(id => getCardInfoFromForm(id, document.forms[0]))
    }

    if (formResultSchema.isType(formResult)) {
      return formResult;
    }
    return null;
  }

  const setFromResult = (result: FormResult) => {
    setItems(result.cardInfos.map(transformCardInfoToItem));
    setN(result.n)
  }


  const remove = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const add = () => {
    setItems((items) => [
      ...items,
      {
        ...defaultItem,
        id: nanoid(),
      },
    ]);
  }

  return {
    getFormResult, setFromResult, items, n, add, remove,
  }
}

function getIdForName(id: string) { return id + "name" };
function getIdForURL(id: string) { return id + "url" };
function getIdForCheck(id: string) { return id + "checked" };
function getIdForCardType(id: string) { return id + "type" };


function getCardInfoFromForm(id: string, form: HTMLFormElement): CardInfo {
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
}
function getFormResultFromFormAndIds(itemIds: string[], form: HTMLFormElement): FormResult {

  const cardInfos = itemIds.map(id => getCardInfoFromForm(id, form));

  return {
    cardInfos,
    n: form["n"]?.value ?? 2
  }
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
