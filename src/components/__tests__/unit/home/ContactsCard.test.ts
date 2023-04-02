import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import ContactsCard from "@/components/home/ContactsCard.vue";
import { useClipboard } from "@vueuse/core";

vi.mock("vuetify/lib/framework.mjs", async (actual) => ({
  ...((await actual()) as object),
  useDisplay: vi.fn().mockReturnValue({ mobile: false })
}));

vi.mock("@vueuse/core", async (actual) => ({
  ...((await actual()) as object),
  useClipboard: vi.fn().mockReturnValue({
    copy: vi.fn(),
    copied: false,
    isSupported: true
  })
}));

describe("ContactsCard.vue", () => {
  test("renders the correct number of contacts", () => {
    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    expect(wrapper.findAll(".v-list-item")).toHaveLength(5);
  });

  test("opens a link when a contact is clicked", () => {
    window.open = vi.fn();
    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    const contact = wrapper.findAll(".v-list-item")[2];
    contact.trigger("click");
    expect(window.open).toHaveBeenCalled();
  });

  test("copies the contact value to the clipboard when the copy button is clicked", () => {
    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    const copyContact = wrapper.find(".v-list-item");
    copyContact.trigger("click");
    expect(vi.mocked(useClipboard().copy)).toHaveBeenCalled();
  });
});
