# 5. Design

**Coach:** Explain what is the relationship between HTML and Phoenix. What is Embedded Elixir [EEx](https://hexdocs.pm/eex/EEx.html)? What is MVC and how does this relate to it?

App doesn't look very nice yet. We might use one of the existing CSS framework to make it nicer. See some examples of such frameworks:

* [Bootstrap](https://getbootstrap.com/)
* [Bulma](https://bulma.io/)

In this tutorial, we will use Bulma framework.

Let's open a file: `assets/css/package.json`

Add to the list of dependencies:
```
"bulma": "0.8.0"
```

Now open the terminal, and install a package with use of: `npm install` command.

Remove from file: `assets/css/app.css` following line:
```
@import "./phoenix.css"
```

Add to the file: `assets/css/app.css`

```
@import "../node_modules/bulma/css/bulma.css"
```

Add to one of HTML files, following snippet:
```html
<div class="buttons">
  <button class="button is-primary">Elixir is fun</button>
  <button class="button is-link">Click me</button>
</div>
```

As a result of above, you should see 2 buttons: green and blue. Now, there is a time to play a bit with available classes in the [documentation](https://bulma.io/documentation/) and make our application beautiful.

Let's apply some CSS classes to aleady created pages.
