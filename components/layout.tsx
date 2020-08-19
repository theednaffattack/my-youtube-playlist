import { globalStyles } from "./global-styles";

export default function Layout({ children }) {
  return <div className={globalStyles}>{children}</div>;
}
