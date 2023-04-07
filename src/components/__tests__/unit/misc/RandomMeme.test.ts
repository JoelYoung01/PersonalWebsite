/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount } from "@vue/test-utils";
import RandomMeme from "@/components/misc/RandomMeme.vue";
import vuetify from "@/plugins/vuetify";
import { ref } from "vue";
import { useFetch } from "@vueuse/core";

const meme = {
  title: "Test Meme Title",
  url: "fakeurl"
};

vi.mock("@vueuse/core", async (actual) => ({
  ...((await actual()) as object),
  useFetch: vi.fn(() => ({
    json: vi.fn(() => ({
      data: ref(meme),
      isFetching: ref(false)
    }))
  }))
}));

describe("RandomMeme.vue", () => {
  test("renders the meme title", () => {
    const wrapper = mount(RandomMeme, {
      global: {
        plugins: [vuetify]
      }
    });
    expect(wrapper.text()).toContain(meme.title);
  });

  test("clicking refresh button fetches a new meme", async () => {
    const mockExecute = vi.fn();
    vi.mocked(useFetch).mockReturnValue({
      json: vi.fn(() => ({
        data: ref(meme),
        isFetching: ref(false),
        execute: mockExecute
      }))
    } as any);

    const wrapper = mount(RandomMeme, {
      global: {
        plugins: [vuetify]
      }
    });

    const button = wrapper.find(".v-btn");
    await button.trigger("click");
    expect(mockExecute).toHaveBeenCalledOnce();
  });
});
