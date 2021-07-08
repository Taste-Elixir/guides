# 2. Channels

Now that we have everything up and running we can start adding functionalities. The first thing we will focus on is the ability to communicate in Phoenix. This will be done via a Channel which uses websockets. Websockets create connections similar to a phone call, which means that they are always open or available. The other means of communication that are usually used on the web are more similar to sending snail mail-- a message is sent,  received and then a reply shows up. An example of this would be HTTP.

**Coach:** Explain briefly these two ways of communication on the web, via websockets and HTTP. Elaborate on a high level abstraction using real life examples.

## Setting up Channels

Phoenix includes a built-in mix task for channels that will create files and do some of the boilerplate work for you. We will need to pass a name into our command, that’s why we will follow the Slack theme, and call it general. Look out for any actions that the terminal asks you to complete.

```console
$ mix phx.gen.channel general
```

In `lib/workshops_app_web/channels/user_socket.ex` add the following below the `## Channels` comment.

```elixir
## Channels
# channel "room:*", WorkshopsAppWeb.RoomChannel
channel "general:lobby", WorkshopsAppWeb.GeneralChannel
```

In our `lib/workshops_app_web/channels/general_channel.ex` we should have the following content:

```elixir
defmodule WorkshopsAppWeb.GeneralChannel do
  use WorkshopsAppWeb, :channel

  def join("general:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (general:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
```

Now that we have generated some code let's look at what it does. First the `general_channel.ex` is the channel equivalent of a controller in Phoenix, being that it handles websocket requests instead of http requests. On line **2** `:channel` is referring to the Phoenix channel function from `user_socket.ex` file. It takes a parameter which is used as a namespace for the websocket connections. In this instance the namespace is **"general:lobby"**.

The next argument `WorkshopsAppWeb.GeneralChannel` is made up of two parts. The first part `WorkshopsAppWeb` is the name of the app with `-Web` as suffix indicating that we have separate directory containing all the abstractions related to communication with outside world . The second part is `GeneralChannel`. This is the name of the module that handles the logic related to any communication through this channel. In Phoenix, it’s conventional to namespace all your modules with your app name first as this prevents namespace errors.

The file, `user_socket.ex`, is like the `router.ex` file, but for channels. The topic, for us it's `general`, allows clients, also known as web browsers, to subscribe to the channel. In the same way a path in a web request directs the request to the right controller, the topic directs the socket to the right module, in this case, `WorkshopsAppWeb.GeneralChannel`.

Now, let’s look at the join function at line **4**. `def join ("general:lobby", payload, socket) do:` takes three arguments. The first argument, the name of the channel, **"general:lobby"**, makes it so that this function is only called when the client is joining the specific channel. The second argument, **payload** is the request from the user; it can contain auth credentials, a message or anything the user wants. Finally, it takes **socket**, which is the websocket connection. There’s a call to `authorized?` function, which always returns true. Then, `{:ok, socket}` just returns a status and the websocket they are connecting to. **join** function always returns `{:ok, socket}` to allow all connections to connect to the channel.

Once a user joins a channel they can send messages to the channel and they’ll be received by one of the `handle_in` messages. The first one just returns the payload sent by the user back to them. The second one sends the payload to all the users subscribed to the channel. It’s the second one that allows us to build our chat room with just a little frontend work. When you send a message to the chat room, this function sends it back to you and to everyone else in the channel.

To handle the connections on the Client-side we’ll start by adding **jQuery** to our app. First of all let's install it via npm command inside `assets/` directory:

```console
cd assets/
```

```console
npm install jquery --save
```

Then we need to let our bundle know that we want to include newly installed library to final build. To achieve that we need to visit `assets/webpack.config.js` config file and add following.

On top of the config file

```javascript
const Webpack = require('webpack');
```

Then we need to update `plugins` section one the bottom of this file. It should look like that:

```javascript
plugins: [
  new MiniCssExtractPlugin({ filename: '../css/app.css' }),
  new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
  new Webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
]
```

Phoenix comes with a simple javascript socket client, but it’s disabled by default. Go into your `assets/js/app.js` and uncomment the last line:

```javascript
import socket from "./socket"
```

Then go into your `assets/js/socket.js` and paste the following:

```javascript
socket.connect()
let channel = socket.channel("general:lobby", {});
let list    = $('#message-list');
let message = $('#message');
let name    = $('#name');

message.on('keypress', event => {
  if (event.keyCode == 13) {
    channel.push('shout', { name: name.val(), message: message.val() });
    message.val('');
  }
});

channel.on('shout', payload => {
  list.append(`<b>${payload.name || 'Anonymous'}:</b> ${payload.message}<br>`);
  list.prop({scrollTop: list.prop("scrollHeight")});
});

channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })
```

`socket.channel("general:lobby", {})` sends the join request to the server, and the server sends the message back to the client. Here, we listen for a keypress event on the message text field. Whenever the user enters a message, it’s pushed on the channel and the text field is cleared. When there’s an incoming message on the channel, it’s appended to the **div** we previously created and scrolled to the bottom.

Next we will want to create the container for our messages. Open `lib/workshops_app_web/templates/page/index.html.eex`, and replace its contents with:

```html
<div class='row'>
  <div id='message-list'>
  </div>
</div>

<div class='row'>
  <div>
    <input type='text' id='name' placeholder='Name' />
  </div>
  <div>
    <input type='text' id='message' placeholder='Message' />
  </div>
</div>
```

What we have done here is create an empty **div** that will list all the chat messages and added two text fields, one for the user’s name and one for the message. Now you will want to open `assets/css/app.css` and paste this at the end:

```css
#message-list {
  border: 1px solid #777;
  width: 100%;
  height: 400px;
  padding: 10px;
  overflow: scroll;
  margin-bottom: 50px;
}
```

Now go to http://localhost:4000 and see the results!

After all these steps your code should look like in [Example app step 2 - channels](https://github.com/Taste-Elixir/workshops-app/tree/2-channels)
