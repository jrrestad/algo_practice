class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insertNode(newValue) {
        const node = new Node(newValue);

        if (this.isEmpty()) {
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
        if (current === null) {
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
}

const emptyTree = new BinarySearch();

const oneNodeTree = new BinarySearch();
    oneNodeTree.root = new Node(10);

const twoLevelTree = new BinarySearch();
    twoLevelTree.root = new Node(10);
    twoLevelTree.root.left = new Node(5);
    twoLevelTree.root.right = new Node(15);

const bigTree = new BinarySearch();
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
