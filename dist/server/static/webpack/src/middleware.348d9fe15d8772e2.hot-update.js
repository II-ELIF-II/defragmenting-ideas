"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nasync function middleware(req) {\n    const path = req.nextUrl.pathname;\n    const session = !!req.cookies.get(\"next-auth.session-token\");\n    if (!session && path !== \"/admin\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(`/admin?callbackUrl=${path}`, req.url));\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\n // export const config = {\n //   matcher: [\n //     '/admin/main',\n //   ],\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFFekMsZUFBZUMsV0FBV0MsR0FBZ0I7SUFDdkQsTUFBTUMsT0FBT0QsSUFBSUUsT0FBTyxDQUFDQyxRQUFRO0lBQ2pDLE1BQU1DLFVBQVUsQ0FBQyxDQUFDSixJQUFJSyxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVsQyxJQUFJLENBQUNGLFdBQVdILFNBQVEsVUFBVTtRQUNoQyxPQUFPSCxrRkFBWUEsQ0FBQ1MsUUFBUSxDQUFDLElBQUlDLElBQUksQ0FBQyxtQkFBbUIsRUFBRVAsS0FBSyxDQUFDLEVBQUVELElBQUlTLEdBQUc7SUFDNUU7SUFDQSxPQUFPWCxrRkFBWUEsQ0FBQ1ksSUFBSTtBQUMxQjtDQUVBLDBCQUEwQjtDQUMxQixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLE9BQU87Q0FDUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHBhdGggPSByZXEubmV4dFVybC5wYXRobmFtZTtcclxuICBjb25zdCBzZXNzaW9uID0gISFyZXEuY29va2llcy5nZXQoXCJuZXh0LWF1dGguc2Vzc2lvbi10b2tlblwiKVxyXG5cclxuICBpZiAoIXNlc3Npb24gJiYgcGF0aCAhPT1cIi9hZG1pblwiKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoYC9hZG1pbj9jYWxsYmFja1VybD0ke3BhdGh9YCwgcmVxLnVybCkpO1xyXG4gIH1cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbi8vICAgbWF0Y2hlcjogW1xyXG4vLyAgICAgJy9hZG1pbi9tYWluJyxcclxuLy8gICBdLFxyXG4vLyB9OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwicGF0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInNlc3Npb24iLCJjb29raWVzIiwiZ2V0IiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});