#!/usr/bin/env node

const fs = require('fs');
const { action, shift, input, output } = require('./../program/commander');
const transormStream = require('./../stream/transformStream');
const cli = require('./../cli');

if (!action || !shift) {
  process.stderr.write("Error: You don't pass necessarily arguments for cli");
  process.exit(1);
}


const readStream = input ? fs.createReadStream(__dirname + '\\..\\' + input, { encoding: 'utf-8' }) : process.stdin;
const writeStream = output ? fs.createWriteStream(__dirname + '\\..\\' + output, { encoding: 'utf-8', flags: 'a' }) : process.stdout;

cli(readStream, writeStream, transormStream);

