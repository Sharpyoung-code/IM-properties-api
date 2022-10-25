const Property = require("../../models/PropertySchema");
const Category = require("../../models/CategorySchema");
const slugify = require("slugify");
const validatePropertySchema = require("../../utils/validatePropertiesSchema");
// const upload = require('../../middleware/multer.js')


const addPropertyController = async (req, res) => {
  try {
    let { body, file } = req;
    const { error, value } = validatePropertySchema(body);
    if (error) {
      return res.json({ error: { message: error.details[0].message } });
    }

    body.image = file.path;
    body.video = file.path;
    const { _id } = req.user;
    // console.log(_id);
    console.log(file)

    body.nameSlug = slugify(body.name);
    body.catSlug = slugify(body.description);

    const preProperty = new Property({ ...body, addedBy: _id });
    // console.log(preProperty);
    const property = await preProperty.save();
    return res.status(201).json(property);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {addPropertyController}
