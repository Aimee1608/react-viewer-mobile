(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["@xes/react-viewer-mobile"] = factory(require("react"), require("react-dom"));
	else
		root["@xes/react-viewer-mobile"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Viewer = __webpack_require__(2);

	var _Viewer2 = _interopRequireDefault(_Viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Viewer2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(6);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	var _ViewerCore = __webpack_require__(4);

	var _ViewerCore2 = _interopRequireDefault(_ViewerCore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Viewer = function (_React$Component) {
	    _inherits(Viewer, _React$Component);

	    function Viewer() {
	        _classCallCheck(this, Viewer);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.container = null;
	        _this.component = null;
	        return _this;
	    }

	    Viewer.prototype.renderViewer = function renderViewer() {
	        if (this.props.visible || this.component) {
	            if (!this.container) {
	                this.container = document.createElement('div');
	                document.body.appendChild(this.container);
	            }
	            var instance = this;
	            ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(_ViewerCore2.default, this.props), this.container, function () {
	                instance.component = this;
	            });
	        }
	    };

	    Viewer.prototype.removeViewer = function removeViewer() {
	        if (this.container) {
	            var container = this.container;
	            ReactDOM.unmountComponentAtNode(container);
	            container.parentNode.removeChild(container);
	            this.container = null;
	            this.component = null;
	        }
	    };

	    Viewer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.removeViewer();
	    };

	    Viewer.prototype.componentDidMount = function componentDidMount() {
	        this.renderViewer();
	    };

	    Viewer.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.renderViewer();
	    };

	    Viewer.prototype.render = function render() {
	        return null;
	    };

	    return Viewer;
	}(React.Component);

	exports.default = Viewer;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ViewerCanvas = function (_React$Component) {
	    _inherits(ViewerCanvas, _React$Component);

	    function ViewerCanvas() {
	        _classCallCheck(this, ViewerCanvas);

	        return _possibleConstructorReturn(this, _React$Component.call(this));
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	__webpack_require__(5);

	var _ViewerCanvas = __webpack_require__(3);

	var _ViewerCanvas2 = _interopRequireDefault(_ViewerCanvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var MAX_SIZE_SCALE = .9;
	var DEFAULT_IMAGE_WIDTH = window.innerWidth * MAX_SIZE_SCALE;
	var DEFAULT_IMAGE_HEIGHT = window.innerWidth * MAX_SIZE_SCALE;
	function noop() {}

	var ViewerCore = function (_React$Component) {
	    _inherits(ViewerCore, _React$Component);

	    function ViewerCore(props) {
	        _classCallCheck(this, ViewerCore);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	        _this.handleBodyTouchmove = function (e) {
	            e.preventDefault();
	        };
	        _this.startVisible = function (activeIndex) {
	            document.body.addEventListener('touchmove', _this.handleBodyTouchmove, { passive: false });
	            _this.loadImg(activeIndex, true);
	        };
	        _this.close = function () {
	            document.body.removeEventListener('touchmove', _this.handleBodyTouchmove);
	            _this.props.onClose();
	        };
	        _this.prefixCls = 'react-viewer-mobile';
	        _this.state = {
	            activeIndex: _this.props.activeIndex,
	            scale: 1,
	            touch: false,
	            swiperDistance: 0,
	            touchStartTime: 0,
	            touchDistance: 0,
	            startX: 0,
	            startY: 0,
	            moveX: 0,
	            moveY: 0,
	            pinchScale: 1,
	            zoomCenterX: 0,
	            zoomCenterY: 0
	        };
	        _this.containerWidth = window.innerWidth;
	        _this.containerHeight = window.innerHeight;
	        return _this;
	    }

	    ViewerCore.prototype.handleTouchStart = function handleTouchStart(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var touchDistance = 0;
	        var zoomCenterX = 0;
	        var zoomCenterY = 0;
	        var multiTouch = false;
	        var touchStartTime = Date.now();
	        if (e.touches.length > 1 && this.state.swiperDistance === 0) {
	            touchDistance = this.getDistance({
	                x: e.touches[0].pageX,
	                y: e.touches[0].pageY
	            }, {
	                x: e.touches[1].pageX,
	                y: e.touches[1].pageY
	            });
	            zoomCenterX = e.touches[0].pageX + (e.touches[1].pageX - e.touches[0].pageX) / 2;
	            zoomCenterY = e.touches[0].pageY + (e.touches[1].pageY - e.touches[0].pageY) / 2;
	            multiTouch = true;
	        }
	        var startX = e.touches[0].pageX;
	        var startY = e.touches[0].pageY;
	        this.setState({
	            touch: true,
	            startX: startX,
	            startY: startY,
	            moveX: startX,
	            moveY: startY,
	            startScale: this.state.scale,
	            touchDistance: touchDistance,
	            zoomCenterX: zoomCenterX,
	            zoomCenterY: zoomCenterY,
	            multiTouch: multiTouch,
	            touchStartTime: touchStartTime
	        });
	    };

	    ViewerCore.prototype.handleTouchMove = function handleTouchMove(e) {
	        e.preventDefault();
	        e.stopPropagation();
	        if (e.touches.length > 1) {
	            var touchDistance = this.getDistance({
	                x: e.touches[0].pageX,
	                y: e.touches[0].pageY
	            }, {
	                x: e.touches[1].pageX,
	                y: e.touches[1].pageY
	            });
	            var pinchScale = touchDistance / this.state.touchDistance;
	            var newScale = this.state.scale + this.state.startScale * (pinchScale - this.state.pinchScale);
	            if (newScale <= 3 && this.state.swiperDistance === 0) {
	                this.handleZoom(this.state.zoomCenterX, this.state.zoomCenterY, newScale, pinchScale);
	            }
	        } else {
	            if (this.state.scale > 1) {
	                var newLeft = this.state.left + e.touches[0].pageX - this.state.moveX;
	                var newTop = this.state.top + e.touches[0].pageY - this.state.moveY;
	                this.setState({
	                    left: newLeft,
	                    top: newTop,
	                    moveX: e.touches[0].pageX,
	                    moveY: e.touches[0].pageY
	                });
	            } else {
	                var swiperDistance = this.state.swiperDistance + e.touches[0].pageX - this.state.moveX;
	                this.setState({
	                    swiperDistance: swiperDistance,
	                    moveX: e.touches[0].pageX,
	                    moveY: e.touches[0].pageY
	                });
	            }
	        }
	    };

	    ViewerCore.prototype.handleTouchEnd = function handleTouchEnd(e) {
	        var _this2 = this;

	        e.preventDefault();
	        e.stopPropagation();
	        var touchInterval = Date.now() - this.state.touchStartTime;
	        if (e.touches.length === 0) {
	            if (this.state.multiTouch) {
	                if (this.state.scale < 1) {
	                    setTimeout(function () {
	                        _this2.resetImage();
	                    }, 0);
	                }
	            } else {
	                if (this.state.swiperDistance !== 0) {
	                    var criticalValue = this.containerWidth * .4;
	                    var canChange = false;
	                    var shortTime = touchInterval < 300;
	                    if (this.state.swiperDistance <= -criticalValue || this.state.swiperDistance >= criticalValue || shortTime) {
	                        canChange = true;
	                    }
	                    if (canChange) {
	                        var newActiveIndex = void 0;
	                        if (this.state.swiperDistance <= -criticalValue || shortTime && this.state.swiperDistance < 0) {
	                            newActiveIndex = this.state.activeIndex + 1;
	                            if (newActiveIndex === this.props.images.length) {
	                                newActiveIndex = this.state.activeIndex;
	                            }
	                        }
	                        if (this.state.swiperDistance >= criticalValue || shortTime && this.state.swiperDistance > 0) {
	                            newActiveIndex = this.state.activeIndex - 1;
	                            if (newActiveIndex < 0) {
	                                newActiveIndex = this.state.activeIndex;
	                            }
	                        }
	                        this.loadImg(newActiveIndex);
	                    } else {
	                        this.setState({
	                            swiperDistance: 0,
	                            touch: false
	                        });
	                    }
	                } else {
	                    if (Math.abs(this.state.moveX - this.state.startX) > 10 || Math.abs(this.state.moveY - this.state.startY) > 10) {} else {
	                        if (touchInterval < 500) {
	                            this.close();
	                            // this.setState({
	                            //   visible: false,
	                            // });
	                        }
	                    }
	                }
	            }
	            this.setState({
	                startX: 0,
	                startY: 0,
	                moveX: 0,
	                moveY: 0,
	                pinchScale: 1,
	                touchDistance: 0,
	                multiTouch: false,
	                touch: false,
	                touchStartTime: 0
	            });
	        } else {
	            this.setState({
	                moveX: e.touches[0].pageX,
	                moveY: e.touches[0].pageY
	            });
	        }
	    };

	    ViewerCore.prototype.resetImage = function resetImage() {
	        var imgDefaultSize = this.getImgDefaultSize(this.state.imageWidth, this.state.imageHeight);
	        this.setState({
	            width: imgDefaultSize.width,
	            height: imgDefaultSize.height,
	            left: imgDefaultSize.left,
	            top: imgDefaultSize.top,
	            scale: 1,
	            touch: false
	        });
	    };

	    ViewerCore.prototype.getImageCenterXY = function getImageCenterXY() {
	        console.log('this.state.height / 2', this.state.height / 2);
	        return {
	            x: this.state.left + this.state.width / 2,
	            y: this.state.top + this.state.height / 2
	        };
	    };

	    ViewerCore.prototype.getImgDefaultSize = function getImgDefaultSize(imgWidth, imgHeight) {
	        var width = 0;
	        var height = 0;
	        var maxWidth = this.containerWidth * MAX_SIZE_SCALE;
	        var maxHeight = this.containerHeight * MAX_SIZE_SCALE;
	        width = Math.min(maxWidth, imgWidth);
	        height = width / imgWidth * imgHeight;
	        if (height > maxHeight) {
	            height = maxHeight;
	            width = height / imgHeight * imgWidth;
	        }
	        var left = (this.containerWidth - width) / 2;
	        var top = (this.containerHeight - height) / 2;
	        return {
	            width: width,
	            height: height,
	            left: left,
	            top: top
	        };
	    };

	    ViewerCore.prototype.getDistance = function getDistance(startPoint, endPoint) {
	        var xLen = Math.abs(endPoint.x - startPoint.x);
	        var yLen = Math.abs(endPoint.y - startPoint.y);
	        return Math.sqrt(xLen * xLen + yLen * yLen);
	    };

	    ViewerCore.prototype.loadImg = function loadImg(activeIndex) {
	        var _this3 = this;

	        var firstLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var imgSrc = '';
	        var images = this.props.images || [];
	        if (images.length > 0) {
	            imgSrc = images[activeIndex].src;
	        }
	        var img = new Image();
	        img.src = imgSrc;
	        if (firstLoad) {
	            this.setState({
	                activeIndex: activeIndex,
	                width: 0,
	                height: 0,
	                left: this.containerWidth / 2,
	                top: this.containerHeight / 2,
	                scale: 1,
	                swiperDistance: 0,
	                touch: false
	            });
	        } else {
	            this.setState({
	                activeIndex: activeIndex,
	                swiperDistance: 0,
	                touch: false
	            });
	        }
	        img.onload = function () {
	            var imgWidth = img.width;
	            var imgHeight = img.height;
	            if (firstLoad) {
	                setTimeout(function () {
	                    _this3.setState({
	                        imageWidth: imgWidth,
	                        imageHeight: imgHeight
	                    });
	                    var imgCenterXY = _this3.getImageCenterXY();
	                    _this3.handleZoom(imgCenterXY.x, imgCenterXY.y, 1, 1);
	                }, 0);
	            } else {
	                var imgDefaultSize = _this3.getImgDefaultSize(imgWidth, imgHeight);
	                _this3.setState({
	                    activeIndex: activeIndex,
	                    width: imgDefaultSize.width,
	                    height: imgDefaultSize.height,
	                    left: imgDefaultSize.left,
	                    top: imgDefaultSize.top,
	                    imageWidth: imgWidth,
	                    imageHeight: imgHeight,
	                    scale: 1
	                });
	            }
	        };
	        img.onerror = function () {
	            _this3.setState({
	                activeIndex: activeIndex,
	                imageWidth: 0,
	                imageHeight: 0
	            });
	        };
	    };

	    ViewerCore.prototype.handleZoom = function handleZoom(targetX, targetY, scale, pinchScale) {
	        var diffScale = scale - this.state.scale;
	        var imgCenterXY = this.getImageCenterXY();
	        var diffWidth = this.state.width * diffScale;
	        var diffHeight = this.state.height * diffScale;
	        // when image width is 0, set original width
	        if (diffWidth === 0) {
	            var imgDefaultSize = this.getImgDefaultSize(this.state.imageWidth, this.state.imageHeight);
	            diffWidth = imgDefaultSize.width;
	            diffHeight = imgDefaultSize.height;
	        }
	        var width = this.state.width + diffWidth;
	        var height = this.state.height + diffHeight;
	        var left = (this.containerWidth - width) / 2;
	        var top = (this.containerHeight - height) / 2;
	        this.setState({
	            width: width,
	            height: height,
	            top: top,
	            left: left,
	            scale: scale,
	            pinchScale: pinchScale
	        });
	    };

	    ViewerCore.prototype.componentDidMount = function componentDidMount() {
	        this.startVisible(this.props.activeIndex);
	    };

	    ViewerCore.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this4 = this;

	        if (!this.props.visible && nextProps.visible) {
	            this.startVisible(nextProps.activeIndex);
	            setTimeout(function () {
	                _this4.setState({
	                    swiperDistance: 0
	                });
	            }, 10);
	            return;
	        }
	        if (this.state.activeIndex !== nextProps.activeIndex) {
	            this.loadImg(nextProps.activeIndex);
	            return;
	        }
	    };

	    ViewerCore.prototype.render = function render() {
	        var _this5 = this;

	        var className = '' + this.prefixCls;
	        var viewerStryle = {
	            opacity: this.props.visible ? 1 : 0,
	            width: window.innerWidth,
	            height: window.innerHeight,
	            position: 'fixed',
	            top: 0
	        };
	        if (!this.props.visible) {
	            viewerStryle.display = 'none';
	        }
	        if (this.props.visible) {
	            viewerStryle.display = 'block';
	        }
	        var zIndex = this.props.zIndex;
	        var activeImg = {
	            src: '',
	            alt: ''
	        };
	        var images = this.props.images || [];
	        if (this.props.visible) {
	            if (images.length > 0 && this.state.activeIndex >= 0) {
	                activeImg = images[this.state.activeIndex];
	            }
	        }
	        var translateXs = [];
	        var deviceWidth = this.containerWidth;
	        for (var i = 0; i < this.state.activeIndex; i++) {
	            var translateX = -deviceWidth * (this.state.activeIndex - i) + this.state.swiperDistance;
	            translateXs.push(translateX);
	        }
	        for (var _i = this.state.activeIndex; _i < this.props.images.length; _i++) {
	            var _translateX = deviceWidth * (_i - this.state.activeIndex) + this.state.swiperDistance;
	            translateXs.push(_translateX);
	        }
	        return React.createElement(
	            'div',
	            { className: className, style: viewerStryle, onTouchStart: this.handleTouchStart.bind(this), onTouchMove: this.handleTouchMove.bind(this), onTouchEnd: this.handleTouchEnd.bind(this) },
	            React.createElement('div', { className: this.prefixCls + '-mask', style: { zIndex: zIndex } }),
	            this.props.images.map(function (image, index) {
	                if (index === _this5.state.activeIndex) {
	                    return React.createElement(_ViewerCanvas2.default, { key: index, prefixCls: _this5.prefixCls, imgSrc: image.src, visible: _this5.props.visible, width: _this5.state.width, height: _this5.state.height, top: _this5.state.top, left: _this5.state.left, zIndex: zIndex + 5, touch: _this5.state.touch, translateX: translateXs[index] });
	                } else {
	                    if (Math.abs(_this5.state.activeIndex - index) > 1) {
	                        return null;
	                    }
	                    return React.createElement(_ViewerCanvas2.default, { key: index, prefixCls: _this5.prefixCls, imgSrc: image.src, visible: _this5.props.visible, width: DEFAULT_IMAGE_WIDTH, height: DEFAULT_IMAGE_HEIGHT, top: (_this5.containerHeight - DEFAULT_IMAGE_HEIGHT) / 2, left: (_this5.containerWidth - DEFAULT_IMAGE_WIDTH) / 2, zIndex: zIndex + 5, touch: _this5.state.touch, translateX: translateXs[index] });
	                }
	            }),
	            React.createElement(
	                'div',
	                { style: { position: 'absolute', top: 0, left: 0, zIndex: zIndex + 10 } },
	                this.text1
	            ),
	            React.createElement(
	                'div',
	                { style: { position: 'absolute', top: 20, left: 0, zIndex: zIndex + 10 } },
	                this.text2
	            )
	        );
	    };

	    return ViewerCore;
	}(React.Component);

	exports.default = ViewerCore;

	ViewerCore.defaultProps = {
	    visible: false,
	    onClose: noop,
	    images: [],
	    activeIndex: 0,
	    zIndex: 1000
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;