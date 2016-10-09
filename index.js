#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const inquirer = require('inquirer');

const KARABINER_CONFIG = path.resolve(process.env['HOME'] + "/.karabiner.d/configuration/karabiner.json");

if (!fs.existsSync(KARABINER_CONFIG)) {
    console.error(`This utility requires you to have a file under ${KARABINER_CONFIG}`);
    process.exit(1);
}

if (os.platform() != 'darwin') {
    console.error('This utility expects to be running on a Mac');
    process.exit(1);
}

let config;
try {
    config = JSON.parse(fs.readFileSync(KARABINER_CONFIG));
} catch(e) {
    console.error('Failed to parse the configuration file: not a valid JSON');
    process.exit(1);
}
    
// Validate 
if (!config || !config.profiles) {
    console.error('The configuration lacks profiles key from its JSON');
    process.exit(1);
}

let profiles = config.profiles.map(p => p.name);
let selected = config.profiles.find(p => p.selected);

inquirer.prompt([{
    type: 'list',
    name: 'profile',
    message: 'Which profile do you want to choose?',
    choices: profiles,
    default: selected.name
}]).then((result) => {
    let newProfiles = config.profiles.map(p => {
        return Object.assign({}, p, { selected: p.name == result.profile }); 
    });

    config.profiles = newProfiles;
    fs.writeFileSync(KARABINER_CONFIG, JSON.stringify(config, null, 4));
});
