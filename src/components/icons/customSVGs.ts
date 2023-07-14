import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import GithubIcon from "./githubIcon.vue";
import InstagramIcon from "./instagramIcon.vue";
import GitlabIcon from "./gitlabIcon.vue";
import LinkedinIcon from "./linkedinIcon.vue";

// eslint-disable-next-line
const customSvgNameToComponent: any = {
  GithubIcon,
  InstagramIcon,
  GitlabIcon,
  LinkedinIcon,
};

const customSVGs: IconSet = {
  component: (props: IconProps) =>
    h(customSvgNameToComponent[props.icon as string]),
};

export { customSVGs /* aliases */ };
