## Welcome

Markdown pro - easy to use!

<p>Use any html tags</p>
<p>Ever
Multi
Line</p>

Use option `useLineBreak` to
break
line
everywhere.

Or use `\` at the end of line \
to break it.

---
To make line use `---`, `***` or `___`.
***


### Emphasis

**This is bold text**

__This is underline text__

_This is italic text_

*This is italic text __too__*

***This is bold and italic text***

~~This is strikethrough text~~

*__**~~Combine styles!~~**__*


### Subscript/Superscript

- 25^th^
- C~2~H~5~OH


### Images

![](https://placekitten.com/100/100)
![Cat](https://placekitten.com/110/110)
![One more cat](https://placekitten.com/120/120 "The one more cat")

Also, use image ![](https://placekitten.com/100/25) inline.


### Checkboxes

- [X] Checked checkbox
- [x] Checked checkbox too
- [ ] Unchecked checkbox

[x] And one more checkbox


### Links

You can use like this [link](http://example.com),
like this [](http://example.com "go to site"),
like this [go to site](http://example.com "go to site again"),
like this [](http://example.com)
or http://like.this even (last method is configurable).


### Unordered list

+ Create an unordered list by starting a line with `+`, `-` or `*`
+ Sub-lists are made by indenting space(s):
    + Lorem ipsum dolor
    + Alias animi autem beatae


### Ordered lists

5. Create a Numeric list
1. by starting a line with
2. any number(s) with a dot, for example: `1.`

B. Create a Big Alphabet list
O. by starting a line with
P. any Big Letter(s) with a dot, for example: `A.`
Q. PS: avoid Roman number - I, V, X, L, C, D, M

f. The same rule
o. for Small Alphabet list
q. PS: avoid Roman number - i, v, x, l, c, d, m

I. Create a Big Roman Number list
II. by starting a line with
V. any Big Roman Number(s) with a dot, for example: `I.`

ii. The same rule
v. for Small Roman Number list


### Footnote

Footnote 1 link[^first].

Footnote 2 link[^second].

Footnote 1 link[^first] and 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markdown**
and
_multiple_
lines.

[^second]: Footnote text.


### Blockquote

> One Markdown, One Specification, One Blockquote


### Table

Table with different cell aligns
| Left     | Center   | Right         | Default (left)          |
| :------- | :------: | ------------: | ----------------------- |
| [ ] beep | _123_    | abc^[fn text] | `:---` - left           |
| [X] boop | `let a`  | link[^first]  | `:--:` - center         |
| [ ] foo  | **bold** | 123           | `---:` - right          |
| [x] bar  | H~2~0    | 456           | `----` - default (left) |


### Code

```bash
$ npm i markdown-pro
$ sudo be happy
```


### Variables

[image-variable]: https://placekitten.com/100/100
[url variable]: http://example.com

![][image-variable]
![cat][image-variable]

[][url variable]
[to site][url variable]
