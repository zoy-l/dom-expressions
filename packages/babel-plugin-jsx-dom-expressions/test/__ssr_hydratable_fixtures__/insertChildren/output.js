import { mergeProps as _$mergeProps } from "r-server";
import { ssrElement as _$ssrElement } from "r-server";
import { escape as _$escape } from "r-server";
import { createComponent as _$createComponent } from "r-server";
import { ssr as _$ssr } from "r-server";
import { ssrHydrationKey as _$ssrHydrationKey } from "r-server";
const _tmpl$ = ["<div", "></div>"],
  _tmpl$2 = ["<module", ">", "</module>"],
  _tmpl$3 = ["<module", ">Hello</module>"],
  _tmpl$4 = ["<module", ">Hi <!--#-->", "<!--/--></module>"];

const children = _$ssr(_tmpl$, _$ssrHydrationKey());

const dynamic = {
  children
};

const template = _$createComponent(Module, {
  children: children
});

const template2 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(children));

const template3 = _$ssr(_tmpl$3, _$ssrHydrationKey());

const template4 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(_$createComponent(Hello, {})));

const template5 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(dynamic.children));

const template6 = _$createComponent(Module, {
  get children() {
    return dynamic.children;
  }
});

const template7 = _$ssrElement("module", dynamic, undefined, true);

const template8 = _$ssrElement("module", dynamic, "Hello", true);

const template9 = _$ssrElement("module", dynamic, dynamic.children, true);

const template10 = _$createComponent(
  Module,
  _$mergeProps(dynamic, {
    children: "Hello"
  })
);

const template11 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(state.children));

const template12 = _$createComponent(Module, {
  children: state.children
});

const template13 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(children));

const template14 = _$createComponent(Module, {
  children: children
});

const template15 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(dynamic.children));

const template16 = _$createComponent(Module, {
  get children() {
    return dynamic.children;
  }
});

const template18 = _$ssr(_tmpl$4, _$ssrHydrationKey(), _$escape(children));

const template19 = _$createComponent(Module, {
  get children() {
    return ["Hi ", children];
  }
});

const template20 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(children()));

const template21 = _$createComponent(Module, {
  get children() {
    return children();
  }
});

const template22 = _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(state.children()));

const template23 = _$createComponent(Module, {
  get children() {
    return state.children();
  }
});
