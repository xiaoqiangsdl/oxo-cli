const fs = require('fs');
const path = require('path');
const OXORC = path.join(process.env.HOME, '.oxorc');

function getRegistry() {
    return fs.existsSync(OXORC) ? JSON.parse(fs.readFileSync(OXORC, 'utf-8')) : {};
}

function setRegistry(data, cbk) {
    fs.writeFileSync(OXORC, JSON.stringify(data, null , 2), cbk)
}