self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/ProfileInfo/ProfileMetaInfo/index.tsx":
/*!**********************************************************!*\
  !*** ./components/ProfileInfo/ProfileMetaInfo/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/theme */ "./libs/theme.ts");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/InputField */ "./components/InputField/index.tsx");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/CommonComponent */ "./libs/CommonComponent.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/ProfileInfo/ProfileMetaInfo/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Item = function Item(_ref) {
  _s();

  var data = _ref.data;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full flex items-center pb-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-lg font-bold ".concat(theme.summary.MetaInfo.heading, " pr-2"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.heading,
          onInputChange: function onInputChange(value) {
            return onUpdateMetaInfo("heading")(value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "w-full h-[1px] ".concat(theme.summary.MetaInfo.line.bg)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-dict",
        children: data.infos.map(function (text, idx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "pb-5 text-base",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
              value: text,
              onInputChange: function onInputChange(value) {
                return onUpdateMetaInfo("infos.".concat(idx))(value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "ml-2 hover:text-red-800",
                onClick: handleRemoveItem(idx),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdRemoveCircleOutline, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "my-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "text-md py-1 px-2 hover:text-blue-800 hover:border-blue-800 border border-gray-600",
            onClick: handleAddItem,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Item, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme];
});

_c = Item;

var MetaInfo = function MetaInfo(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full p-5 ",
    children: data === null || data === void 0 ? void 0 : data.map(function (item, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-2 flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          data: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, _this);
};

_c2 = MetaInfo;
/* harmony default export */ __webpack_exports__["default"] = (MetaInfo);

var _c, _c2;

$RefreshReg$(_c, "Item");
$RefreshReg$(_c2, "MetaInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlTWV0YUluZm8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJkYXRhIiwidGhlbWUiLCJ1c2VUaGVtZSIsInN1bW1hcnkiLCJNZXRhSW5mbyIsImhlYWRpbmciLCJ2YWx1ZSIsIm9uVXBkYXRlTWV0YUluZm8iLCJsaW5lIiwiYmciLCJpbmZvcyIsIm1hcCIsInRleHQiLCJpZHgiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkSXRlbSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUNwQyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyw4QkFBdUJELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxRQUFkLENBQXVCQyxPQUE5QyxVQURYO0FBQUEsK0JBR0UsOERBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUVMLElBQUksQ0FBQ0ssT0FEZDtBQUVFLHVCQUFhLEVBQUUsdUJBQUNDLEtBQUQ7QUFBQSxtQkFDYkMsZ0JBQWdCLENBQUMsU0FBRCxDQUFoQixDQUE0QkQsS0FBNUIsQ0FEYTtBQUFBO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRTtBQUNFLGlCQUFTLDJCQUFvQkwsS0FBSyxDQUFDRSxPQUFOLENBQWNDLFFBQWQsQ0FBdUJJLElBQXZCLENBQTRCQyxFQUFoRDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdCRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQSxrQkFDR1QsSUFBSSxDQUFDVSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSw4QkFDZDtBQUFjLHFCQUFTLEVBQUMsZ0JBQXhCO0FBQUEsb0NBQ0UsOERBQUMsMkRBQUQ7QUFDRSxtQkFBSyxFQUFFRCxJQURUO0FBRUUsMkJBQWEsRUFBRSx1QkFBQ04sS0FBRDtBQUFBLHVCQUNiQyxnQkFBZ0IsaUJBQVVNLEdBQVYsRUFBaEIsQ0FBaUNQLEtBQWpDLENBRGE7QUFBQTtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0UsOERBQUMsc0VBQUQ7QUFBQSxxQ0FDRTtBQUNFLHlCQUFTLEVBQUMseUJBRFo7QUFFRSx1QkFBTyxFQUFFUSxnQkFBZ0IsQ0FBQ0QsR0FBRCxDQUYzQjtBQUFBLHVDQUlFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBLGFBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkUsOERBQUMsc0VBQUQ7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBQyxvRkFEWjtBQUVFLG1CQUFPLEVBQUVFLGFBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtREQsQ0F0REQ7O0dBQU1oQixJO1VBQ1VHLGlEOzs7S0FEVkgsSTs7QUFnRU4sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBNkI7QUFBQSxNQUExQkosSUFBMEIsU0FBMUJBLElBQTBCO0FBQzVDLHNCQUNFO0FBQUssYUFBUyxlQUFkO0FBQUEsY0FDR0EsSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVXLEdBQU4sQ0FBVSxVQUFDSyxJQUFELEVBQU9ILEdBQVA7QUFBQSwwQkFDVDtBQUFlLGlCQUFTLEVBQUMsd0JBQXpCO0FBQUEsK0JBQ0UsOERBQUMsSUFBRDtBQUFNLGNBQUksRUFBRUc7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUgsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7TUFBTVQsUTtBQVlOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmFhNTA1YThmMDc4MjdkYmEzMzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG5pbXBvcnQgeyBJTWV0YUluZm8gfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZEFkZENpcmNsZU91dGxpbmUsIE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgU2hvdWxkRWRpdENvbXBvbmVudCB9IGZyb20gXCJAL2xpYnMvQ29tbW9uQ29tcG9uZW50XCI7XG5cbnR5cGUgSXRlbVByb3BzID0ge1xuICBkYXRhOiBJTWV0YUluZm87XG59O1xuXG5jb25zdCBJdGVtID0gKHsgZGF0YSB9OiBJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBwYi0yXCI+XG4gICAgICAgIDxoM1xuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtbGcgZm9udC1ib2xkICR7dGhlbWUuc3VtbWFyeS5NZXRhSW5mby5oZWFkaW5nfSBwci0yYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkaW5nfVxuICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgIG9uVXBkYXRlTWV0YUluZm8oXCJoZWFkaW5nXCIpKHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtWzFweF0gJHt0aGVtZS5zdW1tYXJ5Lk1ldGFJbmZvLmxpbmUuYmd9YH1cbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpY3RcIj5cbiAgICAgICAgICB7ZGF0YS5pbmZvcy5tYXAoKHRleHQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJwYi01IHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgb25VcGRhdGVNZXRhSW5mbyhgaW5mb3MuJHtpZHh9YCkodmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGhvdmVyOnRleHQtcmVkLTgwMFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZW1vdmVJdGVtKGlkeCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1Nob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBweS0xIHB4LTIgaG92ZXI6dGV4dC1ibHVlLTgwMCBob3Zlcjpib3JkZXItYmx1ZS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEl0ZW19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHR5cGUgRnVuY1VwZGF0ZU1ldGFJbmZvID0gKFxuICBpZHg6IG51bWJlclxuKSA9PiAoZmllbGROYW1lOiBzdHJpbmcgfCBudWxsKSA9PiAodmFsOiBzdHJpbmcgfCB1bmtub3duKSA9PiB2b2lkO1xuXG50eXBlIE1ldGFJbmZvUHJvcHMgPSB7XG4gIGRhdGE6IElNZXRhSW5mb1tdO1xufTtcblxuY29uc3QgTWV0YUluZm8gPSAoeyBkYXRhIH06IE1ldGFJbmZvUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBwLTUgYH0+XG4gICAgICB7ZGF0YT8ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxJdGVtIGRhdGE9e2l0ZW19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhSW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=