# About

This is a markdown file.

It is a common syntax online which allows extremely simple markup without having
to go to all the trouble of writing HTML.

You could use Markdown for portions of your website as well if you like.

## My Projects

In this example I have the following projects:
{% for project in projects %}

- [{{ project.title }}](/project/{{ project.slug }})
  {% endfor %}
