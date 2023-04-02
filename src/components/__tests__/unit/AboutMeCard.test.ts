import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import { useDisplay, type DisplayInstance } from "vuetify/lib/framework.mjs";
import AboutMe from "@/components/home/AboutMeCard.vue";
import { ref } from "vue";

vi.mock("vuetify/lib/framework.mjs", async (actual) => ({
  ...((await actual()) as object),
  useDisplay: vi.fn()
}));

describe("AboutMeCard.vue", () => {
  test("renders the card in horizontal format for non-mobile devices", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(false) } as DisplayInstance);

    const wrapper = mount(AboutMe, {
      global: {
        plugins: [vuetify]
      }
    });
    const row = wrapper.find(".v-row");
    expect(row.classes()).not.toContain("flex-column");
  });

  test("renders the card in vertical format for mobile devices", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(true) } as DisplayInstance);

    const wrapper = mount(AboutMe, {
      global: {
        plugins: [vuetify]
      }
    });
    const row = wrapper.find(".v-row");
    expect(row.classes()).toContain("flex-column");
  });
});
