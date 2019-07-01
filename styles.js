(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*----- Reset -----*/\n\nhtml{height: 100px;}\n\nimg,video {max-width: 100%; display: block;}\n\n*{box-sizing: border-box;}\n\nbody,h1,h2,h3,h4,h5,h6,p,ul,ol,figure{margin: 0; padding:0;}\n\na{text-decoration:none;}\n\nli{list-style: none;}\n\n/*------------------- iPhone ---------------------*/\n\n#iphone{\n\twidth: 580px;\n\theight: 920px;\n\ttop: 0px;\n\tleft: 50%;\n\t-webkit-transform: translateX(-50%);\n\t        transform: translateX(-50%);\n\tposition: fixed;\n\tz-index: 2;\n\tpointer-events: none;\n}\n\n/*------------------- Loader Page -------------------*/\n\n.container_loader{\n\twidth: 371px;\n\theight: 811px;\n\tmargin: auto auto;\n\tdisplay: flex;\n\n\tbackground: linear-gradient(to right, #4e5bf5 0%,#303cca 100%,#303cca 100%);\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\n\tposition: fixed;\n\ttop: 459px;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\tz-index: 1;\n}\n\n#big_logo{\n\tposition: fixed;\n\ttop: 49%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\theight: 130px;\n}\n\n#logo_wheel1{\n\tposition: fixed;\n\ttop: 45%;\n\tleft: 39%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\theight: 52px;\n\t-webkit-animation: rotationA 5s infinite linear;\n\t        animation: rotationA 5s infinite linear;\n}\n\n@-webkit-keyframes rotationA {\n\t0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n\t50% {-webkit-transform: rotate(180deg);transform: rotate(180deg);}\n\t100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes rotationA {\n\t0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n\t50% {-webkit-transform: rotate(180deg);transform: rotate(180deg);}\n\t100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n#logo_wheel2{\n\tposition: fixed;\n\ttop: 44.2%;\n\tleft: 52.5%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\theight: 35px;\n\t-webkit-animation: rotationB 5s infinite linear;\n\t        animation: rotationB 5s infinite linear;\n}\n\n@-webkit-keyframes rotationB {\n\t0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n\t50% {-webkit-transform: rotate(-180deg);transform: rotate(-180deg);}\n\t100% {-webkit-transform: rotate(-360deg);transform: rotate(-360deg);}\n}\n\n@keyframes rotationB {\n\t0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n\t50% {-webkit-transform: rotate(-180deg);transform: rotate(-180deg);}\n\t100% {-webkit-transform: rotate(-360deg);transform: rotate(-360deg);}\n}\n\n/* ------------------ Media Queries ---------------------- */\n\n@media only screen and (max-height: 900px) {\n\tbody{-webkit-transform: scale(0.95);transform: scale(0.95);}\n}\n\n@media only screen and (max-height: 768px) {\n\tbody{-webkit-transform: scale(0.8);transform: scale(0.8);}\n}\n\n@media only screen and (max-width: 500px) {\n\tbody{-webkit-transform: scale(1);transform: scale(1);}\n\n\t#iphone{display: none;}\n\n\t.container_loader{\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tmargin: auto auto;\n\t\tposition: fixed;\n\t\ttop: 50vh;\n\t\tleft: 50%;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t        transform: translate(-50%, -50%);\n\t}\t\n}\n\n@media only screen and (min-height: 1100px) {\n\tbody{-webkit-transform: scale(1.4);transform: scale(1.4);}\n}\n\n@media only screen and (min-height: 1500px) {\n\tbody{-webkit-transform: scale(2);transform: scale(2);}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjs7QUFFcEIsS0FBSyxhQUFhLENBQUM7O0FBQ25CLFdBQVcsZUFBZSxFQUFFLGNBQWMsQ0FBQzs7QUFDM0MsRUFBRSxzQkFBc0IsQ0FBQzs7QUFDekIsc0NBQXNDLFNBQVMsRUFBRSxTQUFTLENBQUM7O0FBQzNELEVBQUUsb0JBQW9CLENBQUM7O0FBQ3ZCLEdBQUcsZ0JBQWdCLENBQUM7O0FBSXBCLG1EQUFtRDs7QUFFbkQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFFBQVE7Q0FDUixTQUFTO0NBQ1QsbUNBQTJCO1NBQTNCLDJCQUEyQjtDQUMzQixlQUFlO0NBQ2YsVUFBVTtDQUNWLG9CQUFvQjtBQUNyQjs7QUFJQSxzREFBc0Q7O0FBRXREO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsYUFBYTs7Q0FFYiwyRUFBMkU7Q0FDM0UsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixzQkFBc0I7O0NBRXRCLGVBQWU7Q0FDZixVQUFVO0NBQ1YsU0FBUztDQUNULHdDQUFnQztTQUFoQyxnQ0FBZ0M7Q0FDaEMsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFFBQVE7Q0FDUixTQUFTO0NBQ1Qsd0NBQWdDO1NBQWhDLGdDQUFnQztDQUNoQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsUUFBUTtDQUNSLFNBQVM7Q0FDVCx3Q0FBZ0M7U0FBaEMsZ0NBQWdDO0NBQ2hDLFlBQVk7Q0FDWiwrQ0FBdUM7U0FBdkMsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsSUFBSSwrQkFBdUIsQ0FBdkIsdUJBQXVCLENBQUM7Q0FDNUIsS0FBSyxpQ0FBeUIsQ0FBekIseUJBQXlCLENBQUM7Q0FDL0IsTUFBTSxpQ0FBeUIsQ0FBekIseUJBQXlCLENBQUM7QUFDakM7O0FBSkE7Q0FDQyxJQUFJLCtCQUF1QixDQUF2Qix1QkFBdUIsQ0FBQztDQUM1QixLQUFLLGlDQUF5QixDQUF6Qix5QkFBeUIsQ0FBQztDQUMvQixNQUFNLGlDQUF5QixDQUF6Qix5QkFBeUIsQ0FBQztBQUNqQzs7QUFHQTtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsV0FBVztDQUNYLHdDQUFnQztTQUFoQyxnQ0FBZ0M7Q0FDaEMsWUFBWTtDQUNaLCtDQUF1QztTQUF2Qyx1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyxJQUFJLCtCQUF1QixDQUF2Qix1QkFBdUIsQ0FBQztDQUM1QixLQUFLLGtDQUEwQixDQUExQiwwQkFBMEIsQ0FBQztDQUNoQyxNQUFNLGtDQUEwQixDQUExQiwwQkFBMEIsQ0FBQztBQUNsQzs7QUFKQTtDQUNDLElBQUksK0JBQXVCLENBQXZCLHVCQUF1QixDQUFDO0NBQzVCLEtBQUssa0NBQTBCLENBQTFCLDBCQUEwQixDQUFDO0NBQ2hDLE1BQU0sa0NBQTBCLENBQTFCLDBCQUEwQixDQUFDO0FBQ2xDOztBQU1BLDREQUE0RDs7QUFJNUQ7Q0FDQyxLQUFLLDhCQUFzQixDQUF0QixzQkFBc0IsQ0FBQztBQUM3Qjs7QUFFQTtDQUNDLEtBQUssNkJBQXFCLENBQXJCLHFCQUFxQixDQUFDO0FBQzVCOztBQUVBO0NBQ0MsS0FBSywyQkFBbUIsQ0FBbkIsbUJBQW1CLENBQUM7O0NBRXpCLFFBQVEsYUFBYSxDQUFDOztDQUV0QjtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7Q0FDakM7QUFDRDs7QUFJQTtDQUNDLEtBQUssNkJBQXFCLENBQXJCLHFCQUFxQixDQUFDO0FBQzVCOztBQUVBO0NBQ0MsS0FBSywyQkFBbUIsQ0FBbkIsbUJBQW1CLENBQUM7QUFDMUIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tIFJlc2V0IC0tLS0tKi9cblxuaHRtbHtoZWlnaHQ6IDEwMHB4O31cbmltZyx2aWRlbyB7bWF4LXdpZHRoOiAxMDAlOyBkaXNwbGF5OiBibG9jazt9XG4qe2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxuYm9keSxoMSxoMixoMyxoNCxoNSxoNixwLHVsLG9sLGZpZ3VyZXttYXJnaW46IDA7IHBhZGRpbmc6MDt9XG5he3RleHQtZGVjb3JhdGlvbjpub25lO31cbmxpe2xpc3Qtc3R5bGU6IG5vbmU7fVxuXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tIGlQaG9uZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4jaXBob25le1xuXHR3aWR0aDogNTgwcHg7XG5cdGhlaWdodDogOTIwcHg7XG5cdHRvcDogMHB4O1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiAyO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBMb2FkZXIgUGFnZSAtLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNvbnRhaW5lcl9sb2FkZXJ7XG5cdHdpZHRoOiAzNzFweDtcblx0aGVpZ2h0OiA4MTFweDtcblx0bWFyZ2luOiBhdXRvIGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGU1YmY1IDAlLCMzMDNjY2EgMTAwJSwjMzAzY2NhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDQ1OXB4O1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR6LWluZGV4OiAxO1xufVxuXG4jYmlnX2xvZ297XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiA0OSU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdGhlaWdodDogMTMwcHg7XG59XG5cbiNsb2dvX3doZWVsMXtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDQ1JTtcblx0bGVmdDogMzklO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0aGVpZ2h0OiA1MnB4O1xuXHRhbmltYXRpb246IHJvdGF0aW9uQSA1cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpb25BIHtcblx0MCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cblx0NTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cblx0MTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cblxuI2xvZ29fd2hlZWwye1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogNDQuMiU7XG5cdGxlZnQ6IDUyLjUlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0aGVpZ2h0OiAzNXB4O1xuXHRhbmltYXRpb246IHJvdGF0aW9uQiA1cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpb25CIHtcblx0MCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cblx0NTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTt9XG5cdDEwMCUge3RyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO31cbn1cblxuXG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuXHRib2R5e3RyYW5zZm9ybTogc2NhbGUoMC45NSk7fVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuXHRib2R5e3RyYW5zZm9ybTogc2NhbGUoMC44KTt9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblx0Ym9keXt0cmFuc2Zvcm06IHNjYWxlKDEpO31cblxuXHQjaXBob25le2Rpc3BsYXk6IG5vbmU7fVxuXG5cdC5jb250YWluZXJfbG9hZGVye1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdG1hcmdpbjogYXV0byBhdXRvO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDUwdmg7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR9XHRcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDExMDBweCkge1xuXHRib2R5e3RyYW5zZm9ybTogc2NhbGUoMS40KTt9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDE1MDBweCkge1xuXHRib2R5e3RyYW5zZm9ybTogc2NhbGUoMik7fVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nuno_\Documents\pcrepair\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map