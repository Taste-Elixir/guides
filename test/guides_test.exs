defmodule GuidesTest do
  use ExUnit.Case
  doctest Guides

  test "greets the world" do
    assert Guides.hello() == :world
  end
end
