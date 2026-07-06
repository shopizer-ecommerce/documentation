import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"What's required to work with containers","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/containers.md","filePath":"getting-started/containers.md"}`);
const _sfc_main = { name: "getting-started/containers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="what-s-required-to-work-with-containers" tabindex="-1">What&#39;s required to work with containers <a class="header-anchor" href="#what-s-required-to-work-with-containers" aria-label="Permalink to &quot;What&#39;s required to work with containers&quot;">​</a></h1><ul><li>Create a docker image from your microservice</li><li>Push your image to a docker registry (dockerhub, github registry, quay...)</li><li>Update your helm chart with your docker image</li><li>Update your container runtime pod to pick thelates container image</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("getting-started/containers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const containers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  containers as default
};
