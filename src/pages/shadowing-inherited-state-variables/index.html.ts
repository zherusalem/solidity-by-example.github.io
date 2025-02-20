// metadata
export const version = "0.8.10"
export const title = "Shadowing Inherited State Variables"
export const description = "An example of shadowing state variables by inheritance"

const html = `<p>Unlike functions, state variables cannot be overridden by re-declaring it
in the child contract.</p>
<p>Let&#39;s learn how to correctly override inherited state variables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name = <span class="hljs-string">"Contract A"</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> name;
    }
}

<span class="hljs-comment">// Shadowing is disallowed in Solidity 0.6</span>
<span class="hljs-comment">// This will not compile</span>
<span class="hljs-comment">// contract B is A {</span>
<span class="hljs-comment">//     string public name = "Contract B";</span>
<span class="hljs-comment">// }</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// This is the correct way to override inherited state variables.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        name = <span class="hljs-string">"Contract C"</span>;
    }

    <span class="hljs-comment">// C.getName returns "Contract C"</span>
}
</code></pre>
`

export default html
