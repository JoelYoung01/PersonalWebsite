import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import ProjectsCard from "@/components/home/ProjectsCard.vue";
import { ref } from "vue";
import { useDisplay, type DisplayInstance } from "vuetify/lib/framework.mjs";

vi.mock("vuetify/lib/framework.mjs", async (actual) => ({
  ...((await actual()) as object),
  useDisplay: vi.fn()
}));

describe("ProjectsCard.vue", () => {
  test("renders vertically on mobile", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(true) } as DisplayInstance);
    const wrapper = mount(ProjectsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    const row = wrapper.find(".v-row");
    expect(row.classes()).toContain("flex-column");
  });

  test("renders horizontally on desktop", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(false) } as DisplayInstance);
    const wrapper = mount(ProjectsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    const row = wrapper.find(".v-row");
    expect(row.classes()).not.toContain("flex-column");
  });
});
