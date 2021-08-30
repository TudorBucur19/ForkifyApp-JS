"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRecipe = exports.state = void 0;
var state = {
  recipe: {}
};
exports.state = state;

var loadRecipe = function loadRecipe(id) {
  var res, data, recipe;
  return regeneratorRuntime.async(function loadRecipe$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://forkify-api.herokuapp.com/api/v2/recipes/".concat(id)));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;

          if (res.ok) {
            _context.next = 8;
            break;
          }

          throw new Error("".concat(data.message, " (").concat(res.status, ")"));

        case 8:
          recipe = data.data.recipe;
          state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
          };
          console.log(state.recipe);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.loadRecipe = loadRecipe;