webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/ship-list/index.js":
/*!*******************************************!*\
  !*** ./src/components/ship-list/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-fela */ "./node_modules/react-fela/es/index.js");
/* harmony import */ var _range_calculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../range-calculator */ "./src/components/range-calculator/index.js");
/* harmony import */ var _ship_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ship-card */ "./src/components/ship-card/index.js");
/* harmony import */ var _ship_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ship-details */ "./src/components/ship-details/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");







var _jsxFileName = "E:\\Projects\\wolfPackCalc\\src\\components\\ship-list\\index.js";







var ShipList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShipList, _React$Component);

  function ShipList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShipList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShipList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isFindShipDialogOpen: false,
      ships: [{
        details: {
          mastHeight: "",
          length: "",
          weight: ""
        },
        range: {
          isZoomed: false,
          mastHeight: "",
          centiradians: "",
          hectoMeters: 3
        }
      }]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getNewShip", function () {
      return {
        details: {
          mastHeight: "",
          length: "",
          weight: ""
        },
        range: {
          isZoomed: false,
          mastHeight: "",
          centiradians: "",
          hectoMeters: 3
        }
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addShip", function () {
      var currentShipList = _this.state.ships;
      currentShipList.push(_this.getNewShip());

      _this.setState({
        ships: currentShipList
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setShipRange", function (key, value, property) {
      var currentShips = _this.state.ships;
      currentShips[key].range[property] = value;

      _this.setState({
        ships: currentShips
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setShipDetails", function (key, value, property) {
      var currentShips = _this.state.ships;
      currentShips[key].details[property] = value;

      _this.setState({
        ships: currentShips
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShipList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.state.ships.map(function (ship, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ship_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: i,
          removeShip: function removeShip() {
            var currentShips = _this2.state.ships;
            currentShips.splice(i, 1);

            _this2.setState({
              ships: currentShips
            });
          },
          showFindShipDialog: function showFindShipDialog() {
            _this2.setState({
              isFindShipDialogOpen: true
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ship_details__WEBPACK_IMPORTED_MODULE_11__["default"], {
          shipDetails: ship.details,
          setShipDetail: function setShipDetail(name, value) {
            _this2.setShipDetails(i, value, name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PaddedDivider, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_range_calculator__WEBPACK_IMPORTED_MODULE_9__["default"], {
          rangeDetails: ship.range,
          mastHeight: ship.details.mastHeight,
          getCentiradians: function getCentiradians(value) {
            _this2.setShipRange(i, value, "centiradians");
          },
          handleZoomSwitch: function handleZoomSwitch(value) {
            _this2.setShipRange(i, value, "isZoomed");
          },
          getHectoMeters: function getHectoMeters(value) {
            _this2.setShipRange(i, value, "hectoMeters");
          },
          resetShipRange: function resetShipRange() {
            var currentShips = _this2.state.ships;
            currentShips[i].range = _this2.getNewShip();

            _this2.setState({
              ships: currentShips
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FullWidthPaper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FullWidthButtonBase, {
        focusRipple: true,
        onClick: this.addShip,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
        variant: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Add Ship"))));
    }
  }]);

  return ShipList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var FullWidthPaper = Object(react_fela__WEBPACK_IMPORTED_MODULE_8__["createComponentWithProxy"])(function (_ref) {
  var theme = _ref.theme;
  return {
    background: theme.primary[100],
    marginBottom: "8px"
  };
}, _material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Paper"]);
var FullWidthButtonBase = Object(react_fela__WEBPACK_IMPORTED_MODULE_8__["createComponentWithProxy"])(function () {
  return {
    width: "100%",
    padding: "12px"
  };
}, _material_ui_core__WEBPACK_IMPORTED_MODULE_12__["ButtonBase"]);
var PaddedDivider = Object(react_fela__WEBPACK_IMPORTED_MODULE_8__["createComponentWithProxy"])(function () {
  return {
    marginTop: "4px",
    marginBottom: "4px"
  };
}, _material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Divider"]);
/* harmony default export */ __webpack_exports__["default"] = (ShipList);

/***/ })

})
//# sourceMappingURL=index.js.35b3b8f3023928cbea78.hot-update.js.map