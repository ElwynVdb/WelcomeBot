const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs')

client.on('ready', () => {
    console.log('Extra Commands are reggie like my body!');
})

