webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Тестовое задание</h1>\n  <p>Typescript/Angular 2</p>\n  <app-container></app-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_container_component__ = __webpack_require__("../../../../../src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__html_outlet_directive__ = __webpack_require__("../../../../../src/app/html-outlet.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__container_container_component__["a" /* ContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__html_outlet_directive__["a" /* HtmlOutletDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <p>Постановка задачи:</p>\n        <p>Модель поставляется в json-файле.</p>\n        <p>\n            Необходимо разработать компонент который на базе переданной модели создает и загружает в себя angular-компонент, т.е. необходимо в рантайм (после того как angular-приложение уже загрузилось, и была выполнена процедура bootstrap):\n        </p>\n        <ol>\n            <li>\n              загрузить HTTP-запросом json-файл (путь передается входным параметром компонента);\n            </li>\n            <li>\n              создать корректный HTML-шаблон по загруженной модели;\n            </li>\n            <li>\n              создать angular-компонент с полученным шаблоном и скомпилировать его;\n            </li>\n            <li>\n              загрузить компонент.\n            </li>\n        </ol>            \n    </div>\n    <div appHtmlOutlet [html]=\"dynamicElement\">\n        Здесь будет вставлен динамический компонент:\n    </div>\n    <div>\n        Просьба обратить особое внимание на третий и четвёртый пункт ТЗ. Задание не считается выполненным, если так или иначе используется манипуляция DOM`ом существующего компонента. Т.е компонент должен создаваться директивой Component в runtime (после того, как выполнена процедура bootstrapModule). \n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data__ = __webpack_require__("../../../../../src/app/shared/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContainerComponent = (function () {
    // Как задать template динамически с помощью Angular 2? Cм. ссылку - https://toster.ru/q/364375
    function ContainerComponent(_renderer) {
        this._renderer = _renderer;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        // вместо http- запроса просто подгружаем данные
        var obj = JSON.parse(__WEBPACK_IMPORTED_MODULE_1__shared_data__["a" /* data */]);
        this.dynamicElement = (this.createElement(obj)).outerHTML;
    };
    // создание html-шаблона
    ContainerComponent.prototype.createElement = function (data) {
        var element;
        if (data.tag) {
            element = this._renderer.createElement(data.tag);
            // console.log(typeof data.tag); // string
            // console.log(element.toString()); // [object HTMLDivElement]
        }
        if (data.attributes) {
            var keys = Object.keys(data.attributes); // возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте
            for (var i = 0; i < keys.length; i++) {
                this._renderer.setAttribute(element, keys[i], data.attributes[keys[i]]);
            }
        }
        if (data.content) {
            for (var i = 0; i < data.content.length; i++) {
                if (data.content[i].text) {
                    var text = this._renderer.createText(data.content[i].text);
                    this._renderer.appendChild(element, text);
                }
                else {
                    var childElement = this.createElement(data.content[i]);
                    this._renderer.appendChild(element, childElement);
                }
            }
        }
        // console.log(element.outerHTML);
        return element;
    };
    return ContainerComponent;
}());
ContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-container',
        template: __webpack_require__("../../../../../src/app/container/container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _a || Object])
], ContainerComponent);

var _a;
//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ "../../../../../src/app/html-outlet.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlOutletDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlOutletDirective = (function () {
    function HtmlOutletDirective(vcRef, compiler) {
        this.vcRef = vcRef;
        this.compiler = compiler;
    }
    HtmlOutletDirective.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.html;
        if (!html) {
            return;
        }
        ;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var DynamicHtmlComponent = (function () {
            function DynamicHtmlComponent() {
            }
            return DynamicHtmlComponent;
        }());
        DynamicHtmlComponent = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
                selector: 'app-dynamic-comp',
                template: html
            })
        ], DynamicHtmlComponent);
        ;
        var DynamicHtmlModule = (function () {
            function DynamicHtmlModule() {
            }
            return DynamicHtmlModule;
        }());
        DynamicHtmlModule = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
                declarations: [DynamicHtmlComponent]
            })
        ], DynamicHtmlModule);
        this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(function (factory) {
            var moduleRef = factory.ngModuleFactory.create(_this.vcRef.parentInjector);
            var compFactory = factory.componentFactories.find(function (x) { return x.componentType === DynamicHtmlComponent; });
            var cmpRef = _this.vcRef.createComponent(compFactory, 0, moduleRef.injector);
        });
    };
    HtmlOutletDirective.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    return HtmlOutletDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], HtmlOutletDirective.prototype, "html", void 0);
HtmlOutletDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appHtmlOutlet]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Compiler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Compiler */]) === "function" && _b || Object])
], HtmlOutletDirective);

var _a, _b;
//# sourceMappingURL=html-outlet.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DOMNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var DOMNode = (function () {
    function DOMNode(tag, attributes, content) {
        this.tag = tag;
        this.attributes = attributes;
        this.content = content;
    }
    return DOMNode;
}());

var data = '{ "tag": "div", "content": [{ "tag": "span", "attributes":{"style": "color: red"},"content": [{ "text": "Enter value:" } ]}, {  "tag":"input", "attributes": {"type": "text", "value": "test",	"style": "color: green"}} ]}';
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map