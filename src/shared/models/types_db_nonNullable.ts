import { oldDatabase as generatedDB } from ".";

type RemoveNullExcept<T, E = never> = {
  [P in keyof T]: T[P] extends (infer U)[]
    ? RemoveNullExcept<U, E>[]
    : T[P] extends object
    ? RemoveNullExcept<T[P], E>
    : P extends E
    ? T[P]
    : Exclude<T[P], null>;
};

export type nonNullDatabaseExcept = RemoveNullExcept<generatedDB>




