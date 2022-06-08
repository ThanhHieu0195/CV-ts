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
/* harmony import */ var _ProfileBasicInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfileBasicInfo */ "./components/Profile/ProfileBasicInfo/index.tsx");
/* harmony import */ var _ProfileMetaInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProfileMetaInfo */ "./components/Profile/ProfileMetaInfo/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/Profile/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var Profile = function Profile(_ref) {
  _s();

  var _user$basicInfos;

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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail__WEBPACK_IMPORTED_MODULE_5__.default, {
              user: user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileDetail2__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
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
                lineNumber: 34,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileBasicInfo__WEBPACK_IMPORTED_MODULE_8__.default, {
                data: user === null || user === void 0 ? void 0 : user.basicInfos
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-full p-5 ".concat(theme.summary.basicInfo.bg),
                children: user === null || user === void 0 ? void 0 : (_user$basicInfos = user.basicInfos) === null || _user$basicInfos === void 0 ? void 0 : _user$basicInfos.map(function (_ref2, idx) {
                  var text = _ref2.text,
                      icon = _ref2.icon;
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
                      text: text,
                      icon: icon
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 23
                    }, _this)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileMetaInfo__WEBPACK_IMPORTED_MODULE_9__.default, {
                data: user === null || user === void 0 ? void 0 : user.metaInfos
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlciIsInRoZW1lIiwidXNlVGhlbWUiLCJwcmltYXJ5IiwiYmciLCJjb2xvciIsIm5hbWUiLCJwb3NpdGlvbiIsImRldGFpbCIsInN1bW1hcnkiLCJhdnQiLCJiYXNpY0luZm9zIiwiYmFzaWNJbmZvIiwibWFwIiwiaWR4IiwidGV4dCIsImljb24iLCJtZXRhSW5mb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDNUIsTUFBTUMsS0FBSyxHQUFHQyxxREFBUSxFQUF0QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRSw4REFBQyxnRUFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFLG9CQUFvQkQsS0FBSyxDQUFDRSxPQUFOLENBQWNDLEVBQWxEO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFLHdCQUF3QkgsS0FBSyxDQUFDSSxLQUE3QztBQUFBLG1DQUNFLDhEQUFDLDJEQUFEO0FBQVksbUJBQUssRUFBRUwsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBSUcsQ0FBQU4sSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLFFBQU4sa0JBQ0M7QUFBSSxxQkFBUyxFQUFFTixLQUFLLENBQUNJLEtBQU4sR0FBYyxVQUE3QjtBQUFBLG1DQUNHLDhEQUFDLDJEQUFEO0FBQVksbUJBQUssRUFBRUwsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVPO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxrQkFBV04sS0FBSyxDQUFDTyxNQUFOLENBQWFKLEVBQXhCLENBQWQ7QUFBQSxvQ0FDRSw4REFBQyxzRUFBRDtBQUFlLGtCQUFJLEVBQUVKO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsa0JBQVdDLEtBQUssQ0FBQ1EsT0FBTixDQUFjTCxFQUF6QixDQUFkO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLDJDQUFmO0FBQUEsc0NBQ0UsOERBQUMseUNBQUQ7QUFBSyxtQkFBRyxFQUFFSixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLHNEQUFEO0FBQWtCLG9CQUFJLEVBQUVWLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFVztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBSyx5QkFBUyx1QkFBZ0JWLEtBQUssQ0FBQ1EsT0FBTixDQUFjRyxTQUFkLENBQXdCUixFQUF4QyxDQUFkO0FBQUEsMEJBQ0dKLElBREgsYUFDR0EsSUFESCwyQ0FDR0EsSUFBSSxDQUFFVyxVQURULHFEQUNHLGlCQUFrQkUsR0FBbEIsQ0FBc0IsaUJBQWlCQyxHQUFqQjtBQUFBLHNCQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxzQkFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsc0NBQ3JCO0FBQWUsNkJBQVMsRUFBQyxNQUF6QjtBQUFBLDJDQUNFLDhEQUFDLElBQUQ7QUFBTSwwQkFBSSxFQUFFRCxJQUFaO0FBQWtCLDBCQUFJLEVBQUVDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFBVUYsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURxQjtBQUFBLGlCQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFVRSw4REFBQyxxREFBRDtBQUFVLG9CQUFJLEVBQUVkLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFaUI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBeENEOztHQUFNbEIsTztVQUNVRyxpRDs7O0tBRFZILE87QUEwQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZXMvW3VzZXJJZF0uMDVjMTQ2NjZjYjRhNGY0YjgwYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0cy9EZWZhdWx0XCI7XG5pbXBvcnQgUHJvZmlsZURldGFpbDIgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWwyXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2xpYnMvdGhlbWVcIjtcbmltcG9ydCBQcm9maWxlRGV0YWlsIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlRGV0YWlsXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcbmltcG9ydCBBdnQgZnJvbSBcIi4uL0F2dFwiO1xuaW1wb3J0IFByb2ZpbGVCYXNpY0luZm8gZnJvbSBcIi4vUHJvZmlsZUJhc2ljSW5mb1wiO1xuaW1wb3J0IE1ldGFJbmZvIGZyb20gXCIuL1Byb2ZpbGVNZXRhSW5mb1wiO1xuXG5jb25zdCBQcm9maWxlID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8RGVmYXVsdExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInAtNSB0ZXh0LXJpZ2h0IFwiICsgdGhlbWUucHJpbWFyeS5iZ30+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtcInRleHQtM3hsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yfT5cbiAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3VzZXI/Lm5hbWV9IC8+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge3VzZXI/LnBvc2l0aW9uICYmIChcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dGhlbWUuY29sb3IgKyBcIiB0ZXh0LWxnXCJ9PlxuICAgICAgICAgICAgICAgIHs8SW5wdXRGaWVsZCB2YWx1ZT17dXNlcj8ucG9zaXRpb259IC8+fVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0yLzMgJHt0aGVtZS5kZXRhaWwuYmd9YH0+XG4gICAgICAgICAgICAgIDxQcm9maWxlRGV0YWlsIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgIDxQcm9maWxlRGV0YWlsMiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMS8zICR7dGhlbWUuc3VtbWFyeS5iZ31gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIDxBdnQgc3JjPXt1c2VyPy5hdnR9IC8+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVCYXNpY0luZm8gZGF0YT17dXNlcj8uYmFzaWNJbmZvc30gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBwLTUgJHt0aGVtZS5zdW1tYXJ5LmJhc2ljSW5mby5iZ31gfT5cbiAgICAgICAgICAgICAgICAgIHt1c2VyPy5iYXNpY0luZm9zPy5tYXAoKHsgdGV4dCwgaWNvbiB9LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIHRleHQ9e3RleHR9IGljb249e2ljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1ldGFJbmZvIGRhdGE9e3VzZXI/Lm1ldGFJbmZvc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RlZmF1bHRMYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==