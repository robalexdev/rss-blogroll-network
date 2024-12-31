# RSS Blogroll Network

A website that maps connections between blogs, blogrolls, web-rings, and other RSS-related entities.
In particular, this website uses [OPML blogrolls](https://opml.org/blogroll.opml) as the basis for crawling blogs.

https://alexsci.com/rss-blogroll-network/

[Read the blog post to learn more](https://alexsci.com/blog/blogroll-network/).


## Joining the network

The best way to join the network is for a blog already in the network to add your blog to their blogroll.
This may happen organically over time if you have content that's interesting to others in the network.
There are no restrictions on what sites can join the network organically, as the network is decentralized.


## Opt out of the network

See [privacy](https://alexsci.com/rss-blogroll-network/privacy/#opt-outs-for-the-crawler) to learn more.


## Running the crawler

Build https://github.com/ralexander-phi/feed2pages-action, which has the crawler code.
Run the crawler using `../feed2pages-action/util`.
Then build this project (`go build`) and run the analysis tool: `./rss-blogroll-network`.
Finally build the site with hugo: `hugo` or `hugo server`.
