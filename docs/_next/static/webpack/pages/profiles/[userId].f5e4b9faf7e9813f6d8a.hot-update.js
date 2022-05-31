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

  var handleFieldChange = function handleFieldChange(e) {
    return onInputChange(e.target.value);
  };

  var handleSelectItem = function handleSelectItem(icon) {
    return onInputChange(icon);
  };

  var isTextField = type === InputFieldType.TEXT_FIELD;
  var isAreaField = type === InputFieldType.AREA_FIELD;
  var isIconField = type === InputFieldType.ICON_FIELD;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_1__.ShouldEditComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [isTextField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "w-full p-2",
          value: value,
          onChange: handleFieldChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this), isAreaField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          className: "w-full p-2",
          rows: 6,
          onChange: handleFieldChange,
          defaultValue: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_IconList__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: value,
          onSelectItem: handleSelectItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_1__.ShouldPreviewComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [(isTextField || isAreaField) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 44
        }, _this), isIconField && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkVHlwZSIsIklucHV0RmllbGQiLCJ2YWx1ZSIsInR5cGUiLCJURVhUX0ZJRUxEIiwiaGFuZGxlRmllbGRDaGFuZ2UiLCJlIiwib25JbnB1dENoYW5nZSIsInRhcmdldCIsImhhbmRsZVNlbGVjdEl0ZW0iLCJpY29uIiwiaXNUZXh0RmllbGQiLCJpc0FyZWFGaWVsZCIsIkFSRUFfRklFTEQiLCJpc0ljb25GaWVsZCIsIklDT05fRklFTEQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRU8sSUFBS0EsY0FBWjs7V0FBWUEsYztBQUFBQSxnQixDQUFBQSxjO0FBQUFBLGdCLENBQUFBLGM7QUFBQUEsZ0IsQ0FBQUEsYztHQUFBQSxjLEtBQUFBLGM7O0FBWVosSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FHSTtBQUFBLE1BRnJCQyxLQUVxQixRQUZyQkEsS0FFcUI7QUFBQSx1QkFEckJDLElBQ3FCO0FBQUEsTUFEckJBLElBQ3FCLDBCQURkSCxjQUFjLENBQUNJLFVBQ0Q7O0FBQ3JCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9DLGFBQWEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNOLEtBQVYsQ0FBcEI7QUFBQSxHQUExQjs7QUFFQSxNQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQ7QUFBQSxXQUFvQkgsYUFBYSxDQUFDRyxJQUFELENBQWpDO0FBQUEsR0FBekI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHUixJQUFJLEtBQUtILGNBQWMsQ0FBQ0ksVUFBNUM7QUFDQSxNQUFNUSxXQUFXLEdBQUdULElBQUksS0FBS0gsY0FBYyxDQUFDYSxVQUE1QztBQUNBLE1BQU1DLFdBQVcsR0FBR1gsSUFBSSxLQUFLSCxjQUFjLENBQUNlLFVBQTVDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzRUFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dKLFdBQVcsaUJBQ1Y7QUFDRSxtQkFBUyxFQUFDLFlBRFo7QUFFRSxlQUFLLEVBQUVULEtBRlQ7QUFHRSxrQkFBUSxFQUFFRztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFTR08sV0FBVyxpQkFDVjtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLGNBQUksRUFBRSxDQUZSO0FBR0Usa0JBQVEsRUFBRVAsaUJBSFo7QUFJRSxzQkFBWSxFQUFFSDtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLEVBa0JHWSxXQUFXLGlCQUNWLDhEQUFDLG1EQUFEO0FBQ0UsY0FBSSxFQUFFWixLQURSO0FBRUUsc0JBQVksRUFBRU87QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTZCRSw4REFBQyx5RUFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQ0csQ0FBQ0UsV0FBVyxJQUFJQyxXQUFoQixrQkFBZ0M7QUFBQSxvQkFBT1Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURuQyxFQUVHWSxXQUFXLGlCQUFJLDhEQUFDLDBDQUFEO0FBQU0sY0FBSSxFQUFFWjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0FsREQ7O0tBQU1ELFU7QUFvRE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZXMvW3VzZXJJZF0uZjVlNGI5ZmFmN2U5ODEzZjZkOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNob3VsZEVkaXRDb21wb25lbnQsXG4gIFNob3VsZFByZXZpZXdDb21wb25lbnQsXG59IGZyb20gXCJAL2xpYnMvQ29tbW9uQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gXCJAL2xpYnMvY29uc3RhbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuaW1wb3J0IEljb25MaXN0IGZyb20gXCIuLi9JY29uL0ljb25MaXN0XCI7XG5cbmV4cG9ydCBlbnVtIElucHV0RmllbGRUeXBlIHtcbiAgVEVYVF9GSUVMRCxcbiAgQVJFQV9GSUVMRCxcbiAgSUNPTl9GSUVMRCxcbn1cblxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBJY29uVHlwZTtcbiAgdHlwZT86IElucHV0RmllbGRUeXBlO1xuICBvbklucHV0Q2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJbnB1dEZpZWxkID0gKHtcbiAgdmFsdWUsXG4gIHR5cGUgPSBJbnB1dEZpZWxkVHlwZS5URVhUX0ZJRUxELFxufTogSW5wdXRGaWVsZFByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUZpZWxkQ2hhbmdlID0gKGUpID0+IG9uSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEl0ZW0gPSAoaWNvbjogSWNvblR5cGUpID0+IG9uSW5wdXRDaGFuZ2UoaWNvbik7XG5cbiAgY29uc3QgaXNUZXh0RmllbGQgPSB0eXBlID09PSBJbnB1dEZpZWxkVHlwZS5URVhUX0ZJRUxEO1xuICBjb25zdCBpc0FyZWFGaWVsZCA9IHR5cGUgPT09IElucHV0RmllbGRUeXBlLkFSRUFfRklFTEQ7XG4gIGNvbnN0IGlzSWNvbkZpZWxkID0gdHlwZSA9PT0gSW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNUZXh0RmllbGQgJiYgKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWVsZENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtpc0FyZWFGaWVsZCAmJiAoXG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMlwiXG4gICAgICAgICAgICAgIHJvd3M9ezZ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWVsZENoYW5nZX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7aXNJY29uRmllbGQgJiYgKFxuICAgICAgICAgICAgPEljb25MaXN0XG4gICAgICAgICAgICAgIHR5cGU9e3ZhbHVlIGFzIEljb25UeXBlfVxuICAgICAgICAgICAgICBvblNlbGVjdEl0ZW09e2hhbmRsZVNlbGVjdEl0ZW19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuXG4gICAgICA8U2hvdWxkUHJldmlld0NvbXBvbmVudD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KGlzVGV4dEZpZWxkIHx8IGlzQXJlYUZpZWxkKSAmJiA8c3Bhbj57dmFsdWV9PC9zcGFuPn1cbiAgICAgICAgICB7aXNJY29uRmllbGQgJiYgPEljb24gdHlwZT17dmFsdWUgYXMgSWNvblR5cGV9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2hvdWxkUHJldmlld0NvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9