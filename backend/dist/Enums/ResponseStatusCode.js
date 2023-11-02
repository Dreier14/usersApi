"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatusCode = void 0;
var ResponseStatusCode;
(function (ResponseStatusCode) {
    ResponseStatusCode[ResponseStatusCode["SUCCESS"] = 200] = "SUCCESS";
    ResponseStatusCode[ResponseStatusCode["NOT_FOUND_ERR"] = 404] = "NOT_FOUND_ERR";
    ResponseStatusCode[ResponseStatusCode["UNAUTHORIZED"] = 403] = "UNAUTHORIZED";
    ResponseStatusCode[ResponseStatusCode["GATEWAY_ERROR"] = 503] = "GATEWAY_ERROR";
})(ResponseStatusCode || (exports.ResponseStatusCode = ResponseStatusCode = {}));
//# sourceMappingURL=ResponseStatusCode.js.map