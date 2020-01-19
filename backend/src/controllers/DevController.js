const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

// index, show, store, update, destroy

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            let { name = login, avatar_url, bio } = apiResponse.data;
    
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [latitude, longitude]
            }
    
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return res.json(dev);
    },

    async destroy(req, res) {
        const { github_username } = req.params
        
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            return res.json({
                message: "Usuário não cadastrado!"
            })
        }

        dev = await Dev.deleteOne({ github_username })

        return res.json(
            `O usuário ${github_username} foi excluído com sucesso!`
        )
    },

    async update(req, res) {
        const { techs, latitude, longitude } = req.body;
        const { github_username } = req.params

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [latitude, longitude]
        }

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            return res.json({
                message: "Usuário não cadastrado!"
            })
        }

        await Dev.update({ _id: dev.id }, {
            location,
            techs: techsArray,
        });

        return res.json({
            message: "Usuário atualizado com sucesso!"
        });
    }

}