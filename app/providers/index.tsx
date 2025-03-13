"use client";

import store from "~/datasource/store";
import React, { useEffect, useState } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { Provider as ReduxProvider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ReactQueryProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
