
/*** EXPORT ------------------------------------------- ***/

export function copyTextToClipboard(text: string, { target = document.body } = {}) {
  if (typeof text !== "string")
    throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);

  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  let success = false;

  element.value = text;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";

  const selection = document.getSelection();

  if (!selection)
    return success;

  const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

  target.append(element);

  element.select();
  element.selectionStart = 0;
  element.selectionEnd = text.length;

  try {
    success = document.execCommand("copy");
  } catch(_) {
    /*** ignore ***/
  }

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  if (previouslyFocusedElement)
    (previouslyFocusedElement as HTMLElement)?.focus();

  return success;

  /*** via https://github.com/sindresorhus/copy-text-to-clipboard ***/
}
