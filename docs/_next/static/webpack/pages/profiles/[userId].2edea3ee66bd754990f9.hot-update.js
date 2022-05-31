self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/ProfileInfo/ProfileBasicInfo/index.tsx":
/*!***********************************************************!*\
  !*** ./components/ProfileInfo/ProfileBasicInfo/index.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/theme */ "./libs/theme.ts");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../InputField */ "./components/InputField/index.tsx");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/CommonComponent */ "./libs/CommonComponent.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/ProfileInfo/ProfileBasicInfo/index.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var Item = function Item(_ref) {
  _s();

  var text = _ref.text,
      icon = _ref.icon,
      onItemChange = _ref.onItemChange;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();

  var handleTextChange = function handleTextChange(val) {
    onItemChange({
      icon: icon,
      text: val
    });
  };

  var handleIconChange = function handleIconChange(val) {
    onItemChange({
      icon: val,
      text: text
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "rounded-full p-2 mr-2 text-xl ".concat(theme.summary.basicInfo.icon.bg, " ").concat(theme.summary.basicInfo.icon.border),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: _InputField__WEBPACK_IMPORTED_MODULE_3__.InputFieldType.ICON_FIELD,
        value: icon,
        onInputChange: handleIconChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "text-base",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
        value: text,
        onInputChange: handleTextChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Item, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme];
});

_c = Item;

var ProfileBasicInfo = function ProfileBasicInfo(_ref2) {
  _s2();

  var data = _ref2.data;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full p-5 ".concat(theme.summary.basicInfo.bg),
    children: [data === null || data === void 0 ? void 0 : data.map(function (_ref3, idx) {
      var text = _ref3.text,
          icon = _ref3.icon;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          text: text,
          icon: icon,
          onItemChange: handleItemChange(idx)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "ml-2 hover:text-red-800",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdRemoveCircleOutline, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "text-md py-1 px-2 hover:text-blue-800 hover:border-blue-800 border border-gray-600",
          onClick: handleAddMore,
          children: "Add"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};

_s2(ProfileBasicInfo, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme];
});

_c2 = ProfileBasicInfo;
/* harmony default export */ __webpack_exports__["default"] = (ProfileBasicInfo);

var _c, _c2;

$RefreshReg$(_c, "Item");
$RefreshReg$(_c2, "ProfileBasicInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlQmFzaWNJbmZvL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwidGV4dCIsImljb24iLCJvbkl0ZW1DaGFuZ2UiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaGFuZGxlVGV4dENoYW5nZSIsInZhbCIsImhhbmRsZUljb25DaGFuZ2UiLCJzdW1tYXJ5IiwiYmFzaWNJbmZvIiwiYmciLCJib3JkZXIiLCJJbnB1dEZpZWxkVHlwZSIsIlByb2ZpbGVCYXNpY0luZm8iLCJkYXRhIiwibWFwIiwiaWR4IiwiaGFuZGxlSXRlbUNoYW5nZSIsImhhbmRsZUFkZE1vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QztBQUFBOztBQUFBLE1BQTFDQyxJQUEwQyxRQUExQ0EsSUFBMEM7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUN4RCxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsR0FBRCxFQUFpQjtBQUN4Q0osZ0JBQVksQ0FBQztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUQsVUFBSSxFQUFFTTtBQUFkLEtBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDRCxHQUFELEVBQWlCO0FBQ3hDSixnQkFBWSxDQUFDO0FBQUVELFVBQUksRUFBRUssR0FBUjtBQUFhTixVQUFJLEVBQUpBO0FBQWIsS0FBRCxDQUFaO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUywwQ0FBbUNHLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxTQUFkLENBQXdCUixJQUF4QixDQUE2QlMsRUFBaEUsY0FBc0VQLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxTQUFkLENBQXdCUixJQUF4QixDQUE2QlUsTUFBbkcsQ0FEWDtBQUFBLDZCQUdFLDhEQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFFQyxrRUFEUjtBQUVFLGFBQUssRUFBRVgsSUFGVDtBQUdFLHFCQUFhLEVBQUVNO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRTtBQUFNLGVBQVMsRUFBQyxXQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQVksYUFBSyxFQUFFUCxJQUFuQjtBQUF5QixxQkFBYSxFQUFFSztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBekJEOztHQUFNTixJO1VBQ1VLLGlEOzs7S0FEVkwsSTs7QUFtQ04sSUFBTWMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixRQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxJQUEyQixTQUEzQkEsSUFBMkI7QUFDckQsTUFBTVgsS0FBSyxHQUFHQyxxREFBUSxFQUF0QjtBQUVBLHNCQUNFO0FBQUssYUFBUyx1QkFBZ0JELEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxTQUFkLENBQXdCQyxFQUF4QyxDQUFkO0FBQUEsZUFDR0ksSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVDLEdBQU4sQ0FBVSxpQkFBaUJDLEdBQWpCO0FBQUEsVUFBR2hCLElBQUgsU0FBR0EsSUFBSDtBQUFBLFVBQVNDLElBQVQsU0FBU0EsSUFBVDtBQUFBLDBCQUNUO0FBQWUsaUJBQVMsRUFBQyxNQUF6QjtBQUFBLGdDQUNFLDhEQUFDLElBQUQ7QUFBTSxjQUFJLEVBQUVELElBQVo7QUFBa0IsY0FBSSxFQUFFQyxJQUF4QjtBQUE4QixzQkFBWSxFQUFFZ0IsZ0JBQWdCLENBQUNELEdBQUQ7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHNFQUFEO0FBQUEsaUNBQ0U7QUFBUSxxQkFBUyxFQUFDLHlCQUFsQjtBQUFBLG1DQUNFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQVVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVixDQURILGVBV0UsOERBQUMsc0VBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyxvRkFEWjtBQUVFLGlCQUFPLEVBQUVFLGFBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBM0JEOztJQUFNTCxnQjtVQUNVVCxpRDs7O01BRFZTLGdCO0FBNkJOLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS4yZWRlYTNlZTY2YmQ3NTQ5OTBmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUJhc2ljSW5mbyB9IGZyb20gXCIuLi8uLi8uLi9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy90aGVtZVwiO1xuaW1wb3J0IElucHV0RmllbGQsIHsgSW5wdXRGaWVsZFR5cGUgfSBmcm9tIFwiLi4vLi4vSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgTWRSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBTaG91bGRFZGl0Q29tcG9uZW50IH0gZnJvbSBcIkAvbGlicy9Db21tb25Db21wb25lbnRcIjtcblxudHlwZSBJdGVtUHJvcHMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgaWNvbjogSWNvblR5cGU7XG4gIG9uSXRlbUNoYW5nZTogKHZhbHVlKSA9PiB2b2lkO1xufTtcblxuY29uc3QgSXRlbSA9ICh7IHRleHQsIGljb24sIG9uSXRlbUNoYW5nZSB9OiBJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgb25JdGVtQ2hhbmdlKHsgaWNvbiwgdGV4dDogdmFsIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUljb25DaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBvbkl0ZW1DaGFuZ2UoeyBpY29uOiB2YWwsIHRleHQgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtZnVsbCBwLTIgbXItMiB0ZXh0LXhsICR7dGhlbWUuc3VtbWFyeS5iYXNpY0luZm8uaWNvbi5iZ30gJHt0aGVtZS5zdW1tYXJ5LmJhc2ljSW5mby5pY29uLmJvcmRlcn1gfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgIHR5cGU9e0lucHV0RmllbGRUeXBlLklDT05fRklFTER9XG4gICAgICAgICAgdmFsdWU9e2ljb259XG4gICAgICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlSWNvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XG4gICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXt0ZXh0fSBvbklucHV0Q2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfSAvPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHR5cGUgRnVuY1VwZGF0ZUJhc2ljSW5mbyA9IChcbiAgaWR4OiBudW1iZXIgfCBudWxsXG4pID0+ICh2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVua25vd24pID0+IHZvaWQ7XG5cbnR5cGUgQmFzaWNJbmZvUHJvcHMgPSB7XG4gIGRhdGE6IElCYXNpY0luZm9bXTtcbn07XG5cbmNvbnN0IFByb2ZpbGVCYXNpY0luZm8gPSAoeyBkYXRhIH06IEJhc2ljSW5mb1Byb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIHAtNSAke3RoZW1lLnN1bW1hcnkuYmFzaWNJbmZvLmJnfWB9PlxuICAgICAge2RhdGE/Lm1hcCgoeyB0ZXh0LCBpY29uIH0sIGlkeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPEl0ZW0gdGV4dD17dGV4dH0gaWNvbj17aWNvbn0gb25JdGVtQ2hhbmdlPXtoYW5kbGVJdGVtQ2hhbmdlKGlkeCl9IC8+XG4gICAgICAgICAgPFNob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTIgaG92ZXI6dGV4dC1yZWQtODAwXCI+XG4gICAgICAgICAgICAgIDxNZFJlbW92ZUNpcmNsZU91dGxpbmUgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIHB5LTEgcHgtMiBob3Zlcjp0ZXh0LWJsdWUtODAwIGhvdmVyOmJvcmRlci1ibHVlLTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZE1vcmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUJhc2ljSW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=