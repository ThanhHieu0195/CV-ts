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

  var data = _ref.data,
      onItemUpdate = _ref.onItemUpdate;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pb-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center",
      children: [data.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: _InputField__WEBPACK_IMPORTED_MODULE_3__.InputFieldType.ICON_FIELD,
          value: data.icon,
          onInputChange: onItemUpdate("icon")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this), data.heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xl font-bold " + theme.color2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.heading,
          onInputChange: onItemUpdate("heading")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pl-4",
      children: [data.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-base",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.description,
          type: _InputField__WEBPACK_IMPORTED_MODULE_3__.InputFieldType.AREA_FIELD,
          onInputChange: onItemUpdate("description")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, _this), (_data$detail = data.detail) === null || _data$detail === void 0 ? void 0 : _data$detail.map(function (detail, idxDetail) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-lg font-bold pb-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
              value: detail.heading,
              onInputChange: onItemUpdate("detail.".concat(idxDetail, ".heading"))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
                      value: subItem.subheading,
                      onInputChange: onItemUpdate("detail.".concat(idxDetail, ".data.").concat(idxSubItem, ".subheading"))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-sm",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                      value: subItem.time,
                      onInputChange: onItemUpdate("detail.".concat(idxDetail, ".data.").concat(idxSubItem, ".time"))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pl-4 w-4/5",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "list-disc px-4",
                    children: subItem.content.map(function (text, idxSubItemContent) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        className: "px-2 py-1 text-base",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                          value: text,
                          onInputChange: onItemUpdate("detail.".concat(idxDetail, ".data.").concat(idxSubItem, ".content.").concat(idxSubItemContent))
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 27
                        }, _this)
                      }, idxSubItemContent, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)]
              }, idxSubItem, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, idxDetail, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          onItemUpdate("detail.".concat(data.detail.length))({
            subheading: "Heading ...",
            time: "time",
            data: []
          });
        },
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
        lineNumber: 127,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlRGV0YWlsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwiZGF0YSIsIm9uSXRlbVVwZGF0ZSIsInRoZW1lIiwidXNlVGhlbWUiLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsImRlc2NyaXB0aW9uIiwiZGV0YWlsIiwibWFwIiwiaWR4RGV0YWlsIiwic3ViSXRlbSIsImlkeFN1Ykl0ZW0iLCJzdWJoZWFkaW5nIiwidGltZSIsImNvbnRlbnQiLCJ0ZXh0IiwiaWR4U3ViSXRlbUNvbnRlbnQiLCJsZW5ndGgiLCJQcm9maWxlRGV0YWlsIiwidXNlciIsImlzRWRpdCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBU0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBdUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUNsRCxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsaUJBQ0dILElBQUksQ0FBQ0ksSUFBTCxpQkFDQztBQUNFLGlCQUFTLEVBQ1AsOENBQThDRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFGaEU7QUFBQSwrQkFLRSw4REFBQyxnREFBRDtBQUNFLGNBQUksRUFBRUMsa0VBRFI7QUFFRSxlQUFLLEVBQUVQLElBQUksQ0FBQ0ksSUFGZDtBQUdFLHVCQUFhLEVBQUVILFlBQVksQ0FBQyxNQUFEO0FBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFjR0QsSUFB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MDk4NDRjYzQ0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSURldGFpbCwgSVVzZXIgfSBmcm9tIFwiQC9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2xpYnMvdGhlbWVcIjtcbmltcG9ydCBJbnB1dEZpZWxkLCB7IElucHV0RmllbGRUeXBlIH0gZnJvbSBcIi4uLy4uL0lucHV0RmllbGRcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIkAvbGlicy9sb2dnZXJcIjtcblxudHlwZSBJdGVtUHJvcHMgPSB7XG4gIGlzRWRpdDogYm9vbGVhbjtcbiAgZGF0YTogSURldGFpbDtcbiAgb25JdGVtVXBkYXRlOiAoZmllbGROYW1lOiBzdHJpbmcpID0+ICh2YWwpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJdGVtID0gKHsgZGF0YSwgb25JdGVtVXBkYXRlIH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtkYXRhLmljb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwibXItMiB0ZXh0LXhsIHJvdW5kZWQtZnVsbCBwLTIgdGV4dC13aGl0ZSBcIiArIHRoZW1lLnByaW1hcnkuYmdJY29uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT17SW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRH1cbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaWNvbn1cbiAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17b25JdGVtVXBkYXRlKFwiaWNvblwiKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLmhlYWRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQteGwgZm9udC1ib2xkIFwiICsgdGhlbWUuY29sb3IyfT5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhlYWRpbmd9XG4gICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uSXRlbVVwZGF0ZShcImhlYWRpbmdcIil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj5cbiAgICAgICAge2RhdGEuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgdHlwZT17SW5wdXRGaWVsZFR5cGUuQVJFQV9GSUVMRH1cbiAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17b25JdGVtVXBkYXRlKFwiZGVzY3JpcHRpb25cIil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5kZXRhaWw/Lm1hcCgoZGV0YWlsLCBpZHhEZXRhaWwpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4RGV0YWlsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgcGItMlwiPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXRhaWwuaGVhZGluZ31cbiAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvbkl0ZW1VcGRhdGUoYGRldGFpbC4ke2lkeERldGFpbH0uaGVhZGluZ2ApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj5cbiAgICAgICAgICAgICAge2RldGFpbD8uZGF0YS5tYXAoKHN1Ykl0ZW0sIGlkeFN1Ykl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4U3ViSXRlbX0gY2xhc3NOYW1lPVwicGItNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ViSXRlbS5zdWJoZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17b25JdGVtVXBkYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgZGV0YWlsLiR7aWR4RGV0YWlsfS5kYXRhLiR7aWR4U3ViSXRlbX0uc3ViaGVhZGluZ2BcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ViSXRlbS50aW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17b25JdGVtVXBkYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgZGV0YWlsLiR7aWR4RGV0YWlsfS5kYXRhLiR7aWR4U3ViSXRlbX0udGltZWBcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB3LTQvNVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5jb250ZW50Lm1hcCgodGV4dCwgaWR4U3ViSXRlbUNvbnRlbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeFN1Ykl0ZW1Db250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvbkl0ZW1VcGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGV0YWlsLiR7aWR4RGV0YWlsfS5kYXRhLiR7aWR4U3ViSXRlbX0uY29udGVudC4ke2lkeFN1Ykl0ZW1Db250ZW50fWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uSXRlbVVwZGF0ZShgZGV0YWlsLiR7ZGF0YS5kZXRhaWwubGVuZ3RofWApKHtcbiAgICAgICAgICAgICAgc3ViaGVhZGluZzogXCJIZWFkaW5nIC4uLlwiLFxuICAgICAgICAgICAgICB0aW1lOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIERldGFpbFByb3BzID0ge1xuICBpc0VkaXQ/OiBib29sZWFuO1xuICB1c2VyOiBJVXNlcjtcbn07XG5cbmNvbnN0IFByb2ZpbGVEZXRhaWwgPSAoeyB1c2VyLCBpc0VkaXQgPSBmYWxzZSB9OiBEZXRhaWxQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBweC04XCI+XG4gICAgICB7dXNlcj8uZGV0YWlsPy5tYXAoKGRldGFpbCwgaWR4KSA9PiAoXG4gICAgICAgIDxJdGVtIGlzRWRpdD17aXNFZGl0fSBrZXk9e2lkeH0gZGF0YT17ZGV0YWlsfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==