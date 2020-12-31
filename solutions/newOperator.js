'use strict';

function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const entity = Constructor.apply(instance, args);
  return entity === Object(entity) ? entity : instance;
}


