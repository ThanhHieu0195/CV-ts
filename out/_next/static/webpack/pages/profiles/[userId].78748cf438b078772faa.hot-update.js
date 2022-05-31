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
/* harmony import */ var _Icon_IconList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/IconList */ "./components/Icon/IconList.tsx");
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_1__.ShouldEditComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [isTextField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "w-full p-2",
          value: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 27
        }, _this), isAreaField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          className: "w-full p-2",
          rows: 6,
          onChange: handleFieldChange,
          defaultValue: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_IconList__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: value,
          onSelectItem: handleSelectItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_1__.ShouldPreviewComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [(isTextField || isAreaField) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 44
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkVHlwZSIsIklucHV0RmllbGQiLCJ2YWx1ZSIsInR5cGUiLCJURVhUX0ZJRUxEIiwiaXNUZXh0RmllbGQiLCJpc0FyZWFGaWVsZCIsIkFSRUFfRklFTEQiLCJpc0ljb25GaWVsZCIsIklDT05fRklFTEQiLCJoYW5kbGVGaWVsZENoYW5nZSIsImhhbmRsZVNlbGVjdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRU8sSUFBS0EsY0FBWjs7V0FBWUEsYztBQUFBQSxnQixDQUFBQSxjO0FBQUFBLGdCLENBQUFBLGM7QUFBQUEsZ0IsQ0FBQUEsYztHQUFBQSxjLEtBQUFBLGM7O0FBWVosSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FHSTtBQUFBLE1BRnJCQyxLQUVxQixRQUZyQkEsS0FFcUI7QUFBQSx1QkFEckJDLElBQ3FCO0FBQUEsTUFEckJBLElBQ3FCLDBCQURkSCxjQUFjLENBQUNJLFVBQ0Q7QUFDckIsTUFBTUMsV0FBVyxHQUFHRixJQUFJLEtBQUtILGNBQWMsQ0FBQ0ksVUFBNUM7QUFDQSxNQUFNRSxXQUFXLEdBQUdILElBQUksS0FBS0gsY0FBYyxDQUFDTyxVQUE1QztBQUNBLE1BQU1DLFdBQVcsR0FBR0wsSUFBSSxLQUFLSCxjQUFjLENBQUNTLFVBQTVDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzRUFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dKLFdBQVcsaUJBQUk7QUFBTyxtQkFBUyxFQUFDLFlBQWpCO0FBQThCLGVBQUssRUFBRUg7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbEIsRUFHR0ksV0FBVyxpQkFDVjtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGNBQUksRUFBRSxDQUZSO0FBR0Usa0JBQVEsRUFBRUksaUJBSFo7QUFJRSxzQkFBWSxFQUFFUjtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLEVBWUdNLFdBQVcsaUJBQ1YsOERBQUMsbURBQUQ7QUFDRSxjQUFJLEVBQUVOLEtBRFI7QUFFRSxzQkFBWSxFQUFFUztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF1QkUsOERBQUMseUVBQUQ7QUFBQSw2QkFDRTtBQUFBLG1CQUNHLENBQUNOLFdBQVcsSUFBSUMsV0FBaEIsa0JBQWdDO0FBQUEsb0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbkMsRUFFR00sV0FBVyxpQkFBSSw4REFBQywwQ0FBRDtBQUFNLGNBQUksRUFBRU47QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBeENEOztLQUFNRCxVO0FBMENOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjc4NzQ4Y2Y0MzhiMDc4NzcyZmFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTaG91bGRFZGl0Q29tcG9uZW50LFxuICBTaG91bGRQcmV2aWV3Q29tcG9uZW50LFxufSBmcm9tIFwiQC9saWJzL0NvbW1vbkNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tIFwiQC9saWJzL2NvbnN0YW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCBJY29uTGlzdCBmcm9tIFwiLi4vSWNvbi9JY29uTGlzdFwiO1xuXG5leHBvcnQgZW51bSBJbnB1dEZpZWxkVHlwZSB7XG4gIFRFWFRfRklFTEQsXG4gIEFSRUFfRklFTEQsXG4gIElDT05fRklFTEQsXG59XG5cbnR5cGUgSW5wdXRGaWVsZFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nIHwgSWNvblR5cGU7XG4gIHR5cGU/OiBJbnB1dEZpZWxkVHlwZTtcbiAgb25JbnB1dENoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuY29uc3QgSW5wdXRGaWVsZCA9ICh7XG4gIHZhbHVlLFxuICB0eXBlID0gSW5wdXRGaWVsZFR5cGUuVEVYVF9GSUVMRCxcbn06IElucHV0RmllbGRQcm9wcykgPT4ge1xuICBjb25zdCBpc1RleHRGaWVsZCA9IHR5cGUgPT09IElucHV0RmllbGRUeXBlLlRFWFRfRklFTEQ7XG4gIGNvbnN0IGlzQXJlYUZpZWxkID0gdHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuQVJFQV9GSUVMRDtcbiAgY29uc3QgaXNJY29uRmllbGQgPSB0eXBlID09PSBJbnB1dEZpZWxkVHlwZS5JQ09OX0ZJRUxEO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICA8PlxuICAgICAgICAgIHtpc1RleHRGaWVsZCAmJiA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHAtMlwiIHZhbHVlPXt2YWx1ZX0gLz59XG5cbiAgICAgICAgICB7aXNBcmVhRmllbGQgJiYgKFxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTJcIlxuICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmllbGRDaGFuZ2V9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2lzSWNvbkZpZWxkICYmIChcbiAgICAgICAgICAgIDxJY29uTGlzdFxuICAgICAgICAgICAgICB0eXBlPXt2YWx1ZSBhcyBJY29uVHlwZX1cbiAgICAgICAgICAgICAgb25TZWxlY3RJdGVtPXtoYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cblxuICAgICAgPFNob3VsZFByZXZpZXdDb21wb25lbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyhpc1RleHRGaWVsZCB8fCBpc0FyZWFGaWVsZCkgJiYgPHNwYW4+e3ZhbHVlfTwvc3Bhbj59XG4gICAgICAgICAge2lzSWNvbkZpZWxkICYmIDxJY29uIHR5cGU9e3ZhbHVlIGFzIEljb25UeXBlfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Nob3VsZFByZXZpZXdDb21wb25lbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==