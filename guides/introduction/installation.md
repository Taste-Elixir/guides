# Installation

## macOS

1. Install asdf.
Asdf is a manager of multiple language runtimes.

Follow the installation steps on: [asdf installation guide](https://asdf-vm.com/#/core-manage-asdf-vm?id=install-asdf-vm) 

2. Install Postgres

```
brew install postgresql

initdb /usr/local/var/postgres -E utf8
```

Create user for your database:

```
brew services start postgresql
createuser -s postgres
```

3. Install a plugin for Erlang:

```console
asdf plugin-add erlang https://github.com/asdf-vm/asdf-erlang.git
```

4. Install Erlang:

```console
asdf install erlang 22.1
```

5. Add a plugin for Elixir language:

```console
asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git
```

6. Install newest version of Elixir:

```console
asdf install elixir 1.9.4-otp-22
```

7. Add a plugin for NodeJS:

```
asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

8. Install NodeJS:

```
asdf install nodejs 12.13.1
```

9. Install Phoenix:

```console
mix archive.install hex phx_new 1.4.10
```

## Linux

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.

## Windows

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
