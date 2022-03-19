import showdown from "showdown";

const toHtml = (text) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(text);
}

export default toHtml;