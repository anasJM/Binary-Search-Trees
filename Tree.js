import Node from "./Node.js"

class Tree {
    constructor(array) {
        this.array = [...new Set(array)].sort((a, b) => a - b)
        this.root = this.#buildTree(this.array, 0, this.array.length - 1)
    }

    // building the tree
    #buildTree(array, start, end) {
        if (start > end) return null

        let mid = Math.floor((start + end) / 2)
        let root = new Node(array[mid])

        root.left = this.#buildTree(array, start, mid - 1)
        root.right = this.#buildTree(array, mid + 1, end)

        return root
    }

    // checks if the tree includes the given value
    includes(value) {
        let current = this.root

        while (current !== null) {
            if (value === current.data) return true

            if (value < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }

        return false
    }

    // insert new value into the tree
    insert(root, value) {
        if (root === null)
            return new Node(value)

        if (value < root.data)
            root.left = this.insert(root.left, value)
        else
            root.right = this.insert(root.right, value)

        return root
    }

    // get the smalest in the right subtree
    #getSuccessor(current) {
        current = current.right

        while (current !== null && current.left !== null)
            current = current.left

        return current
    }

    deleteItem(root, value) {
        if (root === null)
            return root

        if (root.data < value) {
            root.right = this.deleteItem(root.right, value)
        } else if (root.data > value) {
            root.left = this.deleteItem(root.left, value)
        } else {
            // Node with 0 or 1 child
            if (root.left === null)
                return root.right
            if (root.right === null)
                return root.left

            // Node with 2 children
            const successor = this.#getSuccessor(root)
            root.data = successor.data
            root.right = this.deleteItem(root.right, successor.data)
        }

        return root
    }
}

export default Tree