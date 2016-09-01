# Get Windows Update KB Catalog
This is a hacked together bookmarklet that can get the RSS file link for Windows Update KB articles for quick and easy access on non-IE web browsers.

This will auto detect the KB article ID if you're on the support.microsoft.com website, otherwise it will have you enter the article ID manually.

To add it to your bookmarks, make a new bookmark and add this to the location:

```javascript:(function(){var%20splitkb=window.location.href.split("/");if(splitkb[2]=="support.microsoft.com"&&splitkb[4]=="kb"){window.location.href="http://catalog.update.microsoft.com/v7/site/Rss.aspx?q=KB"+splitkb[5];}else{var%20kbartprompt=prompt("Could%20not%20find%20KB%20article%20ID.%20Please%20enter%20it%20here:","");if(kbartprompt!=null){window.location.href="http://catalog.update.microsoft.com/v7/site/Rss.aspx?q=KB"+kbartprompt;}}})();```
