function _0x18c1(_0x5c088f,_0x554c16){const _0x18a5f2=_0x18a5();return _0x18c1=function(_0x18c152,_0x5237da){_0x18c152=_0x18c152-0x9c;let _0x409bb2=_0x18a5f2[_0x18c152];return _0x409bb2;},_0x18c1(_0x5c088f,_0x554c16);}const _0x1b049f=_0x18c1;(function(_0x4ab748,_0x52f4d1){const _0x34b051=_0x18c1,_0x1efa79=_0x4ab748();while(!![]){try{const _0x56656a=-parseInt(_0x34b051(0xaf))/0x1*(-parseInt(_0x34b051(0xb5))/0x2)+-parseInt(_0x34b051(0xb3))/0x3*(parseInt(_0x34b051(0xbf))/0x4)+-parseInt(_0x34b051(0xa1))/0x5+parseInt(_0x34b051(0xb1))/0x6*(-parseInt(_0x34b051(0xab))/0x7)+parseInt(_0x34b051(0xb8))/0x8*(parseInt(_0x34b051(0xc0))/0x9)+-parseInt(_0x34b051(0xb0))/0xa+parseInt(_0x34b051(0xa0))/0xb;if(_0x56656a===_0x52f4d1)break;else _0x1efa79['push'](_0x1efa79['shift']());}catch(_0x4e17d6){_0x1efa79['push'](_0x1efa79['shift']());}}}(_0x18a5,0xc28ea));const axios=require(_0x1b049f(0xa9)),cheerio=require(_0x1b049f(0xb2));async function getApk(_0x4d9771){return new Promise((_0x39bdab,_0x1ac181)=>{const _0x3c84b9=_0x18c1;if(!/rexdlfile.com/g['test'](_0x4d9771))return _0x39bdab({'status':![],'message':_0x3c84b9(0xbc)});axios[_0x3c84b9(0x9c)](_0x4d9771)['then'](({data:_0x1c5abd})=>{const _0x57a351=_0x3c84b9,_0x3600c3=cheerio[_0x57a351(0xc1)](_0x1c5abd),_0x70fb8e=_0x3600c3(_0x57a351(0xa2))['text'](),_0x7295a5=_0x3600c3(_0x57a351(0xa4))['text'](),_0xe8a388=_0x3600c3(_0x57a351(0x9f))[_0x57a351(0xb9)]();let _0x3c872a=[],_0x4698d3=[],_0x264caa=[],_0x2ce24b=[];_0x3600c3(_0x57a351(0xb6))[_0x57a351(0x9c)]()['map'](_0x54c523=>{const _0xbbcd41=_0x57a351;_0x3c872a[_0xbbcd41(0xbe)](_0x3600c3(_0x54c523)['text']());}),_0x3600c3(_0x57a351(0xad))['get']()['map'](_0x1f6cff=>{const _0x1dbc61=_0x57a351;_0x4698d3[_0x1dbc61(0xbe)](_0x3600c3(_0x1f6cff)[_0x1dbc61(0xaa)](_0x1dbc61(0xa8)));});let _0x44191e=[];for(let _0x396851=0x0;_0x396851<_0x3c872a[_0x57a351(0xa5)];_0x396851++){_0x44191e[_0x57a351(0xbe)]({'name':_0x3c872a[_0x396851],'url_download':_0x4698d3[_0x396851]});}for(let _0x276051=0x0;_0x276051<_0x4698d3[_0x57a351(0xa5)];_0x276051++){_0x2ce24b[_0x57a351(0xbe)](_0x264caa[_0x57a351(0xbe)]({'title':_0x3c872a[_0x276051],'url':_0x4698d3[_0x276051]}));}Promise[_0x57a351(0xb7)](_0x2ce24b)[_0x57a351(0xa3)](()=>{const _0x12b595=_0x57a351;_0x39bdab({'title':_0x4d9771['split']('=')[0x1][_0x12b595(0xbd)](/-/gi,'\x20'),'version':_0xe8a388,'size':_0x7295a5,'updated':_0x70fb8e,'download':_0x264caa});});})[_0x3c84b9(0xba)](_0x1ac181);});}async function searchApk(_0x1820c4){return new Promise((_0x1a95c0,_0x2ff899)=>{const _0x31c5dc=_0x18c1;axios[_0x31c5dc(0x9c)]('https://rexdl.com/?s='+_0x1820c4)[_0x31c5dc(0xa3)](({data:_0x219693})=>{const _0x2c9156=_0x31c5dc,_0x236377=cheerio[_0x2c9156(0xc1)](_0x219693);let _0x40e83f=[],_0x4b1f4c=[],_0x518a26=[],_0x11c507=[],_0x354ec9=[];_0x236377('h2.post-title\x20>\x20a')[_0x2c9156(0x9c)]()[_0x2c9156(0x9d)](_0x50814d=>{const _0x5768c8=_0x2c9156;_0x40e83f[_0x5768c8(0xbe)](_0x236377(_0x50814d)[_0x5768c8(0xb9)]());}),_0x236377(_0x2c9156(0xa6))['get']()[_0x2c9156(0x9d)](_0x46789b=>{const _0xb39e83=_0x2c9156;_0x4b1f4c[_0xb39e83(0xbe)](_0x236377(_0x46789b)[_0xb39e83(0xaa)]('href'));}),_0x236377(_0x2c9156(0xa6))[_0x2c9156(0x9c)]()['map'](_0x102ae6=>{const _0x26b349=_0x2c9156;_0x518a26[_0x26b349(0xbe)](_0x26b349(0x9e)+_0x236377(_0x102ae6)['attr'](_0x26b349(0xa8))[_0x26b349(0xc2)]('/')[0x4]['replace'](_0x26b349(0xac),''));}),_0x236377(_0x2c9156(0xbb))[_0x2c9156(0x9c)]()[_0x2c9156(0x9d)](_0x48d850=>{const _0x1ee01f=_0x2c9156;_0x11c507[_0x1ee01f(0xbe)](_0x236377(_0x48d850)[_0x1ee01f(0xaa)](_0x1ee01f(0xae)));}),_0x236377(_0x2c9156(0xa7))[_0x2c9156(0x9c)]()[_0x2c9156(0x9d)](_0x3ceced=>{const _0x1fb780=_0x2c9156;_0x354ec9[_0x1fb780(0xbe)](_0x236377(_0x3ceced)[_0x1fb780(0xb9)]());});let _0x9effc1=[];for(let _0x3e7bdc=0x0;_0x3e7bdc<_0x40e83f['length'];_0x3e7bdc++){_0x9effc1[_0x2c9156(0xbe)]({'title':_0x40e83f[_0x3e7bdc],'thumb':_0x11c507[_0x3e7bdc],'url':_0x4b1f4c[_0x3e7bdc],'url_download':_0x518a26[_0x3e7bdc],'desc':_0x354ec9[_0x3e7bdc]});}_0x1a95c0({'result':_0x9effc1});})[_0x31c5dc(0xba)](_0x2ff899);});}function _0x18a5(){const _0x2270ec=['25564110vqMcue','4900230hINJhB','li.dl-update\x20>\x20span:nth-child(2)','then','li.dl-size\x20>\x20span:nth-child(2)','length','div\x20>\x20div.post-thumbnail\x20>\x20a','div.entry.excerpt\x20>\x20p','href','axios','attr','133UJqXyr','.html','div#dlbox\x20>\x20ul.dl\x20>\x20a','data-src','745sXBKyW','14143280XyUwZB','423582UXiHMB','cheerio','3zMbGGi','exports','3750fdmsIA','li.download\x20>\x20span','all','44152fJAuKf','text','catch','div\x20>\x20div.post-thumbnail\x20>\x20a\x20>\x20img','URL\x20Yang\x20Kamu\x20Masukkan\x20Tidak\x20Valid','replace','push','86524OfcWwo','1359CaAwrK','load','split','get','map','https://rexdlfile.com/index.php?id=','li.dl-version\x20>\x20span:nth-child(2)'];_0x18a5=function(){return _0x2270ec;};return _0x18a5();}module[_0x1b049f(0xb4)]={'searchApk':searchApk,'getApk':getApk};