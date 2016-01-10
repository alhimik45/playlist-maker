var fs = require('fs');
var extend = require('util')._extend;
var spawn = require('child_process').spawn;
var DEFAULT_SETTINGS = {
						"music_directory": ".", 	// default directory with music
						"base_directory": ".", 		// in which directory save playlists
						// fifo used to control program
						"input_fifo": "/tmp/.playlist-maker-input"
					}
exports.init = function (file) {
	var imported_settings = {};
	try{
		imported_settings = JSON.parse(fs.readFileSync(file, 'utf8'));
	}catch(e){
		console.log(e.message, "Fallback to default settings");
	}
	var s = exports.settings = extend(DEFAULT_SETTINGS, imported_settings);
	s.base_directory = s.base_directory.replace(/\/+$/, "") + "/";
	s.music_directory = s.music_directory.replace(/\/+$/, "") + "/";
	try{
		fs.statSync(s.input_fifo);
	}catch(e){ // file doesn't exists
		spawn("mkfifo", [s.input_fifo]);
	}
	return s;
}
