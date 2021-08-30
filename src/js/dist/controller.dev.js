"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var model = _interopRequireWildcard(require("./model.js"));

var _recipeView = _interopRequireDefault(require("./views/recipeView.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var recipeContainer = document.querySelector('.recipe');

var timeout = function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long! Timeout after ".concat(s, " second")));
    }, s * 1000);
  });
};

var renderSpinner = function renderSpinner(parentEl) {
  var markup = "\n    <div class=\"spinner\">\n      <svg>\n        <use href=\"src/img/icons.svg#icon-loader\"></use>\n      </svg>\n    </div>\n  ";
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

var showRecipe = function showRecipe() {
  var id;
  return regeneratorRuntime.async(function showRecipe$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = window.location.hash.slice(1);
          console.log(id);

          if (id) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return");

        case 5:
          renderSpinner(recipeContainer); //loading recipe

          _context.next = 8;
          return regeneratorRuntime.awrap(model.loadRecipe(id));

        case 8:
          //rendering recipe
          _recipeView["default"].render(model.state.recipe);

          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          alert(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

['hashchange', 'load'].forEach(function (event) {
  return window.addEventListener(event, showRecipe);
}); // https://forkify-api.herokuapp.com/v2
///////////////////////////////////////