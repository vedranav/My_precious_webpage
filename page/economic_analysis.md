---
layout: page
title: Data Sets Constructed for Economic Analysis
permalink: /economic-analysis/
type: page2
comments: true
---

* content
{:toc}

#### Data
We collected data representing the high-level knowledge sectors from several statistical databases provided by the following:
- [UNESCO Institute for Statistics](http://uis.unesco.org/)
- [WIPO](http://www.wipo.int/)

The data is comprised of:
- 108 numerical attributes: 48 describing inputs (personnel and financial resources) and outputs of R&D sector and 60 describing higher education sector
- 167 examples – countries

#### Class
The economic welfare is represented with the attribute GNI per capita, calculated according to the World Bank Atlas method.

GNI stands for Gross National Income and represents the total value of goods and services produced within a country.

GNI per capita was collected from [The World Bank](http://www.worldbank.org/) database in two forms:
- numerical – in US$
- discrete:
  - low – $745 or less (2001); $1005 or less (2010)
  - middle – $746-9,205 (2001); $1006-12,276 (2010)
  - high – $9,206 or more (2001); $12,277 or more (2010)

#### Description of attributes
- [R&D attributes](http://vedranavidulin.com/assets/pdfs/rd_attributes.pdf)
- [Higher education attributes](http://vedranavidulin.com/assets/pdfs/higher-education-attributes.pdf)

#### Data sets
Data was collected for the years 2001 and 2010. Since countries are not obliged to report all of the data every year, significant proportion of values were missing. In the case of 2001 data, the problem was alleviated with approximation technique – a missing value was substituted with a value for the closest year available from the time interval between 1999 and 2006. In the case of 2010 data, the problem was alleviated by retaining only those examples/countries with less missing values.

The 2010 data was intended for testing. It contains the same set of attributes and modifications as the 2001 data. The 2010 data sets are marked with that year. All other data sets contain data for 2001.

Besides “standard” data sets that contain attributes collected from the statistical databases, there are two types of data sets that contain constructed attributes. The data sets marked as “modified” contain the attributes constructed by a human to test the hypotheses posed during preliminary analysis with the “standard” data (while executing Human-Machine Data Mining interactive algorithm). In contrast, the data sets marked as “constructed” contain automatically constructed attributes, which are obtained by executing sum, min and max functions on pairs of attributes.

<div class = "table-wrapper" markdown = "block">

| name                                | num.       | nom. | ex. | class              | download                                                                                                                                                                                                                                    |
:-------------------------------------|-----------:|-----:|----:|:------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Higher education                    | 60   | 0    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-60-167-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-60-167-Discrete.arff.zip)                                                                                                          |
| Higher education-modified           | 43   | 6    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-49-167-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-49-167-Discrete.arff.zip), [description of modifications](/files/higher-education-attributes-description-of-the-modifications.pdf) |
| Higher education-modified           | 40   | 0    | 167 | numerical (1,2,3)  | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-40-167-Numerical_123.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-40-167-Numerical_123.arff.zip)                                                                                                |
| Higher education-constructed        | 5370 | 0    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-5370-167-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-5370-167-Discrete.arff.zip)                                                                                                      |
| Higher education-2010               | 60   | 0    | 125 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-60-125-Discrete-2010.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-60-125-Discrete-2010.arff.zip)                                                                                                |
| Higher education-modified-2010      | 43   | 6    | 125 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-49-125-Discrete-2010.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-49-125-Discrete-2010.arff.zip)                                                                                                |
| Higher education-constructed-2010   | 5370 | 0    | 125 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-5370-125-Discrete-2010.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/Higher-Education-5370-125-Discrete-2010.arff.zip)                                                                                            |
| R&D                                 | 48   | 0    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-167-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-167-Discrete.arff.zip)                                                                                                                                    |
| R&D                                 | 48   | 0    | 104 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-104-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-104-Discrete.arff.zip)                                                                                                                                    |
| R&D                                 | 48   | 0    | 104 | numerical (1,2,3)  | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-104-Numerical_123.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-104-Numerical_123.arff.zip)                                                                                                                          |
| R&D-modified                        | 62   | 5    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-67-167-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-67-167-Discrete.arff.zip), [description of modifications](/files/research_and_development-attributes-description_of_modifications.pdf)                       |
| R&D-constructed                     | 3432 | 0    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-3432-167-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-3432-167-Discrete.arff.zip)                                                                                                                                |
| R&D-2010                            | 48   | 0    | 78  | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-78-Discrete-2010.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-48-78-Discrete-2010.arff.zip)                                                                                                                            |
| R&D-modified-2010                   | 62   | 5    | 78  | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-67-78-Discrete-2010.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-67-78-Discrete-2010.arff.zip)                                                                                                                            |
| R&D-constructed-2010                | 3432 | 0    | 78  | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/R&D-3432-78-Discrete-2010.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/R&D-3432-78-Discrete-2010.arff.zip)                                                                                                                        |
| High-level knowledge                | 108  | 0    | 167 | discrete           | [csv](http://vedranavidulin.com/assets/data/macroeconomic/High-level_Knowledge-Discrete.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/High-level_Knowledge-Discrete.arff.zip)                                                                                                            |
| High-level knowledge                | 108  | 0    | 167 | numerical (in US$) | [csv](http://vedranavidulin.com/assets/data/macroeconomic/High-level_Knowledge-Numerical.csv.zip), [arff](http://vedranavidulin.com/assets/data/macroeconomic/High-level_Knowledge-Numerical.arff.zip)                                                                                                          |

</div>

In the table:
- num. = numerical attributes
- nom. = nominal attributes
- ex. = examples
- numerical (1,2,3) = numerical class obtained by encoding the values of the discrete class: low as 1, middle as 2, and high as 3

#### Publications
Vidulin V., Bohanec M., Gams M. (2014) Combining human analysis and machine data mining to obtain credible data relations. *Information Sciences*, 288, 254-278.<br>
[pdf](http://vedranavidulin.com/assets/publications/journals/j.ins.2014.08.014.pdf)

Vidulin V. (2012) Searching for credible relations in machine learning, PhD Thesis, Jožef Stefan International Postgraduate School, Ljubljana, Slovenia.<br>
[pdf](http://vedranavidulin.com/assets/publications/theses/Vidulin-PhD.pdf)

Vidulin V., Gams M. (2011) Impact of high-level knowledge on economic welfare through interactive data mining. *Applied Artificial Intelligence*, 25(4), 267-291.<br>
[pdf](http://vedranavidulin.com/assets/publications/journals/Vidulin-Gams-Applied_Artificial_Intelligence-2011.pdf)
