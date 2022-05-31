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
    children: data === null || data === void 0 ? void 0 : data.map(function (item, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-2 flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          data: item
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
    })
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlTWV0YUluZm8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJkYXRhIiwib25VcGRhdGVNZXRhSW5mbyIsInRoZW1lIiwidXNlVGhlbWUiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaWR4IiwiaW5mb3MiLCJzcGxpY2UiLCJoYW5kbGVBZGRJdGVtIiwibGVuZ3RoIiwic3VtbWFyeSIsIk1ldGFJbmZvIiwiaGVhZGluZyIsInZhbHVlIiwibGluZSIsImJnIiwibWFwIiwidGV4dCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLElBQXdDLFFBQXhDQSxJQUF3QztBQUFBLE1BQWxDQyxnQkFBa0MsUUFBbENBLGdCQUFrQztBQUN0RCxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsR0FBRDtBQUFBLFdBQWlCLFlBQU07QUFDOUNMLFVBQUksQ0FBQ00sS0FBTCxDQUFXQyxNQUFYLENBQWtCRixHQUFsQixFQUF1QixDQUF2QjtBQUNBSixzQkFBZ0IsU0FBaEIsQ0FBMEJELElBQUksQ0FBQ00sS0FBL0I7QUFDRCxLQUh3QjtBQUFBLEdBQXpCOztBQUlBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlAsb0JBQWdCLGlCQUFVRCxJQUFJLENBQUNNLEtBQUwsQ0FBV0csTUFBckIsRUFBaEIsQ0FBK0MsY0FBL0M7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsOEJBQXVCUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsUUFBZCxDQUF1QkMsT0FBOUMsVUFEWDtBQUFBLCtCQUdFLDhEQUFDLDJEQUFEO0FBQ0UsZUFBSyxFQUFFWixJQUFJLENBQUNZLE9BRGQ7QUFFRSx1QkFBYSxFQUFFLHVCQUFDQyxLQUFEO0FBQUEsbUJBQ2JaLGdCQUFnQixDQUFDLFNBQUQsQ0FBaEIsQ0FBNEJZLEtBQTVCLENBRGE7QUFBQTtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFDRSxpQkFBUywyQkFBb0JYLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxRQUFkLENBQXVCRyxJQUF2QixDQUE0QkMsRUFBaEQ7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFnQkU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsa0JBQ0dmLElBQUksQ0FBQ00sS0FBTCxDQUFXVSxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPWixHQUFQO0FBQUEsOEJBQ2Q7QUFBYyxxQkFBUyxFQUFDLGdCQUF4QjtBQUFBLG9DQUNFLDhEQUFDLDJEQUFEO0FBQ0UsbUJBQUssRUFBRVksSUFEVDtBQUVFLDJCQUFhLEVBQUUsdUJBQUNKLEtBQUQ7QUFBQSx1QkFDYlosZ0JBQWdCLGlCQUFVSSxHQUFWLEVBQWhCLENBQWlDUSxLQUFqQyxDQURhO0FBQUE7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FLDhEQUFDLHNFQUFEO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLHlCQURaO0FBRUUsdUJBQU8sRUFBRVQsZ0JBQWdCLENBQUNDLEdBQUQsQ0FGM0I7QUFBQSx1Q0FJRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUFTQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBcUJFLDhEQUFDLHNFQUFEO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUMsb0ZBRFo7QUFFRSxtQkFBTyxFQUFFRyxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbURELENBNUREOztHQUFNVCxJO1VBQ1VJLGlEOzs7S0FEVkosSTs7QUFzRU4sSUFBTVksUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBNkI7QUFBQSxNQUExQlgsSUFBMEIsU0FBMUJBLElBQTBCO0FBQzVDLHNCQUNFO0FBQUssYUFBUyxlQUFkO0FBQUEsY0FDR0EsSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVnQixHQUFOLENBQVUsVUFBQ0UsSUFBRCxFQUFPYixHQUFQO0FBQUEsMEJBQ1Q7QUFBZSxpQkFBUyxFQUFDLHdCQUF6QjtBQUFBLCtCQUNFLDhEQUFDLElBQUQ7QUFBTSxjQUFJLEVBQUVhO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVViLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBVkQ7O01BQU1NLFE7QUFZTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS4xNzJjYjY1ZTRkNTBhYzY4YjU5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy90aGVtZVwiO1xuaW1wb3J0IHsgSU1ldGFJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgTWRBZGRDaXJjbGVPdXRsaW5lLCBNZFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IFNob3VsZEVkaXRDb21wb25lbnQgfSBmcm9tIFwiQC9saWJzL0NvbW1vbkNvbXBvbmVudFwiO1xuXG50eXBlIEl0ZW1Qcm9wcyA9IHtcbiAgZGF0YTogSU1ldGFJbmZvO1xuICBvblVwZGF0ZU1ldGFJbmZvOiAoZmllbGROYW1lOiBzdHJpbmcpID0+ICh2YWw6IHN0cmluZyB8IHVua25vd24pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJdGVtID0gKHsgZGF0YSwgb25VcGRhdGVNZXRhSW5mbyB9OiBJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKGlkeDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgZGF0YS5pbmZvcy5zcGxpY2UoaWR4LCAxKTtcbiAgICBvblVwZGF0ZU1ldGFJbmZvKGBpbmZvc2ApKGRhdGEuaW5mb3MpO1xuICB9O1xuICBjb25zdCBoYW5kbGVBZGRJdGVtID0gKCkgPT4ge1xuICAgIG9uVXBkYXRlTWV0YUluZm8oYGluZm9zLiR7ZGF0YS5pbmZvcy5sZW5ndGh9YCkoXCJOZXcgaXRlbSAuLi5cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBwYi0yXCI+XG4gICAgICAgIDxoM1xuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtbGcgZm9udC1ib2xkICR7dGhlbWUuc3VtbWFyeS5NZXRhSW5mby5oZWFkaW5nfSBwci0yYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5oZWFkaW5nfVxuICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgIG9uVXBkYXRlTWV0YUluZm8oXCJoZWFkaW5nXCIpKHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtWzFweF0gJHt0aGVtZS5zdW1tYXJ5Lk1ldGFJbmZvLmxpbmUuYmd9YH1cbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpY3RcIj5cbiAgICAgICAgICB7ZGF0YS5pbmZvcy5tYXAoKHRleHQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJwYi01IHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgb25VcGRhdGVNZXRhSW5mbyhgaW5mb3MuJHtpZHh9YCkodmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGhvdmVyOnRleHQtcmVkLTgwMFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZW1vdmVJdGVtKGlkeCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1Nob3VsZEVkaXRDb21wb25lbnQ+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8U2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBweS0xIHB4LTIgaG92ZXI6dGV4dC1ibHVlLTgwMCBob3Zlcjpib3JkZXItYmx1ZS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEl0ZW19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2hvdWxkRWRpdENvbXBvbmVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHR5cGUgRnVuY1VwZGF0ZU1ldGFJbmZvID0gKFxuICBpZHg6IG51bWJlclxuKSA9PiAoZmllbGROYW1lOiBzdHJpbmcgfCBudWxsKSA9PiAodmFsOiBzdHJpbmcgfCB1bmtub3duKSA9PiB2b2lkO1xuXG50eXBlIE1ldGFJbmZvUHJvcHMgPSB7XG4gIGRhdGE6IElNZXRhSW5mb1tdO1xufTtcblxuY29uc3QgTWV0YUluZm8gPSAoeyBkYXRhIH06IE1ldGFJbmZvUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBwLTUgYH0+XG4gICAgICB7ZGF0YT8ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxJdGVtIGRhdGE9e2l0ZW19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhSW5mbztcbiJdLCJzb3VyY2VSb290IjoiIn0=