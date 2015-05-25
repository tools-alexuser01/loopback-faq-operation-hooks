#loopback-faq-operation-hooks

```
$ git clone git@github.com:strongloop/loopback-faq-operation-hooks.git
$ cd loopback-faq-operation-hooks
$ node .
```

- [How do you use operation hooks?](#how-do-you-use-operation-hooks)
- [What operation hooks are available?](#what-operation-hooks-are-available)

##How do you use operation hooks?
1. Determine which hook you would like to use ([`afterInitialize`](/common/models/coffee-shop.js), [`beforeValidate`](/common/models/coffee-shop.js), ...)
2. Add the hook to your [`model.js` file](/common/models/coffee-shop.js)

##What operation hooks are available?
See http://docs.strongloop.com/display/public/LB/Operation+hooks.
