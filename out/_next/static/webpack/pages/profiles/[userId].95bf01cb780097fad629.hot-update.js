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
/* harmony import */ var _libs_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/logger */ "./libs/logger.ts");
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

  var handleDetailUpdate = function handleDetailUpdate(idx) {
    return function (fieldName) {
      return function (val) {
        _libs_logger__WEBPACK_IMPORTED_MODULE_4__.default.info("updating profile-detail ".concat(fieldName, " ").concat(val));
        onUpdateUserInfo("detail.".concat(idx, ".").concat(fieldName))(val);
      };
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pt-8 px-8",
    children: user === null || user === void 0 ? void 0 : (_user$detail = user.detail) === null || _user$detail === void 0 ? void 0 : _user$detail.map(function (detail, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        isEdit: isEdit,
        data: detail,
        onItemUpdate: handleDetailUpdate(idx)
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlRGV0YWlsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwiZGF0YSIsIm9uSXRlbVVwZGF0ZSIsInRoZW1lIiwidXNlVGhlbWUiLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsImRlc2NyaXB0aW9uIiwiZGV0YWlsIiwibWFwIiwiaWR4RGV0YWlsIiwic3ViSXRlbSIsImlkeFN1Ykl0ZW0iLCJzdWJoZWFkaW5nIiwidGltZSIsImNvbnRlbnQiLCJ0ZXh0IiwiaWR4U3ViSXRlbUNvbnRlbnQiLCJsZW5ndGgiLCJQcm9maWxlRGV0YWlsIiwidXNlciIsImlzRWRpdCIsImhhbmRsZURldGFpbFVwZGF0ZSIsImlkeCIsImZpZWxkTmFtZSIsInZhbCIsImxvZ2dlciIsIm9uVXBkYXRlVXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQVFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVDO0FBQUE7O0FBQUE7O0FBQUEsTUFBcENDLElBQW9DLFFBQXBDQSxJQUFvQztBQUFBLE1BQTlCQyxZQUE4QixRQUE5QkEsWUFBOEI7QUFDbEQsTUFBTUMsS0FBSyxHQUFHQyxxREFBUSxFQUF0QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLGlCQUNHSCxJQUFJLENBQUNJLElBQUwsaUJBQ0M7QUFDRSxpQkFBUyxFQUNQLDhDQUE4Q0YsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE1BRmhFO0FBQUEsK0JBS0UsOERBQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUVDLGtFQURSO0FBRUUsZUFBSyxFQUFFUCxJQUFJLENBQUNJLElBRmQ7QUFHRSx1QkFBYSxFQUFFSCxZQUFZLENB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SUFBSSxDQUFFWixNQURULGlEQUNHLGFBQWNDLEdBQWQsQ0FBa0IsVUFBQ0QsTUFBRCxFQUFTZSxHQUFUO0FBQUEsMEJBQ2pCLDhEQUFDLElBQUQ7QUFDRSxjQUFNLEVBQUVGLE1BRFY7QUFHRSxZQUFJLEVBQUViLE1BSFI7QUFJRSxvQkFBWSxFQUFFYyxrQkFBa0IsQ0FBQ0MsR0FBRDtBQUpsQyxTQUVPQSxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBakJEOztNQUFNSixhO0FBbUJOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLjk1YmYwMWNiNzgwMDk3ZmFkNjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJRGV0YWlsLCBJVXNlciB9IGZyb20gXCJAL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvbGlicy90aGVtZVwiO1xuaW1wb3J0IElucHV0RmllbGQsIHsgSW5wdXRGaWVsZFR5cGUgfSBmcm9tIFwiLi4vLi4vSW5wdXRGaWVsZFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiQC9saWJzL2xvZ2dlclwiO1xuXG50eXBlIEl0ZW1Qcm9wcyA9IHtcbiAgaXNFZGl0OiBib29sZWFuO1xuICBkYXRhOiBJRGV0YWlsO1xuICBvbkl0ZW1VcGRhdGU6IChmaWVsZE5hbWU6IHN0cmluZykgPT4gKHZhbCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEl0ZW0gPSAoeyBkYXRhLCBvbkl0ZW1VcGRhdGUgfTogSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge2RhdGEuaWNvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtci0yIHRleHQteGwgcm91bmRlZC1mdWxsIHAtMiB0ZXh0LXdoaXRlIFwiICsgdGhlbWUucHJpbWFyeS5iZ0ljb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPXtJbnB1dEZpZWxkVHlwZS5JQ09OX0ZJRUxEfVxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5pY29ufVxuICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvbkl0ZW1VcGRhdGUoXCJpY29uXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2RhdGEuaGVhZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC14bCBmb250LWJvbGQgXCIgKyB0aGVtZS5jb2xvcjJ9PlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGVhZGluZ31cbiAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17b25JdGVtVXBkYXRlKFwiaGVhZGluZ1wiKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB0eXBlPXtJbnB1dEZpZWxkVHlwZS5BUkVBX0ZJRUxEfVxuICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvbkl0ZW1VcGRhdGUoXCJkZXNjcmlwdGlvblwiKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLmRldGFpbD8ubWFwKChkZXRhaWwsIGlkeERldGFpbCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHhEZXRhaWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBwYi0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RldGFpbC5oZWFkaW5nfVxuICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uSXRlbVVwZGF0ZShgZGV0YWlsLiR7aWR4RGV0YWlsfS5oZWFkaW5nYCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICAgICAgICB7ZGV0YWlsPy5kYXRhLm1hcCgoc3ViSXRlbSwgaWR4U3ViSXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHhTdWJJdGVtfSBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJJdGVtLnN1YmhlYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvbkl0ZW1VcGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBkZXRhaWwuJHtpZHhEZXRhaWx9LmRhdGEuJHtpZHhTdWJJdGVtfS5zdWJoZWFkaW5nYFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJJdGVtLnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtvbkl0ZW1VcGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBkZXRhaWwuJHtpZHhEZXRhaWx9LmRhdGEuJHtpZHhTdWJJdGVtfS50aW1lYFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHctNC81XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmNvbnRlbnQubWFwKCh0ZXh0LCBpZHhTdWJJdGVtQ29udGVudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4U3ViSXRlbUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSB0ZXh0LWJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uSXRlbVVwZGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBkZXRhaWwuJHtpZHhEZXRhaWx9LmRhdGEuJHtpZHhTdWJJdGVtfS5jb250ZW50LiR7aWR4U3ViSXRlbUNvbnRlbnR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb25JdGVtVXBkYXRlKGBkZXRhaWwuJHtkYXRhLmRldGFpbC5sZW5ndGh9YCkoe1xuICAgICAgICAgICAgICBzdWJoZWFkaW5nOiBcIkhlYWRpbmcgLi4uXCIsXG4gICAgICAgICAgICAgIHRpbWU6IFwidGltZVwiLFxuICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgRGV0YWlsUHJvcHMgPSB7XG4gIGlzRWRpdD86IGJvb2xlYW47XG4gIHVzZXI6IElVc2VyO1xufTtcblxuY29uc3QgUHJvZmlsZURldGFpbCA9ICh7IHVzZXIsIGlzRWRpdCA9IGZhbHNlIH06IERldGFpbFByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZURldGFpbFVwZGF0ZSA9IChpZHg6IG51bWJlcikgPT4gKGZpZWxkTmFtZTogc3RyaW5nKSA9PiAodmFsKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYHVwZGF0aW5nIHByb2ZpbGUtZGV0YWlsICR7ZmllbGROYW1lfSAke3ZhbH1gKTtcbiAgICBvblVwZGF0ZVVzZXJJbmZvKGBkZXRhaWwuJHtpZHh9LiR7ZmllbGROYW1lfWApKHZhbCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IHB4LThcIj5cbiAgICAgIHt1c2VyPy5kZXRhaWw/Lm1hcCgoZGV0YWlsLCBpZHgpID0+IChcbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBpc0VkaXQ9e2lzRWRpdH1cbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBkYXRhPXtkZXRhaWx9XG4gICAgICAgICAgb25JdGVtVXBkYXRlPXtoYW5kbGVEZXRhaWxVcGRhdGUoaWR4KX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=