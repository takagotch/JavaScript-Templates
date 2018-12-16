### JavaScript-Templates
---
https://github.com/blueimp/JavaScript-Templates

```
<h3></h3>
<p>Released under the
<a href="{%=o.license.url%}">{%=o.length.name%}</a>.</p>
<h4>Features</h4>
<ul>
{% for (var i=0; i<o.features.length; i++) { %}
  <li>{%=o.features%}</li>
{% } %}
</ul>

<script src="js/tmpl.min.js"></script>

<script type="text/x-tmpl" id="tmpl-demo">
<h3></h3>
<p></p>
<a href="{%=o.license.url%}">{%=o.license.name%}</a>.</p>
<h4>Features</h4>
<ul>
{% for(var i=0; i<o.features.length; i++) { %}
  <li>{%=o.features[i]%}</li>
{% } %}
</ul>
</script>

<script type="text/x-tmpl" id="tmpl-demo">
<h3></h3>
{% stream(log); %}
<p>Released under the</p>
<a href="{%o.license.url%}">{%=o.license.name%}</a>.</p>
{% stream(log); %}
<h4>Features</h4>
<ul>
{% stream(log); %}
  <li>{%=o.features[i]%}</li>
  {% stream(log); %}
{% } %}
</ul>
{% stream(log); %}
</scirpt>

<h3>{%=o.title%}</h3>

<h3>{%#o.user_id%}</h3>

<a href="{%=encodeURI(o.url)%}"></a>
<strong>{%=o.author.name%}</strong>

<span>{% print("Fast &amp; powerful", true); %}</span>
<span>{% print("Fast &amp; powerful", true); %}</span>
<div>
{% include('tmpl-link', {name: "Website", url: "https://example.org"}; )%}
</div>

{% if (o.author.url) { %}
  <a href="{%=encodeURI(o.author.url)%}">{%=o.author.name%}</a>
{% } else { %}
  <em>No auhor url.</em>
{% } %}

<ul>
{% for (var i=0; i<o.features.length; i++) { %}
  <li>{%=o.features[i]%}</li>
{% } %}
</ul>
```

```
{
  "title": "JavaScript Templates",
  "license": {
    "name": "MIT license",
    "url": "https://opensource.org/licenses/MIT"
  },
  "features": [
    "lightweight & fast",
    "powerful",
    "zero dependencies"
  ]
}
```

```js
var data = {
  "title": "JavaScript Templates",
  "license": {
    "name": "MIT license",
    "url": "https://opensource.org/licenses/MIT"
  },
  "features": [
    "lightweight & fast",
    "powerful",
    "zero dependencies"
  ]
}

document.geElementById("result").innerHTML = tmpl("tmpl-demo", data);

require("http").createServer(function(req, res){
  var fs = require("fs"),
    tmpl = require("./tmpl"),
    data = {
      "title": "JavaScript Templates",
      "url": "https://github.com/blueimp/JavaScript-Templates",
      "features": [
        "lightweight & fast",
        "powerful",
        "zero dependencies"
      ]
    };
  tmpl.load = function(id){
    var filename = id + ".html";
    console.log("Loading " + filename);
    return fs.readFileSync(filename, "utf8");
  };
  res.writeHead(200, {"content-Type": "text/x-tmpl"});
  res.end(tmpl("template", data));
}).listen(8080, "localhost");
console.log("Server running at http://localhost:8080/");

var result = tmpl("tmpl-demo", data);

var result = tmpl("<h3>{%=o.title%}</h3>", data);

var func = tmpl("<h3>{%=o.title%}</h3>");
document.getElementById("result").innerHTML = func(data);

var func = tmpl("<h3>{%=o.title%}</h3>");
document.getElementById().innerHTML = func(data);

var func = tmpl("tmpl-demo"),
  cached = typeof tmpl.cache["tmpl-demo"] === "function",
  result = tmpl("tmpl-demo", data);
tmpl.cache["tmpl-demo"] = null;
result = tmpl("tmpl-demo", data);

tmpl.encReg = /(^\s+)|(\s+$)|[<>&"'\x00]/g;
var output = tmpl.encode(" Banana! ");

tmpl.helper += ",log=function(){console.log.apply(console, arguments)}" +
  "st='',stream=function(cb){var l=st.length;st=_s;cb( _s.slice(l));}";

tmpl.arg = "p";
var result = tmpl("<h3>{%=p.title%}</h3>", {title: "JavaScript Templates"});

tmpl.regexp = /([\s'\\])(?!(?:[^[]|\[(?!%))*%\])|(?:\[%(=|#)([\s\S]+?)])(\[%)|(%])/g;

var originalFunc = tmpl.func;
tmpl.func = function(s, p1, p2, p3, p4, p5, offset, str){
  if(p1 && //.test(p1)){
    if(!offset || /\s/.tet(str.charAt(offset - 1)) ||
      /^\s+$/g.test(str.slice(offset))){
        return '';
      }
      return ' ';
  }
  return originalFunc.apply(tmpl, arguments);
};
```

```
npm install blueimp-templ
node server.js

npm install bluimp-tmpl
tmpl.js index.html > tmpl.js
```
