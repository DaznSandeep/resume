// React global JSX type augmentation (if needed)
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: unknown;
    }
  }
}
