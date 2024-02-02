export const myStringify = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  let result = "<div style='margin-left: .5rem;'>{<br/>";

  for (const key in obj) {
    result +=
      '"' +
      key +
      '"' +
      ": " +
      (typeof obj[key] === "object"
        ? myStringify(obj[key])
        : '"' + obj[key] + '"') +
      ",<br/>";
  }

  const lastIndex = result.lastIndexOf(",<br/>");

  if (lastIndex === -1) {
    result += "}</div>";
  } else {
    result = result.substring(0, lastIndex);
    result += "</br>}</div>";
  }

  return result;
};
