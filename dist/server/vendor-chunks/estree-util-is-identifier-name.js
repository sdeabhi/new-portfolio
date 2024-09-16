"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/estree-util-is-identifier-name";
exports.ids = ["vendor-chunks/estree-util-is-identifier-name"];
exports.modules = {

/***/ "(rsc)/./node_modules/estree-util-is-identifier-name/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/estree-util-is-identifier-name/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cont: () => (/* binding */ cont),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [jsx=false]\n *   Support JSX identifiers (default: `false`).\n */\n\nconst startRe = /[$_\\p{ID_Start}]/u\nconst contRe = /[$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u\nconst contReJsx = /[-$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u\nconst nameRe = /^[$_\\p{ID_Start}][$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u\nconst nameReJsx = /^[$_\\p{ID_Start}][-$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u\n\n/** @type {Options} */\nconst emptyOptions = {}\n\n/**\n * Checks if the given code point can start an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @returns {boolean}\n *   Whether `code` can start an identifier.\n */\n// Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction start(code) {\n  return code ? startRe.test(String.fromCodePoint(code)) : false\n}\n\n/**\n * Checks if the given code point can continue an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `code` can continue an identifier.\n */\n// Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction cont(code, options) {\n  const settings = options || emptyOptions\n  const re = settings.jsx ? contReJsx : contRe\n  return code ? re.test(String.fromCodePoint(code)) : false\n}\n\n/**\n * Checks if the given value is a valid identifier name.\n *\n * @param {string} name\n *   Identifier to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `name` can be an identifier.\n */\nfunction name(name, options) {\n  const settings = options || emptyOptions\n  const re = settings.jsx ? nameReJsx : nameRe\n  return re.test(name)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXN0cmVlLXV0aWwtaXMtaWRlbnRpZmllci1uYW1lL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUVBLHVCQUF1QixTQUFTO0FBQ2hDLHNCQUFzQixLQUFLLEdBQUcsS0FBSyxHQUFHLFlBQVk7QUFDbEQsMEJBQTBCLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTtBQUN0RCx1QkFBdUIsU0FBUyxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTtBQUNuRSwwQkFBMEIsU0FBUyxRQUFRLEtBQUssR0FBRyxLQUFLLEdBQUcsWUFBWTs7QUFFdkUsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL25vZGVfbW9kdWxlcy9lc3RyZWUtdXRpbC1pcy1pZGVudGlmaWVyLW5hbWUvbGliL2luZGV4LmpzPzc3MGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbanN4PWZhbHNlXVxuICogICBTdXBwb3J0IEpTWCBpZGVudGlmaWVycyAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuY29uc3Qgc3RhcnRSZSA9IC9bJF9cXHB7SURfU3RhcnR9XS91XG5jb25zdCBjb250UmUgPSAvWyRfXFx1ezIwMEN9XFx1ezIwMER9XFxwe0lEX0NvbnRpbnVlfV0vdVxuY29uc3QgY29udFJlSnN4ID0gL1stJF9cXHV7MjAwQ31cXHV7MjAwRH1cXHB7SURfQ29udGludWV9XS91XG5jb25zdCBuYW1lUmUgPSAvXlskX1xccHtJRF9TdGFydH1dWyRfXFx1ezIwMEN9XFx1ezIwMER9XFxwe0lEX0NvbnRpbnVlfV0qJC91XG5jb25zdCBuYW1lUmVKc3ggPSAvXlskX1xccHtJRF9TdGFydH1dWy0kX1xcdXsyMDBDfVxcdXsyMDBEfVxccHtJRF9Db250aW51ZX1dKiQvdVxuXG4vKiogQHR5cGUge09wdGlvbnN9ICovXG5jb25zdCBlbXB0eU9wdGlvbnMgPSB7fVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gY29kZSBwb2ludCBjYW4gc3RhcnQgYW4gaWRlbnRpZmllci5cbiAqXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gY29kZVxuICogICBDb2RlIHBvaW50IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYGNvZGVgIGNhbiBzdGFydCBhbiBpZGVudGlmaWVyLlxuICovXG4vLyBOb3RlOiBgdW5kZWZpbmVkYCBpcyBzdXBwb3J0ZWQgc28geW91IGNhbiBwYXNzIHRoZSByZXN1bHQgZnJvbSBgJycuY29kZVBvaW50QXRgLlxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPyBzdGFydFJlLnRlc3QoU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZSkpIDogZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNvZGUgcG9pbnQgY2FuIGNvbnRpbnVlIGFuIGlkZW50aWZpZXIuXG4gKlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IGNvZGVcbiAqICAgQ29kZSBwb2ludCB0byBjaGVjay5cbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgY29kZWAgY2FuIGNvbnRpbnVlIGFuIGlkZW50aWZpZXIuXG4gKi9cbi8vIE5vdGU6IGB1bmRlZmluZWRgIGlzIHN1cHBvcnRlZCBzbyB5b3UgY2FuIHBhc3MgdGhlIHJlc3VsdCBmcm9tIGAnJy5jb2RlUG9pbnRBdGAuXG5leHBvcnQgZnVuY3Rpb24gY29udChjb2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCBlbXB0eU9wdGlvbnNcbiAgY29uc3QgcmUgPSBzZXR0aW5ncy5qc3ggPyBjb250UmVKc3ggOiBjb250UmVcbiAgcmV0dXJuIGNvZGUgPyByZS50ZXN0KFN0cmluZy5mcm9tQ29kZVBvaW50KGNvZGUpKSA6IGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHZhbGlkIGlkZW50aWZpZXIgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogICBJZGVudGlmaWVyIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGBuYW1lYCBjYW4gYmUgYW4gaWRlbnRpZmllci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWUobmFtZSwgb3B0aW9ucykge1xuICBjb25zdCBzZXR0aW5ncyA9IG9wdGlvbnMgfHwgZW1wdHlPcHRpb25zXG4gIGNvbnN0IHJlID0gc2V0dGluZ3MuanN4ID8gbmFtZVJlSnN4IDogbmFtZVJlXG4gIHJldHVybiByZS50ZXN0KG5hbWUpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/estree-util-is-identifier-name/lib/index.js\n");

/***/ })

};
;