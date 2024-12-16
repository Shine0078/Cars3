"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navbar;

var _react = require("react");

var _router = require("next/router");

var _link = _interopRequireDefault(require("next/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Navbar() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var router = (0, _router.useRouter)();
  return React.createElement('div', null, React.createElement('div', {
    className: "w-full fixed top-0 bg-slate-950 flex justify-between px-11 py-6 font-sans shadow-lg"
  }, React.createElement('div', {
    className: "text-3xl text-orange-500 font-bold cursor-pointer"
  }, 'PORTFOLIO'), React.createElement('div', {
    className: "flex items-center"
  }, React.createElement('button', {
    className: "lg:hidden text-white",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  }))), React.createElement('div', {
    className: "lg:flex gap-8 ".concat(isOpen ? 'block' : 'hidden', " lg:block")
  }, React.createElement(_link["default"], {
    className: "text-zinc-300 text-xl font-bold ".concat(router.pathname === '/' ? 'border-b-4 border-orange-500' : '', " hover:border-b-4 hover:border-orange-500"),
    href: "/"
  }, 'Home'), React.createElement(_link["default"], {
    className: "text-zinc-300 text-xl font-bold ".concat(router.pathname === '/about' ? 'border-b-4 border-orange-500' : '', " hover:border-b-4 hover:border-orange-500"),
    href: "/about"
  }, 'About'), React.createElement(_link["default"], {
    className: "text-zinc-300 text-xl font-bold ".concat(router.pathname === '/skill' ? 'border-b-4 border-orange-500' : '', " hover:border-b-4 hover:border-orange-500"),
    href: "/skill"
  }, 'Skill'), React.createElement(_link["default"], {
    className: "text-zinc-300 text-xl font-bold ".concat(router.pathname === '/projects' ? 'border-b-4 border-orange-500' : '', " hover:border-b-4 hover:border-orange-500"),
    href: "/projects"
  }, 'Project'), React.createElement(_link["default"], {
    className: "text-zinc-300 text-xl font-bold ".concat(router.pathname === '/contact' ? 'border-b-4 border-orange-500' : '', " hover:border-b-4 hover:border-orange-500"),
    href: "/contact"
  }, 'Contact')))));
}
//# sourceMappingURL=navbar.dev.js.map
