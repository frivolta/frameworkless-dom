const isNodeChanged = (node1, node2) => {

    // Check attributes length
    const n1Attributes = node1.attributes
    const n2Attributes = node2.attributes
    if (n1Attributes.length !== n2Attributes.length) {
        return true
    }

    // Check attribute difference
    const differentAttribute = Array
        .from(n1Attributes)
        .find(attribute => {
            const {name} = attribute
            const attribute1 = node1
                .getAttribute(name)
            const attribute2 = node2
                .getAttribute(name)

            return attribute1 !== attribute2
        })

    if (differentAttribute) {
        return true
    }

    // Check node text content
    if (node1.children.length === 0 &&
        node2.children.length === 0 &&
        node1.textContent !== node2.textContent) {
        return true
    }

    return false
}


const applyDiff = (parentNode, realNode, virtualNode) => {
    // Element has been removed from virtual dom
    if (realNode && !virtualNode) {
        realNode.remove();
        return
    }

    if(!realNode && virtualNode){
        parentNode.appendChild(virtualNode)
    }

    // Node is changed
    if (isNodeChanged(virtualNode, realNode)) {
        realNode.replaceWith(virtualNode);
        return
    }

    // Recursive apply diff to children
    const realChildren = Array.from(realNode.children)
    const virtualChildren = Array.from(virtualNode.children)
    const max = Math.max(realChildren.length, virtualChildren.length)
    for (let i = 0; i < max; i++) {
        applyDiff(realNode, realChildren[i], virtualChildren[i])
    }
}

export default applyDiff