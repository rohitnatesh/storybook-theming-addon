export const isObjectEmpty = (obj) => !Object.keys(obj).length;

export const setPropertyByPath = (obj, path, value) => {
  const keys = path.split('_');
  const temp1 = obj;
  let temp2 = temp1;
  let i = 0;

  while (i < keys.length - 1) {
    temp2 = temp2[keys[i]];
    i += 1;
  }
  temp2[keys[i]] = value;
  return temp1;
};
