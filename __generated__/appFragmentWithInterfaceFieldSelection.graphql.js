/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type appFragmentWithInterfaceFieldSelection = {|
  +__typename: string;
  +id: string;
  +uniqueToA?: string;
  +uniqueToB?: string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "appFragmentWithInterfaceFieldSelection",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
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
          "name": "uniqueToA",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "I"
};

module.exports = fragment;
