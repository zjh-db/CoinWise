export function getDict(dicts, val, prop = { value: "value", label: "label" }) {
  return dicts.find((v) => v[prop.value] === val)[prop.label];
}

export function getAssetURL(img) {
  return new URL(`../assets/${img}`, import.meta.url).href;
}
