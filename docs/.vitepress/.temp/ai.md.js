import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AI","description":"","frontmatter":{},"headers":[],"relativePath":"ai.md","filePath":"ai.md"}');
const _sfc_main = { name: "ai.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai" tabindex="-1">AI <a class="header-anchor" href="#ai" aria-label="Permalink to &quot;AI&quot;">​</a></h1><p>Coming soon.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ai.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ai = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ai as default
};
