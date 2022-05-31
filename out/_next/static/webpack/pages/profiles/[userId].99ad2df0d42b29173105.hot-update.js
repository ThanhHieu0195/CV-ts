self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/InputField/index.tsx":
/*!*****************************************!*\
  !*** ./components/InputField/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputFieldType": function() { return /* binding */ InputFieldType; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_CommonComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/CommonComponent */ "./libs/CommonComponent.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./components/Icon/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/InputField/index.tsx",
    _this = undefined;




var InputFieldType;

(function (InputFieldType) {
  InputFieldType[InputFieldType["TEXT_FIELD"] = 0] = "TEXT_FIELD";
  InputFieldType[InputFieldType["AREA_FIELD"] = 1] = "AREA_FIELD";
  InputFieldType[InputFieldType["ICON_FIELD"] = 2] = "ICON_FIELD";
})(InputFieldType || (InputFieldType = {}));

var InputField = function InputField(_ref) {
  var value = _ref.value,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? InputFieldType.TEXT_FIELD : _ref$type;
  var isTextField = type === InputFieldType.TEXT_FIELD;
  var isAreaField = type === InputFieldType.AREA_FIELD;
  var isIconField = type === InputFieldType.ICON_FIELD;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_1__.ShouldPreviewComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [(isTextField || isAreaField) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 44
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_c = InputField;
/* harmony default export */ __webpack_exports__["default"] = (InputField);

var _c;

$RefreshReg$(_c, "InputField");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkVHlwZSIsIklucHV0RmllbGQiLCJ2YWx1ZSIsInR5cGUiLCJURVhUX0ZJRUxEIiwiaXNUZXh0RmllbGQiLCJpc0FyZWFGaWVsZCIsIkFSRUFfRklFTEQiLCJpc0ljb25GaWVsZCIsIklDT05fRklFTEQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFHTyxJQUFLQSxjQUFaOztXQUFZQSxjO0FBQUFBLGdCLENBQUFBLGM7QUFBQUEsZ0IsQ0FBQUEsYztBQUFBQSxnQixDQUFBQSxjO0dBQUFBLGMsS0FBQUEsYzs7QUFZWixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUdJO0FBQUEsTUFGckJDLEtBRXFCLFFBRnJCQSxLQUVxQjtBQUFBLHVCQURyQkMsSUFDcUI7QUFBQSxNQURyQkEsSUFDcUIsMEJBRGRILGNBQWMsQ0FBQ0ksVUFDRDtBQUNyQixNQUFNQyxXQUFXLEdBQUdGLElBQUksS0FBS0gsY0FBYyxDQUFDSSxVQUE1QztBQUNBLE1BQU1FLFdBQVcsR0FBR0gsSUFBSSxLQUFLSCxjQUFjLENBQUNPLFVBQTVDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxJQUFJLEtBQUtILGNBQWMsQ0FBQ1MsVUFBNUM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHlFQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxDQUFDSixXQUFXLElBQUlDLFdBQWhCLGtCQUFnQztBQUFBLG9CQUFPSjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG5DLEVBRUdNLFdBQVcsaUJBQUksOERBQUMsMENBQUQ7QUFBTSxjQUFJLEVBQUVOO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBbEJEOztLQUFNRCxVO0FBb0JOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjk5YWQyZGYwZDQyYjI5MTczMTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTaG91bGRFZGl0Q29tcG9uZW50LFxuICBTaG91bGRQcmV2aWV3Q29tcG9uZW50LFxufSBmcm9tIFwiQC9saWJzL0NvbW1vbkNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tIFwiQC9saWJzL2NvbnN0YW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCBJY29uTGlzdCBmcm9tIFwiLi4vSWNvbi9JY29uTGlzdFwiO1xuXG5leHBvcnQgZW51bSBJbnB1dEZpZWxkVHlwZSB7XG4gIFRFWFRfRklFTEQsXG4gIEFSRUFfRklFTEQsXG4gIElDT05fRklFTEQsXG59XG5cbnR5cGUgSW5wdXRGaWVsZFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nIHwgSWNvblR5cGU7XG4gIHR5cGU/OiBJbnB1dEZpZWxkVHlwZTtcbiAgb25JbnB1dENoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuY29uc3QgSW5wdXRGaWVsZCA9ICh7XG4gIHZhbHVlLFxuICB0eXBlID0gSW5wdXRGaWVsZFR5cGUuVEVYVF9GSUVMRCxcbn06IElucHV0RmllbGRQcm9wcykgPT4ge1xuICBjb25zdCBpc1RleHRGaWVsZCA9IHR5cGUgPT09IElucHV0RmllbGRUeXBlLlRFWFRfRklFTEQ7XG4gIGNvbnN0IGlzQXJlYUZpZWxkID0gdHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuQVJFQV9GSUVMRDtcbiAgY29uc3QgaXNJY29uRmllbGQgPSB0eXBlID09PSBJbnB1dEZpZWxkVHlwZS5JQ09OX0ZJRUxEO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTaG91bGRQcmV2aWV3Q29tcG9uZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsoaXNUZXh0RmllbGQgfHwgaXNBcmVhRmllbGQpICYmIDxzcGFuPnt2YWx1ZX08L3NwYW4+fVxuICAgICAgICAgIHtpc0ljb25GaWVsZCAmJiA8SWNvbiB0eXBlPXt2YWx1ZSBhcyBJY29uVHlwZX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaG91bGRQcmV2aWV3Q29tcG9uZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=