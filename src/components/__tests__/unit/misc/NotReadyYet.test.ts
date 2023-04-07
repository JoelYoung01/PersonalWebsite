import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import NotReadyYet from "@/components/misc/NotReadyYet.vue";

describe("NotReadyYet.vue", () => {
  test("renders the correct message", () => {
    const wrapper = mount(NotReadyYet, {
      global: {
        plugins: [vuetify]
      }
    });
    expect(wrapper.text()).toContain("This page is not ready yet.");
  });
});
