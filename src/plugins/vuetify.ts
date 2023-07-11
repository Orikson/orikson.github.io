// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";

// Icons
import { customSVGs } from "@/components/icons/customSVGs";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
      custom: customSVGs,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
