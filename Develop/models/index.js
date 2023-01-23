// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongTo(Catergory, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

// Categories have many Products
Catergory.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: 'ProductTag',
    unique: false
  },
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  throught: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
