# react-apollo-link-state-example

[![Build Status](https://travis-ci.org/the-road-to-graphql/react-apollo-link-state-example.svg?branch=master)](https://travis-ci.org/the-road-to-graphql/react-apollo-link-state-example) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/)

A React application using Apollo Client with [apollo-link-state](https://www.apollographql.com/docs/link/links/state.html) for local state management. While **apollo-link-state (as alternative to React's local state, Redux or MobX)** is used to manage selected items in a list as local data, the remaining queries and mutations are used for remote data.

## Installation

* `git clone git@github.com:the-road-to-graphql/react-apollo-link-state-example.git`
* cd react-apollo-link-state-example
* npm install
* [add your own REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN in .env file](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
  * scopes/permissions you need to check: admin:org, repo, user, notifications
* npm start
* visit `http://localhost:3000`

## Want to learn more about React + GraphQL + Apollo?

* Don't miss [upcoming Tutorials and Courses](https://www.getrevue.co/profile/rwieruch)
* Check out current [React Courses](https://roadtoreact.com)
