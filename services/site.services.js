const siteModel = require("../models/site.db");

class site {
  constructor() {}

  addSite(payload) {
    return new Promise((resolve, reject) => {
      let site = new siteModel(payload);
      site
        .save()
        .then(d => resolve(d))
        .catch(e => reject(e));
    });
  }

  getSiteList() {
    return new Promise((resolve, reject) => {
      siteModel
        .find()
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }

  getParlicaulaSite(pid) {
    return new Promise((resolve, reject) => {
      siteModel
        .findById({ _id: pid })
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }
  deleteSite(id) {
    return new Promise((resolve, reject) => {
      siteModel
        .findByIdAndDelete(id)
        .then(d => resolve(d))
        .catch(e => reject(e));
    });
  }

  updateSite(payload, pId) {
    return new Promise((resolve, reject) => {
      siteModel
        .findByIdAndUpdate(
          {
            _id: pId
          },
          {
            $set: payload
          },
          {
            new: true
          }
        )
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }
}
module.exports = new site();
