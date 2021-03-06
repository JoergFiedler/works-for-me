const {
  TITLE,
  DESCRIPTION
} = require('../constants')

function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('')

  return `
    <!doctype html>
    
    <html lang="en">
      <head>
        <title>${TITLE}</title>
        
        <meta charset="utf-8">
        <meta name="description" content="${DESCRIPTION}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="icon" href="./statics/favicon-16x16.png" sizes="16x16">
        <link rel="icon" href="./statics/favicon-32x32.png" sizes="32x32">
        <link rel="icon" href="./statics/favicon-48x48.png" sizes="48x48">
        <link rel="icon" href="./statics/favicon-180x180.png" sizes="180x180">
        
        <link rel="stylesheet" href="./statics/global.css">
        <link rel="stylesheet" href="./statics/header.css">
        <link rel="stylesheet" href="./statics/main-list.css">
        <link rel="stylesheet" href="./statics/main-list.mobile.css"> 
        <link rel="alternate" 
              type="application/rss+xml" 
              title="${TITLE}" 
              href="./rss.xml"
        >
      </head>
      <body>
        <header class="header">
          <nav class="navigation">
            <a href="./index.html" class="logo inline">
              Works for me
            </a>
            <a href="./index.html" class="logo">
              Works<br/>
              for<br/>
              me
            </a>
            <a
              href="./playground/playground.html"
              class="navigation-item"
            >Playground</a>

            <a
              href="./rss.xml"
              class="navigation-item"
            >RSS</a>

            <a
              href="https://github.com/nik-garmash/works-for-me"
              class="navigation-item"
            >GitHub</a>

            <a
              href="https://github.com/nik-garmash/works-for-me#contribute-a-toolkit"
              class="navigation-item highlight"
            >Contribute a toolkit</a>
          </nav>
          
          <div class="share">
            <div class="share__twitter">
              <img class="share__icon" src="./statics/twitter.svg">
              <a 
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fworks-for-me.github.io%2F&text=Collection%20of%20developer%20toolkits&hashtags=devtoolkit,worksforme" target="_blank"
                class="share__link" 
              >Tweet</a>
            </div>
            <div class="share__facebook">
              <img class="share__icon" src="./statics/facebook.svg">
              <a class="share__link" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fworks-for-me.github.io%2F" target="_blank">
                Share
              </a>
            </div>
          </div>
        </header>
         
        <div class="main-container">
          <main class="main">
            <p class="list-caption">Collection of developer toolkits</p>
            
            ${contentString}
          </main>
        </div>
        
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-100562395-1', 'auto');
          ga('send', 'pageview');
        </script>
      </body>
    </html>
  `
}

module.exports = {
  render
}
