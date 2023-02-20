import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NotReadyYet from "@/components/misc/NotReadyYet.vue";

describe("NotReadyYet", () => {
  it("renders properly", () => {
    const wrapper = mount(NotReadyYet, { props: {  } });
    expect(wrapper.text()).toContain("This page is not quite done yet!");
    expect(wrapper.text()).toContain("Coming soon to a website near you...");
    expect(wrapper.text()).toContain("Here's a random meme from reddit instead!");
  });
});
