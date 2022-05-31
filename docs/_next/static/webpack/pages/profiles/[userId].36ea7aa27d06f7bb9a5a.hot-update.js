self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/ProfileInfo/ProfileSummary/index.tsx":
/*!*********************************************************!*\
  !*** ./components/ProfileInfo/ProfileSummary/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Avt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Avt */ "./components/Avt/index.tsx");
/* harmony import */ var _components_ProfileInfo_ProfileBasicInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProfileInfo/ProfileBasicInfo */ "./components/ProfileInfo/ProfileBasicInfo/index.tsx");
/* harmony import */ var _components_ProfileInfo_ProfileMetaInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProfileInfo/ProfileMetaInfo */ "./components/ProfileInfo/ProfileMetaInfo/index.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/InputField */ "./components/InputField/index.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _libs_CommonComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/libs/CommonComponent */ "./libs/CommonComponent.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/ProfileInfo/ProfileSummary/index.tsx",
    _this = undefined;









var ProfileSummary = function ProfileSummary(_ref) {
  var user = _ref.user,
      onUpdateUserInfo = _ref.onUpdateUserInfo;

  var handleUpdateBasicInfo = function handleUpdateBasicInfo(idx) {
    return function (val) {
      if (lodash__WEBPACK_IMPORTED_MODULE_6___default().isNil(idx)) {
        onUpdateUserInfo("basicInfos")(val);
        return;
      }

      onUpdateUserInfo("basicInfos.".concat(idx))(val);
    };
  };

  var handleUpdateMetaInfo = function handleUpdateMetaInfo(idx) {
    return function (fieldName) {
      return function (val) {
        if (lodash__WEBPACK_IMPORTED_MODULE_6___default().isNil(idx)) {
          onUpdateUserInfo("metaInfos")(val);
          return;
        }

        onUpdateUserInfo("metaInfos.".concat(idx, ".").concat(fieldName))(val);
      };
    };
  };

  var handleUpdateAvt = function handleUpdateAvt(val) {
    onUpdateUserInfo("avt")(val);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center items-center flex-col",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_7__.ShouldPreviewComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Avt__WEBPACK_IMPORTED_MODULE_2__.default, {
        src: user === null || user === void 0 ? void 0 : user.avt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_7__.ShouldEditComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: user === null || user === void 0 ? void 0 : user.avt,
        onInputChange: handleUpdateAvt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileInfo_ProfileBasicInfo__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: user === null || user === void 0 ? void 0 : user.basicInfos,
      onUpdateBasicInfo: handleUpdateBasicInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileInfo_ProfileMetaInfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      data: user === null || user === void 0 ? void 0 : user.metaInfos,
      onUpdateMetaInfo: handleUpdateMetaInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_c = ProfileSummary;
/* harmony default export */ __webpack_exports__["default"] = (ProfileSummary);

var _c;

$RefreshReg$(_c, "ProfileSummary");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlU3VtbWFyeS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZmlsZVN1bW1hcnkiLCJ1c2VyIiwib25VcGRhdGVVc2VySW5mbyIsImhhbmRsZVVwZGF0ZUJhc2ljSW5mbyIsImlkeCIsInZhbCIsIl8iLCJoYW5kbGVVcGRhdGVNZXRhSW5mbyIsImZpZWxkTmFtZSIsImhhbmRsZVVwZGF0ZUF2dCIsImF2dCIsImJhc2ljSW5mb3MiLCJtZXRhSW5mb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBcUQ7QUFBQSxNQUFsREMsSUFBa0QsUUFBbERBLElBQWtEO0FBQUEsTUFBNUNDLGdCQUE0QyxRQUE1Q0EsZ0JBQTRDOztBQUMxRSxNQUFNQyxxQkFBMEMsR0FDOUMsU0FESUEscUJBQ0osQ0FBQ0MsR0FBRDtBQUFBLFdBQWlCLFVBQUNDLEdBQUQsRUFBa0I7QUFDakMsVUFBSUMsbURBQUEsQ0FBUUYsR0FBUixDQUFKLEVBQWtCO0FBQ2hCRix3QkFBZ0IsY0FBaEIsQ0FBK0JHLEdBQS9CO0FBQ0E7QUFDRDs7QUFDREgsc0JBQWdCLHNCQUFlRSxHQUFmLEVBQWhCLENBQXNDQyxHQUF0QztBQUNELEtBTkQ7QUFBQSxHQURGOztBQVNBLE1BQU1FLG9CQUF3QyxHQUM1QyxTQURJQSxvQkFDSixDQUFDSCxHQUFEO0FBQUEsV0FBUyxVQUFDSSxTQUFEO0FBQUEsYUFBdUIsVUFBQ0gsR0FBRCxFQUFpQjtBQUMvQyxZQUFJQyxtREFBQSxDQUFRRixHQUFSLENBQUosRUFBa0I7QUFDaEJGLDBCQUFnQixhQUFoQixDQUE4QkcsR0FBOUI7QUFDQTtBQUNEOztBQUNESCx3QkFBZ0IscUJBQWNFLEdBQWQsY0FBcUJJLFNBQXJCLEVBQWhCLENBQWtESCxHQUFsRDtBQUNELE9BTlE7QUFBQSxLQUFUO0FBQUEsR0FERjs7QUFTQSxNQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLEdBQUQsRUFBaUI7QUFDdkNILG9CQUFnQixPQUFoQixDQUF3QkcsR0FBeEI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsNEJBQ0UsOERBQUMseUVBQUQ7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFLLFdBQUcsRUFBRUosSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVTO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxzRUFBRDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQVksYUFBSyxFQUFFVCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVMsR0FBekI7QUFBOEIscUJBQWEsRUFBRUQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVNFLDhEQUFDLDZFQUFEO0FBQ0UsVUFBSSxFQUFFUixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVUsVUFEZDtBQUVFLHVCQUFpQixFQUFFUjtBQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFhRSw4REFBQyw0RUFBRDtBQUNFLFVBQUksRUFBRUYsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVXLFNBRGQ7QUFFRSxzQkFBZ0IsRUFBRUw7QUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBM0NEOztLQUFNUCxjO0FBNkNOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjM2ZWE3YWEyN2QwNmY3YmI5YTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCJAL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBBdnQgZnJvbSBcIkAvY29tcG9uZW50cy9BdnRcIjtcbmltcG9ydCBQcm9maWxlQmFzaWNJbmZvLCB7XG4gIEZ1bmNVcGRhdGVCYXNpY0luZm8sXG59IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZmlsZUluZm8vUHJvZmlsZUJhc2ljSW5mb1wiO1xuaW1wb3J0IE1ldGFJbmZvLCB7XG4gIEZ1bmNVcGRhdGVNZXRhSW5mbyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlTWV0YUluZm9cIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtcbiAgU2hvdWxkRWRpdENvbXBvbmVudCxcbiAgU2hvdWxkUHJldmlld0NvbXBvbmVudCxcbn0gZnJvbSBcIkAvbGlicy9Db21tb25Db21wb25lbnRcIjtcblxudHlwZSBQcm9maWxlU3VtbWFyeVByb3BzID0ge1xuICB1c2VyOiBJVXNlcjtcbn07XG5cbmNvbnN0IFByb2ZpbGVTdW1tYXJ5ID0gKHsgdXNlciwgb25VcGRhdGVVc2VySW5mbyB9OiBQcm9maWxlU3VtbWFyeVByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUJhc2ljSW5mbzogRnVuY1VwZGF0ZUJhc2ljSW5mbyA9XG4gICAgKGlkeDogbnVtYmVyKSA9PiAodmFsOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAoXy5pc05pbChpZHgpKSB7XG4gICAgICAgIG9uVXBkYXRlVXNlckluZm8oYGJhc2ljSW5mb3NgKSh2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvblVwZGF0ZVVzZXJJbmZvKGBiYXNpY0luZm9zLiR7aWR4fWApKHZhbCk7XG4gICAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVNZXRhSW5mbzogRnVuY1VwZGF0ZU1ldGFJbmZvID1cbiAgICAoaWR4KSA9PiAoZmllbGROYW1lOiBzdHJpbmcpID0+ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKF8uaXNOaWwoaWR4KSkge1xuICAgICAgICBvblVwZGF0ZVVzZXJJbmZvKGBtZXRhSW5mb3NgKSh2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvblVwZGF0ZVVzZXJJbmZvKGBtZXRhSW5mb3MuJHtpZHh9LiR7ZmllbGROYW1lfWApKHZhbCk7XG4gICAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVBdnQgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBvblVwZGF0ZVVzZXJJbmZvKGBhdnRgKSh2YWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgPFNob3VsZFByZXZpZXdDb21wb25lbnQ+XG4gICAgICAgIDxBdnQgc3JjPXt1c2VyPy5hdnR9IC8+XG4gICAgICA8L1Nob3VsZFByZXZpZXdDb21wb25lbnQ+XG5cbiAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17dXNlcj8uYXZ0fSBvbklucHV0Q2hhbmdlPXtoYW5kbGVVcGRhdGVBdnR9IC8+XG4gICAgICA8L1Nob3VsZEVkaXRDb21wb25lbnQ+XG5cbiAgICAgIDxQcm9maWxlQmFzaWNJbmZvXG4gICAgICAgIGRhdGE9e3VzZXI/LmJhc2ljSW5mb3N9XG4gICAgICAgIG9uVXBkYXRlQmFzaWNJbmZvPXtoYW5kbGVVcGRhdGVCYXNpY0luZm99XG4gICAgICAvPlxuICAgICAgPE1ldGFJbmZvXG4gICAgICAgIGRhdGE9e3VzZXI/Lm1ldGFJbmZvc31cbiAgICAgICAgb25VcGRhdGVNZXRhSW5mbz17aGFuZGxlVXBkYXRlTWV0YUluZm99XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVN1bW1hcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9