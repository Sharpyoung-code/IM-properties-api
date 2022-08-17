const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SaleSchema = new Schema(
  {
    orderId: {
      type: String,
    },
    member: {
      type: String,
      ref: "User",
    },
    confirmedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    state: {
      type: String,
      enum: [
        "delivered",
        "out for delivery",
        "failed delivery",
        "cancelled",
        "pending",
      ],
    },

    product: {
      type: Object,
    },
    paymentMethod: {
      type: String,
      enum: ["wallet", "cash"],
    },

    totalQty: {
      type: Number,
    },
    amount: {
      type: Number,
    },

    orderedAt: {
      type: Date,
      default: Date.now,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// OrderSchema.pre("validate", function (next) {
//   if (this.name) {
//     this.catSlug = slugify(this.name, {
//       lower: true,
//       strict: true,
//     });
//   }

//   next();
// });

// const populateUser = function (next) {
//   this.populate("user", "_id lastName firstName avatar");

//   next();
// };

// CategorySchema.pre("find", populateUser)
//   .pre("findOne", populateUser)
//   .pre("findOneAndUpdate", populateUser);

const Sale = mongoose.model("Order", SaleSchema);

module.exports = Sale;