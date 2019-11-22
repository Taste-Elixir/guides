# Installation

In order to develop elixir applications, you will need to install elixir itself, erlang because elixir is made for the erlang virtual machine, nodejs for compiling assets in phoenix, and you'll most likely want a RDBMS (relational database management system) such as postgresql or MySQL.

## macOS

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.

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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
