import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly phoneNum?: string | null;
  readonly alt_phoneNums?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly alt_emails?: (string | null)[] | null;
}

type LazyStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly phoneNum?: string | null;
  readonly alt_phoneNums?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly alt_emails?: (string | null)[] | null;
}

export declare type Students = LazyLoading extends LazyLoadingDisabled ? EagerStudents : LazyStudents

export declare const Students: (new (init: ModelInit<Students>) => Students) & {
  copyOf(source: Students, mutator: (draft: MutableModel<Students>) => MutableModel<Students> | void): Students;
}