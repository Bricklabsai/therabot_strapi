//@ts-ignore
import logo from "./extensions/therabot.jpeg"

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Therabot Dashboard",


      "Auth.form.welcome.title": "Welcom to Therabot Dashboard",
      
      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  tutorials: false,
  notifications: {releases: false},
};

const bootstrap = (app: any) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
