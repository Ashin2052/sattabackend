const paragraphModel = require("../models/paragraph.db");
const moment = require('moment-timezone');

class Paragraph {
    constructor() {}

    addParagraph(payload) {
        return new Promise((resolve, reject) => {

            let Paragraph = new paragraphModel(payload);
            Paragraph
                .save()
                .then(d => resolve(d))
                .catch(e => reject(e));
        });
    }

    getParagraphList() {
        return new Promise((resolve, reject) => {
            paragraphModel
                .find()
                .then(d => {
                    console.log(d)
                    resolve(d)


                })
                .catch(e => reject(e));
        });
    }
    getParlicaulaParagraph(pid) {
        return new Promise((resolve, reject) => {
            paragraphModel
                .findById({ _id: pid })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }
    deleteParagraph(id) {
        return new Promise((resolve, reject) => {
            paragraphModel
                .findByIdAndDelete(id)
                .then(d => resolve(d))
                .catch(e => reject(e));
        });
    }

    updateParagraph(payload, pId) {
        return new Promise((resolve, reject) => {
            paragraphModel
                .findByIdAndUpdate({
                    _id: pId
                }, {
                    $set: payload
                }, {
                    new: true
                })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }

}
module.exports = new Paragraph();