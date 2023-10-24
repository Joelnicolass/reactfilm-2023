import { render } from "@testing-library/react";

import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render component", () => {
    const component = render(<App />);
    expect(component).toBeDefined();
  });
});
