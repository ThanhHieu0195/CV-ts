self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/Profile/ProfileDetail2/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Profile/ProfileDetail2/index.tsx ***!
  \*****************************************************/
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



var _jsxFileName = "/root/personal/CV-ts/components/Profile/ProfileDetail2/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Item = function Item(_ref) {
  _s();

  var data = _ref.data;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();

  var Item = function Item(_ref2) {
    var _item$value, _item$value2;

    var item = _ref2.item;

    switch (item.display) {
      case "list":
        return (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.map(function (text, idx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-base pl-2 pb-2",
            children: text
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, _this);
        });

      case "string":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-base pl-2 pb-2",
          children: item.value.join(", ")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);

      case "link":
        return (_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2.map(function (text, idx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-base pl-2 pb-2 text-blue-500",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: text,
              children: text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, _this);
        });

      default:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pb-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center pb-2",
      children: [data.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: _InputField__WEBPACK_IMPORTED_MODULE_3__.InputFieldType.ICON_FIELD,
          value: data.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this), data.heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xl font-bold " + theme.color2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
          value: data.heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pl-4",
      children: data.data.map(function (subItem, index) {
        var _subItem$projects;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pb-4 pl-8 border-l-4 border-green-600",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-between pb-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-xl font-bold",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                  value: subItem.subheading
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-xs",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_3__.default, {
                  value: subItem.time
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "pl-4 w-4/5 list-disc",
              children: subItem === null || subItem === void 0 ? void 0 : (_subItem$projects = subItem.projects) === null || _subItem$projects === void 0 ? void 0 : _subItem$projects.map(function (project, idx) {
                var _project$metas;

                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-md font-bold",
                    children: project.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "p-2 text-gray-800",
                    children: (_project$metas = project.metas) === null || _project$metas === void 0 ? void 0 : _project$metas.map(function (item, idx) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [item.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "text-md font-bold",
                          children: item.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 29
                        }, _this), typeof item.value === "string" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "text-base pl-2 pb-2 whitespace-pre-line",
                          children: item.value
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 29
                        }, _this), typeof item.value === "object" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
                          item: item
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 29
                        }, _this)]
                      }, idx, true, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, _this)]
                }, idx, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), index < data.data.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full border-b-2 border-green-600 border-dotted pt-2 mb-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, _this)]
        }, void 0, true);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(Item, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme];
});

_c = Item;

var ProfileDetail2 = function ProfileDetail2(_ref3) {
  var detail = _ref3.detail;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
      data: detail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, _this);
};

_c2 = ProfileDetail2;
/* harmony default export */ __webpack_exports__["default"] = (ProfileDetail2);

var _c, _c2;

$RefreshReg$(_c, "Item");
$RefreshReg$(_c2, "ProfileDetail2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWwyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwiZGF0YSIsInRoZW1lIiwidXNlVGhlbWUiLCJpdGVtIiwiZGlzcGxheSIsInZhbHVlIiwibWFwIiwidGV4dCIsImlkeCIsImpvaW4iLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsInN1Ykl0ZW0iLCJpbmRleCIsInN1YmhlYWRpbmciLCJ0aW1lIiwicHJvamVjdHMiLCJwcm9qZWN0IiwibmFtZSIsIm1ldGFzIiwidGl0bGUiLCJsZW5ndGgiLCJQcm9maWxlRGV0YWlsMiIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQXdCQSxJQUFNQSxJQUFJLEdBQUcsb0JBQXlCO0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUNwQyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCOztBQUVBLE1BQU1ILElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQWM7QUFBQTs7QUFBQSxRQUFYSSxJQUFXLFNBQVhBLElBQVc7O0FBQ3pCLFlBQVFBLElBQUksQ0FBQ0MsT0FBYjtBQUNFLFdBQUssTUFBTDtBQUNFLDhCQUFPRCxJQUFJLENBQUNFLEtBQVosZ0RBQU8sWUFBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSw4QkFDckI7QUFBZSxxQkFBUyxFQUFDLHFCQUF6QjtBQUFBLHNCQUNHRDtBQURILGFBQVVDLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUI7QUFBQSxTQUFoQixDQUFQOztBQU1GLFdBQUssUUFBTDtBQUNFLDRCQUNFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9CQUFzQ0wsSUFBSSxDQUFDRSxLQUFMLENBQVdJLElBQVgsQ0FB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ZXMvcHJvZmlsZXMvW3VzZXJJZF0uODk1YzI1Y2UxOWIxMWY3MjNlOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElEZXRhaWwsIElVc2VyIH0gZnJvbSBcIkAvbGlicy9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQC9saWJzL3RoZW1lXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCwgeyBJbnB1dEZpZWxkVHlwZSB9IGZyb20gXCIuLi8uLi9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJAL2xpYnMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gXCJAL2xpYnMvY29uc3RhbnRzXCI7XG5cbnR5cGUgSXRlbVR5cGUgPSB7XG4gIGljb246IEljb25UeXBlO1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBzdWJoZWFkaW5nOiBzdHJpbmc7XG4gICAgdGltZTogc3RyaW5nO1xuICAgIHByb2plY3RzOiB7XG4gICAgICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgICAgbWV0YXM6IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgZGlzcGxheT86IFwibGlzdFwiIHwgXCJzdHJpbmdcIiB8IFwibGlua1wiO1xuICAgICAgICB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9W107XG4gICAgfVtdO1xuICB9W107XG59O1xudHlwZSBJdGVtUHJvcHMgPSB7XG4gIGRhdGE6IEl0ZW1UeXBlO1xufTtcblxuY29uc3QgSXRlbSA9ICh7IGRhdGEgfTogSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBJdGVtID0gKHsgaXRlbSB9KSA9PiB7XG4gICAgc3dpdGNoIChpdGVtLmRpc3BsYXkpIHtcbiAgICAgIGNhc2UgXCJsaXN0XCI6XG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlPy5tYXAoKHRleHQsIGlkeCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cInRleHQtYmFzZSBwbC0yIHBiLTJcIj5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKTtcblxuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBsLTIgcGItMlwiPntpdGVtLnZhbHVlLmpvaW4oXCIsIFwiKX08L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcImxpbmtcIjpcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU/Lm1hcCgodGV4dCwgaWR4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBsLTIgcGItMiB0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICA8YSBocmVmPXt0ZXh0fT57dGV4dH08L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGItMlwiPlxuICAgICAgICB7ZGF0YS5pY29uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcIm1yLTIgdGV4dC14bCByb3VuZGVkLWZ1bGwgcC0yIHRleHQtd2hpdGUgXCIgKyB0aGVtZS5wcmltYXJ5LmJnSWNvblxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIHR5cGU9e0lucHV0RmllbGRUeXBlLklDT05fRklFTER9IHZhbHVlPXtkYXRhLmljb259IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtkYXRhLmhlYWRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQteGwgZm9udC1ib2xkIFwiICsgdGhlbWUuY29sb3IyfT5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtkYXRhLmhlYWRpbmd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICB7ZGF0YS5kYXRhLm1hcCgoc3ViSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwYi00IHBsLTggYm9yZGVyLWwtNCBib3JkZXItZ3JlZW4tNjAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17c3ViSXRlbS5zdWJoZWFkaW5nfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3N1Ykl0ZW0udGltZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC00IHctNC81IGxpc3QtZGlzY1wiPlxuICAgICAgICAgICAgICAgIHtzdWJJdGVtPy5wcm9qZWN0cz8ubWFwKChwcm9qZWN0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGRcIj57cHJvamVjdC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubWV0YXM/Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgaXRlbS52YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgcGwtMiBwYi0yIHdoaXRlc3BhY2UtcHJlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgaXRlbS52YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpbmRleCA8IGRhdGEuZGF0YS5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWItMiBib3JkZXItZ3JlZW4tNjAwIGJvcmRlci1kb3R0ZWQgcHQtMiBtYi00XCI+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUHJvZmlsZURldGFpbDIgPSAoeyBkZXRhaWwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOFwiPlxuICAgICAgPEl0ZW0gZGF0YT17ZGV0YWlsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURldGFpbDI7XG4iXSwic291cmNlUm9vdCI6IiJ9