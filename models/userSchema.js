const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  notes: [
    {
      key: {
        type: Number,
        require: true,
      },
      title: {
        type: String,
      },
      note: {
        type: String,
      },
      color: {
        type: String,
      },
      createdNoteDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  keygenerator: {
    type: Number,
    require: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.addNotes = async function (noteValue) {
  try {
    this.notes.unshift(noteValue);
    await this.save();
    return this.notes;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.deleteNote = async function (key) {
  try {
    this.notes.map((value, index) => {
      if (value.key === Number(key)) {
        this.notes.splice(index, 1);
      }
    });
    await this.save();
    return this.notes;
  } catch (err) {
    console.log(err);
  }
};

const KeepNoteAppUserData = mongoose.model("USERDATA", userSchema);

module.exports = KeepNoteAppUserData;
