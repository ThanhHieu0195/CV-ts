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
/* harmony import */ var _components_Profile_ProfileDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Profile/ProfileDetail */ "./components/Profile/ProfileDetail/index.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/InputField */ "./components/InputField/index.tsx");
/* harmony import */ var _Avt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Avt */ "./components/Avt/index.tsx");
/* harmony import */ var _BasicInfoItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BasicInfoItem */ "./components/Profile/BasicInfoItem/index.tsx");
/* harmony import */ var _MetaInfoItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MetaInfoItem */ "./components/Profile/MetaInfoItem/index.tsx");
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_6__.default, {
              value: user === null || user === void 0 ? void 0 : user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this), (user === null || user === void 0 ? void 0 : user.position) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: theme.color + " text-lg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_6__.default, {
              value: user === null || user === void 0 ? void 0 : user.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-2/3 ".concat(theme.detail.bg),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pt-8 px-8",
              children: user === null || user === void 0 ? void 0 : (_user$detail = user.detail) === null || _user$detail === void 0 ? void 0 : _user$detail.map(function (detail, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
                  data: detail
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail__WEBPACK_IMPORTED_MODULE_5__.default, {
              user: user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail2__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-1/3 ".concat(theme.summary.bg),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-center items-center flex-col",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avt__WEBPACK_IMPORTED_MODULE_7__.default, {
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
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BasicInfoItem__WEBPACK_IMPORTED_MODULE_8__.default, {
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
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MetaInfoItem__WEBPACK_IMPORTED_MODULE_9__.default, {
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
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlciIsInRoZW1lIiwidXNlVGhlbWUiLCJwcmltYXJ5IiwiYmciLCJjb2xvciIsIm5hbWUiLCJwb3NpdGlvbiIsImRldGFpbCIsIm1hcCIsImlkeCIsInN1bW1hcnkiLCJhdnQiLCJiYXNpY0luZm8iLCJiYXNpY0luZm9zIiwidGV4dCIsImljb24iLCJtZXRhSW5mb3MiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVCLE1BQU1DLEtBQUssR0FBR0MscURBQVEsRUFBdEI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0UsOERBQUMsZ0VBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRSxvQkFBb0JELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxFQUFsRDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBRSx3QkFBd0JILEtBQUssQ0FBQ0ksS0FBN0M7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUFZLG1CQUFLLEVBQUVMLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFTTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUlHLENBQUFOLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTyxRQUFOLGtCQUNDO0FBQUkscUJBQVMsRUFBRU4sS0FBSyxDQUFDSSxLQUFOLEdBQWMsVUFBN0I7QUFBQSxt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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS5hZjA1N2IzNDFlYTdlYTgyNTQ0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRzL0RlZmF1bHRcIjtcbmltcG9ydCBQcm9maWxlRGV0YWlsMiBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZURldGFpbDJcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvbGlicy90aGVtZVwiO1xuaW1wb3J0IFByb2ZpbGVEZXRhaWwgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWxcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IEF2dCBmcm9tIFwiLi4vQXZ0XCI7XG5pbXBvcnQgQmFzaWNJbmZvSXRlbSBmcm9tIFwiLi9CYXNpY0luZm9JdGVtXCI7XG5pbXBvcnQgTWV0YUluZm9JdGVtIGZyb20gXCIuL01ldGFJbmZvSXRlbVwiO1xuXG5jb25zdCBQcm9maWxlID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8RGVmYXVsdExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInAtNSB0ZXh0LXJpZ2h0IFwiICsgdGhlbWUucHJpbWFyeS5iZ30+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtcInRleHQtM3hsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yfT5cbiAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3VzZXI/Lm5hbWV9IC8+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge3VzZXI/LnBvc2l0aW9uICYmIChcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dGhlbWUuY29sb3IgKyBcIiB0ZXh0LWxnXCJ9PlxuICAgICAgICAgICAgICAgIHs8SW5wdXRGaWVsZCB2YWx1ZT17dXNlcj8ucG9zaXRpb259IC8+fVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0yLzMgJHt0aGVtZS5kZXRhaWwuYmd9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBweC04XCI+XG4gICAgICAgICAgICAgICAge3VzZXI/LmRldGFpbD8ubWFwKChkZXRhaWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpZHh9IGRhdGE9e2RldGFpbH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxQcm9maWxlRGV0YWlsIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgIDxQcm9maWxlRGV0YWlsMiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMS8zICR7dGhlbWUuc3VtbWFyeS5iZ31gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIDxBdnQgc3JjPXt1c2VyPy5hdnR9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgcC01ICR7dGhlbWUuc3VtbWFyeS5iYXNpY0luZm8uYmd9YH0+XG4gICAgICAgICAgICAgICAgICB7dXNlcj8uYmFzaWNJbmZvcz8ubWFwKCh7IHRleHQsIGljb24gfSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFzaWNJbmZvSXRlbSB0ZXh0PXt0ZXh0fSBpY29uPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIHAtNSBgfT5cbiAgICAgICAgICAgICAgICAgIHt1c2VyPy5tZXRhSW5mb3M/Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWV0YUluZm9JdGVtIGRhdGE9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EZWZhdWx0TGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=