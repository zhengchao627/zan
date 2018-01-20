'use strict';

var _week = require('./week1.js');

var _week2 = _interopRequireDefault(_week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zan = new _week2.default(0, $('.box'), $('.num'));
zan.clickFunc();
