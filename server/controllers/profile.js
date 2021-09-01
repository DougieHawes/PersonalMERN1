const formidable = require("formidable");
const fs = require("fs");

const Profile = require("../models/Profile");
const User = require("../models/User");

exports.createProfile = async (req, res) => {
  try {
    const postedby = await User.findById(req.user.id).select("-password");

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "image upload failed",
        });
      }
      const { avatar, quote } = fields;

      const newProfile = await Profile.findOneAndUpdate({
        postedby,
        ...fields,
      });

      if (files.avatar) {
        if (files.avatar.size > 1000000) {
          return res.status(400).json({
            error: "avatar should be less than 1mb in size",
          });
        }
        newProfile.avatar.data = fs.readFileSync(files.avatar.path);
        newProfile.avatar.contentType = files.avatar.type;
      }

      newProfile.save((err, result) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
        res.json(result);
      });
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.json(profiles);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getProfileImage = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (profile.avatar.data) {
      res.set("Content-Type", profile.avatar.contentType);
      return res.send(profile.avatar.data);
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
