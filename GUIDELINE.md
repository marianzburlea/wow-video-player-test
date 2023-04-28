# NextJS React Project - Coding Guidelines

We are excited to have you join the NextJS React project! The coding principles that our team ought to follow are outlined in this paper, which will assist you in getting started with them. These rules are intended to make the code easier to read and maintain, as well as to simplify the onboarding process for new developers interested in contributing to the project. Please be sure to read over and strictly adhere to these requirements.

## Table of Contents

1. [Project Structure ↩](#project-structure)

   1. [Use singular and kebab-case for folder names](#use-singular-and-kebab-case-for-folder-names)
   1. [Implement Atomic Design principles](#implement-atomic-design-principles)
   1. [Consider using a linter](#consider-using-a-linter)

1. [Naming Files (kebab-case vs PascalCase) ↩](#naming-files)

   1. [Kebab-case vs PascalCase](#kebab-case-vs-pascalcase)
      1. [The benefits of the `kebab-case`](#the-benefits-of-the-kebab-case)
      1. [The drawbacks of the `kebab-case`](#the-drawbacks-of-the-kebab-case)
      1. [The benefits of using PascalCase](#the-benefits-of-using-pascalcase)
      1. [Negative Aspects of PascalCase](#negative-aspects-of-pascalcase)
   1. [Naming Files: Singular vs Plural](#naming-files-singular-vs-plural)
      1. [Why use singular names for files and folders](#why-use-singular-names-for-files-and-folders)
      1. [Advantages of using singular names](#advantages-of-using-singular-names)
      1. [Examples of using singular names](#examples-of-using-singular-names)
      1. [More examples of using singular names](#more-examples-of-using-singular-names)
      1. [Exceptions](#exceptions)
      1. [Issues with plurals, especially for non-native English speakers](#issues-with-plurals-especially-for-non-native-english-speakers)

1. [Component Design ↩](#component-design)
   1. [The Principle of Individual Accountability](#the-principle-of-individual-accountability)
   1. [Modularity](#modularity)
   1. [Comparing Stateless Components to Stateful Components](#comparing-stateless-components-to-stateful-components)
   1. [Props, in addition to TypeScript](#props-in-addition-to-typescript)
   1. [Components with Functional Purpose and React Hooks](#components-with-functional-purpose-and-react-hooks)
   1. [File Organisation](#file-organisation)
   1. [Conventions Regarding Naming](#conventions-regarding-naming)
   1. [Components With a Style](#components-with-a-style)
   1. [Accessibility](#accessibility)
   1. [Performance](#performance)
1. [React Hooks ↩](#react-hooks)
   1. [Built-in Hooks](#built-in-hooks)
   1. [useState](#usestate)
   1. [useEffect](#useeffect)
   1. [useContext](#usecontext)
   1. [useReducer](#usereducer)
   1. [useMemo](#usememo)
   1. [Customised Hooks](#customised-hooks)
   1. [The Guide to Using Hooks](#the-guide-to-using-hooks)
   1. [TypeScript in addition to Hooks.](#typescript-in-addition-to-hooks)
   1. [Testing Hooks](#testing-hooks)
1. [Apply Style using Styled Components ↩](#apply-style-using-styled-components)
   1. [The overall strategy](#the-overall-strategy)
   1. [Extract functions outside template literals](#extract-functions-outside-template-literals)
      1. [Reusability](#reusability)
      1. [Readability](#readability)
      1. [Modularity](#modularity)
      1. [Testability](#testability)
      1. [Performance](#performance)
1. [State Management ↩](#state-management)

   1. [Utilising useState to manage the local state of the component](#utilising-usestate-to-manage-the-local-state-of-the-component)
   1. [Utilising the createContext and useContext methods of the Context API](#utilising-the-createcontext-and-usecontext-methods-of-the-context-api)
   1. [Redux](#redux)
   1. [CSS State](#css-state)
      1. [HTML Structure](#html-structure)
      1. [CSS Trick](#css-trick)

1. [Best Practises and Important Considerations Regarding API Calls in React](#best-practises-and-important-considerations-regarding-api-calls-in-react)

   1. [Encapsulation](#encapsulation)
   1. [API Error handling](#api-error-handling)
   1. [Currently loading states](#currently-loading-states)
   1. [Caching ](#caching)
   1. [The combination of debouncing and throttling](#the-combination-of-debouncing-and-throttling)
   1. [API call cancellation](#api-call-cancellation)
   1. [Environment variables](#environment-variables)
   1. [API call side effects](#api-call-side-effects)
   1. [Rate limits](#rate-limits)
   1. [Security](#security)
   1. [Optimistic updates](#optimistic-updates)
   1. [Pagination and lazy loading](#pagination-and-lazy-loading)

1. [Performance in React and NextJS ↩](#performance-in-react-and-nextjs)
   1. [Optimise rendering](#optimise-rendering)
   1. [Minimise component state](#minimise-component-state)
   1. [Event handlers that debounce or throttle the event](#event-handlers-that-debounce-or-throttle-the-event)
   1. [Requests should be optimised for the network](#requests-should-be-optimised-for-the-network)
   1. [Server-Side Rendering (SSR) and Static Site Generation (SSG)](#server-side-rendering-ssr-and-static-site-generation-ssg)
   1. [Optimise images](#optimise-images)
   1. [Use code splitting](#use-code-splitting)
   1. [Optimise CSS](#optimise-css)
   1. [Keep an eye on performance](#keep-an-eye-on-performance)
   1. [Take advantage of the browser's saved data](#take-advantage-of-the-browsers-saved-data)

## Project Structure

Having a well-organized and clear project structure can make a big difference in how easily you and your team can navigate and maintain your codebase. Here are some best practices for organizing your Next.js project:

### Use singular and kebab-case for folder names:

To maintain coherence across the entirety of your project, be sure to give folders names in the singular and in kebab case. For instance, you should use `component` rather than `components`, and you should use `header-nav` rather than `headerNav`.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Implement Atomic Design principles:

Atomic Design is a methodology that may be used to organise as well as design user interfaces. It includes separating user interfaces into individual, reusable components and then organising those components into a hierarchy based on the level of difficulty they present. The following is an illustration of one possible structure for your project that you may create utilising the principles of Atomic Design:

```
src/
  component/
    index.ts
    atom/
      button/
        index.ts
        button.tsx
        button.style.ts
        button.type.ts
        __tests__/
          button.test.tsx
          button.style.test.ts
      input/
        index.ts
        input.tsx
        input.style.ts
        input.type.ts
        __tests__/
          input.test.tsx
          input.style.test.ts
      index.ts
    molecule/
      search-form/
        index.ts
        search-form.tsx
        search-form.style.ts
        search-form.type.ts
        __tests__/
          search-form.test.tsx
          search-form.style.test.ts
      index.ts
    organism/
      header/
        index.ts
        header.tsx
        header.style.ts
        header.type.ts
        __tests__/
          header.test.tsx
          header.style.test.ts
      footer/
        index.ts
        footer.tsx
        footer.style.ts
        footer.type.ts
        __tests__/
          footer.test.tsx
          footer.style.test.ts
      index.ts
    templates/
      home/
        index.ts
        home.tsx
        home.style.ts
        home.type.ts
        __tests__/
          home.test.tsx
          home.style.test.ts
      index.ts
```

Speaking of `atom`, as shown below, has a number of short and straightforward files of the component type within it. These can be assembled into more complicated components. When it comes to `molecule`, its structure is distinguished by the presence of more intricate folders of component type, each of which may contain many atoms or molecules as ingredients. The `organism` has even more intricate folders of component type that are built up of numerous atoms and molecules, and `template`s has complete pages and versions of those pages that are made up of organisms, molecules, and atoms.

Here are some examples of what you might include in each folder:

```
atom/
  button
  input
  icon
  label
  video
  box
  grid
  aspect-ratio
  global
  font
  spinner
  badge
  checkbox
  radio-button
  toggle-button
  tooltip
  toast
  avatar
  badge
  banner
  card
  carousel
  divider
  drawer
  modal
  popover
  progress
  range-slider
  switch
  text
molecule/
  search-form
  login-form
  product-card
  gallery
  dropdown
  slider
  progress-bar
  rating
  tab
  breadcrumb
  stepper
  calendar
  accordion
  notification
  feature-list
  feature-block
  list
  navbar
  pricing
  sidebar
  timeline
  timeline-event
  timeline-header
  tooltip-container
organism/
  header
  footer
  product-listing
  navigation
  checkout-form
  profile-page
  landing-page
  pricing-table
  search-results
  comment-section
  chat-app
  contact-form
  video-player
  hero
  testimonial
  team
  about
  stats
  content
  card-list
  grid-list
  tabs-container
template:
  home-page
  product-page
  category-page
  checkout-page
  login-page
  signup-page
  error-page
  dashboard-page
  about-page
  contact-page
  faq-page
  privacy-policy-page
  terms-of-service-page
  blog-page
  portfolio-page
  news-page
  resume-page
  job-listing-page
  help-center-page
  invoice-page
  report-page
```

You will be able to make it simpler to reuse components over the entirety of your project if you organise your components in this manner. Additionally, you will be able to ensure that your components are organised in a manner that is both logical and manageable.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Consider using a linter:

Consider utilising a linter to ensure that your project has a coding style and file organisation that are consistent throughout. Errors can be caught more easily this way, and your codebase will be more readable and manageable as a result.

If you follow these best practises, you can make sure that your Next.js project is well-organized and simple to navigate, which will make it simpler to manage and develop as time goes on.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## Naming Files

### Kebab-case vs PascalCase

Our team needs to decide whether it will use the PascalCase naming convention or the kebab-case naming convention when referring to file names. There is an ongoing discussion about whether or not utilising kebab-case or PascalCase is preferable, and we need to come to a decision about whether or not we believe that kebab-case is the better choice for our project when taking the following into consideration, or whether or not PascalCase is preferable:

#### The benefits of the `kebab-case`

1. **Utilised extensively throughout the community**: The name of files in libraries and frameworks uses `kebab-case` more than ninety percent of the time. This makes it simpler for developers to comprehend the project and adjust their work accordingly.

1. **URL compatibility**: Using `kebab-case` for file names translates nicely into URL paths, guaranteeing that visitors will have an easy time reading and comprehending URLs.

1. **Cross-platform compatibility**: `Kebab-case` is case-insensitive, which means it is more compatible with multiple file systems. This lowers the likelihood of encountering problems when working on other platforms, which is a benefit of the cross-platform compatibility feature.

1. **Readability**: Using `kebab-case` helps visually separate words in a file name, which makes it easier to read and comprehend the file's purpose.

#### The drawbacks of the `kebab-case`

Inconsistency in the naming of components: Since the PascalCase naming convention is used by React components, employing `kebab-case` for file names can lead to inconsistency in the naming of the components that are exported by those files.

### The benefits of using PascalCase

1. **Consistency in the naming of components**: Because React components are given their names in PascalCase, this naming convention produces a consistent naming pattern between the names of files and the components that those files export.

### Negative Aspects of PascalCase

1. Because PascalCase is not as widely used in the community, it is less familiar to developers coming from other projects. This is because PascalCase file names are not used by very many libraries or frameworks.

1. Problems with URLs and file systems Because PascalCase is case-sensitive, it is possible to run into problems when working with URLs and file systems, particularly when collaborating on cross-platform projects.

When it comes to naming files in a _Next.js_ project, it is crucial to keep in mind that the file names are defined by the operating system and not by the JavaScript code that is executing in the browser. This is something that should be kept in mind whenever naming files in a _Next.js_ project. This indicates that you are not constrained by the same naming rules that you may encounter when naming variables in your code. Instead, you have complete freedom in this regard. You are free to use any valid file name that your operating system will allow you to create.

However, despite the fact that you are not constrained by the same limitations as you are when naming variables in JavaScript, it is still crucial to be consistent in your file naming conventions in order to guarantee that your project is simple to manage and maintain. The use of kebab-case for file names is a practise that is frequently implemented in Next.js projects. This includes separating each words in a file name with hyphens, as in the examples `about-us.tsx` and `contact-form.tsx`. This convention is not only simple to read and comprehend, but it also helps to ensure that the titles of your files are constant and simple to keep in your head.

Using `kebab-case` for file names can have benefits for search engine optimisation (SEO), in addition to the consistency benefits it already provides. When it comes to establishing the relevancy of web sites and where those pages should be ranked in search results, search engines like Google and Bing take into account the URLs of such pages as one of the considerations. Because it separates the words in your URLs and makes them easier to read and understand, using `kebab-case` for your file names can help search engines understand the content of your pages with greater confidence. This can be accomplished by changing the file names to use `kebab-case`.

Although you are not constrained by the same constraints as when naming variables in JavaScript, it is still necessary to be consistent and use a naming convention that makes your files easy to navigate and maintain. Even if you are not constrained by the same rules, it is still important to be consistent and use a naming convention. Because naming your files using the `kebab-case` convention, which is a practise that is often used in Next.js projects and can also have benefits for search engine optimisation, is a solid decision.

After weighing the benefits and drawbacks of each option, the members of our team need to settle on whether to use the `kebab-case` naming convention for file names or to continue making use of the needless PascalCase.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Naming Files: Singular vs Plural

#### Why use singular names for files and folders

In software development, it's important to follow a consistent naming convention for files and folders. One such convention is to use singular names for files and folders. The following sections explain why this approach is beneficial and provide examples.

##### Advantages of using singular names

1. **Defining the type of contents**: Using singular names helps define the type of contents rather than the count of contents. This keeps the focus on the purpose and functionality of the files and folders, rather than the quantity of items within them.
2. **Easier to understand**: Singular names are easier to understand and reason about, as they represent a single entity or concept. This can help developers quickly grasp the purpose of a file or folder.
3. **Consistency**: Using a consistent naming convention across the entire project makes it easier for developers to navigate and understand the codebase. By using singular names for all files and folders, the naming convention becomes more uniform and predictable.
4. **Reduces ambiguity**: In some cases, using plural names can introduce ambiguity, as it might not be clear whether the name refers to a single entity or a collection. By using singular names, this ambiguity is reduced.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Examples of using singular names

- `component` instead of `components`: A folder named `component` indicates that it contains files related to React components. By using the singular form, we emphasize the purpose of the folder, which is to store files related to a specific type of functionality (i.e., React components).
- `css` instead of `csses`: A folder named `css` suggests that it contains CSS files. The singular form helps to indicate that the folder is dedicated to storing CSS-related files, rather than focusing on the number of files within the folder.
- `hook` instead of `hooks`: Similarly, a folder named `hook` indicates that it contains custom hooks for the project. The singular form helps clarify the purpose of the folder, which is to store files related to custom hooks.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### More examples of using singular names

- `service` instead of `services`: A folder named `service` suggests that it contains service files that encapsulate business logic or API calls. Using the singular form keeps the focus on the type of files within the folder.
- `middleware` instead of `middlewares`: A folder named `middleware` implies that it contains middleware functions. The singular form emphasizes the purpose of the folder, which is to store middleware-related files.
- `model` instead of `models`: A folder named `model` indicates that it contains data models or schemas. The singular form helps clarify the purpose of the folder, which is to store files related to data models.
- `asset` instead of `assets`: A folder named `asset` suggests that it contains static assets, such as images, fonts, and icons. The singular form keeps the focus on the type of files within the folder.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Exceptions

There are a few exceptions to this rule, usually due to the nature of the term itself:

- `news`: In this case, the word "news" is a mass noun and has no singular form. It's acceptable to use "news" as a folder or file name.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Issues with plurals, especially for non-native English speakers

Using plurals can lead to confusion and inconsistencies, particularly for non-native English speakers. Here are some examples of potential issues:

- Confusing plural forms: English has irregular plural forms, such as "child" (singular) and "children" (plural). A non-native English speaker might mistakenly use "childs" or "childrens" when naming a folder or file.
- Inconsistent pluralization: Non-native English speakers might apply their native language's pluralization rules to English words, leading to incorrect or inconsistent folder and file names. For example, a developer might use "mice" instead of "mouse" when pluralizing the word "mouse".
- Ambiguity: Using plurals can introduce ambiguity when working with a team of developers from diverse linguistic backgrounds. For example, a folder named "children" could be interpreted as containing files related to multiple "child" entities, while a folder named "child" clearly indicates that it contains files related to a single "child" entity.

By using singular names for files and folders, we can avoid these potential issues and create a more consistent, easy-to-understand, and unambiguous naming convention for developers from all linguistic backgrounds.

By using singular names for files and folders, we can create a consistent, easy-to-understand, and unambiguous naming convention that focuses on the type of contents rather than the count of contents.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## Component Design

Modularity, reusability, and simplicity of upkeep are all desirable qualities in a well-designed component. If you follow the rules that are provided below, you will have an easier time creating components that are in line with these ideas.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### The Principle of Individual Accountability

It is important that each component fulfil only one responsibility or function. Because of this, it is simpler to comprehend, test, and manage the components. If a component begins to perform several duties, you might want to consider dividing it up into several smaller components that each have a more specific purpose.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Modularity

Create simpler, more manageable interfaces by breaking down complex UIs into their component parts. This not only encourages reusability but also makes it simpler to upgrade or replace individual components without having an effect on the user interface as a whole.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Comparing Stateless Components to Stateful Components

Stateless components, also known as "dumb" or "presentational" components, should be favoured over stateful components, which are also known as "smart" or "container" components. Stateless components do not manage state and are just responsible for rendering UI elements and receiving props from other components. Stateful components manage state and are responsible for handling side effects. You can improve reusability and testability by maintaining the statelessness of components wherever it is practical to do so.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Props, in addition to TypeScript

Props are what you should be using to send data and event handlers farther down the component tree. Make sure that components have a well-defined interface, and use TypeScript so that strong typing can be enforced for the props that are received. Define interfaces or types for your props so that maintainability may be improved and the risk of runtime problems can be decreased. When possible, avoid passing too many props down numerous layers of the component tree. Instead, fall back on context or state management solutions.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Components with Functional Purpose and React Hooks

Instead of class components, you should use functional components and hooks provided by React. Functional components allow you to manage state and side effects via hooks, are more concise, and are easier to comprehend than non-functional components.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### File Organisation

You should use a folder structure that corresponds to the component hierarchy in order to organise your components in a manner that is consistent with logic. It is best practise to keep all components, styles, and other resources that are related together in the same folder.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Conventions Regarding Naming

Maintain a naming standard that is consistent across all of your components and the files that belong to them. As was covered in the section on [Naming Files](#naming-files), you should use PascalCase for naming components, while kebab-case should be used for naming files.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Components With a Style

Create reusable, styled components with the help of styled-components. These components will encapsulate the structure of the component as well as its styles. This strategy encourages better separation of concerns, does away with the requirement for CSS class names, and paves the way for a styling system that is more dynamic and flexible.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Accessibility

Follow the best practises for keyboard navigation, attention management, and semantic HTML to make sure that your components are accessible. If you want to improve the accessibility of your components, use ARIA attributes when it's appropriate to do so.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Performance

It is important to be cautious of the efficiency of your components, especially when rendering vast lists or sophisticated user interfaces. To enhance the quality of the user experience as a whole and reduce the number of renderings that aren't essential, performance optimisation strategies such as memoization, virtualization, and others should be utilised.

You can construct well-designed components that are modular, reusable, and easy to maintain if you follow those standards, which will ultimately lead to a codebase that is more robust and manageable.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## React Hooks

Hooks in React are methods that let you manage the state of functional components as well as any side effects they produce. You can design components that are simpler, more concise, and easier to comprehend by making use of hooks rather than having to rely on class components. In the following sections, instructions for making efficient use of React hooks are provided.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Built-in Hooks

Get familiar with the built-in hooks that are supplied by React. Some examples of these built-in hooks include useState, useEffect, useContext, useReducer, and useMemo. The majority of the most popular use cases for state management and side effects are covered by these hooks.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### useState

If a component needs its local state managed, use the `useState` function. `useState` will return an array with the current value of the state as well as a method that can be used to update it. When updating state, you should never directly change the current state value; instead, you should make use of the update function that `useState` provides.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### useEffect

Use the `useEffect` method for managing side effects, such as retrieving data or managing timers or subscriptions. `useEffect` requires the specification of a callback function, which is then carried out once the component has finished rendering. As the second argument, you should give an array of dependencies so that you can control when the effect should run. Return a cleanup method from the callback if the effect requires cleaning up after it has been applied.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### useContext

The consumption of context values that are supplied by a context provider located further up in the component tree is accomplished through the use of `useContext`. This may assist reduce the amount of time spent digging props and may also make it simpler to transfer state between components.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### useReducer

If you need to manage a more complex state that consists of several actions and transitions, utilise the `useReducer` method. `useReducer` is quite similar to useState, except instead of using a state update handler, it makes use of a reducer function. Because of this, state management could become more predictable and simpler to verify.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### useMemo

Memorising time-consuming calculations or objects that are dependant on certain inputs can be accomplished with `useMemo`. You will be able to increase performance and avoid unnecessary recalculations if you utilise the `useMemo` hook.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Customised Hooks

To encapsulate reusable logic or side effects, you can create your own custom hooks. The organisation of the code, its testability, and its maintainability can all be improved with the use of custom hooks. To name custom hooks in a way that adheres to the conventions for hook names, prefix them with the word "use."

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### The Guide to Using Hooks

Be sure to use hooks correctly by abiding by the "Rules of Hooks," which are a set of important guidelines:

- Calling hooks is only allowed at the highest level of your functional components or in your custom hooks.
- Never call hooks from within standard JavaScript methods; instead, you should only do so from within React functional components or custom hooks.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### TypeScript in addition to Hooks.

Make sure that you give the correct types for your state variables, reducers, and custom hooks when you are using TypeScript with hooks. This can assist in the early detection of potential mistakes and increase the maintainability of your code as a whole.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Testing Hooks

Utilise testing libraries like Enzyme and the React Testing Library to validate both your custom hooks and the components of your application that make use of hooks. Create unit tests for your custom hooks, and make sure that their behaviour is as expected when the state or effects are altered.

By adhering to these recommendations, you will be able to make efficient use of React hooks, which will allow you to design functional components that are both more concise and easier to maintain.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## Apply Style using Styled Components

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### The overall strategy

Utilise the well-known CSS-in-JS package known as Styled Components in order to construct React components with dynamic and scoped styling. The ability to write CSS directly in your JavaScript code is made available to you by Styled Components. As a result, it is much simpler to manage the styles for your components.

The following is a concise summary of the ways in which Styled Components are utilised in the code examples:

1. At the start of your code, import the styled function from the'styled-components' library.
1. Create a styled component by calling the styled function followed by the HTML element you wish to style. For example, you could use styled.div, styled.button, or styled.p. There are a variety of options available. You can do this by making use of a template literal, which enables you to create CSS directly in the JavaScript code that you are working with.
1. Send props to the styled component, and then utilise those props to apply dynamic styles that are based on the values that were sent. For instance, based on the properties, you can modify the colour of the backdrop, the size of the typography, or the padding.
1. You should export the styled components in order to make them available for use in other areas of your project.

You are able to construct components that have dynamic and scoped styles when you use Styled Components. This makes it much simpler for you to manage and maintain your stylesheets. This method also encourages reusability and modularity in your application because it allows you to build a library of styled components that can be implemented anywhere in the project.

### Extract functions outside template literals

#### Reusability

You will be able to reuse the functions in numerous components if you extract them from the stylized components and place them in a separate file. This helps to encourage the DRY (Don't Repeat Yourself) concept and minimises the amount of code repetition, both of which contribute to your codebase being easier to maintain.

```
const getVertical = ({ $vertical }) =>
  $vertical ? `flex-direction: column;` : "";

const Box = styled.div`
  display: flex;
  ${getVertical}
`;

const AnotherBox = styled.div`
  display: flex;
  ${getVertical}
`;
```

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Readability

The code is made much more accessible and straightforward to comprehend when the template literals and functions are kept in separate locations. It makes the stylized component less complicated, which makes it easier for developers to understand the component's styling logic.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Modularity

Increasing the modularity of your programme can be accomplished by extracting functions outside of the styled-components. One way to think about each function is as a separate building block, each of which may be easily coupled with others to produce a wide variety of styles. Because of this, code management and organisation can be simplified and improved.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Testability

You will be able to write unit tests for each of these individual functions if you extract the functions first. This will ensure that the functions are working correctly and will also increase the general stability of your application.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

#### Performance

The efficiency of your application may be improved by separating functions that are not contained within the template literals. Because the functions are specified outside of the component, they do not need to be rebuilt each time the component is presented, which results in a reduction in unnecessary overhead.

Your codebase will see improvements in its readability, reusability, modularity, testability, and efficiency if you separate functions from the template literals of styled-components. It is a best practise that should be followed in order to keep a codebase that is both scalable and maintainable.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## State Management

In the process of designing online applications, state management is a vital aspect, particularly when working with complex and interactive user interfaces (UIs). It is the process of managing and organising the state or data that is contained within your application, as well as keeping track of how the state or data changes over the course of time. There are a number of different approaches to state management that may be utilised, but I will present an in-depth explanation utilising React as an illustration.

The built-in state management options provided by React include local component state (through the useState API), context API (via the createContext and useContext APIs), and, for more complicated applications, libraries such as Redux and MobX may be utilised.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Utilising useState to manage the local state of the component

When it comes to managing the state of a React component, the useState hook is the most fundamental and straightforward method. You are able to add state to functional components and handle transitions between states with its help.

```javascript
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
```

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Utilising the createContext and useContext methods of the Context API

In React, a built-in solution for handling global state or state that needs to be shared among several components is called the Context API.

```javascript
import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};
```

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Redux

A well-known library for managing states, Redux is frequently employed in conjunction with React. It gives you access to a centralised store where you can manage the application's state and enables you to dispatch actions using reducers that will change the state.

```javascript
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Creators
const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const decrement = () => dispatch(decrement());
  const increment = () => dispatch(increment());

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
```

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### CSS State

In this example, I will demonstrate how to maintain the state of a UI with CSS by utilising the input type checkbox, as well as making use of the CSS sibling and adjacent selectors. Using this method, it is possible to create interactive UI components without having to rely on JavaScript to control the state of the components.

#### Maintaining the state of the user interface using CSS by Using Checkboxes and Sibling Selectors

By utilising the input type checkbox and CSS sibling selectors to hold the UI state rather than relying on JavaScript for state management, this method enables you to create interactive UI components. You can do this by avoiding the need of JavaScript.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

##### HTML Structure

To begin, the HTML structure needs to be set up. Inside of a container div, we will place a label and an input consisting of a checkbox. The content that you can choose to show or hide will be positioned inside of another div.

```html
<div class="container">
  <input type="checkbox" id="toggle" class="toggle-checkbox" />
  <label for="toggle" class="toggle-label">Toggle Content</label>
  <div class="content">
    This content will be shown or hidden based on the checkbox state.
  </div>
</div>
```

[⇧ Back to Table of Contents ⇧](#table-of-contents)

###### CSS Trick

Modify the appearance of the components as you see fit. The most important step is to combine the checked _pseudo-class_ with the sibling selector (~) in order to direct the focus of the page to the content div whenever the checkbox is selected.

```css
/* Hide the checkbox */
.toggle-checkbox {
  position: absolute;
  opacity: 0;
  visibility: hidden;
}

/* Style the label as a button or toggle */
.toggle-label {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

/* Hide the content by default */
.content {
  display: none;
}

/* Show the content when the checkbox is checked */
.toggle-checkbox:checked ~ .content {
  display: block;
}
```

Now, the visibility of the content will be determined by the checked status of the checkboxes, and the UI state will be maintained purely by CSS, eliminating the need for JavaScript in the process.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## Best Practises and Important Considerations Regarding API Calls in React

Best Practises and Important Considerations Regarding API Calls in React
When developing a React application that makes calls to APIs, there are a number of recommended practises and important factors to keep in mind:

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Encapsulation

API calls should be encased in their own functions, modules, or custom hooks whenever possible. This encourages reusability of code and makes it easier to maintain. You will be able to simply alter or amend your API calls if you organise them in a centralised area so that they are out of the way of the other components of your application.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### API Error handling

problems should be handled in a dignified manner by adding appropriate error handling techniques, such as try-catch blocks, and informing users of the specifics of any problems that have occurred. This not only provides a better experience for users but also makes it easier to diagnose problems and find solutions to them.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Currently loading states

It is important to provide users with feedback when they are calling APIs by displaying loading indications or placeholders. This keeps users informed about the status of data fetching and helps reduce confusion or annoyance during times of waiting. Users are kept updated about the process of data fetching.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Caching 

By using caching strategies, you can save and reuse data that has previously been fetched, which in turn reduces the number of requests that are made to the API and improves performance. Depending on the needs of your application, caching can be performed at a variety of different levels, including in-memory caching, caching in local storage, and even caching on the server side.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### The combination of debouncing and throttling

If you are employing API calls that are dependent on the input of users, you should think about using debouncing or throttling mechanisms in order to stop making too many requests. The execution of a function can be delayed using debouncing until a predetermined amount of time has elapsed since the function's most recent call, while the pace at which a function is executed can be throttled using throttling.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### API call cancellation

When there is no longer a requirement for pending API calls, such as when a user navigates away from a component, you should cancel those calls. This can assist prevent requests that aren't necessary and cut down on the amount of resources used. In order to accomplish this goal, you can make use of resources such as Axios' cancellation tokens or the native AbortController API.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Environment variables

You should save API keys and other sensitive information in environment variables so that they are kept safe and are not mixed up with your code. This makes it easy to handle diverse environments, such as development, staging, and production, and helps protect sensitive data.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### API call side effects

API calls should be placed in the relevant lifecycle methods or hooks, such as componentDidMount or useEffect, in order to guarantee that they will be executed at the appropriate time and will not result in any unwanted consequences. Your application's overall performance may benefit from this clean separation of concerns, which also helps protect the application's integrity.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Rate limits

It is important to be aware of the rate limits of the API and to design your application such that it respects these limits. If you exceed the rate limits, you may have your requests blocked, your performance suffer, or possibly be banned temporarily or permanently. To deal with rate-limited circumstances, you can tackle them by implementing methods such as exponential backoff, retries, or request queues.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Security

Your API requests and the user data they contain should be protected from unauthorised access by putting in place appropriate security measures such as CORS (Cross-Origin Resource Sharing), CSRF (Cross-Site Request Forgery) protection, and HTTPS. These precautions protect not only your application but also the users of your application against any potential assaults or data breaches.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Optimistic updates

To improve how people view your performance, you might want to consider using positive updates. In this method, the user interface (UI) is updated immediately after an action is taken by the user. It is presumed that the API call will be successful, and the change is rolled back if an error occurs. Your application may feel more responsive to users if you implement some optimistic updates, which can also boost their level of pleasure.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Pagination and lazy loading

Implementing pagination and lazy loading when working with huge data sets will cut down on the amount of data that is fetched all at once, which will enhance performance. While pagination divides data into smaller parts, lazy loading retrieves data only when it is required, such as when a user scrolls down a page. Pagination is often used in conjunction with lazy loading.

If you follow these best practises and considerations, you will be able to construct React apps that interact with APIs in a manner that is more effective, maintainable, and user-friendly.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

## Performance in React and NextJS

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Optimise rendering

- Make use of the React.memo api to avoid performing pointless re-renders of functional components. It makes a comparison between the old props and the new props and only re-renders the component if the props have been modified.
- Reduce huge components to bits that are more manageable in size and scope. Because of this, readability, maintainability, and performance may all see an increase as a direct result of the decreased amount of work performed during each render cycle.
- It is best to avoid include inline functions or objects in JSX props because doing so would result in wasteful re-rendering. This is because the inline functions or objects will be produced on each render, which will cause the prop comparison to fail.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Minimise component state

- Maintain a simple and focused state for the component. Keep in storage just the information that is strictly required for the component to perform its function.
- Make use of the local state for user interface interactions and short-lived data, such as form inputs and dropdown state changes. This might make the component easier to understand and cut down on the number of renderings that aren't essential.
- Avoid utilising state for data structures that are sophisticated and would be better served by a state management solution such as Redux or MobX. These libraries make it possible to more effectively manage the global state of numerous components and to avoid rendering those components more than necessary.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Event handlers that debounce or throttle the event

- Limiting the frequency of event handlers like as onChange, onScroll, or onResize can be accomplished with the help of the debounce or throttle routines. This can help to increase the overall speed of your application as well as lessen the amount of work that has to be done when events that occur quickly and repeatedly.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Requests should be optimised for the network

- You may cache and manage the data fetching process by utilising the SWR library or React Query. The efficiency of your application as well as the experience it provides its users can be improved with the help of these libraries, which include capabilities like as caching, refetching, and background fetching.
- Make use of the Next.js API routes for data retrieval and caching on the server side. This can help to improve response times while also reducing the burden that is placed on your backend.
- You can optimise your requests to the API by retrieving only the data that you require, as well as by using pagination or slow loading. Your application's overall performance may benefit from this, as the amount of data that is transmitted over the network may be reduced as a result.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Server-Side Rendering (SSR) and Static Site Generation (SSG)

- In order to pre-render pages and speed up the first load, you can make use of many functionalities provided by Next.js, such as getStaticProps, getServerSideProps, and getStaticPaths. Your application's performance may be improved as a result of this because it will require less rendering to be done on the client's side.
- Your use case and the trade-offs you are willing to make between performance, SEO, and up-to-date content will determine whether you should utilise SSR or SSG. While SSG may be able to deliver improved performance and SEO benefits, SSR may be able to provide information that is more up to date.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Optimise images

- Make use of the next/image component to automatically resize and optimise the photos you upload. The performance of your application may also increase as a result of this, in addition to the size of your photographs being reduced.
- Utilise a Content Delivery Network, often known as a CDN, to serve images more quickly. Users are able to download assets from the server that is geographically nearest to them thanks to CDNs, which distribute your material over numerous servers located in different parts of the world.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Use code splitting

- Take advantage of the automatic code splitting and dynamic imports that Next.js provides in order to load only the code that is required for a particular page or component. This may assist to shorten the amount of time required for your application to load for the first time.
- For lazy loading of components only when they are required, use the React.lazy api. Because of this, the speed of your application may be improved because components will only load when they are either visible to the user or requested by the user.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Optimise CSS

- Reduce the amount of global CSS you use and consider switching to a solution that uses CSS Modules or CSS-in-JS, such as styled-components or Emotion. These libraries produce distinct class names, which can assist in lowering the number of CSS conflicts and improving overall efficiency.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Keep an eye on performance

- Measure the performance of your application with the help of tools such as Google Lighthouse or WebPageTest so you can locate places where you may make improvements.
- Utilising performance monitoring tools like as Sentry or New Relic will allow you to keep track of how well your application is performing over time. Using these tools, you will be able to track performance issues and spot trends that could have an impact on the performance of your application.

[⇧ Back to Table of Contents ⇧](#table-of-contents)

### Take advantage of the browser's saved data

- Cache static assets such as pictures, stylesheets, and scripts by configuring your server or content delivery network (CDN) to do so. The amount of time it takes for your application to load could be shortened as a result of this, which would also assist minimise the number of requests sent to the server.
- Client-side caching of assets and API replies can be accomplished with the help of a service worker. This can assist to enhance the performance of your application by lowering the amount of data that must be transmitted over the network and eliminating the requirement for rendering to take place on the server.

[⇧ Back to Table of Contents ⇧](#table-of-contents)
