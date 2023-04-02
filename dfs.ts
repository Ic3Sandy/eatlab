/*
We'd like you to implement a Depth-First Search (DFS) 
algorithm for a tree using traversal methods (preorder, postorder, and inorder) 
in TypeScript. Additionally, we'd like you to implement the factory design pattern 
to allow the user to choose which traversal method to use.


Traversal orders are as follows:
- Pre-order: parent → left child → right child

- Post-order: left child → right child → parent

- In-order: left child → parent → right child

Example:


treeNode = {

  1: [2, 3],

  2: [4, 5],

  3: [],

  4: [],

  5: [6, 7],

  6: [],

  7: [8],

  8: []

}


Pre-order Ouput: [1, 2, 4, 5, 6, 7, 8, 3]

Post-order Ouput: [4, 6, 8, 7, 5, 2, 3, 1]

In-order Output: [4, 2, 6, 5, 8, 7, 1, 3]
*/

interface TreeNode {
  [key: number]: number[];
}

interface TreeTraversal {
  traverse(tree: TreeNode): number[];
}

class PreOrderTraversal implements TreeTraversal {
  traverse(tree: TreeNode): number[] {
    const result: number[] = [];

    const dfs = (node: number) => {
      result.push(node);

      const children = tree[node];

      for (const child of children) {
        dfs(child);
      }
    };

    dfs(1);

    return result;
  }
}

class PostOrderTraversal implements TreeTraversal {
  traverse(tree: TreeNode): number[] {
    const result: number[] = [];

    const dfs = (node: number) => {
      const children = tree[node];

      for (const child of children) {
        dfs(child);
      }

      result.push(node);
    };

    dfs(1);

    return result;
  }
}

class InOrderTraversal implements TreeTraversal {
  traverse(tree: TreeNode): number[] {
    const result: number[] = [];

    const dfs = (node: number) => {
      const children = tree[node];

      if (children.length >= 1) {
        dfs(children[0]);
      }

      result.push(node);

      if (children.length === 2) {
        dfs(children[1]);
      }
    };

    dfs(1);

    return result;
  }
}

class TreeTraversalFactory {
  static createTraversal(traversalType: string): TreeTraversal {
    console.log(traversalType);
    switch (traversalType.toLowerCase()) {
      case 'preorder':
        return new PreOrderTraversal();
      case 'postorder':
        return new PostOrderTraversal();
      case 'inorder':
        return new InOrderTraversal();
      default:
        throw new Error('Invalid traversal type.');
    }
  }
}

// Example usage:
const treeNode: TreeNode = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: [6, 7],
  6: [],
  7: [8],
  8: [],
};

const traversalType = 'inorder';
const traversal = TreeTraversalFactory.createTraversal(traversalType);
const result = traversal.traverse(treeNode);
console.log(result);
