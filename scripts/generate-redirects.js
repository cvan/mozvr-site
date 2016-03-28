#!/usr/bin/env node

// Generates redirects for legacy MozVR.com site.
// (Useful script for generating directory structure for a SPA too!)

var fs = require('fs');
var path = require('path');
var urllib = require('url');

require('shelljs/global');

var DESTINATION_DIR = '_prod';
var ROOT_DIR = path.join(__dirname, '..');
var SPA_ROUTES = JSON.parse(getFileContents('spa_routes.json'));

var toMakeFiles = {};
var toMakeDirs = {};
var bodies = {};

function getBody (fn) {
  var ret = bodies[fn];
  if (fn in bodies) {
    return ret;
  }

  bodies[fn] = getFileContents(fn);
  return bodies[fn];
}

function getPathRelative () {
  var args = Array.apply(null, arguments);
  return path.join.apply(this, [ROOT_DIR].concat(args));
}

function getDirname (fn) {
  // Collapse multiple `/` to a single `/`.
  // Add a single `/` if one doesn't exist.
  fn = fn.replace(/\/+$/, '/');
  if (fn.substr(-1) !== '/') { fn += '/'; }
  return fn;
}

function getFileContents (fn) {
  return String(fs.readFileSync(getPathRelative(fn)));
}

function writePlaceholderIfEmpty (fn, fallback) {
  var exists = test('-e', fn);
  console.log(exists ? '[ SKIP ]' : '[ OK ]  ', fn);
  if (exists) { return; }
  String(fallback).to(fn);
}

function addRoute (uri, fallback) {
  var pathname = urllib.parse(uri).pathname;
  pathname = path.normalize(pathname);  // Removes any leading `/`.

  var fn = urllib.resolve('/', pathname);

  if (fn[0] === '/') {
    fn = fn.substr(1);
  }

  if (!fn) {
    fn = 'index.html';
  }

  if (path.extname(fn)) {
    if (!(fn in toMakeFiles)) {
      toMakeFiles[fn] = getBody(fallback);
    }
  } else {
    if (!(fn in toMakeDirs)) {
      toMakeDirs[getDirname(fn)] = getBody(fallback);
    }
  }
}

if (!test('-d', getPathRelative(DESTINATION_DIR))) {
  return;
}

pushd(getPathRelative(DESTINATION_DIR));

Object.keys(SPA_ROUTES).forEach(function (fallback) {
  var routeList = SPA_ROUTES[fallback];
  routeList.forEach(function (uri) {
    if (!uri) { return; }
    addRoute(uri, fallback);
  });
});

Object.keys(toMakeFiles).forEach(function (fn) {
  var dest = getPathRelative(DESTINATION_DIR, fn);
  if (test('-e', dest)) { return; }
  mkdir('-p', path.dirname(dest));
  var contents = toMakeFiles[fn];
  writePlaceholderIfEmpty(dest, contents);
});

Object.keys(toMakeDirs).forEach(function (fn) {
  var dest = getPathRelative(DESTINATION_DIR, fn);
  if (test('-d', dest)) { return; }
  mkdir('-p', dest);
  var contents = toMakeDirs[fn];
  writePlaceholderIfEmpty(path.join(dest, 'index.html'), contents);
  writePlaceholderIfEmpty(dest.slice(0, -1) + '.html', contents);
});

popd();
