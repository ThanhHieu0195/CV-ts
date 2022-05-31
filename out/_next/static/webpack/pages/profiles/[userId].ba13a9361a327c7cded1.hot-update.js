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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlQmFzaWNJbmZvL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwidGV4dCIsImljb24iLCJvbkl0ZW1DaGFuZ2UiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaGFuZGxlVGV4dENoYW5nZSIsInZhbCIsImhhbmRsZUljb25DaGFuZ2UiLCJzdW1tYXJ5IiwiYmFzaWNJbmZvIiwiYmciLCJib3JkZXIiLCJJbnB1dEZpZWxkVHlwZSIsIlByb2ZpbGVCYXNpY0luZm8iLCJkYXRhIiwibWFwIiwiaWR4IiwiaGFuZGxlSXRlbUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLElBQTBDLFFBQTFDQSxJQUEwQztBQUFBLE1BQXBDQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsWUFBOEIsUUFBOUJBLFlBQThCO0FBQ3hELE1BQU1DLEtBQUssR0FBR0MscURBQVEsRUFBdEI7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxHQUFELEVBQWlCO0FBQ3hDSixnQkFBWSxDQUFDO0FBQUVELFVBQUksRUFBSkEsSUFBRjtBQUFRRCxVQUFJLEVBQUVNO0FBQWQsS0FBRCxDQUFaO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNELEdBQUQsRUFBaUI7QUFDeENKLGdCQUFZLENBQUM7QUFBRUQsVUFBSSxFQUFFSyxHQUFSO0FBQWFOLFVBQUksRUFBSkE7QUFBYixLQUFELENBQVo7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLDBDQUFtQ0csS0FBSyxDQUFDSyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JSLElBQXhCLENBQTZCUyxFQUFoRSxjQUFzRVAsS0FBSyxDQUFDSyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JSLElBQXhCLENBQTZCVSxNQUFuRyxDQURYO0FBQUEsNkJBR0UsOERBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUVDLGtFQURSO0FBRUUsYUFBSyxFQUFFWCxJQUZUO0FBR0UscUJBQWEsRUFBRU07QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFO0FBQU0sZUFBUyxFQUFDLFdBQWhCO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxhQUFLLEVBQUVQLElBQW5CO0FBQXlCLHFCQUFhLEVBQUVLO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0F6QkQ7O0dBQU1OLEk7VUFDVUssaUQ7OztLQURWTCxJOztBQW1DTixJQUFNYyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLFFBQThCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFNBQTNCQSxJQUEyQjtBQUNyRCxNQUFNWCxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLHVCQUFnQkQsS0FBSyxDQUFDSyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLEVBQXhDLENBQWQ7QUFBQSxlQUNHSSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUMsR0FBTixDQUFVLGlCQUFpQkMsR0FBakI7QUFBQSxVQUFHaEIsSUFBSCxTQUFHQSxJQUFIO0FBQUEsVUFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsMEJBQ1Q7QUFBZSxpQkFBUyxFQUFDLE1BQXpCO0FBQUEsZ0NBQ0UsOERBQUMsSUFBRDtBQUFNLGNBQUksRUFBRUQsSUFBWjtBQUFrQixjQUFJLEVBQUVDLElBQXhCO0FBQThCLHNCQUFZLEVBQUVnQixnQkFBZ0IsQ0FBQ0QsR0FBRDtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsc0VBQUQ7QUFBQSxpQ0FDRTtBQUFRLHFCQUFTLEVBQUMseUJBQWxCO0FBQUEsbUNBQ0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBVUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWLENBREgsZUFXRSw4REFBQyxzRUFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFBUSxtQkFBUyxFQUFDLG9GQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F4QkQ7O0lBQU1ILGdCO1VBQ1VULGlEOzs7TUFEVlMsZ0I7QUEwQk4sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmJhMTNhOTM2MWEzMjdjN2NkZWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQmFzaWNJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCwgeyBJbnB1dEZpZWxkVHlwZSB9IGZyb20gXCIuLi8uLi9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IFNob3VsZEVkaXRDb21wb25lbnQgfSBmcm9tIFwiQC9saWJzL0NvbW1vbkNvbXBvbmVudFwiO1xuXG50eXBlIEl0ZW1Qcm9wcyA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpY29uOiBJY29uVHlwZTtcbiAgb25JdGVtQ2hhbmdlOiAodmFsdWUpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJdGVtID0gKHsgdGV4dCwgaWNvbiwgb25JdGVtQ2hhbmdlIH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBvbkl0ZW1DaGFuZ2UoeyBpY29uLCB0ZXh0OiB2YWwgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSWNvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIG9uSXRlbUNoYW5nZSh7IGljb246IHZhbCwgdGV4dCB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIHAtMiBtci0yIHRleHQteGwgJHt0aGVtZS5zdW1tYXJ5LmJhc2ljSW5mby5pY29uLmJnfSAke3RoZW1lLnN1bW1hcnkuYmFzaWNJbmZvLmljb24uYm9yZGVyfWB9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgdHlwZT17SW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRH1cbiAgICAgICAgICB2YWx1ZT17aWNvbn1cbiAgICAgICAgICBvbklucHV0Q2hhbmdlPXtoYW5kbGVJY29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cbiAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3RleHR9IG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgdHlwZSBGdW5jVXBkYXRlQmFzaWNJbmZvID0gKFxuICBpZHg6IG51bWJlciB8IG51bGxcbikgPT4gKHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5rbm93bikgPT4gdm9pZDtcblxudHlwZSBCYXNpY0luZm9Qcm9wcyA9IHtcbiAgZGF0YTogSUJhc2ljSW5mb1tdO1xufTtcblxuY29uc3QgUHJvZmlsZUJhc2ljSW5mbyA9ICh7IGRhdGEgfTogQmFzaWNJbmZvUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgcC01ICR7dGhlbWUuc3VtbWFyeS5iYXNpY0luZm8uYmd9YH0+XG4gICAgICB7ZGF0YT8ubWFwKCh7IHRleHQsIGljb24gfSwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8SXRlbSB0ZXh0PXt0ZXh0fSBpY29uPXtpY29ufSBvbkl0ZW1DaGFuZ2U9e2hhbmRsZUl0ZW1DaGFuZ2UoaWR4KX0gLz5cbiAgICAgICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMiBob3Zlcjp0ZXh0LXJlZC04MDBcIj5cbiAgICAgICAgICAgICAgPE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPFNob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1tZCBweS0xIHB4LTIgaG92ZXI6dGV4dC1ibHVlLTgwMCBob3Zlcjpib3JkZXItYmx1ZS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUJhc2ljSW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=