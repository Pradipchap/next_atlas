"use client";

import { SessionProvider } from "next-auth/react";
//makiing HOC (Higher Order Component ) to wrap all components so that all Components
//can use session data
const Provider = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
