import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";

export const isLogin = connectedRouterRedirect({
  redirectPath: "/",
  allowRedirectBack: false,
  authenticatedSelector: state => state.auth.token,
  wrapperDisplayName: "isLogin"
});
