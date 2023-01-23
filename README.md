# E-Commerce-Challenge

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

### Database Models

The databse contains four models:
* `Category`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.

  * `category_name`
    * String.
    * Doesn't allow null values.

* `Product`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.

  * `product_name`
    * String.
    * Doesn't allow null values.

  * `price`
    * Decimal.
    * Doesn't allow null values.
    * Validates that the value is a decimal.

  * `stock`
    * Integer.
    * Doesn't allow null values.
    * Set a default value of `10`.
    * Validates that the value is numeric.

  * `category_id`
    * Integer.
    * References the `Category` model's `id`.

* `Tag`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.

  * `tag_name`
    * String.

* `ProductTag`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.

  * `product_id`
    * Integer.
    * References the `Product` model's `id`.

  * `tag_id`
    * Integer.
    * References the `Tag` model's `id`.


* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.


A walkthrough video demonstrating the functionality of the application - [walkthrough Video](Assets/ecommerce.mp4)

GitHub repository - https://github.com/Kaviambi/E-Commerce-Challenge.git

Heroku - https://ecommerce-kk.herokuapp.com/
