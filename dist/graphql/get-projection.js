"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProjection;
function getProjection(fieldASTs) {
  return fieldASTs.selectionSet.selections.reduce(function (projections, selection) {
    projections[selection.name.value] = 1;
    return projections;
  }, {});
}