const placeModel = require("../models/place.db");
const moment = require('moment-timezone');
class place {
  constructor() {}

  addPlace(payload) {
    return new Promise((resolve, reject) => {
      let place = new placeModel(payload);
      place
        .save()
        .then(d => resolve(d))
        .catch(e => reject(e));
    });
  }

  getPlaceList() {
    return new Promise((resolve, reject) => {
      placeModel
        .find()
        .sort({ placeName: 1 })
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }

  getParlicaulaPlace(pid) {
    return new Promise((resolve, reject) => {
      placeModel
        .findById({ _id: pid })
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }
  deletePlace(id) {
    return new Promise((resolve, reject) => {
      placeModel
        .findByIdAndDelete(id)
        .then(d => resolve(d))
        .catch(e => reject(e));
    });
  }

  updatePlace(payload, pId) {
    return new Promise((resolve, reject) => {
      placeModel
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
module.exports = new place();
