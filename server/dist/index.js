"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./routes/router"));
var index_1 = __importDefault(require("./db/index"));
var app = express_1.default();
var port = 3001;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
index_1.default.on('error', console.error.bind(console, 'MongoDB connetion error:'));
app.get('/', function (req, res) {
    res.send('Hello!');
});
app.use('/api', router_1.default);
app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
