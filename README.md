## Karabiner Elements Profile Swapper

This little utility helps those who upgraded to MacOS Sierra to be able to use Karabiner Elements with ease. After setting up multiple profiles in the configuration, it is rather annoying to have to keep modifying a configuration file to swap profiles. Simply install this utility and swap profiles with ease:

# Requirements
This utility requires node.js to be installed.

# Installation

    npm install -g karabiner-elements-swapper

# Usage

Make sure you have a configuration file first at $HOME/.config/karabiner/karabiner.json (here's my example):

    {
        "profiles": [
            {
                "name": "Default profile",
                "selected": true,
                "simple_modifications": {
                    "keypad_1": "end",
                    "keypad_3": "page_down",
                    "keypad_7": "home",
                    "keypad_9": "page_up",
                    "keypad_4": "left_arrow",
                    "keypad_6": "right_arrow",
                    "keypad_8": "up_arrow",
                    "keypad_2": "down_arrow",
                    "left_alt": "left_gui",
                    "left_gui": "left_alt",
                    "keypad_0": "insert",
                    "keypad_period": "delete_forward"
                }
            },
            {
                "name": "None profile",
                "selected": false,
                "simple_modifications": {}
            }
        ]
    }

Then you run the "kara" utility:

    $ kara
    ? Which profile do you want to choose? (Use arrow keys)
    ❯ Default profile 
      Another profile

 
