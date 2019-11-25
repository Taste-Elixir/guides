# Installation

In order to develop elixir applications, you will need to install elixir itself, erlang because elixir is made for the erlang virtual machine, nodejs for compiling assets in phoenix, and you'll most likely want a RDBMS (relational database management system) such as postgresql or MySQL.

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

This guide provide instructions for Ubuntu, if you use different Unix-like system please follow official instructions from: https://elixir-lang.org/install.html#unix-and-unix-like

  1. Add Erlang Solutions repo.

  ```console
  wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
  ```

  2. Downloads and updates dependencies by running:

  ```console
  sudo apt-get update
  ```

  3. Install the Erlang/OTP platform and all of its applications:

  ```console
  sudo apt-get install esl-erlang
  ```

  4. Install Elixir language:

  ```console
  sudo apt-get install elixir
  ```

  5. Install nodejs to powerup our frontend stuff:

  ```console
  sudo apt-get install curl
  ```

  ```console
  curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  ```

  ```console
  sudo apt-get install nodejs
  ```

  6. Install the Hex package manager:

  ```console
  mix local.hex
  ```

  7. Install Phoenix a web development framework:

  ```console
  mix archive.install hex phx_new 1.4.10
  ```

  8. Install Postgres database:

  ```console
  sudo apt-get install postgresql postgresql-contrib
  ```

## Windows

This guide provide instructions for Windows 10.

  1.  Install Elixir language (it will install Erlang as well):

  ```console
  https://elixir-lang.org/install.html#windows
  ```

  2. Install Postgres database:

  ```console
  https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  ```

  3. Install nodejs to powerup our frontend stuff:

  ```console
  https://nodejs.org/en/download/current/
  ```

  4. Install the Hex package manager:

  ```console
  mix local.hex
  ```

  5. Install Phoenix a web development framework:

  ```console
  mix archive.install hex phx_new 1.4.10
  ```
