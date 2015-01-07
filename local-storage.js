'use strict';

var stub = require('./stub');
var tracking = require('./tracking');
var ls = 'localStorage' in global ? global.localStorage : stub;

function accessor (key, value) {
  if (arguments.length === 1) {
    return get(key);
  }
  return set(key, value);
}

function get (key) {
  return JSON.parse(ls.getItem(key));
}

function set (key, value) {
  return ls.setItem(key, JSON.stringify(value));
}

function remove (key) {
  return ls.removeItem(key);
}

accessor.set = set;
accessor.get = get;
accessor.remove = remove;
accessor.on = tracking.on;
accessor.off = tracking.off;

module.exports = accessor;
