import { shallowMount, mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import SocialCard from "@/components/aboutMe/SocialCard.vue";

describe("SocialCard.vue", () => {
  test("renders a link with the correct href", () => {
    const wrapper = shallowMount(SocialCard, {
      global: {
        plugins: [vuetify]
      },
      props: {
        profileUri: "https://example.com",
        profileImageUri: "",
        mdiIcon: "",
        handle: ""
      }
    });
    expect(wrapper.attributes("href")).toBe("https://example.com");
  });

  test("renders an image with the correct src", () => {
    const profileImageUri = "https://example.com/image.png";
    const wrapper = mount(SocialCard, {
      global: {
        plugins: [vuetify]
      },
      props: {
        profileUri: "",
        profileImageUri,
        mdiIcon: "",
        handle: ""
      }
    });

    const imgWrapper = wrapper.find("img");

    expect(imgWrapper.attributes().src).toBe(profileImageUri);
  });

  test("renders an icon with the correct class", () => {
    const wrapper = mount(SocialCard, {
      global: {
        plugins: [vuetify]
      },
      props: {
        profileUri: "",
        profileImageUri: "",
        mdiIcon: "mdi-icon",
        handle: ""
      }
    });
    expect(wrapper.find("i").classes("shift-icon-up")).toBe(true);
  });

  test("renders the handle as text", () => {
    const wrapper = mount(SocialCard, {
      global: {
        plugins: [vuetify]
      },
      props: {
        profileUri: "",
        profileImageUri: "",
        mdiIcon: "",
        handle: "my-handle"
      }
    });

    const text = wrapper.text();

    expect(text).toContain("my-handle");
  });
});
