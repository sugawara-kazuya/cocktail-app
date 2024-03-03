/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCocktail = /* GraphQL */ `query GetCocktail($id: ID!) {
  getCocktail(id: $id) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCocktailQueryVariables,
  APITypes.GetCocktailQuery
>;
export const listCocktails = /* GraphQL */ `query ListCocktails(
  $filter: ModelCocktailFilterInput
  $limit: Int
  $nextToken: String
) {
  listCocktails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      alcohol
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCocktailsQueryVariables,
  APITypes.ListCocktailsQuery
>;
export const getNihonsake = /* GraphQL */ `query GetNihonsake($id: ID!) {
  getNihonsake(id: $id) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNihonsakeQueryVariables,
  APITypes.GetNihonsakeQuery
>;
export const listNihonsakes = /* GraphQL */ `query ListNihonsakes(
  $filter: ModelNihonsakeFilterInput
  $limit: Int
  $nextToken: String
) {
  listNihonsakes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      alcohol
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNihonsakesQueryVariables,
  APITypes.ListNihonsakesQuery
>;
export const getWine = /* GraphQL */ `query GetWine($id: ID!) {
  getWine(id: $id) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetWineQueryVariables, APITypes.GetWineQuery>;
export const listWines = /* GraphQL */ `query ListWines(
  $filter: ModelWineFilterInput
  $limit: Int
  $nextToken: String
) {
  listWines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      alcohol
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListWinesQueryVariables, APITypes.ListWinesQuery>;
