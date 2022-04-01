"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Beer extends Item_1.default {
    constructor(description, price) {
        super("Beer", description, price);
    }
    getTax() {
        return 10;
    }
}
exports.default = Beer;
