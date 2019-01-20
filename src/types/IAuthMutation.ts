import { IContext } from './IContext';

export type ResolverFunction = (
  parent: any,
  args: any,
  context: IContext,
  info?: any,
) => any;

export abstract class IAuthMutation {
  static signup: ResolverFunction;
  static login: ResolverFunction;
}
