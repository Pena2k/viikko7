export class Shape {
    _x
    _y
    _lineWidth

    constructor(x,y,_lineWidth = 1, _color = 'black') {
        this._x = x
        this._y = y
        this._lineWidth = this._lineWidth
        this._color = this._color
    }

     set setLineWidth(_lineWidth) {
        this._lineWidth = _lineWidth
    }

     set setColor(_color) {
        this._color = _color;
    }
}