---
createdAt: 2021-02-28
title: Easy excerpt from content
---

You can add an excerpt easily by writing `<!--MORE-->` in lowercase in the content.

<!--more-->
(It is written right before this)

Then continue on with the rest of the **markdown** content.

```js{4,7}[posts.vue]
computed: {
  placeholderClasses() {
    const classes = ['w-full','w-2/3','w-5/6'];
    return [...Array.from(
      { length: this.amount },
      (value, index) => classes[index % classes.length]
    )]; // repeats classes after one another
  }
},
```