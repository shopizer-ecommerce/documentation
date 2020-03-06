Searching items on Shopizer

* [Introduction](#introduction)
* [Search configuration](#configuration)
* [Testing your indexes](/#/playbook/search#test)

## <a id="introduction" name="introduction"></a>Introduction
---

here is some Introduction text...

## <a id="configuration" name="configuration"></a>Search configuration
---

... use the pageConfig.json and create a new Page document.

## <a id="test" name="test"></a>How to test your indexes
---

Checkout the Markdown Cheat Sheet https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Search is also used for indexing orders in order to extract analytics information

PUT /_ingest/pipeline/timestamp
{
"description": "Creates a timestamp when a document is initially indexed",
"processors": [
{
"set": {
"field": "_source.timestamp",
"value": "{{_ingest.timestamp}}"
}
}
]
}

PUT orders/_settings
{
  "index.default_pipeline": "timestamp"
}

https://www.youtube.com/watch?v=Y2G2dhi-h-g
