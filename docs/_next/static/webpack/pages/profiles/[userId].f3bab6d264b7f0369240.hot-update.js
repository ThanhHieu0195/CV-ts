self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/Profile/index.tsx":
/*!**************************************!*\
  !*** ./components/Profile/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layouts_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layouts/Default */ "./components/Layouts/Default.tsx");
/* harmony import */ var _components_Profile_ProfileDetail2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Profile/ProfileDetail2 */ "./components/Profile/ProfileDetail2/index.tsx");
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/theme */ "./libs/theme.ts");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/InputField */ "./components/InputField/index.tsx");
/* harmony import */ var _Avt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Avt */ "./components/Avt/index.tsx");
/* harmony import */ var _BasicInfoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BasicInfoItem */ "./components/Profile/BasicInfoItem/index.tsx");
/* harmony import */ var _MetaInfoItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MetaInfoItem */ "./components/Profile/MetaInfoItem/index.tsx");
/* harmony import */ var _components_Profile_ProfileDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Profile/ProfileDetail */ "./components/Profile/ProfileDetail/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/Profile/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var Profile = function Profile(_ref) {
  _s();

  var _user$detail, _user$basicInfos, _user$metaInfos;

  var user = _ref.user;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_Default__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-5 text-right " + theme.primary.bg,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl font-bold " + theme.color,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.default, {
              value: user === null || user === void 0 ? void 0 : user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this), (user === null || user === void 0 ? void 0 : user.position) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: theme.color + " text-lg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.default, {
              value: user === null || user === void 0 ? void 0 : user.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-2/3 ".concat(theme.detail.bg),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pt-8 px-8",
              children: user === null || user === void 0 ? void 0 : (_user$detail = user.detail) === null || _user$detail === void 0 ? void 0 : _user$detail.map(function (detail, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail__WEBPACK_IMPORTED_MODULE_9__.default, {
                  data: detail
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail2__WEBPACK_IMPORTED_MODULE_3__.default, {
              detail: user.experience
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-1/3 ".concat(theme.summary.bg),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-center items-center flex-col",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avt__WEBPACK_IMPORTED_MODULE_6__.default, {
                src: user === null || user === void 0 ? void 0 : user.avt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-full p-5 ".concat(theme.summary.basicInfo.bg),
                children: user === null || user === void 0 ? void 0 : (_user$basicInfos = user.basicInfos) === null || _user$basicInfos === void 0 ? void 0 : _user$basicInfos.map(function (_ref2, idx) {
                  var text = _ref2.text,
                      icon = _ref2.icon;
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BasicInfoItem__WEBPACK_IMPORTED_MODULE_7__.default, {
                      text: text,
                      icon: icon
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 23
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-full p-5 ",
                children: user === null || user === void 0 ? void 0 : (_user$metaInfos = user.metaInfos) === null || _user$metaInfos === void 0 ? void 0 : _user$metaInfos.map(function (item, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "mb-2 flex items-center",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MetaInfoItem__WEBPACK_IMPORTED_MODULE_8__.default, {
                      data: item
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Profile, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlciIsInRoZW1lIiwidXNlVGhlbWUiLCJwcmltYXJ5IiwiYmciLCJjb2xvciIsIm5hbWUiLCJwb3NpdGlvbiIsImRldGFpbCIsIm1hcCIsImlkeCIsImV4cGVyaWVuY2UiLCJzdW1tYXJ5IiwiYXZ0IiwiYmFzaWNJbmZvIiwiYmFzaWNJbmZvcyIsInRleHQiLCJpY29uIiwibWV0YUluZm9zIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM1QixNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFLDhEQUFDLGdFQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUUsb0JBQW9CRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsRUFBbEQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUUsd0JBQXdCSCxLQUFLLENBQUNJLEtBQTdDO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBWSxtQkFBSyxFQUFFTCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRU07QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFJRyxDQUFBTixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU8sUUFBTixrQkFDQztBQUFJLHFCQUFTLEVBQUVOLEtBQUssQ0FBQ0ksS0FBTixHQUFj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YWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmYzYmFiNmQyNjRiN2YwMzY5MjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dHMvRGVmYXVsdFwiO1xuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWwyXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2xpYnMvdGhlbWVcIjtcbmltcG9ydCBQcm9maWxlRGV0YWlsIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlRGV0YWlsXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcbmltcG9ydCBBdnQgZnJvbSBcIi4uL0F2dFwiO1xuaW1wb3J0IEJhc2ljSW5mb0l0ZW0gZnJvbSBcIi4vQmFzaWNJbmZvSXRlbVwiO1xuaW1wb3J0IE1ldGFJbmZvSXRlbSBmcm9tIFwiLi9NZXRhSW5mb0l0ZW1cIjtcbmltcG9ydCBQcm9maWxlRGV0YWlsSXRlbSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZURldGFpbFwiO1xuXG5jb25zdCBQcm9maWxlID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8RGVmYXVsdExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInAtNSB0ZXh0LXJpZ2h0IFwiICsgdGhlbWUucHJpbWFyeS5iZ30+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtcInRleHQtM3hsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yfT5cbiAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3VzZXI/Lm5hbWV9IC8+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge3VzZXI/LnBvc2l0aW9uICYmIChcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dGhlbWUuY29sb3IgKyBcIiB0ZXh0LWxnXCJ9PlxuICAgICAgICAgICAgICAgIHs8SW5wdXRGaWVsZCB2YWx1ZT17dXNlcj8ucG9zaXRpb259IC8+fVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0yLzMgJHt0aGVtZS5kZXRhaWwuYmd9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBweC04XCI+XG4gICAgICAgICAgICAgICAge3VzZXI/LmRldGFpbD8ubWFwKChkZXRhaWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFByb2ZpbGVEZXRhaWxJdGVtIGtleT17aWR4fSBkYXRhPXtkZXRhaWx9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RXhwZXJpZW5jZSBkZXRhaWw9e3VzZXIuZXhwZXJpZW5jZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTEvMyAke3RoZW1lLnN1bW1hcnkuYmd9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8QXZ0IHNyYz17dXNlcj8uYXZ0fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIHAtNSAke3RoZW1lLnN1bW1hcnkuYmFzaWNJbmZvLmJnfWB9PlxuICAgICAgICAgICAgICAgICAge3VzZXI/LmJhc2ljSW5mb3M/Lm1hcCgoeyB0ZXh0LCBpY29uIH0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhc2ljSW5mb0l0ZW0gdGV4dD17dGV4dH0gaWNvbj17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBwLTUgYH0+XG4gICAgICAgICAgICAgICAgICB7dXNlcj8ubWV0YUluZm9zPy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGFJbmZvSXRlbSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGVmYXVsdExheW91dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9