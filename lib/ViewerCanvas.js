'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewerCanvas = function (_React$Component) {
    (0, _inherits3.default)(ViewerCanvas, _React$Component);

    function ViewerCanvas() {
        (0, _classCallCheck3.default)(this, ViewerCanvas);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));
    }

    ViewerCanvas.prototype.render = function render() {
        var imgStyle = {
            width: this.props.width + 'px',
            height: this.props.height + 'px',
            transform: 'scale(' + (this.props.scale || 1) + ') translate(' + this.props.left + 'px, ' + this.props.top + 'px)'
        };
        var imgClass = '';
        var canvasClass = this.props.prefixCls + '-canvas';
        if (!this.props.touch) {
            imgClass += ' ' + this.props.prefixCls + '-image-transition';
            canvasClass += ' ' + this.props.prefixCls + '-canvas-transition';
        }
        var canvasStyle = {
            zIndex: this.props.zIndex,
            transform: 'translateX(' + this.props.translateX + 'px)'
        };
        var imgNode = null;
        if (this.props.imgSrc !== '') {
            imgNode = React.createElement('img', { className: imgClass, src: this.props.imgSrc, style: imgStyle });
        }
        return React.createElement(
            'div',
            { className: canvasClass, style: canvasStyle },
            imgNode
        );
    };

    return ViewerCanvas;
}(React.Component);

exports.default = ViewerCanvas;
module.exports = exports['default'];