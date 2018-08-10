/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/faker.js":
/*!**********************!*\
  !*** ./src/faker.js ***!
  \**********************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
const users = {
  mathew: {
    id: 1,
    name: "Mathew",
    role: "admin"
  },
  george: {
    id: 2,
    name: "George",
    role: "editor"
  },
  johnny: {
    id: 3,
    name: "Johnny",
    role: "customer"
  }
}

const getUser = (req) => {
  const auth = req.get("Authorization")

  return users[auth] === undefined ? null : users[auth]
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-middleware */ "graphql-middleware");
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions */ "./src/permissions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers.js");
/* harmony import */ var _faker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faker */ "./src/faker.js");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema.graphql */ "./src/schema.graphql");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_schema_graphql__WEBPACK_IMPORTED_MODULE_6__);










const schemaWithMiddleware = Object(graphql_middleware__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(
  Object(graphql_tools__WEBPACK_IMPORTED_MODULE_1__["makeExecutableSchema"])({ typeDefs: (_schema_graphql__WEBPACK_IMPORTED_MODULE_6___default()), resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"] }),
  _permissions__WEBPACK_IMPORTED_MODULE_3__["permissions"]
)

const Server = new apollo_server__WEBPACK_IMPORTED_MODULE_2__["ApolloServer"]({
  schema: schemaWithMiddleware,
  context: ({ req }) => ({
    ...req,
    user: Object(_faker__WEBPACK_IMPORTED_MODULE_5__["getUser"])(req)
  })
})

const options = { port: 4000 }

Server.listen(options).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
}).catch((e) => {
  console.error(e)
})

/***/ }),

/***/ "./src/permissions.js":
/*!****************************!*\
  !*** ./src/permissions.js ***!
  \****************************/
/*! exports provided: permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissions", function() { return permissions; });
/* harmony import */ var graphql_shield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-shield */ "graphql-shield");
/* harmony import */ var graphql_shield__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_shield__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);



const isAuthenticated = Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["rule"])({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user !== null)

const isAdmin = Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["rule"])({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user && ctx.user.role === "admin")

const isEditor = Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["rule"])({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.user && ctx.user.role === "editor")

const options = { allowExternalErrors: true }

const permissions = Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["shield"])({
  Query: {
    frontPage: Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["not"])(isAuthenticated),
    fruits: Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["and"])(isAuthenticated, Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["or"])(isAdmin, isEditor)),
    customers: Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["and"])(isAuthenticated, isAdmin)
  },
  Mutation: {
    addFruitToBasket: isAuthenticated
  },
  Fruit: isAuthenticated,
  Customer: isAdmin
}, options)

/***/ }),

/***/ "./src/resolvers.js":
/*!**************************!*\
  !*** ./src/resolvers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const resolvers = {
  Query: {
    frontPage: () => [
      { name: "orange", count: 10 },
      { name: "apple", count: 1 }
    ],
    fruits: () => [
      { name: "lemon", count: 2 }
    ]
  }
};

/* harmony default export */ __webpack_exports__["default"] = (resolvers);


/***/ }),

/***/ "./src/schema.graphql":
/*!****************************!*\
  !*** ./src/schema.graphql ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = `type Fruit {
  name: String!
  count: Int!
}

type Customer {
  id: ID!
  basket: [Fruit!]!
}

type Query {
  frontPage: [Fruit!]!
  fruits: [Fruit!]!
  customers: [Customer!]!
}

type Mutation {
  addFruitToBasket: Boolean!
}
`

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "graphql-middleware":
/*!*************************************!*\
  !*** external "graphql-middleware" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-middleware");

/***/ }),

/***/ "graphql-shield":
/*!*********************************!*\
  !*** external "graphql-shield" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-shield");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVybWlzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hLmdyYXBocWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtbWlkZGxld2FyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtc2hpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10b29sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhbWRhXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIwQjtBQUNLO0FBQ1I7O0FBRUQ7QUFDdEI7QUFDa0I7O0FBRWxCOztBQUVBO0FBQ0EsOEVBQXdCLG9JQUFzQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELGlCQUFpQjs7QUFFakIsOEJBQThCLE1BQU07QUFDcEMscUNBQXFDLElBQUk7QUFDekMsQ0FBQztBQUNEO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmlEO0FBQ2xEOztBQUVBLHFGQUE4QixzQkFBc0I7O0FBRXBELDZFQUFzQixzQkFBc0I7O0FBRTVDLDhFQUF1QixzQkFBc0I7O0FBRTdDLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDLFU7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ25CQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCB1c2VycyA9IHtcbiAgbWF0aGV3OiB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJNYXRoZXdcIixcbiAgICByb2xlOiBcImFkbWluXCJcbiAgfSxcbiAgZ2VvcmdlOiB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJHZW9yZ2VcIixcbiAgICByb2xlOiBcImVkaXRvclwiXG4gIH0sXG4gIGpvaG5ueToge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiSm9obm55XCIsXG4gICAgcm9sZTogXCJjdXN0b21lclwiXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAocmVxKSA9PiB7XG4gIGNvbnN0IGF1dGggPSByZXEuZ2V0KFwiQXV0aG9yaXphdGlvblwiKVxuXG4gIHJldHVybiB1c2Vyc1thdXRoXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHVzZXJzW2F1dGhdXG59IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAnZ3JhcGhxbC1taWRkbGV3YXJlJ1xuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdncmFwaHFsLXRvb2xzJ1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlcidcblxuaW1wb3J0IHsgcGVybWlzc2lvbnMgfSBmcm9tICcuL3Blcm1pc3Npb25zJ1xuaW1wb3J0IHJlc29sdmVycyBmcm9tICcuL3Jlc29sdmVycydcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuL2Zha2VyJ1xuXG5pbXBvcnQgdHlwZURlZnMgZnJvbSAnLi9zY2hlbWEuZ3JhcGhxbCdcblxuY29uc3Qgc2NoZW1hV2l0aE1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoXG4gIG1ha2VFeGVjdXRhYmxlU2NoZW1hKHsgdHlwZURlZnMsIHJlc29sdmVycyB9KSxcbiAgcGVybWlzc2lvbnNcbilcblxuY29uc3QgU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHNjaGVtYTogc2NoZW1hV2l0aE1pZGRsZXdhcmUsXG4gIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiAoe1xuICAgIC4uLnJlcSxcbiAgICB1c2VyOiBnZXRVc2VyKHJlcSlcbiAgfSlcbn0pXG5cbmNvbnN0IG9wdGlvbnMgPSB7IHBvcnQ6IDQwMDAgfVxuXG5TZXJ2ZXIubGlzdGVuKG9wdGlvbnMpLnRoZW4oKHsgdXJsIH0pID0+IHtcbiAgY29uc29sZS5sb2coYPCfmoAgIFNlcnZlciByZWFkeSBhdCAke3VybH1gKVxufSkuY2F0Y2goKGUpID0+IHtcbiAgY29uc29sZS5lcnJvcihlKVxufSkiLCJpbXBvcnQgeyBydWxlLCBzaGllbGQsIGFuZCwgb3IsIG5vdCwgYWxsb3csIGRlbnkgfSBmcm9tICdncmFwaHFsLXNoaWVsZCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHJ1bGUoeyBjYWNoZTogJ2NvbnRleHR1YWwnIH0pKGFzeW5jIChwYXJlbnQsIGFyZ3MsIGN0eCwgaW5mbykgPT4gY3R4LnVzZXIgIT09IG51bGwpXG5cbmNvbnN0IGlzQWRtaW4gPSBydWxlKHsgY2FjaGU6ICdjb250ZXh0dWFsJyB9KShhc3luYyAocGFyZW50LCBhcmdzLCBjdHgsIGluZm8pID0+IGN0eC51c2VyICYmIGN0eC51c2VyLnJvbGUgPT09IFwiYWRtaW5cIilcblxuY29uc3QgaXNFZGl0b3IgPSBydWxlKHsgY2FjaGU6ICdjb250ZXh0dWFsJyB9KShhc3luYyAocGFyZW50LCBhcmdzLCBjdHgsIGluZm8pID0+IGN0eC51c2VyICYmIGN0eC51c2VyLnJvbGUgPT09IFwiZWRpdG9yXCIpXG5cbmNvbnN0IG9wdGlvbnMgPSB7IGFsbG93RXh0ZXJuYWxFcnJvcnM6IHRydWUgfVxuXG5leHBvcnQgY29uc3QgcGVybWlzc2lvbnMgPSBzaGllbGQoe1xuICBRdWVyeToge1xuICAgIGZyb250UGFnZTogbm90KGlzQXV0aGVudGljYXRlZCksXG4gICAgZnJ1aXRzOiBhbmQoaXNBdXRoZW50aWNhdGVkLCBvcihpc0FkbWluLCBpc0VkaXRvcikpLFxuICAgIGN1c3RvbWVyczogYW5kKGlzQXV0aGVudGljYXRlZCwgaXNBZG1pbilcbiAgfSxcbiAgTXV0YXRpb246IHtcbiAgICBhZGRGcnVpdFRvQmFza2V0OiBpc0F1dGhlbnRpY2F0ZWRcbiAgfSxcbiAgRnJ1aXQ6IGlzQXV0aGVudGljYXRlZCxcbiAgQ3VzdG9tZXI6IGlzQWRtaW5cbn0sIG9wdGlvbnMpIiwiY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIGZyb250UGFnZTogKCkgPT4gW1xuICAgICAgeyBuYW1lOiBcIm9yYW5nZVwiLCBjb3VudDogMTAgfSxcbiAgICAgIHsgbmFtZTogXCJhcHBsZVwiLCBjb3VudDogMSB9XG4gICAgXSxcbiAgICBmcnVpdHM6ICgpID0+IFtcbiAgICAgIHsgbmFtZTogXCJsZW1vblwiLCBjb3VudDogMiB9XG4gICAgXVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGB0eXBlIEZydWl0IHtcbiAgbmFtZTogU3RyaW5nIVxuICBjb3VudDogSW50IVxufVxuXG50eXBlIEN1c3RvbWVyIHtcbiAgaWQ6IElEIVxuICBiYXNrZXQ6IFtGcnVpdCFdIVxufVxuXG50eXBlIFF1ZXJ5IHtcbiAgZnJvbnRQYWdlOiBbRnJ1aXQhXSFcbiAgZnJ1aXRzOiBbRnJ1aXQhXSFcbiAgY3VzdG9tZXJzOiBbQ3VzdG9tZXIhXSFcbn1cblxudHlwZSBNdXRhdGlvbiB7XG4gIGFkZEZydWl0VG9CYXNrZXQ6IEJvb2xlYW4hXG59XG5gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLW1pZGRsZXdhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1zaGllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9