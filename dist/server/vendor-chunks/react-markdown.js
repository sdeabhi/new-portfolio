"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-markdown";
exports.ids = ["vendor-chunks/react-markdown"];
exports.modules = {

/***/ "(rsc)/./node_modules/react-markdown/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-markdown/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Markdown: () => (/* binding */ Markdown),\n/* harmony export */   defaultUrlTransform: () => (/* binding */ defaultUrlTransform)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hast-util-to-jsx-runtime */ \"(rsc)/./node_modules/hast-util-to-jsx-runtime/lib/index.js\");\n/* harmony import */ var html_url_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-url-attributes */ \"(rsc)/./node_modules/html-url-attributes/lib/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ \"(rsc)/./node_modules/remark-parse/lib/index.js\");\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-rehype */ \"(rsc)/./node_modules/remark-rehype/lib/index.js\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ \"(rsc)/./node_modules/unified/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile */ \"(rsc)/./node_modules/vfile/lib/index.js\");\n// Register `Raw` in tree:\n/// <reference types=\"mdast-util-to-hast\" />\n\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').ElementContent} ElementContent\n * @typedef {import('hast').Nodes} Nodes\n * @typedef {import('hast').Parents} Parents\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-to-jsx-runtime').Components} JsxRuntimeComponents\n * @typedef {import('remark-rehype').Options} RemarkRehypeOptions\n * @typedef {import('unist-util-visit').BuildVisitor<Root>} Visitor\n * @typedef {import('unified').PluggableList} PluggableList\n */\n\n/**\n * @callback AllowElement\n *   Filter elements.\n * @param {Readonly<Element>} element\n *   Element to check.\n * @param {number} index\n *   Index of `element` in `parent`.\n * @param {Readonly<Parents> | undefined} parent\n *   Parent of `element`.\n * @returns {boolean | null | undefined}\n *   Whether to allow `element` (default: `false`).\n *\n * @typedef {Partial<JsxRuntimeComponents>} Components\n *   Map tag names to components.\n *\n * @typedef Deprecation\n *   Deprecation.\n * @property {string} from\n *   Old field.\n * @property {string} id\n *   ID in readme.\n * @property {keyof Options} [to]\n *   New field.\n *\n * @typedef Options\n *   Configuration.\n * @property {AllowElement | null | undefined} [allowElement]\n *   Filter elements (optional);\n *   `allowedElements` / `disallowedElements` is used first.\n * @property {ReadonlyArray<string> | null | undefined} [allowedElements]\n *   Tag names to allow (default: all tag names);\n *   cannot combine w/ `disallowedElements`.\n * @property {string | null | undefined} [children]\n *   Markdown.\n * @property {string | null | undefined} [className]\n *   Wrap in a `div` with this class name.\n * @property {Components | null | undefined} [components]\n *   Map tag names to components.\n * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]\n *   Tag names to disallow (default: `[]`);\n *   cannot combine w/ `allowedElements`.\n * @property {PluggableList | null | undefined} [rehypePlugins]\n *   List of rehype plugins to use.\n * @property {PluggableList | null | undefined} [remarkPlugins]\n *   List of remark plugins to use.\n * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]\n *   Options to pass through to `remark-rehype`.\n * @property {boolean | null | undefined} [skipHtml=false]\n *   Ignore HTML in markdown completely (default: `false`).\n * @property {boolean | null | undefined} [unwrapDisallowed=false]\n *   Extract (unwrap) what’s in disallowed elements (default: `false`);\n *   normally when say `strong` is not allowed, it and it’s children are dropped,\n *   with `unwrapDisallowed` the element itself is replaced by its children.\n * @property {UrlTransform | null | undefined} [urlTransform]\n *   Change URLs (default: `defaultUrlTransform`)\n *\n * @callback UrlTransform\n *   Transform all URLs.\n * @param {string} url\n *   URL.\n * @param {string} key\n *   Property name (example: `'href'`).\n * @param {Readonly<Element>} node\n *   Node.\n * @returns {string | null | undefined}\n *   Transformed URL (optional).\n */\n\n\n\n\n// @ts-expect-error: untyped.\n\n\n\n\n\n\n\nconst changelog =\n  'https://github.com/remarkjs/react-markdown/blob/main/changelog.md'\n\n/** @type {PluggableList} */\nconst emptyPlugins = []\n/** @type {Readonly<RemarkRehypeOptions>} */\nconst emptyRemarkRehypeOptions = {allowDangerousHtml: true}\nconst safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i\n\n// Mutable because we `delete` any time it’s used and a message is sent.\n/** @type {ReadonlyArray<Readonly<Deprecation>>} */\nconst deprecations = [\n  {from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser'},\n  {from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser'},\n  {\n    from: 'allowNode',\n    id: 'replace-allownode-allowedtypes-and-disallowedtypes',\n    to: 'allowElement'\n  },\n  {\n    from: 'allowedTypes',\n    id: 'replace-allownode-allowedtypes-and-disallowedtypes',\n    to: 'allowedElements'\n  },\n  {\n    from: 'disallowedTypes',\n    id: 'replace-allownode-allowedtypes-and-disallowedtypes',\n    to: 'disallowedElements'\n  },\n  {from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser'},\n  {from: 'includeElementIndex', id: '#remove-includeelementindex'},\n  {\n    from: 'includeNodeIndex',\n    id: 'change-includenodeindex-to-includeelementindex'\n  },\n  {from: 'linkTarget', id: 'remove-linktarget'},\n  {from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins'},\n  {from: 'rawSourcePos', id: '#remove-rawsourcepos'},\n  {from: 'renderers', id: 'change-renderers-to-components', to: 'components'},\n  {from: 'source', id: 'change-source-to-children', to: 'children'},\n  {from: 'sourcePos', id: '#remove-sourcepos'},\n  {from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform'},\n  {from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform'}\n]\n\n/**\n * Component to render markdown.\n *\n * @param {Readonly<Options>} options\n *   Props.\n * @returns {JSX.Element}\n *   React element.\n */\nfunction Markdown(options) {\n  const allowedElements = options.allowedElements\n  const allowElement = options.allowElement\n  const children = options.children || ''\n  const className = options.className\n  const components = options.components\n  const disallowedElements = options.disallowedElements\n  const rehypePlugins = options.rehypePlugins || emptyPlugins\n  const remarkPlugins = options.remarkPlugins || emptyPlugins\n  const remarkRehypeOptions = options.remarkRehypeOptions\n    ? {...options.remarkRehypeOptions, ...emptyRemarkRehypeOptions}\n    : emptyRemarkRehypeOptions\n  const skipHtml = options.skipHtml\n  const unwrapDisallowed = options.unwrapDisallowed\n  const urlTransform = options.urlTransform || defaultUrlTransform\n\n  const processor = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)()\n    .use(remark_parse__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    .use(remarkPlugins)\n    .use(remark_rehype__WEBPACK_IMPORTED_MODULE_3__[\"default\"], remarkRehypeOptions)\n    .use(rehypePlugins)\n\n  const file = new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile()\n\n  if (typeof children === 'string') {\n    file.value = children\n  } else {\n    (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\n      'Unexpected value `' +\n        children +\n        '` for `children` prop, expected `string`'\n    )\n  }\n\n  if (allowedElements && disallowedElements) {\n    (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\n      'Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other'\n    )\n  }\n\n  for (const deprecation of deprecations) {\n    if (Object.hasOwn(options, deprecation.from)) {\n      (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\n        'Unexpected `' +\n          deprecation.from +\n          '` prop, ' +\n          (deprecation.to\n            ? 'use `' + deprecation.to + '` instead'\n            : 'remove it') +\n          ' (see <' +\n          changelog +\n          '#' +\n          deprecation.id +\n          '> for more info)'\n      )\n    }\n  }\n\n  const mdastTree = processor.parse(file)\n  /** @type {Nodes} */\n  let hastTree = processor.runSync(mdastTree, file)\n\n  // Wrap in `div` if there’s a class name.\n  if (className) {\n    hastTree = {\n      type: 'element',\n      tagName: 'div',\n      properties: {className},\n      // Assume no doctypes.\n      children: /** @type {Array<ElementContent>} */ (\n        hastTree.type === 'root' ? hastTree.children : [hastTree]\n      )\n    }\n  }\n\n  (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_6__.visit)(hastTree, transform)\n\n  return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.toJsxRuntime)(hastTree, {\n    Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n    components,\n    ignoreInvalidStyle: true,\n    jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,\n    jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,\n    passKeys: true,\n    passNode: true\n  })\n\n  /** @type {Visitor} */\n  function transform(node, index, parent) {\n    if (node.type === 'raw' && parent && typeof index === 'number') {\n      if (skipHtml) {\n        parent.children.splice(index, 1)\n      } else {\n        parent.children[index] = {type: 'text', value: node.value}\n      }\n\n      return index\n    }\n\n    if (node.type === 'element') {\n      /** @type {string} */\n      let key\n\n      for (key in html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes) {\n        if (\n          Object.hasOwn(html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes, key) &&\n          Object.hasOwn(node.properties, key)\n        ) {\n          const value = node.properties[key]\n          const test = html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes[key]\n          if (test === null || test.includes(node.tagName)) {\n            node.properties[key] = urlTransform(String(value || ''), key, node)\n          }\n        }\n      }\n    }\n\n    if (node.type === 'element') {\n      let remove = allowedElements\n        ? !allowedElements.includes(node.tagName)\n        : disallowedElements\n        ? disallowedElements.includes(node.tagName)\n        : false\n\n      if (!remove && allowElement && typeof index === 'number') {\n        remove = !allowElement(node, index, parent)\n      }\n\n      if (remove && parent && typeof index === 'number') {\n        if (unwrapDisallowed && node.children) {\n          parent.children.splice(index, 1, ...node.children)\n        } else {\n          parent.children.splice(index, 1)\n        }\n\n        return index\n      }\n    }\n  }\n}\n\n/**\n * Make a URL safe.\n *\n * @satisfies {UrlTransform}\n * @param {string} value\n *   URL.\n * @returns {string}\n *   Safe URL.\n */\nfunction defaultUrlTransform(value) {\n  // Same as:\n  // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>\n  // But without the `encode` part.\n  const colon = value.indexOf(':')\n  const questionMark = value.indexOf('?')\n  const numberSign = value.indexOf('#')\n  const slash = value.indexOf('/')\n\n  if (\n    // If there is no protocol, it’s relative.\n    colon < 0 ||\n    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    (slash > -1 && colon > slash) ||\n    (questionMark > -1 && colon > questionMark) ||\n    (numberSign > -1 && colon > numberSign) ||\n    // It is a protocol, it should be allowed.\n    safeProtocol.test(value.slice(0, colon))\n  ) {\n    return value\n  }\n\n  return ''\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsK0JBQStCO0FBQzVDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsK0NBQStDO0FBQzVELGFBQWEsaUNBQWlDO0FBQzlDLGFBQWEsK0NBQStDO0FBQzVELGFBQWEsaUNBQWlDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsK0JBQStCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpQ0FBaUM7QUFDL0M7QUFDQTtBQUNBLGNBQWMsMENBQTBDO0FBQ3hEO0FBQ0E7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBLGNBQWMsMkJBQTJCO0FBQ3pDO0FBQ0EsY0FBYywrQkFBK0I7QUFDN0M7QUFDQSxjQUFjLDBDQUEwQztBQUN4RDtBQUNBO0FBQ0EsY0FBYyxrQ0FBa0M7QUFDaEQ7QUFDQSxjQUFjLGtDQUFrQztBQUNoRDtBQUNBLGNBQWMsa0RBQWtEO0FBQ2hFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxjQUFjLGlDQUFpQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRWtDO0FBQ21CO0FBQ0o7QUFDakQ7QUFDcUQ7QUFDZjtBQUNFO0FBQ1Q7QUFDTztBQUNYOztBQUUzQjtBQUNBOztBQUVBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLFdBQVcsK0JBQStCO0FBQzFDLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLFdBQVcsc0NBQXNDO0FBQ2pEO0FBQ0EsR0FBRywrREFBK0Q7QUFDbEUsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsR0FBRywrREFBK0Q7QUFDbEUsR0FBRywrREFBK0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUcsNENBQTRDO0FBQy9DLEdBQUcsNEVBQTRFO0FBQy9FLEdBQUcsaURBQWlEO0FBQ3BELEdBQUcsMEVBQTBFO0FBQzdFLEdBQUcsZ0VBQWdFO0FBQ25FLEdBQUcsMkNBQTJDO0FBQzlDLEdBQUcsdUVBQXVFO0FBQzFFLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdEQUFPO0FBQzNCLFNBQVMsb0RBQVc7QUFDcEI7QUFDQSxTQUFTLHFEQUFZO0FBQ3JCOztBQUVBLG1CQUFtQix3Q0FBSzs7QUFFeEI7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLG1EQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sbURBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsdURBQUs7O0FBRVAsU0FBUyxzRUFBWTtBQUNyQixZQUFZO0FBQ1o7QUFDQTtBQUNBLE9BQU87QUFDUCxRQUFRO0FBQ1I7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7O0FBRUEsa0JBQWtCLDhEQUFhO0FBQy9CO0FBQ0Esd0JBQXdCLDhEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvaW5kZXguanM/M2NkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWdpc3RlciBgUmF3YCBpbiB0cmVlOlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJtZGFzdC11dGlsLXRvLWhhc3RcIiAvPlxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudENvbnRlbnR9IEVsZW1lbnRDb250ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuTm9kZXN9IE5vZGVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUGFyZW50c30gUGFyZW50c1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC10by1qc3gtcnVudGltZScpLkNvbXBvbmVudHN9IEpzeFJ1bnRpbWVDb21wb25lbnRzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdyZW1hcmstcmVoeXBlJykuT3B0aW9uc30gUmVtYXJrUmVoeXBlT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdCcpLkJ1aWxkVmlzaXRvcjxSb290Pn0gVmlzaXRvclxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pZmllZCcpLlBsdWdnYWJsZUxpc3R9IFBsdWdnYWJsZUxpc3RcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBbGxvd0VsZW1lbnRcbiAqICAgRmlsdGVyIGVsZW1lbnRzLlxuICogQHBhcmFtIHtSZWFkb25seTxFbGVtZW50Pn0gZWxlbWVudFxuICogICBFbGVtZW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiAgIEluZGV4IG9mIGBlbGVtZW50YCBpbiBgcGFyZW50YC5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8UGFyZW50cz4gfCB1bmRlZmluZWR9IHBhcmVudFxuICogICBQYXJlbnQgb2YgYGVsZW1lbnRgLlxuICogQHJldHVybnMge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfVxuICogICBXaGV0aGVyIHRvIGFsbG93IGBlbGVtZW50YCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKlxuICogQHR5cGVkZWYge1BhcnRpYWw8SnN4UnVudGltZUNvbXBvbmVudHM+fSBDb21wb25lbnRzXG4gKiAgIE1hcCB0YWcgbmFtZXMgdG8gY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBEZXByZWNhdGlvblxuICogICBEZXByZWNhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmcm9tXG4gKiAgIE9sZCBmaWVsZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZFxuICogICBJRCBpbiByZWFkbWUuXG4gKiBAcHJvcGVydHkge2tleW9mIE9wdGlvbnN9IFt0b11cbiAqICAgTmV3IGZpZWxkLlxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7QWxsb3dFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FsbG93RWxlbWVudF1cbiAqICAgRmlsdGVyIGVsZW1lbnRzIChvcHRpb25hbCk7XG4gKiAgIGBhbGxvd2VkRWxlbWVudHNgIC8gYGRpc2FsbG93ZWRFbGVtZW50c2AgaXMgdXNlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHlBcnJheTxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FsbG93ZWRFbGVtZW50c11cbiAqICAgVGFnIG5hbWVzIHRvIGFsbG93IChkZWZhdWx0OiBhbGwgdGFnIG5hbWVzKTtcbiAqICAgY2Fubm90IGNvbWJpbmUgdy8gYGRpc2FsbG93ZWRFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgTWFya2Rvd24uXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtjbGFzc05hbWVdXG4gKiAgIFdyYXAgaW4gYSBgZGl2YCB3aXRoIHRoaXMgY2xhc3MgbmFtZS5cbiAqIEBwcm9wZXJ0eSB7Q29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBNYXAgdGFnIG5hbWVzIHRvIGNvbXBvbmVudHMuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhbGxvd2VkRWxlbWVudHNdXG4gKiAgIFRhZyBuYW1lcyB0byBkaXNhbGxvdyAoZGVmYXVsdDogYFtdYCk7XG4gKiAgIGNhbm5vdCBjb21iaW5lIHcvIGBhbGxvd2VkRWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtQbHVnZ2FibGVMaXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlaHlwZVBsdWdpbnNdXG4gKiAgIExpc3Qgb2YgcmVoeXBlIHBsdWdpbnMgdG8gdXNlLlxuICogQHByb3BlcnR5IHtQbHVnZ2FibGVMaXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlbWFya1BsdWdpbnNdXG4gKiAgIExpc3Qgb2YgcmVtYXJrIHBsdWdpbnMgdG8gdXNlLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxSZW1hcmtSZWh5cGVPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZW1hcmtSZWh5cGVPcHRpb25zXVxuICogICBPcHRpb25zIHRvIHBhc3MgdGhyb3VnaCB0byBgcmVtYXJrLXJlaHlwZWAuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbc2tpcEh0bWw9ZmFsc2VdXG4gKiAgIElnbm9yZSBIVE1MIGluIG1hcmtkb3duIGNvbXBsZXRlbHkgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Vud3JhcERpc2FsbG93ZWQ9ZmFsc2VdXG4gKiAgIEV4dHJhY3QgKHVud3JhcCkgd2hhdOKAmXMgaW4gZGlzYWxsb3dlZCBlbGVtZW50cyAoZGVmYXVsdDogYGZhbHNlYCk7XG4gKiAgIG5vcm1hbGx5IHdoZW4gc2F5IGBzdHJvbmdgIGlzIG5vdCBhbGxvd2VkLCBpdCBhbmQgaXTigJlzIGNoaWxkcmVuIGFyZSBkcm9wcGVkLFxuICogICB3aXRoIGB1bndyYXBEaXNhbGxvd2VkYCB0aGUgZWxlbWVudCBpdHNlbGYgaXMgcmVwbGFjZWQgYnkgaXRzIGNoaWxkcmVuLlxuICogQHByb3BlcnR5IHtVcmxUcmFuc2Zvcm0gfCBudWxsIHwgdW5kZWZpbmVkfSBbdXJsVHJhbnNmb3JtXVxuICogICBDaGFuZ2UgVVJMcyAoZGVmYXVsdDogYGRlZmF1bHRVcmxUcmFuc2Zvcm1gKVxuICpcbiAqIEBjYWxsYmFjayBVcmxUcmFuc2Zvcm1cbiAqICAgVHJhbnNmb3JtIGFsbCBVUkxzLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogICBVUkwuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiAgIFByb3BlcnR5IG5hbWUgKGV4YW1wbGU6IGAnaHJlZidgKS5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudD59IG5vZGVcbiAqICAgTm9kZS5cbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfVxuICogICBUcmFuc2Zvcm1lZCBVUkwgKG9wdGlvbmFsKS5cbiAqL1xuXG5pbXBvcnQge3VucmVhY2hhYmxlfSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge3RvSnN4UnVudGltZX0gZnJvbSAnaGFzdC11dGlsLXRvLWpzeC1ydW50aW1lJ1xuaW1wb3J0IHt1cmxBdHRyaWJ1dGVzfSBmcm9tICdodG1sLXVybC1hdHRyaWJ1dGVzJ1xuLy8gQHRzLWV4cGVjdC1lcnJvcjogdW50eXBlZC5cbmltcG9ydCB7RnJhZ21lbnQsIGpzeCwganN4c30gZnJvbSAncmVhY3QvanN4LXJ1bnRpbWUnXG5pbXBvcnQgcmVtYXJrUGFyc2UgZnJvbSAncmVtYXJrLXBhcnNlJ1xuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tICdyZW1hcmstcmVoeXBlJ1xuaW1wb3J0IHt1bmlmaWVkfSBmcm9tICd1bmlmaWVkJ1xuaW1wb3J0IHt2aXNpdH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcbmltcG9ydCB7VkZpbGV9IGZyb20gJ3ZmaWxlJ1xuXG5jb25zdCBjaGFuZ2Vsb2cgPVxuICAnaHR0cHM6Ly9naXRodWIuY29tL3JlbWFya2pzL3JlYWN0LW1hcmtkb3duL2Jsb2IvbWFpbi9jaGFuZ2Vsb2cubWQnXG5cbi8qKiBAdHlwZSB7UGx1Z2dhYmxlTGlzdH0gKi9cbmNvbnN0IGVtcHR5UGx1Z2lucyA9IFtdXG4vKiogQHR5cGUge1JlYWRvbmx5PFJlbWFya1JlaHlwZU9wdGlvbnM+fSAqL1xuY29uc3QgZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zID0ge2FsbG93RGFuZ2Vyb3VzSHRtbDogdHJ1ZX1cbmNvbnN0IHNhZmVQcm90b2NvbCA9IC9eKGh0dHBzP3xpcmNzP3xtYWlsdG98eG1wcCkkL2lcblxuLy8gTXV0YWJsZSBiZWNhdXNlIHdlIGBkZWxldGVgIGFueSB0aW1lIGl04oCZcyB1c2VkIGFuZCBhIG1lc3NhZ2UgaXMgc2VudC5cbi8qKiBAdHlwZSB7UmVhZG9ubHlBcnJheTxSZWFkb25seTxEZXByZWNhdGlvbj4+fSAqL1xuY29uc3QgZGVwcmVjYXRpb25zID0gW1xuICB7ZnJvbTogJ2FzdFBsdWdpbnMnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7ZnJvbTogJ2FsbG93RGFuZ2Vyb3VzSHRtbCcsIGlkOiAncmVtb3ZlLWJ1Z2d5LWh0bWwtaW4tbWFya2Rvd24tcGFyc2VyJ30sXG4gIHtcbiAgICBmcm9tOiAnYWxsb3dOb2RlJyxcbiAgICBpZDogJ3JlcGxhY2UtYWxsb3dub2RlLWFsbG93ZWR0eXBlcy1hbmQtZGlzYWxsb3dlZHR5cGVzJyxcbiAgICB0bzogJ2FsbG93RWxlbWVudCdcbiAgfSxcbiAge1xuICAgIGZyb206ICdhbGxvd2VkVHlwZXMnLFxuICAgIGlkOiAncmVwbGFjZS1hbGxvd25vZGUtYWxsb3dlZHR5cGVzLWFuZC1kaXNhbGxvd2VkdHlwZXMnLFxuICAgIHRvOiAnYWxsb3dlZEVsZW1lbnRzJ1xuICB9LFxuICB7XG4gICAgZnJvbTogJ2Rpc2FsbG93ZWRUeXBlcycsXG4gICAgaWQ6ICdyZXBsYWNlLWFsbG93bm9kZS1hbGxvd2VkdHlwZXMtYW5kLWRpc2FsbG93ZWR0eXBlcycsXG4gICAgdG86ICdkaXNhbGxvd2VkRWxlbWVudHMnXG4gIH0sXG4gIHtmcm9tOiAnZXNjYXBlSHRtbCcsIGlkOiAncmVtb3ZlLWJ1Z2d5LWh0bWwtaW4tbWFya2Rvd24tcGFyc2VyJ30sXG4gIHtmcm9tOiAnaW5jbHVkZUVsZW1lbnRJbmRleCcsIGlkOiAnI3JlbW92ZS1pbmNsdWRlZWxlbWVudGluZGV4J30sXG4gIHtcbiAgICBmcm9tOiAnaW5jbHVkZU5vZGVJbmRleCcsXG4gICAgaWQ6ICdjaGFuZ2UtaW5jbHVkZW5vZGVpbmRleC10by1pbmNsdWRlZWxlbWVudGluZGV4J1xuICB9LFxuICB7ZnJvbTogJ2xpbmtUYXJnZXQnLCBpZDogJ3JlbW92ZS1saW5rdGFyZ2V0J30sXG4gIHtmcm9tOiAncGx1Z2lucycsIGlkOiAnY2hhbmdlLXBsdWdpbnMtdG8tcmVtYXJrcGx1Z2lucycsIHRvOiAncmVtYXJrUGx1Z2lucyd9LFxuICB7ZnJvbTogJ3Jhd1NvdXJjZVBvcycsIGlkOiAnI3JlbW92ZS1yYXdzb3VyY2Vwb3MnfSxcbiAge2Zyb206ICdyZW5kZXJlcnMnLCBpZDogJ2NoYW5nZS1yZW5kZXJlcnMtdG8tY29tcG9uZW50cycsIHRvOiAnY29tcG9uZW50cyd9LFxuICB7ZnJvbTogJ3NvdXJjZScsIGlkOiAnY2hhbmdlLXNvdXJjZS10by1jaGlsZHJlbicsIHRvOiAnY2hpbGRyZW4nfSxcbiAge2Zyb206ICdzb3VyY2VQb3MnLCBpZDogJyNyZW1vdmUtc291cmNlcG9zJ30sXG4gIHtmcm9tOiAndHJhbnNmb3JtSW1hZ2VVcmknLCBpZDogJyNhZGQtdXJsdHJhbnNmb3JtJywgdG86ICd1cmxUcmFuc2Zvcm0nfSxcbiAge2Zyb206ICd0cmFuc2Zvcm1MaW5rVXJpJywgaWQ6ICcjYWRkLXVybHRyYW5zZm9ybScsIHRvOiAndXJsVHJhbnNmb3JtJ31cbl1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gcmVuZGVyIG1hcmtkb3duLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8T3B0aW9ucz59IG9wdGlvbnNcbiAqICAgUHJvcHMuXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XG4gKiAgIFJlYWN0IGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNYXJrZG93bihvcHRpb25zKSB7XG4gIGNvbnN0IGFsbG93ZWRFbGVtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEVsZW1lbnRzXG4gIGNvbnN0IGFsbG93RWxlbWVudCA9IG9wdGlvbnMuYWxsb3dFbGVtZW50XG4gIGNvbnN0IGNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCAnJ1xuICBjb25zdCBjbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZVxuICBjb25zdCBjb21wb25lbnRzID0gb3B0aW9ucy5jb21wb25lbnRzXG4gIGNvbnN0IGRpc2FsbG93ZWRFbGVtZW50cyA9IG9wdGlvbnMuZGlzYWxsb3dlZEVsZW1lbnRzXG4gIGNvbnN0IHJlaHlwZVBsdWdpbnMgPSBvcHRpb25zLnJlaHlwZVBsdWdpbnMgfHwgZW1wdHlQbHVnaW5zXG4gIGNvbnN0IHJlbWFya1BsdWdpbnMgPSBvcHRpb25zLnJlbWFya1BsdWdpbnMgfHwgZW1wdHlQbHVnaW5zXG4gIGNvbnN0IHJlbWFya1JlaHlwZU9wdGlvbnMgPSBvcHRpb25zLnJlbWFya1JlaHlwZU9wdGlvbnNcbiAgICA/IHsuLi5vcHRpb25zLnJlbWFya1JlaHlwZU9wdGlvbnMsIC4uLmVtcHR5UmVtYXJrUmVoeXBlT3B0aW9uc31cbiAgICA6IGVtcHR5UmVtYXJrUmVoeXBlT3B0aW9uc1xuICBjb25zdCBza2lwSHRtbCA9IG9wdGlvbnMuc2tpcEh0bWxcbiAgY29uc3QgdW53cmFwRGlzYWxsb3dlZCA9IG9wdGlvbnMudW53cmFwRGlzYWxsb3dlZFxuICBjb25zdCB1cmxUcmFuc2Zvcm0gPSBvcHRpb25zLnVybFRyYW5zZm9ybSB8fCBkZWZhdWx0VXJsVHJhbnNmb3JtXG5cbiAgY29uc3QgcHJvY2Vzc29yID0gdW5pZmllZCgpXG4gICAgLnVzZShyZW1hcmtQYXJzZSlcbiAgICAudXNlKHJlbWFya1BsdWdpbnMpXG4gICAgLnVzZShyZW1hcmtSZWh5cGUsIHJlbWFya1JlaHlwZU9wdGlvbnMpXG4gICAgLnVzZShyZWh5cGVQbHVnaW5zKVxuXG4gIGNvbnN0IGZpbGUgPSBuZXcgVkZpbGUoKVxuXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgZmlsZS52YWx1ZSA9IGNoaWxkcmVuXG4gIH0gZWxzZSB7XG4gICAgdW5yZWFjaGFibGUoXG4gICAgICAnVW5leHBlY3RlZCB2YWx1ZSBgJyArXG4gICAgICAgIGNoaWxkcmVuICtcbiAgICAgICAgJ2AgZm9yIGBjaGlsZHJlbmAgcHJvcCwgZXhwZWN0ZWQgYHN0cmluZ2AnXG4gICAgKVxuICB9XG5cbiAgaWYgKGFsbG93ZWRFbGVtZW50cyAmJiBkaXNhbGxvd2VkRWxlbWVudHMpIHtcbiAgICB1bnJlYWNoYWJsZShcbiAgICAgICdVbmV4cGVjdGVkIGNvbWJpbmVkIGBhbGxvd2VkRWxlbWVudHNgIGFuZCBgZGlzYWxsb3dlZEVsZW1lbnRzYCwgZXhwZWN0ZWQgb25lIG9yIHRoZSBvdGhlcidcbiAgICApXG4gIH1cblxuICBmb3IgKGNvbnN0IGRlcHJlY2F0aW9uIG9mIGRlcHJlY2F0aW9ucykge1xuICAgIGlmIChPYmplY3QuaGFzT3duKG9wdGlvbnMsIGRlcHJlY2F0aW9uLmZyb20pKSB7XG4gICAgICB1bnJlYWNoYWJsZShcbiAgICAgICAgJ1VuZXhwZWN0ZWQgYCcgK1xuICAgICAgICAgIGRlcHJlY2F0aW9uLmZyb20gK1xuICAgICAgICAgICdgIHByb3AsICcgK1xuICAgICAgICAgIChkZXByZWNhdGlvbi50b1xuICAgICAgICAgICAgPyAndXNlIGAnICsgZGVwcmVjYXRpb24udG8gKyAnYCBpbnN0ZWFkJ1xuICAgICAgICAgICAgOiAncmVtb3ZlIGl0JykgK1xuICAgICAgICAgICcgKHNlZSA8JyArXG4gICAgICAgICAgY2hhbmdlbG9nICtcbiAgICAgICAgICAnIycgK1xuICAgICAgICAgIGRlcHJlY2F0aW9uLmlkICtcbiAgICAgICAgICAnPiBmb3IgbW9yZSBpbmZvKSdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZGFzdFRyZWUgPSBwcm9jZXNzb3IucGFyc2UoZmlsZSlcbiAgLyoqIEB0eXBlIHtOb2Rlc30gKi9cbiAgbGV0IGhhc3RUcmVlID0gcHJvY2Vzc29yLnJ1blN5bmMobWRhc3RUcmVlLCBmaWxlKVxuXG4gIC8vIFdyYXAgaW4gYGRpdmAgaWYgdGhlcmXigJlzIGEgY2xhc3MgbmFtZS5cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGhhc3RUcmVlID0ge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lfSxcbiAgICAgIC8vIEFzc3VtZSBubyBkb2N0eXBlcy5cbiAgICAgIGNoaWxkcmVuOiAvKiogQHR5cGUge0FycmF5PEVsZW1lbnRDb250ZW50Pn0gKi8gKFxuICAgICAgICBoYXN0VHJlZS50eXBlID09PSAncm9vdCcgPyBoYXN0VHJlZS5jaGlsZHJlbiA6IFtoYXN0VHJlZV1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB2aXNpdChoYXN0VHJlZSwgdHJhbnNmb3JtKVxuXG4gIHJldHVybiB0b0pzeFJ1bnRpbWUoaGFzdFRyZWUsIHtcbiAgICBGcmFnbWVudCxcbiAgICBjb21wb25lbnRzLFxuICAgIGlnbm9yZUludmFsaWRTdHlsZTogdHJ1ZSxcbiAgICBqc3gsXG4gICAganN4cyxcbiAgICBwYXNzS2V5czogdHJ1ZSxcbiAgICBwYXNzTm9kZTogdHJ1ZVxuICB9KVxuXG4gIC8qKiBAdHlwZSB7VmlzaXRvcn0gKi9cbiAgZnVuY3Rpb24gdHJhbnNmb3JtKG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAncmF3JyAmJiBwYXJlbnQgJiYgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHNraXBIdG1sKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW5baW5kZXhdID0ge3R5cGU6ICd0ZXh0JywgdmFsdWU6IG5vZGUudmFsdWV9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICBsZXQga2V5XG5cbiAgICAgIGZvciAoa2V5IGluIHVybEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIE9iamVjdC5oYXNPd24odXJsQXR0cmlidXRlcywga2V5KSAmJlxuICAgICAgICAgIE9iamVjdC5oYXNPd24obm9kZS5wcm9wZXJ0aWVzLCBrZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5wcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICBjb25zdCB0ZXN0ID0gdXJsQXR0cmlidXRlc1trZXldXG4gICAgICAgICAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdC5pbmNsdWRlcyhub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICBub2RlLnByb3BlcnRpZXNba2V5XSA9IHVybFRyYW5zZm9ybShTdHJpbmcodmFsdWUgfHwgJycpLCBrZXksIG5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICBsZXQgcmVtb3ZlID0gYWxsb3dlZEVsZW1lbnRzXG4gICAgICAgID8gIWFsbG93ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlLnRhZ05hbWUpXG4gICAgICAgIDogZGlzYWxsb3dlZEVsZW1lbnRzXG4gICAgICAgID8gZGlzYWxsb3dlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUudGFnTmFtZSlcbiAgICAgICAgOiBmYWxzZVxuXG4gICAgICBpZiAoIXJlbW92ZSAmJiBhbGxvd0VsZW1lbnQgJiYgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZW1vdmUgPSAhYWxsb3dFbGVtZW50KG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1vdmUgJiYgcGFyZW50ICYmIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHVud3JhcERpc2FsbG93ZWQgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIC4uLm5vZGUuY2hpbGRyZW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBVUkwgc2FmZS5cbiAqXG4gKiBAc2F0aXNmaWVzIHtVcmxUcmFuc2Zvcm19XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVVJMLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgU2FmZSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VXJsVHJhbnNmb3JtKHZhbHVlKSB7XG4gIC8vIFNhbWUgYXM6XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20vbWljcm9tYXJrL21pY3JvbWFyay9ibG9iLzkyOTI3NWUvcGFja2FnZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2Rldi9pbmRleC5qcyNMMzQ+XG4gIC8vIEJ1dCB3aXRob3V0IHRoZSBgZW5jb2RlYCBwYXJ0LlxuICBjb25zdCBjb2xvbiA9IHZhbHVlLmluZGV4T2YoJzonKVxuICBjb25zdCBxdWVzdGlvbk1hcmsgPSB2YWx1ZS5pbmRleE9mKCc/JylcbiAgY29uc3QgbnVtYmVyU2lnbiA9IHZhbHVlLmluZGV4T2YoJyMnKVxuICBjb25zdCBzbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKVxuXG4gIGlmIChcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBwcm90b2NvbCwgaXTigJlzIHJlbGF0aXZlLlxuICAgIGNvbG9uIDwgMCB8fFxuICAgIC8vIElmIHRoZSBmaXJzdCBjb2xvbiBpcyBhZnRlciBhIGA/YCwgYCNgLCBvciBgL2AsIGl04oCZcyBub3QgYSBwcm90b2NvbC5cbiAgICAoc2xhc2ggPiAtMSAmJiBjb2xvbiA+IHNsYXNoKSB8fFxuICAgIChxdWVzdGlvbk1hcmsgPiAtMSAmJiBjb2xvbiA+IHF1ZXN0aW9uTWFyaykgfHxcbiAgICAobnVtYmVyU2lnbiA+IC0xICYmIGNvbG9uID4gbnVtYmVyU2lnbikgfHxcbiAgICAvLyBJdCBpcyBhIHByb3RvY29sLCBpdCBzaG91bGQgYmUgYWxsb3dlZC5cbiAgICBzYWZlUHJvdG9jb2wudGVzdCh2YWx1ZS5zbGljZSgwLCBjb2xvbikpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuICcnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/react-markdown/lib/index.js\n");

/***/ })

};
;