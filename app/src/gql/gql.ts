/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getTodos {\n  todosList {\n    id\n    title\n    completed\n    created_at\n    updated_at\n  }\n}\n\nmutation updateTodo($id: ID!, $completed: Boolean, $title: String) {\n  updateTodos(id: $id, completed: $completed, title: $title) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}\n\nmutation insertTodo($title: String!, $completed: Boolean) {\n  insertTodos(title: $title, completed: $completed) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}\n\nmutation deleteTodo($id: ID!) {\n  deleteTodos(id: $id) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}": types.GetTodosDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTodos {\n  todosList {\n    id\n    title\n    completed\n    created_at\n    updated_at\n  }\n}\n\nmutation updateTodo($id: ID!, $completed: Boolean, $title: String) {\n  updateTodos(id: $id, completed: $completed, title: $title) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}\n\nmutation insertTodo($title: String!, $completed: Boolean) {\n  insertTodos(title: $title, completed: $completed) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}\n\nmutation deleteTodo($id: ID!) {\n  deleteTodos(id: $id) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}"): (typeof documents)["query getTodos {\n  todosList {\n    id\n    title\n    completed\n    created_at\n    updated_at\n  }\n}\n\nmutation updateTodo($id: ID!, $completed: Boolean, $title: String) {\n  updateTodos(id: $id, completed: $completed, title: $title) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}\n\nmutation insertTodo($title: String!, $completed: Boolean) {\n  insertTodos(title: $title, completed: $completed) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}\n\nmutation deleteTodo($id: ID!) {\n  deleteTodos(id: $id) {\n    completed\n    created_at\n    id\n    title\n    updated_at\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;