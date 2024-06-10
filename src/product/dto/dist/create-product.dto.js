"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProductDto = void 0;
/* eslint-disable prettier/prettier */
var class_validator_1 = require("class-validator");
var CreateProductDto = /** @class */ (function () {
    function CreateProductDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateProductDto.prototype, "nombre");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateProductDto.prototype, "categoria");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.Min(0)
    ], CreateProductDto.prototype, "cantidad");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateProductDto.prototype, "unidad");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.Min(0)
    ], CreateProductDto.prototype, "precio");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.Min(0)
    ], CreateProductDto.prototype, "umbral");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsNotEmpty()
    ], CreateProductDto.prototype, "estaEliminado");
    return CreateProductDto;
}());
exports.CreateProductDto = CreateProductDto;
