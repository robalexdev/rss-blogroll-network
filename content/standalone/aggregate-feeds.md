---
title: Aggregate Feeds
url: /aggregate-feeds/index.html
---

RSS and OPML format aggregate feeds are available.

These are probably _not_ usable directly for building a personal reading list as they network covers a diverse set of topics across multiple languages.

Aggregate files are available in two variants:
* A full version, which contains all feeds that have been discovered in the Blogroll Network.
* A partial version which excludes any feeds served with an `X-Robots-Tag: noarchive` header.

The partial version is suitable for building a feed archive while respecting the `noarchive` tag.

## RSS Feeds

The RSS feed has some unique attributes.
Only a single post from each feed is provided (due to size constraints)
The crawler runs at most weekly, so posts won't show until the crawler finds them.
When a feed publishes multiple posts per week, some of the posts may never appear in the aggregate feed.

Download:
* [Full feed](/rss.xml)
* [Feed for archive](/rss-archive.xml)


## OPML Reading Lists

Download:
* [Full list](/opml.xml)
* [List for archive](/opml-archive.xml)
