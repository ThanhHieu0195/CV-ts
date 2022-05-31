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
          value: data.heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "w-full h-[1px] ".concat(theme.summary.MetaInfo.line.bg)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "ml-2 hover:text-red-800",
                onClick: handleRemoveItem(idx),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdRemoveCircleOutline, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlTWV0YUluZm8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJkYXRhIiwidGhlbWUiLCJ1c2VUaGVtZSIsInN1bW1hcnkiLCJNZXRhSW5mbyIsImhlYWRpbmciLCJsaW5lIiwiYmciLCJpbmZvcyIsIm1hcCIsInRleHQiLCJpZHgiLCJ2YWx1ZSIsIm9uVXBkYXRlTWV0YUluZm8iLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkSXRlbSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUNwQyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyw4QkFBdUJELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxRQUFkLENBQXVCQyxPQUE5QyxVQURYO0FBQUEsK0JBR0UsOERBQUMsMkRBQUQ7QUFBWSxlQUFLLEVBQUVMLElBQUksQ0FBQ0s7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQ0UsaUJBQVMsMkJBQW9CSixLQUFLLENBQUNFLE9BQU4sQ0FBY0MsUUFBZCxDQUF1QkUsSUFBdkIsQ0FBNEJDLEVBQWhEO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBV0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsa0JBQ0dQLElBQUksQ0FBQ1EsS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsOEJBQ2Q7QUFBYyxxQkFBUyxFQUFDLGdCQUF4QjtBQUFBLG9DQUNFLDhEQUFDLDJEQUFEO0FBQ0UsbUJBQUssRUFBRUQsSUFEVDtBQUVFLDJCQUFhLEVBQUUsdUJBQUNFLEtBQUQ7QUFBQSx1QkFDYkMsZ0JBQWdCLGlCQUFVRixHQUFWLEVBQWhCLENBQWlDQyxLQUFqQyxDQURhO0FBQUE7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FLDhEQUFDLHNFQUFEO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLHlCQURaO0FBRUUsdUJBQU8sRUFBRUUsZ0JBQWdCLENBQUNILEdBQUQsQ0FGM0I7QUFBQSx1Q0FJRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUFTQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBcUJFLDhEQUFDLHNFQUFEO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUMsb0ZBRFo7QUFFRSxtQkFBTyxFQUFFSSxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FoREQ7O0dBQU1oQixJO1VBQ1VHLGlEOzs7S0FEVkgsSTs7QUEwRE4sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBNkI7QUFBQSxNQUExQkosSUFBMEIsU0FBMUJBLElBQTBCO0FBQzVDLHNCQUNFO0FBQUssYUFBUyxlQUFkO0FBQUEsY0FDR0EsSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVTLEdBQU4sQ0FBVSxVQUFDTyxJQUFELEVBQU9MLEdBQVA7QUFBQSwwQkFDVDtBQUFlLGlCQUFTLEVBQUMsd0JBQXpCO0FBQUEsK0JBQ0UsOERBQUMsSUFBRDtBQUFNLGNBQUksRUFBRUs7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUwsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7TUFBTVAsUTtBQVlOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjBmMTQ5MjlkMzg3OTEzMjk2MWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG5pbXBvcnQgeyBJTWV0YUluZm8gfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZEFkZENpcmNsZU91dGxpbmUsIE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgU2hvdWxkRWRpdENvbXBvbmVudCB9IGZyb20gXCJAL2xpYnMvQ29tbW9uQ29tcG9uZW50XCI7XG5cbnR5cGUgSXRlbVByb3BzID0ge1xuICBkYXRhOiBJTWV0YUluZm87XG59O1xuXG5jb25zdCBJdGVtID0gKHsgZGF0YSB9OiBJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgcGItMlwiPlxuICAgICAgICA8aDNcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtYm9sZCAke3RoZW1lLnN1bW1hcnkuTWV0YUluZm8uaGVhZGluZ30gcHItMmB9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17ZGF0YS5oZWFkaW5nfSAvPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLVsxcHhdICR7dGhlbWUuc3VtbWFyeS5NZXRhSW5mby5saW5lLmJnfWB9XG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaWN0XCI+XG4gICAgICAgICAge2RhdGEuaW5mb3MubWFwKCh0ZXh0LCBpZHgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0gY2xhc3NOYW1lPVwicGItNSB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlTWV0YUluZm8oYGluZm9zLiR7aWR4fWApKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBob3Zlcjp0ZXh0LXJlZC04MDBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVtb3ZlSXRlbShpZHgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNZFJlbW92ZUNpcmNsZU91dGxpbmUgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPFNob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbWQgcHktMSBweC0yIGhvdmVyOnRleHQtYmx1ZS04MDAgaG92ZXI6Ym9yZGVyLWJsdWUtODAwIGJvcmRlciBib3JkZXItZ3JheS02MDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRJdGVtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Nob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCB0eXBlIEZ1bmNVcGRhdGVNZXRhSW5mbyA9IChcbiAgaWR4OiBudW1iZXJcbikgPT4gKGZpZWxkTmFtZTogc3RyaW5nIHwgbnVsbCkgPT4gKHZhbDogc3RyaW5nIHwgdW5rbm93bikgPT4gdm9pZDtcblxudHlwZSBNZXRhSW5mb1Byb3BzID0ge1xuICBkYXRhOiBJTWV0YUluZm9bXTtcbn07XG5cbmNvbnN0IE1ldGFJbmZvID0gKHsgZGF0YSB9OiBNZXRhSW5mb1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgcC01IGB9PlxuICAgICAge2RhdGE/Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8SXRlbSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YUluZm87XG4iXSwic291cmNlUm9vdCI6IiJ9