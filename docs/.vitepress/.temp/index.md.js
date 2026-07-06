import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Shopizer 4.X","text":"documentation","tagline":"Microservices and Java based trandactional system","image":{"src":"/shopizer_vertical_qr.png","alt":"Shopizer"},"actions":[{"theme":"brand","text":"Get Started","link":"/getting-started/"},{"theme":"alt","text":"View on GitHub","link":"https://github.com"}]},"features":[{"icon":"🔥","title":"Concept","details":"JSONB for flexible product attributes with Vector search","link":"concept"},{"icon":"🛠️","title":"Getting Started","details":"Start deploying locally","link":"getting-started"},{"icon":"⚡️","title":"Deployment","details":"Deploy on Kubernetes","link":"deploy"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
