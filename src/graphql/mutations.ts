/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCocktail = /* GraphQL */ `mutation CreateCocktail(
  $input: CreateCocktailInput!
  $condition: ModelCocktailConditionInput
) {
  createCocktail(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCocktailMutationVariables,
  APITypes.CreateCocktailMutation
>;
export const updateCocktail = /* GraphQL */ `mutation UpdateCocktail(
  $input: UpdateCocktailInput!
  $condition: ModelCocktailConditionInput
) {
  updateCocktail(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCocktailMutationVariables,
  APITypes.UpdateCocktailMutation
>;
export const deleteCocktail = /* GraphQL */ `mutation DeleteCocktail(
  $input: DeleteCocktailInput!
  $condition: ModelCocktailConditionInput
) {
  deleteCocktail(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCocktailMutationVariables,
  APITypes.DeleteCocktailMutation
>;
export const createNihonsake = /* GraphQL */ `mutation CreateNihonsake(
  $input: CreateNihonsakeInput!
  $condition: ModelNihonsakeConditionInput
) {
  createNihonsake(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNihonsakeMutationVariables,
  APITypes.CreateNihonsakeMutation
>;
export const updateNihonsake = /* GraphQL */ `mutation UpdateNihonsake(
  $input: UpdateNihonsakeInput!
  $condition: ModelNihonsakeConditionInput
) {
  updateNihonsake(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNihonsakeMutationVariables,
  APITypes.UpdateNihonsakeMutation
>;
export const deleteNihonsake = /* GraphQL */ `mutation DeleteNihonsake(
  $input: DeleteNihonsakeInput!
  $condition: ModelNihonsakeConditionInput
) {
  deleteNihonsake(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNihonsakeMutationVariables,
  APITypes.DeleteNihonsakeMutation
>;
export const createWine = /* GraphQL */ `mutation CreateWine(
  $input: CreateWineInput!
  $condition: ModelWineConditionInput
) {
  createWine(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWineMutationVariables,
  APITypes.CreateWineMutation
>;
export const updateWine = /* GraphQL */ `mutation UpdateWine(
  $input: UpdateWineInput!
  $condition: ModelWineConditionInput
) {
  updateWine(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWineMutationVariables,
  APITypes.UpdateWineMutation
>;
export const deleteWine = /* GraphQL */ `mutation DeleteWine(
  $input: DeleteWineInput!
  $condition: ModelWineConditionInput
) {
  deleteWine(input: $input, condition: $condition) {
    id
    name
    description
    alcohol
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWineMutationVariables,
  APITypes.DeleteWineMutation
>;
