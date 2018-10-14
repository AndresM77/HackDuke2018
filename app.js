const search = instantsearch({
  // Replace with your own values
  appId: '2DH3I427CJ',
  apiKey: 'fcdfc8cd5c6dd3d510657d18a0e03d6b', // search only API key, no ADMIN key
  indexName: 'topic_search',
  urlSync:true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
      hitsPerPage:10,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.start();