import { mount } from "@vue/test-utils";
import { VApp } from "vuetify/components";
import vuetify from "@/plugins/vuetify";
import WebsiteNavBar from "@/components/layout/WebsiteNavBar.vue";

class ResizeObserver {
  observe() {
    /**/
  }
  unobserve() {
    /**/
  }
}

describe("WebsiteNavBar.vue", () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.ResizeObserver = ResizeObserver as any;
  });

  test("renders the correct number of links", () => {
    const wrapper = mount(VApp, {
      global: {
        plugins: [vuetify]
      },
      slots: {
        default: WebsiteNavBar
      }
    });
    expect(wrapper.text()).toContain("Joel's Website");
  });
});
