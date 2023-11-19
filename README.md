# Atlan Frontend Task: [Query Forge - Unleash the Power of SQL](https://query-forge.vercel.app/)
<br>

## Introduction

The given application is developed as a task for Atlan.  It gives users the ability to execute SQL queries in an online editor and examine the results of those queries' execution.

Toward the end of this text, there is also a discussion of the Problem Statement in depth.

## Js Framework and Major Packages
`React`, `Material UI`, `react-csv` and `notistack`.

## Data
The application utilizes a function, `generateRandomEntry()`, to create a dataset of 250 articles with attributes `id`, `title`, `view`, `category`, `date_published`, and `author_id`.

While the data is in the form of a JSON object, it is possible to use CSV files for the same purpose by utilizing an existing format conversion library or other logic.

## Page Speed and Optimisation

I have analyzed the page load time and its compliance with web standards using Google's Lighthouse tool and Page Speed Insights for all aspects of page optimization. I have cross-checked the same with GTMetrix as well. The Homepage and SQL Editor page load interactively in <strong>0.6 seconds</strong> on a laptop browser.

### 1. Page Load Time

I've calculated the page load time that is used here as the duration of time it takes for the website to be interactive, and in every instance that is displayed below, it is far less than Google's recommended time for desktop and mobile devices. As it enables consumers to begin surfing the website, it is, in my opinion, the most significant metric from their point of view.

In a subsequent section of the article, the detailed screenshots have been supplied together with the corresponding page load timings.

### 2. Page Load Time Optimization and Other Metrics

1. The application leverages lazy loading for components to <strong>enhance the initial page load speed</strong>. This means that certain components are loaded only when they are actually needed, reducing the initial payload and allowing for a quicker user interface response.

2. The website is made responsive to a great extent even though such an application is not very likely to be used on mobile devices.

3. The website is hosted on Vercel, which is regarded as one of the fastest free hosting mechanisms for JavaScript-based Web apps due to its CDN and caching features. It also offers free SSL while hosting, which is often better for page security and ranking.

4. Recognizing the potential size of query outputs, the application implements a <strong>pagination system</strong>. Instead of loading and rendering the entire dataset at once, the results are divided into manageable chunks. Users can navigate through different pages to view subsets of the data, providing a more efficient and responsive experience.

5. To further enhance performance, <strong>memoization and useCallback hooks</strong> are used at suitable places. Memoization is employed to cache the results of expensive calculations or computations, avoiding redundant calculations when the same data is needed again. The useCallback hook is used to memoize callback functions, ensuring that the same instance of the function is returned on subsequent renders, which can help prevent unnecessary re-renders of child components.

6. Minimal dependencies have been used for the creation of the page.

7. Restructured code to reuse components & used minimal imports where necessary.

[//]: # (## Features)

