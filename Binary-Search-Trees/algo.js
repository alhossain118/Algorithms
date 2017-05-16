function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}


BST.prototype.insert = function(value) {

    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    } else if (value >= this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}



BST.prototype.contains = function(value) {
    if (value === this.value) return true;
    else if (value < this.value) {
        if (!this.left) return false
        else return this.left.contains(value)
    } else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value)
    }
}

BST.prototype.depthFirstTraversal = function(interatorFunc, order) {
    if (order === 'pre-order') interatorFunc(this.value)
    if (this.left) this.left.depthFirstTraversal(interatorFunc, order);
    if (order === 'in-order') interatorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(interatorFunc, order);
    if (order === 'post-order') interatorFunc(this.value)
}

BST.prototype.breadthFirstTraversal = function(interatorFunc) {
    var queue = [this];
    while (queue.length) {
        var treeNode = queue.shift();
        interatorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right)
    }

}

var bst = new BST(50);
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)

bst.depthFirstTraversal(log, 'pre-order')

function log(value) {
    console.log(value);
}


// console.log(bst.right.left.left);