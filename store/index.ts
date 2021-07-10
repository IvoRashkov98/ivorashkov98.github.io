import { getAccessorType } from 'typed-vuex';

type Link = {
  anchor: string;
  title: string;
};

const links: Link[] = [
  {
    anchor: '#home',
    title: 'Home',
  },
  {
    anchor: '#showreel',
    title: 'Showreel',
  },
  {
    anchor: '#about-me',
    title: 'About Me',
  },
  {
    anchor: '#contact-me',
    title: 'Contact Me',
  },
];

export const state = () => ({
  links,
});

export type RootState = ReturnType<typeof state>;

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  },
});
