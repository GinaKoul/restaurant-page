/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./appetizers.jpg": [
		672,
		672
	],
	"./desserts.jpg": [
		980,
		980
	],
	"./hero-image.jpg": [
		93,
		93
	],
	"./pasta.jpg": [
		318,
		318
	],
	"./pizza.jpg": [
		129,
		129
	],
	"./salad.jpg": [
		952,
		952
	],
	"./soups.jpg": [
		475,
		475
	],
	"./steak.jpg": [
		729,
		729
	],
	"./wine.jpg": [
		494,
		494
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./appetizers.jpg": [
		271,
		271
	],
	"./desserts.jpg": [
		75,
		75
	],
	"./hero-image.jpg": [
		792,
		411
	],
	"./pasta.jpg": [
		13,
		13
	],
	"./pizza.jpg": [
		524,
		524
	],
	"./salad.jpg": [
		63,
		63
	],
	"./soups.jpg": [
		982,
		982
	],
	"./steak.jpg": [
		956,
		956
	],
	"./wine.jpg": [
		853,
		853
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 609;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-page:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/assets/json/homepage.json
const homepage_namespaceObject = /*#__PURE__*/JSON.parse('{"GS":"hero-image.jpg","DD":"Where Every Bite is a Taste of Italian Enchantment","ZY":"Welcome to Il Forno Magico-A Taste of Italy\'s Heart & Soul","vD":"Step into Il Forno Magico, where every dish is crafted with passion, tradition, and a touch of magic. From our wood-fired pizzas with crispy, golden crusts to our handmade pasta infused with rich, authentic flavors, every bite transports you straight to the charming streets of Italy.","oV":"Our chefs use only the finesr ingredients, sun-ripened tomatoes, fragrant basil, and the creamiest mozzarella, to create dishes that are as unforgettable as they are delicious. Whether you are here for a cozy dinner, a celebration with loved ones, or a glass of our expertly selected Italian wines, you will feel the warmth of true Italian hospitality from the moment you walk in.","hh":"Buon appetito! Let the magic of Il Forno Magico enchant your taste buds."}');
;// ./src/assets/js/homepage.js

var Homepage = function (doc) {
  var mainContent = doc.querySelector("#content");
  var heroImages;
  function createHeroSection() {
    // Create a container for hero content
    var heroWrapper = doc.createElement("section");
    heroWrapper.classList.add("hero-container");
    if (window.innerWidth <= 767) {
      heroWrapper.style.setProperty("--hero-image", "url(".concat(heroImages.images.find(function (image) {
        return image.width === 500;
      }).path, ")"));
    } else {
      heroWrapper.style.setProperty("--hero-image", "url(".concat(heroImages.images.find(function (image) {
        return image.width === 1920;
      }).path, ")"));
    }

    // Create container for hero text
    var heroText = doc.createElement("div");
    heroText.classList.add("hero-text", "container");

    // Create hero title
    var heroTitle = doc.createElement("h1");
    heroTitle.textContent = homepage_namespaceObject.DD;

    // Add the hero title to the text container
    heroText.appendChild(heroTitle);

    // Add the hero text container to the hero content container
    heroWrapper.appendChild(heroText);

    // Return the hero section
    return heroWrapper;
  }
  function createParagraph(text) {
    var currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }
  function createArticleContent() {
    // Create article container
    var articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container", "wmax-sm");

    // Create article title
    var articleHeading = doc.createElement("h2");
    articleHeading.textContent = homepage_namespaceObject.ZY;

    // Create article text 1
    var articleText1 = createParagraph(homepage_namespaceObject.vD);

    // Create article text 2
    var articleText2 = createParagraph(homepage_namespaceObject.oV);

    // Create article text 1
    var articleText3 = createParagraph(homepage_namespaceObject.hh);

    // Add content to article container
    articleWrapper.append(articleHeading, articleText1, articleText2, articleText3);

    // Return article container
    return articleWrapper;
  }
  function addHomepageContent() {
    __webpack_require__(609)("./".concat(homepage_namespaceObject.GS, "")).then(function (images) {
      heroImages = images;
      mainContent.append(createHeroSection(), createArticleContent());
    });
  }
  return {
    load: addHomepageContent
  };
}(document);

;// ./src/assets/json/categories.json
const categories_namespaceObject = /*#__PURE__*/JSON.parse('{"GS":"hero-image.jpg","DD":"Authentic Italian Flavors, Crafted with Passion","ZY":"Benvenuti al Forno Magico!","vD":"At Il Forno Magico, we take pride in bringing the heart of Italy to your table. Each dish is crafted with the finest ingredients, passion, and time-honored recipes passed down through generations. From our handmade pastas to our wood-fired pizzas, every bite is a taste of authentic Italian tradition.","oV":"Whether you\'re here for casual meal or a special celebration, we hope to make your experience unforgettable. Buon Appetito!","tx":[{"id":21,"title":"Antipasti (Appetizers)","imageSrc":"appetizers.jpg","subpages":[{"id":211,"title":"Bruschetta al Pomodoro","description":"Toasted bread topped with fresh tomatoes, basil and a drizzle of olive oil."},{"id":212,"title":"Carpaccio di Manzo","description":"Thinly slided raw beef with arugula, shaved parmesan and a lemon vinaigrette."},{"id":213,"title":"Caprese","description":"Fresh mozzarella, heirloom tomatoes, basil, and balsamic glaze."},{"id":214,"title":"Frittura di Calamari","description":"Crispy fried squid served with marinara sauce."}]},{"id":22,"title":"Zuppe e Insalate (Soups and Salads)","imageSrc":"soups.jpg","subpages":[{"id":221,"title":"Minestrone","description":"Traditional Italian vegetable soup with seasonal ingredients."},{"id":222,"title":"Zuppa di Pomodoro","description":"Creamy tomato soup with a touch of basil and garlic."},{"id":223,"title":"Insalata Mista","description":"Mixed greens, cherry tomatoes, cucumbers, red onions, and olive oil dressing."},{"id":224,"title":"Insalata Cesare","description":"Classic Caesar salad with romaine, croutons, parmesan, and Caesar dressing."}]},{"id":23,"title":"Pasta Fresca (Fresh Pasta)","imageSrc":"pasta.jpg","subpages":[{"id":231,"title":"Spaghetti alla Carbonara","description":"Spaghetti with a creamy egg and pancetta sause, finished with pecorino cheese."},{"id":232,"title":"Lasagna alla Bolognese","description":"Layers of pasta with rich meat sauce, bechamel, and parmesan."},{"id":233,"title":"Ravioli di Ricotta e Spinaci","description":"Homemade ravioli stuffed with ricotta cheese and spinach, served with a sage-butter sauce."},{"id":234,"title":"Tagliatelle ai Funghi","description":"Fresh tagliatelle with sauteed wild mushrooms and a garlic cream sauce."}]},{"id":24,"title":"Pizze (Pizzas)","imageSrc":"pizza.jpg","subpages":[{"id":241,"title":"Margharita","description":"Tomato sauce, fresh mozzarella, and basil."},{"id":242,"title":"Quattro Stagioni","description":"Tomato sauce, mozzarella, artichokes, ham, olives, and mushrooms."},{"id":243,"title":"Diavola","description":"Tomato sauce, mozzarella, spicy salami, and red chili flakes."},{"id":244,"title":"Funghi e Tartufo","description":"Tomato sauce, mozzarella, wild mushrooms, and truffle oil."}]},{"id":25,"title":"Piatti Principali (Main Courses)","imageSrc":"steak.jpg","subpages":[{"id":251,"title":"Osso Buco","description":"Braised veal shank in rich tomato sauce with a side of risotto."},{"id":252,"title":"Pollo alla Parmigiana","description":"Breaded chicken cutlet topped with marinara sauce and melted mozzarella, served with pasta."},{"id":253,"title":"Branzino al Forno","description":"Oven baked Mediterranean sea bass with lemon and rosemary, srved with roasted vegetables."},{"id":254,"title":"Vitello Saltimbocca","description":"Veal cutlets topped with prosciutto and sage, in a white wine sauce."}]},{"id":26,"title":"Contorni (Side Dishes)","imageSrc":"salad.jpg","subpages":[{"id":261,"title":"Patate al Rosmarino","description":"Roasted rosemary potatoes."},{"id":262,"title":"Spinaci Saltati","description":"Sauteed spinach with garlic and olive oil."},{"id":263,"title":"Verdure Grigliate","description":"Grilled seasonal vegetables."},{"id":264,"title":"Risotto ai Funghi","description":"Creamy risotto with wild mushrooms."}]},{"id":27,"title":"Dolci (Desserts)","imageSrc":"desserts.jpg","subpages":[{"id":271,"title":"Tiramisu","description":"Classic Italian dessert with layers of coffe-soaked ladyfingers, mascarpone, and cocoa."},{"id":272,"title":"Panna Cotta","description":"Creamy vanilla custard topped with raspberry coulis."},{"id":273,"title":"Cannoli Siciliani","description":"Crispy shells filled with sweet ricotta cheese and chocolate chips."},{"id":274,"title":"Gelato Artigianale","description":"Selection of house-made gelato in flavors like vanilla, chocolate, and pistachio."}]},{"id":28,"title":"Vini (Wines)","imageSrc":"wine.jpg","subpages":[{"id":281,"title":"Chianti Classico","description":"Medium-bodies red wine from Tuscany."},{"id":282,"title":"Prosecco","description":"Crisp and refreshing sparkling wine."},{"id":283,"title":"Pinot Grigio","description":"Light and refreshing white wine."},{"id":284,"title":"Barolo","description":"Bold red wine from the Piedmont region."}]}]}');
;// ./src/assets/js/category.js

var Category = function (doc) {
  var categoryContent;
  var heroImages;
  var mainContent = doc.querySelector("#content");
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  function createHeroSection() {
    // Create a container for hero content
    var heroWrapper = doc.createElement("section");
    heroWrapper.classList.add("hero-container");
    if (window.innerWidth <= 767) {
      heroWrapper.style.setProperty("--hero-image", "url(".concat(heroImages.images.find(function (image) {
        return image.width === 500;
      }).path, ")"));
    } else {
      heroWrapper.style.setProperty("--hero-image", "url(".concat(heroImages.images.find(function (image) {
        return image.width === 1920;
      }).path, ")"));
    }

    // Create container for hero text
    var heroText = doc.createElement("div");
    heroText.classList.add("hero-text", "container");

    // Create hero title
    var heroTitle = doc.createElement("h1");
    heroTitle.textContent = categoryContent["title"];

    // Add the hero title to the text container
    heroText.appendChild(heroTitle);

    // Add the hero text container to the hero content container
    heroWrapper.appendChild(heroText);

    // Return the hero section
    return heroWrapper;
  }
  function createHeading2(heading) {
    var currentHeading = doc.createElement("h2");
    currentHeading.textContent = heading;
    return currentHeading;
  }
  function createParagraph(text) {
    var currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }
  function createCard(product) {
    var listItem = doc.createElement("li");
    var cardHeading = createHeading2(product["title"]);
    var cardText = createParagraph(product["description"]);
    listItem.id = product["id"];
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }
  function createCards() {
    var cardList = doc.createElement("ul");
    cardList.classList.add("card-list");
    var categorySubpages = categoryContent["subpages"];
    categorySubpages.forEach(function (product) {
      cardList.appendChild(createCard(product));
    });
    return cardList;
  }
  function createArticleContent() {
    // Create article container
    var articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container");
    var cardList = createCards();

    // Add content to article container
    articleWrapper.append(cardList);

    // Return article container
    return articleWrapper;
  }
  function addCategoryContent() {
    mainContent.append(createHeroSection(), createArticleContent());
  }
  function initCategoryContent(categoryId) {
    categoryContent = categories_namespaceObject.tx.find(function (obj) {
      return obj["id"] === categoryId;
    });
    __webpack_require__(609)("./".concat(categoryContent["imageSrc"], "")).then(function (images) {
      heroImages = images;
      scrollToTop();
      addCategoryContent();
    });
  }
  return {
    load: initCategoryContent
  };
}(document);

;// ./src/assets/js/categories.js


var Categories = function (doc) {
  var mainContent = doc.querySelector("#content");
  var heroImages;
  function loadCategory(categoryId) {
    mainContent.innerHTML = null;
    Category.load(categoryId);
  }
  function createHeroSection() {
    // Create a container for hero content
    var heroWrapper = doc.createElement("section");
    heroWrapper.classList.add("hero-container");
    if (window.innerWidth <= 767) {
      heroWrapper.style.setProperty("--hero-image", "url(".concat(heroImages.images.find(function (image) {
        return image.width === 500;
      }).path, ")"));
    } else {
      heroWrapper.style.setProperty("--hero-image", "url(".concat(heroImages.images.find(function (image) {
        return image.width === 1920;
      }).path, ")"));
    }

    // Create container for hero text
    var heroText = doc.createElement("div");
    heroText.classList.add("hero-text", "container");

    // Create hero title
    var heroTitle = doc.createElement("h1");
    heroTitle.textContent = categories_namespaceObject.DD;

    // Add the hero title to the text container
    heroText.appendChild(heroTitle);

    // Add the hero text container to the hero content container
    heroWrapper.appendChild(heroText);

    // Return the hero section
    return heroWrapper;
  }
  function createHeading3(heading) {
    var currentHeading = doc.createElement("h3");
    currentHeading.textContent = heading;
    return currentHeading;
  }
  function createParagraph(text) {
    var currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }
  function createCard(category, categoryImages) {
    var listItem = doc.createElement("li");
    var cardWrapper = doc.createElement("figure");
    var cardImage = doc.createElement("img");
    var cardText = doc.createElement("figcaption");
    listItem.id = category["id"];
    listItem.setAttribute("data-id", category["id"]);
    listItem.classList.add("card", "has-hover");
    listItem.addEventListener("click", function () {
      loadCategory(category["id"]);
    });
    var cardHeading = createHeading3(category["title"]);
    cardImage.setAttribute("srcset", categoryImages.srcSet);
    cardImage.setAttribute("src", categoryImages.src);
    cardImage.setAttribute("alt", categoryImages.placeholder);
    cardImage.setAttribute("sizes", "(max-width: 676px) 500px, 364px");
    cardText.append(cardHeading);
    cardWrapper.append(cardImage, cardText);
    listItem.appendChild(cardWrapper);
    return listItem;
  }
  function createCards() {
    var cardList = doc.createElement("ol");
    cardList.classList.add("card-list", "row-md-3");
    var categoriesSubpages = categories_namespaceObject.tx;
    categoriesSubpages.forEach(function (category) {
      __webpack_require__(214)("./".concat(category["imageSrc"], "")).then(function (categoryImages) {
        cardList.appendChild(createCard(category, categoryImages));
      });
    });
    return cardList;
  }
  function createArticleContent() {
    // Create article container
    var articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container");

    // Create article title
    var articleHeading = doc.createElement("h2");
    articleHeading.textContent = categories_namespaceObject.ZY;

    // Create article text 1
    var articleText1 = createParagraph(categories_namespaceObject.vD);

    // Create article text 2
    var articleText2 = createParagraph(categories_namespaceObject.oV);
    var cardList = createCards();

    // Add content to article container
    articleWrapper.append(articleHeading, articleText1, articleText2, cardList);

    // Return article container
    return articleWrapper;
  }
  function addCategoriesContent() {
    __webpack_require__(609)("./".concat(categories_namespaceObject.GS, "")).then(function (images) {
      heroImages = images;
      mainContent.append(createHeroSection(), createArticleContent());
    });
  }
  return {
    load: addCategoriesContent
  };
}(document);

;// ./src/assets/json/contact.json
const contact_namespaceObject = /*#__PURE__*/JSON.parse('{"DD":"Contact Us","hl":{"title":"Address","content":{"street":"Ooievaarsnest 33","city":"Ruisbroek","region":"Antwerp","postalCode":"2870","country":"Belgium"}},"Rp":{"title":"Email","content":"ilfornomagico@info.com"},"g0":{"title":"Telephone Number","content":"038661819"}}');
;// ./src/assets/js/contact.js

var Contact = function (doc) {
  var mainContent = doc.querySelector("#content");
  function createHeading1(heading) {
    var currentHeading = doc.createElement("h1");
    currentHeading.textContent = heading;
    return currentHeading;
  }
  function createHeading2(heading) {
    var currentHeading = doc.createElement("h2");
    currentHeading.textContent = heading;
    return currentHeading;
  }
  function createParagraph(text) {
    var currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }
  function createAddressCard(address) {
    var listItem = doc.createElement("li");
    var cardHeading = createHeading2(address["title"]);
    var fullAddress = [];
    Object.entries(address["content"]).forEach(function (group) {
      fullAddress.push(group[1]);
    });
    var cardText = createParagraph(fullAddress.join(", "));
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }
  function createEmailCard(el) {
    var listItem = doc.createElement("li");
    var cardHeading = createHeading2(el["title"]);
    var cardText = doc.createElement("p");
    var cardLink = doc.createElement("a");
    cardLink.href = "mailto:".concat(el["content"]);
    cardLink.textContent = el["content"];
    cardText.append(cardLink);
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }
  function createTelCard(el) {
    var listItem = doc.createElement("li");
    var cardHeading = createHeading2(el["title"]);
    var cardText = doc.createElement("p");
    var cardLink = doc.createElement("a");
    cardLink.href = "tel:".concat(el["content"]);
    cardLink.textContent = el["content"];
    cardText.append(cardLink);
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }
  function createCards() {
    var cardList = doc.createElement("ul");
    cardList.classList.add("card-list");
    var cardAddress = createAddressCard(contact_namespaceObject.hl);
    var cardEmail = createEmailCard(contact_namespaceObject.Rp);
    var cardTel = createTelCard(contact_namespaceObject.g0);
    cardList.append(cardAddress, cardEmail, cardTel);
    return cardList;
  }
  function createArticleContent() {
    // Create article container
    var articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container", "wmax-sm");
    var articleTitle = createHeading1(contact_namespaceObject.DD);
    var cardList = createCards();

    // Add content to article container
    articleWrapper.append(articleTitle, cardList);

    // Return article container
    return articleWrapper;
  }
  function addContactContent() {
    mainContent.classList.add("pt-h");
    mainContent.append(createArticleContent());
  }
  return {
    load: addContactContent
  };
}(document);

;// ./src/assets/json/credits.json
const credits_namespaceObject = /*#__PURE__*/JSON.parse('{"DD":"Image Credits","tx":[{"id":41,"title":"Photo by Nano Erdozain","link":"https://www.pexels.com/photo/chefs-enjoying-teamwork-in-a-rustic-kitchen-30338817/","imageSrc":"hero-image.jpg"},{"id":42,"title":"Photo by Leeloo The First","link":"https://www.pexels.com/photo/close-up-photograph-of-bread-with-anchovies-5602606/","imageSrc":"appetizers.jpg"},{"id":43,"title":"Photo by Jack Baghel","link":"https://www.pexels.com/photo/pot-of-soup-20408433/","imageSrc":"soups.jpg"},{"id":44,"title":"Photo by Aida Shukuhi","link":"https://www.pexels.com/photo/penne-alfredo-20234575/","imageSrc":"pasta.jpg"},{"id":45,"title":"Photo by Piotr Arnoldes","link":"https://www.pexels.com/photo/assorted-tasty-pizzas-with-champignon-slices-and-arugula-leaves-6493572/","imageSrc":"pizza.jpg"},{"id":46,"title":"Photo by hasan kurt","link":"https://www.pexels.com/photo/white-ceramic-mug-with-coffee-beside-brown-dried-leaf-10749578/","imageSrc":"steak.jpg"},{"id":47,"title":"Photo by Shameel mukkath","link":"https://www.pexels.com/photo/close-up-of-a-bowl-of-salad-6271874/","imageSrc":"salad.jpg"},{"id":48,"title":"Photo by Christopher Gaines","link":"https://www.pexels.com/photo/delicious-blueberry-yogurt-parfait-in-glass-bowl-30041626/","imageSrc":"desserts.jpg"},{"id":49,"title":"Wines- Photo by Bastian Riccardi","link":"https://www.pexels.com/photo/red-wine-being-poured-into-a-glass-12584751/","imageSrc":"wine.jpg"}]}');
;// ./src/assets/js/credits.js

var Credits = function (doc) {
  var mainContent = doc.querySelector("#content");
  function createHeading1(heading) {
    var currentHeading = doc.createElement("h1");
    currentHeading.textContent = heading;
    return currentHeading;
  }
  function createCard(credit, creditImages) {
    var listItem = doc.createElement("li");
    var cardWrapper = doc.createElement("figure");
    var cardImage = doc.createElement("img");
    var cardHeading = doc.createElement("h2");
    var cardText = doc.createElement("figcaption");
    var cardLink = doc.createElement("a");
    listItem.classList.add("card", "has-hover");
    cardImage.setAttribute("srcset", creditImages.srcSet);
    cardImage.setAttribute("src", creditImages.src);
    cardImage.setAttribute("alt", creditImages.placeholder);
    cardImage.setAttribute("sizes", "(max-width: 676px) 500px, 364px");
    cardLink.href = credit["link"];
    cardLink.setAttribute("target", "_blank");
    var imageLink = cardLink.cloneNode(true);
    imageLink.append(cardImage);
    cardLink.textContent = credit["title"];
    cardHeading.appendChild(cardLink);
    cardText.append(cardHeading);
    cardWrapper.append(imageLink, cardText);
    listItem.appendChild(cardWrapper);
    return listItem;
  }
  function createCards() {
    var cardList = doc.createElement("ol");
    cardList.classList.add("card-list", "row-md-3");
    var creditsSubpages = credits_namespaceObject.tx;
    creditsSubpages.forEach(function (credit) {
      __webpack_require__(214)("./".concat(credit["imageSrc"], "")).then(function (creditImages) {
        cardList.appendChild(createCard(credit, creditImages));
      });
    });
    return cardList;
  }
  function createArticleContent() {
    // Create article container
    var articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container");

    // Create article title
    var articleHeading = createHeading1(credits_namespaceObject.DD);
    var cardList = createCards();

    // Add content to article container
    articleWrapper.append(articleHeading, cardList);

    // Return article container
    return articleWrapper;
  }
  function addCreditsContent() {
    mainContent.classList.add("pt-h");
    mainContent.append(createArticleContent());
  }
  return {
    load: addCreditsContent
  };
}(document);

;// ./src/assets/js/index.js






// eslint-disable-next-line no-undef
if (false) {}
(function (doc) {
  var mainContent, menuNavigation, navButtons, menuOpenBtn, menuCloseBtn;
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  function menuOpen() {
    menuNavigation.setAttribute("data-menu", "open");
  }
  function menuClose() {
    menuNavigation.setAttribute("data-menu", "closed");
  }
  function clearMainContent() {
    menuClose();
    mainContent.classList.remove("pt-h");
    mainContent.innerHTML = null;
    scrollToTop();
  }
  function handleNavigation(event) {
    clearMainContent();
    switch (Number(event.target.getAttribute("data-id"))) {
      case 1:
        Homepage.load();
        break;
      case 2:
        Categories.load();
        break;
      case 3:
        Contact.load();
        break;
      case 4:
        Credits.load();
        break;
      default:
        Homepage.load();
    }
  }
  function menuMobileToggle() {
    menuOpenBtn.addEventListener("click", menuOpen);
    doc.body.addEventListener("click", function (event) {
      if (!menuNavigation.contains(event.target) && menuOpenBtn !== event.target || menuNavigation.contains(event.target) && menuCloseBtn === event.target) {
        menuClose();
      }
    });
  }
  function initMainContent() {
    Homepage.load();
    navButtons.forEach(function (navButton) {
      navButton.addEventListener("click", handleNavigation);
    });
  }
  function initPage() {
    mainContent = doc.querySelector("#content");
    menuNavigation = doc.querySelector(".menu");
    navButtons = doc.querySelectorAll(".menu-nav");
    menuOpenBtn = doc.querySelector(".menu-open");
    menuCloseBtn = doc.querySelector(".menu-close");
    menuMobileToggle();
    initMainContent();
  }
  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
})(document);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map