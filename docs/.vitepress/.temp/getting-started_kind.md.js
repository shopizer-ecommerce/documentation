import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kind","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/kind.md","filePath":"getting-started/kind.md"}');
const _sfc_main = { name: "getting-started/kind.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kind" tabindex="-1">Kind <a class="header-anchor" href="#kind" aria-label="Permalink to &quot;Kind&quot;">​</a></h1><p>Kind is a container orchestration runtime which works basically with kubectl a tool for deploying microservices as pods to Kind system. All orchestration commands in the following guide can aslo be used with other container runtimes, for example Kubernetes and other Kubernetes running locally, in GCP, in AWS and Azure infrastructures.</p><p><a href="https://kind.sigs.k8s.io/docs/user/quick-start/#installation" target="_blank" rel="noreferrer">https://kind.sigs.k8s.io/docs/user/quick-start/#installation</a> This guide provides instructions on how to install Kind nativaly or from package managers based on your operating system.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("getting-started/kind.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kind = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kind as default
};
