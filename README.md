### Works For Me

Collection of great software setups. Way to discover and share useful tools.

[Works For Me site](https://works-for-me.github.io) compiles all contributes setups in a readable way.<br>
[RSS-feed](https://works-for-me.github.io/rss.xml) lets you subscribe to new setups and updates to existing ones.<br>
[The Playground](https://works-for-me.github.io/playground/playground.html) helps you to see how setup is going to look like.


## Index

- [How to contribute a setup](#how-to-contribute-a-setup)
- [Guide to write a setup](#guide-to-write-a-setup)
- [Syntax Cheatsheet](#syntax-cheatsheet)
    - [Author's information](#authors-information-syntax)
    - [Tools](#tools-syntax)
    - [Titles](#titles-syntax)
    - [Links](#links-syntax)
    - [Images](#images-syntax)
- [What goes to RSS-feed](#what-goes-to-rss-feed)


## How to contribute a setup

Make a Pull Request to the [original repository](https://github.com/nik-garmash/works-for-me) with a new folder inside [setups/](https://github.com/nik-garmash/works-for-me/tree/master/setups) directory.

The new folder should contain a ```your-name.setup``` file (e.g. john-doe.setup) and optionally images.


## Guide to write a setup

Setup should start with a little information about yourself, followed by the list of tools you are using.

This is how very minimal setup may look like:

```
name: John 🚀 Doe

> Photoshop (http://www.adobe.com/de/products/photoshop.html)
```

Try to copy it into [the playground](https://works-for-me.github.io/playground/playground.html) and see it works.

### Author's information

You can add more information about yourself besides just a name.<br>
Supported lines are:

- name
- occupation
- location
- link — personal blog, twitter, github etc. You can add multiple of those. 

Also, those lines can be followed by some free text about yourself.

```
name: John 🚀 Doe
occupation: Designer
location: Berlin, Germany
link: https://works-for-me.github.io

Something about you …
```

### Tools

After author's information goes the list of your tools.

Each tool starts with ```>``` symbol.

```
> WebStorm
```

It can have optional link and free text description:

```
> WebStorm (https://www.jetbrains.com/webstorm/)

Usefull plugins installed:
• IdeaVim
• Markdown Support
…
```

You can list similar tools in one line:

```
> Slack, Telegram (https://telegram.org)
```


### Titles

Tools can be grouped with a titles if you want to have setup more organised.

Title starts with ```--```.

```
-- Programming
```

Just like with tools, title can be followed by some description.

```
-- Programming

My laptop is MacBook Pro (Retina, 15-inch, Mid 2015), 2,5 GHz Intel Core i7, 16GB of RAM.
```

After a title goes the list of related tools.


### Links

You can leave links to external resources within any free text description (for author's info, tools or titles).

```
Check out my <GitHub (https://github.com/nik-garmash)>
```

Link itself is wrapped with ```<>```, inside are title and URL wrapped with ```()```.


### Images

To make setup even more interesting to read you can add images. Start a line with ```#``` symbol followed by title and image URL.

```
# My desktop screenshot (./desktop.png)
```

Title is a text which describes what's on the image. It's very important for screen-reader users, do not skip it.

URL is wrapped with ```()``` and it refers to images you put inside your setup folder. External URLs are also good if you prefer.


### Comments

```
// some reminder …
```

Such line won't be rendered.


## Syntax cheatsheet

### Author's information syntax

```
name: John 🚀 Doe
occupation: Designer
location: Berlin, Germany
link: https://works-for-me.github.io

Free text description …
```

### Tools syntax

```
> Tool Title
```

```
> Tool Title (https://tool.url)
```

```
> Tool Title (https://tool.url)

Free text description …
```

### Titles syntax

```
-- Groupping title
```

```
-- Groupping title

Free text description …
```

### Links syntax

```
<link title (https://link.url)>
```

```
some text <link title (https://link.url)> more text
```


### Images syntax

```
# Image title (./image.png)
```


## What goes to RSS-feed

RSS-feed is based on a commit-messages.

If you are about to commit new setup start commit-message with `new: `

```
new: John Doe (Software Engineer)
```

You can add a few words about you in the commit-message, it goes to the feed.

For major updates to existing setup, use `update: `, that also goes to RSS.

```
update: Changed IDE
```

If you want to fix some typos or make minor changes, use `fix: `, no-one will see that one.

```
fix: Fixing typos
```
