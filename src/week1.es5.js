'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
	function PraiseButton(num, clickEle, ele) {
		_classCallCheck(this, PraiseButton);

		this.num = num;
		this.clickEle = clickEle;
		this.ele = ele;
	}

	_createClass(PraiseButton, [{
		key: 'clickFunc',
		value: function clickFunc() {
			var _this = this;

			this.clickEle.click(function () {
				if (_this.num < 10) {
					_this.clickEle.css('-webkit-filter', 'grayscale(0)');
					_this.num = addOne(_this.num);
					_this.ele.text(_this.num);
				} else {
					_this.clickEle.css('-webkit-filter', 'grayscale(1)');
					_this.num = 0;
					_this.ele.text(_this.num);
				}
			});
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(num, clickEle, ele) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, clickEle, ele));
	}

	return Thumb;
}(PraiseButton);

exports.default = { Thumb: Thumb };
