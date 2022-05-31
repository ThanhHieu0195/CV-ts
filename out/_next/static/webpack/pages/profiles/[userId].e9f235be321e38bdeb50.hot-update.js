self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/ProfileInfo/ProfileHead/index.tsx":
/*!******************************************************!*\
  !*** ./components/ProfileInfo/ProfileHead/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/InputField */ "./components/InputField/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/theme */ "./libs/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/ProfileInfo/ProfileHead/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var ProfileHead = function ProfileHead(_ref) {
  _s();

  var user = _ref.user;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "p-5 text-right " + theme.primary.bg,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-3xl font-bold " + theme.color,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_1__.default, {
          value: user.name,
          onInputChange: onUpdateUserInfo("name")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this), (user === null || user === void 0 ? void 0 : user.position) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: theme.color + " text-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_1__.default, {
          value: user.position,
          onInputChange: onUpdateUserInfo("position")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(ProfileHead, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_3__.useTheme];
});

_c = ProfileHead;
/* harmony default export */ __webpack_exports__["default"] = (ProfileHead);

var _c;

$RefreshReg$(_c, "ProfileHead");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlSGVhZC9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZmlsZUhlYWQiLCJ1c2VyIiwidGhlbWUiLCJ1c2VUaGVtZSIsInByaW1hcnkiLCJiZyIsImNvbG9yIiwibmFtZSIsIm9uVXBkYXRlVXNlckluZm8iLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBS0EsSUFBTUEsV0FBbUMsR0FBRyxTQUF0Q0EsV0FBc0MsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQ3JFLE1BQU1DLEtBQUssR0FBR0MscURBQVEsRUFBdEI7QUFDQSxzQkFDRTtBQUFBLGNBQ0dGLElBQUksaUJBQ0g7QUFBSyxlQUFTLEVBQUUsb0JBQW9CQyxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsRUFBbEQ7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUUsd0JBQXdCSCxLQUFLLENBQUNJLEtBQTdDO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUVMLElBQUksQ0FBQ00sSUFEZDtBQUVFLHVCQUFhLEVBQUVDLGdCQUFnQixDQUFDLE1BQUQ7QUFGakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQU9HLENBQUFQLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUSxRQUFOLGtCQUNDO0FBQUksaUJBQVMsRUFBRVAsS0FBSyxDQUFDSSxLQUFOLEdBQWMsVUFBN0I7QUFBQSwrQkFFSSw4REFBQywyREFBRDtBQUNFLGVBQUssRUFBRUwsSUFBSSxDQUFDUSxRQURkO0FBRUUsdUJBQWEsRUFBRUQsZ0JBQWdCLENBQUMsVUFBRDtBQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQTFCRDs7R0FBTVIsVztVQUNVRyxpRDs7O0tBRFZILFc7QUE0Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZXMvW3VzZXJJZF0uZTlmMjM1YmUzMjFlMzhiZGViNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiQC9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG50eXBlIEhlYWRlclByb3BzID0ge1xuICB1c2VyOiBJVXNlcjtcbn07XG5cbmNvbnN0IFByb2ZpbGVIZWFkOiBSZWFjdC5WRkM8SGVhZGVyUHJvcHM+ID0gKHsgdXNlciB9OiBIZWFkZXJQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHt1c2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicC01IHRleHQtcmlnaHQgXCIgKyB0aGVtZS5wcmltYXJ5LmJnfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtcInRleHQtM3hsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yfT5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uVXBkYXRlVXNlckluZm8oXCJuYW1lXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHt1c2VyPy5wb3NpdGlvbiAmJiAoXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt0aGVtZS5jb2xvciArIFwiIHRleHQtbGdcIn0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucG9zaXRpb259XG4gICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvblVwZGF0ZVVzZXJJbmZvKFwicG9zaXRpb25cIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSGVhZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=