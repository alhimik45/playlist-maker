# Playlist maker
Tool for making playlists for [fifo-player](https://github.com/alhimik45/fifo-player). Takes list of files and makes folder with symlinks to selected files.

Application is controlled by named pipe. Write anything to pipe to show program window.

Config filename is first command-line argument of program.

## Config example:
```javascript
{
"music_directory": ".", 	// default directory with music
"base_directory": ".", 		// in which directory save playlists
// fifo used to control program
"input_fifo": "/tmp/.playlist-maker-input"
}
```

## License
This software is licensed under the [MIT license](LICENSE).
