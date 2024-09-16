"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-numeric-character-reference";
exports.ids = ["vendor-chunks/micromark-util-decode-numeric-character-reference"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeNumericCharacterReference: () => (/* binding */ decodeNumericCharacterReference)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/values.js\");\n\n\n/**\n * Turn the number (in string form as either hexa- or plain decimal) coming from\n * a numeric character reference into a character.\n *\n * Sort of like `String.fromCodePoint(Number.parseInt(value, base))`, but makes\n * non-characters and control characters safe.\n *\n * @param {string} value\n *   Value to decode.\n * @param {number} base\n *   Numeric base.\n * @returns {string}\n *   Character.\n */\nfunction decodeNumericCharacterReference(value, base) {\n  const code = Number.parseInt(value, base)\n\n  if (\n    // C0 except for HT, LF, FF, CR, space.\n    code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ht ||\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.vt ||\n    (code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.cr && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space) ||\n    // Control character (DEL) of C0, and C1 controls.\n    (code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde && code < 160) ||\n    // Lone high surrogates and low surrogates.\n    (code > 55_295 && code < 57_344) ||\n    // Noncharacters.\n    (code > 64_975 && code < 65_008) ||\n    /* eslint-disable no-bitwise */\n    (code & 65_535) === 65_535 ||\n    (code & 65_535) === 65_534 ||\n    /* eslint-enable no-bitwise */\n    // Out of range\n    code > 1_114_111\n  ) {\n    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.values.replacementCharacter\n  }\n\n  return String.fromCodePoint(code)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx3REFBSztBQUNoQixhQUFhLHdEQUFLO0FBQ2xCLFlBQVksd0RBQUssY0FBYyx3REFBSztBQUNwQztBQUNBLFlBQVksd0RBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseURBQU07QUFDakI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcmZvbGlvLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1udW1lcmljLWNoYXJhY3Rlci1yZWZlcmVuY2UvZGV2L2luZGV4LmpzPzkxNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb2RlcywgdmFsdWVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbi8qKlxuICogVHVybiB0aGUgbnVtYmVyIChpbiBzdHJpbmcgZm9ybSBhcyBlaXRoZXIgaGV4YS0gb3IgcGxhaW4gZGVjaW1hbCkgY29taW5nIGZyb21cbiAqIGEgbnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlIGludG8gYSBjaGFyYWN0ZXIuXG4gKlxuICogU29ydCBvZiBsaWtlIGBTdHJpbmcuZnJvbUNvZGVQb2ludChOdW1iZXIucGFyc2VJbnQodmFsdWUsIGJhc2UpKWAsIGJ1dCBtYWtlc1xuICogbm9uLWNoYXJhY3RlcnMgYW5kIGNvbnRyb2wgY2hhcmFjdGVycyBzYWZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBkZWNvZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYmFzZVxuICogICBOdW1lcmljIGJhc2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBDaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlKHZhbHVlLCBiYXNlKSB7XG4gIGNvbnN0IGNvZGUgPSBOdW1iZXIucGFyc2VJbnQodmFsdWUsIGJhc2UpXG5cbiAgaWYgKFxuICAgIC8vIEMwIGV4Y2VwdCBmb3IgSFQsIExGLCBGRiwgQ1IsIHNwYWNlLlxuICAgIGNvZGUgPCBjb2Rlcy5odCB8fFxuICAgIGNvZGUgPT09IGNvZGVzLnZ0IHx8XG4gICAgKGNvZGUgPiBjb2Rlcy5jciAmJiBjb2RlIDwgY29kZXMuc3BhY2UpIHx8XG4gICAgLy8gQ29udHJvbCBjaGFyYWN0ZXIgKERFTCkgb2YgQzAsIGFuZCBDMSBjb250cm9scy5cbiAgICAoY29kZSA+IGNvZGVzLnRpbGRlICYmIGNvZGUgPCAxNjApIHx8XG4gICAgLy8gTG9uZSBoaWdoIHN1cnJvZ2F0ZXMgYW5kIGxvdyBzdXJyb2dhdGVzLlxuICAgIChjb2RlID4gNTVfMjk1ICYmIGNvZGUgPCA1N18zNDQpIHx8XG4gICAgLy8gTm9uY2hhcmFjdGVycy5cbiAgICAoY29kZSA+IDY0Xzk3NSAmJiBjb2RlIDwgNjVfMDA4KSB8fFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAoY29kZSAmIDY1XzUzNSkgPT09IDY1XzUzNSB8fFxuICAgIChjb2RlICYgNjVfNTM1KSA9PT0gNjVfNTM0IHx8XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG4gICAgLy8gT3V0IG9mIHJhbmdlXG4gICAgY29kZSA+IDFfMTE0XzExMVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVzLnJlcGxhY2VtZW50Q2hhcmFjdGVyXG4gIH1cblxuICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\n");

/***/ })

};
;