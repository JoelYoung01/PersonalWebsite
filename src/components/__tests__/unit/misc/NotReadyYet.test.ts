import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import { useDisplay, type DisplayInstance } from "vuetify/lib/framework.mjs";
import NotReadyYet from "@/components/misc/NotReadyYet.vue";
import { ref } from "vue";

class ResizeObserver {
  observe() {
    /**/
  }
  unobserve() {
    /**/
  }
}

vi.mock("vuetify/lib/framework.mjs", async (actual) => ({
  ...((await actual()) as object),
  useDisplay: vi.fn(() => ({ mobile: ref(false) }))
}));

describe("NotReadyYet.vue", () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.ResizeObserver = ResizeObserver as any;
  });

  test("renders the correct message", () => {
    const wrapper = mount(NotReadyYet, {
      global: {
        plugins: [vuetify]
      }
    });
    expect(wrapper.text()).toContain("This page is not done yet!");
  });

  test("renders wider on desktop", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(false) } as DisplayInstance);
    const wrapper = mount(NotReadyYet, {
      global: {
        plugins: [vuetify]
      }
    });
    const card = wrapper.find(".v-card");
    expect(card.attributes("style")).toContain("width: 375px;");
  });

  test("renders skinnier on mobile", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(true) } as DisplayInstance);
    const wrapper = mount(NotReadyYet, {
      global: {
        plugins: [vuetify]
      }
    });
    const card = wrapper.find(".v-card");
    expect(card.attributes("style")).toContain("width: 325px;");
  });
});
