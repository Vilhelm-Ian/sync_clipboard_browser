![https://github.com/Vilhelm-Ian/sync_clipboard_browser/blob/main/gif.gif](alt text)
# Why I created this

I wanted to use mpvacious feature to paste text coppied to clipboard to appear
in the browser so I can hover over a word and with an extension to find the
meaning. Because I am using wayland there were issues with mpvacious. And
an addit benefit is that I can use this outside mpv. For example while studying
everything I copy it would be automitaclly pasted to the page

# How I would use it

First i would start the server with `node index.js` after that I would tell
wl-paste to watch the clipboard and when an new entrie is added to paste it to
the file with the following command `wl-paste -w bash -c "wl-paste > clipboard.txt"`

# To Dos

[ ] Currently I am not satisfied with the perfomance. A possible improvement
would be ReadFile to be async. But I wish to rewrite this in rust someday
