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
          lineNumber: 33,
          columnNumber: 44
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkVHlwZSIsIklucHV0RmllbGQiLCJ2YWx1ZSIsInR5cGUiLCJURVhUX0ZJRUxEIiwiaXNUZXh0RmllbGQiLCJpc0FyZWFGaWVsZCIsIkFSRUFfRklFTEQiLCJpc0ljb25GaWVsZCIsIklDT05fRklFTEQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFFTyxJQUFLQSxjQUFaOztXQUFZQSxjO0FBQUFBLGdCLENBQUFBLGM7QUFBQUEsZ0IsQ0FBQUEsYztBQUFBQSxnQixDQUFBQSxjO0dBQUFBLGMsS0FBQUEsYzs7QUFZWixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUdJO0FBQUEsTUFGckJDLEtBRXFCLFFBRnJCQSxLQUVxQjtBQUFBLHVCQURyQkMsSUFDcUI7QUFBQSxNQURyQkEsSUFDcUIsMEJBRGRILGNBQWMsQ0FBQ0ksVUFDRDtBQUNyQixNQUFNQyxXQUFXLEdBQUdGLElBQUksS0FBS0gsY0FBYyxDQUFDSSxVQUE1QztBQUNBLE1BQU1FLFdBQVcsR0FBR0gsSUFBSSxLQUFLSCxjQUFjLENBQUNPLFVBQTVDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxJQUFJLEtBQUtILGNBQWMsQ0FBQ1MsVUFBNUM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHlFQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxDQUFDSixXQUFXLElBQUlDLFdBQWhCLGtCQUFnQztBQUFBLG9CQUFPSjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG5DLEVBRUdNLFdBQVcsaUJBQUksOERBQUMsMENBQUQ7QUFBTSxjQUFJLEVBQUVOO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBbEJEOztLQUFNRCxVO0FBb0JOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmYxMGZiNmY3OTMxYTU5NTE1YTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTaG91bGRFZGl0Q29tcG9uZW50LFxuICBTaG91bGRQcmV2aWV3Q29tcG9uZW50LFxufSBmcm9tIFwiQC9saWJzL0NvbW1vbkNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tIFwiQC9saWJzL2NvbnN0YW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcblxuZXhwb3J0IGVudW0gSW5wdXRGaWVsZFR5cGUge1xuICBURVhUX0ZJRUxELFxuICBBUkVBX0ZJRUxELFxuICBJQ09OX0ZJRUxELFxufVxuXG50eXBlIElucHV0RmllbGRQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZyB8IEljb25UeXBlO1xuICB0eXBlPzogSW5wdXRGaWVsZFR5cGU7XG4gIG9uSW5wdXRDaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmNvbnN0IElucHV0RmllbGQgPSAoe1xuICB2YWx1ZSxcbiAgdHlwZSA9IElucHV0RmllbGRUeXBlLlRFWFRfRklFTEQsXG59OiBJbnB1dEZpZWxkUHJvcHMpID0+IHtcbiAgY29uc3QgaXNUZXh0RmllbGQgPSB0eXBlID09PSBJbnB1dEZpZWxkVHlwZS5URVhUX0ZJRUxEO1xuICBjb25zdCBpc0FyZWFGaWVsZCA9IHR5cGUgPT09IElucHV0RmllbGRUeXBlLkFSRUFfRklFTEQ7XG4gIGNvbnN0IGlzSWNvbkZpZWxkID0gdHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2hvdWxkUHJldmlld0NvbXBvbmVudD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KGlzVGV4dEZpZWxkIHx8IGlzQXJlYUZpZWxkKSAmJiA8c3Bhbj57dmFsdWV9PC9zcGFuPn1cbiAgICAgICAgICB7aXNJY29uRmllbGQgJiYgPEljb24gdHlwZT17dmFsdWUgYXMgSWNvblR5cGV9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2hvdWxkUHJldmlld0NvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9