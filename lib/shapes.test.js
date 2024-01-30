
// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method should return SVG string with given color', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method should return SVG string with given color', () => {
  const circle = new Circle();
  circle.setColor('red');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square render method should return SVG string with given color', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
});
