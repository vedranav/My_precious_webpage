---
layout: page
title: A Program for Interactive Mining of Complex Domains
permalink: /human-machine-data-mining/
type: page2
comments: true
---

* content
{:toc}

Version 1.00

#### Purpose
Human-Machine Data Mining (HMDM) is a computer program for interactive mining of complex domains. The program is primarily intended for domain analysis tasks, where the goal is to extract relations that best describe the domain. To meet the goal, the program constructs transparent-box models in the form of decision and regression trees for the human to be able to analyze and extract the best relations from models.

The problem that typically appears when mining the complex domains with the selected data mining methods is that they often construct statistically significant, but meaningless models. Since the task is domain analysis, meaningless relations in models can lead to wrong conclusions and can consequently undermine a human’s trust in data mining programs. To resolve the issue, the HMDM program provides the tools for the human to interactively search the domain with the goal to find relations in models that are both meaningful and statistically supported with data, that is, of high quality. The human is also able to establish the level of relations’ credibility from the observed changes in relation’s meaning and quality through multiple models, as well as to detect several types of multi-attribute relations.

The HMDM program provides tools for:
- Constructing multiple models in an automatic and interactive manner,
- Reexamining the credibility of relations from multiple models,
- Collecting evidence that enables the human to extract only credible relations and models.

Based on credible relations and models, the human then constructs correct conclusions about the domain.

#### HMDM Method
The steps of the method are presented in the following two flowcharts: [HMDM algorithm](http://vedranavidulin.com/assets/pdfs/HMDM_algorithm.pdf) and [delete attributes procedure](http://vedranavidulin.com/assets/pdfs/DELETE_ATTRIBUTES_procedure.pdf).

#### Typical Applications of HMDM
HMDM is intended for mining complex domains for which is assumed that they contain relations of different types and levels of importance.

**Types** – single- and multi-attribute relations. Multi-attribute relations may be redundancy and combination relations.

**Levels of importance, that is, credibility of relations** – three levels:
- Relations of the highest importance, such as the most important changes in policies that will increase a level of country’s welfare.
- Weaker, but still important relations, such as additional changes in policies that are desirable, but will not so strongly influence the welfare as the highest-importance relations.
- Relations that emerge in the analysis, but are not supported with enough evidence to be considered important.

The method successfully deals with scarce data and missing values by compensating them with human knowledge and understanding. For example, in the case of macroeconomic domains, there is a high number of interesting attributes in comparison to the number of instances. Instances are typically countries, which limits such domains to max. 200 instances. The number of instances is typically even smaller after data preprocessing stage when those countries with high ratio of missing values are removed from the data.

Domains on which the HMDM method was used:
- Macroeconomic domains – The goal of the analysis was to understand which segments of research and development and higher education sectors have the highest impact on country’s welfare.
- Web genres – The analysis was targeted on understanding which genre-based words can be used to identify a web page genre (Blog, Frequently asked questions, etc.).
- Demographic domain – In the ongoing study, we are analyzing the factors that influence the fertility rate.

#### Screenshots

![Initial data mining screen](http://vedranavidulin.com/assets/images/Initial_Data_Mining.png)
**Initial Data Mining screen** – An analysis begins with construction and examination of multiple models.
<br>
<br>

![Modification Tools screen](http://vedranavidulin.com/assets/images/Modification_Tools.png)
**Modification Tools screen** – When an interesting model is selected for further analysis, the analysis continues by constructing additional models from attribute sets modified in an automatic or an interactive manner. The models are arranged in two graphs from which relations of different types and level of credibility are extracted.

#### Requirements
The HMDM program uses two external programs for drawing models and graphs:
- [Graphviz](http://www.graphviz.org)
- [Gnuplot](http://www.gnuplot.info)

For the HMDM program to work properly the two external programs should be installed first. When HMDM is installed, it will demand paths to the two programs’ “bin” folders. For example, C:\Program Files (x86)\Graphviz2.26.3\bin and C:\Program Files (x86)\gnuplot\bin. If wrong paths are selected, HMDM will work, but the models and graphs will be missing. In such case, check whether you correctly entered the paths in the Tools > Options.

The HMDM program was tested with the versions of Graphviz 2.26.3 and Gnuplot 4.6.

The HMDM program is written in Java and can run on multiple OS platforms. To this point, we were able to verify the program on Windows 7, 64-bit; Windows 8 64-bit; Ubuntu 13.04 64-bit; and Fedora 18 64-bit.

#### Download
HMDM can be used free of charge for non-commercial applications.

Current version of HMDM is 1.00 (released in November, 2013): [HMDM-1.00_setup.jar](http://vedranavidulin.com/assets/tools/HMDM-1.00_setup.jar)

#### Contributors
- Vedrana Vidulin – method, program design, programming, web page
- Matjaž Gams – method
- Jure Grabnar – programming, installation program

#### Acknowledgement
I would like to thank to Marko Bohanec for the ideas on how to improve the HMDM method.

I would also like to thank to the team behind Graphviz, Thomas Williams and Colin Kelley for making available a valuable tool such as Gnuplot, as well as to the Julien Ponge for IzPack, which we used for creating the installation program.
