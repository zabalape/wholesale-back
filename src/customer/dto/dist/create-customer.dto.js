"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCustomerDto = void 0;
/* eslint-disable prettier/prettier */
var class_validator_1 = require("class-validator");
var CreateCustomerDto = /** @class */ (function () {
    function CreateCustomerDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCustomerDto.prototype, "nombre");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCustomerDto.prototype, "email");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.Min(0)
    ], CreateCustomerDto.prototype, "telefono");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCustomerDto.prototype, "direccion");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsNotEmpty()
    ], CreateCustomerDto.prototype, "estaEliminado");
    return CreateCustomerDto;
}());
exports.CreateCustomerDto = CreateCustomerDto;
