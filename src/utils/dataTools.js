export const deepClone = obj => JSON.parse(JSON.stringify(obj));

export const convertSQLTimestamp = timestamp =>
  typeof timestamp === "object"
    ? (timestamp = timestamp.toISOString())
    : (timestamp = timestamp.replace(" ", "T").concat("Z"));

export const verifyTimestamp = element => {
  if (element.timestamp) {
    element.timestamp = convertSQLTimestamp(element.timestamp);
  }
  return element;
};
