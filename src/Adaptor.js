import { execute as commonExecute, expandReferences } from 'language-common';
import { post } from './Client';
import { resolve as resolveUrl } from 'url';

/**
 * Execute a sequence of operations.
 * Wraps `language-common/execute`, and prepends initial state for zoho.
 * @example
 * execute(
 *   create('foo'),
 *   delete('bar')
 * )(state)
 * @constructor
 * @param {Operations} operations - Operations to be performed.
 * @returns {Operation}
 */
export function execute(...operations) {
  const initialState = {
    references: [],
    data: null
  }

  return state => {
    return commonExecute(...operations)({ ...initialState, ...state })
  };

}

/**
 * Exequet an SQL statement
 * @example
 * execute(
 *   sql(sqlQuery)
 * )(state)
 * @constructor
 * @param {object} sqlQuery - Payload data for the message
 * @returns {Operation}
 */
export function addRow(db, table, rowData) {

  return state => {

    // const body = rowData(state);
    const body = "SUBJECT=LetUsDoOpenFn"

    const { account, authToken, apiVersion } = state.configuration;

    const url = `https://reportsapi.zoho.com/api/`.concat(account, '/', db, '/',
                  table, `?ZOHO_ACTION=ADDROW&ZOHO_OUTPUT_FORMAT=JSON
                  &ZOHO_ERROR_FORMAT=JSON&authtoken=`, authToken,
                  `&ZOHO_API_VERSION=`, apiVersion)

    console.log("POST URL:");
    console.log(url)
    console.log("POST Parameters:");
    console.log(body)

    return post({ url, body })
    .then((result) => {
      console.log("Success:", result);
      return { ...state, references: [ result, ...state.references ] }
    })

  }
}

export {
  field, fields, sourceValue,
  merge, dataPath, dataValue, lastReferenceValue
} from 'language-common';
