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
}

export default Tree