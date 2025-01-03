
export function convertBytesToMB(sizeInBytes: number, decimals: number = 2): string {
  if (sizeInBytes <= 0) {
    return '0 MB';
  }

  const sizeInMB = sizeInBytes / (1024 * 1024); // Convert bytes to MB
  return `${sizeInMB.toFixed(decimals)} MB`;   // Format to specified decimals
}

export const MockVideoDetails = {
  "title": "Why Self Improvement Feels Like a Battle And How to Finally Win",
  "channelName": "Sir JBD",
  "channelLogoUrl": "https://yt3.ggpht.com/H08TJ4P1GOuFNEsv4w6b892ictaUQSASqPlVhbvmZE6-jSY4mS_EnCkuPo2sqJh6MudK6GbC=s240-c-k-c0x00ffffff-no-rj",
  "thumbnailUrl": "https://i.ytimg.com/vi_webp/mNkzw9bh0V8/maxresdefault.webp",
  "formats": [
    {
      "quality": "2160p60",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=315&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=307397897&dur=333.149&lmt=1733598663451737&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAKMaP9_zMl0B4ZV18Cz_PdPqdPG5VoMWMkElE5B-HHOjAiAdUUwXJZLECV35_a8_-YGBJO-9kY6SzGdBAuS28AYdnQ%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 307397897,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 315
    },
    {
      "quality": "1440p60",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=308&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=156630297&dur=333.149&lmt=1733598660526991&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAPViIVglQdHa0oOpm0O7JENzLK2rCT0B-SU9EH8C8ljLAiEAn5ok--2Th9AOqqRhCZRnWHWS-EY6gLTA3RjXC8AnOic%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 156630297,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 308
    },
    {
      "quality": "1080p60",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=299&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=94852849&dur=333.150&lmt=1733598629304802&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAKl8BF5H7K3NQbLFTCLWtJupbOaM80vQAqIUKSAOVahFAiEA0S-El0aQdwWzYO5AHiAWUCad12ApMoaMNZvRxxSwqDQ%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 94852849,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 299
    },
    {
      "quality": "720p60",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=298&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=53704942&dur=333.150&lmt=1733598628941305&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAPjOroj28nTcq7nEqRDF0pU4aZa_ZwYUII_XeXNfmTH9AiEAgcaQXIS3R1wj9BBwNkjGO5EDQTBXeIfwgFIuj057N0I%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 53704942,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 298
    },
    {
      "quality": "1080p60",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=303&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=47741930&dur=333.149&lmt=1733598657824142&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgO2G2Cq1KlWjx3xqB5m4Jmg-NZZUKPfpRPhYHvvaZjMoCIQDyT0jJU0dV3QUSfLBRSXGejftXb_ooXpr9KTEjC49eWg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 47741930,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 303
    },
    {
      "quality": "720p",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ7u8LPuX4t4Puo_pyQQ&ip=146.196.32.87&id=o-AMkVOaOz7-vJa07YXFtF343E2PT8eXpHIFGfG_29wQ7f&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaeenlk&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI_16eYOrhX9eT6byp52JVLSdkF-s9LUg05m9LiKp4x2WDEKEO2ykujrXkL4S57ku5_Zo-_X1Hyt&vprv=1&svpuc=1&mime=video%2Fmp4&ns=coegF_39ah5tO5KAk3ayb9UQ&rqh=1&gir=yes&clen=39915368&dur=333.166&lmt=1733598628890984&mt=1734286376&fvip=4&keepalive=yes&fexp=51326932%2C51331020%2C51335594%2C51347747&c=MWEB&sefc=1&txp=6209224&n=PqakeLLmOu5Wtw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgftfANV372djEiSDDlDGsAcbg3igXnbtRrWjxzWjAs6sCIGLUxtFxW6dbltsdlN-GUY1L9SqVALekFNohdQh5i_Gs&sig=AJfQdSswRAIgUTfEWgJsiMZtJjSzkTn9XcwHGp-5bFWJtUDDqk11cW8CIBjQDRNCy19EiNGPo6XzwPDxZ8uhJSmsIv7O4GBCKEDX",
      "duration": "00:05:33",
      "sizeInBytes": 39915368,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 136
    },
    {
      "quality": "720p60",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=302&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=33528677&dur=333.149&lmt=1733598656944989&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIAjJzfAIILWoBWkPi-AzzUCETEeTqTIbhKnunULzDFiAiAa-yyQltPL2lZ4kLgkKIXGTiyzfqmZJAKLxVhZppHtpg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 33528677,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 302
    },
    {
      "quality": "480p",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=135&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=22249343&dur=333.166&lmt=1733598628724363&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAJ0kRuyEf_-GQJgWcxvTwY15WJJZopyjYIBKQOQJyVDdAiEAoRY_2aT_LjHnJZeneem8f742B3lkMqNEZL2bvZ4ecv8%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 22249343,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 135
    },
    {
      "quality": "720p",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ7u8LPuX4t4Puo_pyQQ&ip=146.196.32.87&id=o-AMkVOaOz7-vJa07YXFtF343E2PT8eXpHIFGfG_29wQ7f&itag=247&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaeenlk&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI_16eYOrhX9eT6byp52JVLSdkF-s9LUg05m9LiKp4x2WDEKEO2ykujrXkL4S57ku5_Zo-_X1Hyt&vprv=1&svpuc=1&mime=video%2Fwebm&ns=coegF_39ah5tO5KAk3ayb9UQ&rqh=1&gir=yes&clen=21938498&dur=333.166&lmt=1733598659835359&mt=1734286376&fvip=4&keepalive=yes&fexp=51326932%2C51331020%2C51335594%2C51347747&c=MWEB&sefc=1&txp=6209224&n=PqakeLLmOu5Wtw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgftfANV372djEiSDDlDGsAcbg3igXnbtRrWjxzWjAs6sCIGLUxtFxW6dbltsdlN-GUY1L9SqVALekFNohdQh5i_Gs&sig=AJfQdSswRgIhAPfgb3gHSvykEj56tvwRLBOQHnoeNS85lmKnmCuYuFtnAiEA5NTESBbStAAMDNHS6VDnWqdjvQeFxM9IOZDXkcTAknQ%3D",
      "duration": "00:05:33",
      "sizeInBytes": 21938498,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 247
    },
    {
      "quality": "360p",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ7u8LPuX4t4Puo_pyQQ&ip=146.196.32.87&id=o-AMkVOaOz7-vJa07YXFtF343E2PT8eXpHIFGfG_29wQ7f&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaeenlk&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI975LZRhjz1GDD9lZ0n5926b9tWbheQNnk3f-SfVpgu7zMfS14FLuaHl6Mt7fegeUsvbIRagEQa&vprv=1&svpuc=1&mime=video%2Fmp4&ns=OvzdNLjHAcY2Y2eEkGu2RSgQ&rqh=1&gir=yes&clen=14722511&ratebypass=yes&dur=333.299&lmt=1733598629857208&mt=1734286376&fvip=4&fexp=51326932%2C51331020%2C51335594%2C51347747&c=MWEB&sefc=1&txp=6209224&n=vmrZOigT1ELqRw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgftfANV372djEiSDDlDGsAcbg3igXnbtRrWjxzWjAs6sCIGLUxtFxW6dbltsdlN-GUY1L9SqVALekFNohdQh5i_Gs&sig=AJfQdSswRgIhAIG4FkBNAo-FSHoPR2Fw8dfN8aLZKgH5KnTnj4pZg6vAAiEAxEJfh1yn8B0fBEQSu8VQgdMWRVgnnFC3pLrWV4kQ344%3D",
      "duration": "00:05:33",
      "sizeInBytes": 14722511,
      "isAudioFile": true,
      "isVideoFile": true,
      "isMuxedFile": true,
      "formatId": 18
    },
    {
      "quality": "360p",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=134&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=12742912&dur=333.166&lmt=1733598628735372&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIBeHxhEPb_9Oqyrrs7EHIDBCkcpxue6deGQvOVcOyXwAiAUEd1tYFSFiK9vOKNvSqJcw7LuhbrbutkeR64ZmYgP8g%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 12742912,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 134
    },
    {
      "quality": "480p",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=244&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=12255946&dur=333.166&lmt=1733598658181311&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAPeYGNdeCHRwjDxt5BPhJHc_zS_AB9HFRs7riDdrqxhEAiBxwn_KEk7QFANY6f4T0mmwgEY7fa-MalZQPGEuBlwnJA%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 12255946,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 244
    },
    {
      "quality": "360p",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=243&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=7536752&dur=333.166&lmt=1733598632913407&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgL5IJSJqvQb2GYbVGWdpz7_mF5GWNHp2ZEBimfcQqs1ACIEYEYAWXG3FtePGLoGKVLoAwIfruL4AYAeUWIq_U0moI&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 7536752,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 243
    },
    {
      "quality": "240p",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=133&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=6886427&dur=333.166&lmt=1733598628630981&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgKjEs4TKwQft407_u5bM_Hnoo15W6hGkDf1iWOfN7VhcCIQDjqtGYB19-RflSJ3gw4dyrs-O4OpQYYjMZ8ZQpRx5WlQ%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 6886427,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 133
    },
    {
      "quality": "240p",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=242&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=4735094&dur=333.166&lmt=1733598657711873&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAOrPpmqKmzfXDMsmmr_kxg7b7o26waZNDflvdhRS3SHYAiEA49Sn3SR2nitazHM3JIpBJxFXusJisH6CuXt7Hst2yJc%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 4735094,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 242
    },
    {
      "quality": "144p",
      "mimeType": "mp4",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=160&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=3307103&dur=333.166&lmt=1733598628659763&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgJwySk5NhVf21unJhYVLvhY9LXjC3HI3xUdgHR5IBdecCIAd9yScVC4VQNgKuZb6n0AgpL0IdA0Vh8NjkLzYNq4xI&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 3307103,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 160
    },
    {
      "quality": "144p",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=2917305&dur=333.166&lmt=1733598658749060&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6209224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgTQbqcGIU9KKKL9-McylXmHcRh9WToD8yVO2rLFAnwXwCIGE9GneERVuOJo2cW_bSO_fUJo2_ZREPUHbCKcGyi8g4&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 2917305,
      "isAudioFile": false,
      "isVideoFile": true,
      "isMuxedFile": false,
      "formatId": 278
    },
    {
      "quality": "medium",
      "mimeType": "webm",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=5648887&dur=333.181&lmt=1733598651200738&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6208224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgOZb6mnIdhdssTVRsKymO7Wrffo8RFXsnd0n90j21IhsCIQC7n0s8Rvod-BP6HPbOe1K4KvLXC8_tloaN9XG8-q6M2w%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 5648887,
      "isAudioFile": true,
      "isVideoFile": false,
      "isMuxedFile": false,
      "formatId": 251
    },
    {
      "quality": "medium",
      "mimeType": "m4a",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=5393558&dur=333.206&lmt=1733598627696128&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6208224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAKh8r8BUjv2MBVMU5POvOxqtzuL4a5VoGA-R44ag959CAiEAn6WyssXfz6RqFOsLdYOp_SwCX6TzyrZJG9SnecCC5CQ%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 5393558,
      "isAudioFile": true,
      "isVideoFile": false,
      "isMuxedFile": false,
      "formatId": 140
    },
    {
      "quality": "low",
      "mimeType": "m4a",
      "url": "https://rr8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1734308511&ei=Px5fZ9HbI6CV4t4P-u3eeQ&ip=146.196.32.87&id=o-AKMg6wEr0-F4jtpJlR9MqqpcvYP-tqlP4GWy9j3luOA9&itag=139&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1734286911%2C&mh=IX&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaelnez&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1632500&bui=AfMhrI8F7drtnll5TqmlSvobUAnZE8End2KghbhNNNAzX8HemPBAFmEt1H7ekofoxFYbtl_Wsli_IA_6&spc=x-caUC35oL6BwIwBGIKRKsK2PkC4-haCrvdvwfOlNfK68RJK9w&vprv=1&svpuc=1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=2033691&dur=333.299&lmt=1733598629630048&mt=1734286376&fvip=2&keepalive=yes&fexp=51326932%2C51335594%2C51347747&c=IOS&txp=6208224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgQHlRkzYIRJY_hoOwIw9TwmbJKji-wWsvJLZqxg-VzfACIErvRmqVuAcQYpnAkaBy7nGtGnsDM78-6x7WeAQSqXKf&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRQIhAO2P4bd3dePj1m_r6DTzw07YF3DcBmdvyxawgNjaBYRtAiApv7C7KsC7jzOvwBehjvrKuDLKcDG78q71hCVF7JVT9w%3D%3D",
      "duration": "00:05:33",
      "sizeInBytes": 2033691,
      "isAudioFile": true,
      "isVideoFile": false,
      "isMuxedFile": false,
      "formatId": 139
    }
  ],
  "duration": "00:05:33",
  "youtubeVideoAge": "8 days ago",
  "totalViews": "70"
}

export const deviceSizeModes = {
  "Browser view": [
    {
      label: "Homepage Large (360x205)",
      dimensions: "360x205",
      deviceType: "desktop",
    },
    {
      label: "Homepage Small (240x135)",
      dimensions: "240x135",
      deviceType: "desktop",
    },
    {
      label: "Sidebar Suggested Video (188x94)",
      dimensions: "188x94",
      deviceType: "search",
    },
    {
      label: "Search Result Large (360x202)",
      dimensions: "360x202",
      deviceType: "search",
      showDescription: true,
    },
    {
      label: "Search Result Small (240x135)",
      dimensions: "240x135",
      deviceType: "search",
      showDescription: true,
    },
    { label: "Channel Page (270x150)", dimensions: "270x150" },
    { label: "Channel Page Small (198x112)", dimensions: "198x112" },
    {
      label: "Watch Later (540x106)",
      dimensions: "360x120",
      deviceType: "search",
    },
  ],
  "Mobile view": [
    { label: "Mobile Homepage (320x180)", dimensions: "320x180", deviceType: "desktop", showDescription: false },
    { label: "Mobile Suggested (168x94)", dimensions: "168x94", deviceType: "search", },
    { label: "Mobile Search (320x180)", dimensions: "320x180" },
  ],
};

export
  const mockTranscript = `
Video title: BRAIN ROT | Why You Are Losing Control Of Your Brain?
    
Video URL: https://youtu.be/H86iO0mtsDI?si=xgiIxMo3USRd3wi4
    
Video language: English (auto-generated)
    
--------------------------------

[Music] [Music] you know only about 15 % of you will watch this video through to the end think about that in a few minutes most of you will be gone lured Away by another notification a fresh piece of content some shiny new dopamine hit and know I don't blame you I get it your brain my brain in fact everyone's brain is in the midst of a massive reiring we've never seen in human history it's a pattern that's literally happening across every social platform you know that Restless feeling that itch to check your phone that inability to stay put some call it and let me confess something I'm making this video because honestly lately I've been feeling all of it too the same restlessness that same short circuit in my inability to read books I'm finding it harder to sit through movies TV shows and harder to Simply think I am terrified of losing this ability but I can't quit social media because it's my job so I thought what better way to study this phenomena the history the future and why all of it is happening and also share everything that I learned with all of you guys those who stuck till here thank you so much stick with me for the next 10 minutes because I'll show you exactly what's happening inside your head why it's happening and what we can do about it it's really important because I feel if we don't understand how our little ancient Hardware reacts to Modern overload we risk losing the very capacities that's Focus creativity Insight that makes this hum as you're watching this video like right now your brain is being rewired in real time but to understand exactly what's going on you need to look at how our brains evolve to process information in the first place we're going back in time let me introduce you to the OG human the hunter gatherer his brain which is basically very identical to ours evolved over hundreds of thousands of years to do something very specific let pay attention to what matters and filter out what doesn't for example when he sees a predator or sees berries that's his food his brain releases dopamine a chemical that says hey this is important pay attention to this but fast forward to 2024 you know we still have that same basic brain architecture but now instead of the occasional Predator that we stumbled upon now and then our brains are continuously being flooded with the same reward chemicals not for finding food or avoiding danger but for this every notification every like every scroll each one triggering the same ancient circuitry you know brains can tell the difference between a crucial survival queue and a funny cat video both deliver novelty both release dopamine the result a Relentless cycle of seeking reward but even meaningless content can feel oddly compelling neuroscientist callar brains adaptability neuroplasticity see in simpler times this slow careful reiring took Generations but around 2007 coinciding with the smartphone Revolution and the rise of social media this rewiring went into hyperdrive within a decade and a half we have trained our brains to create constant novelty fragmenting our attention and making deep focus feel unnatural we're facing what scientists call a cognitive evolutionary mismatch you see our environment changed at light speed while our brains still think we are in the P to scene you know I'm very amused by how stupid yet how smart our little brains [Music] are so in the 1960s there was this Canadian theorist Marshall M who famously said the medium is the message he basically argued that form of communication shapes society's thinking more than the actual content and I feel like today this couldn't be more relevant you see before we had TV radio but now the media landscape is dominated by platforms which are engineered for short burst of attention vertical video feeds 15sec Clips trending hashtags and all of these platforms reward engagement above all else that means more novelty more shock more instantaneous gratification so the message we receiving isn't just funny dances or cat memes the deeper message is that brains should expect immediate rewards at all times and the mediums design endless scrolling autoplay infinite content conditions our cognitive patterns we might think that we have control over what we watch We're choosing what we watch but the truth is that the medium chooses how we think and that's what we're sort of being controlled by we're living in a world where attention is currency and every swipe is a microtransaction in a massive attention economy so over time as platforms capitalize on this more and more it'll rewire a neural Pathways making sustained thought more and more difficult and here's another interesting thing I learned while researching about content media and our brains that I wanted to share with you so back in 1976 The evolutionary biologist Richard Dawkins introduced the concept of memes in his book The Selfish Gene if you look at the original meaning of the word meme it meant a unit of cultur transmission spreading from mind to mind how Gene spread biologically but decades later internet has turned meme into a household word describing funny images jokes and viral tend that replicate endlessly online but let's actually pause for a moment and think about what memes represent tiny packets of information that spread at the speed of light memes today are often low on context high on emotional punch they're cultural shorthand intellect ual popcorn transmitted in seconds and you know jenzi and janala have entire vocabularies born not from books or lived experiences but from memes and viral references shoty blood like that's good fire that's R it's R right there mad lit on God on God no cap Sky toilet gach Ohio Phantom tax R this is literally how teenagers are talking right now you know there are random songs that are going viral on the internet slangs like mooy these microcultural phenomena they spread instantly UNM more from geography history or depth and if you think about it it's not just the audience even brands are adapting to this shift to look more relatable to the audience welcome to the goed ganga gurukula we have got the squad the energy we are the OG the drip chick on the point tech level lowkey top tier hit different I feel like Dawkin idea of meme as a cultural replicator has actually become supercharged in the digital age memes now are shaping our world view our inside jokes our language the way we talk our values without us ever slowing down to reflect yes they are fun they are fast and they reinforce a new neural wiring that's quick hits of amusement then on to the next thing you know if you look at the repercussion the fall of it on the younger Generations gen Z and gen Alpha the result is unprecedented teachers say the students struggle to focus on a single lesson kids who are born into this era of iPad and iones at the Age 2 have neural Pathways shaped by infinite feeds from day one studies show declining reading rates reduced tolerance for slower media like long form journalism documentary films and an impatience with anything that isn't immediately stimulating and it's all quite concerning because as we change our neural architecture our neural path ways mental health professionals have noticed increases in anxiety restlessness and the inability to handle boredom you know boredom once The Crucible of creative thought is now treated like it's a disease why sit on Daydream and we can instantly check social media why reflect upon anything in the world when social algorithms promise something entertaining right now this is essentially what we're calling brain rot the Oxford dictionary word of the year it's this profound shift on how we process information instead of building deep conceptual understanding of anything we Skip Along the surface of data streams instead of remembering what we saw we rely on the internet as an external hard drive instead of forming stable dopamine baselines where normal activities can also be satisfying we are perpetually chasing micro does of digital dopamine and to be honest there is another s to this another site that we can pick you know instead of mindlessly scrolling what if we use the internet to learn something genuinely valuable now I know it's also easy to blame the platform for our distraction but we need to remember that it's also a very powerful enabler without it one of the biggest companies in the world wouldn't exist and even me I owe much of my career to the internet learning skills outside traditional College connecting with people and building businesses all of it happened online in this hyper competitive world the right content right es can also help you stand out with just a few clicks you can learn almost anything sharpen your abilities and Gain real leverage of course navigating this crowded digital landscape isn't always easy that's why we want to guide you towards something truly worthwhile if you're a developer or aspiring to become one IBM skills build has amazing online courses designed just for you with expert Le training and flexible learning options IBM skills build provides practical Real World skills that top employers are looking for one such course that I found to be interesting is build your first chatboard in this course you'll learn the steps to create conversational chat Bots that can understand and respond to natural language you'll dive into the fundamentals of natural language processing or NLP and discover how to apply them to real world scenarios by the end of it you'll be able to build a chatbot that offers options and suggestions using both pre-build and custom conversations to generate engaging dialogue and I'll tell you the best part you can access the course for absolutely free on IBM skills build platform and you don't have to spend days on it all it takes is just 1 hour of your time be sure to enroll complete the course and share your digital stickers online with the # IBM skills build if you interested and want to check out the course I'm putting a link in the description below now back to the video I have a question for you have you ever thought about how our memories formed you know a brain it basically forms memories through repeated attention now of course this is little more simplified but when we focus deeply the hippocampus consolidates new information into long-term storage but here's another thought for you what if we never concentrate long enough what if every 30 seconds we interrupt ourselves with a notification our brain never gets the chance to encode a memory the result just in time memory where we trust Google or social fees to provide answers on demand the brain literally just goes like why store any knowledge when it's all just a click away dopamine again our favorite neurotransmitter is at the heart of this each swipe each tab or click can trigger a small dopamine release reinforcing this habit it's basically like a slot machine maybe the next goal will deliver something amazing and this intermittent reinforcement is highly addictive training us for shallowness neuroscientist Nicholas Carr once warned in his book the shallows that the internet changes not only what we think about but how we think and honestly today that warning feels like prophecy the attention economy companies monetizing every second of your gaze has economic implications as well you know productivity suffers when we can't sustain Focus creativity declines when we never let our minds wander and if you think about the second order effect of all of this countries itself depend on citizens who can grapple with complex issues think critically and consider multiple viewpoints but how will we do all of it if we are trained to consume content in tiny disjointed Snippets you know as we become more distractable we risk losing our competitive Advantage true Innovation emerges from Deep work from extended periods of uninterrupted thought and if you can't tolerate silence or complexity you might struggle to solve any big problems and there's so much to solve all of the problems that we face right now globally they all require sustained attention not a flurry of half red headlines so question is what do we do are we doomed to become shallow Restless scrollers well there's some good news you know neuroplasticity actually works both ways just how we adapted to this High dopamine environment we can also adapt to the alternative we can retrain our brains but of course it's not going to be easy it's going to be like building muscle after years of being a couch potato it takes a lot of intentional effort and I think the very first step is just recognizing the problem and having awareness and some intentionality towards fixing it I'll tell you some things that I've been trying that have worked for me first is essentially just admitting that this is something I need to fix second is Progressive overload for attention if you've trained your brain to watch 15 secondaries every day don't expect to read a heavy 500 page book right away start small 5 minutes of focus reading then 10 then 20 over time you'll build mental endurance your concentration muscle strengthens with incremental challenges second is environmental design uh which has really really helped me you know our environment nudges our Behavior so if your phone is always on your desk you'll grab it if you put it in another room when you're working or when you're studying or if you use website blockers or add a lot of friction to access infinite content that could work for you basically what we have to do is make Focus the path of least resistance but make distraction a path with lot of resistance next is just rebalancing the dopamine a little bit you know I've started setting aside periods maybe it's 30 minutes in a day or maybe it's an hour in a day where I just sit and literally do nothing stimulating no phone no TV no podcast no YouTube nothing but I feel like if you push through your brain somewhere resets his dopamine Baseline after a few weeks reading a book or just having a slow conversation can feel rewarding again and this is in pseudoscience neuroscientists have confirm that reducing stimulus overload can restore your capacity for deep focus and lastly it's just mindful consumption next time you watch a video or read an article reflect afterward what did I learn how does it connect to what I know I think a lot of schools and institutions also need to start thinking about this problem something the schools might need to start teaching is attention literacy addressing the problem with students um employers could incentivize deep work over constant slack pings I feel like platforms also somewhere should start considering more Humane design principles less infinite scroll and concent ated more towards conscious pausing and as consumers we can definitely demand better interfaces that respect our cognitive limits so if you're somebody who's stuck with me till here you are part of the 15% you've demonstrated that with intention and interest we can resist the pull of endless novalty I would like to leave you guys with few closing thoughts remember 100,000 years ago our ancestors learn to pay attention selectively for survival but today survival might depend on de learning how to pay attention deeply see we don't have to reject technology but we must insist that things that makes us human Focus memory creativity are worth protecting so after this video ends try not to click away immediately sit quietly for a minute let the information settle ask yourself what resonated with me what can I do differently tomorrow I feel like this small Act of intentional reflection fights brain Rod it reclaims a piece of your neural real estate from the infinite scroll and lastly I have a small request from all of you if you're somebody who's gone through this and fought this and are taking intentional action uh if you have found some things that have worked for you please please please do share them in the comments below I would love to read it I feel like it will also be valuable for all the other people who are watching this video yeah that's about it my name is Aina Maya thank you so much for watching please don't forget to hit the Subscribe button and please share this video with your friends family if you found it valuable


DISCLAIMER:


By using this tool to convert YouTube videos to Text, you acknowledge and agree to the following:


1. User Responsibility: You are responsible for ensuring that your use of this tool complies with all applicable copyright laws and YouTube's Terms of Use. This includes obtaining any necessary permissions from the original content creators before reproducing or distributing any content.


2. Content Ownership: The transcripts generated by this tool are based on publicly available content from YouTube. You do not own the rights to the original video content or its transcripts. All copyrights and ownership rights remain with the original content creators.


3. Attribution: This tool provides the URL of the original YouTube video for reference purposes. You are encouraged to include proper attribution when sharing the generated Text.


4. Limitations of Liability: We disclaim any liability for the misuse of the content generated through this tool. By using this tool, you agree to hold us harmless from any claims or disputes arising from your use of the content.
  `;