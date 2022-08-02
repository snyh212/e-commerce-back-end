# e-commerce-back-end

[video tutorial](https://drive.google.com/file/d/1srtyxrXUY2_NQ664GPFpikXhSyvUOewN/view)

## Description
E-commerce-back-end is a complete back-end for an e-commerce website, that gives the user access to categories, products and tags. Each has seeds to give them example keys and values, and and each are accessed with their respective routes. Once the database is made and seeds are seeded, the user can view with get routes, add with post routes, update with put routes and delete with delete routes.

## Technologies used
JS, node.js with express, mysql2, sequelize and dotemv dependencies.
Made on VS Code, and run in command line and Insomnia

## Code and Functionality

### Here is code for the /catagories directory, we send the Category model data, categoryData as a json objet:
```
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
```
### This codes for the product route for a product with a specific id and what to include along with that data:
```
 const productData = await Product.findByPk(req.params.id, {
      include:[{model: Category}, {model: Tag}]
    });
```
### JS code to conect Tag and Product models to eachother:
```
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  unique: false,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  unique: false,
});
```

## Contact Infromation

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com)  
[GitHub: snyh212](https://github.com/snyh212)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)