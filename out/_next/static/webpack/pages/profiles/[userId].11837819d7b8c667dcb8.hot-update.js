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

  var user = _ref.user,
      onUpdateUserInfo = _ref.onUpdateUserInfo;
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
          lineNumber: 19,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, _this), (user === null || user === void 0 ? void 0 : user.position) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: theme.color + " text-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_1__.default, {
          value: user.position,
          onInputChange: onUpdateUserInfo("position")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlSGVhZC9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZmlsZUhlYWQiLCJ1c2VyIiwib25VcGRhdGVVc2VySW5mbyIsInRoZW1lIiwidXNlVGhlbWUiLCJwcmltYXJ5IiwiYmciLCJjb2xvciIsIm5hbWUiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBS0EsSUFBTUEsV0FBbUMsR0FBRyxTQUF0Q0EsV0FBc0MsT0FHekI7QUFBQTs7QUFBQSxNQUZqQkMsSUFFaUIsUUFGakJBLElBRWlCO0FBQUEsTUFEakJDLGdCQUNpQixRQURqQkEsZ0JBQ2lCO0FBQ2pCLE1BQU1DLEtBQUssR0FBR0MscURBQVEsRUFBdEI7QUFDQSxzQkFDRTtBQUFBLGNBQ0dILElBQUksaUJBQ0g7QUFBSyxlQUFTLEVBQUUsb0JBQW9CRSxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsRUFBbEQ7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUUsd0JBQXdCSCxLQUFLLENBQUNJLEtBQTdDO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUVOLElBQUksQ0FBQ08sSUFEZDtBQUVFLHVCQUFhLEVBQUVOLGdCQUFnQixDQUFDLE1BQUQ7QUFGakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQU9HLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUSxRQUFOLGtCQUNDO0FBQUksaUJBQVMsRUFBRU4sS0FBSyxDQUFDSSxLQUFOLEdBQWMsVUFBN0I7QUFBQSwrQkFFSSw4REFBQywyREFBRDtBQUNFLGVBQUssRUFBRU4sSUFBSSxDQUFDUSxRQURkO0FBRUUsdUJBQWEsRUFBRVAsZ0JBQWdCLENBQUMsVUFBRDtBQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQTdCRDs7R0FBTUYsVztVQUlVSSxpRDs7O0tBSlZKLFc7QUErQk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZXMvW3VzZXJJZF0uMTE4Mzc4MTlkN2I4YzY2N2RjYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiQC9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG50eXBlIEhlYWRlclByb3BzID0ge1xuICB1c2VyOiBJVXNlcjtcbn07XG5cbmNvbnN0IFByb2ZpbGVIZWFkOiBSZWFjdC5WRkM8SGVhZGVyUHJvcHM+ID0gKHtcbiAgdXNlcixcbiAgb25VcGRhdGVVc2VySW5mbyxcbn06IEhlYWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwLTUgdGV4dC1yaWdodCBcIiArIHRoZW1lLnByaW1hcnkuYmd9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1widGV4dC0zeGwgZm9udC1ib2xkIFwiICsgdGhlbWUuY29sb3J9PlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17b25VcGRhdGVVc2VySW5mbyhcIm5hbWVcIil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAge3VzZXI/LnBvc2l0aW9uICYmIChcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3RoZW1lLmNvbG9yICsgXCIgdGV4dC1sZ1wifT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlci5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uVXBkYXRlVXNlckluZm8oXCJwb3NpdGlvblwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVIZWFkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==