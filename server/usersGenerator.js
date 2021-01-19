module.exports =  () => {
    var faker = require('faker');
    var _ = require('lodash');

    return {
        users: _.times(100,(index) => {
            return {
                id: index,
                name: faker.name.findName(),
                passwd: faker.date.past(1),
                img: faker.internet.avatar(),
            }
        })
    }
}