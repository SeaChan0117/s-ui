export const classname = (cls: string, clsObj: any) => {
  const moreClassNameKeyVal = Object.entries(clsObj);
  let moreClassName = '';
  moreClassNameKeyVal.forEach(kv => {
    if (!!kv[1]) {
      moreClassName += ` ${kv[0]}`;
    }
  });

  return cls + moreClassName;
};