/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_WD3w6CK_.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets__iP3a6Qr.mjs';
import { $ as $$Icon, a as aboutPageContent, b as $$Layout } from '../chunks/Layout_Ce8D96um.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ResumeItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResumeItem;
  const { title, company, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(company.url, "href")} class="py-3 flex items-center justify-between  hover:opacity-60 transition-opacity duration-300"> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": company.image, "alt": company.name, "width": 40, "height": 40, "class": "rounded-full w-[40px] h-[40px] object-cover" })} <div> <h3 class="font-medium">${title}</h3> <p class="text-sm opacity-60">${company.name}</p> </div> </div> <p class="text-sm opacity-60">${date}</p> </a>`;
}, "/app/src/components/ResumeItem.astro", void 0);

const $$Astro = createAstro();
const $$SocialLinkBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialLinkBox;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="p-4 rounded-lg border border-white border-opacity-30 flex items-center gap-3  hover:opacity-30 transition-opacity duration-300"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div class="flex items-center justify-between w-full"> <p>${title}</p> <div class="rotate-45"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })} </div> </div> </a>`;
}, "/app/src/components/SocialLinkBox.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageDescription = marked.parse(aboutPageContent.about.description);
  const workDescription = marked.parse(aboutPageContent.work.description);
  const connectDescription = marked.parse(aboutPageContent.connect.description);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Over mij</h1> <p class="opacity-60 mb-10">${aboutPageContent.subtitle}</p> <div class="mb-14"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(pageDescription)}` })} </div> <div class="flex flex-col min-[410px]:flex-row"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_l.url, "alt": aboutPageContent.about.image_l.alt, "width": 350, "height": 250, "class": "w-[350px] h-[250px] object-cover rounded-xl -rotate-6" })} ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_r.url, "alt": aboutPageContent.about.image_r.alt, "width": 150, "height": 250, "class": "w-[150px] h-[250px] object-cover rounded-xl rotate-6 mx-auto sm:ml-auto" })} </div> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Stages</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(workDescription)}` })} </div> <div class="grid grid-cols-1 group"> ${aboutPageContent.work.items.map((item) => renderTemplate`${renderComponent($$result2, "ResumeItem", $$ResumeItem, { ...item })}`)} </div> </div> </section> <section class="mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Contact</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(connectDescription)}` })} </div> <div class="grid grid-cols-2 gap-2 group"> ${aboutPageContent.connect.links.map((item) => renderTemplate`${renderComponent($$result2, "SocialLinkBox", $$SocialLinkBox, { ...item })}`)} </div> </div> </section> ` })}`;
}, "/app/src/pages/about.astro", void 0);

const $$file = "/app/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
