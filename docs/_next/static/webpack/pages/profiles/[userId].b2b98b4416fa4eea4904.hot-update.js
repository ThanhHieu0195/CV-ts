self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/Profile/ProfileDetail/index.tsx":
/*!****************************************************!*\
  !*** ./components/Profile/ProfileDetail/index.tsx ***!
  \****************************************************/
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


var _jsxFileName = "/root/personal/CV-ts/components/Profile/ProfileDetail/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var ProfileDetailItem = function ProfileDetailItem(_ref) {
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
          lineNumber: 22,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), data.heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xl font-bold " + theme.color2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
          lineNumber: 34,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this), (_data$detail = data.detail) === null || _data$detail === void 0 ? void 0 : _data$detail.map(function (detail, idxDetail) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-lg font-bold pb-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
              value: detail.heading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
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
                      lineNumber: 50,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-sm",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                      value: subItem.time
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
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
                          lineNumber: 63,
                          columnNumber: 27
                        }, _this)
                      }, idxSubItemContent, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, _this)]
              }, idxSubItem, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, idxDetail, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(ProfileDetailItem, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme];
});

_c = ProfileDetailItem;
/* harmony default export */ __webpack_exports__["default"] = (ProfileDetailItem);

var _c;

$RefreshReg$(_c, "ProfileDetailItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2ZpbGVEZXRhaWxJdGVtIiwiZGF0YSIsInRoZW1lIiwidXNlVGhlbWUiLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsImRlc2NyaXB0aW9uIiwiQVJFQV9GSUVMRCIsImRldGFpbCIsIm1hcCIsImlkeERldGFpbCIsInN1Ykl0ZW0iLCJpZHhTdWJJdGVtIiwic3ViaGVhZGluZyIsInRpbWUiLCJjb250ZW50IiwidGV4dCIsImlkeFN1Ykl0ZW1Db250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFNQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUNqRCxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsaUJBQ0dGLElBQUksQ0FBQ0csSUFBTCxpQkFDQztBQUNFLGlCQUFTLEVBQ1AsOENBQThDRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFGaEU7QUFBQSwrQkFLRSw4REFBQyxnREFBRDtBQUFZLGNBQUksRUFBRUMsa0VBQWxCO0FBQTZDLGVBQUssRUFBRU4sSUFBSSxDQUFDRztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBVUdILElBQUksQ0FBQ08sT0FBTCxpQkFDQztBQUFLLGlCQUFTLEVBQUUsdUJBQXVCTixLQUFLLENBQUNPLE1BQTdDO0FBQUEsK0JBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxlQUFLLEVBQUVSLElBQUksQ0FBQ087QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWlCRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsaUJBQ0dQLElBQUksQ0FBQ1MsV0FBTCxpQkFDQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFLDhEQUFDLGdEQUFEO0FBQ0UsZUFBSyxFQUFFVCxJQUFJLENBQUNTLFdBRGQ7QUFFRSxjQUFJLEVBQUVILGtFQUF5Qkk7QUFGakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixrQkFTR1YsSUFBSSxDQUFDVyxNQVRSLGlEQVNHLGFBQWFDLEdBQWIsQ0FBaUIsVUFBQ0QsTUFBRCxFQUFTRSxTQUFUO0FBQUEsNEJBQ2hCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQUEsbUNBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBSyxFQUFFRixNQUFNLENBQUNKO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxzQkFDR0ksTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVYLElBQVIsQ0FBYVksR0FBYixDQUFpQixVQUFDRSxPQUFELEVBQVVDLFVBQVY7QUFBQSxrQ0FDaEI7QUFBc0IseUJBQVMsRUFBQyxNQUFoQztBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyxtQ0FBZjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyxtQkFBZjtBQUFBLDJDQUNFLDhEQUFDLGdEQUFEO0FBQVksMkJBQUssRUFBRUQsT0FBTyxDQUFDRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUssNkJBQVMsRUFBQyxTQUFmO0FBQUEsMkNBQ0UsOERBQUMsZ0RBQUQ7QUFBWSwyQkFBSyxFQUFFRixPQUFPLENBQUNHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVNFO0FBQUssMkJBQVMsRUFBQyxZQUFmO0FBQUEseUNBQ0U7QUFBSSw2QkFBUyxFQUFDLGdCQUFkO0FBQUEsOEJBQ0dILE9BQU8sQ0FBQ0ksT0FBUixDQUFnQk4sR0FBaEIsQ0FBb0IsVUFBQ08sSUFBRCxFQUFPQyxpQkFBUDtBQUFBLDBDQUNuQjtBQUVFLGlDQUFTLEVBQUMscUJBRlo7QUFBQSwrQ0FJRSw4REFBQyxnREFBRDtBQUFZLCtCQUFLLEVBQUVEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRix5QkFDT0MsaUJBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEbUI7QUFBQSxxQkFBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURjtBQUFBLGlCQUFVTCxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGdCO0FBQUEsYUFBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUEsV0FBVUYsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQWpCLENBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBbEVEOztHQUFNZCxpQjtVQUNVRyxpRDs7O0tBRFZILGlCO0FBb0VOLCtEQUFlQSxpQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS5iMmI5OGI0NDE2ZmE0ZWVhNDkwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSURldGFpbCwgSVVzZXIgfSBmcm9tIFwiQC9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2xpYnMvdGhlbWVcIjtcbmltcG9ydCBJbnB1dEZpZWxkLCB7IElucHV0RmllbGRUeXBlIH0gZnJvbSBcIi4uLy4uL0lucHV0RmllbGRcIjtcblxudHlwZSBJdGVtUHJvcHMgPSB7XG4gIGRhdGE6IElEZXRhaWw7XG59O1xuXG5jb25zdCBQcm9maWxlRGV0YWlsSXRlbSA9ICh7IGRhdGEgfTogSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge2RhdGEuaWNvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtci0yIHRleHQteGwgcm91bmRlZC1mdWxsIHAtMiB0ZXh0LXdoaXRlIFwiICsgdGhlbWUucHJpbWFyeS5iZ0ljb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZCB0eXBlPXtJbnB1dEZpZWxkVHlwZS5JQ09OX0ZJRUxEfSB2YWx1ZT17ZGF0YS5pY29ufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5oZWFkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LXhsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yMn0+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17ZGF0YS5oZWFkaW5nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj5cbiAgICAgICAge2RhdGEuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgdHlwZT17SW5wdXRGaWVsZFR5cGUuQVJFQV9GSUVMRH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLmRldGFpbD8ubWFwKChkZXRhaWwsIGlkeERldGFpbCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHhEZXRhaWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBwYi0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtkZXRhaWwuaGVhZGluZ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00XCI+XG4gICAgICAgICAgICAgIHtkZXRhaWw/LmRhdGEubWFwKChzdWJJdGVtLCBpZHhTdWJJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeFN1Ykl0ZW19IGNsYXNzTmFtZT1cInBiLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17c3ViSXRlbS5zdWJoZWFkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3N1Ykl0ZW0udGltZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB3LTQvNVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5jb250ZW50Lm1hcCgodGV4dCwgaWR4U3ViSXRlbUNvbnRlbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeFN1Ykl0ZW1Db250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRGV0YWlsSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=