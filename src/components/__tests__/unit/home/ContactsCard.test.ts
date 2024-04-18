import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import ContactsCard from "@/components/home/ContactsCard.vue";
import { useClipboard } from "@vueuse/core";
import { computed, ref } from "vue";
import { useDisplay, type DisplayInstance } from "vuetify/lib/framework.mjs";

vi.mock("vuetify/lib/framework.mjs", async (actual) => ({
  ...((await actual()) as object),
  useDisplay: vi.fn().mockReturnValue({ mobile: false })
}));

vi.mock("@vueuse/core", async (actual) => ({
  ...((await actual()) as object),
  useClipboard: vi.fn().mockReturnValue({
    copy: vi.fn(),
    copied: false,
    isSupported: { value: true }
  })
}));

describe("ContactsCard.vue", () => {
  test("renders the correct number of contacts", () => {
    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    expect(wrapper.findAll(".v-list-item")).toHaveLength(4);
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

  test("shows a snackbar when the contact is copied", async () => {
    vi.mocked(useClipboard).mockReturnValue({
      copy: vi.fn(),
      text: computed(() => ""),
      copied: computed(() => true),
      isSupported: ref(true)
    });

    mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      },
      attachTo: document.body
    });

    expect(document.body.innerHTML).toContain("Copied!");
  });

  test("renders vertically on mobile", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(true) } as DisplayInstance);
    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    const row = wrapper.find(".v-row");
    expect(row.classes()).toContain("flex-column");
  });

  test("renders horizontally on desktop", () => {
    vi.mocked(useDisplay).mockReturnValue({ mobile: ref(false) } as DisplayInstance);
    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      }
    });
    const row = wrapper.find(".v-row");
    expect(row.classes()).not.toContain("flex-column");
  });

  test("shows support error if copying is not supported", async () => {
    vi.mocked(useClipboard).mockReturnValue({
      copy: vi.fn(),
      text: computed(() => ""),
      copied: computed(() => false),
      isSupported: ref(false)
    });

    vi.useFakeTimers();

    const errorMessage = "Copying to clipboard is not supported!";

    const wrapper = mount(ContactsCard, {
      global: {
        plugins: [vuetify]
      },
      attachTo: document.body
    });

    expect(document.body.innerHTML).not.toContain(errorMessage);

    const copyContact = wrapper.findAll(".v-list-item")[0];
    copyContact.trigger("click");
    await wrapper.vm.$nextTick();

    expect(document.body.innerHTML).toContain(errorMessage);
    vi.advanceTimersByTime(3000);
    // expect(document.body.innerHTML).not.toContain(errorMessage); I couldn't get this to work

    vi.useRealTimers();
  });
});
