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
            }, _this), user.experience && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail2__WEBPACK_IMPORTED_MODULE_3__.default, {
              detail: user.experience
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 35
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlciIsInRoZW1lIiwidXNlVGhlbWUiLCJwcmltYXJ5IiwiYmciLCJjb2xvciIsIm5hbWUiLCJwb3NpdGlvbiIsImRldGFpbCIsIm1hcCIsImlkeCIsImV4cGVyaWVuY2UiLCJzdW1tYXJ5IiwiYXZ0IiwiYmFzaWNJbmZvIiwiYmFzaWNJbmZvcyIsInRleHQiLCJpY29uIiwibWV0YUluZm9zIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM1QixNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFLDhEQUFDLGdFQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUUsb0JBQW9CRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsRUFBbEQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUUsd0JBQXdCSCxLQUFLLENBQUNJLEtBQTdDO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBWSxtQkFBSyxFQUFFTCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRU07QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFJRyxDQUFBTixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU8sUUFBTixrQkFDQztBQUFJLHFCQUFTLEVBQUVOLEtBQUssQ0FBQ0ksS0FBTixHQUFj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T0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS4yOTU0MjViOWIxNjhjNTNlNTM1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRzL0RlZmF1bHRcIjtcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlRGV0YWlsMlwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQC9saWJzL3RoZW1lXCI7XG5pbXBvcnQgUHJvZmlsZURldGFpbCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZURldGFpbFwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgQXZ0IGZyb20gXCIuLi9BdnRcIjtcbmltcG9ydCBCYXNpY0luZm9JdGVtIGZyb20gXCIuL0Jhc2ljSW5mb0l0ZW1cIjtcbmltcG9ydCBNZXRhSW5mb0l0ZW0gZnJvbSBcIi4vTWV0YUluZm9JdGVtXCI7XG5pbXBvcnQgUHJvZmlsZURldGFpbEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWxcIjtcblxuY29uc3QgUHJvZmlsZSA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPERlZmF1bHRMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwLTUgdGV4dC1yaWdodCBcIiArIHRoZW1lLnByaW1hcnkuYmd9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17XCJ0ZXh0LTN4bCBmb250LWJvbGQgXCIgKyB0aGVtZS5jb2xvcn0+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXt1c2VyPy5uYW1lfSAvPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIHt1c2VyPy5wb3NpdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3RoZW1lLmNvbG9yICsgXCIgdGV4dC1sZ1wifT5cbiAgICAgICAgICAgICAgICB7PElucHV0RmllbGQgdmFsdWU9e3VzZXI/LnBvc2l0aW9ufSAvPn1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMi8zICR7dGhlbWUuZGV0YWlsLmJnfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTggcHgtOFwiPlxuICAgICAgICAgICAgICAgIHt1c2VyPy5kZXRhaWw/Lm1hcCgoZGV0YWlsLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlRGV0YWlsSXRlbSBrZXk9e2lkeH0gZGF0YT17ZGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3VzZXIuZXhwZXJpZW5jZSAmJiA8RXhwZXJpZW5jZSBkZXRhaWw9e3VzZXIuZXhwZXJpZW5jZX0gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xLzMgJHt0aGVtZS5zdW1tYXJ5LmJnfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPEF2dCBzcmM9e3VzZXI/LmF2dH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBwLTUgJHt0aGVtZS5zdW1tYXJ5LmJhc2ljSW5mby5iZ31gfT5cbiAgICAgICAgICAgICAgICAgIHt1c2VyPy5iYXNpY0luZm9zPy5tYXAoKHsgdGV4dCwgaWNvbiB9LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY0luZm9JdGVtIHRleHQ9e3RleHR9IGljb249e2ljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgcC01IGB9PlxuICAgICAgICAgICAgICAgICAge3VzZXI/Lm1ldGFJbmZvcz8ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZXRhSW5mb0l0ZW0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RlZmF1bHRMYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==