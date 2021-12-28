---
title: CSS is an art, and it's dying. A reflection on CSS and JS frameworks and the
  evolution of CSS
layout: post
date: '2020-05-13 01:03:49'
tags: code essay
---

I’ve been working through the [serverless-stack.com](https://serverless-stack.com/) tutorial. It’s awesome, teaching you how to set up an AWS backend, React front-end, and now is going through CI/CD through [Seed](https://seed.run/). Like most tutorials, it does feel like I’m just going through the process, not copy-pasting but reading and re-writing code without being too sure of what it all does and why I’m using it; really in-depth learning only comes with time and experience: building your own project from scratch, dealing with all the considerations, use cases, and bugs that come with that. The usage of Seed instead of CircleCI or TravisCI like I see on almost every repo is also a reminder of the dizzying amount of options out there. I had briefly made a foray into learning MongoDB and Express before this current serverless endeavor, and it seems to be something many recruiters want to see; and there are a million alternatives to the React frontend, from other JS frameworks like Angular and Vue to ditching this totally and just writing straight JS.

The Seed website seemed to use the same AWS and React Bootstrap components that the Serverless tutorial was teaching, so somehow I went into a slight rabbithole and ended up on the [website of Mark Otto](https://markdotto.com/projects/), the creator of Bootstrap, also the top designer at GitHub and Twitter before that (it suddenly made sense why GitHub uses Bootstrap). Scrolling through his projects, I saw a bunch of really cool resources and minisites. A [“code guide”](https://codeguide.co/) with HTML/CSS quality standards and conventions; a [concept for HTML elements](https://mdo.github.io/mdoml/) redesigned for more modern use cases; and “A [curated list](http://wtfhtmlcss.com/) of commonly frustrating HTML and CSS quandaries, miscues, and dilemmas.”

Reading through these pages, I was struck by a sense of nostalgia. At the bottom of the HTML section of the Code Guide, just a two-sentence sidenote, was: “Writing markup in a JavaScript file makes the content harder to find, harder to edit, and less performant. Avoid it whenever possible.” The assertion “JS bad” seems to come up at every conference and on every blog. JS slow, JS inaccessible, JS bad for SEO, JS bad for mobile. And the counterargument — you’re ignoring the developer experience, JS frameworks make it 20x easier and faster to build a powerful web app, build and optimize from there. Ship ship ship. Done is better than perfect. But Mark Otto’s two line snippet didn’t seem to be referring to this, the mess of frameworks and CSS-in-JS and everything else that we’ve found ourselves in. It seems to be speaking of a simpler time, when JS meant scripts adding functionality to a website, not the backbone of the website itself. When being a front-end web developer meant writing nicely organized HTML and perfectly cascading CSS — almost the opposite of what I was invested so heavily in learning now.

To be sure, if you haven’t been able to tell yet, I don’t claim to be anything near a professional web developer. All this fancy JS stuff, backend stuff, most of really high-value web development skills today I’m just getting into. Even for static websites, I’ve never worked with huge codebases and design systems, tested across every browser and device and connection speed, squeezed out every byte and millisecond of loading time from a website. But I’ve read about these things obsessively, and when it comes out to just bashing out a website, I’m confident that I can do it well. At this point, CSS feels like a native language to me. Sure, maybe I don’t memorize all the ins and outs of the grammar, but I grew up with it and so know it comprehensively by experience: all the ways to say something, what “sounds” right and what works but “sounds” wrong, what is good or bad practice not by memorization but by experience. Often I feel faster and more creative designing by bashing out code than in Illustrator. Alternatively, give me a mockup and I can implement it with five completely different sets of CSS.

Recently, I came across something like the following in a friend’s project:

{% highlight css linenos %}
    body{
      display: flex;
      justify-content: center;
    }
    
    div{
      display: flex;
    }
    
    container{
      width: 1200px;
    }
{% endhighlight %}

What on earth? I asked him what his thinking was. “The program where I learned CSS said to use flexbox on everything,” he told me.

Just to center a top level container! Whatever happened to `margin: 0 auto`? Oh, man. Maybe I was just lagging behind the times — was this really best practice now? I remember when flexbox was the dreamlike new thing on the scene, the solution to all of our CSS alignment problems, the end of floats and clearfixes and *tables* (my friend will never know of these dark ages, I guess). Browser support was barely existent, and “[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)” had just been published on the CSS-Tricks frontpage. Sparingly, I began integrating it into my own projects. Today, it’s a crucial part of my toolkit, but one I chose to take out when needed, not anything like a default. Now we’ve got Grid, too. New CSS developers these days are spoiled.

And CSS frameworks! Bootstrap was heavy, I had always heard. Makes sense for huge web apps, but way overkill for my tiny little websites. And it was just cleaner and easier to get exactly what I wanted with my own from-scratch code. But now, what do we have? Developers aren’t even writing straight CSS anymore. Atomic frameworks like the currently hugely popular Tailwind CSS are the default. Instead of applying classes in HTML and carefully putting together a harmonious stylesheet, you just apply `w-16`, `h-16`, `mx-auto` classes to your markup, and bam — `width: 16px`, `height: 16px`, `margin: 0 auto`.

My gut reaction to this is, nononononono. I want to keep writing the CSS I know and love. It’s elegant, it’s beautiful, it’s my craft. CSS is almost a part of my identity at this point: my artistry, my outlet of creative expression, my value proposition as a part of society. These new frameworks, not to mention ideas like CSS-in-JS and pre-styled React component libraries, seem to be ripping CSS as I know it away from me, threatening to rip a chunk of my very being away from me. And I’m not alone in this — Chris Hawkes, for example, pretty much voices the same sentiment in his video “[Why I Don’t Like Tailwind CSS](https://www.youtube.com/watch?v=qECXE-retvk)” (though I disagree with him that SASS is similar — SASS is still cascading, is still CSS properties, is still what makes CSS CSS in my heart; I love it and use it extensively). 

Yet, resisting means risking straggling behind the unstopping forward-marching standard of “this is the way that things are done.” There are far more advocates than detractors for atomic frameworks. Hawke’s video has 205 dislikes to 241 likes, for example. And these frameworks don’t just throw away CSS — they are built upon the deepest understanding of and experience with it, not just in technical aspects but in core design philosophy. A comment by a Tailwind CSS community manager on Hawke’s video links to a few essays dating back all the way to 2012 diving into HTML and CSS semantics and scalability. They make a compelling argument of the inherent difficulty of writing and maintaining large CSS codebases by virtue of its cascading nature, the proposed solution being using utility classes. This is exactly the solution that utility-focused atomic frameworks provide.

These frameworks being thoroughly thought-out and considered, however, doesn't mean that their users are inheriting this CSS knowledge and understanding. The most common developer-perspective argument I’ve heard for using CSS frameworks is rooted in the “ship ship ship” rapid iteration mindset that seems to be the foundation of the software development and tech industries. Frameworks allow developers to stop worrying about carefully maintaining CSS and instead focus on building and improving their product. CSS, then, is no longer a language to learn by immersion, by painstaking honing of understanding and technique through time and experience, but rather an ugly back layer, a necessary evil, to hide away behind conveniently designed frameworks and component libraries. The understanding of CSS as a fundamental and artistic skill, like sketching with pencil on paper for painters and digital artists, necessary to learn first, learn well, and continuously practice, is dying, maybe dead.

Maybe this is overly drastic or simplistic. [W3C](https://www.w3.org/) certainly isn’t stopping their work tirelessly assessing and improving CSS. Web development is a huge field and industry; not every website is a JS-based webapp that can ditch CSS, and most jobs will still require direct hands-on CSS work. Using frameworks doesn’t allow you to forego CSS knowledge entirely, either. Utility classes correspond to CSS properties; understanding CSS patterns and behavior is crucial to using them well, as I was reminded of while [watching Tailwind CSS developer Adam Wathan](https://www.youtube.com/watch?v=7gX_ApBeSpQ) work through different combinations of flexbox and margin classes to get part of a Coinbase clone looking right. And if nothing else, developers specializing in CSS will be needed to maintain and build frameworks and libraries.

Yet, the state of and most useful skills in web development will continue to ever evolve, and the practice of artistic, intricate, unmaintainable CSS seems to be taking more and more of a backseat. The starkest difference might be in new developers. Sure, intro courses will still start with the basics of HTML and CSS; but moving into any sort of bigger project, frameworks will be much easier to use and in most ways much more effective than slowly mastering raw CSS with time. More developers will be like my friend, setting `display: flex` on everything, struggling with more complex layouts. And maybe that’s okay.

Maybe it’s even for the better. For me, leaving CSS behind is certainly a bigger step forward: moving beyond static web dev, towards JS, towards full-stack, to more powerful frameworks, to bigger and better things. In some ways, particularly with regards to CSS, my perspective is that of a teacher, someone who has been around and knows what I’m doing. Zooming out a bit, though, I’m still very much a student, early in my learning process. From this perspective, I have one last analogy to offer.

CSS is like arithmetic. It’s at the very base layer of the web, what browser engines process to spit out what’s on the screen. Here are the axioms that just *are*, by very definition of the system. CSS frameworks, then, are like algebra. The problems they solve are essentially arithmetic problems, but abstracted a layer. After a while, any arithmetic that you do only passes by in the back of your mind; you think instead in terms of variables, functions, and roots, like utility classes and components to CSS properties. Even higher level JS frameworks and CSS-in-JS, then, are like calculus, abstracting on algebra, providing a whole new pattern for how websites are defined and built. (SASS is like arithmetic tricks, like learning factoring or divisibility rules that provide you shortcuts without actually learning the algebra that makes them work.) As a student, then, maybe my bemoaning the death of CSS as an art is simply that of a student growing out of his comfort zone.

But CSS, in its beautiful, raw, sometimes badly-written form, will forever (probably…?) remain at the core of the web as we know it. Maybe the whole field is moving forward, abstracting on top of it, so new developers can make use of it faster and better; but I’m glad that I started learning web development before atomic frameworks blew up, before grid, before flexbox, when avoiding Javascript for front-end development was a valuable and feasible thing, when CSS was an art and a language I immersed myself in. Now I’m in time to move along with the field, my knowledge of what once was allowing me to especially appreciate what now is and what’s to come.[^ref]

[^ref]: This article was also published on [DEV.to](https://dev.to/wwsalmon/the-artistry-of-css-and-its-death-a-reflection-about-css-and-js-frameworks-and-the-evolution-of-css-1npg) and [IndieHackers](https://www.indiehackers.com/post/css-is-an-art-and-its-dying-a-reflection-on-css-and-js-frameworks-and-the-evolution-of-css-b9187b02f4), where there has been some good discussion!