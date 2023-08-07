import { addStyleSheetToShadowRoot } from './add-style-sheet-to-shadow-root'

type Child = (string | Node)

type Options<TAttachShadow extends boolean> = {
    id?: string;
    attachShadow?: TAttachShadow;
    attachShadowChildren?: TAttachShadow extends true ? Child[] : never
    attachShadowAddStyleSheets?: TAttachShadow extends true ? string[] : never
    style?: string;
}

export function createElement<TAttachShadow extends boolean = false>(tagName: string, options?: Options<TAttachShadow>, children?: Child[])
    : TAttachShadow extends true ? [HTMLElement, ShadowRoot] : HTMLElement {
  const element = document.createElement(tagName)
  let elementShadow: ShadowRoot | undefined = undefined
  if (options?.id) element.id = options.id
  if (options?.style) element.style.cssText = options.style
  if (options?.attachShadow) elementShadow = element.attachShadow({ mode: 'open' })
  if (elementShadow && options?.attachShadowChildren) elementShadow.append(...options?.attachShadowChildren ?? [])
  if (elementShadow && options?.attachShadowAddStyleSheets) options?.attachShadowAddStyleSheets.forEach((styleSheet, index) => addStyleSheetToShadowRoot(elementShadow!, styleSheet, index === 0))
  if (children) element.append(...children)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return options?.attachShadow === true ? [element, elementShadow!] as any : element
}
