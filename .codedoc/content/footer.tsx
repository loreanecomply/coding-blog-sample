import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer } from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer>
    <a href="https://github.com/loreanecomply/coding-blog-sample/" target="_blank">
      Check this Sample on GitHub
    </a>
  </_Footer>;
}
