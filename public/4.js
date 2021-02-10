(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic_build_translations_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic/build/translations/ru */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/translations/ru.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic_build_translations_ru__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic_build_translations_ru__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    'multiselect': vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'subscript', 'superscript', 'bulletedList', 'numberedList', 'blockQuote', '|', ''],
        language: 'ru'
      },
      optionsMult: ['list', 'of', 'options'],
      img: '',
      data: {},
      types: [],
      ingredients: [],
      values: [],
      options: [{
        language: 'Javascript',
        libs: [{
          name: 'Vue.js',
          category: 'Front-end'
        }, {
          name: 'Adonis',
          category: 'Backend'
        }]
      }, {
        language: 'Ruby',
        libs: [{
          name: 'Rails',
          category: 'Backend'
        }, {
          name: 'Sinatra',
          category: 'Backend'
        }]
      }, {
        language: 'Other',
        libs: [{
          name: 'Laravel',
          category: 'Backend'
        }, {
          name: 'Phoenix',
          category: 'Backend'
        }]
      }]
    };
  },
  methods: {
    dataIngredientsForEach: function dataIngredientsForEach(element, index) {
      this.data.ingredients[index] = element.id;
    },
    convertAndSaveImageForOption: function convertAndSaveImageForOption(e) {
      var _this = this;

      if (e.target.files[0] !== undefined) {
        var selectedImage = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.img = e.target.result;
        };

        reader.readAsDataURL(selectedImage);
      } else {
        this.data.img = '';
      }
    },
    createProduct: function createProduct() {
      var _this2 = this;

      this.data.ingredients = [];
      this.values.forEach(this.dataIngredientsForEach);
      this.data.img = this.img;
      axios.post('http://mozzarella/api/product/add', this.data).then(function (response) {// console.log('work');
        // this.$router.push({name: 'productDashboard'});
      })["catch"](function (error) {
        return console.log(error);
      })["finally"](function () {
        return _this2.loading = true;
      });
    },
    getData: function getData() {
      var _this3 = this;

      axios.get('http://mozzarella/api/getDatatoCreateProduct').then(function (response) {
        _this3.types = response.data.types;
        _this3.ingredients = response.data.ingredients; // console.log(response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getData();
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ck-editor__editable[data-v-67408aea] {\n    min-height: auto;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=template&id=67408aea&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=template&id=67408aea&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.createProduct($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.name,
                        expression: "data.name"
                      }
                    ],
                    attrs: { type: "text", name: "name" },
                    domProps: { value: _vm.data.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "name", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.type_id,
                          expression: "data.type_id"
                        }
                      ],
                      attrs: { name: "type" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.data,
                            "type_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.types, function(type) {
                      return _c("option", { domProps: { value: type.id } }, [
                        _vm._v(_vm._s(type.name))
                      ])
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-9" },
                  [
                    _c("multiselect", {
                      attrs: {
                        name: "ingredients",
                        options: _vm.ingredients,
                        multiple: true,
                        "close-on-select": false,
                        "clear-on-select": false,
                        "preserve-search": true,
                        placeholder: "Pick some",
                        label: "name",
                        "track-by": "name",
                        "preselect-first": true
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "selection",
                          fn: function(ref) {
                            var values = ref.values
                            var search = ref.search
                            var isOpen = ref.isOpen
                            return [
                              values.length && !isOpen
                                ? _c(
                                    "span",
                                    { staticClass: "multiselect__single" },
                                    [
                                      _vm._v(
                                        _vm._s(values.length) +
                                          " options selected"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.values,
                        callback: function($$v) {
                          _vm.values = $$v
                        },
                        expression: "values"
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _c("input", {
                    attrs: { type: "file", name: "media" },
                    on: { change: _vm.convertAndSaveImageForOption }
                  }),
                  _vm._v(" "),
                  _c("img", { attrs: { src: _vm.img, alt: "" } })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.size,
                        expression: "data.size"
                      }
                    ],
                    attrs: { type: "text", name: "size" },
                    domProps: { value: _vm.data.size },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "size", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.price,
                        expression: "data.price"
                      }
                    ],
                    attrs: { type: "text", name: "price" },
                    domProps: { value: _vm.data.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "price", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("add Product")]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left" }, [
      _c("span", { staticClass: "h3" }, [_vm._v("Название Продукта")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("span", { staticClass: "h3" }, [_vm._v("Категория продукта")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("span", { staticClass: "h3" }, [_vm._v("Ингредиенты")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("span", { staticClass: "h3" }, [_vm._v("Изображение")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("span", { staticClass: "h3" }, [_vm._v("size")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("span", { staticClass: "h3" }, [_vm._v("Цена")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Add.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Add.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_67408aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=67408aea&scoped=true& */ "./resources/js/components/Admin/Dashboard/Add.vue?vue&type=template&id=67408aea&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Dashboard/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Add_vue_vue_type_style_index_1_id_67408aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css& */ "./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_67408aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_67408aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67408aea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Dashboard/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_67408aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=style&index=1&id=67408aea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_67408aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_67408aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_67408aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_67408aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Admin/Dashboard/Add.vue?vue&type=template&id=67408aea&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Dashboard/Add.vue?vue&type=template&id=67408aea&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_67408aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=67408aea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Dashboard/Add.vue?vue&type=template&id=67408aea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_67408aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_67408aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);