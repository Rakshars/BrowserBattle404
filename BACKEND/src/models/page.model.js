const mongoose = require("mongoose");
const slugify = require("slugify");

const sectionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["hero", "text", "cards", "stats", "media", "cta", "faq"],
      default: "text",
      trim: true,
      lowercase: true,
    },
    heading: {
      type: String,
      trim: true,
      maxlength: 150,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { _id: false }
);

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Page title is required"],
      trim: true,
      maxlength: 200,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    sections: {
      type: [sectionSchema],
      default: [],
    },
    metaTitle: {
      type: String,
      trim: true,
      maxlength: 70,
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: 160,
    },
  },
  { timestamps: true }
);

pageSchema.pre("save", function pageSlugHook(next) {
  if (this.isModified("title") || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true, trim: true });
  }
  next();
});

const Page = mongoose.models.Page || mongoose.model("Page", pageSchema);

module.exports = Page;