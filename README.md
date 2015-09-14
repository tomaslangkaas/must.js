# must.js

Tiny templating library

## Features

* Based on [mustache](http://mustache.github.io/mustache.5.html) syntax
* Tiny (~1kb minified)
* Fast (compiles templates to reusable functions)
* No dependencies
* Extensive browser and runtime support (tested in IE6+)
* Supports custom functions
* MIT-licensed

## Setup

The file `must.js` contains the minified library. When loaded, this file sets up a global variable `must` which contains the whole library in a self-invoking function expression.

This may be customized by changing the opening expression `var must= ...` to whatever, such as `whateverNamespaceOrModule.templateCompiler = ...`.

## Basic use

The library consists of a single function, `must`. Calling this with a template string returns a compiled template or `false` if compilation fails. The compiled template is a function which accepts a data object and returns a rendered string.

```javascript
var compiledTemplate = must(templateString);

var renderedString = compiledTemplate(templateData);
```

For custom formatters, the `must` function accepts a second, optional argument, an object with formatting functions.

## Documentation and examples

### Variables and function variables

Standard mustache tags for inserting variables are supported:

```javascript
var templateString = "My name is {{name}}, my lucky number is " +
    "{{luckyNumber}}, and I {{don't }}like skating.";

var templateData = {
    name: "Bart Simpson",
    luckyNumber: function(){
        return 10 * Math.random() | 0
    } 
};

var renderedString = must(templateString)(templateData);
```

Inspecting `renderedString` in the console:

```javascript
> renderedString
"My name is Bart Simpson, my lucky number is 9, and I like skating."
```

Non-existing keys in `templateData`, as the key `"don't "` in this example, are not rendered.

### HTML escaping

By default, all inserted data is sanitized for HTML by escaping the characters `<`, `>`, `&`, `"`, `'` and `/`. For raw output (at own risk), use triple braces: 

```javascript
var templateString = "Escaped: {{boldAndBrave}} & unescaped: {{{boldAndBrave}}}";

var templateData = {
    boldAndBrave: '<b>bold & "brave"</b>'
};

var renderedString = must(templateString)(templateData);
```

Inspecting `renderedString` in the console:

```
> renderedString
"Escaped: &#60;b&#62;bold &#38; &#34;brave&#34;&#60;&#47;b&#62; & unescaped: <b>bold & "brave"</b>"
```

### Conditional sections

Conditional sections start with a tag with the `#` character, and end with a tag with a `/` character. Content within the section is only rendered if the section key is truthy:

```javascript
var templateString = "{{#showAndTell}}This is only shown if showAndTell is truthy.{{/showAndTell}}";

var templateData1 = {
    showAndTell: true
};

var templateData2 = {
    showAndTell: false
};

var renderedString1 = must(templateString)(templateData1);

var renderedString2 = must(templateString)(templateData2);
```

Console:

```javascript
> renderedString2
""
> renderedString1
"This is only shown if showAndTell is truthy."
```

### Inverted conditional sections

Inverted conditional sections start with a tag with the `^` character, and end with a tag with a `/` character. Content within the section is only rendered if the section key is falsy:

```javascript
var templateString = "{{^showAndTell}}This is only shown if showAndTell is falsy.{{/showAndTell}}";

var templateData1 = {
    showAndTell: true
};

var templateData2 = {
    showAndTell: false
};

var renderedString1 = must(templateString)(templateData1);

var renderedString2 = must(templateString)(templateData2);
```

Console:

```javascript
> renderedString2
"This is only shown if showAndTell is falsy."
> renderedString1
""
```

### Enumerable sections

...

### Custom formatters

...

### Partials and lambdas

...
