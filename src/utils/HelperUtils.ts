import jsPDF from "jspdf";

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

export const formatTranscript = (transcript: string, title: string, language: string, url: string) => {
  // Format and clean the subtitles
  const cleanedSubtitles = transcript
    .replace(/\d{2}:\d{2}:\d{2}[.,]\d{3} --> \d{2}:\d{2}:\d{2}[.,]\d{3}/g, '') // Remove timestamps
    .replace(/align:start.*?position:\d+%/g, '') // Remove alignment metadata
    .replace(/<[^>]*>/g, '') // Remove tags like <c> or <i>
    .replace(/\b(webvtt|kind:.*|language:.*)\b/gi, '') // Remove unwanted lines like "webvtt" or "language"
    .replace(/^\d+$/gm, '') // Remove standalone numbers
    .replace(/\n\s*\n/g, '\n') // Remove extra blank lines
    .trim();
  const goodTranscript = cleanDuplicateLines(cleanedSubtitles)

  // Combine short lines into paragraphs
  const combinedLines = goodTranscript
    .split('\n')
    .reduce((acc: string[], line: string) => {
      if (line.trim()) {
        if (acc.length > 0 && acc[acc.length - 1].length < 100) {
          acc[acc.length - 1] += ` ${line.trim()}`; // Append to the previous line
        } else {
          acc.push(line.trim()); // Start a new line
        }
      }
      return acc;
    }, [])
    .join('\n\n'); // Join with double newlines for readability
  const formattedTranscript = `Video title: ${title}\nVideo URL: ${url}\nVideo language: ${language}\n\n--------------------------------\n\n${combinedLines}`;

  return formattedTranscript;
}

export const cleanDuplicateLines = (transcript: string, lineLength = 80) => {
  const lines = transcript.split("\n");
  const cleanedLines = [];
  let previousLine = "";
  let currentParagraph = "";

  for (let line of lines) {
    // Trim whitespace for better comparison
    line = line.trim();

    // Skip empty lines
    if (!line) continue;

    // Avoid duplicates
    if (line !== previousLine) {
      currentParagraph += line + " ";
      previousLine = line;
    }

    // If the current paragraph exceeds the line length, add it to the result
    if (currentParagraph.length >= lineLength) {
      cleanedLines.push(currentParagraph.trim());
      currentParagraph = "";
    }
  }

  // Add the last paragraph if it's not empty
  if (currentParagraph) {
    cleanedLines.push(currentParagraph.trim());
  }

  // Return the formatted text as a single string
  return cleanedLines.join("\n");

}


export const generateAndDownloadFile = (transcript: string, format: string, filename: string) => {
  const doc = new jsPDF();
  try {
    const blob = (() => {
      if (format === "txt") {
        return new Blob([transcript], { type: "text/plain;charset=utf-8" });
      } else if (format === "doc") {
        return new Blob(
          [`<html><body><pre>${transcript}</pre></body></html>`],
          { type: "application/msword" },
        );
      } else if (format === "pdf") {
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;
        const maxWidth = pageWidth - margin * 2;
        const lineHeight = 10;

        // Split text into lines
        const lines = doc.splitTextToSize(transcript, maxWidth);
        let cursorY = margin;

        lines.forEach((line: any) => {
          if (cursorY + lineHeight > pageHeight - margin) {
            doc.addPage(); // Add a new page if content exceeds the current page
            cursorY = margin;
          }
          doc.text(line, margin, cursorY);
          cursorY += lineHeight;
        });

        return doc.output("blob");
      }
      return null;
    })();

    if (!blob) throw new Error("Unsupported file format");

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${filename}.${format}`;
    anchor.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating and downloading file:", error);
  }
};
