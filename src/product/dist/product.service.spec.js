"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var testing_1 = require("@nestjs/testing");
var mongoose_1 = require("@nestjs/mongoose");
var product_service_1 = require("./product.service");
var product_schema_1 = require("./schema/product.schema");
var product_controller_1 = require("./product.controller");
var mockProduct = {
    _id: '1',
    name: 'Product 1',
    category: 'Category 1',
    quantity: 100,
    unit: 'pcs',
    threshold: 10,
    price: 20,
    isDeleted: false
};
var mockProductModel = {
    find: jest.fn().mockReturnValue({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue([mockProduct])
    }),
    findOne: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockProduct)
    }),
    findByIdAndUpdate: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockProduct)
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create: jest.fn().mockImplementation(function (_dto) { return ({
        save: jest.fn().mockResolvedValue(mockProduct)
    }); }),
    exec: jest.fn().mockResolvedValue(mockProduct)
};
describe('ProductService', function () {
    var service;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var model;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var module;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.Test.createTestingModule({
                        controllers: [product_controller_1.ProductController],
                        providers: [
                            product_service_1.ProductService,
                            {
                                provide: mongoose_1.getModelToken(product_schema_1.Product.name),
                                useValue: mockProductModel
                            },
                        ]
                    }).compile()];
                case 1:
                    module = _a.sent();
                    service = module.get(product_service_1.ProductService);
                    model = module.get(mongoose_1.getModelToken(product_schema_1.Product.name));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be defined', function () {
        expect(service).toBeDefined();
    });
    it('should return all products', function () { return __awaiter(void 0, void 0, void 0, function () {
        var products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.findAll(1, 1)];
                case 1:
                    products = _a.sent();
                    expect(products).toEqual([mockProduct]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return a single product', function () { return __awaiter(void 0, void 0, void 0, function () {
        var product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.findOne('1')];
                case 1:
                    product = _a.sent();
                    expect(product).toEqual(mockProduct);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create a new product', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.create(mockProduct)];
                case 1:
                    newProduct = _a.sent();
                    expect(newProduct).toEqual(mockProduct);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should update a product', function () { return __awaiter(void 0, void 0, void 0, function () {
        var updatedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.update('1', mockProduct)];
                case 1:
                    updatedProduct = _a.sent();
                    expect(updatedProduct).toEqual(mockProduct);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete a product', function () { return __awaiter(void 0, void 0, void 0, function () {
        var deletedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service["delete"]('1')];
                case 1:
                    deletedProduct = _a.sent();
                    expect(deletedProduct).toEqual(mockProduct);
                    return [2 /*return*/];
            }
        });
    }); });
});
