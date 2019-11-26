# 3. Persistence

So now we have a basic chat app but once our session is closed all of our messages are lost. If we were able to create, read, update and delete from a database we would be able to maintain a history of messages or have persistence across our application.

## Creating our Database

First, we’ll create a migration and some code to handle persistence. Migrations are pieces of code that create or change database columns. In Phoenix, we can invoke `mix phx.gen.migration` from the terminal to generate a migration:

```console
$ mix ecto.gen.migration CreateMessages
```

Add to the change function, following code:
```elixir
create table(:messages) do
    add :name, :string
    add :message, :string

    timestamps()
end
```

`:messages` - name for table in database.

`:name`, `:message` - columns in the database table.

`:string` - field type. More on DB types you can find: [Ecto types](https://hexdocs.pm/ecto/Ecto.Schema.html#module-primitive-types)

Then run the migration:

```console
$ mix ecto.migrate
```

**Coach:** Explain, what is changeset? Why do we validate fields?

We need to define a module, that will map the database fields into an Elixir struct. Create a file, called: `message.ex` in the directory: `lib/workshops_app/conversations`.

```elixir
defmodule WorkshopsApp.Conversations.Message do
  use Ecto.Schema
  import Ecto.Changeset

  schema "messages" do
    field :message, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:name, :message])
    |> validate_required([:name, :message])
  end
end
```

Let's create a module, where we will create a message. Create a file, called: `conversations.ex` in the directory: `lib/workshops_app/`.

```elixir
defmodule WorkshopsApp.Conversations do
  import Ecto.Query, warn: false
  alias WorkshopsApp.Repo

  alias WorkshopsApp.Conversations.Message

  def create_message(attrs \\ %{}) do
    %Message{}
    |> Message.changeset(attrs)
    |> Repo.insert()
  end
end
```

# Creating our messages in the Database

**Coach:** Explain, what is CRUD.

Next, we need to save the messages as they come in. If you are not familiar with programming this is create in the CRUD (acronym for: create, read, update, and delete). In `lib/workshops_app_web/channels/general_channel.ex`, we can add a call to do it.

```elixir
def handle_in("shout", payload, socket) do
  WorkshopsApp.Conversations.create_message(payload)
  broadcast socket, "shout", payload
  {:noreply, socket}
end
```

Checkout your terminal, where you should see logs of your application. You should see that your messages are stored in the database.

**Coach:** Explain, what is logging and when do we use logs?

# Refactor

**Coach:** Explain, what is refactoring.

The above code is alright, but if we want to scale our application we will start to have a problem as all the saves to the database will slow down the request cycle and keep us from handling the traffic efficiently. Elixir has some built in tools for dealing with exactly this situation. Specifically, `Kernel.spawn`, which takes a module, a function, and arguments to pass to the function. So we’ll update our handler to:

```elixir
def handle_in("shout", payload, socket) do
  spawn(WorkshopsApp.Conversations, :create_message, [payload])
  broadcast! socket, "shout", payload
  {:noreply, socket}
end
```

What this does is spawn an elixir process to do the save, outside of the request cycle. Since we don’t need to see the results of the save to broadcast the message, there’s no reason to wait for it.

# Using generator

Above steps might be achieved also using a generator.
```console
$ mix phx.gen.context Conversations Message messages name:string message:string
```

Explanation on that command:

Context: Conversations - Elixir module that serves as an boundary for the given resources like messages. A context often holds many related resources.
Message - the schema name.
messages - name for the table in the database.
name:string and message:string - columns and datatypes.

# Further steps

Try to think about some validations, we might add to the chat. Maybe we want to store only messages, which are shorter than 100 characters?

Have a look on the documentation about [Ecto changeset](https://hexdocs.pm/ecto/Ecto.Changeset.html#content). Do you find a function you might use to validate a message?

**Coach:** Explain, what is validation and help mentees add some validations to the chat messages.

Based on: https://elixirgirls.com/guides/persistence.html

After all these steps your code should look like in [Example app step 3 - persistance](https://github.com/Taste-Elixir/workshops-app/tree/3-persistance)
