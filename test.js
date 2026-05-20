import Tree from "./Tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 100, 123]
const tree = new Tree(array)

// display the tree in console
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

prettyPrint(tree.root)
// console.log(tree.includes(9)) // true
// tree.insert(tree.root, 500)
tree.deleteItem(tree.root, 67)

prettyPrint(tree.root)