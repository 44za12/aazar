---
title: Which Profession Is Celebrated More By Society? A Data-Driven Dive into Madame Tussauds
tag: data_analysis,python
author: Aazar
date: 2023-07-17
---

In a world dominated by celebrity culture, it's easy to assume that movie stars and musicians command the lion's share of society's admiration. But is this assumption accurate? How does society distribute its adulation across different professions? To answer this question, we turned to an unusual, but revealing source: the wax figures of Madame Tussauds.
## The Wax Statues World as a Reflection of Society
With its origins in 19th-century London, Madame Tussauds is more than a chain of wax museums. It's a global barometer of fame, a place where the world's most admired figures across various professions are immortalized in wax. By examining the figures displayed in these museums, we can gain insights into which professions society celebrates the most.
## Unveiling the Data with Python
Using Python, we scraped the [List of wax figures displayed at Madame Tussauds museums](https://en.wikipedia.org/wiki/List_of_wax_figures_displayed_at_Madame_Tussauds_museums) from Wikipedia. The figures were classified into different professional categories: 'actor', 'musician', 'politician', 'sportsperson', 'writer', 'model', 'television', 'royalty', 'business', 'science', 'art', and 'religious', with an 'other' category for figures that didn't fit into these classifications.
To optimize our data retrieval process, we stored our findings in a SQLite database. This ensured that we had swift, efficient access to our data for further analysis without bombarding the server with requests.
## Decoding Society's Biases: The Findings
We used Matplotlib  to create a horizontal bar chart, mapping the count of wax figures to each profession. The results provided a fascinating snapshot of society's fanfare distribution.

Unsurprisingly, figures from the entertainment and sports industries dominated the waxwork landscape, underlining our initial assumptions. We would be lying if we said we are not disappointed with the findings, but who are we to judge, you can view the findings yourself in the below figure.

![Distribution of Categories in Madame Tussaud's wax figures](https://raw.githubusercontent.com/44za12/random-experiments/main/distribution_of_categories_in_made_tussauds.png)

We welcome ideas to help fill this rather visual gap, let's discuss it in the comments, or mail us @ reach@aazar.me to discuss any potential ideas.

To access the Python code used for the analysis and visualization, please visit the [GitHub repository](https://github.com/44za12/random-experiments.git).
