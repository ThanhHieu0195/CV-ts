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
            onClick: handleRemoveItem(idx),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdRemoveCircleOutline, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
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
          lineNumber: 70,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlQmFzaWNJbmZvL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwidGV4dCIsImljb24iLCJvbkl0ZW1DaGFuZ2UiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaGFuZGxlVGV4dENoYW5nZSIsInZhbCIsImhhbmRsZUljb25DaGFuZ2UiLCJzdW1tYXJ5IiwiYmFzaWNJbmZvIiwiYmciLCJib3JkZXIiLCJJbnB1dEZpZWxkVHlwZSIsIlByb2ZpbGVCYXNpY0luZm8iLCJkYXRhIiwibWFwIiwiaWR4IiwiaGFuZGxlSXRlbUNoYW5nZSIsImhhbmRsZVJlbW92ZUl0ZW0iLCJoYW5kbGVBZGRNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBNkM7QUFBQTs7QUFBQSxNQUExQ0MsSUFBMEMsUUFBMUNBLElBQTBDO0FBQUEsTUFBcENDLElBQW9DLFFBQXBDQSxJQUFvQztBQUFBLE1BQTlCQyxZQUE4QixRQUE5QkEsWUFBOEI7QUFDeEQsTUFBTUMsS0FBSyxHQUFHQyxxREFBUSxFQUF0Qjs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEdBQUQsRUFBaUI7QUFDeENKLGdCQUFZLENBQUM7QUFBRUQsVUFBSSxFQUFKQSxJQUFGO0FBQVFELFVBQUksRUFBRU07QUFBZCxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0QsR0FBRCxFQUFpQjtBQUN4Q0osZ0JBQVksQ0FBQztBQUFFRCxVQUFJLEVBQUVLLEdBQVI7QUFBYU4sVUFBSSxFQUFKQTtBQUFiLEtBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsMENBQW1DRyxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QlIsSUFBeEIsQ0FBNkJTLEVBQWhFLGNBQXNFUCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QlIsSUFBeEIsQ0FBNkJVLE1BQW5HLENBRFg7QUFBQSw2QkFHRSw4REFBQyxnREFBRDtBQUNFLFlBQUksRUFBRUMsa0VBRFI7QUFFRSxhQUFLLEVBQUVYLElBRlQ7QUFHRSxxQkFBYSxFQUFFTTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBTSxlQUFTLEVBQUMsV0FBaEI7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFZLGFBQUssRUFBRVAsSUFBbkI7QUFBeUIscUJBQWEsRUFBRUs7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXpCRDs7R0FBTU4sSTtVQUNVSyxpRDs7O0tBRFZMLEk7O0FBbUNOLElBQU1jLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsUUFBOEI7QUFBQTs7QUFBQSxNQUEzQkMsSUFBMkIsU0FBM0JBLElBQTJCO0FBQ3JELE1BQU1YLEtBQUssR0FBR0MscURBQVEsRUFBdEI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsdUJBQWdCRCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkMsRUFBeEMsQ0FBZDtBQUFBLGVBQ0dJLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFQyxHQUFOLENBQVUsaUJBQWlCQyxHQUFqQjtBQUFBLFVBQUdoQixJQUFILFNBQUdBLElBQUg7QUFBQSxVQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSwwQkFDVDtBQUFlLGlCQUFTLEVBQUMsTUFBekI7QUFBQSxnQ0FDRSw4REFBQyxJQUFEO0FBQU0sY0FBSSxFQUFFRCxJQUFaO0FBQWtCLGNBQUksRUFBRUMsSUFBeEI7QUFBOEIsc0JBQVksRUFBRWdCLGdCQUFnQixDQUFDRCxHQUFEO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxzRUFBRDtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBQyx5QkFEWjtBQUVFLG1CQUFPLEVBQUVFLGdCQUFnQixDQUFDRixHQUFELENBRjNCO0FBQUEsbUNBSUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBVUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWLENBREgsZUFjRSw4REFBQyxzRUFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLG9GQURaO0FBRUUsaUJBQU8sRUFBRUcsYUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0E5QkQ7O0lBQU1OLGdCO1VBQ1VULGlEOzs7TUFEVlMsZ0I7QUFnQ04sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjAwODY5NGJhMDlmZjMzMDZlMzc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQmFzaWNJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCwgeyBJbnB1dEZpZWxkVHlwZSB9IGZyb20gXCIuLi8uLi9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IFNob3VsZEVkaXRDb21wb25lbnQgfSBmcm9tIFwiQC9saWJzL0NvbW1vbkNvbXBvbmVudFwiO1xuXG50eXBlIEl0ZW1Qcm9wcyA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpY29uOiBJY29uVHlwZTtcbiAgb25JdGVtQ2hhbmdlOiAodmFsdWUpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJdGVtID0gKHsgdGV4dCwgaWNvbiwgb25JdGVtQ2hhbmdlIH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBvbkl0ZW1DaGFuZ2UoeyBpY29uLCB0ZXh0OiB2YWwgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSWNvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIG9uSXRlbUNoYW5nZSh7IGljb246IHZhbCwgdGV4dCB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsIHAtMiBtci0yIHRleHQteGwgJHt0aGVtZS5zdW1tYXJ5LmJhc2ljSW5mby5pY29uLmJnfSAke3RoZW1lLnN1bW1hcnkuYmFzaWNJbmZvLmljb24uYm9yZGVyfWB9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgdHlwZT17SW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRH1cbiAgICAgICAgICB2YWx1ZT17aWNvbn1cbiAgICAgICAgICBvbklucHV0Q2hhbmdlPXtoYW5kbGVJY29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cbiAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3RleHR9IG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgdHlwZSBGdW5jVXBkYXRlQmFzaWNJbmZvID0gKFxuICBpZHg6IG51bWJlciB8IG51bGxcbikgPT4gKHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5rbm93bikgPT4gdm9pZDtcblxudHlwZSBCYXNpY0luZm9Qcm9wcyA9IHtcbiAgZGF0YTogSUJhc2ljSW5mb1tdO1xufTtcblxuY29uc3QgUHJvZmlsZUJhc2ljSW5mbyA9ICh7IGRhdGEgfTogQmFzaWNJbmZvUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgcC01ICR7dGhlbWUuc3VtbWFyeS5iYXNpY0luZm8uYmd9YH0+XG4gICAgICB7ZGF0YT8ubWFwKCh7IHRleHQsIGljb24gfSwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8SXRlbSB0ZXh0PXt0ZXh0fSBpY29uPXtpY29ufSBvbkl0ZW1DaGFuZ2U9e2hhbmRsZUl0ZW1DaGFuZ2UoaWR4KX0gLz5cbiAgICAgICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBob3Zlcjp0ZXh0LXJlZC04MDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZW1vdmVJdGVtKGlkeCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZFJlbW92ZUNpcmNsZU91dGxpbmUgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIHB5LTEgcHgtMiBob3Zlcjp0ZXh0LWJsdWUtODAwIGhvdmVyOmJvcmRlci1ibHVlLTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZE1vcmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUJhc2ljSW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=