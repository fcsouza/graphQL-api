const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const serverless = require("serverless-http");

const app = express();
module.exports.handler = serverless(app);