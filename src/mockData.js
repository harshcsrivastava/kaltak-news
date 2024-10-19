// 20241019122821
// https://newsapi.org/v2/top-headlines?country=us&apiKey=073163f7600b48e08a77a44c81187d59

const mockData = {
    "status": "ok",
    "totalResults": 36,
    "articles": [
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Gene Wang",
        "title": "Virginia men’s basketball coach Tony Bennett to retire, effective immediately - The Washington Post",
        "description": "Bennett, 55, guided the Cavaliers for 15 seasons and led them to the 2019 NCAA championship.",
        "url": "https://www.washingtonpost.com/sports/2024/10/17/tony-bennett-virginia-retires/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/242RJVUZFBFFJCV3J6DOXICMRM.jpg&w=1440",
        "publishedAt": "2024-10-18T03:42:51Z",
        "content": "Tony Bennett is retiring as Virginias mens basketball coach after 15 seasons, effective immediately, the school announced Thursday in a stunning development that leaves the Cavaliers facing considera… [+420 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Jeanine Santucci",
        "title": "Video of Phoenix police pummeling a deaf Black man with cerebral palsy sparks outcry - USA TODAY",
        "description": "Tyron McAlpin's experience with the Phoenix Police Department isn't unique, advocates for deaf people say.",
        "url": "https://www.usatoday.com/story/news/nation/2024/10/17/tyron-mcalpin-case-cerebal-palsy-phoenix-police/75699727007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/15/PPHX/75680284007-capture.JPG?crop=805,452,x142,y0&width=805&height=452&format=pjpg&auto=webp",
        "publishedAt": "2024-10-18T03:40:46Z",
        "content": "Graphic video of two Phoenix police officers beating and shocking a deaf Black man who has cerebral palsy has drawn national scrutiny and shined a light on what advocates say is the unjust reality of… [+10585 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NBCSports.com"
        },
        "author": "Charean Williams",
        "title": "Thursday Night Football: Sean Payton, Broncos leave New Orleans with 33-10 win - NBC Sports",
        "description": "Denver outgained the Saints 389 to 271 in winning for the fourth time in five games.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/thursday-night-football-sean-payton-broncos-leave-new-orleans-with-33-10-win",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/27974a9/2147483647/strip/true/crop/2535x1426+0+132/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F5e%2F05%2Fd8d4451444b694cdf438c595c2ae%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D24516340",
        "publishedAt": "2024-10-18T03:25:17Z",
        "content": "Sean Payton returned to New Orleans, where he coached from 2006-21, and left with a blowout win. By the fourth quarter, the Caesars Superdome was empty, and those Saints fans who stayed were booing t… [+1602 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Maria Sacchetti, Jacqueline Alemany",
        "title": "Secret Service needs major shake-up after shooting at Trump rally, review says - The Washington Post",
        "description": "An independent panel called for new leadership at the Secret Service, mostly from the outside, saying the protective agency needs an overhaul.",
        "url": "https://www.washingtonpost.com/nation/2024/10/17/trump-rally-shooting-investigation-secret-service/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6LL7VARTOAEIFY7SWVCR7DVJOA_size-normalized.jpg&w=1440",
        "publishedAt": "2024-10-18T03:16:06Z",
        "content": "An independent panel called Thursdayfor new leadership at the Secret Service, hired mostly from outside the protective agency, saying it needs a major shake-up or security failures such asthe July 13… [+9914 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Bob Nightengale, Jesse Yomtov",
        "title": "Dodgers vs. Mets live score updates: Shohei Ohtani homers, LA leads NLCS Game 4 - USA TODAY",
        "description": "Dodgers look to take a 3-1 series lead after a dominant win in Game 3 at Citi Field. Follow for live updates.",
        "url": "https://www.usatoday.com/story/sports/mlb/2024/10/17/dodgers-vs-mets-score-nlcs-game-4-highlights/75724161007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/18/USAT/75727235007-usatsi-24516645.jpg?crop=3028,1703,x0,y0&width=3028&height=1703&format=pjpg&auto=webp",
        "publishedAt": "2024-10-18T01:41:15Z",
        "content": "The Mets and Dodgers square off in Game 4 of the National League Championship Series on Thursday night, with Los Angeles holding a 2-1 series advantage after a dominant win last night in New York.\r\nS… [+6042 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "China economy slowdown deepens, official figures show - BBC.com",
        "description": "Gross domestic product rose by 4.6% on a yearly basis, below Beijing's \"around 5%\" annual target.",
        "url": "https://www.bbc.com/news/articles/crr54x00857o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c27d/live/2aa69ed0-8c5b-11ef-9f4a-8bfe5180b338.jpg",
        "publishedAt": "2024-10-18T01:38:40Z",
        "content": "Gross domestic product rose by 4.6% on a yearly basis, below the government's \"around 5%\" annual target\r\nChina's economy expanded in the third quarter at the slowest pace since early last year, as th… [+2527 chars]"
      },
      {
        "source": {
          "id": "espn",
          "name": "ESPN"
        },
        "author": "Bradford Doolittle",
        "title": "'All the emotions': Guardians top Yanks in wild G3 - ESPN",
        "description": "The Guardians picked up the closer who has carried them to wins all season and rode the final swing of momentum in Thursday's Game 3 of the ALCS to a victory over the Yankees that saved their season from the brink.",
        "url": "https://www.espn.com/mlb/story/_/id/41857118/guardians-top-yankees-walk-hr-10th-alcs-game-3",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1018%2Fr1402045_1296x729_16%2D9.jpg",
        "publishedAt": "2024-10-18T01:27:00Z",
        "content": "CLEVELAND -- An hour after the Cleveland Guardians saved a season that was on the brink of doom, the massive scoreboard above the left-field bleachers still flashed with the words \"Guardians win!\"\r\nT… [+8120 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "WSET"
        },
        "author": "GEOFF HARRIS | The National News Desk",
        "title": "Weight-loss drugs could reduce risk of overdoses, new study says - KFOX El Paso",
        "description": "A new study suggests that medications like Ozempic could help reduce the risk of overdose and alcohol intoxication in people with substance abuse disorders.",
        "url": "https://wset.com/news/nation-world/weight-loss-drugs-could-reduce-risk-of-overdoses-new-study-says-ozempic-wegovy-alcohol-intoxication-substance-abuse-fda-prescriptions-health",
        "urlToImage": "https://wset.com/resources/media/c9032f12-f072-401c-a235-6d1906bd6b39-large16x9_AP24011664154029.jpg",
        "publishedAt": "2024-10-18T01:23:32Z",
        "content": "WASHINGTON (TNND) A new study suggests that medications like Ozempic could help reduce the risk of overdose and alcohol intoxication in people with substance abuse disorders.\r\nDr. Fatima Cody Stanfor… [+1661 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "James Mackenzie, Nidal Al-Mughrabi, Samia Nakhoul",
        "title": "Hezbollah says it will escalate war with Israel after Hamas leader killed - Reuters",
        "description": "Lebanon's Hezbollah militant group said on Friday it was moving to a new and escalating phase in its war against Israel while Iran said \"the spirit of resistance will be strengthened\" after the killing of Hamas leader Yahya Sinwar.",
        "url": "https://www.reuters.com/world/middle-east/hezbollah-says-it-will-escalate-war-with-israel-after-hamas-leader-killed-2024-10-18/",
        "urlToImage": "https://www.reuters.com/resizer/v2/FJDJXRFZO5PFDKK5E7CL3RXFJ4.jpg?auth=6560941e7862ccbafec8c180b45e64c6e31f6aa5d3fb1ba1bdae93824f1fe24e&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-10-18T01:14:00Z",
        "content": null
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Daysia Tolentino",
        "title": "For One Direction fans, Liam Payne's death is a 'watershed' moment - NBC News",
        "description": "Elena and Vanessa Robustelli listen to One Direction so much that even eight years after the boy band broke up, its songs still make it on their annual Spotify Wrapped lists.",
        "url": "https://www.nbcnews.com/pop-culture/one-direction-fans-mourn-liam-payne-rcna175822",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241016-liam-payne-death-fan-reactions-cs-9d4c1c.jpg",
        "publishedAt": "2024-10-18T01:09:00Z",
        "content": "Elena and Vanessa Robustelli listen to One Direction so much that even eight years after the boy band broke up, its songs still make it on their annual Spotify Wrapped lists.\r\nBut Wednesday, said the… [+5315 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Harvard Crimson"
        },
        "author": null,
        "title": "Donations to Harvard’s Endowment Drop by More Than $150 Million - Harvard Crimson",
        "description": "Total philanthropic contributions fell by 14 percent in fiscal year 2024 as several billionaire donors publicly severed ties with Harvard over its response to campus antisemitism.",
        "url": "https://www.thecrimson.com/article/2024/10/18/harvard-fundraising-crisis-price-tag/",
        "urlToImage": "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2024/10/16/210945_1373707.jpg.2000x1333_q95_crop-smart_upscale.jpg",
        "publishedAt": "2024-10-17T23:38:54Z",
        "content": "Harvards fundraising crisis now has a price tag: $151 million.\r\nTotal philanthropic contributions fell by 14 percent in fiscal year 2024 as several billionaire donors publicly severed ties with Harva… [+4201 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Yahoo Finance",
        "title": "Netflix earnings, Mark Cuban: Market Domination Overtime - Yahoo Finance",
        "description": "After the Dow Jones Industrial Average (^DJI) closes at another record high led by chip stocks, Market Domination Overtime Hosts Julie Hyman and Josh Lipton,...",
        "url": "https://finance.yahoo.com/video/netflix-earnings-mark-cuban-market-231520858.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yRlyV3xoRqcEJxs701A2mQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/1baddff0-8cd4-11ef-a6ff-a87c49f0be7d",
        "publishedAt": "2024-10-17T23:30:20Z",
        "content": "After the Dow Jones Industrial Average (^DJI) closes at another record high led by chip stocks, Market Domination Overtime Hosts Julie Hyman and Josh Lipton, joined by top Wall Street experts, break … [+1060 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "JOSEF FEDERMAN, WAFAA SHURAFA, MELANIE LIDMAN",
        "title": "Israel says it has killed Hamas leader Yahya Sinwar in Gaza - The Associated Press",
        "description": "The Israeli military says it has killed Hamas’ top leader, Yahya Sinwar, during a battle in Gaza. Troops appeared to have run across him in a battle on Wednesday, only to discover afterwards that a body in the rubble was the man Israel has hunted for more tha…",
        "url": "https://apnews.com/article/israel-palestinians-hamas-lebanon-hezbollah-news-10-17-2024-d12ca71945313e601cf10876072f4182",
        "urlToImage": "https://dims.apnews.com/dims4/default/c9c276b/2147483647/strip/true/crop/7359x4139+0+383/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2e%2Fa1%2Fe668c562aaab8fc5b7c6ef6fc5eb%2Fbfa00c24a3c64d248633ddec99a6957b",
        "publishedAt": "2024-10-17T23:26:00Z",
        "content": "JERUSALEM (AP) Israeli forces in Gaza killed Hamas leader Yahya Sinwar, a chief architect of last years attack on Israel that sparked the war, the military said Thursday. Troops appeared to have run … [+7001 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Former Canadian Olympian charged in major US cocaine-smuggling case - Al Jazeera English",
        "description": "Snowboarder Ryan Wedding and 15 others are accused of shipping 60 tonnes of cocaine a year to the US and Canada.",
        "url": "https://www.aljazeera.com/news/2024/10/17/former-canadian-olympian-charged-in-major-us-cocaine-smuggling-case",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/10/AP24291741839325-1729200246.jpg?resize=1920%2C1440",
        "publishedAt": "2024-10-17T23:15:00Z",
        "content": "United States prosecutors in Los Angeles, California, have charged a former Olympic snowboarder with allegedly running a large and violent cocaine smuggling operation out of Mexico.\r\nOn Thursday, the… [+2706 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Juliette Arcodia, Antonio Planas",
        "title": "Teen suspect and father indicted in Georgia high school shooting that killed 4 - NBC News",
        "description": "A Georgia grand jury indicted a teenage boy and his father on dozens of charges, including murder, in connection with a mass shooting last month that killed four people at Apalachee High School, officials said Thursday.",
        "url": "https://www.nbcnews.com/news/us-news/teen-suspect-father-indicted-georgia-high-school-shooting-killed-4-rcna176026",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240906-colin-gray-al-1035-115924.jpg",
        "publishedAt": "2024-10-17T23:03:49Z",
        "content": "A Georgia grand jury indicted a teenage boy and his father on dozens of charges, including murder, in connection with a mass shooting last month that killed four people at Apalachee High School, offi… [+1876 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "ABC News",
        "title": "US military strikes Houthi targets in Yemen - ABC News",
        "description": null,
        "url": "https://abcnews.go.com/International/us-military-strikes-houthi-targets-yemen/story?id\\\\u003d114879095",
        "urlToImage": null,
        "publishedAt": "2024-10-17T23:02:31Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "SFGate"
        },
        "author": "Andrew Chamings",
        "title": "Diddy accused of leading gang rape of Bay Area woman in Orinda - SFGATE",
        "description": "Disgraced rapper Sean \"Diddy\" Combs has been accused of leading the brutal gang rape of a Bay Area woman in an Orinda apartment.",
        "url": "https://www.sfgate.com/bayarea/article/diddy-orinda-gang-rape-allegation-19842256.php",
        "urlToImage": "https://s.hdnux.com/photos/01/44/42/45/26356045/3/rawImage.jpg",
        "publishedAt": "2024-10-17T22:32:57Z",
        "content": "Sean Diddy Combs in Washington, D.C., Oct. 20, 2023.\r\nShareif Ziyadat/Getty Images for Sean \"Diddy\" Co\r\nEditors note: This story contains descriptions of alleged sexual assault. If you or someone you… [+6923 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Minnesota Public Radio News"
        },
        "author": "Paul Huttner",
        "title": "Brightest supermoon of the year above Minnesota Thursday night - MPR News",
        "description": "Another supermoon shines brightly over Minnesota on Thursday night.",
        "url": "https://www.mprnews.org/story/2024/10/17/brightest-supermoon-of-the-year-above-minnesota-thursday-night",
        "urlToImage": "https://img.apmcdn.org/ffc14166ede9cf25a78066dd29646cc7640f7a5d/widescreen/69d4d8-20240819-bluesupermoon-01-2000.jpg",
        "publishedAt": "2024-10-17T22:19:00Z",
        "content": "Its been a great year for sky watching in Minnesota. \r\nWeve been blessed with five vivid aurora shows. \r\nWere catching glimpses of a once-in-a-lifetime 80,000-year orbit comet.\r\nAnd Thursday night we… [+2708 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "ABC News",
        "title": "'Shaken baby syndrome' execution temporarily halted despite SCOTUS ruling - ABC News",
        "description": null,
        "url": "https://abcnews.go.com/US/shaken-baby-death-row-inmate-robert-roberson-turns/story?id\\\\u003d114870367",
        "urlToImage": null,
        "publishedAt": "2024-10-17T22:07:30Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "POLITICO.eu"
        },
        "author": "Nicholas Vinocur",
        "title": "If you think Trump’s migration policies are extreme, look at the EU’s - POLITICO Europe",
        "description": "As anti-immigrant sentiment surges in Europe, under-threat leaders are embracing formerly taboo approaches to their borders.",
        "url": "https://www.politico.eu/article/donald-trump-eu-migration-policy-viktor-orban-muslims-ban/",
        "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/10/17/GettyImages-1258273409.jpg",
        "publishedAt": "2024-10-17T21:26:53Z",
        "content": "A new wind is blowing in Europe, said the Dutch anti-Islam, anti-immigration populist Freedom Party leader Geert Wilders in Brussels on Thursday after a meeting of far-right leaders.\r\nMigration has b… [+1264 chars]"
      }
    ]
  }