import React from "react";

export default function Divider({ horizontal }) {
  return (
    <div
      class={`max-lg:hidden inline-block ${
        horizontal ? "min-w-full h-0.5" : "min-h-full w-0.5"
      }  self-stretch bg-neutral-100 opacity-100 dark:opacity-50`}
    ></div>
  );
}
