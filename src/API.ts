/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCocktailInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  alcohol?: string | null,
};

export type ModelCocktailConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alcohol?: ModelStringInput | null,
  and?: Array< ModelCocktailConditionInput | null > | null,
  or?: Array< ModelCocktailConditionInput | null > | null,
  not?: ModelCocktailConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Cocktail = {
  __typename: "Cocktail",
  id: string,
  name: string,
  description?: string | null,
  alcohol?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCocktailInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  alcohol?: string | null,
};

export type DeleteCocktailInput = {
  id: string,
};

export type CreateNihonsakeInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  alcohol?: string | null,
};

export type ModelNihonsakeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alcohol?: ModelStringInput | null,
  and?: Array< ModelNihonsakeConditionInput | null > | null,
  or?: Array< ModelNihonsakeConditionInput | null > | null,
  not?: ModelNihonsakeConditionInput | null,
};

export type nihonsake = {
  __typename: "nihonsake",
  id: string,
  name: string,
  description?: string | null,
  alcohol?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNihonsakeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  alcohol?: string | null,
};

export type DeleteNihonsakeInput = {
  id: string,
};

export type CreateWineInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  alcohol?: string | null,
};

export type ModelWineConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alcohol?: ModelStringInput | null,
  and?: Array< ModelWineConditionInput | null > | null,
  or?: Array< ModelWineConditionInput | null > | null,
  not?: ModelWineConditionInput | null,
};

export type wine = {
  __typename: "wine",
  id: string,
  name: string,
  description?: string | null,
  alcohol?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWineInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  alcohol?: string | null,
};

export type DeleteWineInput = {
  id: string,
};

export type ModelCocktailFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alcohol?: ModelStringInput | null,
  and?: Array< ModelCocktailFilterInput | null > | null,
  or?: Array< ModelCocktailFilterInput | null > | null,
  not?: ModelCocktailFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCocktailConnection = {
  __typename: "ModelCocktailConnection",
  items:  Array<Cocktail | null >,
  nextToken?: string | null,
};

export type ModelNihonsakeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alcohol?: ModelStringInput | null,
  and?: Array< ModelNihonsakeFilterInput | null > | null,
  or?: Array< ModelNihonsakeFilterInput | null > | null,
  not?: ModelNihonsakeFilterInput | null,
};

export type ModelNihonsakeConnection = {
  __typename: "ModelNihonsakeConnection",
  items:  Array<nihonsake | null >,
  nextToken?: string | null,
};

export type ModelWineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alcohol?: ModelStringInput | null,
  and?: Array< ModelWineFilterInput | null > | null,
  or?: Array< ModelWineFilterInput | null > | null,
  not?: ModelWineFilterInput | null,
};

export type ModelWineConnection = {
  __typename: "ModelWineConnection",
  items:  Array<wine | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCocktailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  alcohol?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCocktailFilterInput | null > | null,
  or?: Array< ModelSubscriptionCocktailFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNihonsakeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  alcohol?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNihonsakeFilterInput | null > | null,
  or?: Array< ModelSubscriptionNihonsakeFilterInput | null > | null,
};

export type ModelSubscriptionWineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  alcohol?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWineFilterInput | null > | null,
  or?: Array< ModelSubscriptionWineFilterInput | null > | null,
};

export type CreateCocktailMutationVariables = {
  input: CreateCocktailInput,
  condition?: ModelCocktailConditionInput | null,
};

export type CreateCocktailMutation = {
  createCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCocktailMutationVariables = {
  input: UpdateCocktailInput,
  condition?: ModelCocktailConditionInput | null,
};

export type UpdateCocktailMutation = {
  updateCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCocktailMutationVariables = {
  input: DeleteCocktailInput,
  condition?: ModelCocktailConditionInput | null,
};

export type DeleteCocktailMutation = {
  deleteCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNihonsakeMutationVariables = {
  input: CreateNihonsakeInput,
  condition?: ModelNihonsakeConditionInput | null,
};

export type CreateNihonsakeMutation = {
  createNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNihonsakeMutationVariables = {
  input: UpdateNihonsakeInput,
  condition?: ModelNihonsakeConditionInput | null,
};

export type UpdateNihonsakeMutation = {
  updateNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNihonsakeMutationVariables = {
  input: DeleteNihonsakeInput,
  condition?: ModelNihonsakeConditionInput | null,
};

export type DeleteNihonsakeMutation = {
  deleteNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWineMutationVariables = {
  input: CreateWineInput,
  condition?: ModelWineConditionInput | null,
};

export type CreateWineMutation = {
  createWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWineMutationVariables = {
  input: UpdateWineInput,
  condition?: ModelWineConditionInput | null,
};

export type UpdateWineMutation = {
  updateWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWineMutationVariables = {
  input: DeleteWineInput,
  condition?: ModelWineConditionInput | null,
};

export type DeleteWineMutation = {
  deleteWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCocktailQueryVariables = {
  id: string,
};

export type GetCocktailQuery = {
  getCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCocktailsQueryVariables = {
  filter?: ModelCocktailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCocktailsQuery = {
  listCocktails?:  {
    __typename: "ModelCocktailConnection",
    items:  Array< {
      __typename: "Cocktail",
      id: string,
      name: string,
      description?: string | null,
      alcohol?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNihonsakeQueryVariables = {
  id: string,
};

export type GetNihonsakeQuery = {
  getNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNihonsakesQueryVariables = {
  filter?: ModelNihonsakeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNihonsakesQuery = {
  listNihonsakes?:  {
    __typename: "ModelNihonsakeConnection",
    items:  Array< {
      __typename: "nihonsake",
      id: string,
      name: string,
      description?: string | null,
      alcohol?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWineQueryVariables = {
  id: string,
};

export type GetWineQuery = {
  getWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWinesQueryVariables = {
  filter?: ModelWineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWinesQuery = {
  listWines?:  {
    __typename: "ModelWineConnection",
    items:  Array< {
      __typename: "wine",
      id: string,
      name: string,
      description?: string | null,
      alcohol?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCocktailSubscriptionVariables = {
  filter?: ModelSubscriptionCocktailFilterInput | null,
};

export type OnCreateCocktailSubscription = {
  onCreateCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCocktailSubscriptionVariables = {
  filter?: ModelSubscriptionCocktailFilterInput | null,
};

export type OnUpdateCocktailSubscription = {
  onUpdateCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCocktailSubscriptionVariables = {
  filter?: ModelSubscriptionCocktailFilterInput | null,
};

export type OnDeleteCocktailSubscription = {
  onDeleteCocktail?:  {
    __typename: "Cocktail",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNihonsakeSubscriptionVariables = {
  filter?: ModelSubscriptionNihonsakeFilterInput | null,
};

export type OnCreateNihonsakeSubscription = {
  onCreateNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNihonsakeSubscriptionVariables = {
  filter?: ModelSubscriptionNihonsakeFilterInput | null,
};

export type OnUpdateNihonsakeSubscription = {
  onUpdateNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNihonsakeSubscriptionVariables = {
  filter?: ModelSubscriptionNihonsakeFilterInput | null,
};

export type OnDeleteNihonsakeSubscription = {
  onDeleteNihonsake?:  {
    __typename: "nihonsake",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWineSubscriptionVariables = {
  filter?: ModelSubscriptionWineFilterInput | null,
};

export type OnCreateWineSubscription = {
  onCreateWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWineSubscriptionVariables = {
  filter?: ModelSubscriptionWineFilterInput | null,
};

export type OnUpdateWineSubscription = {
  onUpdateWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWineSubscriptionVariables = {
  filter?: ModelSubscriptionWineFilterInput | null,
};

export type OnDeleteWineSubscription = {
  onDeleteWine?:  {
    __typename: "wine",
    id: string,
    name: string,
    description?: string | null,
    alcohol?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
