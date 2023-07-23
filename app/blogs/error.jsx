"use client";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <div>
        <h1>error occured</h1>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
