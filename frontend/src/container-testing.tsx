export const testHandleSelector = (handle: string): string =>
  `[data-test-handle='${handle}']`;
export const queryByTestHandle = (handle: string, element: Element) =>
  element.querySelector(testHandleSelector(handle))!;
export const queryAllByTestHandle = (handle: string, element: Element) =>
  element.querySelectorAll(testHandleSelector(handle));

export const testHandle = (identifier: string) => ({
  "data-test-handle": identifier
});
