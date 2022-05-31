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
  var user = _ref.user;

  var handleUpdateBasicInfo = function handleUpdateBasicInfo(idx) {
    return function (val) {
      if (lodash__WEBPACK_IMPORTED_MODULE_6___default().isNil(idx)) {
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
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_7__.ShouldEditComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: user === null || user === void 0 ? void 0 : user.avt,
        onInputChange: handleUpdateAvt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileInfo_ProfileBasicInfo__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: user === null || user === void 0 ? void 0 : user.basicInfos,
      onUpdateBasicInfo: handleUpdateBasicInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileInfo_ProfileMetaInfo__WEBPACK_IMPORTED_MODULE_4__.default, {
      data: user === null || user === void 0 ? void 0 : user.metaInfos,
      onUpdateMetaInfo: handleUpdateMetaInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlU3VtbWFyeS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZmlsZVN1bW1hcnkiLCJ1c2VyIiwiaGFuZGxlVXBkYXRlQmFzaWNJbmZvIiwiaWR4IiwidmFsIiwiXyIsIm9uVXBkYXRlVXNlckluZm8iLCJoYW5kbGVVcGRhdGVNZXRhSW5mbyIsImZpZWxkTmFtZSIsImhhbmRsZVVwZGF0ZUF2dCIsImF2dCIsImJhc2ljSW5mb3MiLCJtZXRhSW5mb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBbUM7QUFBQSxNQUFoQ0MsSUFBZ0MsUUFBaENBLElBQWdDOztBQUN4RCxNQUFNQyxxQkFBMEMsR0FDOUMsU0FESUEscUJBQ0osQ0FBQ0MsR0FBRDtBQUFBLFdBQWlCLFVBQUNDLEdBQUQsRUFBa0I7QUFDakMsVUFBSUMsbURBQUEsQ0FBUUYsR0FBUixDQUFKLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0RHLHNCQUFnQixzQkFBZUgsR0FBZixFQUFoQixDQUFzQ0MsR0FBdEM7QUFDRCxLQUxEO0FBQUEsR0FERjs7QUFRQSxNQUFNRyxvQkFBd0MsR0FDNUMsU0FESUEsb0JBQ0osQ0FBQ0osR0FBRDtBQUFBLFdBQVMsVUFBQ0ssU0FBRDtBQUFBLGFBQXVCLFVBQUNKLEdBQUQsRUFBaUI7QUFDL0MsWUFBSUMsbURBQUEsQ0FBUUYsR0FBUixDQUFKLEVBQWtCO0FBQ2hCRywwQkFBZ0IsYUFBaEIsQ0FBOEJGLEdBQTlCO0FBQ0E7QUFDRDs7QUFDREUsd0JBQWdCLHFCQUFjSCxHQUFkLGNBQXFCSyxTQUFyQixFQUFoQixDQUFrREosR0FBbEQ7QUFDRCxPQU5RO0FBQUEsS0FBVDtBQUFBLEdBREY7O0FBU0EsTUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDTCxHQUFELEVBQWlCO0FBQ3ZDRSxvQkFBZ0IsT0FBaEIsQ0FBd0JGLEdBQXhCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLDRCQUNFLDhEQUFDLHlFQUFEO0FBQUEsNkJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxXQUFHLEVBQUVILElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFUztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UsOERBQUMsc0VBQUQ7QUFBQSw2QkFDRSw4REFBQywyREFBRDtBQUFZLGFBQUssRUFBRVQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVTLEdBQXpCO0FBQThCLHFCQUFhLEVBQUVEO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFTRSw4REFBQyw2RUFBRDtBQUNFLFVBQUksRUFBRVIsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVVLFVBRGQ7QUFFRSx1QkFBaUIsRUFBRVQ7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBYUUsOERBQUMsNEVBQUQ7QUFDRSxVQUFJLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFVyxTQURkO0FBRUUsc0JBQWdCLEVBQUVMO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQTFDRDs7S0FBTVAsYztBQTRDTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS41YmM0MGEwMGM0NTM0MzBiYzZmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiQC9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgQXZ0IGZyb20gXCJAL2NvbXBvbmVudHMvQXZ0XCI7XG5pbXBvcnQgUHJvZmlsZUJhc2ljSW5mbywge1xuICBGdW5jVXBkYXRlQmFzaWNJbmZvLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2ZpbGVJbmZvL1Byb2ZpbGVCYXNpY0luZm9cIjtcbmltcG9ydCBNZXRhSW5mbywge1xuICBGdW5jVXBkYXRlTWV0YUluZm8sXG59IGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZmlsZUluZm8vUHJvZmlsZU1ldGFJbmZvXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG4gIFNob3VsZEVkaXRDb21wb25lbnQsXG4gIFNob3VsZFByZXZpZXdDb21wb25lbnQsXG59IGZyb20gXCJAL2xpYnMvQ29tbW9uQ29tcG9uZW50XCI7XG5cbnR5cGUgUHJvZmlsZVN1bW1hcnlQcm9wcyA9IHtcbiAgdXNlcjogSVVzZXI7XG59O1xuXG5jb25zdCBQcm9maWxlU3VtbWFyeSA9ICh7IHVzZXIgfTogUHJvZmlsZVN1bW1hcnlQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVVcGRhdGVCYXNpY0luZm86IEZ1bmNVcGRhdGVCYXNpY0luZm8gPVxuICAgIChpZHg6IG51bWJlcikgPT4gKHZhbDogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKF8uaXNOaWwoaWR4KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvblVwZGF0ZVVzZXJJbmZvKGBiYXNpY0luZm9zLiR7aWR4fWApKHZhbCk7XG4gICAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVNZXRhSW5mbzogRnVuY1VwZGF0ZU1ldGFJbmZvID1cbiAgICAoaWR4KSA9PiAoZmllbGROYW1lOiBzdHJpbmcpID0+ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKF8uaXNOaWwoaWR4KSkge1xuICAgICAgICBvblVwZGF0ZVVzZXJJbmZvKGBtZXRhSW5mb3NgKSh2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvblVwZGF0ZVVzZXJJbmZvKGBtZXRhSW5mb3MuJHtpZHh9LiR7ZmllbGROYW1lfWApKHZhbCk7XG4gICAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVBdnQgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBvblVwZGF0ZVVzZXJJbmZvKGBhdnRgKSh2YWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgPFNob3VsZFByZXZpZXdDb21wb25lbnQ+XG4gICAgICAgIDxBdnQgc3JjPXt1c2VyPy5hdnR9IC8+XG4gICAgICA8L1Nob3VsZFByZXZpZXdDb21wb25lbnQ+XG5cbiAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17dXNlcj8uYXZ0fSBvbklucHV0Q2hhbmdlPXtoYW5kbGVVcGRhdGVBdnR9IC8+XG4gICAgICA8L1Nob3VsZEVkaXRDb21wb25lbnQ+XG5cbiAgICAgIDxQcm9maWxlQmFzaWNJbmZvXG4gICAgICAgIGRhdGE9e3VzZXI/LmJhc2ljSW5mb3N9XG4gICAgICAgIG9uVXBkYXRlQmFzaWNJbmZvPXtoYW5kbGVVcGRhdGVCYXNpY0luZm99XG4gICAgICAvPlxuICAgICAgPE1ldGFJbmZvXG4gICAgICAgIGRhdGE9e3VzZXI/Lm1ldGFJbmZvc31cbiAgICAgICAgb25VcGRhdGVNZXRhSW5mbz17aGFuZGxlVXBkYXRlTWV0YUluZm99XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVN1bW1hcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9