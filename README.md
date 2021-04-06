# Complete Vue.js 3 (Inc Options + Composition API, Vue Router and Vuex)

![Image](https://img-a.udemycdn.com/course/750x422/3463716_36a0_4.jpg?hA2G48zHXcUOr-mlM_l9pY3ds0T54Idl4HuR6-MPLqY_70LaUZf1GD7XGzsNRt_aKYvjzn340Wc_ScRUrgm5KGPm7IgVQ8qllU3OW1umGe8DUS9UjEl68ImjwalAXwwx)

Hi! Welcome to my course on Vue.js 3. Let's have a great time learning Vue.js 3 🎉.

[Learn more here](https://vuejs-course.com/complete-vuejs), or buy it on [Gumroad](https://gumroad.com/l/complete-vuejs) or [Udemy](https://www.udemy.com/course/complete-vuejs-3-crash-course-composition-api-vue-router-vuex/?referralCode=765A6E679914BF6E60AF).

If you are sponsoring me on GitHub, even for just $1, please email or contact me - I'l send you a link to download all the lectures for free. :D

There are two branches:

- `master` is the completed source code
- `getting-started` is the minimal template to follow along from start

## Installation

I am using:

- node.js v12.18.3
- yarn 1.22.10

You can use whatever version, but I have only tested with those versions. Don't use yarn 2, it's really different to yarn 1.

`master` contains the completed code. Run projects with:

```
yarn vite --config vite.config.js <project>
```

## Getting Started

Either clone master and `yarn install`, or start with `getting-started` and:

```sh
yarn add vue@3.0.7
yarn add vite@2.1.1 --dev
```

## Fundamentals #1: Options API

Learn about the Options API and the basics of Vue.js.

## Project #1: Form Validation

- combining fundamentals to make something useful
- single file components!
- more v-model
- conditional rendering
- computed properties
- validation
- design patterns

## Project #2: Pokemon Evolutions

- fetching data with the Fetch API
- reuables components with <slot>
- class + style bindings
- emitting events
- thinking in Vue

## Fundamentals #2: Composition API

Learn about Vue 3's most exciting feature, the Composition API.

- ref
- reactive
- computed
- watch and watchEffect for side effects
- create your first "composable"
- check out VueUse

## Project #3: Microblog Application

Build a project using the Composition API to display posts and filter via hashtags. Build a global store.

- likes
- filter
- typing
- reusing components
- composables, global state
- design patterns

## Fundamentals #3: Vue Router

Learn about Vue Router for large, multi-page apps with client side routing - no refreshes.

- composition and options API usage
- highly complex applications
- seamless SPA experience

## Fundamentals #4: Vuex

Learn Vuex, the official state management solution for Vue.

- the flux pattern for state management
- problem: we need the state everywhere
- solution: global reactive store 

## Project #4: Capstone Project: Photo Album

Combine the Composition API, Vue Router and Vuex to build a large, complex application.

- combining everything
- slots
- desien patterns
- vue/vuex/vue-router
- optimizing with caching in Vuex
