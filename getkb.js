var splitkb = window.location.href.split("/");

if (splitkb[2] == "support.microsoft.com" && splitkb[4] == "kb" ) {

window.location.href ="http://catalog.update.microsoft.com/v7/site/Rss.aspx?q=KB" + splitkb[5];
}
else
{
var kbartprompt = prompt("Could not find KB article ID. Please enter it here:", "");
if (kbartprompt != null)
{
window.location.href ="http://catalog.update.microsoft.com/v7/site/Rss.aspx?q=KB" + kbartprompt;
}
}
