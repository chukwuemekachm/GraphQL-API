import { Rule, LogicRule } from 'graphql-shield/dist/rules';
import { GraphQLResolveInfo } from 'graphql';
import { IRule } from 'graphql-shield';
import { ILogicRule } from 'graphql-shield/dist/types';
import { IMiddleware } from 'graphql-middleware';

// Rule
declare function rule(
  name?: string,
  options?: IRuleOptions,
): (func: IRuleFunction) => Rule;

type IFragment = string;
type ICacheOptions = 'strict' | 'contextual' | 'no_cache' | boolean;
type IRuleResult = boolean | string | Error;

type IRuleFunction = (
  parent?: any,
  args?: any,
  context?: any,
  info?: GraphQLResolveInfo,
) => IRuleResult | Promise<IRuleResult>;

interface IRuleOptions {
  cache?: ICacheOptions;
  fragment?: IFragment;
}

// Logic
declare function and(...rules: IRule[]): LogicRule;
declare function or(...rules: IRule[]): LogicRule;
declare function not(rule: IRule): LogicRule;
declare const allow: LogicRule;
declare const deny: LogicRule;

type ShieldRule = IRule | ILogicRule;

interface IRuleFieldMap {
  [key: string]: IRule;
}

interface IRuleTypeMap {
  [key: string]: IRule | IRuleFieldMap;
}

type IRules = ShieldRule | IRuleTypeMap;

declare function shield(rules?: IRules, options?: IOptions): IMiddleware;

interface IOptions {
  debug?: boolean;
  allowExternalErrors?: boolean;
  fallbackRule?: ShieldRule;
  fallbackError?: string | Error;
}
