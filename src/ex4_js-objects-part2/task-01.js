function findPropertyInPrototype (propertyName,ourObject) {
     return ourObject.prototype.property ();
}

module.exports = findPropertyInPrototype;