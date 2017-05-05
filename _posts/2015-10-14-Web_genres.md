---
layout: post
title:  "Web Genre Classification"
date:   2015-10-14
categories: [Web genre classification]
tags: [ hierarchical_multi-label_classification, machine_learning ]
#excerpt: ?
---

Web searching is typically performed by typing keywords in a search engine, which returns web pages of a topic defined by those keywords. However, a user can obtain more precise results if a web page genre is specified besides the keywords. Web genre represents a form and a function of a web page, enabling a user to find a "Scientific" paper about the topic of text mining.

My research is focused on web genre classification using machine learning methods. Considering that a web page is a complex document that can share conventions of several genres or contain parts from different genres, the web genre classification problem belongs to a group of multi-label classification problems. For example, a story for children belongs to both "Children" and "Prose fiction" genres. Furthermore, web genres naturally form a hierarchy. For example, "Prose fiction" is a type of "Fiction". These web genre classification properties can be easily mapped to the machine learning task of hierarchical multi-label classification. However, the data sets that capture web genre as a hierarchical multi-label concept are missing. Therefore, we proposed an approach to automatically construct a hierarchy of web genre labels from the data and to apply hierarchical multi-label classification algorithm to construct accurate web genre classifier.

![Web genre hierarchies](/images/Web_genre_hierarchies.png)
