webpackJsonp([0],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-78d3d5f3",
  /* cssModules */
  null
)
Component.options.__file = "/Users/mark1xie/workplace/vue/iview-project/src/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78d3d5f3", Component.options)
  } else {
    hotAPI.reload("data-v-78d3d5f3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    data: function data() {
        return {
            reason: "test"
        };
    },
    created: function created() {
        //        var params = {'cityid':12,'dtype':'','key':'62cbf02a594e75b4cbce565642b1dc36'};
        //        this.axios.get('/movie/movies.today',{params: params})
        //            .then(data => {
        //                console.log(data);
        //            })
        //            .catch(err => {
        //                console.log("error");
        //            })
        this.$http.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php").then(function (res) {
            console.log(res);
        });
    },

    methods: {
        handleStart: function handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76ecb6e76d2c438065f90cd7f8fa7371.png";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('Row', {
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('h1', [_c('img', {
    attrs: {
      "src": __webpack_require__(46)
    }
  })]), _vm._v(" "), _c('h2', [_c('p', [_vm._v("Welcome to your iView app!")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": _vm.handleStart
    }
  }, [_vm._v("Start iView")])], 1), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.reason))])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-78d3d5f3", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.chunk.js.map