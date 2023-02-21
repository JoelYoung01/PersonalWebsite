import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import NotReadyYet from "@/components/misc/NotReadyYet.vue";
import { ref } from "vue";

vi.mock("vuetify", () => {
  const useDisplay = () => ({ mobile: ref(false) });
  return { useDisplay };
});

describe("NotReadyYet", () => {
  it("renders properly", () => {
    const wrapper = mount(NotReadyYet, { props: {  } });
    expect(wrapper.text()).toContain("Coming soon to a website near you...");
  });
});
