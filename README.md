# Guides

## Generate page

`mix docs -o docs`

## References

- https://elixirgirls.com/guides/
- https://www.ludu.co/course/discover-elixir-phoenix/
- https://elixirschool.com/en/
- https://curiosum.dev/blog/elixir-phoenix-liveview-messenger-part-1

## Publish docs on Github Pages

1. Install Github client - [Hub client](https://hub.github.com/):

```
brew install hub
```

2. Authenticate Github user:

```
hub api
```

3. Request a page build:

```
hub api -X "POST" /repos/Taste-Elixir/guides/pages/builds
```

4. Check actually deployed version on [Deployments](https://github.com/Taste-Elixir/guides/deployments)
