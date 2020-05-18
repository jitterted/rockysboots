import {LineSegment, Point, pointOnLineSegment} from './maths'

test('(10,10) point is on line from (10,10)-(11,10)', () => {
    const pt: Point = {x: 10, y: 10};
    const line: LineSegment = {p1: {x: 10, y: 10}, p2: {x: 11, y: 10}};
    expect(pointOnLineSegment(pt, line)).toBe(true);
});

test('(10,10) point is not on line from (11,11)-(12,12)', () => {
    const pt: Point = {x: 10, y: 10};
    const line: LineSegment = {p1: {x: 11, y: 11}, p2: {x: 12, y: 12}};
    expect(pointOnLineSegment(pt, line)).toBe(false);
});

