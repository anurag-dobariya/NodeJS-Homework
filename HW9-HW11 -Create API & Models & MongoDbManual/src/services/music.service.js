const { music } = require("../models");

/**
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createMusic = async (reqBody) =>{
    return music.create(reqBody);
};

const getMusicList = async (req,res) =>{
    return music.find();
};

const deleteMusic = async (musicId) =>{
    return music.findByIdAndDelete(musicId);
};

module.exports = {
    createMusic,
    getMusicList,
    deleteMusic
}
