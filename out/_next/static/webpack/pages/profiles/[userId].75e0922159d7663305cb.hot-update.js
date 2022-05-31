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
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
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
        lineNumber: 100,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlRGV0YWlsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwiZGF0YSIsInRoZW1lIiwidXNlVGhlbWUiLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsImRlc2NyaXB0aW9uIiwiQVJFQV9GSUVMRCIsImRldGFpbCIsIm1hcCIsImlkeERldGFpbCIsInN1Ykl0ZW0iLCJpZHhTdWJJdGVtIiwic3ViaGVhZGluZyIsInRpbWUiLCJjb250ZW50IiwidGV4dCIsImlkeFN1Ykl0ZW1Db250ZW50Iiwib25JdGVtVXBkYXRlIiwibGVuZ3RoIiwiUHJvZmlsZURldGFpbCIsInVzZXIiLCJpc0VkaXQiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQVFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUNwQyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsaUJBQ0dGLElBQUksQ0FBQ0csSUFBTCxpQkFDQztBQUNFLGlCQUFTLEVBQ1AsOENBQThDRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFGaEU7QUFBQSwrQkFLRSw4REFBQyxnREFBRDtBQUFZLGNBQUksRUFBRUMsa0VBQWxCO0FBQTZDLGVBQUssRUFBRU4sSUFBSSxDQUFDRztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBVUdILElBQUksQ0FBQ08sT0FBTCxpQkFDQztBQUFLLGlCQUFTLEVBQUUsdUJBQXVCTixLQUFLLENBQUNP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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBFRCxDQTdFRDs7R0FBTUQsSTtVQUNVRyxpRDs7O0tBRFZILEk7O0FBb0ZOLElBQU13QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLFFBQTJDO0FBQUE7O0FBQUEsTUFBeENDLElBQXdDLFNBQXhDQSxJQUF3QztBQUFBLDJCQUFsQ0MsTUFBa0M7QUFBQSxNQUFsQ0EsTUFBa0MsNkJBQXpCLEtBQXlCO0FBQy9ELHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSxjQUNHRCxJQURILGFBQ0dBLElBREgsdUNBQ0dBLElBQUksQ0FBRWIsTUFEVCxpREFDRyxhQUFjQyxHQUFkLENBQWtCLFVBQUNELE1BQUQsRUFBU2UsR0FBVDtBQUFBLDBCQUNqQiw4REFBQyxJQUFEO0FBQU0sY0FBTSxFQUFFRCxNQUFkO0FBQWdDLFlBQUksRUFBRWQ7QUFBdEMsU0FBMkJlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O01BQU1ILGE7QUFVTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcklkXS43NWUwOTIyMTU5ZDc2NjMzMDVjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSURldGFpbCwgSVVzZXIgfSBmcm9tIFwiQC9saWJzL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2xpYnMvdGhlbWVcIjtcbmltcG9ydCBJbnB1dEZpZWxkLCB7IElucHV0RmllbGRUeXBlIH0gZnJvbSBcIi4uLy4uL0lucHV0RmllbGRcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIkAvbGlicy9sb2dnZXJcIjtcblxudHlwZSBJdGVtUHJvcHMgPSB7XG4gIGlzRWRpdDogYm9vbGVhbjtcbiAgZGF0YTogSURldGFpbDtcbn07XG5cbmNvbnN0IEl0ZW0gPSAoeyBkYXRhIH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtkYXRhLmljb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwibXItMiB0ZXh0LXhsIHJvdW5kZWQtZnVsbCBwLTIgdGV4dC13aGl0ZSBcIiArIHRoZW1lLnByaW1hcnkuYmdJY29uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0RmllbGQgdHlwZT17SW5wdXRGaWVsZFR5cGUuSUNPTl9GSUVMRH0gdmFsdWU9e2RhdGEuaWNvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2RhdGEuaGVhZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC14bCBmb250LWJvbGQgXCIgKyB0aGVtZS5jb2xvcjJ9PlxuICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e2RhdGEuaGVhZGluZ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00XCI+XG4gICAgICAgIHtkYXRhLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIHR5cGU9e0lucHV0RmllbGRUeXBlLkFSRUFfRklFTER9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5kZXRhaWw/Lm1hcCgoZGV0YWlsLCBpZHhEZXRhaWwpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4RGV0YWlsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgcGItMlwiPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17ZGV0YWlsLmhlYWRpbmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICAgICAgICB7ZGV0YWlsPy5kYXRhLm1hcCgoc3ViSXRlbSwgaWR4U3ViSXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHhTdWJJdGVtfSBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3N1Ykl0ZW0uc3ViaGVhZGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtzdWJJdGVtLnRpbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdy00LzVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0uY29udGVudC5tYXAoKHRleHQsIGlkeFN1Ykl0ZW1Db250ZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHhTdWJJdGVtQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIHRleHQtYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uSXRlbVVwZGF0ZShgZGV0YWlsLiR7ZGF0YS5kZXRhaWwubGVuZ3RofWApKHtcbiAgICAgICAgICAgICAgc3ViaGVhZGluZzogXCJIZWFkaW5nIC4uLlwiLFxuICAgICAgICAgICAgICB0aW1lOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIERldGFpbFByb3BzID0ge1xuICBpc0VkaXQ/OiBib29sZWFuO1xuICB1c2VyOiBJVXNlcjtcbn07XG5cbmNvbnN0IFByb2ZpbGVEZXRhaWwgPSAoeyB1c2VyLCBpc0VkaXQgPSBmYWxzZSB9OiBEZXRhaWxQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBweC04XCI+XG4gICAgICB7dXNlcj8uZGV0YWlsPy5tYXAoKGRldGFpbCwgaWR4KSA9PiAoXG4gICAgICAgIDxJdGVtIGlzRWRpdD17aXNFZGl0fSBrZXk9e2lkeH0gZGF0YT17ZGV0YWlsfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==