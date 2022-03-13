function findElement(selector, node = document) {
    return node.querySelector(selector);
}

function findElements(selector, node = document) {
    return node.querySelectorAll(selector);
}

export { findElement, findElements };