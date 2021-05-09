#!/usr/bin/env node
const fs = require('fs');
const { action, shift, input, output } = require('./../program/commander');
const transormStream = require('./../stream/transformStream');
const cli = require('./../cli');
const error = require('./../program/error');

error(action, shift, input, output);

const readStream = input ? fs.createReadStream(__dirname + '\\..\\' + input, { encoding: 'utf-8' }) : process.stdin;
const writeStream = output ? fs.createWriteStream(__dirname + '\\..\\' + output, { encoding: 'utf-8', flags: 'a' }) : process.stdout;

cli(readStream, writeStream, transormStream, action, shift);
