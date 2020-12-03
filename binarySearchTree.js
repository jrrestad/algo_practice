class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }

    insertNode(newValue) {
        const node = new Node(newValue);
        if (this.isEmpty() == true) {
            // first node is the root if instantiating an empty list
            this.root = node;
        } else {
            let current = this.root;
            while (current !== null) {
                if (newValue <= current.data) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        return this;
    }

    findIMin(current = this.root) {
        if (current == null) {
            return null;
        }
        // or simply while (current.left)...
        while (current.left !== null) {
            current = current.left;
        }
        return current.data
    }

    findRMin(current = this.root) {
        if (current.left !== null) {
            return this.findRMin(current.left)
        } else {
            // when current.left is null, we are at the min node
            return current.data;
        }
    }

    findIMax(current = this.root) {
        if (current == null) {
            return null;
        }
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    findRMax(current = this.root) {
        if (current.right !== null) {
            return this.findRMax(current.right)
        } else {
            return current.data;
        }
    }

    contains(value) {
        let current = this.root;
        while (current != null) {
            if (current.data == value) {
                return true
            }
            if (value < current.data) {
                current = current.left;
            }
            if (value > current.data) {
                current = current.right;
            }
        }
        return false
    }
}

const emptyTree = new BinarySearchTree();

const oneNodeTree = new BinarySearchTree();
    oneNodeTree.root = new Node(10);

const twoLevelTree = new BinarySearchTree();
    twoLevelTree.root = new Node(10);
    twoLevelTree.root.left = new Node(5);
    twoLevelTree.root.right = new Node(15);

const bigTree = new BinarySearchTree();
bigTree.insertNode(25)
.insertNode(15)
.insertNode(10)
.insertNode(22)
.insertNode(4)
.insertNode(12)
.insertNode(18)
.insertNode(24)
.insertNode(50)
.insertNode(35)
.insertNode(70)
.insertNode(31)
.insertNode(44)
.insertNode(66)
.insertNode(90);

/* bigTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

console.log(emptyTree.isEmpty()); // true
console.log(oneNodeTree.isEmpty()); // false
console.log(bigTree.findRMin()) // 4
console.log(bigTree.findIMin()) // 4
console.log(bigTree.findIMax()) // 90
console.log(bigTree.findRMax()) // 90
console.log(bigTree.contains(35)) // true

