const AllProducts = require('./Constant/Products');
const Products = require('./Models/ProductSchema');

const StoreData = async() =>{
    try {
        await Products.deleteMany({});

        const store = await Products.insertMany(AllProducts)
        // console.log(store);
        
    } catch (error) {
        console.log(error.message + 'Error');
        
    }
}

module.exports = StoreData