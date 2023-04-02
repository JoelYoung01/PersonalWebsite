import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import ContactsCard from "@/components/home/ContactsCard.vue";

describe("ContactsCard.vue", () => {
  test("renders the correct number of contacts", () => {
    const wrapper = mount(ContactsCard, { plugins: [vuetify] });
    expect(wrapper.findAll(".v-list-item")).toHaveLength(5);
  });

  test("opens a link when clicked on a contact with uri", async () => {
    window.open = vi.fn();

    const wrapper = mount(ContactsCard);
    const contactsWithUri = wrapper.findAll(".v-list-item").filter((c) => c.vm.$attrs.contact.uri);

    for (let i = 0; i < contactsWithUri.length; i++) {
      const contact = contactsWithUri[i].attributes().contact;
      await contactsWithUri[i].trigger("click");
      expect(window.open).toHaveBeenCalledWith(contact);
    }
  });

  test("copies the contact when clicked on a contact without uri", async () => {
    const copied = vi.fn();
    const showCopiedSnackbar = vi.fn();

    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [mockClipboard(copied, showCopiedSnackbar)]
      }
    });

    const contactsWithoutUri = wrapper.findAll(".v-list-item").filter((c) => !c.attributes().contact);

    for (let i = 0; i < contactsWithoutUri.length; i++) {
      const contact = contactsWithoutUri[i].attributes().contact;
      await contactsWithoutUri[i].trigger("click");
      expect(copied).toHaveBeenCalledWith(contact.title);
      expect(showCopiedSnackbar).toHaveBeenCalled();
    }
  });
});

function mockClipboard(copied: boolean, showCopiedSnackbar: boolean) {
  return {
    install: (app: any) => {
      app.provide("clipboard", {
        isSupported: true,
        copy: copied,
        copied: {
          value: false,
          show: showCopiedSnackbar
        }
      });
    }
  };
}
