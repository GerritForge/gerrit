/**
 * @license
 * Copyright (C) 2016 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {css} from 'lit';

const $_documentContainer = document.createElement('template');

/**
 * HighlightJS emits the following classes that do not have styles here:
 *    subst, symbol, class, function, doctag, meta-string, section, name,
 *    builtin-name, bulletm, code, formula, quote, addition, deletion,
 *    attribute
 *
 * @see {@link http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html}
 */
export const grSyntaxTheme = css`
  .contentText {
    color: var(--syntax-default-color);
  }
  .gr-syntax-attr {
    color: var(--syntax-attr-color);
  }
  .gr-syntax-attribute {
    color: var(--syntax-attribute-color);
  }
  .gr-syntax-built_in {
    color: var(--syntax-built_in-color);
  }
  .gr-syntax-bullet {
    color: var(--syntax-bullet-color);
  }
  .gr-syntax-code {
    color: var(--syntax-code-color);
  }
  .gr-syntax-comment {
    color: var(--syntax-comment-color);
  }
  .gr-syntax-doctag {
    font-weight: var(--syntax-doctag-weight);
  }
  .gr-syntax-formula {
    color: var(--syntax-formula-color);
  }
  .gr-syntax-function {
    color: var(--syntax-function-color);
  }
  .gr-syntax-link {
    color: var(--syntax-link-color);
  }
  .gr-syntax-literal {
    /* XML/HTML Attribute */
    color: var(--syntax-literal-color);
  }
  .gr-syntax-meta {
    color: var(--syntax-meta-color);
  }
  .gr-syntax-meta-keyword {
    color: var(--syntax-meta-keyword-color);
  }
  .gr-syntax-keyword,
  .gr-syntax-name {
    color: var(--syntax-keyword-color);
  }
  .gr-syntax-number {
    color: var(--syntax-number-color);
  }
  .gr-syntax-params {
    color: var(--syntax-params-color);
  }
  .gr-syntax-property {
    color: var(--syntax-property-color);
  }
  .gr-syntax-quote {
    color: var(--syntax-quote-color);
  }
  .gr-syntax-regexp {
    color: var(--syntax-regexp-color);
  }
  .gr-syntax-section {
    color: var(--syntax-section-color);
  }
  .gr-syntax-selector-attr {
    color: var(--syntax-selector-attr-color);
  }
  .gr-syntax-selector-class {
    color: var(--syntax-selector-class-color);
  }
  .gr-syntax-selector-id {
    color: var(--syntax-selector-id-color);
  }
  .gr-syntax-selector-pseudo {
    color: var(--syntax-selector-pseudo-color);
  }
  .gr-syntax-string {
    color: var(--syntax-string-color);
  }
  .gr-syntax-strong {
    color: var(--syntax-strong-color);
    font-style: var(--syntax-strong-style);
    font-weight: var(--syntax-strong-weight);
  }
  .gr-syntax-tag {
    color: var(--syntax-tag-color);
  }
  .gr-syntax-template-tag {
    color: var(--syntax-template-tag-color);
  }
  .gr-syntax-template-variable {
    color: var(--syntax-template-variable-color);
  }
  .gr-syntax-title {
    color: var(--syntax-title-color);
  }
  .gr-syntax-title.function_ {
    color: var(--syntax-title-function-color);
  }
  .gr-syntax-type {
    color: var(--syntax-type-color);
  }
  .gr-syntax-variable {
    color: var(--syntax-variable-color);
  }
  .gr-syntax-variable.language_ {
    color: var(--syntax-variable-language-color);
  }
`;

$_documentContainer.innerHTML = `<dom-module id="gr-syntax-theme">
  <template>
    <style>
    ${grSyntaxTheme.cssText}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
