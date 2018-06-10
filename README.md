# A socket.io chat example

Taken from [Get Started: Chat application](https://socket.io/get-started/chat/) on the socket.io website.

The original tutorial used JQuery, this is rewritten to use pure JavaScript.

Also, set up a public folder to serve the static CSS and JS files, cleaned up znd commented CSS.

## Notes

Socket.IO enables the sending and receiving any events required, with any data: objects that can be encoded as JSON as well as binary data.

## TO DO

These are from the original tutorial

- [ ] Broadcast a message to connected users when someone connects or disconnects
- [ ] Add support for nicknames
- [ ] Don’t send the sender's message to them, just append the message directly on enter
- [ ] Add “{user} is typing” functionality
- [ ] Show who’s online
- [ ] Add private messaging
- [ ] Share your improvements: [original code repo](https://github.com/socketio/chat-example.git)

## Resources

- [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

---

> <small>“If you aren’t authoring a package that is intended to be consumed by others (e.g., you’re building a web app), you should always check installed packages into source control.” —Addy Osmani, July 29 2013, [Checking in front-end dependencies](https://addyosmani.com/blog/checking-in-front-end-dependencies/#more-5510)</small>
