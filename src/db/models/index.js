import User from "./user.js";
import Cart from "./cart.js";
import Product from "./product.js";

User.belongsToMany(Product, { through: { model: Cart, unique: false } }); // User.findAll({include: Product })
Product.belongsToMany(User, { through: { model: Cart, unique: false } }); // //Product.findAll({include:User})

User.hasMany(Cart); // User.findAll({include: {model:Cart, where:{userId: req.query.param}} })
Cart.belongsTo(User); // Cart.findAll({include:User})

Product.hasMany(Cart); // Product.findAll({include:Cart})
Cart.belongsTo(Product); //  Cart.findAll({include:Product})

export default { User, Cart, Product };
