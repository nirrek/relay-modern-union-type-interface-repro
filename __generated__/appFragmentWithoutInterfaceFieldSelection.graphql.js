/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type appFragmentWithoutInterfaceFieldSelection = {|
  +__typename: "A";
  +id: string;
  +uniqueToA: string;
|} | {|
  +__typename: "B";
  +id: string;
  +uniqueToB: string;
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other";
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "appFragmentWithoutInterfaceFieldSelection",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "B",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "uniqueToB",
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "A",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "uniqueToA",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "I"
};

module.exports = fragment;
