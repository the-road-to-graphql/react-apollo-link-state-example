import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import './App.css';

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

const App = () => (
  <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
    {({ data, loading }) => {
      const { organization } = data;

      if (loading || !organization) {
        return <div>Loading ...</div>;
      }

      return (
        <ul>
          {organization.repositories.edges.map(({ node }) => {
            const isSelected = false;
            const rowClassName = ['row'];

            if (isSelected) {
              rowClassName.push('row_selected');
            }

            return (
              <li className={rowClassName.join(' ')} key={node.id}>
                <button
                  type="button"
                  onMouseOver={() => {}}
                  onClick={() => console.log('select', node.id)}
                >
                  {isSelected ? 'Unselect' : 'Select'}
                </button>{' '}
                {node.name}
              </li>
            );
          })}
        </ul>
      );
    }}
  </Query>
);

export default App;
