"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../../../lib/decorators");
var action_1 = require("../helpers/action");
var check_1 = require("../helpers/check");
var checkSite = (function () {
    function checkSite() {
    }
    checkSite.prototype.openWebsite = function () {
        return action_1.default.Open;
    };
    ;
    checkSite.prototype.title = function () {
        return check_1.default.Title;
    };
    ;
    __decorate([
        decorators_1.Given(/^I open the (url|site) "([^"]*)?"$/)
    ], checkSite.prototype, "openWebsite", null);
    __decorate([
        decorators_1.Then(/^I expect that the title is( not)* "([^"]*)?"$/)
    ], checkSite.prototype, "title", null);
    checkSite = __decorate([
        decorators_1.Cucumber
    ], checkSite);
    return checkSite;
}());
;
var CheckSite = new checkSite();
