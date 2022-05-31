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
          lineNumber: 30,
          columnNumber: 44
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkVHlwZSIsIklucHV0RmllbGQiLCJ2YWx1ZSIsInR5cGUiLCJURVhUX0ZJRUxEIiwiaXNUZXh0RmllbGQiLCJpc0FyZWFGaWVsZCIsIkFSRUFfRklFTEQiLCJpc0ljb25GaWVsZCIsIklDT05fRklFTEQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFTyxJQUFLQSxjQUFaOztXQUFZQSxjO0FBQUFBLGdCLENBQUFBLGM7QUFBQUEsZ0IsQ0FBQUEsYztBQUFBQSxnQixDQUFBQSxjO0dBQUFBLGMsS0FBQUEsYzs7QUFZWixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUdJO0FBQUEsTUFGckJDLEtBRXFCLFFBRnJCQSxLQUVxQjtBQUFBLHVCQURyQkMsSUFDcUI7QUFBQSxNQURyQkEsSUFDcUIsMEJBRGRILGNBQWMsQ0FBQ0ksVUFDRDtBQUNyQixNQUFNQyxXQUFXLEdBQUdGLElBQUksS0FBS0gsY0FBYyxDQUFDSSxVQUE1QztBQUNBLE1BQU1FLFdBQVcsR0FBR0gsSUFBSSxLQUFLSCxjQUFjLENBQUNPLFVBQTVDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxJQUFJLEtBQUtILGNBQWMsQ0FBQ1MsVUFBNUM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHlFQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxDQUFDSixXQUFXLElBQUlDLFdBQWhCLGtCQUFnQztBQUFBLG9CQUFPSjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG5DLEVBRUdNLFdBQVcsaUJBQUksOERBQUMsMENBQUQ7QUFBTSxjQUFJLEVBQUVOO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBbEJEOztLQUFNRCxVO0FBb0JOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjdjNTc3YTc0OTY3MDI4MTJhMjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaG91bGRQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSBcIkAvbGlicy9Db21tb25Db21wb25lbnRcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcIkAvbGlicy9jb25zdGFudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbmV4cG9ydCBlbnVtIElucHV0RmllbGRUeXBlIHtcbiAgVEVYVF9GSUVMRCxcbiAgQVJFQV9GSUVMRCxcbiAgSUNPTl9GSUVMRCxcbn1cblxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBJY29uVHlwZTtcbiAgdHlwZT86IElucHV0RmllbGRUeXBlO1xuICBvbklucHV0Q2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJbnB1dEZpZWxkID0gKHtcbiAgdmFsdWUsXG4gIHR5cGUgPSBJbnB1dEZpZWxkVHlwZS5URVhUX0ZJRUxELFxufTogSW5wdXRGaWVsZFByb3BzKSA9PiB7XG4gIGNvbnN0IGlzVGV4dEZpZWxkID0gdHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuVEVYVF9GSUVMRDtcbiAgY29uc3QgaXNBcmVhRmllbGQgPSB0eXBlID09PSBJbnB1dEZpZWxkVHlwZS5BUkVBX0ZJRUxEO1xuICBjb25zdCBpc0ljb25GaWVsZCA9IHR5cGUgPT09IElucHV0RmllbGRUeXBlLklDT05fRklFTEQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNob3VsZFByZXZpZXdDb21wb25lbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyhpc1RleHRGaWVsZCB8fCBpc0FyZWFGaWVsZCkgJiYgPHNwYW4+e3ZhbHVlfTwvc3Bhbj59XG4gICAgICAgICAge2lzSWNvbkZpZWxkICYmIDxJY29uIHR5cGU9e3ZhbHVlIGFzIEljb25UeXBlfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Nob3VsZFByZXZpZXdDb21wb25lbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==