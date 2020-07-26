// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "\" আমার ভিতর বাহিরে অন্তরে অন্তরে আছো তুমি \"  ❤️  ভালবাসায় কৌস্তভ  তোমায় আমায় মিলে  Play Video   ", "");
   this[database_length++] = new SearchPage("kastu_img.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("kaustav_img.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("youtube.html", "Untitled Page", "Wonder Munna  ashish chanchlani vines  Bollywood Spy  Bengali Home Kitchen  Bengali Kitchen  Dristikon Online  StarPlus   Live Tv    StarPlus    Only Serial Based Content     ", "");
   this[database_length++] = new SearchPage("drawing.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("Facebookpage.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("live_news.html", "Untitled Page", "ABP ANANDA  KOLKATA TV   ", "");
   this[database_length++] = new SearchPage("family.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page1.html", "Untitled Page", " ", "");
   return this;
}
