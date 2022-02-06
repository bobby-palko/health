"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers/controllers");
var router = express_1.default.Router();
router.get('/weights', controllers_1.getAllWeights);
router.post('/weight', controllers_1.addWeight);
exports.default = router;
