/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCocktail = /* GraphQL */ `subscription OnCreateCocktail($filter: ModelSubscriptionCocktailFilterInput) {
  onCreateCocktail(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCocktailSubscriptionVariables,
  APITypes.OnCreateCocktailSubscription
>;
export const onUpdateCocktail = /* GraphQL */ `subscription OnUpdateCocktail($filter: ModelSubscriptionCocktailFilterInput) {
  onUpdateCocktail(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCocktailSubscriptionVariables,
  APITypes.OnUpdateCocktailSubscription
>;
export const onDeleteCocktail = /* GraphQL */ `subscription OnDeleteCocktail($filter: ModelSubscriptionCocktailFilterInput) {
  onDeleteCocktail(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCocktailSubscriptionVariables,
  APITypes.OnDeleteCocktailSubscription
>;
export const onCreateNihonsake = /* GraphQL */ `subscription OnCreateNihonsake($filter: ModelSubscriptionNihonsakeFilterInput) {
  onCreateNihonsake(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNihonsakeSubscriptionVariables,
  APITypes.OnCreateNihonsakeSubscription
>;
export const onUpdateNihonsake = /* GraphQL */ `subscription OnUpdateNihonsake($filter: ModelSubscriptionNihonsakeFilterInput) {
  onUpdateNihonsake(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNihonsakeSubscriptionVariables,
  APITypes.OnUpdateNihonsakeSubscription
>;
export const onDeleteNihonsake = /* GraphQL */ `subscription OnDeleteNihonsake($filter: ModelSubscriptionNihonsakeFilterInput) {
  onDeleteNihonsake(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNihonsakeSubscriptionVariables,
  APITypes.OnDeleteNihonsakeSubscription
>;
export const onCreateWine = /* GraphQL */ `subscription OnCreateWine($filter: ModelSubscriptionWineFilterInput) {
  onCreateWine(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWineSubscriptionVariables,
  APITypes.OnCreateWineSubscription
>;
export const onUpdateWine = /* GraphQL */ `subscription OnUpdateWine($filter: ModelSubscriptionWineFilterInput) {
  onUpdateWine(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWineSubscriptionVariables,
  APITypes.OnUpdateWineSubscription
>;
export const onDeleteWine = /* GraphQL */ `subscription OnDeleteWine($filter: ModelSubscriptionWineFilterInput) {
  onDeleteWine(filter: $filter) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWineSubscriptionVariables,
  APITypes.OnDeleteWineSubscription
>;
