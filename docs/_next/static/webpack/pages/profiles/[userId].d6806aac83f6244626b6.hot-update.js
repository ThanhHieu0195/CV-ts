self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/Profile/ProfileDetail2/index.tsx":
/*!*****************************************************!*\
  !*** ./components/Profile/ProfileDetail2/index.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_personal_CV_ts_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/theme */ "./libs/theme.ts");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../InputField */ "./components/InputField/index.tsx");
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/libs/constants */ "./libs/constants.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/root/personal/CV-ts/components/Profile/ProfileDetail2/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Item = function Item(_ref) {
  _s();

  var data = _ref.data;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();

  var Item = function Item(_ref2) {
    var _item$value, _item$value2;

    var item = _ref2.item;

    switch (item.display) {
      case "list":
        return (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.map(function (text, idx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text-base pl-2 pb-2",
            children: text
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, _this);
        });

      case "string":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "text-base pl-2 pb-2",
          children: item.value.join(", ")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);

      case "link":
        return (_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2.map(function (text, idx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text-base pl-2 pb-2 text-blue-500",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
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
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "pb-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "flex items-center pb-2",
      children: [data.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: _InputField__WEBPACK_IMPORTED_MODULE_4__.InputFieldType.ICON_FIELD,
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
      }, _this), data.heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "text-xl font-bold " + theme.color2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__.default, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "pl-4",
      children: data.data.map(function (subItem, index) {
        var _subItem$projects;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "pb-4 pl-8 border-l-4 border-green-600",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex items-center justify-between pb-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "text-xl font-bold",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__.default, {
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
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "text-xs",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__.default, {
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
              className: "pl-4 w-4/5 list-disc",
              children: subItem === null || subItem === void 0 ? void 0 : (_subItem$projects = subItem.projects) === null || _subItem$projects === void 0 ? void 0 : _subItem$projects.map(function (project, idx) {
                var _project$metas;

                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "text-md font-bold",
                    children: project.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "p-2 text-gray-800",
                    children: (_project$metas = project.metas) === null || _project$metas === void 0 ? void 0 : _project$metas.map(function (item, idx) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        children: [item.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                          className: "text-md font-bold",
                          children: item.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 29
                        }, _this), typeof item.value === "string" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                          className: "text-base pl-2 pb-2 whitespace-pre-line",
                          children: item.value
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 29
                        }, _this), typeof item.value === "object" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {
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
          }, _this), index < data.data.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_3__.useTheme];
});

_c = Item;

var ProfileDetail2 = function ProfileDetail2(_ref3) {
  (0,_root_personal_CV_ts_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3);

  var data = [{
    icon: _libs_constants__WEBPACK_IMPORTED_MODULE_5__.IconType.WORK_EXPERIENCE,
    heading: "WORK EXPERIENCE",
    data: [{
      subheading: "Shift Asia",
      time: "03/2021 - 03/2022",
      projects: [{
        name: "Education",
        metas: [{
          title: "Job description",
          value: "Provides authentication module to support registration, login, update information between different platforms."
        }, {
          title: "Platform",
          display: "string",
          value: ["Spring Boot", " Gradle", " Cognito", " DynamoDB", " Redis", " Postgres", " Gulp", " Pug"]
        }, {
          title: "Position",
          value: "Fullstack"
        }, {
          title: null,
          display: "link",
          value: ["https://www.ei-navi.jp"]
        }]
      }, {
        name: "Internal Banking System",
        metas: [{
          title: "Job description",
          value: "This is the internal system of a banking system consisting of two parts, admin and user, supporting user management, campaigns, statistics,..."
        }, {
          title: "Platform",
          display: "string",
          value: ["NextJs/Mui", "Redis", " Mysql", "Spring Boot", "Multiple workspace"]
        }, {
          title: "Position",
          value: "Fullstack"
        }]
      }, {
        name: "Insurance System",
        metas: [{
          title: "Job description",
          value: "This is a contract management system, insurance, ... Supports the following interaction between users and admin ..."
        }, {
          title: "Platform",
          display: "string",
          value: ["NextJs/Mui", "SpringBoot", "Cognito", "Postgres", "Micro Services", "AWS Workspace"]
        }, {
          title: "Position",
          value: "Fullstack"
        }]
      }]
    }, {
      subheading: "Espx Media",
      time: "10/2019 - 03/2021",
      projects: [{
        name: "ESPx cloud",
        metas: [{
          title: "Job description",
          value: "Provide a live-stream platform that supports B2B and B2C systems with the following features:\n                    - Content management (category, event, movie, stream) \n                    - Actionable with viewers (live chat, q&a, survey, dialog\n                    - Special campaigns (authenticate, ticket, pass-code)\n                    - Statistics, reports\n                    "
        }, {
          title: "Platform",
          display: "string",
          value: ["FeathersJs (Nodejs)", " NextJs", " Angular", " Redis", " Postgres", " MongoDb", " SocketIO", " AWS", " DO", " Bunny / CloudFlare / CloudFront", " Firebase", " Twilio"]
        }, {
          title: "Position",
          value: "Technical Lead"
        }, {
          title: "Partner",
          display: "string",
          value: ["Mplay Asia", "National Library Board", "gradian", "National Gallary Singapore"]
        }, {
          title: "Link",
          display: "link",
          value: ["https://www.espx.cloud", "https://mplayasia.com/"]
        }]
      }, {
        name: "Outsourcing",
        metas: [{
          title: "Job description",
          value: "Provide solutions for customers with micro-sites"
        }, {
          title: "Platform",
          display: "string",
          value: ["Wordpress", "Express", "Mariadb", "WPVIP"]
        }, {
          title: "Position",
          value: "Technical Lead"
        }, {
          title: "Partner",
          display: "string",
          value: ["Grab", "OCBC", "Facebook"]
        }, {
          title: "Link",
          display: "link",
          value: ["https://wethinkdigital.fb.com/", "https://www.facebook.com/business/m/going-global"]
        }]
      }]
    }, {
      subheading: "Viral-work",
      time: "07/2018 - 10/2019",
      projects: [{
        name: "Platform KOL",
        metas: [{
          title: "Job description",
          value: "Provide KOL platform which manage influencer and branch to help them can work together\n                  - The platform supports connecting KOL and Brand together\n                  - Crawl data user from facebook\n                  - Manage KOL, BRAND, ADMIN\n                  - Manage campaign\n                    "
        }, {
          title: "Platform",
          display: "string",
          value: ["Express", "Laravel", "Mongodb", "Redis"]
        }, {
          title: "Position",
          value: "Backend developer"
        }]
      }, {
        name: "Crawler System",
        metas: [{
          title: "Job description",
          value: "Provide crawler support\n                  - Collect post information every day from social networks (facebook, instagram, youtube)\n                  - Crawl user's information\n                  - Screenshot post\n                    "
        }, {
          title: "Platform",
          display: "string",
          value: ["Python", "Socket", "Redis", "Mongodb", "Selenium", "Queue"]
        }, {
          title: "Position",
          value: "Backend developer"
        }]
      }]
    }, {
      subheading: "Solazu",
      time: "2016-07/2018",
      projects: [{
        name: "Hotel search system",
        metas: [{
          title: "Job description",
          value: "- 3rd hotel search system of Japan\n                  - Crawl data from 32 OTA service when search\n                  - Support deep-link\n                  - Minimize latency\n                    "
        }, {
          title: "Platform",
          display: "string",
          value: ["Ruby", "Redis", "Firebase", "ReactJs", "Elastic Search", "SideKiq", "Mysql"]
        }, {
          title: "Position",
          value: "Backend developer"
        }, {
          title: "Link",
          display: "link",
          value: ["https://www.travel.co.jp/"]
        }]
      }, {
        name: "Themes in theme-forest",
        metas: [{
          title: "Job description",
          value: "Generate themes/plugins to theme-forest\n                  - Build themes, plugins, Short-codes, ...\n                  - Major topics: education, music, hearty, events, ...\n                    "
        }, {
          title: "Platform",
          display: "string",
          value: ["CMS Wordpress"]
        }, {
          title: "Position",
          value: "Backend developer"
        }]
      }]
    }, {
      subheading: "Freelancer",
      time: "2015",
      projects: [{
        name: null,
        metas: [{
          title: "Platform",
          display: "string",
          value: ["wordpress", "laravel", "yii", "firebase", "payment gateway integration", "QR code", "VueJs"]
        }, {
          title: "Position",
          value: "Fullstack"
        }, {
          title: "Product",
          display: "string",
          value: ["Nhị Long", "Extrim", "Hoàng Anh", "Sabaidee", "Techvsi", "Nhật Quang", "Nhân Hòa"]
        }]
      }]
    }]
  }];
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "px-8",
    children: data.map(function (detail, idx) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {
        data: detail
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 483,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVEZXRhaWwyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJdGVtIiwiZGF0YSIsInRoZW1lIiwidXNlVGhlbWUiLCJpdGVtIiwiZGlzcGxheSIsInZhbHVlIiwibWFwIiwidGV4dCIsImlkeCIsImpvaW4iLCJpY29uIiwicHJpbWFyeSIsImJnSWNvbiIsIklucHV0RmllbGRUeXBlIiwiaGVhZGluZyIsImNvbG9yMiIsInN1Ykl0ZW0iLCJpbmRleCIsInN1YmhlYWRpbmciLCJ0aW1lIiwicHJvamVjdHMiLCJwcm9qZWN0IiwibmFtZSIsIm1ldGFzIiwidGl0bGUiLCJsZW5ndGgiLCJQcm9maWxlRGV0YWlsMiIsIkljb25UeXBlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBc0JBLElBQU1BLElBQUksR0FBRyxvQkFBeUI7QUFBQTs7QUFBQSxNQUF0QkMsSUFBc0IsUUFBdEJBLElBQXNCO0FBQ3BDLE1BQU1DLEtBQUssR0FBR0MscURBQVEsRUFBdEI7O0FBRUEsTUFBTUgsSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBYztBQUFBOztBQUFBLFFBQVhJLElBQVcsU0FBWEEsSUFBVzs7QUFDekIsWUFBUUEsSUFBSSxDQUFDQyxPQUFiO0FBQ0UsV0FBSyxNQUFMO0FBQ0UsOEJBQU9ELElBQUksQ0FBQ0UsS0FBWixnREFBTyxZQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDhCQUNyQjtBQUFlLHFCQUFTLEVBQUMscUJBQXpCO0FBQUEsc0JBQ0dEO0FBREgsYUFBVUMsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURxQjtBQUFBLFNBQWhCLENBQVA7O0FBTUYsV0FBSyxRQUFMO0FBQ0UsNEJBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0JB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RUVDLGFBQUssRUFBRSxDQUNMO0FBQ0VDLGVBQUssRUFBRSxVQURUO0FBRUVwQixpQkFBTyxFQUFFLFFBRlg7QUFHRUMsZUFBSyxFQUFFLENBQ0wsV0FESyxFQUVMLFNBRkssRUFHTCxLQUhLLEVBSUwsVUFKSyxFQUtMLDZCQUxLLEVBTUwsU0FOSyxFQU9MLE9BUEs7QUFIVCxTQURLLEVBY0w7QUFDRW1CLGVBQUssRUFBRSxVQURUO0FBRUVuQixlQUFLLEVBQUU7QUFGVCxTQWRLLEVBa0JMO0FBQ0VtQixlQUFLLEVBQUUsU0FEVDtBQUVFcEIsaUJBQU8sRUFBRSxRQUZYO0FBR0VDLGVBQUssRUFBRSxDQUNMLFVBREssRUFFTCxRQUZLLEVBR0wsV0FISyxFQUlMLFVBSkssRUFLTCxTQUxLLEVBTUwsWUFOSyxFQU9MLFVBUEs7QUFIVCxTQWxCSztBQUZULE9BRFE7QUFIWixLQWxUSTtBQUhSLEdBRHVCLENBQXpCO0FBbVdBdUIsU0FBTyxDQUFDQyxHQUFSLENBQVk3QixJQUFaO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLGNBQ0dBLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUN3QixNQUFELEVBQVN0QixHQUFUO0FBQUEsMEJBQ1IsOERBQUMsSUFBRDtBQUFnQixZQUFJLEVBQUVzQjtBQUF0QixTQUFXdEIsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0E1V0Q7O01BQU1rQixjO0FBOFdOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmQ2ODA2YWFjODNmNjI0NDYyNmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJRGV0YWlsLCBJVXNlciB9IGZyb20gXCJAL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvbGlicy90aGVtZVwiO1xuaW1wb3J0IElucHV0RmllbGQsIHsgSW5wdXRGaWVsZFR5cGUgfSBmcm9tIFwiLi4vLi4vSW5wdXRGaWVsZFwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiQC9saWJzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tIFwiQC9saWJzL2NvbnN0YW50c1wiO1xuXG50eXBlIEl0ZW1UeXBlID0ge1xuICBpY29uOiBJY29uVHlwZTtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBkYXRhOiB7XG4gICAgc3ViaGVhZGluZzogc3RyaW5nO1xuICAgIHRpbWU6IHN0cmluZztcbiAgICBwcm9qZWN0czoge1xuICAgICAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICAgIG1ldGFzOiB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGRpc3BsYXk/OiBcImxpc3RcIiB8IFwic3RyaW5nXCIgfCBcImxpbmtcIjtcbiAgICAgICAgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfVtdO1xuICAgIH1bXTtcbiAgfVtdO1xufTtcbnR5cGUgSXRlbVByb3BzID0ge1xuICBkYXRhOiBJdGVtVHlwZTtcbn07XG5cbmNvbnN0IEl0ZW0gPSAoeyBkYXRhIH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgSXRlbSA9ICh7IGl0ZW0gfSkgPT4ge1xuICAgIHN3aXRjaCAoaXRlbS5kaXNwbGF5KSB7XG4gICAgICBjYXNlIFwibGlzdFwiOlxuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZT8ubWFwKCh0ZXh0LCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgcGwtMiBwYi0yXCI+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSk7XG5cbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBwbC0yIHBiLTJcIj57aXRlbS52YWx1ZS5qb2luKFwiLCBcIil9PC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlPy5tYXAoKHRleHQsIGlkeCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cInRleHQtYmFzZSBwbC0yIHBiLTIgdGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgPGEgaHJlZj17dGV4dH0+e3RleHR9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBiLTJcIj5cbiAgICAgICAge2RhdGEuaWNvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtci0yIHRleHQteGwgcm91bmRlZC1mdWxsIHAtMiB0ZXh0LXdoaXRlIFwiICsgdGhlbWUucHJpbWFyeS5iZ0ljb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZCB0eXBlPXtJbnB1dEZpZWxkVHlwZS5JQ09OX0ZJRUxEfSB2YWx1ZT17ZGF0YS5pY29ufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZGF0YS5oZWFkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LXhsIGZvbnQtYm9sZCBcIiArIHRoZW1lLmNvbG9yMn0+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17ZGF0YS5oZWFkaW5nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj5cbiAgICAgICAge2RhdGEuZGF0YS5tYXAoKHN1Ykl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGItNCBwbC04IGJvcmRlci1sLTQgYm9yZGVyLWdyZWVuLTYwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3N1Ykl0ZW0uc3ViaGVhZGluZ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtzdWJJdGVtLnRpbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtNCB3LTQvNSBsaXN0LWRpc2NcIj5cbiAgICAgICAgICAgICAgICB7c3ViSXRlbT8ucHJvamVjdHM/Lm1hcCgocHJvamVjdCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkXCI+e3Byb2plY3QubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Lm1ldGFzPy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGl0ZW0udmFsdWUgPT09IFwic3RyaW5nXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBsLTIgcGItMiB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGl0ZW0udmFsdWUgPT09IFwib2JqZWN0XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW5kZXggPCBkYXRhLmRhdGEubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZG90dGVkIHB0LTIgbWItNFwiPjwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2ZpbGVEZXRhaWwyID0gKHt9KSA9PiB7XG4gIGNvbnN0IGRhdGE6IEl0ZW1UeXBlW10gPSBbXG4gICAge1xuICAgICAgaWNvbjogSWNvblR5cGUuV09SS19FWFBFUklFTkNFLFxuICAgICAgaGVhZGluZzogXCJXT1JLIEVYUEVSSUVOQ0VcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN1YmhlYWRpbmc6IFwiU2hpZnQgQXNpYVwiLFxuICAgICAgICAgIHRpbWU6IFwiMDMvMjAyMSAtIDAzLzIwMjJcIixcbiAgICAgICAgICBwcm9qZWN0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkVkdWNhdGlvblwiLFxuICAgICAgICAgICAgICBtZXRhczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkpvYiBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIFwiUHJvdmlkZXMgYXV0aGVudGljYXRpb24gbW9kdWxlIHRvIHN1cHBvcnQgcmVnaXN0cmF0aW9uLCBsb2dpbiwgdXBkYXRlIGluZm9ybWF0aW9uIGJldHdlZW4gZGlmZmVyZW50IHBsYXRmb3Jtcy5cIixcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxhdGZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcIlNwcmluZyBCb290XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIEdyYWRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiBDb2duaXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIER5bmFtb0RCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIFJlZGlzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIFBvc3RncmVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIEd1bHBcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgUHVnXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUG9zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkZ1bGxzdGFja1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJodHRwczovL3d3dy5laS1uYXZpLmpwXCJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkludGVybmFsIEJhbmtpbmcgU3lzdGVtXCIsXG4gICAgICAgICAgICAgIG1ldGFzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSm9iIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIGlzIHRoZSBpbnRlcm5hbCBzeXN0ZW0gb2YgYSBiYW5raW5nIHN5c3RlbSBjb25zaXN0aW5nIG9mIHR3byBwYXJ0cywgYWRtaW4gYW5kIHVzZXIsIHN1cHBvcnRpbmcgdXNlciBtYW5hZ2VtZW50LCBjYW1wYWlnbnMsIHN0YXRpc3RpY3MsLi4uXCIsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBsYXRmb3JtXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJOZXh0SnMvTXVpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUmVkaXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgTXlzcWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTcHJpbmcgQm9vdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIk11bHRpcGxlIHdvcmtzcGFjZVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJGdWxsc3RhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJJbnN1cmFuY2UgU3lzdGVtXCIsXG4gICAgICAgICAgICAgIG1ldGFzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSm9iIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIGlzIGEgY29udHJhY3QgbWFuYWdlbWVudCBzeXN0ZW0sIGluc3VyYW5jZSwgLi4uIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgaW50ZXJhY3Rpb24gYmV0d2VlbiB1c2VycyBhbmQgYWRtaW4gLi4uXCIsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBsYXRmb3JtXCIsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJOZXh0SnMvTXVpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU3ByaW5nQm9vdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNvZ25pdG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJQb3N0Z3Jlc1wiLFxuICAgICAgICAgICAgICAgICAgICBcIk1pY3JvIFNlcnZpY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQVdTIFdvcmtzcGFjZVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJGdWxsc3RhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3ViaGVhZGluZzogXCJFc3B4IE1lZGlhXCIsXG4gICAgICAgICAgdGltZTogXCIxMC8yMDE5IC0gMDMvMjAyMVwiLFxuICAgICAgICAgIHByb2plY3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiRVNQeCBjbG91ZFwiLFxuICAgICAgICAgICAgICBtZXRhczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkpvYiBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGBQcm92aWRlIGEgbGl2ZS1zdHJlYW0gcGxhdGZvcm0gdGhhdCBzdXBwb3J0cyBCMkIgYW5kIEIyQyBzeXN0ZW1zIHdpdGggdGhlIGZvbGxvd2luZyBmZWF0dXJlczpcbiAgICAgICAgICAgICAgICAgICAgLSBDb250ZW50IG1hbmFnZW1lbnQgKGNhdGVnb3J5LCBldmVudCwgbW92aWUsIHN0cmVhbSkgXG4gICAgICAgICAgICAgICAgICAgIC0gQWN0aW9uYWJsZSB3aXRoIHZpZXdlcnMgKGxpdmUgY2hhdCwgcSZhLCBzdXJ2ZXksIGRpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAtIFNwZWNpYWwgY2FtcGFpZ25zIChhdXRoZW50aWNhdGUsIHRpY2tldCwgcGFzcy1jb2RlKVxuICAgICAgICAgICAgICAgICAgICAtIFN0YXRpc3RpY3MsIHJlcG9ydHNcbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxhdGZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcIkZlYXRoZXJzSnMgKE5vZGVqcylcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgTmV4dEpzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIEFuZ3VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgUmVkaXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgUG9zdGdyZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgTW9uZ29EYlwiLFxuICAgICAgICAgICAgICAgICAgICBcIiBTb2NrZXRJT1wiLFxuICAgICAgICAgICAgICAgICAgICBcIiBBV1NcIixcbiAgICAgICAgICAgICAgICAgICAgXCIgRE9cIixcbiAgICAgICAgICAgICAgICAgICAgXCIgQnVubnkgLyBDbG91ZEZsYXJlIC8gQ2xvdWRGcm9udFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiBGaXJlYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiBUd2lsaW9cIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiVGVjaG5pY2FsIExlYWRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBhcnRuZXJcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcIk1wbGF5IEFzaWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJOYXRpb25hbCBMaWJyYXJ5IEJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JhZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIk5hdGlvbmFsIEdhbGxhcnkgU2luZ2Fwb3JlXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGlua1wiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1wiaHR0cHM6Ly93d3cuZXNweC5jbG91ZFwiLCBcImh0dHBzOi8vbXBsYXlhc2lhLmNvbS9cIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiT3V0c291cmNpbmdcIixcbiAgICAgICAgICAgICAgbWV0YXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJKb2IgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlByb3ZpZGUgc29sdXRpb25zIGZvciBjdXN0b21lcnMgd2l0aCBtaWNyby1zaXRlc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxhdGZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1wiV29yZHByZXNzXCIsIFwiRXhwcmVzc1wiLCBcIk1hcmlhZGJcIiwgXCJXUFZJUFwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJUZWNobmljYWwgTGVhZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGFydG5lclwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJHcmFiXCIsIFwiT0NCQ1wiLCBcIkZhY2Vib29rXCJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGlua1wiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd2V0aGlua2RpZ2l0YWwuZmIuY29tL1wiLFxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9idXNpbmVzcy9tL2dvaW5nLWdsb2JhbFwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3ViaGVhZGluZzogXCJWaXJhbC13b3JrXCIsXG4gICAgICAgICAgdGltZTogXCIwNy8yMDE4IC0gMTAvMjAxOVwiLFxuICAgICAgICAgIHByb2plY3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiUGxhdGZvcm0gS09MXCIsXG4gICAgICAgICAgICAgIG1ldGFzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSm9iIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogYFByb3ZpZGUgS09MIHBsYXRmb3JtIHdoaWNoIG1hbmFnZSBpbmZsdWVuY2VyIGFuZCBicmFuY2ggdG8gaGVscCB0aGVtIGNhbiB3b3JrIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgICAtIFRoZSBwbGF0Zm9ybSBzdXBwb3J0cyBjb25uZWN0aW5nIEtPTCBhbmQgQnJhbmQgdG9nZXRoZXJcbiAgICAgICAgICAgICAgICAgIC0gQ3Jhd2wgZGF0YSB1c2VyIGZyb20gZmFjZWJvb2tcbiAgICAgICAgICAgICAgICAgIC0gTWFuYWdlIEtPTCwgQlJBTkQsIEFETUlOXG4gICAgICAgICAgICAgICAgICAtIE1hbmFnZSBjYW1wYWlnblxuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJQbGF0Zm9ybVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJFeHByZXNzXCIsIFwiTGFyYXZlbFwiLCBcIk1vbmdvZGJcIiwgXCJSZWRpc1wiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJCYWNrZW5kIGRldmVsb3BlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkNyYXdsZXIgU3lzdGVtXCIsXG4gICAgICAgICAgICAgIG1ldGFzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSm9iIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogYFByb3ZpZGUgY3Jhd2xlciBzdXBwb3J0XG4gICAgICAgICAgICAgICAgICAtIENvbGxlY3QgcG9zdCBpbmZvcm1hdGlvbiBldmVyeSBkYXkgZnJvbSBzb2NpYWwgbmV0d29ya3MgKGZhY2Vib29rLCBpbnN0YWdyYW0sIHlvdXR1YmUpXG4gICAgICAgICAgICAgICAgICAtIENyYXdsIHVzZXIncyBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgLSBTY3JlZW5zaG90IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxhdGZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcIlB5dGhvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIlNvY2tldFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlJlZGlzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTW9uZ29kYlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlNlbGVuaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUXVldWVcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQmFja2VuZCBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3ViaGVhZGluZzogXCJTb2xhenVcIixcbiAgICAgICAgICB0aW1lOiBcIjIwMTYtMDcvMjAxOFwiLFxuICAgICAgICAgIHByb2plY3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiSG90ZWwgc2VhcmNoIHN5c3RlbVwiLFxuICAgICAgICAgICAgICBtZXRhczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkpvYiBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGAtIDNyZCBob3RlbCBzZWFyY2ggc3lzdGVtIG9mIEphcGFuXG4gICAgICAgICAgICAgICAgICAtIENyYXdsIGRhdGEgZnJvbSAzMiBPVEEgc2VydmljZSB3aGVuIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgLSBTdXBwb3J0IGRlZXAtbGlua1xuICAgICAgICAgICAgICAgICAgLSBNaW5pbWl6ZSBsYXRlbmN5XG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJQbGF0Zm9ybVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUnVieVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlJlZGlzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRmlyZWJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJSZWFjdEpzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRWxhc3RpYyBTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTaWRlS2lxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTXlzcWxcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQmFja2VuZCBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcImh0dHBzOi8vd3d3LnRyYXZlbC5jby5qcC9cIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiVGhlbWVzIGluIHRoZW1lLWZvcmVzdFwiLFxuICAgICAgICAgICAgICBtZXRhczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkpvYiBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGBHZW5lcmF0ZSB0aGVtZXMvcGx1Z2lucyB0byB0aGVtZS1mb3Jlc3RcbiAgICAgICAgICAgICAgICAgIC0gQnVpbGQgdGhlbWVzLCBwbHVnaW5zLCBTaG9ydC1jb2RlcywgLi4uXG4gICAgICAgICAgICAgICAgICAtIE1ham9yIHRvcGljczogZWR1Y2F0aW9uLCBtdXNpYywgaGVhcnR5LCBldmVudHMsIC4uLlxuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJQbGF0Zm9ybVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXCJDTVMgV29yZHByZXNzXCJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUG9zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkJhY2tlbmQgZGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN1YmhlYWRpbmc6IFwiRnJlZWxhbmNlclwiLFxuICAgICAgICAgIHRpbWU6IFwiMjAxNVwiLFxuICAgICAgICAgIHByb2plY3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgIG1ldGFzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUGxhdGZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcIndvcmRwcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImxhcmF2ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5aWlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmaXJlYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBheW1lbnQgZ2F0ZXdheSBpbnRlZ3JhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIlFSIGNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJWdWVKc1wiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJGdWxsc3RhY2tcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByb2R1Y3RcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICBcIk5o4buLIExvbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFeHRyaW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJIb8OgbmcgQW5oXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU2FiYWlkZWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUZWNodnNpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTmjhuq10IFF1YW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTmjDom4gSMOyYVwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOFwiPlxuICAgICAge2RhdGEubWFwKChkZXRhaWwsIGlkeCkgPT4gKFxuICAgICAgICA8SXRlbSBrZXk9e2lkeH0gZGF0YT17ZGV0YWlsfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRGV0YWlsMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=