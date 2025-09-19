export interface Project {
  projectKey: string;
  title: string;
  imageSrc: string;
  sourceUri: string;
  description: string;
  tags: string[];
  uri?: string;
  featured?: boolean;
}

export const TAGS = {
  node: "Node.js",
  vue: "Vue.js",
  vite: "Vite",
  vuetify: "Vuetify",
  aws: "AWS",
  opsc: "Open Source",
  spa: "SPA",
  sveltekit: "SvelteKit",
  tailwind: "Tailwind CSS",
  stripe: "Stripe",
  python: "Python",
  java: "Java",
  mobile: "Mobile-first",
  professional: "Professional",
  supabase: "Supabase",
  static: "Static",
};
