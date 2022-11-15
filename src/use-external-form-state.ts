// you can get form state from localStorage or url query params

import { useEffect } from "react";
import { FormResult, isFormResult } from "./models/form-result";

/** @deprecated */
const STORAGE_KEY = "table";
/** @deprecated */
const N_KEY = "n";

const STORAGE_RESULT_KEY = "table-result";
const QUERY_KEY = "data";

export function getURLFromResult(result: FormResult): string {
    return `${window.location.origin}${window.location.pathname}?${QUERY_KEY}=${encodeURIComponent(JSON.stringify(result))}`

}

export function saveResultOnLocalStorage(result: FormResult) {
    localStorage.setItem(STORAGE_RESULT_KEY, JSON.stringify(result));
}

function useExternalFormState(onLoad: (result: FormResult) => void) {

    useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);

            if (params.has(QUERY_KEY)) {
                try {
                    const json = JSON.parse(params.get(QUERY_KEY) ?? '');

                    if (isFormResult(json)) {
                        onLoad(json)
                        return () => { }
                    }
                }
                catch (e) {
                    console.error(e);
                    console.log('error on TSON')
                }
            }

            // fallback for deprecated keys, migration for new key(STORAGE_RESULT_KEY)

            if (localStorage.getItem(STORAGE_KEY) && localStorage.getItem(N_KEY)) {
                try {
                    const cardInfosFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");
                    const nFromStorage = parseInt(localStorage.getItem(N_KEY) ?? "");

                    localStorage.removeItem(STORAGE_KEY);
                    localStorage.removeItem(N_KEY);

                    const formResultFromStorage = {
                        cardInfos: cardInfosFromStorage,
                        n: nFromStorage
                    }

                    if (isFormResult(cardInfosFromStorage)) {
                        saveResultOnLocalStorage(formResultFromStorage)
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }

            if (localStorage.getItem(STORAGE_RESULT_KEY)) {
                try {
                    const json = JSON.parse(localStorage.getItem(STORAGE_RESULT_KEY) ?? '');

                    if (isFormResult(json)) {
                        onLoad(json);
                        return () => { }
                    }
                }
                catch (e) {
                    console.error(e);
                    localStorage.removeItem(STORAGE_RESULT_KEY);
                    console.log('error  on TSON')
                }
            }

            return () => {

            }
        } catch (e) {
            console.error(e);
        }
    }, []);


}

export default useExternalFormState;