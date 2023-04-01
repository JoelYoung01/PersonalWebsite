import { shallowMount } from "@vue/test-utils";
import SocialCard from "@/components/aboutMe/SocialCard.vue";

describe("SocialCard", () => {
  it("renders a link with the correct href", () => {
    const wrapper = shallowMount(SocialCard, {
      props: {
        profileUri: "https://example.com",
        profileImageUri: "",
        mdiIcon: "",
        handle: ""
      }
    });
    expect(wrapper.attributes("href")).toBe("https://example.com");
  });

  it("renders an image with the correct src", () => {
    const wrapper = shallowMount(SocialCard, {
      props: {
        profileUri: "",
        profileImageUri: "https://example.com/image.png",
        mdiIcon: "",
        handle: ""
      }
    });
    expect(wrapper.find("img").attributes("src")).toBe("https://example.com/image.png");
  });

  it("renders an icon with the correct class", () => {
    const wrapper = shallowMount(SocialCard, {
      props: {
        profileUri: "",
        profileImageUri: "",
        mdiIcon: "mdi-icon",
        handle: ""
      }
    });
    expect(wrapper.find("i").classes("shift-icon-up")).toBe(true);
  });

  it("renders the handle as text", () => {
    const wrapper = shallowMount(SocialCard, {
      props: {
        profileUri: "",
        profileImageUri: "",
        mdiIcon: "",
        handle: "my-handle"
      }
    });
    expect(wrapper.text()).toContain("my-handle");
  });

  it("sets a default size if none is provided", () => {
    const wrapper = shallowMount(SocialCard, {
      props: {
        profileUri: "",
        profileImageUri: "",
        mdiIcon: "",
        handle: ""
      }
    });
    expect(wrapper.find("img").attributes("width")).toBe("250");
  });

  it("uses the provided size if one is provided", () => {
    const wrapper = shallowMount(SocialCard, {
      props: {
        profileUri: "",
        profileImageUri: "",
        mdiIcon: "",
        handle: "",
        size: 300
      }
    });
    expect(wrapper.find("img").attributes("width")).toBe("300");
  });
});
