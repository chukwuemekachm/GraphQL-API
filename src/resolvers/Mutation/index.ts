import AuthMutation from "./AuthMutation";
import { IContext } from "../../types/IContext";

export default {
  signup: (parent: any, args: any, context: IContext) => AuthMutation.signup(parent, args, context),
};
