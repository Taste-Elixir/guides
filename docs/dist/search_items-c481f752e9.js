searchNodes=[{"ref":"getting_started.html","title":"Getting Started","type":"extras","doc":"Getting Started"},{"ref":"getting_started.html#welcome-to-taste-elixir-guides","title":"Getting Started - Welcome to Taste Elixir guides","type":"extras","doc":"Welcome to Taste Elixir Guides The guides you are about to read, have been written by the community of Elixir developers. There were created to help spread the knowledge about the technology we all think is very valuable. Their aim is to navigate you through this adventure by showing you all the steps you need to take to start learning Elixir easier and more efficiently. To start the process go to the Installation tab and... have fun tasting Elixir with us!"},{"ref":"overview.html","title":"Overview","type":"extras","doc":"Overview"},{"ref":"overview.html#about","title":"Overview - About","type":"extras","doc":"You are about to start an Elixir tutorial that will result in creating your very first app. The experience of learning a new technology will not always be filled with hearts and roses but probably it will be full of challenges, mistakes and reading tons of new things. Make sure to be patient with yourself, ask questions and experiment with your own ways of completing the guide. It is supposed to serve you as a set of guidelines and not become your one and only source of Elixir knowledge."},{"ref":"overview.html#tools","title":"Overview - Tools","type":"extras","doc":"Depending on where you are on your programming journey, here are some additional tools that you should consider installing. Text Editors A text editor is the core of every developer&#39;s toolbox, that&#39;s why it&#39;s important to choose it wisely. Visual Studio Code (Recomended) Installation instruction. Recommended extensions to the editor that will ease the development workflow. ElixirLS - Elixir support with debugger, autocomplete, and more. LiveShare - Real-time collaborative development from the comfort of your favorite tools. Could help in pair programming with mentor during workshops. Prettier - This is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. Indenticator - Visually highlights the current indent depth. Alternatives GitHub Atom Sublime Textmate Emacs Vim (not recommended for a begginers) Git tools (comming soon)"},{"ref":"overview.html#try-elixir","title":"Overview - Try Elixir","type":"extras","doc":"Try Elixir course. This is meant as an introduction to Elixir by getting familiar with basic concepts. Data is deleted after 5 minutes of being idle and many Elixir modules are restricted due to security reasons."},{"ref":"overview.html#elixir-cheat-sheet","title":"Overview - Elixir Cheat-Sheet","type":"extras","doc":"A collection of basic Elixir statements, data types etc. to always have them at your fingertips. https://devhints.io/elixir https://learnxinyminutes.com/docs/elixir/"},{"ref":"installation.html","title":"Installation","type":"extras","doc":"Installation In order to develop elixir applications, you will need to install elixir itself, erlang because elixir is made for the erlang virtual machine, nodejs for compiling assets in phoenix, and you&#39;ll most likely want a RDBMS (relational database management system) such as postgresql or MySQL."},{"ref":"installation.html#macos","title":"Installation - macOS","type":"extras","doc":"Install asdf. Asdf is a manager of multiple language runtimes. Follow the installation steps on: asdf installation guide Install Postgres brew install postgresql initdb /usr/local/var/postgres -E utf8 Create user for your database: brew services start postgresql createuser -s postgres Install a plugin for Erlang: asdf plugin-add erlang https://github.com/asdf-vm/asdf-erlang.git Install Erlang: asdf install erlang 22.1 Add a plugin for Elixir language: asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git Install newest version of Elixir: asdf install elixir 1.9.4-otp-22 Add a plugin for NodeJS: asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git Install NodeJS: asdf install nodejs 12.13.1 Install Phoenix: mix archive.install hex phx_new 1.4.10"},{"ref":"installation.html#linux","title":"Installation - Linux","type":"extras","doc":"This guide provide instructions for Ubuntu, if you use different Unix-like system please follow official instructions from: https://elixir-lang.org/install.html#unix-and-unix-like Add Erlang Solutions repo. wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb &amp;&amp; sudo dpkg -i erlang-solutions_2.0_all.deb Downloads and updates dependencies by running: sudo apt-get update Install the Erlang/OTP platform and all of its applications: sudo apt-get install esl-erlang Install Elixir language: sudo apt-get install elixir Install nodejs to powerup our frontend stuff: sudo apt-get install curl curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - sudo apt-get install nodejs Install the Hex package manager: mix local.hex Install Phoenix a web development framework: mix archive.install hex phx_new 1.4.10 Install Postgres database: sudo apt-get install postgresql postgresql-contrib"},{"ref":"installation.html#windows","title":"Installation - Windows","type":"extras","doc":"This guide provides instructions for Windows 10. Install Elixir language (it will install Erlang as well): https://elixir-lang.org/install.html#windows Install Postgres database: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads Install nodejs to powerup our frontend stuff: https://nodejs.org/en/download/current/ Install the Hex package manager: mix local.hex Install Phoenix a web development framework: mix archive.install hex phx_new 1.4.10"},{"ref":"installation.html#cloud-ide","title":"Installation - Cloud IDE","type":"extras","doc":"In case any serious problems will show up when setting up the programming environment on a specific OS, a cloud IDE platform such as Codeanywhere can be used to code using the browser. Codeanywhere is a cross-platform Cloud IDE (integrated development environment) that enables users to instantly write, edit, collaborate and run web development projects from a web browser or any mobile device. For new users there is a 7-day free trial account. Coach: Help set up Elixir tech stack using Codeanywhere."},{"ref":"learning.html","title":"Learning","type":"extras","doc":"Learning Even though Elixir is rather a young programming language, there are a lot of materials to start with and continue learning. Below you can find selected books, articles, online courses and videos with short descriptions, that will help you master Elixir."},{"ref":"learning.html#books","title":"Learning - Books","type":"extras","doc":"Intermediate https://pragprog.com/book/elixir16/programming-elixir-1-6 https://www.manning.com/books/elixir-in-action-second-edition https://pragprog.com/book/cmelixir/metaprogramming-elixir https://pragprog.com/book/wwgraphql/craft-graphql-apis-in-elixir-with-absinthe"},{"ref":"learning.html#online-courses","title":"Learning - Online courses","type":"extras","doc":"Beginner https://elixir-lang.org/learning https://joyofelixir.com/ https://elixir-lang.org/getting-started/introduction.html http://elixirsips.com/episodes.html https://elixirschool.com/en/lessons/basics/basics/ https://exercism.io/my/tracks/elixir https://www.pluralsight.com/courses/code-school-try-elixir Intermediate https://alchemist.camp/ https://elixirschool.com/en/lessons/advanced/erlang/"},{"ref":"learning.html#articles","title":"Learning - Articles","type":"extras","doc":"A story how to learn Elixir with useful materials https://medium.com/briisk/how-to-learn-elixir-or-the-tale-of-two-alchemists-and-one-master-66647bbc8177 List of handy Elixir libraries https://github.com/h4cc/awesome-elixir List of companies using Elixir https://elixir-companies.com/en Reasons why huge companies choose Elixir https://www.erlang-solutions.com/blog/which-companies-are-using-elixir-and-why-mytopdogstatus.html"},{"ref":"learning.html#videos","title":"Learning - Videos","type":"extras","doc":"Elixir in the next 5 years https://www.youtube.com/watch?v=suOzNeMJXl0 Phoenix 1.3 announcement: https://www.youtube.com/watch?v=tMO28ar0lW8 Phoenix LiveView announcement: https://www.youtube.com/watch?v=8xJzHq8ru0M All talks from ElixirConf https://www.youtube.com/channel/UC0l2QTnO1P2iph-86HHilMQ/videos"},{"ref":"community.html","title":"Community","type":"extras","doc":"Community Although Elixir community is still quite young, its popularity is growing in a significant pace. Elixir Forum This is the best place to exchange knowledge for every Elixir and Erlang languages enthusiast! https://elixirforum.com Slack Elixir community on Slack currently has 25834 registered users so far. - https://elixir-slackin.herokuapp.com Conferences ElixirConf EU Empex The Big Elixir Gig City Elixir Code Mesh LDN MeetUps Poznań Elixir Elixir Wrocław Elixir Kraków ElixirWarsaw Meetup And also many others."},{"ref":"1-setup.html","title":"1. Setup","type":"extras","doc":"1. Setup Now when you have all of the required tools prepared you can start working on your first application! It&#39;s like Slack (webchat). Except for Elixir and Phoenix&#39;s basics, your app will use some cool approaches like web sockets and event-driven programming. Below commands will help you set up your application but don&#39;t hesitate to ask your mentor if something is not clear. Create new Phoenix project. Accept fetching dependencies (workshops_app is an example name, but it can be changed depends on your app topic). mix phx.new workshops_app Move to app directory. cd workshops_app Create your database (it will be empty for now). mix ecto.create Now you can run your app and check http://localhost:4000/ in the browser, all should be live and running. mix phx.server After all of these steps, your app should look similar (with possible changes in name) to https://github.com/Taste-Elixir/workshops-app/tree/1-setup."},{"ref":"2-channels.html","title":"2. Channels","type":"extras","doc":"2. Channels Now that we have everything up and running we can start adding functionalities. The first thing we will focus on is the ability to communicate in Phoenix. This will be done via a Channel which uses websockets. Websockets create connections similar to a phone call, which means that they are always open or available. The other means of communication that are usually used on the web are more similar to sending snail mail-- a message is sent, received and then a reply shows up. An example of this would be HTTP. Coach: Explain briefly these two ways of communication on the web, via websockets and HTTP. Elaborate on a high level abstraction using real life examples."},{"ref":"2-channels.html#setting-up-channels","title":"2. Channels - Setting up Channels","type":"extras","doc":"Phoenix includes a built-in mix task for channels that will create files and do some of the boilerplate work for you. We will need to pass a name into our command, that’s why we will follow the Slack theme, and call it general. Look out for any actions that the terminal asks you to complete. $ mix phx.gen.channel general In lib/workshops_app_web/channels/user_socket.ex add the following below the ## Channels comment. ## Channels # channel &quot;room:*&quot;, WorkshopsAppWeb.RoomChannel channel &quot;general:lobby&quot;, WorkshopsAppWeb.GeneralChannel In our lib/workshops_app_web/channels/general_channel.ex we should have the following content: defmodule WorkshopsAppWeb.GeneralChannel do use WorkshopsAppWeb, :channel def join(&quot;general:lobby&quot;, payload, socket) do if authorized?(payload) do {:ok, socket} else {:error, %{reason: &quot;unauthorized&quot;}} end end # Channels can be used in a request/response fashion # by sending replies to requests from the client def handle_in(&quot;ping&quot;, payload, socket) do {:reply, {:ok, payload}, socket} end # It is also common to receive messages from the client and # broadcast to everyone in the current topic (general:lobby). def handle_in(&quot;shout&quot;, payload, socket) do broadcast socket, &quot;shout&quot;, payload {:noreply, socket} end # Add authorization logic here as required. defp authorized?(_payload) do true end end Now that we have generated some code let&#39;s look at what it does. First the general_channel.ex is the channel equivalent of a controller in Phoenix, being that it handles websocket requests instead of http requests. On line 2 :channel is referring to the Phoenix channel function from user_socket.ex file. It takes a parameter which is used as a namespace for the websocket connections. In this instance the namespace is &quot;general:lobby&quot;. The next argument WorkshopsAppWeb.GeneralChannel is made up of two parts. The first part WorkshopsAppWeb is the name of the app with -Web as suffix indicating that we have separate directory containing all the abstractions related to communication with outside world . The second part is GeneralChannel. This is the name of the module that handles the logic related to any communication through this channel. In Phoenix, it’s conventional to namespace all your modules with your app name first as this prevents namespace errors. The file, user_socket.ex, is like the router.ex file, but for channels. The topic, for us it&#39;s general, allows clients, also known as web browsers, to subscribe to the channel. In the same way a path in a web request directs the request to the right controller, the topic directs the socket to the right module, in this case, WorkshopsAppWeb.GeneralChannel. Now, let’s look at the join function at line 4. def join (&quot;general:lobby&quot;, payload, socket) do: takes three arguments. The first argument, the name of the channel, &quot;general:lobby&quot;, makes it so that this function is only called when the client is joining the specific channel. The second argument, payload is the request from the user; it can contain auth credentials, a message or anything the user wants. Finally, it takes socket, which is the websocket connection. There’s a call to authorized? function, which always returns true. Then, {:ok, socket} just returns a status and the websocket they are connecting to. join function always returns {:ok, socket} to allow all connections to connect to the channel. Once a user joins a channel they can send messages to the channel and they’ll be received by one of the handle_in messages. The first one just returns the payload sent by the user back to them. The second one sends the payload to all the users subscribed to the channel. It’s the second one that allows us to build our chat room with just a little frontend work. When you send a message to the chat room, this function sends it back to you and to everyone else in the channel. To handle the connections on the Client-side we’ll start by adding jQuery to our app. First of all let&#39;s install it via npm command inside assets/ directory: cd assets/ npm install jquery --save Then we need to let our bundle know that we want to include newly installed library to final build. To achieve that we need to visit assets/webpack.config.js config file and add following. On top of the config file const Webpack = require(&#39;webpack&#39;); Then we need to update plugins section one the bottom of this file. It should look like that: plugins: [ new MiniCssExtractPlugin({ filename: &#39;../css/app.css&#39; }), new CopyWebpackPlugin([{ from: &#39;static/&#39;, to: &#39;../&#39; }]), new Webpack.ProvidePlugin({ $: &#39;jquery&#39;, jQuery: &#39;jquery&#39;, &#39;window.jQuery&#39;: &#39;jquery&#39; }) ] Phoenix comes with a simple javascript socket client, but it’s disabled by default. Go into your assets/js/app.js and uncomment the last line: import socket from &quot;./socket&quot; Then go into your assets/js/socket.js and paste the following: socket.connect() let channel = socket.channel(&quot;general:lobby&quot;, {}); let list = $(&#39;#message-list&#39;); let message = $(&#39;#message&#39;); let name = $(&#39;#name&#39;); message.on(&#39;keypress&#39;, event =&gt; { if (event.keyCode == 13) { channel.push(&#39;shout&#39;, { name: name.val(), message: message.val() }); message.val(&#39;&#39;); } }); channel.on(&#39;shout&#39;, payload =&gt; { list.append(`&lt;b&gt;${payload.name || &#39;Anonymous&#39;}:&lt;/b&gt; ${payload.message}&lt;br&gt;`); list.prop({scrollTop: list.prop(&quot;scrollHeight&quot;)}); }); channel.join() .receive(&quot;ok&quot;, resp =&gt; { console.log(&quot;Joined successfully&quot;, resp) }) .receive(&quot;error&quot;, resp =&gt; { console.log(&quot;Unable to join&quot;, resp) }) socket.channel(&quot;random:lobby&quot;, {}) sends the join request to the server, and the server sends the message back to the client. Here, we listen for a keypress event on the message text field. Whenever the user enters a message, it’s pushed on the channel and the text field is cleared. When there’s an incoming message on the channel, it’s appended to the div we previously created and scrolled to the bottom. Next we will want to create the container for our messages. Open lib/workshops_app_web/templates/page/index.html.eex, and replace its contents with: &lt;div id=&#39;message-list&#39; class=&#39;row&#39;&gt; &lt;/div&gt; &lt;div class=&#39;row form-group&#39;&gt; &lt;div class=&#39;col-md-3&#39;&gt; &lt;input type=&#39;text&#39; id=&#39;name&#39; class=&#39;form-control&#39; placeholder=&#39;Name&#39; /&gt; &lt;/div&gt; &lt;div class=&#39;col-md-9&#39;&gt; &lt;input type=&#39;text&#39; id=&#39;message&#39; class=&#39;form-control&#39; placeholder=&#39;Message&#39; /&gt; &lt;/div&gt; &lt;/div&gt; What we have done here is create an empty div that will list all the chat messages and added two text fields, one for the user’s name and one for the message. Now you will want to open assets/css/app.css and paste this at the end: #message-list { border: 1px solid #777; height: 400px; padding: 10px; overflow: scroll; margin-bottom: 50px; } Now go to http://localhost:4000 and see the results! After all these steps your code should look like in Example app step 2 - channels"},{"ref":"3-persistence.html","title":"3. Persistence","type":"extras","doc":"3. Persistence So now we have a basic chat app but once our session is closed all of our messages are lost. If we were able to create, read, update and delete from a database we would be able to maintain a history of messages or have persistence across our application."},{"ref":"3-persistence.html#creating-our-database","title":"3. Persistence - Creating our Database","type":"extras","doc":"First, we’ll create a migration and some code to handle persistence. Migrations are pieces of code that create or change database columns. In Phoenix, we can invoke mix phx.gen.migration from the terminal to generate a migration: $ mix ecto.gen.migration CreateMessages Add to the change function, following code: create table(:messages) do add :name, :string add :message, :string timestamps() end :messages - name for table in database. :name, :message - columns in the database table. :string - field type. More on DB types you can find: Ecto types Then run the migration: $ mix ecto.migrate Coach: Explain, what is changeset? Why do we validate fields? We need to define a module, that will map the database fields into an Elixir struct. Create a file, called: message.ex in the directory: lib/workshops_app/conversations. defmodule WorkshopsApp.Conversations.Message do use Ecto.Schema import Ecto.Changeset schema &quot;messages&quot; do field :message, :string field :name, :string timestamps() end @doc false def changeset(message, attrs) do message |&gt; cast(attrs, [:name, :message]) |&gt; validate_required([:name, :message]) end end Let&#39;s create a module, where we will create a message. Create a file, called: conversations.ex in the directory: lib/workshops_app/. defmodule WorkshopsApp.Conversations do import Ecto.Query, warn: false alias WorkshopsApp.Repo alias WorkshopsApp.Conversations.Message def create_message(attrs \\\\ %{}) do %Message{} |&gt; Message.changeset(attrs) |&gt; Repo.insert() end end"},{"ref":"3-persistence.html#creating-our-messages-in-the-database","title":"3. Persistence - Creating our messages in the Database","type":"extras","doc":"Coach: Explain, what is CRUD. Next, we need to save the messages as they come in. If you are not familiar with programming this is create in the CRUD (acronym for: create, read, update, and delete). In lib/workshops_app_web/channels/general_channel.ex, we can add a call to do it. def handle_in(&quot;shout&quot;, payload, socket) do WorkshopsApp.Conversations.create_message(payload) broadcast socket, &quot;shout&quot;, payload {:noreply, socket} end Checkout your terminal, where you should see logs of your application. You should see that your messages are stored in the database. Coach: Explain, what is logging and when do we use logs?"},{"ref":"3-persistence.html#refactor","title":"3. Persistence - Refactor","type":"extras","doc":"Coach: Explain, what is refactoring. The above code is alright, but if we want to scale our application we will start to have a problem as all the saves to the database will slow down the request cycle and keep us from handling the traffic efficiently. Elixir has some built in tools for dealing with exactly this situation. Specifically, Kernel.spawn, which takes a module, a function, and arguments to pass to the function. So we’ll update our handler to: def handle_in(&quot;shout&quot;, payload, socket) do spawn(WorkshopsApp.Conversations, :create_message, [payload]) broadcast! socket, &quot;shout&quot;, payload {:noreply, socket} end What this does is spawn an elixir process to do the save, outside of the request cycle. Since we don’t need to see the results of the save to broadcast the message, there’s no reason to wait for it."},{"ref":"3-persistence.html#using-generator","title":"3. Persistence - Using generator","type":"extras","doc":"Above steps might be achieved also using a generator. $ mix phx.gen.context Conversations Message messages name:string message:string Explanation on that command: Context: Conversations - Elixir module that serves as an boundary for the given resources like messages. A context often holds many related resources. Message - the schema name. messages - name for the table in the database. name:string and message:string - columns and datatypes."},{"ref":"3-persistence.html#further-steps","title":"3. Persistence - Further steps","type":"extras","doc":"Try to think about some validations, we might add to the chat. Maybe we want to store only messages, which are shorter than 100 characters? Have a look on the documentation about Ecto changeset. Do you find a function you might use to validate a message? Coach: Explain, what is validation and help mentees add some validations to the chat messages. Based on: https://elixirgirls.com/guides/persistence.html After all these steps your code should look like in Example app step 3 - persistance"},{"ref":"4-query.html","title":"4. Query","type":"extras","doc":"4. Query"},{"ref":"4-query.html#retrieving-from-database","title":"4. Query - Retrieving from database","type":"extras","doc":"Every time, when refreshing your page, you lose the message history. This is not an ideal situation when you want to see what has been written. We have all these stored messages in our database and we want to retrieve them when someone logs in. Therefore, we will need to retrieve these messages and display them in the chat dialogue."},{"ref":"4-query.html#perform-a-callback-after_join","title":"4. Query - Perform a callback after_join.","type":"extras","doc":"Go to the join function, and add the line just below if authorized?(payload) do We are going to send a message contaning our self PID(Process Identifier) as the first parameter. The second parameter is a message to run a function called after_join. This function is identified by an atom type. Add this line to function inside lib/workshops_app_web/channels/general_channel.ex def join(&quot;random:lobby&quot;, payload, socket) do if authorized?(payload) do send(self(), :after_join) # &lt;-- Add this line {:ok, socket} else {:error, %{reason: &quot;unauthorized&quot;}} end end What does send do? send sends a message :after_join, with it&#39;s PID generated by the function self(). We want to be able to run that after join task asynchronously. Lets look at how we should receive the :after_join message."},{"ref":"4-query.html#receiving-a-message-in-a-callback","title":"4. Query - Receiving a message in a callback","type":"extras","doc":"We now know that a message identified by the atom :after_join is being sent. Phoenix provides us with a function called handle_info to be able to receive that message and do something with it. Insert the following code after the join function. def handle_info(:after_join, socket) do messages = WorkshopsApp.Conversations.list_messages() |&gt; Enum.map(fn(%{message: message, name: name}) -&gt; %{message: message, name: name} end) push socket, &quot;messages_history&quot;, %{messages: messages} {:noreply, socket} end Coach: Please explain concept and above example of pattern matching. The only missing thing is WorkshopsApp.Conversations.list_messages() (we should get compilation error when function is called but not definied). To have everything working as expected, we need to add function, which will list all messages stored in our database. Let&#39;s open WorkshopsApp.Conversations module and put there: def list_messages do Repo.all(Message) end Coach: Please explain briefly what compilation is and what is the difference between compile-time and runtime. Coach: Please say couple words about Repo and it&#39;s callbacks."},{"ref":"4-query.html#retrieving-all-messages-from-our-database","title":"4. Query - Retrieving all messages from our database","type":"extras","doc":"Phew, that looks like a lot is going on in the handle_info function. Let&#39;s break down the code to understand what is happening. Thanks to list_messages() function we can retrieve all the messages from our database. Then, we pipe the retrieved messages into a map() function provided by the Enum module. map applies this anonymous function onto every element in messages. Coach: Please explain how Enum.map works, if it&#39;s unclear. This is also a very good time to play with other functions from Enum module."},{"ref":"4-query.html#passing-the-messages-back-to-the-browser","title":"4. Query - Passing the messages back to the browser","type":"extras","doc":"Finally, we want to push our list of messages to the socket via the push function. We are using push instead of broadcast, because we only want to display it to the current user that has just joined the channel."},{"ref":"4-query.html#render-the-messages-in-the-browser","title":"4. Query - Render the messages in the browser","type":"extras","doc":"Add the below code to the assets/js/socket.js file. channel.on(&#39;messages_history&#39;, messages =&gt; { let messages_list = messages[&quot;messages&quot;]; messages_list.forEach( function(msg) { list.append(`&lt;b&gt;${msg[&quot;name&quot;] || &#39;Anonymous&#39;}:&lt;/b&gt; ${msg[&quot;message&quot;]}&lt;br&gt;`); list.prop({scrollTop: list.prop(&quot;scrollHeight&quot;)}); }); }); This is the final step, really. We need to display the messages in our browser by iterating through our list. You should have the history of messages displayed the moment you join the channel. Try opening multiple tabs connecting to http://localhost/4000. You will be able to see that all the messages get rendered every time you join. Based on: https://elixirgirls.com/guides/retrieve_message_history.html After all these steps your code should look like this Example app step 4 - query"},{"ref":"5-design.html","title":"5. Design","type":"extras","doc":"5. Design Coach: Explain what is the relationship between HTML and Phoenix. What is Embedded Elixir EEx? What is MVC and how does this relate to it? The app doesn&#39;t look very nice yet. We might use one of the existing CSS framework to make it nicer. See some examples of such frameworks: Bootstrap Bulma In this tutorial, we will use Bulma framework. Let&#39;s open a file: assets/css/package.json Add to the list of dependencies: &quot;bulma&quot;: &quot;0.8.0&quot; Now open the terminal, and install a package with use of: npm install command. Remove from file: assets/css/app.css following line: @import &quot;./phoenix.css&quot; Add to the file: assets/css/app.css @import &quot;../node_modules/bulma/css/bulma.css&quot; Add to one of HTML files, following snippet: &lt;div class=&quot;buttons&quot;&gt; &lt;button class=&quot;button is-primary&quot;&gt;Elixir is fun&lt;/button&gt; &lt;button class=&quot;button is-link&quot;&gt;Click me&lt;/button&gt; &lt;/div&gt; As a result of the above, you should see 2 buttons: green and blue. Now, there is time to play a bit with available classes in the documentation and make our application nicer. Let&#39;s apply some CSS classes to pages that have already been created."},{"ref":"6-uploads.html","title":"6. Uploads","type":"extras","doc":"6. Uploads There is no good chat application without the ability to send funny GIFs. So. let&#39;s implement this."},{"ref":"6-uploads.html#file-input","title":"6. Uploads - File input","type":"extras","doc":"We will start with adding an input for sending a file. Let&#39;s open the file: lib/workshops_app_web/templates/page/index.html.eex and add the input for the file: &lt;div&gt; &lt;input type=&#39;file&#39; id=&#39;file-input&#39; class=&#39;form-control&#39; /&gt; &lt;/div&gt; Now, let&#39;s run a server. You should see an input, where you can click and choose a file. Even we choose a file and try to send a message, the file won&#39;t be sent."},{"ref":"6-uploads.html#sending-file","title":"6. Uploads - Sending file","type":"extras","doc":"Coach: Explain, what is CSS selector. Now, we need to send a file to the server. First, we will open: assets/js/socket.js, where there is a logic connected with sending messages. We will add a selector for the file input. Let&#39;s add it, where all other selectors are initiated: let fileInput = $(&#39;#file-input&#39;); Then we need to initiate a Javascript object called FileReader, that will read a content of the file. You might have a look on the documentation of FileReader. We will add following line to initiate it: var filereader = new FileReader(); Now, we need to modify an event handler, that waits on pressing &quot;ENTER&quot;. Replace it with the following code: filereader.readAsDataURL($(&quot;#file-input&quot;).prop(&#39;files&#39;)[0]); filereader.onload = function () { channel.push(&#39;shout&#39;, { name: name.val(), message: message.val(), file: filereader.result }); message.val(&#39;&#39;); } Go to the file: lib/workshops_app_web/channels/general_channel.ex and add a following line to the function, handling messages: IO.inspect(payload, label: &quot;PAYLOAD&quot;) Now, let&#39;s try to send a message with a photo or a GIF. After this step, we should see a content of the file. Maybe you want to check the content of other variables with use of IO.inspect function? Coach: Explain, when you usually use IO.inspect function."},{"ref":"6-uploads.html#receiving-the-file","title":"6. Uploads - Receiving the file","type":"extras","doc":"Now, we need to show the file, we receive. Let&#39;s go to the file: assets/js/socket.js. We will modify a handler, responsible for receiving messages. Find a block: channel.on(&#39;shout&#39;, payload =&gt; { } And add a line: list.append(`&lt;img src=${payload.file} /&gt;`) Now, let&#39;s invite other people to join your chat application and send them a funny GIF! After all these steps your code should look like this Example app step 6 - uploads"}]