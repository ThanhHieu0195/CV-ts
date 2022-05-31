self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/ProfileInfo/ProfileDetail/index.tsx":
/*!********************************************************!*\
  !*** ./components/ProfileInfo/ProfileDetail/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/theme */ "./libs/theme.ts");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../InputField */ "./components/InputField/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/ProfileInfo/ProfileDetail/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Item = function Item(_ref) {
  _s();

  var _data$detail;

  var data = _ref.data;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pb-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center",
      children: [data.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: _InputField__WEBPACK_IMPORTED_MODULE_3__.InputFieldType.ICON_FIELD,
          value: data.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this), data.heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xl font-bold " + theme.color2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pl-4",
      children: [data.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-base",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.description,
          type: _InputField__WEBPACK_IMPORTED_MODULE_3__.InputFieldType.AREA_FIELD
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this), (_data$detail = data.detail) === null || _data$detail === void 0 ? void 0 : _data$detail.map(function (detail, idxDetail) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-lg font-bold pb-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
              value: detail.heading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pl-4",
            children: detail === null || detail === void 0 ? void 0 : detail.data.map(function (subItem, idxSubItem) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "pb-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-md font-bold",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                      value: subItem.subheading
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-sm",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                      value: subItem.time
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pl-4 w-4/5",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "list-disc px-4",
                    children: subItem.content.map(function (text, idxSubItemContent) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        className: "px-2 py-1 text-base",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                          value: text
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 27
                        }, _this)
                      }, idxSubItemContent, false, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 25
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)]
              }, idxSubItem, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)]
        }, idxDetail, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
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

var ProfileDetail = function ProfileDetail(_ref2) {
  var _user$detail;

  var user = _ref2.user,
      _ref2$isEdit = _ref2.isEdit,
      isEdit = _ref2$isEdit === void 0 ? false : _ref2$isEdit;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pt-8 px-8",
    children: user === null || user === void 0 ? void 0 : (_user$detail = user.detail) === null || _user$detail === void 0 ? void 0 : _user$detail.map(function (detail, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        isEdit: isEdit,
        data: detail
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, _this);
};

_c2 = ProfileDetail;
/* harmony default export */ __webpack_exports__["default"] = (ProfileDetail);

var _c, _c2;

$RefreshReg$(_c, "Item");
$RefreshReg$(_c2, "ProfileDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlRGV0YWlsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwiZGF0YSIsInRoZW1lIiwidXNlVGhlbWUiLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsImRlc2NyaXB0aW9uIiwiQVJFQV9GSUVMRCIsImRldGFpbCIsIm1hcCIsImlkeERldGFpbCIsInN1Ykl0ZW0iLCJpZHhTdWJJdGVtIiwic3ViaGVhZGluZyIsInRpbWUiLCJjb250ZW50IiwidGV4dCIsImlkeFN1Ykl0ZW1Db250ZW50IiwiUHJvZmlsZURldGFpbCIsInVzZXIiLCJpc0VkaXQiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQVFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUNwQyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsaUJBQ0dGLElBQUksQ0FBQ0csSUFBTCxpQkFDQztBQUNFLGlCQUFTLEVBQ1AsOENBQThDRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFGaEU7QUFBQSwrQkFLRSw4REFBQyxnREFBRDtBQUFZLGNBQUksRUFBRUMsa0VBQWxCO0FBQTZDLGVBQUssRUFBRU4sSUFBSSxDQUFDRztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBVUdILElBQUksQ0FBQ08sT0FBTCxpQkFDQztBQUFLLGlCQUFTLEVBQUUsdUJBQXVCTixLQUFLLENBQUNPLE1BQTdDO0FBQUEsK0JBQ0UsOERBQUMs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LGNBQ0dELElBREgsYUFDR0EsSUFESCx1Q0FDR0EsSUFBSSxDQUFFWCxNQURULGlEQUNHLGFBQWNDLEdBQWQsQ0FBa0IsVUFBQ0QsTUFBRCxFQUFTYSxHQUFUO0FBQUEsMEJBQ2pCLDhEQUFDLElBQUQ7QUFBTSxjQUFNLEVBQUVELE1BQWQ7QUFBZ0MsWUFBSSxFQUFFWjtBQUF0QyxTQUEyQmEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURpQjtBQUFBLEtBQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FSRDs7TUFBTUgsYTtBQVVOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjU3NzIzMDg2NWVmNDJlNjJlZWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJRGV0YWlsLCBJVXNlciB9IGZyb20gXCJAL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvbGlicy90aGVtZVwiO1xuaW1wb3J0IElucHV0RmllbGQsIHsgSW5wdXRGaWVsZFR5cGUgfSBmcm9tIFwiLi4vLi4vSW5wdXRGaWVsZFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiQC9saWJzL2xvZ2dlclwiO1xuXG50eXBlIEl0ZW1Qcm9wcyA9IHtcbiAgaXNFZGl0OiBib29sZWFuO1xuICBkYXRhOiBJRGV0YWlsO1xufTtcblxuY29uc3QgSXRlbSA9ICh7IGRhdGEgfTogSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge2RhdGEuaWNvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtci0yIHRleHQteGwgcm91bmRlZC1mdWxsIHAtMiB0ZXh0LXdoaXRlIFwiICsgdGhlbWUucHJpbWFyeS5iZ0ljb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZCB0eXBlPXtJbnB1dEZpZWxkVHlwZS5JQ09OX0ZJRUxEfSB2YWx1ZT17ZGF0YS5pY29ufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5oZWFkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LXhsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yMn0+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17ZGF0YS5oZWFkaW5nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj5cbiAgICAgICAge2RhdGEuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgdHlwZT17SW5wdXRGaWVsZFR5cGUuQVJFQV9GSUVMRH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLmRldGFpbD8ubWFwKChkZXRhaWwsIGlkeERldGFpbCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHhEZXRhaWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBwYi0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtkZXRhaWwuaGVhZGluZ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00XCI+XG4gICAgICAgICAgICAgIHtkZXRhaWw/LmRhdGEubWFwKChzdWJJdGVtLCBpZHhTdWJJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeFN1Ykl0ZW19IGNsYXNzTmFtZT1cInBiLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17c3ViSXRlbS5zdWJoZWFkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3N1Ykl0ZW0udGltZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB3LTQvNVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5jb250ZW50Lm1hcCgodGV4dCwgaWR4U3ViSXRlbUNvbnRlbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeFN1Ykl0ZW1Db250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIERldGFpbFByb3BzID0ge1xuICBpc0VkaXQ/OiBib29sZWFuO1xuICB1c2VyOiBJVXNlcjtcbn07XG5cbmNvbnN0IFByb2ZpbGVEZXRhaWwgPSAoeyB1c2VyLCBpc0VkaXQgPSBmYWxzZSB9OiBEZXRhaWxQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBweC04XCI+XG4gICAgICB7dXNlcj8uZGV0YWlsPy5tYXAoKGRldGFpbCwgaWR4KSA9PiAoXG4gICAgICAgIDxJdGVtIGlzRWRpdD17aXNFZGl0fSBrZXk9e2lkeH0gZGF0YT17ZGV0YWlsfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==