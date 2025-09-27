import { FormField } from "../components/ContactForm";

type Button = {
  label: string;
  link: string;
};

type SuggestionItem = {
  title: string;
  text: string;
  imageUrl: string;
  btn: Button;
};

export type SuggestionType = {
  id?: string;
  type?: "suggestions";
  title: string;
  items: SuggestionItem[];
};

export type BannerType = {
  id?: string;
  type?: "banner";
  title: string;
  text: string;
  inverted?: false;
  imageUrl: string;
  btn1?: Button;
  btn2?: Button;
};

export type FormType = {
  id?: string;
  type?: "form";
  title: string;
  subtitle: string;
  fields: FormField[];
  consent: {
    text: string;
    required: boolean;
  };
  submitText: string;
  primaryColor: string;
  secondaryColor: string;
  $bgColor?: string;
};

type Item = BannerType | SuggestionType | FormType;

type HeaderItem = {
  label: string;
  link: string;
};

export type HeaderType = {
  logo?: string;
  items: HeaderItem[];
};

export type FooterType = {
  links: { label: string; link: string }[];
  socials: { platform: string; link: string; icon?: string }[];
  text: string;
};

export type SiteData = {
  logo: string;
  header: HeaderType;
  items: Item[];
  footer: FooterType;
};
