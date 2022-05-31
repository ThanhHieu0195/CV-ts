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
          value: user.name
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
          value: user.position
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlSGVhZC9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZmlsZUhlYWQiLCJ1c2VyIiwidGhlbWUiLCJ1c2VUaGVtZSIsInByaW1hcnkiLCJiZyIsImNvbG9yIiwibmFtZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFLQSxJQUFNQSxXQUFtQyxHQUFHLFNBQXRDQSxXQUFzQyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFDckUsTUFBTUMsS0FBSyxHQUFHQyxxREFBUSxFQUF0QjtBQUNBLHNCQUNFO0FBQUEsY0FDR0YsSUFBSSxpQkFDSDtBQUFLLGVBQVMsRUFBRSxvQkFBb0JDLEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxFQUFsRDtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRSx3QkFBd0JILEtBQUssQ0FBQ0ksS0FBN0M7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFZLGVBQUssRUFBRUwsSUFBSSxDQUFDTTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUcsQ0FBQU4sSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLFFBQU4sa0JBQ0M7QUFBSSxpQkFBUyxFQUFFTixLQUFLLENBQUNJLEtBQU4sR0FBYyxVQUE3QjtBQUFBLCtCQUNHLDhEQUFDLDJEQUFEO0FBQVksZUFBSyxFQUFFTCxJQUFJLENBQUNPO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBbEJEOztHQUFNUixXO1VBQ1VHLGlEOzs7S0FEVkgsVztBQW9CTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS5kZDlmYzBmNTFhMDVlMGI5OGM5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCJAL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvdGhlbWVcIjtcbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIHVzZXI6IElVc2VyO1xufTtcblxuY29uc3QgUHJvZmlsZUhlYWQ6IFJlYWN0LlZGQzxIZWFkZXJQcm9wcz4gPSAoeyB1c2VyIH06IEhlYWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwLTUgdGV4dC1yaWdodCBcIiArIHRoZW1lLnByaW1hcnkuYmd9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1widGV4dC0zeGwgZm9udC1ib2xkIFwiICsgdGhlbWUuY29sb3J9PlxuICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3VzZXIubmFtZX0gLz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHt1c2VyPy5wb3NpdGlvbiAmJiAoXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt0aGVtZS5jb2xvciArIFwiIHRleHQtbGdcIn0+XG4gICAgICAgICAgICAgIHs8SW5wdXRGaWVsZCB2YWx1ZT17dXNlci5wb3NpdGlvbn0gLz59XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVIZWFkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==