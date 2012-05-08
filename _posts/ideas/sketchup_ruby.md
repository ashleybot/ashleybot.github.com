---
layout: main
title: Sketchup Ruby Basics
description:
keywords:
---

<p>
<a href="https://developers.google.com/sketchup/docs/index">SketchUp API API Documentation</a>
</p>
<p>
<a href="http://sketchup.google.com/intl/en/download/plugins.html">Plugin Directory</a>
</p>

<pre class="gist">
> load 'sketchup.rb'
> model = Sketchup.active_model
</pre>

<pre class="gist">
> point1 = [0,0,0]
> point2 = [10,0,0]
> point3 = [10,10,0]
> point4 = [0,10,0]
</pre>

<pre class="gist">
> model.entities.add_line(point1,point2)
> model.entities.add_line(point2,point3)
> model.entities.add_line(point3,point4)
> model.entities.add_line(point4,point1)
</pre>

<pre>
> width, depth, height = 5
> points = []
> points[0] = [0,0,0]
> points[1] = [width,0,0]
> points[2] = [width,depth,0]
> points[3] = [0,depth,0]
> square = model.entitied.add_face points
> square.pushpull height
</pre>