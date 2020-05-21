import {worldDimensionToCanvasCoordinates, worldLocationToCanvasCoordinates} from "./Geometry";

test('A point at 3/4 in world space will be at 30/40 in canvas space', () => {
  expect(worldLocationToCanvasCoordinates({x: 3, y: 4})).toEqual({x: 30, y: 40});
});

test('A dimension of 3/4 in world space will be 30/40 in canvas space', () => {
  expect(worldDimensionToCanvasCoordinates({width: 3, height: 4})).toEqual({width: 30, height: 40});
});