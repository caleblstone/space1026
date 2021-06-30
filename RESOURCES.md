# Resources

## Generating a publication with Bindery.js

This project makes extensive use of [Bindery.js](https://evanbrooks.info/bindery/) by Evan Brooks and contributors. Bindery is a Javascript library to create web-based and printable books from HTML and CSS. Bindery has [tutorials](https://evanbrooks.info/bindery/learn/), though not everything is currently documented. Looking at [examples](https://evanbrooks.info/bindery/gallery/) made with Bindery was quite helpful, though in the end Caleb had to do many experiments in order to build not just generative but continuously-new generative zines based on user input selections.

## Scraping media

I recoved 13,434 media files (almost all image files with a couple dozen videos) for Space 1026. These media files are either directly uploaded from a Space 1026 account file on a platform, or on Space's website, or were tagged Space 1026 or had it as a keyword.

The work of grabbing these media files was largely done in the Linux command line. These programs are built by open source programmers and are often hacks as most platforms do their best to prevent liberating one's own photos, much less others' photos of a beloved DIY art space. The programs and methods here may be temporary solutions as platforms often change their interfaces and internal architecture, which may break these programs from time to time. Despite the obscure command line text commands this is less of an art form and more of a crowbar approach. Indemnification: You should review a company's terms of service before using a third party piece of software. You should also review source code of any third party software, especially when using your private account. The most hacker-friendly platform by far is Flickr or one's own server space.

### Flickr

I used Scrape flickr aka [flickr-scrape](https://github.com/antiboredom/flickr-scrape) by Sam Lavigne and contributors. Flickr is one of the oldest web 2.0 platforms and is far more supportive of creating third party software to access their services (storing and sharing images). Flickr also hosts a large number of museum and cultural organizations' media, and does a good job of promoting public domain and creative commons work. For the same reasons, Flickr has been exploited by the creators of many common machine learning algorithms used for nefarious or exploitative purposes, though at this point all major platforms have been scraped by ClearviewAI.

Using Scrape Flickr and an API key I was able to grab 4,498 images associated with the search phrase 'Space 1026.' Many of these images will be 'false positives.' This program was resource-intensive and worked best when it was running as the sole thread on the machine. It contains an automatic recover mode that takes up from where it last stopped if the program is re-run. This program saves metadata.

### Instagram

I used [instagram-scraper](https://github.com/arc298/instagram-scraper) (by arc298 and contributors) to liberate 1,669 media (images and videos) made up of 1,568 posts and the rest *stories* from [Space 1026](https://www.instagram.com/space1026/) on Instagram, without metadata.

```
instagram-scraper space106 -u "myusername" -p "my password"
```

Then I scraped all public media tagged with #space1026. There were 1,289.

```
instagram-scraper space1026 --tag
```

In total I found 2,393 media files on Instagram.

### Space 1026 server

I scraped Space 1026's server (sorry!), which has hosted the current incarnation of its website for about a decade. I used [wget](https://www.gnu.org/software/wget/), workhorse Linux software. A step like this might be taken if caretakers have lost or don't know how to access a backend server.

```
wget -nd -r -A jpeg,jpg,bmp,gif,png --random-wait --level=inf https://websitename.com 
```

This command downloads all images from a server and its accessible sub-directories, which it will search through recursively. The random wait is added so as not to create a mini Denial of Service Attack by too-quickly hammering the server with bandwidth-intensive requests. Running this program netted 6,253 image files. Some images contained exif data but otherwise the only metadata was the title, dimensions, and filename.

### YouTube

I manually searched YouTube for [Space 1026 content](https://www.youtube.com/results?search_query=space+1026), temporarily ignoring recordings of concerts and mixes for 1026 parties. I downloaded anything else that looked relevant with [youtube-dl](https://youtube-dl.org/). I found a lot of great 10+ year old videos of various phone recording quality, as well as homemade and produced documentary shorts on Space 1026.

I saved the title, date, account, description to a metadata file manually.

## Additional References

- List of [open-workflows](https://github.com/amiaopensource/open-workflows) for A/V archiving
- Babycastles Scrape the Web for our Archives [repo](https://github.com/babycastles/Scrape-The-Internet-For-Our-Archives)
- [Ashley Blewer](https://ashleyblewer.com/) provides consultation on digital preservation workflows, models and infrastructure for media collection and documentation. 

Companies that provide artist archiving consulting include Small Data Industries, Studio Cory Arcangel, FOLDER Studio and more.
