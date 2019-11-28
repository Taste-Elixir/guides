# 6. Uploads

There is no good chat application without the ability to send funny GIFs. So. let's implement this.

## File input

We will start with adding an input for sending a file. Let's open the file: `lib/workshops_app_web/templates/page/index.html.eex` and add the input for the file:

```html
  <div>
    <input type='file' id='file-input' class='form-control' />
  </div>
```

Now, let's run a server. You should see an input, where you can click and choose a file. Even we choose a file and try to send a message, the file won't be sent.

## Sending file

**Coach:** Explain, what is CSS selector.

Now, we need to send a file to the server. First, we will open: `assets/js/socket.js`, where there is a logic connected with sending messages. We will add a selector for the file input. Let's add it, where all other selectors are initiated:

```javascript
let fileInput = $('#file-input');
```

Then we need to initiate a Javascript object called `FileReader`, that will read a content of the file. You might have a look on the documentation of [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader). We will add following line to initiate it:

```javascript
var filereader  = new FileReader();
```

Now, we need to modify an event handler, that waits on pressing "ENTER". Replace it with the following code:

```javascript
filereader.readAsDataURL($("#file-input").prop('files')[0]);

filereader.onload = function () {
    channel.push('shout', { name: name.val(), message: message.val(), file: filereader.result });
    message.val('');
}
```

Go to the file: `lib/workshops_app_web/channels/general_channel.ex` and add a following line to the function, handling messages:
```
IO.inspect(payload, label: "PAYLOAD")
```

Now, let's try to send a message with a photo or a GIF. After this step, we should see a content of the file. Maybe you want to check the content of other variables with use of `IO.inspect` function?

**Coach:** Explain, when you usually use `IO.inspect` function.

## Receiving the file

Now, we need to show the file, we receive. Let's go to the file: `assets/js/socket.js`. We will modify a handler, responsible for receiving messages. Find a block:

```javascript
channel.on('shout', payload => {

}
```

And add a line:

```javascript
list.append(`<img src=${payload.file} />`)
```

Now, let's invite other people to join your chat application and send them a funny GIF!

After all these steps your code should look like this [Example app step 6 - uploads](https://github.com/Taste-Elixir/workshops-app/tree/6-uploads)
