const valueModel=require('../models/value.db')


class value
{
    constructor() {}

  addValue(payload)
  {
return new Promise((resolve,reject)=>
{

    let value=new valueModel(payload);
    value.uploadedTime=Math.floor(Date.now() / 1000);

    // value.uploadedTime=Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
    // now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    console.log(value);
    
    value.save()
    .then(d=>resolve(d))
    .catch(e=>reject(e))
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

  getParlicaulaValue(pid)
  {
    return new Promise((resolve, reject) => {
        valueModel.findById({_id:pid})
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
        )        .then(d => {
          resolve(d);
        })
        .catch(e => reject(e));
    });
  }
}
module.exports=new value();