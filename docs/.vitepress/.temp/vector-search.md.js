import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vector Search","description":"","frontmatter":{},"headers":[],"relativePath":"vector-search.md","filePath":"vector-search.md"}');
const _sfc_main = { name: "vector-search.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vector-search" tabindex="-1">Vector Search <a class="header-anchor" href="#vector-search" aria-label="Permalink to &quot;Vector Search&quot;">​</a></h1><p>Coming soon.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vector-search.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vectorSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vectorSearch as default
};
