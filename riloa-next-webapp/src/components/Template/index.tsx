// make template default page

import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";

export default function Template({
  children,
  header,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {header ? header : <DefaultHeader />}
      {children}
      {footer ? footer : <DefaultFooter />}
    </div>
  );
}
