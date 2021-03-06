const valueModel = require('../models/value.db')
const mailModel = require('../models/mail.db')
const moment = require('moment-timezone');


class value {
  constructor() { }

  addValue(payload, startDay, endDay) {
    return new Promise((resolve, reject) => {

      let value = new valueModel(payload);

      // value.uploadedTime=Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      // now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

      value.save()
        .then(d => resolve(d))
        .catch(e => reject(e))
    })
  }
  checkTodayValue(startDay, endDay) {
    return new Promise((resolve, reject) => {
      valueModel.find({ uploadedTime: { $gt: startDay, $lt: endDay } })
        .then(d => {
          resolve(d)

        })
        .catch(e => {
          console.log(e)
          reject(e)

        })


    })
  }
  getValueList() {
    return new Promise((resolve, reject) => {
      valueModel
        .find()
        .sort({ placeName: 1 })
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }

  getParlicaulaValue(pid) {
    return new Promise((resolve, reject) => {
      valueModel.findById({ _id: pid })
        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }
  deleteValue(id) {
    return new Promise((resolve, reject) => {
      valueModel
        .findByIdAndDelete(id)
        .then(d => resolve(d))
        .catch(e => reject(e));
    });
  }
  getByPlaceName(start, end)
  {
    return new Promise((resolve, reject) => {
      valueModel.find({ uploadedTime: { $gt: start, $lt: end } })
      .then(d => resolve(d))
      .catch(e => reject(e))

    })
  }
  updateValue(payload, pId) {
    return new Promise((resolve, reject) => {
      valueModel
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
        ).then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }
  addMail(payload) {
    return new Promise((resolve, reject) => {

      let mail = new mailModel(payload);

      // value.uploadedTime=Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      // now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

      mail.save()
        .then(d => resolve(d))
        .catch(e => reject(e))
    })
  }
  getByMonth(start, end) {
    return new Promise((resolve, reject) => {
      console.log(start,end)

      valueModel.find({ uploadedTime: { $gt: start, $lt: end } })
      .then(d => resolve(d))
      .catch(e => reject(e))

    })
  }
}

module.exports = new value();