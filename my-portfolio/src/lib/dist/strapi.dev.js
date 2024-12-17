"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchExperienceList = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var STRAPI_URL = process.env.STRAPI_API_URL; // const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

var fetchExperienceList = function fetchExperienceList() {
  var response;
  return regeneratorRuntime.async(function fetchExperienceList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:3000/api/experience"));

        case 3:
          response = _context.sent;
          console.log("---------Axios Response List---------");
          console.log(response.data);
          return _context.abrupt("return", response.data);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("Error in fetching experienceList: " + _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.fetchExperienceList = fetchExperienceList;
//# sourceMappingURL=strapi.dev.js.map
