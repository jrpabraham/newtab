jQuery(function ($) {
  $("#rss-sandiego").rss("https://www.sandiegouniontribune.com/news/rss2.0.xml, https://feeds.kpbs.org/most-read", {
    limit: 4
  })
})

jQuery(function ($) {
  $("#rss-worldnews").rss("https://www.npr.org/rss/rss.php?id=1001", {
    limit: 8
  })
})

jQuery(function ($) {
  $("#rss-nber").rss("https://www.nber.org/rss/newdev.xml,https://www.nber.org/rss/newls.xml,https://www.nber.org/rss/newpe.xml", {
    limit: 2
  })
})

jQuery(function ($) {
  $("#rss-devecon").rss("https://chrisblattman.com/feed/,https://feeds.feedburner.com/marcfbellemare/uTio,https://voxdev.org/rss.xml,https://davidevans.blog/feed,https://developingeconomics.org/feed", {
    limit: 2
  })
})

jQuery(function ($) {
  $("#rss-analog").rss("https://reddit.com/r/analog/.rss", {
    limit: 8
  })
})

jQuery(function ($) {
  $("#rss-pinko").rss("https://c4ss.org/feed,https://thebaffler.com/feed,https://chuangcn.org/feed,https://www.dissentmagazine.org/feed,https://baseandsuperstructure.com/feed,https://imperiumadinfinitum.wordpress.com/feed,https://thecharnelhouse.org/,https://www.viewpointmag.com/feed,https://thenewinquiry.com/feed,https://jacobinmag.com/feed", {
    limit: 2
  })
})