/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_WD3w6CK_.mjs';
import 'kleur/colors';
import { c as blogPageContent, b as $$Layout } from '../chunks/Layout_Ce8D96um.mjs';
import { a as getCollection, r as renderEntry } from '../chunks/_astro_content_BKox_eMW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });
  for (const post of posts) {
    const { remarkPluginFrontmatter } = await renderEntry(post);
    post.data.readingTime = remarkPluginFrontmatter.minutesRead;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": blogPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Blog</h1> <p class="opacity-60 mb-14">${blogPageContent.subtitle}</p> <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="block sm:flex sm:justify-between sm:gap-6 post"> <div class="mt-0 sm:my-auto"> <p class="opacity-60 mb-2"> ${post.data.pubDate.toLocaleDateString()} · ${post.data.readingTime} </p> <h3 class="font-medium hover-underline">${post.data.title}</h3> <p class="text-sm opacity-60 mt-2 mb-3">${post.data.description}</p> </div> </a>`)} </div> </section> ` })}`;
}, "/app/src/pages/blog/index.astro", void 0);

const $$file = "/app/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
