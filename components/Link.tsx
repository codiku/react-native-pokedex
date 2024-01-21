import { Link as Link_ } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";

export function Link({ children, ...props }: LinkProps) {
  return (
    <Link_ {...props} className={``}>
      {children}
    </Link_>
  );
}
