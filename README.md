# eatlab

This repository contains a sample project for an e-commerce website with a microservices architecture. The project consists of four backend services: product server, order server, inventory server, and user server.

Each backend service has its own database and uses Express for TypeScript to implement the REST API. The backend services are orchestrated using Docker Compose, making it easy to deploy and manage the services.

The order server communicates with the inventory server to check inventory levels before creating a new order. The product server manages the products and syncs new products from the inventory server every 5 seconds using a cron job.

The backend services handle errors gracefully and return informative error messages to the client.

The product server implements two endpoints for retrieving products: GET /products to retrieve a list of all products and GET /products/:id to retrieve a product by ID.

The order server implements three endpoints for managing orders: POST /orders to create a new order with product IDs and quantities, GET /orders to retrieve a list of all orders, and GET /orders/:id to retrieve an order by ID.

The inventory server implements four endpoints for managing inventory: POST /inventory/import to import products with initial inventory levels from a CSV file, GET /inventory/products to retrieve a list of all products, GET /inventory/products/:id to retrieve a product by ID, and PUT /inventory/products to update inventory levels for a product.

Overall, this project provides a solid foundation for building an e-commerce website with a microservices architecture. Feel free to use this project as a starting point for your own e-commerce project.

## Run the project

To run the project, you need to have Docker and Docker Compose installed on your machine.

```bash
docker compose up -d
```

## Show logs

```bash
docker compose logs -f nestjs
```

---

In the coding section
A. You have been tasked with designing a database schema to track student enrollment in courses at a university. Each course has a unique ID, name and description. Each student has a unique ID, a name, an email address, and a graduation year. A student can be enrolled in multiple courses, and a course can have multiple students enrolled. Each enrollment should also track the enrollment date.

Design a SQL schema for this problem, including the necessary tables, columns, and relationships.

Answer: in file `design-db.md`

===================

B. You have been tasked with focusing on TypeScript and Docker Compose, and with implementing three separate API servers for product, order, and inventory management.

Background
You are working for a company that sells products online. The company has three backend services: one that manages products, one that manages orders, and one that manages inventory.

Requirements

1. Each backend service should have its own database.
2. The backend services should use Express for TypeScript to implement the REST API.
3. The backend services should use Docker Compose to orchestrate the containers.
4. The order server should check inventory levels with the inventory server to ensure the order can be fulfilled.
5. The backend services should handle errors gracefully and return informative error messages.
6. The product server should manage the products by implementing the following endpoints:

   - GET /products
     Retrieve a list of all products

   - GET /products/:id
     Retrieve a product by ID

7. The product server should have a cron job set up to sync new products from the inventory server every 5 seconds.
8. The order server should manage the orders by implementing the following endpoints:

   - POST /orders
     Create a new order with product IDs and quantities

   - GET /orders
     Retrieve a list of all orders

   - GET /orders/:id
     Retrieve an order by ID

9. The inventory server should manage the inventory by implementing the following endpoints:

   - POST /inventory/import
     Import products with initial inventory levels from a CSV file

   - GET /inventory/products
     Retrieve a list of all products

   - GET /inventory/products/:id
     Retrieve a product by ID

   - PUT /inventory/products
     Update inventory levels for a product

When a customer places an order, the order server should check inventory levels with the inventory server to ensure the order can be fulfilled.
If the inventory is sufficient, the order server should create the order and update the inventory levels accordingly.

Please create a CSV file that can be used to import products into the inventory server, and prepare a Postman collection to test your APIs.

===================

C. We'd like you to implement a Depth-First Search (DFS) algorithm for a tree using traversal methods (preorder, postorder, and inorder) in TypeScript. Additionally, we'd like you to implement the factory design pattern to allow the user to choose which traversal method to use.

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

Answer: in file `dfs.ts`

---

Please create a new public repository on GitHub, upload your code, and provide the repository link in the text field below.

Your repository should include:

- A README file that provides an overview of the repository and its contents.
- A well-organized file structure that makes it easy for us to find and navigate your code.
