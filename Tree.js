import Node from "./Node.js"

class Tree {
    constructor(array) {
        this.array = [...new Set(array)].sort((a, b) => a - b)
        this.root = this.#buildTree(this.array, 0, this.array.length - 1)
    }

    #buildTree(array, start, end) {
        if (start > end) return null

        let mid = Math.floor((start + end) / 2)
        let root = new Node(array[mid])

        node.left = this.#buildTree(array, start, mid - 1)
        node.left = this.#buildTree(array, mid + 1, end)

        return root
    }
}

export default Tree