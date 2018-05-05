export const PERSIST_ZIP = 'PERSIST_ZIP'

export function persistZip(zipcode) {
  return {type: PERSIST_ZIP, zipcode}
}
