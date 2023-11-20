# Atlan Frontend Task: [Query Forge - Unleash the Power of SQL](https://query-forge.vercel.app/)
<br>

## Introduction

The given application is developed as a task for Atlan. It gives users the ability to execute SQL queries in an online editor and examine the results of those queries' execution.

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

## Features

### 1. Available Queries

The application provides users with a diverse set of <strong>17 predefined queries</strong>, each carefully designed to showcase various aspects of SQL functionality. These queries range from simple to complex, allowing users to explore, understand the capabilities of the application and get required results from the data.

### 2. Execution of Queries

The heart of the SQL Query Web Application lies in the efficient execution of SQL queries on the provided dataset. The `getQueryOutput()` processes and filters data based on a given query object.

#### Handling Multiple Queries

- The `getQueryOutput()` is designed to seamlessly handle multiple queries. Users can sequentially execute different queries, and each execution operates on the original dataset, ensuring that the query and data are always in sync. This approach provides consistent and reliable results, regardless of the order of execution.

- Users can experiment with the 17 predefined queries, which are strategically ordered from simple to complex.

#### Complexity Gradation

- The application's predefined queries follow a logical progression of complexity. Users can witness the gradual introduction of advanced SQL features, enabling a learning-oriented experience.

This detailed execution process ensures that the SQL Query Web Application delivers accurate and efficient results, making it a powerful tool for exploring SQL queries on diverse datasets.

## Page Load Time Measurement (Lighthouse Report)

### Home page
<img width="100%" alt="Lighthouse Screenshot Home Screen" src="https://github.com/roshanchatei/query-forge/assets/83601217/ff115e07-306a-449e-8792-aa04ebeff29b">

### Editor page
<img width="100%" alt="Lighthouse Screenshot Editor Screen" src="https://github.com/roshanchatei/query-forge/assets/83601217/0fe5f57e-9d2b-48d7-bf15-72506c6d2dd4">

## Screenshots

<img width="100%" alt="Lighthouse Screenshot Editor Screen" src="https://github.com/roshanchatei/query-forge/assets/83601217/1b7d9c47-3795-43c6-b9cc-46d8a1fc4bdf">
<img width="100%" alt="Lighthouse Screenshot Editor Screen" src="https://github.com/roshanchatei/query-forge/assets/83601217/670835f6-f4ea-4f40-9a4b-cb362c1f88ff">

## Problem Statement

Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

## 👨‍💻 Contributor

<table>
  <tr>
    <td align="center"><a href="https://github.com/roshanchatei"><img src="https://avatars.githubusercontent.com/u/83601217?v=4" width="70px;" alt="" style="border-radius:50%"/><br /><sub><b>Roshan Chatei</b></sub></a><br /></td>  
  </tr>
</table>







