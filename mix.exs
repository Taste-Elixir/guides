defmodule Guides.MixProject do
  use Mix.Project

  def project do
    [
      app: :guides,
      version: "0.1.0",
      elixir: "~> 1.8",
      deps: deps(),

      # Docs
      name: "Taste Elixir",
      source_url: "https://github.com/USER/PROJECT",
      homepage_url: "http://YOUR_PROJECT_HOMEPAGE",
      docs: [
        main: "getting_started", # The main page in the docs
        api_reference: false,
        logo: "assets/logo.png",
        extra_section: "GUIDES",
        filter_prefix: "none",
        extras: extras(),
        groups_for_extras: groups_for_extras(),
        javascript_config_path: nil
      ]
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp extras do
    [
      "guides/getting_started.md",
      "guides/introduction/overview.md",
      "guides/introduction/installation.md",
      "guides/introduction/learning.md",
      "guides/introduction/community.md",
      "guides/create_an_app/1-setup.md",
      "guides/create_an_app/2-scaffold.md",
      "guides/create_an_app/3-query.md",
      "guides/create_an_app/4-design.md",
      "guides/create_an_app/5-channels.md",
      "guides/create_an_app/6-uploads.md",
    ]
  end

  defp groups_for_extras do
    [
      "Introduction": Path.wildcard("guides/introduction/*.md"),
      "Create an app": Path.wildcard("guides/create_an_app/*.md")
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:ex_doc, "~> 0.21", only: :dev, runtime: false},
    ]
  end
end
