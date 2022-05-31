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

  var data = _ref.data,
      onUpdateMetaInfo = _ref.onUpdateMetaInfo;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();

  var handleRemoveItem = function handleRemoveItem(idx) {
    return function () {
      data.infos.splice(idx, 1);
      onUpdateMetaInfo("infos")(data.infos);
    };
  };

  var handleAddItem = function handleAddItem() {
    onUpdateMetaInfo("infos.".concat(data.infos.length))("New item ...");
  };

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
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "w-full h-[1px] ".concat(theme.summary.MetaInfo.line.bg)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "ml-2 hover:text-red-800",
                onClick: handleRemoveItem(idx),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdRemoveCircleOutline, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
    children: [data === null || data === void 0 ? void 0 : data.map(function (item, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-2 flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          data: item,
          onUpdateMetaInfo: onUpdateMetaInfo(idx)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_CommonComponent__WEBPACK_IMPORTED_MODULE_4__.ShouldEditComponent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "absolute right-0 text-3xl ml-2 hover:text-red-500 hover:font-bold",
        onClick: handleAddItem,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdAddCircleOutline, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlTWV0YUluZm8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJkYXRhIiwib25VcGRhdGVNZXRhSW5mbyIsInRoZW1lIiwidXNlVGhlbWUiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaWR4IiwiaW5mb3MiLCJzcGxpY2UiLCJoYW5kbGVBZGRJdGVtIiwibGVuZ3RoIiwic3VtbWFyeSIsIk1ldGFJbmZvIiwiaGVhZGluZyIsInZhbHVlIiwibGluZSIsImJnIiwibWFwIiwidGV4dCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLElBQXdDLFFBQXhDQSxJQUF3QztBQUFBLE1BQWxDQyxnQkFBa0MsUUFBbENBLGdCQUFrQztBQUN0RCxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsR0FBRDtBQUFBLFdBQWlCLFlBQU07QUFDOUNMLFVBQUksQ0FBQ00sS0FBTCxDQUFXQyxNQUFYLENBQWtCRixHQUFsQixFQUF1QixDQUF2QjtBQUNBSixzQkFBZ0IsU0FBaEIsQ0FBMEJELElBQUksQ0FBQ00sS0FBL0I7QUFDRCxLQUh3QjtBQUFBLEdBQXpCOztBQUlBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlAsb0JBQWdCLGlCQUFVRCxJQUFJLENBQUNNLEtBQUwsQ0FBV0csTUFBckIsRUFBaEIsQ0FBK0MsY0FBL0M7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsOEJBQXVCUCxL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QSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBbkJEOztNQUFNRyxRO0FBcUJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmMxMTM5MWMxMDYzN2ViNzIxMThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9saWJzL3RoZW1lXCI7XG5pbXBvcnQgeyBJTWV0YUluZm8gfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBNZEFkZENpcmNsZU91dGxpbmUsIE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgU2hvdWxkRWRpdENvbXBvbmVudCB9IGZyb20gXCJAL2xpYnMvQ29tbW9uQ29tcG9uZW50XCI7XG5cbnR5cGUgSXRlbVByb3BzID0ge1xuICBkYXRhOiBJTWV0YUluZm87XG4gIG9uVXBkYXRlTWV0YUluZm86IChmaWVsZE5hbWU6IHN0cmluZykgPT4gKHZhbDogc3RyaW5nIHwgdW5rbm93bikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEl0ZW0gPSAoeyBkYXRhLCBvblVwZGF0ZU1ldGFJbmZvIH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoaWR4OiBudW1iZXIpID0+ICgpID0+IHtcbiAgICBkYXRhLmluZm9zLnNwbGljZShpZHgsIDEpO1xuICAgIG9uVXBkYXRlTWV0YUluZm8oYGluZm9zYCkoZGF0YS5pbmZvcyk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFkZEl0ZW0gPSAoKSA9PiB7XG4gICAgb25VcGRhdGVNZXRhSW5mbyhgaW5mb3MuJHtkYXRhLmluZm9zLmxlbmd0aH1gKShcIk5ldyBpdGVtIC4uLlwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHBiLTJcIj5cbiAgICAgICAgPGgzXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1sZyBmb250LWJvbGQgJHt0aGVtZS5zdW1tYXJ5Lk1ldGFJbmZvLmhlYWRpbmd9IHByLTJgfVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRpbmd9XG4gICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgb25VcGRhdGVNZXRhSW5mbyhcImhlYWRpbmdcIikodmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1bMXB4XSAke3RoZW1lLnN1bW1hcnkuTWV0YUluZm8ubGluZS5iZ31gfVxuICAgICAgICA+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTVcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGljdFwiPlxuICAgICAgICAgIHtkYXRhLmluZm9zLm1hcCgodGV4dCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cInBiLTUgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZU1ldGFJbmZvKGBpbmZvcy4ke2lkeH1gKSh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgaG92ZXI6dGV4dC1yZWQtODAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUl0ZW0oaWR4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TWRSZW1vdmVDaXJjbGVPdXRsaW5lIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxTaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIHB5LTEgcHgtMiBob3Zlcjp0ZXh0LWJsdWUtODAwIGhvdmVyOmJvcmRlci1ibHVlLTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkSXRlbX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaG91bGRFZGl0Q29tcG9uZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgdHlwZSBGdW5jVXBkYXRlTWV0YUluZm8gPSAoXG4gIGlkeDogbnVtYmVyXG4pID0+IChmaWVsZE5hbWU6IHN0cmluZyB8IG51bGwpID0+ICh2YWw6IHN0cmluZyB8IHVua25vd24pID0+IHZvaWQ7XG5cbnR5cGUgTWV0YUluZm9Qcm9wcyA9IHtcbiAgZGF0YTogSU1ldGFJbmZvW107XG59O1xuXG5jb25zdCBNZXRhSW5mbyA9ICh7IGRhdGEgfTogTWV0YUluZm9Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIHAtNSBgfT5cbiAgICAgIHtkYXRhPy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPEl0ZW0gZGF0YT17aXRlbX0gb25VcGRhdGVNZXRhSW5mbz17b25VcGRhdGVNZXRhSW5mbyhpZHgpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdGV4dC0zeGwgbWwtMiBob3Zlcjp0ZXh0LXJlZC01MDAgaG92ZXI6Zm9udC1ib2xkXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRJdGVtfVxuICAgICAgICA+XG4gICAgICAgICAgPE1kQWRkQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==