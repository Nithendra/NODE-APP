
const Cart = require('./cart');

// import connection pool
const connPool = require('../util/database');

module.exports = class Product {
  constructor(id, title,  price, description, imageUrl) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return connPool.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
    [this.title, this.price, this.description, this.imageUrl]
    );
  }

  static deleteById(id) {
  }

  static fetchAll() {
    return connPool.execute('SELECT * from products');
  }

  static findById(id) {
  }
};
