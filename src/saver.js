export default class Saver {

    constructor() {
        this.date = new Date()
    }

    toString() {
        return this.date.toJSON()
    }
}