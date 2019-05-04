import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // !
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  ':root': {
    'Blue': '#007bff',
    'Indigo': '#6610f2',
    'Purple': '#6f42c1',
    'Pink': '#e83e8c',
    'Red': '#dc3545',
    'Orange': '#fd7e14',
    'Yellow': '#ffc107',
    'Green': '#28a745',
    'Teal': '#20c997',
    'Cyan': '#17a2b8',
    'White': '#fff',
    'Gray': '#6c757d',
    'GrayDark': '#343a40',
    'Primary': '#007bff',
    'Secondary': '#6c757d',
    'Success': '#28a745',
    'Info': '#17a2b8',
    'Warning': '#ffc107',
    'Danger': '#dc3545',
    'Light': '#f8f9fa',
    'Dark': '#343a40',
    'BreakpointXs': '0',
    'BreakpointSm': '576px',
    'BreakpointMd': '768px',
    'BreakpointLg': '992px',
    'BreakpointXl': '1200px',
    'FontFamilySansSerif': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    'FontFamilyMonospace': 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  '*': {
    'boxSizing': 'border-box'
  },
  '::after': {
    'boxSizing': 'border-box'
  },
  '::before': {
    'boxSizing': 'border-box'
  },
  'html': {
    'fontFamily': 'sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'WebkitTextSizeAdjust': '100%',
    'WebkitTapHighlightColor': 'transparent'
  },
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'hgroup': {
    'display': 'block'
  },
  'main': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#212529',
    'textAlign': 'left',
    'backgroundColor': '#fff'
  },
  '[tabindex="-1"]:focus': {
    'outline': '0!important'
  },
  'h1': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'dl': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ol': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ul': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'abbr[data-original-title]': {
    'textDecoration': 'underline',
    'WebkitTextDecoration': 'underline dotted',
    'textDecoration': 'underline dotted',
    'cursor': 'help',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTextDecorationSkipInk': 'none',
    'textDecorationSkipInk': 'none'
  },
  'abbr[title]': {
    'textDecoration': 'underline',
    'WebkitTextDecoration': 'underline dotted',
    'textDecoration': 'underline dotted',
    'cursor': 'help',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTextDecorationSkipInk': 'none',
    'textDecorationSkipInk': 'none'
  },
  'address': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'fontStyle': 'normal',
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'ol ol': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ol ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ul ol': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ul ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'dt': {
    'fontWeight': '700'
  },
  'dd': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'blockquote': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'figure': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'b': {
    'fontWeight': 'bolder'
  },
  'strong': {
    'fontWeight': 'bolder'
  },
  'sub': {
    'position': 'relative',
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline'
  },
  'sup': {
    'position': 'relative',
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline'
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'a': {
    'textDecoration': 'none',
    'backgroundColor': 'transparent',
    'color': '#000'
  },
  'a:not([href]):not([tabindex])': {
    'color': 'inherit',
    'textDecoration': 'none'
  },
  'a:not([href]):not([tabindex]):focus': {
    'color': 'inherit',
    'textDecoration': 'none'
  },
  'a:not([href]):not([tabindex]):hover': {
    'color': 'inherit',
    'textDecoration': 'none'
  },
  'a:not([href]):not([tabindex]):focus': {
    'outline': '0'
  },
  'code': {
    'fontFamily': 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'fontFamily': 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'overflow': 'auto'
  },
  'img': {
    'verticalAlign': 'middle',
    'borderStyle': 'none'
  },
  'svg': {
    'overflow': 'hidden',
    'verticalAlign': 'middle'
  },
  'table': {
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'caption': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.75 }],
    'color': '#6c757d',
    'textAlign': 'left',
    'captionSide': 'bottom'
  },
  'th': {
    'textAlign': 'inherit'
  },
  'label': {
    'display': 'inline-block',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'button': {
    'borderRadius': '0'
  },
  'button:focus': {
    'outline': 'dotted 1px',
    'outline': '-webkit-focus-ring-color auto 5px'
  },
  'button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'input': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'optgroup': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'select': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'textarea': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'button': {
    'overflow': 'visible'
  },
  'input': {
    'overflow': 'visible'
  },
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  'select': {
    'wordWrap': 'normal'
  },
  '[type=button]': {
    'WebkitAppearance': 'button'
  },
  '[type=reset]': {
    'WebkitAppearance': 'button'
  },
  '[type=submit]': {
    'WebkitAppearance': 'button'
  },
  'button': {
    'WebkitAppearance': 'button'
  },
  '[type=button]:not(:disabled)': {
    'cursor': 'pointer'
  },
  '[type=reset]:not(:disabled)': {
    'cursor': 'pointer'
  },
  '[type=submit]:not(:disabled)': {
    'cursor': 'pointer'
  },
  'button:not(:disabled)': {
    'cursor': 'pointer'
  },
  '[type=button]::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  '[type=reset]::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  '[type=submit]::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  'button::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  'input[type=checkbox]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type=radio]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type=date]': {
    'WebkitAppearance': 'listbox'
  },
  'input[type=datetime-local]': {
    'WebkitAppearance': 'listbox'
  },
  'input[type=month]': {
    'WebkitAppearance': 'listbox'
  },
  'input[type=time]': {
    'WebkitAppearance': 'listbox'
  },
  'textarea': {
    'overflow': 'auto',
    'resize': 'vertical'
  },
  'fieldset': {
    'minWidth': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'legend': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': 'inherit',
    'whiteSpace': 'normal'
  },
  'progress': {
    'verticalAlign': 'baseline'
  },
  '[type=number]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type=number]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type=search]': {
    'outlineOffset': '-2px',
    'WebkitAppearance': 'none'
  },
  '[type=search]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  '::-webkit-file-upload-button': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'WebkitAppearance': 'button'
  },
  'output': {
    'display': 'inline-block'
  },
  'summary': {
    'display': 'list-item',
    'cursor': 'pointer'
  },
  'template': {
    'display': 'none'
  },
  '[hidden]': {
    'display': 'none!important'
  },
  'h1': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h2': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h3': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h4': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h5': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h6': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h1': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h2': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h3': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h4': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h5': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h6': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.75 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.75 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'lead': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'fontWeight': '300'
  },
  'display-1': {
    'fontSize': [{ 'unit': 'rem', 'value': 6 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'display-2': {
    'fontSize': [{ 'unit': 'rem', 'value': 5.5 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'display-3': {
    'fontSize': [{ 'unit': 'rem', 'value': 4.5 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'display-4': {
    'fontSize': [{ 'unit': 'rem', 'value': 3.5 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
  },
  'hr': {
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible',
    'marginTop': [{ 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }]
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'fontWeight': '400'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'fontWeight': '400'
  },
  'mark': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'backgroundColor': '#fcf8e3'
  },
  'mark': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'backgroundColor': '#fcf8e3'
  },
  'list-inline': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'list-unstyled': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'list-inline-item': {
    'display': 'inline-block'
  },
  'list-inline-item:not(:last-child)': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'initialism': {
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'textTransform': 'uppercase'
  },
  'blockquote': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'blockquote-footer': {
    'display': 'block',
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'color': '#6c757d'
  },
  'blockquote-footer::before': {
    'content': '"\2014\00A0"'
  },
  'img-fluid': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'img-thumbnail': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }],
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }],
    'borderRadius': '.25rem',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'figure': {
    'display': 'inline-block'
  },
  'figure-img': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'figure-caption': {
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'color': '#6c757d'
  },
  'code': {
    'fontSize': [{ 'unit': '%V', 'value': 0.875 }],
    'color': '#e83e8c',
    'wordBreak': 'break-word'
  },
  'a>code': {
    'color': 'inherit'
  },
  'kbd': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.875 }],
    'color': '#fff',
    'backgroundColor': '#212529',
    'borderRadius': '.2rem'
  },
  'kbd kbd': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': '700'
  },
  'pre': {
    'display': 'block',
    'fontSize': [{ 'unit': '%V', 'value': 0.875 }],
    'color': '#212529'
  },
  'pre code': {
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': 'inherit',
    'wordBreak': 'normal'
  },
  'pre-scrollable': {
    'maxHeight': [{ 'unit': 'px', 'value': 340 }],
    'overflowY': 'scroll'
  },
  'container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    '>w576': {
      'maxWidth': [{ 'unit': 'px', 'value': 540 }]
    },
    '>w768': {
      'maxWidth': [{ 'unit': 'px', 'value': 720 }]
    },
    '>w992': {
      'maxWidth': [{ 'unit': 'px', 'value': 960 }]
    },
    '>w1200': {
      'maxWidth': [{ 'unit': 'px', 'value': 1140 }]
    }
  },
  'container-fluid': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'row': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  'no-gutters': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'no-gutters>col': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'no-gutters>[class*=col-]': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'col': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col': {
    'flexBasis': '0',
    'flexGrow': '1',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-auto': {
    'flex': '0 0 auto',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-1': {
    'flex': '0 0 8.333333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.08333333 }]
  },
  'col-2': {
    'flex': '0 0 16.666667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.16666667000000002 }]
  },
  'col-3': {
    'flex': '0 0 25%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'col-4': {
    'flex': '0 0 33.333333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.33333333000000004 }]
  },
  'col-5': {
    'flex': '0 0 41.666667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.41666666999999996 }]
  },
  'col-6': {
    'flex': '0 0 50%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'col-7': {
    'flex': '0 0 58.333333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.58333333 }]
  },
  'col-8': {
    'flex': '0 0 66.666667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.66666667 }]
  },
  'col-9': {
    'flex': '0 0 75%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'col-10': {
    'flex': '0 0 83.333333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.83333333 }]
  },
  'col-11': {
    'flex': '0 0 91.666667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.91666667 }]
  },
  'col-12': {
    'flex': '0 0 100%',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'order-first': {
    'order': '-1'
  },
  'order-last': {
    'order': '13'
  },
  'order-0': {
    'order': '0'
  },
  'order-1': {
    'order': '1'
  },
  'order-2': {
    'order': '2'
  },
  'order-3': {
    'order': '3'
  },
  'order-4': {
    'order': '4'
  },
  'order-5': {
    'order': '5'
  },
  'order-6': {
    'order': '6'
  },
  'order-7': {
    'order': '7'
  },
  'order-8': {
    'order': '8'
  },
  'order-9': {
    'order': '9'
  },
  'order-10': {
    'order': '10'
  },
  'order-11': {
    'order': '11'
  },
  'order-12': {
    'order': '12'
  },
  'offset-1': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.08333333 }]
  },
  'offset-2': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.16666667000000002 }]
  },
  'offset-3': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'offset-4': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.33333333000000004 }]
  },
  'offset-5': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.41666666999999996 }]
  },
  'offset-6': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'offset-7': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.58333333 }]
  },
  'offset-8': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.66666667 }]
  },
  'offset-9': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'offset-10': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.83333333 }]
  },
  'offset-11': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.91666667 }]
  },
  'table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'color': '#212529'
  },
  'table td': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }],
    'verticalAlign': 'top',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table th': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }],
    'verticalAlign': 'top',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table thead th': {
    'verticalAlign': 'bottom',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table tbody+tbody': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table-sm td': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'table-sm th': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'table-bordered': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table-bordered td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table-bordered th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'table-bordered thead td': {
    'borderBottomWidth': [{ 'unit': 'px', 'value': 2 }]
  },
  'table-bordered thead th': {
    'borderBottomWidth': [{ 'unit': 'px', 'value': 2 }]
  },
  'table-borderless tbody+tbody': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'table-borderless td': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'table-borderless th': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'table-borderless thead th': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'table-striped tbody tr:nth-of-type(odd)': {
    'backgroundColor': 'rgba(0,0,0,.05)'
  },
  'table-hover tbody tr:hover': {
    'color': '#212529',
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table-primary': {
    'backgroundColor': '#b8daff'
  },
  'table-primary>td': {
    'backgroundColor': '#b8daff'
  },
  'table-primary>th': {
    'backgroundColor': '#b8daff'
  },
  'table-primary tbody+tbody': {
    'borderColor': '#7abaff'
  },
  'table-primary td': {
    'borderColor': '#7abaff'
  },
  'table-primary th': {
    'borderColor': '#7abaff'
  },
  'table-primary thead th': {
    'borderColor': '#7abaff'
  },
  'table-hover table-primary:hover': {
    'backgroundColor': '#9fcdff'
  },
  'table-hover table-primary:hover>td': {
    'backgroundColor': '#9fcdff'
  },
  'table-hover table-primary:hover>th': {
    'backgroundColor': '#9fcdff'
  },
  'table-secondary': {
    'backgroundColor': '#d6d8db'
  },
  'table-secondary>td': {
    'backgroundColor': '#d6d8db'
  },
  'table-secondary>th': {
    'backgroundColor': '#d6d8db'
  },
  'table-secondary tbody+tbody': {
    'borderColor': '#b3b7bb'
  },
  'table-secondary td': {
    'borderColor': '#b3b7bb'
  },
  'table-secondary th': {
    'borderColor': '#b3b7bb'
  },
  'table-secondary thead th': {
    'borderColor': '#b3b7bb'
  },
  'table-hover table-secondary:hover': {
    'backgroundColor': '#c8cbcf'
  },
  'table-hover table-secondary:hover>td': {
    'backgroundColor': '#c8cbcf'
  },
  'table-hover table-secondary:hover>th': {
    'backgroundColor': '#c8cbcf'
  },
  'table-success': {
    'backgroundColor': '#c3e6cb'
  },
  'table-success>td': {
    'backgroundColor': '#c3e6cb'
  },
  'table-success>th': {
    'backgroundColor': '#c3e6cb'
  },
  'table-success tbody+tbody': {
    'borderColor': '#8fd19e'
  },
  'table-success td': {
    'borderColor': '#8fd19e'
  },
  'table-success th': {
    'borderColor': '#8fd19e'
  },
  'table-success thead th': {
    'borderColor': '#8fd19e'
  },
  'table-hover table-success:hover': {
    'backgroundColor': '#b1dfbb'
  },
  'table-hover table-success:hover>td': {
    'backgroundColor': '#b1dfbb'
  },
  'table-hover table-success:hover>th': {
    'backgroundColor': '#b1dfbb'
  },
  'table-info': {
    'backgroundColor': '#bee5eb'
  },
  'table-info>td': {
    'backgroundColor': '#bee5eb'
  },
  'table-info>th': {
    'backgroundColor': '#bee5eb'
  },
  'table-info tbody+tbody': {
    'borderColor': '#86cfda'
  },
  'table-info td': {
    'borderColor': '#86cfda'
  },
  'table-info th': {
    'borderColor': '#86cfda'
  },
  'table-info thead th': {
    'borderColor': '#86cfda'
  },
  'table-hover table-info:hover': {
    'backgroundColor': '#abdde5'
  },
  'table-hover table-info:hover>td': {
    'backgroundColor': '#abdde5'
  },
  'table-hover table-info:hover>th': {
    'backgroundColor': '#abdde5'
  },
  'table-warning': {
    'backgroundColor': '#ffeeba'
  },
  'table-warning>td': {
    'backgroundColor': '#ffeeba'
  },
  'table-warning>th': {
    'backgroundColor': '#ffeeba'
  },
  'table-warning tbody+tbody': {
    'borderColor': '#ffdf7e'
  },
  'table-warning td': {
    'borderColor': '#ffdf7e'
  },
  'table-warning th': {
    'borderColor': '#ffdf7e'
  },
  'table-warning thead th': {
    'borderColor': '#ffdf7e'
  },
  'table-hover table-warning:hover': {
    'backgroundColor': '#ffe8a1'
  },
  'table-hover table-warning:hover>td': {
    'backgroundColor': '#ffe8a1'
  },
  'table-hover table-warning:hover>th': {
    'backgroundColor': '#ffe8a1'
  },
  'table-danger': {
    'backgroundColor': '#f5c6cb'
  },
  'table-danger>td': {
    'backgroundColor': '#f5c6cb'
  },
  'table-danger>th': {
    'backgroundColor': '#f5c6cb'
  },
  'table-danger tbody+tbody': {
    'borderColor': '#ed969e'
  },
  'table-danger td': {
    'borderColor': '#ed969e'
  },
  'table-danger th': {
    'borderColor': '#ed969e'
  },
  'table-danger thead th': {
    'borderColor': '#ed969e'
  },
  'table-hover table-danger:hover': {
    'backgroundColor': '#f1b0b7'
  },
  'table-hover table-danger:hover>td': {
    'backgroundColor': '#f1b0b7'
  },
  'table-hover table-danger:hover>th': {
    'backgroundColor': '#f1b0b7'
  },
  'table-light': {
    'backgroundColor': '#fdfdfe'
  },
  'table-light>td': {
    'backgroundColor': '#fdfdfe'
  },
  'table-light>th': {
    'backgroundColor': '#fdfdfe'
  },
  'table-light tbody+tbody': {
    'borderColor': '#fbfcfc'
  },
  'table-light td': {
    'borderColor': '#fbfcfc'
  },
  'table-light th': {
    'borderColor': '#fbfcfc'
  },
  'table-light thead th': {
    'borderColor': '#fbfcfc'
  },
  'table-hover table-light:hover': {
    'backgroundColor': '#ececf6'
  },
  'table-hover table-light:hover>td': {
    'backgroundColor': '#ececf6'
  },
  'table-hover table-light:hover>th': {
    'backgroundColor': '#ececf6'
  },
  'table-dark': {
    'backgroundColor': '#c6c8ca'
  },
  'table-dark>td': {
    'backgroundColor': '#c6c8ca'
  },
  'table-dark>th': {
    'backgroundColor': '#c6c8ca'
  },
  'table-dark tbody+tbody': {
    'borderColor': '#95999c'
  },
  'table-dark td': {
    'borderColor': '#95999c'
  },
  'table-dark th': {
    'borderColor': '#95999c'
  },
  'table-dark thead th': {
    'borderColor': '#95999c'
  },
  'table-hover table-dark:hover': {
    'backgroundColor': '#b9bbbe'
  },
  'table-hover table-dark:hover>td': {
    'backgroundColor': '#b9bbbe'
  },
  'table-hover table-dark:hover>th': {
    'backgroundColor': '#b9bbbe'
  },
  'table-active': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table-active>td': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table-active>th': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table-hover table-active:hover': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table-hover table-active:hover>td': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table-hover table-active:hover>th': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'table thead-dark th': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#454d55'
  },
  'table thead-light th': {
    'color': '#495057',
    'backgroundColor': '#e9ecef',
    'borderColor': '#dee2e6'
  },
  'table-dark': {
    'color': '#fff',
    'backgroundColor': '#343a40'
  },
  'table-dark td': {
    'borderColor': '#454d55'
  },
  'table-dark th': {
    'borderColor': '#454d55'
  },
  'table-dark thead th': {
    'borderColor': '#454d55'
  },
  'table-darktable-bordered': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'table-darktable-striped tbody tr:nth-of-type(odd)': {
    'backgroundColor': 'rgba(255,255,255,.05)'
  },
  'table-darktable-hover tbody tr:hover': {
    'color': '#fff',
    'backgroundColor': 'rgba(255,255,255,.075)'
  },
  'table-responsive': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflowX': 'auto',
    'WebkitOverflowScrolling': 'touch'
  },
  'table-responsive>table-bordered': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#495057',
    'backgroundColor': '#fff',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderRadius': '.25rem',
    'transition': 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'form-control::-ms-expand': {
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control:focus': {
    'color': '#495057',
    'backgroundColor': '#fff',
    'borderColor': '#80bdff',
    'outline': '0',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'form-control::-webkit-input-placeholder': {
    'color': '#6c757d',
    'opacity': '1'
  },
  'form-control::-moz-placeholder': {
    'color': '#6c757d',
    'opacity': '1'
  },
  'form-control:-ms-input-placeholder': {
    'color': '#6c757d',
    'opacity': '1'
  },
  'form-control::-ms-input-placeholder': {
    'color': '#6c757d',
    'opacity': '1'
  },
  'form-control::placeholder': {
    'color': '#6c757d',
    'opacity': '1'
  },
  'form-control:disabled': {
    'backgroundColor': '#e9ecef',
    'opacity': '1'
  },
  'form-control[readonly]': {
    'backgroundColor': '#e9ecef',
    'opacity': '1'
  },
  'selectform-control:focus::-ms-value': {
    'color': '#495057',
    'backgroundColor': '#fff'
  },
  'form-control-file': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'form-control-range': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-form-label': {
    'paddingTop': [{ 'unit': 'rem', 'value': NaN }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'col-form-label-lg': {
    'paddingTop': [{ 'unit': 'rem', 'value': NaN }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'col-form-label-sm': {
    'paddingTop': [{ 'unit': 'rem', 'value': NaN }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'form-control-plaintext': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.375 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.375 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#212529',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderWidth': '1px 0'
  },
  'form-control-plaintextform-control-lg': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control-plaintextform-control-sm': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control-sm': {
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'form-control-lg': {
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'selectform-control[multiple]': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'selectform-control[size]': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'textareaform-control': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'form-group': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'form-text': {
    'display': 'block',
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'form-row': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'marginRight': [{ 'unit': 'px', 'value': -5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }]
  },
  'form-row>col': {
    'paddingRight': [{ 'unit': 'px', 'value': 5 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'form-row>[class*=col-]': {
    'paddingRight': [{ 'unit': 'px', 'value': 5 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'form-check': {
    'position': 'relative',
    'display': 'block',
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'form-check-input': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'rem', 'value': 0.3 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -1.25 }]
  },
  'form-check-input:disabled~form-check-label': {
    'color': '#6c757d'
  },
  'form-check-label': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-check-inline': {
    'display': 'inline-flex',
    'alignItems': 'center',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'form-check-inline form-check-input': {
    'position': 'static',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.3125 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'valid-feedback': {
    'display': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'color': '#28a745'
  },
  'valid-tooltip': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '5',
    'display': 'none',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#fff',
    'backgroundColor': 'rgba(40,167,69,.9)',
    'borderRadius': '.25rem'
  },
  'form-controlis-valid': {
    'borderColor': '#28a745',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right calc(.375em + .1875rem)',
    'backgroundSize': 'calc(.75em + .375rem) calc(.75em + .375rem)'
  },
  'was-validated form-control:valid': {
    'borderColor': '#28a745',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right calc(.375em + .1875rem)',
    'backgroundSize': 'calc(.75em + .375rem) calc(.75em + .375rem)'
  },
  'form-controlis-valid:focus': {
    'borderColor': '#28a745',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'was-validated form-control:valid:focus': {
    'borderColor': '#28a745',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'form-controlis-valid~valid-feedback': {
    'display': 'block'
  },
  'form-controlis-valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated form-control:valid~valid-feedback': {
    'display': 'block'
  },
  'was-validated form-control:valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated textareaform-control:valid': {
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundPosition': 'top calc(.375em + .1875rem) right calc(.375em + .1875rem)'
  },
  'textareaform-controlis-valid': {
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundPosition': 'top calc(.375em + .1875rem) right calc(.375em + .1875rem)'
  },
  'custom-selectis-valid': {
    'borderColor': '#28a745',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'background': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff'
  },
  'was-validated custom-select:valid': {
    'borderColor': '#28a745',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'background': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff'
  },
  'custom-selectis-valid:focus': {
    'borderColor': '#28a745',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'was-validated custom-select:valid:focus': {
    'borderColor': '#28a745',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'custom-selectis-valid~valid-feedback': {
    'display': 'block'
  },
  'custom-selectis-valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated custom-select:valid~valid-feedback': {
    'display': 'block'
  },
  'was-validated custom-select:valid~valid-tooltip': {
    'display': 'block'
  },
  'form-control-fileis-valid~valid-feedback': {
    'display': 'block'
  },
  'form-control-fileis-valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated form-control-file:valid~valid-feedback': {
    'display': 'block'
  },
  'was-validated form-control-file:valid~valid-tooltip': {
    'display': 'block'
  },
  'form-check-inputis-valid~form-check-label': {
    'color': '#28a745'
  },
  'was-validated form-check-input:valid~form-check-label': {
    'color': '#28a745'
  },
  'form-check-inputis-valid~valid-feedback': {
    'display': 'block'
  },
  'form-check-inputis-valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated form-check-input:valid~valid-feedback': {
    'display': 'block'
  },
  'was-validated form-check-input:valid~valid-tooltip': {
    'display': 'block'
  },
  'custom-control-inputis-valid~custom-control-label': {
    'color': '#28a745'
  },
  'was-validated custom-control-input:valid~custom-control-label': {
    'color': '#28a745'
  },
  'custom-control-inputis-valid~custom-control-label::before': {
    'borderColor': '#28a745'
  },
  'was-validated custom-control-input:valid~custom-control-label::before': {
    'borderColor': '#28a745'
  },
  'custom-control-inputis-valid~valid-feedback': {
    'display': 'block'
  },
  'custom-control-inputis-valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated custom-control-input:valid~valid-feedback': {
    'display': 'block'
  },
  'was-validated custom-control-input:valid~valid-tooltip': {
    'display': 'block'
  },
  'custom-control-inputis-valid:checked~custom-control-label::before': {
    'borderColor': '#34ce57',
    'backgroundColor': '#34ce57'
  },
  'was-validated custom-control-input:valid:checked~custom-control-label::before': {
    'borderColor': '#34ce57',
    'backgroundColor': '#34ce57'
  },
  'custom-control-inputis-valid:focus~custom-control-label::before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'was-validated custom-control-input:valid:focus~custom-control-label::before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'custom-control-inputis-valid:focus:not(:checked)~custom-control-label::before': {
    'borderColor': '#28a745'
  },
  'was-validated custom-control-input:valid:focus:not(:checked)~custom-control-label::before': {
    'borderColor': '#28a745'
  },
  'custom-file-inputis-valid~custom-file-label': {
    'borderColor': '#28a745'
  },
  'was-validated custom-file-input:valid~custom-file-label': {
    'borderColor': '#28a745'
  },
  'custom-file-inputis-valid~valid-feedback': {
    'display': 'block'
  },
  'custom-file-inputis-valid~valid-tooltip': {
    'display': 'block'
  },
  'was-validated custom-file-input:valid~valid-feedback': {
    'display': 'block'
  },
  'was-validated custom-file-input:valid~valid-tooltip': {
    'display': 'block'
  },
  'custom-file-inputis-valid:focus~custom-file-label': {
    'borderColor': '#28a745',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'was-validated custom-file-input:valid:focus~custom-file-label': {
    'borderColor': '#28a745',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.25)' }]
  },
  'invalid-feedback': {
    'display': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'color': '#dc3545'
  },
  'invalid-tooltip': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '5',
    'display': 'none',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#fff',
    'backgroundColor': 'rgba(220,53,69,.9)',
    'borderRadius': '.25rem'
  },
  'form-controlis-invalid': {
    'borderColor': '#dc3545',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E")',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right calc(.375em + .1875rem)',
    'backgroundSize': 'calc(.75em + .375rem) calc(.75em + .375rem)'
  },
  'was-validated form-control:invalid': {
    'borderColor': '#dc3545',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E")',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right calc(.375em + .1875rem)',
    'backgroundSize': 'calc(.75em + .375rem) calc(.75em + .375rem)'
  },
  'form-controlis-invalid:focus': {
    'borderColor': '#dc3545',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'was-validated form-control:invalid:focus': {
    'borderColor': '#dc3545',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'form-controlis-invalid~invalid-feedback': {
    'display': 'block'
  },
  'form-controlis-invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated form-control:invalid~invalid-feedback': {
    'display': 'block'
  },
  'was-validated form-control:invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated textareaform-control:invalid': {
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundPosition': 'top calc(.375em + .1875rem) right calc(.375em + .1875rem)'
  },
  'textareaform-controlis-invalid': {
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundPosition': 'top calc(.375em + .1875rem) right calc(.375em + .1875rem)'
  },
  'custom-selectis-invalid': {
    'borderColor': '#dc3545',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'background': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff'
  },
  'was-validated custom-select:invalid': {
    'borderColor': '#dc3545',
    'paddingRight': [{ 'unit': 'rem', 'value': NaN }],
    'background': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff'
  },
  'custom-selectis-invalid:focus': {
    'borderColor': '#dc3545',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'was-validated custom-select:invalid:focus': {
    'borderColor': '#dc3545',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'custom-selectis-invalid~invalid-feedback': {
    'display': 'block'
  },
  'custom-selectis-invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated custom-select:invalid~invalid-feedback': {
    'display': 'block'
  },
  'was-validated custom-select:invalid~invalid-tooltip': {
    'display': 'block'
  },
  'form-control-fileis-invalid~invalid-feedback': {
    'display': 'block'
  },
  'form-control-fileis-invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated form-control-file:invalid~invalid-feedback': {
    'display': 'block'
  },
  'was-validated form-control-file:invalid~invalid-tooltip': {
    'display': 'block'
  },
  'form-check-inputis-invalid~form-check-label': {
    'color': '#dc3545'
  },
  'was-validated form-check-input:invalid~form-check-label': {
    'color': '#dc3545'
  },
  'form-check-inputis-invalid~invalid-feedback': {
    'display': 'block'
  },
  'form-check-inputis-invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated form-check-input:invalid~invalid-feedback': {
    'display': 'block'
  },
  'was-validated form-check-input:invalid~invalid-tooltip': {
    'display': 'block'
  },
  'custom-control-inputis-invalid~custom-control-label': {
    'color': '#dc3545'
  },
  'was-validated custom-control-input:invalid~custom-control-label': {
    'color': '#dc3545'
  },
  'custom-control-inputis-invalid~custom-control-label::before': {
    'borderColor': '#dc3545'
  },
  'was-validated custom-control-input:invalid~custom-control-label::before': {
    'borderColor': '#dc3545'
  },
  'custom-control-inputis-invalid~invalid-feedback': {
    'display': 'block'
  },
  'custom-control-inputis-invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated custom-control-input:invalid~invalid-feedback': {
    'display': 'block'
  },
  'was-validated custom-control-input:invalid~invalid-tooltip': {
    'display': 'block'
  },
  'custom-control-inputis-invalid:checked~custom-control-label::before': {
    'borderColor': '#e4606d',
    'backgroundColor': '#e4606d'
  },
  'was-validated custom-control-input:invalid:checked~custom-control-label::before': {
    'borderColor': '#e4606d',
    'backgroundColor': '#e4606d'
  },
  'custom-control-inputis-invalid:focus~custom-control-label::before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'was-validated custom-control-input:invalid:focus~custom-control-label::before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'custom-control-inputis-invalid:focus:not(:checked)~custom-control-label::before': {
    'borderColor': '#dc3545'
  },
  'was-validated custom-control-input:invalid:focus:not(:checked)~custom-control-label::before': {
    'borderColor': '#dc3545'
  },
  'custom-file-inputis-invalid~custom-file-label': {
    'borderColor': '#dc3545'
  },
  'was-validated custom-file-input:invalid~custom-file-label': {
    'borderColor': '#dc3545'
  },
  'custom-file-inputis-invalid~invalid-feedback': {
    'display': 'block'
  },
  'custom-file-inputis-invalid~invalid-tooltip': {
    'display': 'block'
  },
  'was-validated custom-file-input:invalid~invalid-feedback': {
    'display': 'block'
  },
  'was-validated custom-file-input:invalid~invalid-tooltip': {
    'display': 'block'
  },
  'custom-file-inputis-invalid:focus~custom-file-label': {
    'borderColor': '#dc3545',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'was-validated custom-file-input:invalid:focus~custom-file-label': {
    'borderColor': '#dc3545',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.25)' }]
  },
  'form-inline': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'alignItems': 'center'
  },
  'form-inline form-check': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w576': {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'width': [{ 'unit': 'string', 'value': 'auto' }],
      'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'btn': {
    'display': 'inline-block',
    'fontWeight': '400',
    'color': '#212529',
    'textAlign': 'center',
    'verticalAlign': 'middle',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.25rem',
    'transition': 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'btn:hover': {
    'color': '#212529',
    'textDecoration': 'none'
  },
  'btnfocus': {
    'outline': '0',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'btn:focus': {
    'outline': '0',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'btndisabled': {
    'opacity': '.65'
  },
  'btn:disabled': {
    'opacity': '.65'
  },
  'abtndisabled': {
    'pointerEvents': 'none'
  },
  'fieldset:disabled abtn': {
    'pointerEvents': 'none'
  },
  'btn-primary': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-primary:hover': {
    'color': '#fff',
    'backgroundColor': '#0069d9',
    'borderColor': '#0062cc'
  },
  'btn-primaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(38,143,255,.5)' }]
  },
  'btn-primary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(38,143,255,.5)' }]
  },
  'btn-primarydisabled': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-primary:disabled': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-primary:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#0062cc',
    'borderColor': '#005cbf'
  },
  'btn-primary:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#0062cc',
    'borderColor': '#005cbf'
  },
  'show>btn-primarydropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#0062cc',
    'borderColor': '#005cbf'
  },
  'btn-primary:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(38,143,255,.5)' }]
  },
  'btn-primary:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(38,143,255,.5)' }]
  },
  'show>btn-primarydropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(38,143,255,.5)' }]
  },
  'btn-secondary': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-secondary:hover': {
    'color': '#fff',
    'backgroundColor': '#5a6268',
    'borderColor': '#545b62'
  },
  'btn-secondaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(130,138,145,.5)' }]
  },
  'btn-secondary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(130,138,145,.5)' }]
  },
  'btn-secondarydisabled': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-secondary:disabled': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-secondary:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#545b62',
    'borderColor': '#4e555b'
  },
  'btn-secondary:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#545b62',
    'borderColor': '#4e555b'
  },
  'show>btn-secondarydropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#545b62',
    'borderColor': '#4e555b'
  },
  'btn-secondary:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(130,138,145,.5)' }]
  },
  'btn-secondary:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(130,138,145,.5)' }]
  },
  'show>btn-secondarydropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(130,138,145,.5)' }]
  },
  'btn-success': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-success:hover': {
    'color': '#fff',
    'backgroundColor': '#218838',
    'borderColor': '#1e7e34'
  },
  'btn-successfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(72,180,97,.5)' }]
  },
  'btn-success:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(72,180,97,.5)' }]
  },
  'btn-successdisabled': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-success:disabled': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-success:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#1e7e34',
    'borderColor': '#1c7430'
  },
  'btn-success:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#1e7e34',
    'borderColor': '#1c7430'
  },
  'show>btn-successdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#1e7e34',
    'borderColor': '#1c7430'
  },
  'btn-success:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(72,180,97,.5)' }]
  },
  'btn-success:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(72,180,97,.5)' }]
  },
  'show>btn-successdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(72,180,97,.5)' }]
  },
  'btn-info': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-info:hover': {
    'color': '#fff',
    'backgroundColor': '#138496',
    'borderColor': '#117a8b'
  },
  'btn-infofocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(58,176,195,.5)' }]
  },
  'btn-info:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(58,176,195,.5)' }]
  },
  'btn-infodisabled': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-info:disabled': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-info:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#117a8b',
    'borderColor': '#10707f'
  },
  'btn-info:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#117a8b',
    'borderColor': '#10707f'
  },
  'show>btn-infodropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#117a8b',
    'borderColor': '#10707f'
  },
  'btn-info:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(58,176,195,.5)' }]
  },
  'btn-info:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(58,176,195,.5)' }]
  },
  'show>btn-infodropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(58,176,195,.5)' }]
  },
  'btn-warning': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-warning:hover': {
    'color': '#212529',
    'backgroundColor': '#e0a800',
    'borderColor': '#d39e00'
  },
  'btn-warningfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(222,170,12,.5)' }]
  },
  'btn-warning:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(222,170,12,.5)' }]
  },
  'btn-warningdisabled': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-warning:disabled': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-warning:not(:disabled):not(disabled)active': {
    'color': '#212529',
    'backgroundColor': '#d39e00',
    'borderColor': '#c69500'
  },
  'btn-warning:not(:disabled):not(disabled):active': {
    'color': '#212529',
    'backgroundColor': '#d39e00',
    'borderColor': '#c69500'
  },
  'show>btn-warningdropdown-toggle': {
    'color': '#212529',
    'backgroundColor': '#d39e00',
    'borderColor': '#c69500'
  },
  'btn-warning:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(222,170,12,.5)' }]
  },
  'btn-warning:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(222,170,12,.5)' }]
  },
  'show>btn-warningdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(222,170,12,.5)' }]
  },
  'btn-danger': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-danger:hover': {
    'color': '#fff',
    'backgroundColor': '#c82333',
    'borderColor': '#bd2130'
  },
  'btn-dangerfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(225,83,97,.5)' }]
  },
  'btn-danger:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(225,83,97,.5)' }]
  },
  'btn-dangerdisabled': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-danger:disabled': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-danger:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#bd2130',
    'borderColor': '#b21f2d'
  },
  'btn-danger:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#bd2130',
    'borderColor': '#b21f2d'
  },
  'show>btn-dangerdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#bd2130',
    'borderColor': '#b21f2d'
  },
  'btn-danger:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(225,83,97,.5)' }]
  },
  'btn-danger:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(225,83,97,.5)' }]
  },
  'show>btn-dangerdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(225,83,97,.5)' }]
  },
  'btn-light': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-light:hover': {
    'color': '#212529',
    'backgroundColor': '#e2e6ea',
    'borderColor': '#dae0e5'
  },
  'btn-lightfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(216,217,219,.5)' }]
  },
  'btn-light:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(216,217,219,.5)' }]
  },
  'btn-lightdisabled': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-light:disabled': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-light:not(:disabled):not(disabled)active': {
    'color': '#212529',
    'backgroundColor': '#dae0e5',
    'borderColor': '#d3d9df'
  },
  'btn-light:not(:disabled):not(disabled):active': {
    'color': '#212529',
    'backgroundColor': '#dae0e5',
    'borderColor': '#d3d9df'
  },
  'show>btn-lightdropdown-toggle': {
    'color': '#212529',
    'backgroundColor': '#dae0e5',
    'borderColor': '#d3d9df'
  },
  'btn-light:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(216,217,219,.5)' }]
  },
  'btn-light:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(216,217,219,.5)' }]
  },
  'show>btn-lightdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(216,217,219,.5)' }]
  },
  'btn-dark': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-dark:hover': {
    'color': '#fff',
    'backgroundColor': '#23272b',
    'borderColor': '#1d2124'
  },
  'btn-darkfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(82,88,93,.5)' }]
  },
  'btn-dark:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(82,88,93,.5)' }]
  },
  'btn-darkdisabled': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-dark:disabled': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-dark:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#1d2124',
    'borderColor': '#171a1d'
  },
  'btn-dark:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#1d2124',
    'borderColor': '#171a1d'
  },
  'show>btn-darkdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#1d2124',
    'borderColor': '#171a1d'
  },
  'btn-dark:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(82,88,93,.5)' }]
  },
  'btn-dark:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(82,88,93,.5)' }]
  },
  'show>btn-darkdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(82,88,93,.5)' }]
  },
  'btn-outline-primary': {
    'color': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-outline-primary:hover': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-outline-primaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.5)' }]
  },
  'btn-outline-primary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.5)' }]
  },
  'btn-outline-primarydisabled': {
    'color': '#007bff',
    'backgroundColor': 'transparent'
  },
  'btn-outline-primary:disabled': {
    'color': '#007bff',
    'backgroundColor': 'transparent'
  },
  'btn-outline-primary:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-outline-primary:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'show>btn-outline-primarydropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#007bff',
    'borderColor': '#007bff'
  },
  'btn-outline-primary:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.5)' }]
  },
  'btn-outline-primary:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.5)' }]
  },
  'show>btn-outline-primarydropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.5)' }]
  },
  'btn-outline-secondary': {
    'color': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-outline-secondary:hover': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-outline-secondaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(108,117,125,.5)' }]
  },
  'btn-outline-secondary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(108,117,125,.5)' }]
  },
  'btn-outline-secondarydisabled': {
    'color': '#6c757d',
    'backgroundColor': 'transparent'
  },
  'btn-outline-secondary:disabled': {
    'color': '#6c757d',
    'backgroundColor': 'transparent'
  },
  'btn-outline-secondary:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-outline-secondary:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'show>btn-outline-secondarydropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#6c757d',
    'borderColor': '#6c757d'
  },
  'btn-outline-secondary:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(108,117,125,.5)' }]
  },
  'btn-outline-secondary:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(108,117,125,.5)' }]
  },
  'show>btn-outline-secondarydropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(108,117,125,.5)' }]
  },
  'btn-outline-success': {
    'color': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-outline-success:hover': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-outline-successfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.5)' }]
  },
  'btn-outline-success:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.5)' }]
  },
  'btn-outline-successdisabled': {
    'color': '#28a745',
    'backgroundColor': 'transparent'
  },
  'btn-outline-success:disabled': {
    'color': '#28a745',
    'backgroundColor': 'transparent'
  },
  'btn-outline-success:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-outline-success:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'show>btn-outline-successdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#28a745',
    'borderColor': '#28a745'
  },
  'btn-outline-success:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.5)' }]
  },
  'btn-outline-success:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.5)' }]
  },
  'show>btn-outline-successdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(40,167,69,.5)' }]
  },
  'btn-outline-info': {
    'color': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-outline-info:hover': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-outline-infofocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(23,162,184,.5)' }]
  },
  'btn-outline-info:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(23,162,184,.5)' }]
  },
  'btn-outline-infodisabled': {
    'color': '#17a2b8',
    'backgroundColor': 'transparent'
  },
  'btn-outline-info:disabled': {
    'color': '#17a2b8',
    'backgroundColor': 'transparent'
  },
  'btn-outline-info:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-outline-info:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'show>btn-outline-infodropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#17a2b8',
    'borderColor': '#17a2b8'
  },
  'btn-outline-info:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(23,162,184,.5)' }]
  },
  'btn-outline-info:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(23,162,184,.5)' }]
  },
  'show>btn-outline-infodropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(23,162,184,.5)' }]
  },
  'btn-outline-warning': {
    'color': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-outline-warning:hover': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-outline-warningfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(255,193,7,.5)' }]
  },
  'btn-outline-warning:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(255,193,7,.5)' }]
  },
  'btn-outline-warningdisabled': {
    'color': '#ffc107',
    'backgroundColor': 'transparent'
  },
  'btn-outline-warning:disabled': {
    'color': '#ffc107',
    'backgroundColor': 'transparent'
  },
  'btn-outline-warning:not(:disabled):not(disabled)active': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-outline-warning:not(:disabled):not(disabled):active': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'show>btn-outline-warningdropdown-toggle': {
    'color': '#212529',
    'backgroundColor': '#ffc107',
    'borderColor': '#ffc107'
  },
  'btn-outline-warning:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(255,193,7,.5)' }]
  },
  'btn-outline-warning:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(255,193,7,.5)' }]
  },
  'show>btn-outline-warningdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(255,193,7,.5)' }]
  },
  'btn-outline-danger': {
    'color': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-outline-danger:hover': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-outline-dangerfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.5)' }]
  },
  'btn-outline-danger:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.5)' }]
  },
  'btn-outline-dangerdisabled': {
    'color': '#dc3545',
    'backgroundColor': 'transparent'
  },
  'btn-outline-danger:disabled': {
    'color': '#dc3545',
    'backgroundColor': 'transparent'
  },
  'btn-outline-danger:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-outline-danger:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'show>btn-outline-dangerdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#dc3545',
    'borderColor': '#dc3545'
  },
  'btn-outline-danger:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.5)' }]
  },
  'btn-outline-danger:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.5)' }]
  },
  'show>btn-outline-dangerdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(220,53,69,.5)' }]
  },
  'btn-outline-light': {
    'color': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-outline-light:hover': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-outline-lightfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(248,249,250,.5)' }]
  },
  'btn-outline-light:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(248,249,250,.5)' }]
  },
  'btn-outline-lightdisabled': {
    'color': '#f8f9fa',
    'backgroundColor': 'transparent'
  },
  'btn-outline-light:disabled': {
    'color': '#f8f9fa',
    'backgroundColor': 'transparent'
  },
  'btn-outline-light:not(:disabled):not(disabled)active': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-outline-light:not(:disabled):not(disabled):active': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'show>btn-outline-lightdropdown-toggle': {
    'color': '#212529',
    'backgroundColor': '#f8f9fa',
    'borderColor': '#f8f9fa'
  },
  'btn-outline-light:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(248,249,250,.5)' }]
  },
  'btn-outline-light:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(248,249,250,.5)' }]
  },
  'show>btn-outline-lightdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(248,249,250,.5)' }]
  },
  'btn-outline-dark': {
    'color': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-outline-dark:hover': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-outline-darkfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(52,58,64,.5)' }]
  },
  'btn-outline-dark:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(52,58,64,.5)' }]
  },
  'btn-outline-darkdisabled': {
    'color': '#343a40',
    'backgroundColor': 'transparent'
  },
  'btn-outline-dark:disabled': {
    'color': '#343a40',
    'backgroundColor': 'transparent'
  },
  'btn-outline-dark:not(:disabled):not(disabled)active': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-outline-dark:not(:disabled):not(disabled):active': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'show>btn-outline-darkdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#343a40',
    'borderColor': '#343a40'
  },
  'btn-outline-dark:not(:disabled):not(disabled)active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(52,58,64,.5)' }]
  },
  'btn-outline-dark:not(:disabled):not(disabled):active:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(52,58,64,.5)' }]
  },
  'show>btn-outline-darkdropdown-toggle:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(52,58,64,.5)' }]
  },
  'btn-link': {
    'fontWeight': '400',
    'color': '#007bff',
    'textDecoration': 'none'
  },
  'btn-link:hover': {
    'color': '#0056b3',
    'textDecoration': 'underline'
  },
  'btn-linkfocus': {
    'textDecoration': 'underline',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-link:focus': {
    'textDecoration': 'underline',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-linkdisabled': {
    'color': '#6c757d',
    'pointerEvents': 'none'
  },
  'btn-link:disabled': {
    'color': '#6c757d',
    'pointerEvents': 'none'
  },
  'btn-group-lg>btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'btn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'btn-group-sm>btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'btn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'btn-block': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-block+btn-block': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'input[type=button]btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input[type=reset]btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input[type=submit]btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'fade': {
    'transition': 'opacity .15s linear',
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'fade:not(show)': {
    'opacity': '0'
  },
  'collapse:not(show)': {
    'display': 'none'
  },
  'collapsing': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'transition': 'height .35s ease',
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'dropdown': {
    'position': 'relative'
  },
  'dropleft': {
    'position': 'relative'
  },
  'dropright': {
    'position': 'relative'
  },
  'dropup': {
    'position': 'relative'
  },
  'dropdown-toggle': {
    'whiteSpace': 'nowrap'
  },
  'dropdown-toggle::after': {
    'display': 'inline-block',
    'marginLeft': [{ 'unit': 'em', 'value': 0.255 }],
    'verticalAlign': '.255em',
    'content': '""',
    'borderTop': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRight': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'dropdown-toggle:empty::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-menu': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1000',
    'display': 'none',
    'float': 'left',
    'minWidth': [{ 'unit': 'rem', 'value': 10 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'rem', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'color': '#212529',
    'textAlign': 'left',
    'listStyle': 'none',
    'backgroundColor': '#fff',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.15)' }],
    'borderRadius': '.25rem'
  },
  'dropdown-menu-left': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-menu-right': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'dropup dropdown-menu': {
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.125 }]
  },
  'dropup dropdown-toggle::after': {
    'display': 'inline-block',
    'marginLeft': [{ 'unit': 'em', 'value': 0.255 }],
    'verticalAlign': '.255em',
    'content': '""',
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'borderRight': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottom': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }],
    'borderLeft': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'dropup dropdown-toggle:empty::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropright dropdown-menu': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.125 }]
  },
  'dropright dropdown-toggle::after': {
    'display': 'inline-block',
    'marginLeft': [{ 'unit': 'em', 'value': 0.255 }],
    'content': '""',
    'borderTop': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeft': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }],
    'verticalAlign': '0'
  },
  'dropright dropdown-toggle:empty::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropleft dropdown-menu': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': '%H', 'value': 1 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.125 }]
  },
  'dropleft dropdown-toggle::after': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.255 }],
    'verticalAlign': '.255em',
    'content': '""',
    'display': 'none'
  },
  'dropleft dropdown-toggle::before': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'em', 'value': 0.255 }],
    'content': '""',
    'borderTop': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRight': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }],
    'borderBottom': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'verticalAlign': '0'
  },
  'dropleft dropdown-toggle:empty::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-menu[x-placement^=bottom]': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'dropdown-menu[x-placement^=left]': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'dropdown-menu[x-placement^=right]': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'dropdown-menu[x-placement^=top]': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'dropdown-divider': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e9ecef' }]
  },
  'dropdown-item': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1.5 }],
    'clear': 'both',
    'fontWeight': '400',
    'color': '#212529',
    'textAlign': 'inherit',
    'whiteSpace': 'nowrap',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-item:focus': {
    'color': '#16181b',
    'textDecoration': 'none',
    'backgroundColor': '#f8f9fa'
  },
  'dropdown-item:hover': {
    'color': '#16181b',
    'textDecoration': 'none',
    'backgroundColor': '#f8f9fa'
  },
  'dropdown-itemactive': {
    'color': '#fff',
    'textDecoration': 'none',
    'backgroundColor': '#007bff'
  },
  'dropdown-item:active': {
    'color': '#fff',
    'textDecoration': 'none',
    'backgroundColor': '#007bff'
  },
  'dropdown-itemdisabled': {
    'color': '#6c757d',
    'pointerEvents': 'none',
    'backgroundColor': 'transparent'
  },
  'dropdown-item:disabled': {
    'color': '#6c757d',
    'pointerEvents': 'none',
    'backgroundColor': 'transparent'
  },
  'dropdown-menushow': {
    'display': 'block'
  },
  'dropdown-header': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'color': '#6c757d',
    'whiteSpace': 'nowrap'
  },
  'dropdown-item-text': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1.5 }],
    'color': '#212529'
  },
  'btn-group': {
    'position': 'relative',
    'display': 'inline-flex',
    'verticalAlign': 'middle'
  },
  'btn-group-vertical': {
    'position': 'relative',
    'display': 'inline-flex',
    'verticalAlign': 'middle'
  },
  'btn-group-vertical>btn': {
    'position': 'relative',
    'flex': '1 1 auto'
  },
  'btn-group>btn': {
    'position': 'relative',
    'flex': '1 1 auto'
  },
  'btn-group-vertical>btnactive': {
    'zIndex': '1'
  },
  'btn-group-vertical>btn:active': {
    'zIndex': '1'
  },
  'btn-group-vertical>btn:focus': {
    'zIndex': '1'
  },
  'btn-group-vertical>btn:hover': {
    'zIndex': '1'
  },
  'btn-group>btnactive': {
    'zIndex': '1'
  },
  'btn-group>btn:active': {
    'zIndex': '1'
  },
  'btn-group>btn:focus': {
    'zIndex': '1'
  },
  'btn-group>btn:hover': {
    'zIndex': '1'
  },
  'btn-toolbar': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'flex-start'
  },
  'btn-toolbar input-group': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'btn-group>btn-group:not(:first-child)': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group>btn:not(:first-child)': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group>btn-group:not(:last-child)>btn': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'btn-group>btn:not(:last-child):not(dropdown-toggle)': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'btn-group>btn-group:not(:first-child)>btn': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'btn-group>btn:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5625 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5625 }]
  },
  'dropdown-toggle-split::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropright dropdown-toggle-split::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropup dropdown-toggle-split::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropleft dropdown-toggle-split::before': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm>btn+dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.375 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.375 }]
  },
  'btn-sm+dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.375 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.375 }]
  },
  'btn-group-lg>btn+dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'btn-lg+dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'btn-group-vertical': {
    'flexDirection': 'column',
    'alignItems': 'flex-start',
    'justifyContent': 'center'
  },
  'btn-group-vertical>btn': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-group-vertical>btn-group': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-group-vertical>btn-group:not(:first-child)': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group-vertical>btn:not(:first-child)': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group-vertical>btn-group:not(:last-child)>btn': {
    'borderBottomRightRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'btn-group-vertical>btn:not(:last-child):not(dropdown-toggle)': {
    'borderBottomRightRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'btn-group-vertical>btn-group:not(:first-child)>btn': {
    'borderTopLeftRadius': '0',
    'borderTopRightRadius': '0'
  },
  'btn-group-vertical>btn:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderTopRightRadius': '0'
  },
  'btn-group-toggle>btn': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-toggle>btn-group>btn': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-toggle>btn input[type=checkbox]': {
    'position': 'absolute',
    'clip': 'rect(0,0,0,0)',
    'pointerEvents': 'none'
  },
  'btn-group-toggle>btn input[type=radio]': {
    'position': 'absolute',
    'clip': 'rect(0,0,0,0)',
    'pointerEvents': 'none'
  },
  'btn-group-toggle>btn-group>btn input[type=checkbox]': {
    'position': 'absolute',
    'clip': 'rect(0,0,0,0)',
    'pointerEvents': 'none'
  },
  'btn-group-toggle>btn-group>btn input[type=radio]': {
    'position': 'absolute',
    'clip': 'rect(0,0,0,0)',
    'pointerEvents': 'none'
  },
  'input-group': {
    'position': 'relative',
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'stretch',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input-group>custom-file': {
    'position': 'relative',
    'flex': '1 1 auto',
    'width': [{ 'unit': '%H', 'value': 0.01 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group>custom-select': {
    'position': 'relative',
    'flex': '1 1 auto',
    'width': [{ 'unit': '%H', 'value': 0.01 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group>form-control': {
    'position': 'relative',
    'flex': '1 1 auto',
    'width': [{ 'unit': '%H', 'value': 0.01 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group>form-control-plaintext': {
    'position': 'relative',
    'flex': '1 1 auto',
    'width': [{ 'unit': '%H', 'value': 0.01 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group>custom-file+custom-file': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>custom-file+custom-select': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>custom-file+form-control': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>custom-select+custom-file': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>custom-select+custom-select': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>custom-select+form-control': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>form-control+custom-file': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>form-control+custom-select': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>form-control+form-control': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>form-control-plaintext+custom-file': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>form-control-plaintext+custom-select': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>form-control-plaintext+form-control': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group>custom-file custom-file-input:focus~custom-file-label': {
    'zIndex': '3'
  },
  'input-group>custom-select:focus': {
    'zIndex': '3'
  },
  'input-group>form-control:focus': {
    'zIndex': '3'
  },
  'input-group>custom-file custom-file-input:focus': {
    'zIndex': '4'
  },
  'input-group>custom-select:not(:last-child)': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>form-control:not(:last-child)': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>custom-select:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>form-control:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>custom-file': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'input-group>custom-file:not(:last-child) custom-file-label': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>custom-file:not(:last-child) custom-file-label::after': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>custom-file:not(:first-child) custom-file-label': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group-append': {
    'display': 'flex'
  },
  'input-group-prepend': {
    'display': 'flex'
  },
  'input-group-append btn': {
    'position': 'relative',
    'zIndex': '2'
  },
  'input-group-prepend btn': {
    'position': 'relative',
    'zIndex': '2'
  },
  'input-group-append btn:focus': {
    'zIndex': '3'
  },
  'input-group-prepend btn:focus': {
    'zIndex': '3'
  },
  'input-group-append btn+btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-append btn+input-group-text': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-append input-group-text+btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-append input-group-text+input-group-text': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-prepend btn+btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-prepend btn+input-group-text': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-prepend input-group-text+btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-prepend input-group-text+input-group-text': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-prepend': {
    'marginRight': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-append': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-text': {
    'display': 'flex',
    'alignItems': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#495057',
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'backgroundColor': '#e9ecef',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderRadius': '.25rem'
  },
  'input-group-text input[type=checkbox]': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-text input[type=radio]': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-lg>custom-select': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-lg>form-control:not(textarea)': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-lg>custom-select': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'input-group-lg>form-control': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'input-group-lg>input-group-append>btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'input-group-lg>input-group-append>input-group-text': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'input-group-lg>input-group-prepend>btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'input-group-lg>input-group-prepend>input-group-text': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.3rem'
  },
  'input-group-sm>custom-select': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-sm>form-control:not(textarea)': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-sm>custom-select': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'input-group-sm>form-control': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'input-group-sm>input-group-append>btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'input-group-sm>input-group-append>input-group-text': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'input-group-sm>input-group-prepend>btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'input-group-sm>input-group-prepend>input-group-text': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'borderRadius': '.2rem'
  },
  'input-group-lg>custom-select': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1.75 }]
  },
  'input-group-sm>custom-select': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1.75 }]
  },
  'input-group>input-group-append:last-child>btn:not(:last-child):not(dropdown-toggle)': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>input-group-append:last-child>input-group-text:not(:last-child)': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>input-group-append:not(:last-child)>btn': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>input-group-append:not(:last-child)>input-group-text': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>input-group-prepend>btn': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>input-group-prepend>input-group-text': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'input-group>input-group-append>btn': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>input-group-append>input-group-text': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>input-group-prepend:first-child>btn:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>input-group-prepend:first-child>input-group-text:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>input-group-prepend:not(:first-child)>btn': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'input-group>input-group-prepend:not(:first-child)>input-group-text': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0'
  },
  'custom-control': {
    'position': 'relative',
    'display': 'block',
    'minHeight': [{ 'unit': 'rem', 'value': 1.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'custom-control-inline': {
    'display': 'inline-flex',
    'marginRight': [{ 'unit': 'rem', 'value': 1 }]
  },
  'custom-control-input': {
    'position': 'absolute',
    'zIndex': '-1',
    'opacity': '0'
  },
  'custom-control-input:checked~custom-control-label::before': {
    'color': '#fff',
    'borderColor': '#007bff',
    'backgroundColor': '#007bff'
  },
  'custom-control-input:focus~custom-control-label::before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'custom-control-input:focus:not(:checked)~custom-control-label::before': {
    'borderColor': '#80bdff'
  },
  'custom-control-input:not(:disabled):active~custom-control-label::before': {
    'color': '#fff',
    'backgroundColor': '#b3d7ff',
    'borderColor': '#b3d7ff'
  },
  'custom-control-input:disabled~custom-control-label': {
    'color': '#6c757d'
  },
  'custom-control-input:disabled~custom-control-label::before': {
    'backgroundColor': '#e9ecef'
  },
  'custom-control-label': {
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'top'
  },
  'custom-control-label::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.25 }],
    'left': [{ 'unit': 'rem', 'value': -1.5 }],
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'pointerEvents': 'none',
    'content': '""',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#adb5bd' }],
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'custom-control-label::after': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.25 }],
    'left': [{ 'unit': 'rem', 'value': -1.5 }],
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'content': '""',
    'background': '50%/50% 50% no-repeat'
  },
  'custom-checkbox custom-control-label::before': {
    'borderRadius': '.25rem'
  },
  'custom-checkbox custom-control-input:checked~custom-control-label::after': {
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")'
  },
  'custom-checkbox custom-control-input:indeterminate~custom-control-label::before': {
    'borderColor': '#007bff',
    'backgroundColor': '#007bff'
  },
  'custom-checkbox custom-control-input:indeterminate~custom-control-label::after': {
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e")'
  },
  'custom-checkbox custom-control-input:disabled:checked~custom-control-label::before': {
    'backgroundColor': 'rgba(0,123,255,.5)'
  },
  'custom-checkbox custom-control-input:disabled:indeterminate~custom-control-label::before': {
    'backgroundColor': 'rgba(0,123,255,.5)'
  },
  'custom-radio custom-control-label::before': {
    'borderRadius': '50%'
  },
  'custom-radio custom-control-input:checked~custom-control-label::after': {
    'backgroundImage': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")'
  },
  'custom-radio custom-control-input:disabled:checked~custom-control-label::before': {
    'backgroundColor': 'rgba(0,123,255,.5)'
  },
  'custom-switch': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 2.25 }]
  },
  'custom-switch custom-control-label::before': {
    'left': [{ 'unit': 'rem', 'value': -2.25 }],
    'width': [{ 'unit': 'rem', 'value': 1.75 }],
    'pointerEvents': 'all',
    'borderRadius': '.5rem'
  },
  'custom-switch custom-control-label::after': {
    'top': [{ 'unit': 'rem', 'value': NaN }],
    'left': [{ 'unit': 'rem', 'value': NaN }],
    'width': [{ 'unit': 'rem', 'value': NaN }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'backgroundColor': '#adb5bd',
    'borderRadius': '.5rem',
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out',
    'transition': 'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    'transition': 'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out'
  },
  'custom-switch custom-control-input:checked~custom-control-label::after': {
    'backgroundColor': '#fff',
    'WebkitTransform': 'translateX(.75rem)',
    'transform': 'translateX(.75rem)'
  },
  'custom-switch custom-control-input:disabled:checked~custom-control-label::before': {
    'backgroundColor': 'rgba(0,123,255,.5)'
  },
  'custom-select': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 1.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#495057',
    'verticalAlign': 'middle',
    'background': 'url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat #fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderRadius': '.25rem',
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none'
  },
  'custom-select:focus': {
    'borderColor': '#80bdff',
    'outline': '0',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'custom-select:focus::-ms-value': {
    'color': '#495057',
    'backgroundColor': '#fff'
  },
  'custom-select[multiple]': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'backgroundImage': 'none'
  },
  'custom-select[size]:not([size="1"])': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'backgroundImage': 'none'
  },
  'custom-select:disabled': {
    'color': '#6c757d',
    'backgroundColor': '#e9ecef'
  },
  'custom-select::-ms-expand': {
    'display': 'none'
  },
  'custom-select-sm': {
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.25 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.25 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'custom-select-lg': {
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'custom-file': {
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'custom-file-input': {
    'position': 'relative',
    'zIndex': '2',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'custom-file-input:focus~custom-file-label': {
    'borderColor': '#80bdff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'custom-file-input:disabled~custom-file-label': {
    'backgroundColor': '#e9ecef'
  },
  'custom-file-input:lang(en)~custom-file-label::after': {
    'content': '"Browse"'
  },
  'custom-file-input~custom-file-label[data-browse]::after': {
    'content': 'attr(data-browse)'
  },
  'custom-file-label': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1',
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#495057',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ced4da' }],
    'borderRadius': '.25rem'
  },
  'custom-file-label::after': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '3',
    'display': 'block',
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#495057',
    'content': '"Browse"',
    'backgroundColor': '#e9ecef',
    'borderLeft': [{ 'unit': 'string', 'value': 'inherit' }],
    'borderRadius': '0 .25rem .25rem 0'
  },
  'custom-range': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'transparent',
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none'
  },
  'custom-range:focus': {
    'outline': '0'
  },
  'custom-range:focus::-webkit-slider-thumb': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff,0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'custom-range:focus::-moz-range-thumb': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff,0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'custom-range:focus::-ms-thumb': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff,0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'string', 'value': 'rgba(0,123,255,.25)' }]
  },
  'custom-range::-moz-focus-outer': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'custom-range::-webkit-slider-thumb': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'marginTop': [{ 'unit': 'rem', 'value': -0.25 }],
    'backgroundColor': '#007bff',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '1rem',
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    'WebkitAppearance': 'none',
    'appearance': 'none'
  },
  'custom-range::-webkit-slider-thumb:active': {
    'backgroundColor': '#b3d7ff'
  },
  'custom-range::-webkit-slider-runnable-track': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 0.5 }],
    'color': 'transparent',
    'cursor': 'pointer',
    'backgroundColor': '#dee2e6',
    'borderColor': 'transparent',
    'borderRadius': '1rem'
  },
  'custom-range::-moz-range-thumb': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'backgroundColor': '#007bff',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '1rem',
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    'MozAppearance': 'none',
    'appearance': 'none',
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'custom-range::-moz-range-thumb:active': {
    'backgroundColor': '#b3d7ff'
  },
  'custom-range::-moz-range-track': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 0.5 }],
    'color': 'transparent',
    'cursor': 'pointer',
    'backgroundColor': '#dee2e6',
    'borderColor': 'transparent',
    'borderRadius': '1rem'
  },
  'custom-range::-ms-thumb': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.2 }],
    'backgroundColor': '#007bff',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '1rem',
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    'appearance': 'none',
    'prefers-reduced-motionreduc': {
      'transition': 'none'
    }
  },
  'custom-range::-ms-thumb:active': {
    'backgroundColor': '#b3d7ff'
  },
  'custom-range::-ms-track': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 0.5 }],
    'color': 'transparent',
    'cursor': 'pointer',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent',
    'borderWidth': '.5rem'
  },
  'custom-range::-ms-fill-lower': {
    'backgroundColor': '#dee2e6',
    'borderRadius': '1rem'
  },
  'custom-range::-ms-fill-upper': {
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'backgroundColor': '#dee2e6',
    'borderRadius': '1rem'
  },
  'custom-range:disabled::-webkit-slider-thumb': {
    'backgroundColor': '#adb5bd'
  },
  'custom-range:disabled::-webkit-slider-runnable-track': {
    'cursor': 'default'
  },
  'custom-range:disabled::-moz-range-thumb': {
    'backgroundColor': '#adb5bd'
  },
  'custom-range:disabled::-moz-range-track': {
    'cursor': 'default'
  },
  'custom-range:disabled::-ms-thumb': {
    'backgroundColor': '#adb5bd'
  },
  'custom-control-label::before': {
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
  },
  'custom-file-label': {
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
  },
  'custom-select': {
    'transition': 'background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
  },
  'nav': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'nav-link': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }]
  },
  'nav-link:focus': {
    'textDecoration': 'none'
  },
  'nav-link:hover': {
    'textDecoration': 'none'
  },
  'nav-linkdisabled': {
    'color': '#6c757d',
    'pointerEvents': 'none',
    'cursor': 'default'
  },
  'nav-tabs': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'nav-tabs nav-item': {
    'marginBottom': [{ 'unit': 'px', 'value': -1 }]
  },
  'nav-tabs nav-link': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderTopLeftRadius': '.25rem',
    'borderTopRightRadius': '.25rem'
  },
  'nav-tabs nav-link:focus': {
    'borderColor': '#e9ecef #e9ecef #dee2e6'
  },
  'nav-tabs nav-link:hover': {
    'borderColor': '#e9ecef #e9ecef #dee2e6'
  },
  'nav-tabs nav-linkdisabled': {
    'color': '#6c757d',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'nav-tabs nav-itemshow nav-link': {
    'color': '#495057',
    'backgroundColor': '#fff',
    'borderColor': '#dee2e6 #dee2e6 #fff'
  },
  'nav-tabs nav-linkactive': {
    'color': '#495057',
    'backgroundColor': '#fff',
    'borderColor': '#dee2e6 #dee2e6 #fff'
  },
  'nav-tabs dropdown-menu': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'borderTopLeftRadius': '0',
    'borderTopRightRadius': '0'
  },
  'nav-pills nav-link': {
    'borderRadius': '.25rem'
  },
  'nav-pills nav-linkactive': {
    'color': '#fff',
    'backgroundColor': '#007bff'
  },
  'nav-pills show>nav-link': {
    'color': '#fff',
    'backgroundColor': '#007bff'
  },
  'nav-fill nav-item': {
    'flex': '1 1 auto',
    'textAlign': 'center'
  },
  'nav-justified nav-item': {
    'flexBasis': '0',
    'flexGrow': '1',
    'textAlign': 'center'
  },
  'tab-content>tab-pane': {
    'display': 'none'
  },
  'tab-content>active': {
    'display': 'block'
  },
  'navbar': {
    'position': 'relative',
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }]
  },
  'navbar>container': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'center',
    'justifyContent': 'space-between'
  },
  'navbar>container-fluid': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'center',
    'justifyContent': 'space-between'
  },
  'navbar-brand': {
    'display': 'inline-block',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.3125 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.3125 }],
    'marginRight': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'whiteSpace': 'nowrap'
  },
  'navbar-brand:focus': {
    'textDecoration': 'none'
  },
  'navbar-brand:hover': {
    'textDecoration': 'none'
  },
  'navbar-nav': {
    'display': 'flex',
    'flexDirection': 'column',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'navbar-nav nav-link': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-nav dropdown-menu': {
    'position': 'static',
    'float': 'none'
  },
  'navbar-text': {
    'display': 'inline-block',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'navbar-collapse': {
    'flexBasis': '100%',
    'flexGrow': '1',
    'alignItems': 'center'
  },
  'navbar-toggler': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRadius': '.25rem'
  },
  'navbar-toggler:focus': {
    'textDecoration': 'none'
  },
  'navbar-toggler:hover': {
    'textDecoration': 'none'
  },
  'navbar-toggler-icon': {
    'display': 'inline-block',
    'width': [{ 'unit': 'em', 'value': 1.5 }],
    'height': [{ 'unit': 'em', 'value': 1.5 }],
    'verticalAlign': 'middle',
    'content': '""',
    'background': 'center center/100% 100% no-repeat'
  },
  'navbar-expand': {
    'flexFlow': 'row nowrap',
    'justifyContent': 'flex-start'
  },
  'navbar-expand navbar-nav': {
    'flexDirection': 'row'
  },
  'navbar-expand navbar-nav dropdown-menu': {
    'position': 'absolute'
  },
  'navbar-expand navbar-nav nav-link': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'navbar-expand>container': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'flexWrap': 'nowrap'
  },
  'navbar-expand>container-fluid': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'flexWrap': 'nowrap'
  },
  'navbar-expand navbar-collapse': {
    'display': 'flex!important',
    'flexBasis': 'auto'
  },
  'navbar-expand navbar-toggler': {
    'display': 'none'
  },
  'navbar-light navbar-brand': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-brand:focus': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-brand:hover': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-nav nav-link': {
    'color': 'rgba(0,0,0,.5)'
  },
  'navbar-light navbar-nav nav-link:focus': {
    'color': 'rgba(0,0,0,.7)'
  },
  'navbar-light navbar-nav nav-link:hover': {
    'color': 'rgba(0,0,0,.7)'
  },
  'navbar-light navbar-nav nav-linkdisabled': {
    'color': 'rgba(0,0,0,.3)'
  },
  'navbar-light navbar-nav active>nav-link': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-nav nav-linkactive': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-nav nav-linkshow': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-nav show>nav-link': {
    'color': 'rgba(0,0,0,.9)'
  },
  'navbar-light navbar-toggler': {
    'color': 'rgba(0,0,0,.5)',
    'borderColor': 'rgba(0,0,0,.1)'
  },
  'navbar-light navbar-toggler-icon': {
    'backgroundImage': 'url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.card-columns .card{margin-bottom:.75rem}.accordion>.card{overflow:hidden}.accordion>.card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion>.card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion>.card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion>.card .card-header{margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-horizontal{flex-direction:row}.list-group-horizontal .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-sm .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-md .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-lg .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xl .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}.progress-bar-animated{-webkit-animation:none;animation:none}.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:""}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:0s .6s opacity}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right,.carousel-item{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e")}.carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev,.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:""}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:""}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:"";background-color:rgba(0,0,0,0)}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;overflow-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}.mat-badge-content{font-weight:600;font-size:12px}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,"Helvetica Neue",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,"Helvetica Neue",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,"Helvetica Neue",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,"Helvetica Neue",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,"Helvetica Neue",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,"Helvetica Neue",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,"Helvetica Neue",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,"Helvetica Neue",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,"Helvetica Neue",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,"Helvetica Neue",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,"Helvetica Neue",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,"Helvetica Neue",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,"Helvetica Neue",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,"Helvetica Neue",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,"Helvetica Neue",sans-serif}.mat-expansion-panel-header{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,"Helvetica Neue",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,"Helvetica Neue",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,"Helvetica Neue",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item,.mat-list-option{font-family:Roboto,"Helvetica Neue",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:16px;color:rgba(0,0,0,.87)}.mat-optgroup-label{font:500 14px/24px Roboto,"Helvetica Neue",sans-serif;color:rgba(0,0,0,.54)}.mat-simple-snackbar{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-start{}@-webkit-keyframes cdk-text-field-autofill-end{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled),.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}.mat-checkbox-disabled{opacity:.5}}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{color:#fff;background:#673ab7;position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#673ab7}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ffd740}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff;background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87);background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff;background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26);background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none;border:1px solid rgba(0,0,0,.12)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:1px solid rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:1px solid rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:1px solid rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#673ab7}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#ffd740}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(0,0,0,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label,.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#673ab7}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ffd740}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after,.mat-form-field.mat-form-field-invalid .mat-form-field-label,.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label,.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em;background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{font-family:Roboto,"Helvetica Neue",sans-serif;font-size:14px;font-weight:500;color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#673ab7}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ffd740}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow,.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:1px solid rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end,[dir=rtl] .mat-drawer-side{border-left:1px solid rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:1px solid rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ffd740}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,215,64,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ffd740}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(103,58,183,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#673ab7}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill,.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{font-family:Roboto,"Helvetica Neue",sans-serif;background:#fff}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px;color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ffd740}.toast-center-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.toast-top-center{top:0;right:0;width:100%}.toast-bottom-center{bottom:0;right:0;width:100%}.toast-top-full-width{top:0;right:0;width:100%}.toast-bottom-full-width{bottom:0;right:0;width:100%}.toast-top-left{top:12px;left:12px}.toast-top-right{top:12px;right:12px}.toast-bottom-right{right:12px;bottom:12px}.toast-bottom-left{bottom:12px;left:12px}.toast-title{font-weight:700}.toast-message{word-wrap:break-word}.toast-message a,.toast-message label{color:#fff}.toast-message a:hover{color:#ccc;text-decoration:none}.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#fff;text-shadow:0 1px 0 #fff}.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0}.toast-container{pointer-events:none;position:fixed;z-index:999999}.toast-container *{box-sizing:border-box}.toast-container .ngx-toastr{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;background-size:24px;box-shadow:0 0 12px #999;color:#fff}.toast-container .ngx-toastr:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.toast-info{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E")}.toast-error{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E")}.toast-success{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E")}.toast-container.toast-bottom-center .ngx-toastr,.toast-container.toast-top-center .ngx-toastr{width:300px;margin-left:auto;margin-right:auto}.toast-container.toast-bottom-full-width .ngx-toastr,.toast-container.toast-top-full-width .ngx-toastr{width:96%;margin-left:auto;margin-right:auto}.ngx-toastr{background-color:#030303;pointer-events:auto}.toast-success{background-color:#51a351}.toast-error{background-color:#bd362f}.toast-info{background-color:#2f96b4}.toast-warning{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E");background-color:#f89406}.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){.toast-container .ngx-toastr.div{padding:8px 8px 8px 50px;width:11em}.toast-container .toast-close-button{right:-.2em;top:-.2em}}@media all and (min-width:241px) and (max-width:480px){.toast-container .ngx-toastr.div{padding:8px 8px 8px 50px;width:18em}.toast-container .toast-close-button{right:-.2em;top:-.2em}}@media all and (min-width:481px) and (max-width:768px){.toast-container .ngx-toastr.div{padding:15px 15px 15px 50px;width:25em}}@font-face{font-family:IRANSansBold;font-style:normal;font-weight:700;src:url('IRANSansWeb(FaNum)_Bold.a97ff63f432049ada562.eot');src:url('IRANSansWeb(FaNum)_Bold.a97ff63f432049ada562.eot?#iefix') format('embedded-opentype'),url('IRANSansWeb(FaNum)_Bold.3589a3ce688ae8bb4844.woff2') format('woff2'),url('IRANSansWeb(FaNum)_Bold.e836ee3ec82a8794c92c.woff') format('woff'),url('IRANSansWeb(FaNum)_Bold.8f812ea61c00dbbd6322.ttf') format('truetype')}@font-face{font-family:IRANSansMedium;font-style:normal;font-weight:500;src:url('IRANSansWeb(FaNum)_Medium.7bae6b3eb09606070e44.eot');src:url('IRANSansWeb(FaNum)_Medium.7bae6b3eb09606070e44.eot?#iefix') format('embedded-opentype'),url('IRANSansWeb(FaNum)_Medium.e537579c2de61c03c1fe.woff2') format('woff2'),url('IRANSansWeb(FaNum)_Medium.eff85aebf1c79d1ccc33.woff') format('woff'),url('IRANSansWeb(FaNum)_Medium.48ea858314dc430c1795.ttf') format('truetype')}@font-face{font-family:IRANSansLight;font-style:normal;font-weight:300;src:url('IRANSansWeb(FaNum)_Light.368618b75bce7491df78.eot');src:url('IRANSansWeb(FaNum)_Light.368618b75bce7491df78.eot?#iefix') format('embedded-opentype'),url('IRANSansWeb(FaNum)_Light.c0efd1108540ff4bfe02.woff2') format('woff2'),url('IRANSansWeb(FaNum)_Light.1affe2af4bb70abb3572.woff') format('woff'),url('IRANSansWeb(FaNum)_Light.d7db9d342d2c3e35d74e.ttf') format('truetype')}@font-face{font-family:IRANSansUltraLight;font-style:normal;font-weight:200;src:url('IRANSansWeb(FaNum)_UltraLight.f2c32605bdf09d45da53.eot');src:url('IRANSansWeb(FaNum)_UltraLight.f2c32605bdf09d45da53.eot?#iefix') format('embedded-opentype'),url('IRANSansWeb(FaNum)_UltraLight.f4aa344c5358e278486b.woff2') format('woff2'),url('IRANSansWeb(FaNum)_UltraLight.68f68e336b3f4cc86ba1.woff') format('woff'),url('IRANSansWeb(FaNum)_UltraLight.7f61560320d2a87556ce.ttf') format('truetype')}@font-face{font-family:IRANSans;font-style:normal;font-weight:400;src:url('IRANSansWeb(FaNum).5d86e75ed549612bd403.eot');src:url('IRANSansWeb(FaNum).5d86e75ed549612bd403.eot?#iefix') format('embedded-opentype'),url('IRANSansWeb(FaNum).e8ef20357ee97e45a8d9.woff2') format('woff2'),url('IRANSansWeb(FaNum).a1233cc118c5257c1add.woff') format('woff'),url('IRANSansWeb(FaNum).bab5e043e4fc4bcce516.ttf') format('truetype')}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(flUhRq6tzZclQEJ-Vdg-IuiaDsNc.d7e60f9d1433a45ed718.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga'',
    'WebkitFontSmoothing': 'antialiased'
  },
  '*': {
    'fontFamily': 'IRANSansMedium',
    'textAlign': 'right'
  },
  'mat-badge-content': {
    'fontFamily': 'IRANSansMedium'
  },
  'sectioncontainer-fluidfull': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nav': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#bdbdbd'
  },
  'nav nav nav-item nav-link': {
    'paddingRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'anav-link': {
    'color': '#3f3f3f'
  },
  'a:hover': {
    'textDecoration': 'underline',
    'color': '#400'
  },
  'active': {
    'background': '#fff'
  },
  'active anav-link': {
    'color': '#000'
  },
  'rowfull': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'rowfull col-lg-2col-md-3': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tablemat-table': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'trmat-footer-row': {
    'textAlign': 'right'
  },
  'trmat-row': {
    'textAlign': 'right'
  },
  'modal-header close': {
    'margin': [{ 'unit': 'rem', 'value': -1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': -1 }, { 'unit': 'px', 'value': 0 }]
  },
  'mat-form-field': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'centered *': {
    'textAlign': 'center!important'
  },
  'cdk-overlay-container': {
    'zIndex': '1060'
  },
  'number': {
    'textAlign': 'left!important',
    'direction': 'ltr!important'
  },
  'input[type=number]': {
    'textAlign': 'left!important',
    'direction': 'ltr!important'
  },
  'input[type=tel]': {
    'textAlign': 'left!important',
    'direction': 'ltr!important'
  },
  'full-width': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'mat-paginator-container': {
    'justifyContent': 'flex-start!important'
  },
  'example-container': {
    'position': 'relative',
    'minHeight': [{ 'unit': 'px', 'value': 200 }]
  },
  'example-table-container': {
    'position': 'relative',
    'maxHeight': [{ 'unit': 'px', 'value': 400 }],
    'overflow': 'auto'
  },
  'example-loading-shade': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 56 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0,0,0,.15)',
    'zIndex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
  },
  'example-rate-limit-reached': {
    'color': '#980000',
    'maxWidth': [{ 'unit': 'px', 'value': 360 }],
    'textAlign': 'center'
  },
  'mat-column-number': {
    'maxWidth': [{ 'unit': 'px', 'value': 64 }]
  },
  'mat-column-state': {
    'maxWidth': [{ 'unit': 'px', 'value': 64 }]
  },
  'mat-column-created': {
    'maxWidth': [{ 'unit': 'px', 'value': 124 }]
  },
  'main-logo': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'url(/assets/images/Slice.svg) center center/100% no-repeat'
  },
  'app-loading logo': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'background': 'url(/assets/images/Slice.svg) center center/100px no-repeat'
  },
  'json': {
    'textAlign': 'left',
    'direction': 'ltr'
  },
  '[dir=rtl] mat-badge-mediummat-badge-overlapmat-badge-after mat-badge-content': {
    'left': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  'inline': {
    'display': 'inline-block'
  },
  'mat-form-field-appearance-outline mat-form-field-prefix': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'mat-form-field-appearance-outline mat-form-field-suffix': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'mat-form-field-appearance-outline mat-form-field-suffix': {
    'right': [{ 'unit': 'px', 'value': 5 }]
  },
  'mat-form-field-appearance-outline mat-form-field-prefix': {
    'left': [{ 'unit': 'px', 'value': 5 }]
  }
});
