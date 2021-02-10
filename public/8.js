(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Index",
  data: function data() {
    return {
      columns: [{
        label: 'Изображение',
        field: 'img'
      }, {
        label: 'Название',
        field: 'name'
      }, {
        label: 'Тип',
        field: 'type'
      }, {
        label: 'Размер',
        field: 'size'
      }, {
        label: 'Цены',
        field: 'price'
      }, {
        label: 'Параметры',
        field: ['delete', 'edit', 'view']
      }],
      data: []
    };
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      axios.get('http://mozzarella/api/get-products').then(function (response) {
        console.log(response.data);
        _this.data = response.data;
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this2 = this;

      axios["delete"]("http://mozzarella/api/product/delete/".concat(id)).then(function (response) {
        var i = _this2.data.map(function (item) {
          return item.id;
        }).indexOf(id);

        _this2.data.splice(i, 1);
      });
    }
  },
  mounted: function mounted() {
    this.getProducts();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Index.vue?vue&type=template&id=42213dbc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Dashboard/Index.vue?vue&type=template&id=42213dbc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _c("vue-good-table", {
            attrs: {
              columns: _vm.columns,
              rows: _vm.data,
              "search-options": { enabled: true },
              "pagination-options": { enabled: true },
              "line-numbers": true
            },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function(props) {
                  return [
                    props.column.field === "img"
                      ? _c("span", [
                          _c("img", {
                            staticStyle: { width: "100px", height: "100px" },
                            attrs: { src: props.row.img, alt: "" }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    props.column.field === "name"
                      ? _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(props.row.name) +
                              "\n        "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    props.column.field === "type"
                      ? _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(props.row.type_id) +
                              "\n        "
                          )
                        ])
                      : props.column.field === "size"
                      ? _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(props.row.size) +
                              "\n        "
                          )
                        ])
                      : props.column.field === "price"
                      ? _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(props.row.price) +
                              "\n        "
                          )
                        ])
                      : props.column.field[0] === "delete" &&
                        props.column.field[1] === "edit" &&
                        props.column.field[2] === "view"
                      ? _c(
                          "span",
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    if (
                                      $event.target !== $event.currentTarget
                                    ) {
                                      return null
                                    }
                                    $event.preventDefault()
                                    return _vm.deleteProduct(props.row.id)
                                  }
                                }
                              },
                              [_vm._v("Удалить")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "productEdit",
                                    params: { id: props.row.id }
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-green" },
                                  [_vm._v("Изменить")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "productShow",
                                    params: { id: props.row.id }
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "btn btn-primary" }, [
                                  _vm._v("Вид")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col" },
        [
          _c(
            "router-link",
            { staticClass: "btn btn-success", attrs: { to: { path: "add" } } },
            [_vm._v("Add product")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_42213dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=42213dbc&scoped=true& */ "./resources/js/components/Admin/Dashboard/Index.vue?vue&type=template&id=42213dbc&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_42213dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_42213dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "42213dbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Index.vue?vue&type=template&id=42213dbc&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Index.vue?vue&type=template&id=42213dbc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_42213dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=42213dbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Index.vue?vue&type=template&id=42213dbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_42213dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_42213dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);