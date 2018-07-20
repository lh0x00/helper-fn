export function handleError(...arg): any {
  console.error('[helper-fn]', ...arg) // eslint-disable-line no-console
}

export function handleWarning(...arg): any {
  console.warn('[helper-fn]', ...arg) // eslint-disable-line no-console
}
