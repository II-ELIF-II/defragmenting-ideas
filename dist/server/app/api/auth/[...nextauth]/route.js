"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Work_Projects_defragmenting_ideas_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\Work\\\\Projects\\\\defragmenting-ideas\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: E_Work_Projects_defragmenting_ideas_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDV29yayU1Q1Byb2plY3RzJTVDZGVmcmFnbWVudGluZy1pZGVhcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RSUzQSU1Q1dvcmslNUNQcm9qZWN0cyU1Q2RlZnJhZ21lbnRpbmctaWRlYXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZyYWdtZW50aW5nLWlkZWFzLz8wMDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXFdvcmtcXFxcUHJvamVjdHNcXFxcZGVmcmFnbWVudGluZy1pZGVhc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcV29ya1xcXFxQcm9qZWN0c1xcXFxkZWZyYWdtZW50aW5nLWlkZWFzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/db */ \"(rsc)/./src/app/db.ts\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_app_db__WEBPACK_IMPORTED_MODULE_0__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const { email, password } = credentials;\n                //Check if required data is even there\n                if (!email || !password || email === \"\" || password === \"\") {\n                    return null;\n                }\n                //Try to get the user\n                const user = await _app_db__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                    where: {\n                        email: email\n                    }\n                });\n                //Check if user exists\n                if (!user) return null;\n                // console.log(\"user exists\");\n                //Check if passwords are correct\n                if (password !== user.password) return null;\n                // console.log(\"password verified\")\n                // console.log(user)\n                //Return user if everything is correct\n                return user;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    debug: \"development\" === \"development\",\n    callbacks: {\n        async jwt ({ token, user, session, trigger }) {\n            //console.log(\"JWT: \\n\", {token, user, session});\n            if (trigger === \"update\" && session?.name) {\n                token.name = session.name;\n            }\n            //Pass-on from User {userID, isAdmin} to token\n            if (user) {\n                return {\n                    ...token,\n                    id: user.id,\n                    isAdmin: user.isAdmin\n                };\n            }\n            return token;\n        },\n        async session ({ session, token, user }) {\n            //console.log(\"Session: \\n\", {session, token, user});\n            //Pass-on from Token {userID, isAdmin} to session\n            return {\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    isAdmin: token.isAdmin\n                }\n            };\n        }\n    }\n};\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tDO0FBQ3dCO0FBQ3BCO0FBQzJCO0FBRWpFLE1BQU1JLGNBQWM7SUFDbEJDLFNBQVNKLHdFQUFhQSxDQUFDRCwyQ0FBTUE7SUFDN0JNLFdBQVc7UUFDVEgsMkVBQW1CQSxDQUFDO1lBQ2xCSSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUNDLE9BQU07b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3BDQyxVQUFVO29CQUFDRixPQUFNO29CQUFZQyxNQUFLO2dCQUFVO1lBQzlDO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsTUFBTSxFQUFDQyxLQUFLLEVBQUVHLFFBQVEsRUFBQyxHQUFHSjtnQkFFMUIsc0NBQXNDO2dCQUN0QyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csWUFBWUgsVUFBVSxNQUFNRyxhQUFhLElBQUk7b0JBQzFELE9BQU87Z0JBQ1Q7Z0JBRUEscUJBQXFCO2dCQUNyQixNQUFNRSxPQUFPLE1BQU1kLDJDQUFNQSxDQUFDYyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQ0xQLE9BQU9BO29CQUNUO2dCQUNGO2dCQUVBLHNCQUFzQjtnQkFDdEIsSUFBSSxDQUFDSyxNQUNILE9BQU87Z0JBQ1QsOEJBQThCO2dCQUU5QixnQ0FBZ0M7Z0JBQ2hDLElBQUlGLGFBQWFFLEtBQUtGLFFBQVEsRUFDNUIsT0FBTztnQkFDVCxtQ0FBbUM7Z0JBQ25DLG9CQUFvQjtnQkFFcEIsc0NBQXNDO2dCQUN0QyxPQUFPRTtZQUNUO1FBQ0Y7S0FDRDtJQUNERyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLE9BQU9ILGtCQUF5QjtJQUNoQ0ksV0FBVztRQUNULE1BQU1DLEtBQUksRUFBQ0MsS0FBSyxFQUFFWixJQUFJLEVBQUVHLE9BQU8sRUFBRVUsT0FBTyxFQUFDO1lBQ3ZDLGlEQUFpRDtZQUVqRCxJQUFHQSxZQUFZLFlBQVlWLFNBQVNWLE1BQU07Z0JBQ3hDbUIsTUFBTW5CLElBQUksR0FBR1UsUUFBUVYsSUFBSTtZQUMzQjtZQUVBLDhDQUE4QztZQUM5QyxJQUFJTyxNQUFNO2dCQUNSLE9BQU87b0JBQ0wsR0FBR1ksS0FBSztvQkFDUkUsSUFBSWQsS0FBS2MsRUFBRTtvQkFDWEMsU0FBU2YsS0FBS2UsT0FBTztnQkFDdkI7WUFDRjtZQUNBLE9BQU9IO1FBQ1Q7UUFDQSxNQUFNVCxTQUFRLEVBQUNBLE9BQU8sRUFBRVMsS0FBSyxFQUFFWixJQUFJLEVBQUM7WUFDbEMscURBQXFEO1lBRXJELGlEQUFpRDtZQUNqRCxPQUFPO2dCQUNMLEdBQUdHLE9BQU87Z0JBQ1ZILE1BQU07b0JBQ0osR0FBR0csUUFBUUgsSUFBSTtvQkFDZmMsSUFBSUYsTUFBTUUsRUFBRTtvQkFDWkMsU0FBU0gsTUFBTUcsT0FBTztnQkFDeEI7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLFVBQVU1QiwwREFBUUEsQ0FBQ0U7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZyYWdtZW50aW5nLWlkZWFzLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2FwcC9kYlwiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xyXG5cclxuY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDoge2xhYmVsOlwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwifSxcclxuICAgICAgICBwYXNzd29yZDoge2xhYmVsOlwiUGFzc3dvcmRcIiwgdHlwZTpcInBhc3N3b3JkXCJ9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IGNyZWRlbnRpYWxzO1xyXG5cclxuICAgICAgICAvL0NoZWNrIGlmIHJlcXVpcmVkIGRhdGEgaXMgZXZlbiB0aGVyZVxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8IGVtYWlsID09PSBcIlwiIHx8IHBhc3N3b3JkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UcnkgdG8gZ2V0IHRoZSB1c2VyXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL0NoZWNrIGlmIHVzZXIgZXhpc3RzXHJcbiAgICAgICAgaWYgKCF1c2VyKVxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2VyIGV4aXN0c1wiKTtcclxuICAgICAgICBcclxuICAgICAgICAvL0NoZWNrIGlmIHBhc3N3b3JkcyBhcmUgY29ycmVjdFxyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPT0gdXNlci5wYXNzd29yZClcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgdmVyaWZpZWRcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG5cclxuICAgICAgICAvL1JldHVybiB1c2VyIGlmIGV2ZXJ5dGhpbmcgaXMgY29ycmVjdFxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHt0b2tlbiwgdXNlciwgc2Vzc2lvbiwgdHJpZ2dlcn0pe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiSldUOiBcXG5cIiwge3Rva2VuLCB1c2VyLCBzZXNzaW9ufSk7XHJcblxyXG4gICAgICBpZih0cmlnZ2VyID09PSBcInVwZGF0ZVwiICYmIHNlc3Npb24/Lm5hbWUpIHtcclxuICAgICAgICB0b2tlbi5uYW1lID0gc2Vzc2lvbi5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1Bhc3Mtb24gZnJvbSBVc2VyIHt1c2VySUQsIGlzQWRtaW59IHRvIHRva2VuXHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnRva2VuLFxyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHtzZXNzaW9uLCB0b2tlbiwgdXNlcn0pIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIlNlc3Npb246IFxcblwiLCB7c2Vzc2lvbiwgdG9rZW4sIHVzZXJ9KTtcclxuXHJcbiAgICAgIC8vUGFzcy1vbiBmcm9tIFRva2VuIHt1c2VySUQsIGlzQWRtaW59IHRvIHNlc3Npb25cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIC4uLnNlc3Npb24udXNlcixcclxuICAgICAgICAgIGlkOiB0b2tlbi5pZCxcclxuICAgICAgICAgIGlzQWRtaW46IHRva2VuLmlzQWRtaW4sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHtoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUfTsiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQWRhcHRlciIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImRlYnVnIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0cmlnZ2VyIiwiaWQiLCJpc0FkbWluIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/db.ts":
/*!***********************!*\
  !*** ./src/app/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFFO0FBRUosSUFBSUMsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmcmFnbWVudGluZy1pZGVhcy8uL3NyYy9hcHAvZGIudHM/ZmM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMge1xyXG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz9cclxuICBuZXcgUHJpc21hQ2xpZW50KHtcclxuICAgIGxvZzogW1wicXVlcnlcIl0sXHJcbiAgfSkgIFxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5CProjects%5Cdefragmenting-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();