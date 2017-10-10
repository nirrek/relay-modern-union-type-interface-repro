// The generated flow type won't be a union type :(
graphql`
  fragment appFragmentWithInterfaceFieldSelection on I {
    __typename
    id
    ... on A {
      uniqueToA
    }
    ... on B {
      uniqueToB
    }
  }
`;

// The generated flow type will be a union type
graphql`
  fragment appFragmentWithoutInterfaceFieldSelection on I {
    __typename
    ... on A {
      id
      uniqueToA
    }
    ... on B {
      id
      uniqueToB
    }
  }
`;
