# 1. Setup

1. Create new Phoenix project. Accept fetching dependencies (`workshop_app` is and example name, but it can be changed depends on your app topic) 
    ```console
    mix phx.new workshop_app
    ```

2. Move to app directory
    ```console
    cd workshop_app
    ```

3. Install all frontend dependencies
    ```console
    npm install
    ```

4. Create your database (it will be empty for now)
    ```console
    mix ecto.create
    ```

5. Now you can run your app and check `http://localhost:4000/` in the browser, all should be setup and running
    ```console
    mix phx.server
    ```