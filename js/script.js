const _0x2a8f5e=_0x34e6;function _0x34e6(_0x5a0e9f,_0x46fd28){const _0x301a64=_0x301a();return _0x34e6=function(_0x34e6e5,_0x288f91){_0x34e6e5=_0x34e6e5-0x1f1;let _0x621a9b=_0x301a64[_0x34e6e5];return _0x621a9b;},_0x34e6(_0x5a0e9f,_0x46fd28);}(function(_0x3cf9c7,_0xdb8d7c){const _0x1bfdad=_0x34e6,_0x264206=_0x3cf9c7();while(!![]){try{const _0x5dda51=-parseInt(_0x1bfdad(0x20a))/0x1+parseInt(_0x1bfdad(0x21d))/0x2+-parseInt(_0x1bfdad(0x1f3))/0x3+parseInt(_0x1bfdad(0x200))/0x4+-parseInt(_0x1bfdad(0x1fb))/0x5+-parseInt(_0x1bfdad(0x206))/0x6*(parseInt(_0x1bfdad(0x202))/0x7)+-parseInt(_0x1bfdad(0x20b))/0x8*(-parseInt(_0x1bfdad(0x1f5))/0x9);if(_0x5dda51===_0xdb8d7c)break;else _0x264206['push'](_0x264206['shift']());}catch(_0x50ff9d){_0x264206['push'](_0x264206['shift']());}}}(_0x301a,0xf118f));function _0x301a(){const _0x41a67b=['get','entries','getElementById','innerHTML','clipboard','1165892hjlvBH','textarea','btn-copy-go-prompt','focus','prompt-preview-content','4075074gNddjq','forEach','12789USfTeh','appendChild','addEventListener','field','btn-copy-prompt','placeholder','6233150wzzGaA','div','click','exec','replace','2140868neETSu','text','2898GSgenE','nearest','href','span','12534CUZbFO','textContent','open','input','1405513HKEwxb','26712SDPUSl','search','_self','from','className','scrollIntoView','createElement','innerText','location','prompt-editor','center','prompt','\x20highlight'];_0x301a=function(){return _0x41a67b;};return _0x301a();}let currentHighlight=null;const fieldValues={};function findUniqueLacunas(_0x178637){const _0x1b0b73=_0x34e6,_0x390c49=/\[([^\]]+)\]/g;let _0x11721f;const _0x30d89c=new Set();while((_0x11721f=_0x390c49[_0x1b0b73(0x1fe)](_0x178637))!==null){_0x30d89c['add'](_0x11721f[0x1]);}return Array[_0x1b0b73(0x20e)](_0x30d89c);}function highlightField(_0x57a2b6){const _0x3ab906=_0x34e6;currentHighlight=_0x57a2b6,updatePreview();const _0x5b6b90=document[_0x3ab906(0x21a)](_0x3ab906(0x1f2)),_0x45a88e=_0x5b6b90['getElementsByTagName'](_0x3ab906(0x205));for(let _0x35a8f8 of _0x45a88e){if(_0x35a8f8['textContent']===(fieldValues[_0x57a2b6]||'['+_0x57a2b6+']')){_0x35a8f8[_0x3ab906(0x210)]({'behavior':'smooth','block':_0x3ab906(0x215),'inline':_0x3ab906(0x203)});break;}}}function removeHighlight(){currentHighlight=null,updatePreview();}function populateEditor(_0x17ca0f){const _0x49dffd=_0x34e6,_0x8024f7=document[_0x49dffd(0x21a)](_0x49dffd(0x214));_0x17ca0f[_0x49dffd(0x1f4)]((_0x5115ab,_0x45fd95)=>{const _0x1ad9fd=_0x49dffd;fieldValues[_0x5115ab]='';const _0x42e9de=document[_0x1ad9fd(0x211)](_0x1ad9fd(0x1fc));_0x42e9de[_0x1ad9fd(0x20f)]='prompt-editor-field';const _0x244337=document[_0x1ad9fd(0x211)]('h4');_0x244337[_0x1ad9fd(0x21b)]='<span\x20style=\x22color:\x20white\x22>'+(_0x45fd95+0x1)+'.</span>\x20'+_0x5115ab;const _0x5ae6c9=document[_0x1ad9fd(0x211)](_0x1ad9fd(0x21e));_0x5ae6c9['type']=_0x1ad9fd(0x201),_0x5ae6c9[_0x1ad9fd(0x1fa)]='Digite\x20aqui',_0x5ae6c9[_0x1ad9fd(0x1f7)](_0x1ad9fd(0x209),function(){fieldValues[_0x5115ab]=this['value'],updatePreview();}),_0x5ae6c9[_0x1ad9fd(0x1f7)](_0x1ad9fd(0x1f1),function(){highlightField(_0x5115ab);}),_0x5ae6c9['addEventListener']('blur',function(){removeHighlight();}),_0x42e9de[_0x1ad9fd(0x1f6)](_0x244337),_0x42e9de['appendChild'](_0x5ae6c9),_0x8024f7[_0x1ad9fd(0x1f6)](_0x42e9de);});}function escapeRegExp(_0x4bdbda){const _0x31b5b=_0x34e6;return _0x4bdbda[_0x31b5b(0x1ff)](/[.*+?^${}()|[\]\\]/g,'\x5c$&');}function updatePreview(){const _0x588d74=_0x34e6;let _0x1e8566=texto;for(const [_0x4b7f7c,_0x459aab]of Object[_0x588d74(0x219)](fieldValues)){const _0xc56389=_0x459aab||'['+_0x4b7f7c+']',_0x189721=currentHighlight===_0x4b7f7c?_0x588d74(0x217):'',_0x3e4ffe=escapeRegExp('['+_0x4b7f7c+']'),_0x10905a=new RegExp(_0x3e4ffe,'g'),_0x34557f=document[_0x588d74(0x211)]('span');_0x34557f[_0x588d74(0x20f)]=_0x588d74(0x1f8)+_0x189721,_0x34557f[_0x588d74(0x207)]=_0xc56389;const _0x237011=document[_0x588d74(0x211)]('div');_0x237011[_0x588d74(0x1f6)](_0x34557f),_0x1e8566=_0x1e8566[_0x588d74(0x1ff)](_0x10905a,_0x237011[_0x588d74(0x21b)]);}document[_0x588d74(0x21a)](_0x588d74(0x1f2))[_0x588d74(0x21b)]=_0x1e8566;}function copyFinalPrompt(){const _0x4ef9f1=_0x34e6;let _0x32b793=texto;for(const [_0x137828,_0xf4733]of Object[_0x4ef9f1(0x219)](fieldValues)){const _0x36bcb1=_0xf4733||'['+_0x137828+']',_0x2a066e=new RegExp('\x5c['+_0x137828+'\x5c]','g');_0x32b793=_0x32b793[_0x4ef9f1(0x1ff)](_0x2a066e,''+_0x36bcb1);}navigator[_0x4ef9f1(0x21c)]['writeText'](_0x32b793);}const url=window[_0x2a8f5e(0x213)][_0x2a8f5e(0x204)],urlObj=new URL(url),queryString=urlObj[_0x2a8f5e(0x20c)],params=new URLSearchParams(queryString),texto=params[_0x2a8f5e(0x218)](_0x2a8f5e(0x216)),lacunas=findUniqueLacunas(texto);populateEditor(lacunas),updatePreview();const btnCopy=document[_0x2a8f5e(0x21a)](_0x2a8f5e(0x1f9)),btnCopyGo=document[_0x2a8f5e(0x21a)](_0x2a8f5e(0x21f));btnCopy['addEventListener'](_0x2a8f5e(0x1fd),()=>{const _0x1f389a=_0x2a8f5e;copyFinalPrompt(),btnCopy[_0x1f389a(0x212)]='Copiado!',setTimeout(function(){const _0x3e746f=_0x1f389a;btnCopy[_0x3e746f(0x212)]='Copiar';},0x5dc);}),btnCopyGo['addEventListener'](_0x2a8f5e(0x1fd),()=>{copyFinalPrompt(),setTimeout(function(){const _0x3a03e9=_0x34e6;window[_0x3a03e9(0x208)]('https://chat.openai.com/',_0x3a03e9(0x20d));},0x64);}),document['querySelector'](_0x2a8f5e(0x21e))[_0x2a8f5e(0x1f1)]();