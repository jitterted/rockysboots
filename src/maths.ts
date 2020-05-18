export const pointOnLineSegment = (pt: Point, line: LineSegment) => {
    return isCircleSegmentColliding(line.p1.x, line.p1.y, line.p2.x, line.p2.y, pt.x, pt.y, 1);
}


// from: https://riptutorial.com/html5-canvas/example/17709/are-a-line-segment-and-circle-colliding-
// [x0,y0] to [x1,y1] define a line segment
// [cx,cy] is circle centerpoint, cr is circle radius
function isCircleSegmentColliding(x0, y0, x1, y1, cx, cy, cr) {

    // calc delta distance: source point to line start
    var dx = cx - x0;
    var dy = cy - y0;

    // calc delta distance: line start to end
    var dxx = x1 - x0;
    var dyy = y1 - y0;

    // Calc position on line normalized between 0.00 & 1.00
    // == dot product divided by delta line distances squared
    var t = (dx * dxx + dy * dyy) / (dxx * dxx + dyy * dyy);

    // calc nearest pt on line
    var x = x0 + dxx * t;
    var y = y0 + dyy * t;

    // clamp results to being on the segment
    if (t < 0) {
        x = x0;
        y = y0;
    }
    if (t > 1) {
        x = x1;
        y = y1;
    }

    return ((cx - x) * (cx - x) + (cy - y) * (cy - y) < cr * cr);
}

export interface Point {
    x: number,
    y: number
}

export interface LineSegment {
    p1: Point,
    p2: Point
}