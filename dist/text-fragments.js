(async()=>{const t=document.location.hash;if("fragmentDirective"in Location.prototype||!t)return;const e=await import("./text-fragment-utils-0050cb90.js");Location.prototype.fragmentDirective={};(()=>{const i=e.getFragmentDirectives(t),r=e.parseFragmentDirectives(i);e.processFragmentDirectives(r)})()})();
