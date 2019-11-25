# 1. Setup

Now when you have all of the required tools prepared you can start working on your first application! It's like Slack (webchat). Except for Elixir and Phoenix's basics, your app will use some cool approaches like web sockets and event-driven programming.

Below commands will help you set up your application but don't hesitate to ask your mentor if something is not clear.

1. Create new Phoenix project. Accept fetching dependencies (`workshops_app` is an example name, but it can be changed depends on your app topic).
    ```console
    mix phx.new workshops_app
    ```

2. Move to app directory.
    ```console
    cd workshops_app
    ```

3. Create your database (it will be empty for now).
    ```console
    mix ecto.create
    ```

4. Now you can run your app and check `http://localhost:4000/` in the browser, all should be live and running.
    ```console
    mix phx.server
    ```

After all of these steps, your app should look similar (with possible changes in name) to https://github.com/Taste-Elixir/workshops-app/tree/1-setup.