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
          defaultValue: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_IconList__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 27
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
          lineNumber: 50,
          columnNumber: 44
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkVHlwZSIsIklucHV0RmllbGQiLCJ2YWx1ZSIsInR5cGUiLCJURVhUX0ZJRUxEIiwiaXNUZXh0RmllbGQiLCJpc0FyZWFGaWVsZCIsIkFSRUFfRklFTEQiLCJpc0ljb25GaWVsZCIsIklDT05fRklFTEQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRU8sSUFBS0EsY0FBWjs7V0FBWUEsYztBQUFBQSxnQixDQUFBQSxjO0FBQUFBLGdCLENBQUFBLGM7QUFBQUEsZ0IsQ0FBQUEsYztHQUFBQSxjLEtBQUFBLGM7O0FBWVosSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FHSTtBQUFBLE1BRnJCQyxLQUVxQixRQUZyQkEsS0FFcUI7QUFBQSx1QkFEckJDLElBQ3FCO0FBQUEsTUFEckJBLElBQ3FCLDBCQURkSCxjQUFjLENBQUNJLFVBQ0Q7QUFDckIsTUFBTUMsV0FBVyxHQUFHRixJQUFJLEtBQUtILGNBQWMsQ0FBQ0ksVUFBNUM7QUFDQSxNQUFNRSxXQUFXLEdBQUdILElBQUksS0FBS0gsY0FBYyxDQUFDTyxVQUE1QztBQUNBLE1BQU1DLFdBQVcsR0FBR0wsSUFBSSxLQUFLSCxjQUFjLENBQUNTLFVBQTVDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzRUFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dKLFdBQVcsaUJBQUk7QUFBTyxtQkFBUyxFQUFDLFlBQWpCO0FBQThCLGVBQUssRUFBRUg7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbEIsRUFHR0ksV0FBVyxpQkFDVjtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGNBQUksRUFBRSxDQUZSO0FBR0Usc0JBQVksRUFBRUo7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixFQVdHTSxXQUFXLGlCQUFJLDhEQUFDLG1EQUFEO0FBQVUsY0FBSSxFQUFFTjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhsQjtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUJFLDhEQUFDLHlFQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxDQUFDRyxXQUFXLElBQUlDLFdBQWhCLGtCQUFnQztBQUFBLG9CQUFPSjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG5DLEVBRUdNLFdBQVcsaUJBQUksOERBQUMsMENBQUQ7QUFBTSxjQUFJLEVBQUVOO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQWxDRDs7S0FBTUQsVTtBQW9DTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS5iMTMxZGZlODA5ZWE0MWQ1OTRjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU2hvdWxkRWRpdENvbXBvbmVudCxcbiAgU2hvdWxkUHJldmlld0NvbXBvbmVudCxcbn0gZnJvbSBcIkAvbGlicy9Db21tb25Db21wb25lbnRcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcIkAvbGlicy9jb25zdGFudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgSWNvbkxpc3QgZnJvbSBcIi4uL0ljb24vSWNvbkxpc3RcIjtcblxuZXhwb3J0IGVudW0gSW5wdXRGaWVsZFR5cGUge1xuICBURVhUX0ZJRUxELFxuICBBUkVBX0ZJRUxELFxuICBJQ09OX0ZJRUxELFxufVxuXG50eXBlIElucHV0RmllbGRQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZyB8IEljb25UeXBlO1xuICB0eXBlPzogSW5wdXRGaWVsZFR5cGU7XG4gIG9uSW5wdXRDaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmNvbnN0IElucHV0RmllbGQgPSAoe1xuICB2YWx1ZSxcbiAgdHlwZSA9IElucHV0RmllbGRUeXBlLlRFWFRfRklFTEQsXG59OiBJbnB1dEZpZWxkUHJvcHMpID0+IHtcbiAgY29uc3QgaXNUZXh0RmllbGQgPSB0eXBlID09PSBJbnB1dEZpZWxkVHlwZS5URVhUX0ZJRUxEO1xuICBjb25zdCBpc0FyZWFGaWVsZCA9IHR5cGUgPT09IElucHV0RmllbGRUeXBlLkFSRUFfRklFTEQ7XG4gIGNvbnN0IGlzSWNvbkZpZWxkID0gdHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNUZXh0RmllbGQgJiYgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBwLTJcIiB2YWx1ZT17dmFsdWV9IC8+fVxuXG4gICAgICAgICAge2lzQXJlYUZpZWxkICYmIChcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yXCJcbiAgICAgICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7aXNJY29uRmllbGQgJiYgPEljb25MaXN0IHR5cGU9e3ZhbHVlIGFzIEljb25UeXBlfSAvPn1cbiAgICAgICAgPC8+XG4gICAgICA8L1Nob3VsZEVkaXRDb21wb25lbnQ+XG5cbiAgICAgIDxTaG91bGRQcmV2aWV3Q29tcG9uZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsoaXNUZXh0RmllbGQgfHwgaXNBcmVhRmllbGQpICYmIDxzcGFuPnt2YWx1ZX08L3NwYW4+fVxuICAgICAgICAgIHtpc0ljb25GaWVsZCAmJiA8SWNvbiB0eXBlPXt2YWx1ZSBhcyBJY29uVHlwZX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaG91bGRQcmV2aWV3Q29tcG9uZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=