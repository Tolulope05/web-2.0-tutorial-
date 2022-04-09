// Using an Object 
// Object is a collection of proerties
// properties uses a key-value pair as seen below

const fitData = {
    totalSteps: 3087,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '3:14'
};

// Key value pair
const person = {
    firstName: 'Tolulope',
    lastName: 'Fakunle'
}

let comment = {
    username: 'Nonso766',
    downVotes: 19,
    upVotes: 214,
    netScore: 195,
    commentText: 'Tastes like chicken lol',
    tags: ['Hilarious', '#funny', '#silly'],
    isGilded: false
} //We can have different types of values in an object

// Accessing data out of an object
person['firstName'] //'Tolulope'
comment.commentText //'Tastes like chicken lol'

/** All keys are converted to a string */

// An Array plus object 
const comments = [
    { userName: 'Tammy', text: 'lololololo', votes: 9 },
    { userName: 'betty', text: 'blblblblbl', votes: 9 }

] //Most value can be a mass array of objects and arrays

/**
 * Data fetched from yts api
 * 
 */

let ytsApi =
{
    "status": "ok",
    "status_message": "Query was successful",
    "data": {
        "movie_count": 40424,
        "limit": 20,
        "page_number": 1,
        "movies": [
            {
                "id": 41220,
                "url": "https:\/\/yts.mx\/movies\/hunting-souls-2022",
                "imdb_code": "tt11803064",
                "title": "Hunting Souls",
                "title_english": "Hunting Souls",
                "title_long": "Hunting Souls (2022)",
                "slug": "hunting-souls-2022",
                "year": 2022,
                "rating": 0,
                "runtime": 0,
                "genres": [
                    "Horror"
                ],
                "summary": "Hunting Souls is the story of an American couple who are dealing with the hardships of caring for their sick child. They discover that they are being hunted by a demon.",
                "description_full": "Hunting Souls is the story of an American couple who are dealing with the hardships of caring for their sick child. They discover that they are being hunted by a demon.",
                "synopsis": "Hunting Souls is the story of an American couple who are dealing with the hardships of caring for their sick child. They discover that they are being hunted by a demon.",
                "yt_trailer_code": "wUilm4CZhLM",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/hunting_souls_2022\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/hunting_souls_2022\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/hunting_souls_2022\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/hunting_souls_2022\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/hunting_souls_2022\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/CF6D470D5920928C6BE567DFA28EFA1BE47ED930",
                        "hash": "CF6D470D5920928C6BE567DFA28EFA1BE47ED930",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "897 MB",
                        "size_bytes": 940572672,
                        "date_uploaded": "2022-04-04 02:52:07",
                        "date_uploaded_unix": 1649033527
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/D37A4F8240A1C18FDC163B2F37D0871A497E2E59",
                        "hash": "D37A4F8240A1C18FDC163B2F37D0871A497E2E59",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.8 GB",
                        "size_bytes": 1932735283,
                        "date_uploaded": "2022-04-04 03:53:35",
                        "date_uploaded_unix": 1649037215
                    }
                ],
                "date_uploaded": "2022-04-04 02:52:07",
                "date_uploaded_unix": 1649033527
            },
            {
                "id": 41219,
                "url": "https:\/\/yts.mx\/movies\/the-haunting-of-pendle-hill-2022",
                "imdb_code": "tt11995784",
                "title": "The Haunting of Pendle Hill",
                "title_english": "The Haunting of Pendle Hill",
                "title_long": "The Haunting of Pendle Hill (2022)",
                "slug": "the-haunting-of-pendle-hill-2022",
                "year": 2022,
                "rating": 0,
                "runtime": 90,
                "genres": [
                    "Horror"
                ],
                "summary": "Based on the reportedly haunted location of Pendle Hill in Lancashire, England, a location which was at the heart of a series of notorious and bloody witch hunts in the year 1612. Horror Brains",
                "description_full": "Based on the reportedly haunted location of Pendle Hill in Lancashire, England, a location which was at the heart of a series of notorious and bloody witch hunts in the year 1612. Horror Brains",
                "synopsis": "Based on the reportedly haunted location of Pendle Hill in Lancashire, England, a location which was at the heart of a series of notorious and bloody witch hunts in the year 1612. Horror Brains",
                "yt_trailer_code": "OtJiD73_DIY",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_haunting_of_pendle_hill_2022\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/the_haunting_of_pendle_hill_2022\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_haunting_of_pendle_hill_2022\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_haunting_of_pendle_hill_2022\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_haunting_of_pendle_hill_2022\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/8F874C39B138272C4212730342F9838DADE37EBE",
                        "hash": "8F874C39B138272C4212730342F9838DADE37EBE",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "778.84 MB",
                        "size_bytes": 816672932,
                        "date_uploaded": "2022-04-04 03:25:16",
                        "date_uploaded_unix": 1649035516
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/5EC82A507330B341CB6448F9830BBD154DF2E035",
                        "hash": "5EC82A507330B341CB6448F9830BBD154DF2E035",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.56 GB",
                        "size_bytes": 1675037245,
                        "date_uploaded": "2022-04-04 04:17:29",
                        "date_uploaded_unix": 1649038649
                    }
                ],
                "date_uploaded": "2022-04-04 03:25:16",
                "date_uploaded_unix": 1649035516
            },
            {
                "id": 41217,
                "url": "https:\/\/yts.mx\/movies\/homebound-2021",
                "imdb_code": "tt4788734",
                "title": "Homebound",
                "title_english": "Homebound",
                "title_long": "Homebound (2021)",
                "slug": "homebound-2021",
                "year": 2021,
                "rating": 7.2,
                "runtime": 71,
                "genres": [
                    "Drama",
                    "Horror",
                    "Mystery"
                ],
                "summary": "Holly's excited to finally meet fianc\u00e9 Richard's three children for the first time at a birthday celebration for his youngest in the English countryside. Holly is nervous to make a good impression, however when they arrive circumstances are far from ideal. \u2014Nia_Ashanti",
                "description_full": "Holly's excited to finally meet fianc\u00e9 Richard's three children for the first time at a birthday celebration for his youngest in the English countryside. Holly is nervous to make a good impression, however when they arrive circumstances are far from ideal. \u2014Nia_Ashanti",
                "synopsis": "Holly's excited to finally meet fianc\u00e9 Richard's three children for the first time at a birthday celebration for his youngest in the English countryside. Holly is nervous to make a good impression, however when they arrive circumstances are far from ideal. \u2014Nia_Ashanti",
                "yt_trailer_code": "dTkLUpeZk40",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/homebound_2021\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/homebound_2021\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/homebound_2021\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/homebound_2021\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/homebound_2021\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/9743AC283E48F2F22579E6430B835ACBE6A10BC5",
                        "hash": "9743AC283E48F2F22579E6430B835ACBE6A10BC5",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "650.13 MB",
                        "size_bytes": 681710715,
                        "date_uploaded": "2022-04-04 01:33:55",
                        "date_uploaded_unix": 1649028835
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/D599AC734E715AC6C79E42184C6B48FE2A14DB0D",
                        "hash": "D599AC734E715AC6C79E42184C6B48FE2A14DB0D",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.31 GB",
                        "size_bytes": 1406601789,
                        "date_uploaded": "2022-04-04 02:18:51",
                        "date_uploaded_unix": 1649031531
                    }
                ],
                "date_uploaded": "2022-04-04 01:33:55",
                "date_uploaded_unix": 1649028835
            },
            {
                "id": 41218,
                "url": "https:\/\/yts.mx\/movies\/superior-2021",
                "imdb_code": "tt12373414",
                "title": "Superior",
                "title_english": "Superior",
                "title_long": "Superior (2021)",
                "slug": "superior-2021",
                "year": 2021,
                "rating": 6,
                "runtime": 99,
                "genres": [
                    "Drama",
                    "Thriller"
                ],
                "summary": "On the run, Marian returns to her hometown to hide out with her identical twin sister, Vivian, altering the trajectory of both their lives.",
                "description_full": "On the run, Marian returns to her hometown to hide out with her identical twin sister, Vivian, altering the trajectory of both their lives.",
                "synopsis": "On the run, Marian returns to her hometown to hide out with her identical twin sister, Vivian, altering the trajectory of both their lives.",
                "yt_trailer_code": "ELnnTNKaSLk",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/superior_2021\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/superior_2021\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/superior_2021\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/superior_2021\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/superior_2021\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/CCAC45427A17A143F09788B8AA9F6A436ADD7F80",
                        "hash": "CCAC45427A17A143F09788B8AA9F6A436ADD7F80",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "870.77 MB",
                        "size_bytes": 913068524,
                        "date_uploaded": "2022-04-04 01:45:49",
                        "date_uploaded_unix": 1649029549
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/2A4153AA12DC691FD07B389CBBA2944139A816F8",
                        "hash": "2A4153AA12DC691FD07B389CBBA2944139A816F8",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.75 GB",
                        "size_bytes": 1879048192,
                        "date_uploaded": "2022-04-04 02:56:10",
                        "date_uploaded_unix": 1649033770
                    }
                ],
                "date_uploaded": "2022-04-04 01:45:49",
                "date_uploaded_unix": 1649029549
            },
            {
                "id": 41215,
                "url": "https:\/\/yts.mx\/movies\/weiner-2016",
                "imdb_code": "tt5278596",
                "title": "Weiner",
                "title_english": "Weiner",
                "title_long": "Weiner (2016)",
                "slug": "weiner-2016",
                "year": 2016,
                "rating": 7.6,
                "runtime": 96,
                "genres": [
                    "Documentary"
                ],
                "summary": "Serving seven consecutive terms, Anthony Weiner, good friends with and political allies to the Clintons, was once a highly respected member of Congress from New York City, he seen as a man sticking up for the every day person. That all changed in June, 2011 when he was forced to resign in disgrace after admitting that he did tweet lewd \"headless\" photos of himself from his public Twitter account to women he met online, and that it was not the work of a hacker or that the photos were of someone else. At the time, his wife Huma Abedin, herself a key aide to Hillary Clinton, was pregnant with their first child, she who decided to stand by her man. Two years later with Abedin still by his side, Weiner tries to resurrect his political career in a run for New York City mayor. He realizes that he has an uphill battle not only because of the known previously tweeted photos, but that there are other lewd photos from that era that may also come to light during the campaign. Regardless of the 2011 resignation, Weiner may not want to admit that any wrongdoing in his personal life should affect his ability to do his job as a politician, congressman, mayor or otherwise. He is probably well aware that the behavior associated with the tweeted photos will dog him during the entire election campaign - with some voters not caring what he does in his personal life, some never willing to forgive or forget such behavior, and some in the middle, those who he has to convince to vote for him. But will the collective \"they\" - including his campaign staff and Abedin - care and forgive a second time around if the behavior has continued, especially if he did or does not own up to it? \u2014Huggo",
                "description_full": "Serving seven consecutive terms, Anthony Weiner, good friends with and political allies to the Clintons, was once a highly respected member of Congress from New York City, he seen as a man sticking up for the every day person. That all changed in June, 2011 when he was forced to resign in disgrace after admitting that he did tweet lewd \"headless\" photos of himself from his public Twitter account to women he met online, and that it was not the work of a hacker or that the photos were of someone else. At the time, his wife Huma Abedin, herself a key aide to Hillary Clinton, was pregnant with their first child, she who decided to stand by her man. Two years later with Abedin still by his side, Weiner tries to resurrect his political career in a run for New York City mayor. He realizes that he has an uphill battle not only because of the known previously tweeted photos, but that there are other lewd photos from that era that may also come to light during the campaign. Regardless of the 2011 resignation, Weiner may not want to admit that any wrongdoing in his personal life should affect his ability to do his job as a politician, congressman, mayor or otherwise. He is probably well aware that the behavior associated with the tweeted photos will dog him during the entire election campaign - with some voters not caring what he does in his personal life, some never willing to forgive or forget such behavior, and some in the middle, those who he has to convince to vote for him. But will the collective \"they\" - including his campaign staff and Abedin - care and forgive a second time around if the behavior has continued, especially if he did or does not own up to it? \u2014Huggo",
                "synopsis": "Serving seven consecutive terms, Anthony Weiner, good friends with and political allies to the Clintons, was once a highly respected member of Congress from New York City, he seen as a man sticking up for the every day person. That all changed in June, 2011 when he was forced to resign in disgrace after admitting that he did tweet lewd \"headless\" photos of himself from his public Twitter account to women he met online, and that it was not the work of a hacker or that the photos were of someone else. At the time, his wife Huma Abedin, herself a key aide to Hillary Clinton, was pregnant with their first child, she who decided to stand by her man. Two years later with Abedin still by his side, Weiner tries to resurrect his political career in a run for New York City mayor. He realizes that he has an uphill battle not only because of the known previously tweeted photos, but that there are other lewd photos from that era that may also come to light during the campaign. Regardless of the 2011 resignation, Weiner may not want to admit that any wrongdoing in his personal life should affect his ability to do his job as a politician, congressman, mayor or otherwise. He is probably well aware that the behavior associated with the tweeted photos will dog him during the entire election campaign - with some voters not caring what he does in his personal life, some never willing to forgive or forget such behavior, and some in the middle, those who he has to convince to vote for him. But will the collective \"they\" - including his campaign staff and Abedin - care and forgive a second time around if the behavior has continued, especially if he did or does not own up to it? \u2014Huggo",
                "yt_trailer_code": "U7Dq8UMjlq0",
                "language": "en",
                "mpa_rating": "R",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/weiner_2016\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/weiner_2016\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/weiner_2016\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/weiner_2016\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/weiner_2016\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/602FD5A271162650BAE4F8215FFA192A3E55EF6F",
                        "hash": "602FD5A271162650BAE4F8215FFA192A3E55EF6F",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "879.5 MB",
                        "size_bytes": 922222592,
                        "date_uploaded": "2022-04-04 02:33:15",
                        "date_uploaded_unix": 1649032395
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/3E33EDDA862ED4CA6544858F59BC15C7E3C41038",
                        "hash": "3E33EDDA862ED4CA6544858F59BC15C7E3C41038",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.77 GB",
                        "size_bytes": 1900523028,
                        "date_uploaded": "2022-04-04 03:40:56",
                        "date_uploaded_unix": 1649036456
                    }
                ],
                "date_uploaded": "2022-04-04 02:33:15",
                "date_uploaded_unix": 1649032395
            },
            {
                "id": 41213,
                "url": "https:\/\/yts.mx\/movies\/enlighten-us-2016",
                "imdb_code": "tt5241010",
                "title": "Enlighten Us",
                "title_english": "Enlighten Us",
                "title_long": "Enlighten Us (2016)",
                "slug": "enlighten-us-2016",
                "year": 2016,
                "rating": 6.2,
                "runtime": 93,
                "genres": [
                    "Documentary"
                ],
                "summary": "ENLIGHTEN US: THE RISE AND FALL OF JAMES ARTHUR RAY is the story of the motivational rock star's meteoric rise, fall and return to the $11 billion self-help industry after his negligent homicide conviction in the death of three clients at a sweat lodge at one of his events. As this story unfolds, we learn from Ray, his followers and his accusers, about how their methods of self-improvement ultimately caused so much suffering. ENLIGHTEN US asks the important questions, \"What are we looking for\" and \"Who has the answers\" and even the simple question \"Why?\"",
                "description_full": "ENLIGHTEN US: THE RISE AND FALL OF JAMES ARTHUR RAY is the story of the motivational rock star's meteoric rise, fall and return to the $11 billion self-help industry after his negligent homicide conviction in the death of three clients at a sweat lodge at one of his events. As this story unfolds, we learn from Ray, his followers and his accusers, about how their methods of self-improvement ultimately caused so much suffering. ENLIGHTEN US asks the important questions, \"What are we looking for\" and \"Who has the answers\" and even the simple question \"Why?\"",
                "synopsis": "ENLIGHTEN US: THE RISE AND FALL OF JAMES ARTHUR RAY is the story of the motivational rock star's meteoric rise, fall and return to the $11 billion self-help industry after his negligent homicide conviction in the death of three clients at a sweat lodge at one of his events. As this story unfolds, we learn from Ray, his followers and his accusers, about how their methods of self-improvement ultimately caused so much suffering. ENLIGHTEN US asks the important questions, \"What are we looking for\" and \"Who has the answers\" and even the simple question \"Why?\"",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/enlighten_us_2016\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/enlighten_us_2016\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/enlighten_us_2016\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/enlighten_us_2016\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/enlighten_us_2016\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/E30E5842E721F8346A072505BC4D36DE5B6C04BA",
                        "hash": "E30E5842E721F8346A072505BC4D36DE5B6C04BA",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "855.07 MB",
                        "size_bytes": 896605880,
                        "date_uploaded": "2022-04-04 01:02:18",
                        "date_uploaded_unix": 1649026938
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/D279ECE01463A97D0DE980C2F5ECF872234317A1",
                        "hash": "D279ECE01463A97D0DE980C2F5ECF872234317A1",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.72 GB",
                        "size_bytes": 1846835937,
                        "date_uploaded": "2022-04-04 01:55:53",
                        "date_uploaded_unix": 1649030153
                    }
                ],
                "date_uploaded": "2022-04-04 01:02:18",
                "date_uploaded_unix": 1649026938
            },
            {
                "id": 41214,
                "url": "https:\/\/yts.mx\/movies\/bayou-blue-2011",
                "imdb_code": "tt2106331",
                "title": "Bayou Blue",
                "title_english": "Bayou Blue",
                "title_long": "Bayou Blue (2011)",
                "slug": "bayou-blue-2011",
                "year": 2011,
                "rating": 6.2,
                "runtime": 79,
                "genres": [
                    "Crime",
                    "Documentary",
                    "Drama"
                ],
                "summary": "From 1997 to 2006, serial killer Ronald Dominique raped and killed twenty-three men in poverty- stricken Southeastern Louisiana. Difficulties in apprehending Dominique ranged from the underfunding of law enforcement to a lack of family advocacy for the victims, to the general distraction by other catastrophes such as Hurricane Katrina. Bayou Blue meditates on the decay of a community. It is a portrait of one American region's descent into darkness. \u2014Anonymous",
                "description_full": "From 1997 to 2006, serial killer Ronald Dominique raped and killed twenty-three men in poverty- stricken Southeastern Louisiana. Difficulties in apprehending Dominique ranged from the underfunding of law enforcement to a lack of family advocacy for the victims, to the general distraction by other catastrophes such as Hurricane Katrina. Bayou Blue meditates on the decay of a community. It is a portrait of one American region's descent into darkness. \u2014Anonymous",
                "synopsis": "From 1997 to 2006, serial killer Ronald Dominique raped and killed twenty-three men in poverty- stricken Southeastern Louisiana. Difficulties in apprehending Dominique ranged from the underfunding of law enforcement to a lack of family advocacy for the victims, to the general distraction by other catastrophes such as Hurricane Katrina. Bayou Blue meditates on the decay of a community. It is a portrait of one American region's descent into darkness. \u2014Anonymous",
                "yt_trailer_code": "3lCRtSlNV6E",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/bayou_blue_2011\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/bayou_blue_2011\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/bayou_blue_2011\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/bayou_blue_2011\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/bayou_blue_2011\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/FC5B3AE491DCB112EECBC81B7585D80218F5E8B8",
                        "hash": "FC5B3AE491DCB112EECBC81B7585D80218F5E8B8",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "716.07 MB",
                        "size_bytes": 750853816,
                        "date_uploaded": "2022-04-03 20:40:11",
                        "date_uploaded_unix": 1649011211
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/D11F650455871E6BAB2BBABEA6461E8B6947653C",
                        "hash": "D11F650455871E6BAB2BBABEA6461E8B6947653C",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.3 GB",
                        "size_bytes": 1395864371,
                        "date_uploaded": "2022-04-03 21:33:40",
                        "date_uploaded_unix": 1649014420
                    }
                ],
                "date_uploaded": "2022-04-03 20:40:11",
                "date_uploaded_unix": 1649011211
            },
            {
                "id": 41211,
                "url": "https:\/\/yts.mx\/movies\/a-crime-on-the-bayou-2020",
                "imdb_code": "tt10837932",
                "title": "A Crime on the Bayou",
                "title_english": "A Crime on the Bayou",
                "title_long": "A Crime on the Bayou (2020)",
                "slug": "a-crime-on-the-bayou-2020",
                "year": 2020,
                "rating": 6.5,
                "runtime": 91,
                "genres": [
                    "Documentary"
                ],
                "summary": "A Black teenager bravely challenges the most powerful white supremacist in 1960s Louisiana with the help of a young Jewish attorney. Systemic racism meets its match in decisive courtroom battles, including the U.S. Supreme Court, and a lifelong friendship is born. \u2014Augusta Films",
                "description_full": "A Black teenager bravely challenges the most powerful white supremacist in 1960s Louisiana with the help of a young Jewish attorney. Systemic racism meets its match in decisive courtroom battles, including the U.S. Supreme Court, and a lifelong friendship is born. \u2014Augusta Films",
                "synopsis": "A Black teenager bravely challenges the most powerful white supremacist in 1960s Louisiana with the help of a young Jewish attorney. Systemic racism meets its match in decisive courtroom battles, including the U.S. Supreme Court, and a lifelong friendship is born. \u2014Augusta Films",
                "yt_trailer_code": "teQqYF_yDUc",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/a_crime_on_the_bayou_2020\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/a_crime_on_the_bayou_2020\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/a_crime_on_the_bayou_2020\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/a_crime_on_the_bayou_2020\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/a_crime_on_the_bayou_2020\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/6BBBDA354772009F1E230EEBC807DBDF28ACEBC2",
                        "hash": "6BBBDA354772009F1E230EEBC807DBDF28ACEBC2",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "834.99 MB",
                        "size_bytes": 875550474,
                        "date_uploaded": "2022-04-03 21:09:47",
                        "date_uploaded_unix": 1649012987
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/0660D6110AB3200320738A8B7BC302861AD4AD5C",
                        "hash": "0660D6110AB3200320738A8B7BC302861AD4AD5C",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 83,
                        "peers": 40,
                        "size": "1.68 GB",
                        "size_bytes": 1803886264,
                        "date_uploaded": "2022-04-03 22:07:59",
                        "date_uploaded_unix": 1649016479
                    }
                ],
                "date_uploaded": "2022-04-03 21:09:47",
                "date_uploaded_unix": 1649012987
            },
            {
                "id": 41210,
                "url": "https:\/\/yts.mx\/movies\/holy-heist-2022",
                "imdb_code": "tt18278484",
                "title": "Holy Heist",
                "title_english": "Holy Heist",
                "title_long": "Holy Heist (2022)",
                "slug": "holy-heist-2022",
                "year": 2022,
                "rating": 8.2,
                "runtime": 85,
                "genres": [
                    "Documentary"
                ],
                "summary": "It follows a cop, a boxer, an IRA soldier, and a priest as they get entangled in one of America's biggest robberies. In an exclusive tell-all, never-before-seen interviews reveal missing millions, terrorism, and murder in the Brinks heist that took $7.4 million from an armored car depot.",
                "description_full": "It follows a cop, a boxer, an IRA soldier, and a priest as they get entangled in one of America's biggest robberies. In an exclusive tell-all, never-before-seen interviews reveal missing millions, terrorism, and murder in the Brinks heist that took $7.4 million from an armored car depot.",
                "synopsis": "It follows a cop, a boxer, an IRA soldier, and a priest as they get entangled in one of America's biggest robberies. In an exclusive tell-all, never-before-seen interviews reveal missing millions, terrorism, and murder in the Brinks heist that took $7.4 million from an armored car depot.",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/holy_heist_2022\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/holy_heist_2022\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/holy_heist_2022\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/holy_heist_2022\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/holy_heist_2022\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/48064F18721BF38799ED1583A75B71FAE7F450A7",
                        "hash": "48064F18721BF38799ED1583A75B71FAE7F450A7",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "842.38 MB",
                        "size_bytes": 883299451,
                        "date_uploaded": "2022-04-03 20:53:39",
                        "date_uploaded_unix": 1649012019
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/A6F6B1BB810BB957E76FE667CE75F3552D462A08",
                        "hash": "A6F6B1BB810BB957E76FE667CE75F3552D462A08",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.53 GB",
                        "size_bytes": 1642824991,
                        "date_uploaded": "2022-04-03 21:49:03",
                        "date_uploaded_unix": 1649015343
                    }
                ],
                "date_uploaded": "2022-04-03 20:53:39",
                "date_uploaded_unix": 1649012019
            },
            {
                "id": 41209,
                "url": "https:\/\/yts.mx\/movies\/shes-lost-control-2014",
                "imdb_code": "tt3130776",
                "title": "She's Lost Control",
                "title_english": "She's Lost Control",
                "title_long": "She's Lost Control (2014)",
                "slug": "shes-lost-control-2014",
                "year": 2014,
                "rating": 5.3,
                "runtime": 90,
                "genres": [
                    "Drama"
                ],
                "summary": "The professional and personal life of a sexual surrogate begins to unravel when she starts working with a new client.",
                "description_full": "The professional and personal life of a sexual surrogate begins to unravel when she starts working with a new client.",
                "synopsis": "The professional and personal life of a sexual surrogate begins to unravel when she starts working with a new client.",
                "yt_trailer_code": "k-nyVPF74sg",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/shes_lost_control_2014\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/shes_lost_control_2014\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/shes_lost_control_2014\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/shes_lost_control_2014\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/shes_lost_control_2014\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/89BD127173F043BAE38E0ABF3632A88F94AAE765",
                        "hash": "89BD127173F043BAE38E0ABF3632A88F94AAE765",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "827.64 MB",
                        "size_bytes": 867843441,
                        "date_uploaded": "2022-04-03 19:14:47",
                        "date_uploaded_unix": 1649006087
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/D0403CAF1A5948D035933E2426D798CA477D7931",
                        "hash": "D0403CAF1A5948D035933E2426D798CA477D7931",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.66 GB",
                        "size_bytes": 1782411428,
                        "date_uploaded": "2022-04-03 20:21:30",
                        "date_uploaded_unix": 1649010090
                    }
                ],
                "date_uploaded": "2022-04-03 19:14:47",
                "date_uploaded_unix": 1649006087
            },
            {
                "id": 41208,
                "url": "https:\/\/yts.mx\/movies\/stripped-las-vegas-2021",
                "imdb_code": "tt15463392",
                "title": "Stripped: Las Vegas",
                "title_english": "Stripped: Las Vegas",
                "title_long": "Stripped: Las Vegas (2021)",
                "slug": "stripped-las-vegas-2021",
                "year": 2021,
                "rating": 0,
                "runtime": 84,
                "genres": [
                    "Documentary"
                ],
                "summary": "This observational documentary intercuts and follow the lives of several of Las Vegas' most dynamic exotic dancers over the course of several days.",
                "description_full": "This observational documentary intercuts and follow the lives of several of Las Vegas' most dynamic exotic dancers over the course of several days.",
                "synopsis": "This observational documentary intercuts and follow the lives of several of Las Vegas' most dynamic exotic dancers over the course of several days.",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/stripped_las_vegas_2021\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/stripped_las_vegas_2021\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/stripped_las_vegas_2021\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/stripped_las_vegas_2021\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/stripped_las_vegas_2021\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/56A679831BA75E876AFC35B85EEE1A4BDA86888C",
                        "hash": "56A679831BA75E876AFC35B85EEE1A4BDA86888C",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "779.9 MB",
                        "size_bytes": 817784422,
                        "date_uploaded": "2022-04-03 17:42:36",
                        "date_uploaded_unix": 1649000556
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/F82388A093796E8A193BD5AB9CD4292AD979BDE8",
                        "hash": "F82388A093796E8A193BD5AB9CD4292AD979BDE8",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.57 GB",
                        "size_bytes": 1685774664,
                        "date_uploaded": "2022-04-03 18:38:42",
                        "date_uploaded_unix": 1649003922
                    }
                ],
                "date_uploaded": "2022-04-03 17:42:36",
                "date_uploaded_unix": 1649000556
            },
            {
                "id": 41207,
                "url": "https:\/\/yts.mx\/movies\/worst-weather-ever-2013",
                "imdb_code": "tt3465616",
                "title": "Worst Weather Ever",
                "title_english": "Worst Weather Ever",
                "title_long": "Worst Weather Ever (2013)",
                "slug": "worst-weather-ever-2013",
                "year": 2013,
                "rating": 6.2,
                "runtime": 0,
                "genres": [
                    "Documentary"
                ],
                "summary": "Scientists find out what impact climate change has on our world.",
                "description_full": "Scientists find out what impact climate change has on our world.",
                "synopsis": "Scientists find out what impact climate change has on our world.",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/worst_weather_ever_2013\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/worst_weather_ever_2013\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/worst_weather_ever_2013\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/worst_weather_ever_2013\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/worst_weather_ever_2013\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/901BF51AEE3C5354B0EEEC9BBB83AC96D8A8562B",
                        "hash": "901BF51AEE3C5354B0EEEC9BBB83AC96D8A8562B",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "811.68 MB",
                        "size_bytes": 851108168,
                        "date_uploaded": "2022-04-03 23:14:02",
                        "date_uploaded_unix": 1649020442
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/55B84F519E133F8A919C744D03A152C3D6839BBC",
                        "hash": "55B84F519E133F8A919C744D03A152C3D6839BBC",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.63 GB",
                        "size_bytes": 1750199173,
                        "date_uploaded": "2022-04-04 00:31:43",
                        "date_uploaded_unix": 1649025103
                    }
                ],
                "date_uploaded": "2022-04-03 23:14:02",
                "date_uploaded_unix": 1649020442
            },
            {
                "id": 41204,
                "url": "https:\/\/yts.mx\/movies\/genesis-2-2018",
                "imdb_code": "tt8287690",
                "title": "Genesis",
                "title_english": "Genesis",
                "title_long": "Genesis (2018)",
                "slug": "genesis-2-2018",
                "year": 2018,
                "rating": 6.9,
                "runtime": 129,
                "genres": [
                    "Drama"
                ],
                "summary": "The birth of the first love shakes three teenagers in the tumult of their youth. Guillaume, 16, and Charlotte,18, are half-siblings and simultaneously struggles with romance; She is in a relationship with Maxime, but reels from his proposal that they change to an open relationship.So she moves from one relationship to the next (and always with the wrong guy), which has devastating consequences. Guillaume is a student at an all-boys boarding school and developing a romantic and sexual attraction to his classmate Nicolas. 12 year-old Felix, now a thoughtful, guitar-playing young adolescent with a crush on Beatrice, a fellow resident at his folksy woodland summer camp and is feelings are requited. Brother and sister have to find their way in a world that offers them no certainties or guidelines. While others adapt, they stand up, defending their right to love and be free. \u2014kinoart",
                "description_full": "The birth of the first love shakes three teenagers in the tumult of their youth. Guillaume, 16, and Charlotte,18, are half-siblings and simultaneously struggles with romance; She is in a relationship with Maxime, but reels from his proposal that they change to an open relationship.So she moves from one relationship to the next (and always with the wrong guy), which has devastating consequences. Guillaume is a student at an all-boys boarding school and developing a romantic and sexual attraction to his classmate Nicolas. 12 year-old Felix, now a thoughtful, guitar-playing young adolescent with a crush on Beatrice, a fellow resident at his folksy woodland summer camp and is feelings are requited. Brother and sister have to find their way in a world that offers them no certainties or guidelines. While others adapt, they stand up, defending their right to love and be free. \u2014kinoart",
                "synopsis": "The birth of the first love shakes three teenagers in the tumult of their youth. Guillaume, 16, and Charlotte,18, are half-siblings and simultaneously struggles with romance; She is in a relationship with Maxime, but reels from his proposal that they change to an open relationship.So she moves from one relationship to the next (and always with the wrong guy), which has devastating consequences. Guillaume is a student at an all-boys boarding school and developing a romantic and sexual attraction to his classmate Nicolas. 12 year-old Felix, now a thoughtful, guitar-playing young adolescent with a crush on Beatrice, a fellow resident at his folksy woodland summer camp and is feelings are requited. Brother and sister have to find their way in a world that offers them no certainties or guidelines. While others adapt, they stand up, defending their right to love and be free. \u2014kinoart",
                "yt_trailer_code": "",
                "language": "fr",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/genesis_2_2018\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/genesis_2_2018\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/genesis_2_2018\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/genesis_2_2018\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/genesis_2_2018\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/2AFBE7810C565F517BA169E2F0962BBA2BD24AA2",
                        "hash": "2AFBE7810C565F517BA169E2F0962BBA2BD24AA2",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.17 GB",
                        "size_bytes": 1256277934,
                        "date_uploaded": "2022-04-03 23:00:07",
                        "date_uploaded_unix": 1649019607
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/8CC88DEE5488DEE5820AD486F5DBC2C763BEAB31",
                        "hash": "8CC88DEE5488DEE5820AD486F5DBC2C763BEAB31",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "2.41 GB",
                        "size_bytes": 2587717796,
                        "date_uploaded": "2022-04-04 00:36:52",
                        "date_uploaded_unix": 1649025412
                    }
                ],
                "date_uploaded": "2022-04-03 23:00:07",
                "date_uploaded_unix": 1649019607
            },
            {
                "id": 41205,
                "url": "https:\/\/yts.mx\/movies\/crime-punishment-in-suburbia-2000",
                "imdb_code": "tt0197384",
                "title": "Crime + Punishment in Suburbia",
                "title_english": "Crime + Punishment in Suburbia",
                "title_long": "Crime + Punishment in Suburbia (2000)",
                "slug": "crime-punishment-in-suburbia-2000",
                "year": 2000,
                "rating": 5.8,
                "runtime": 100,
                "genres": [
                    "Drama",
                    "Thriller"
                ],
                "summary": "This is a contemporary fable loosely based on Fyodor Dostoyevsky's \"Crime and Punishment\". Roseanne is outwardly a perfect and popular teen. However, her image is hiding the abuse at her stepfather's hands, and she decides to take revenge. The events that follow are a mix of dark humor and an exploration of modern morality as Roseanne faces not only a fellow suburbanite who knows, but her own conscience as well. \u2014Anonymous",
                "description_full": "This is a contemporary fable loosely based on Fyodor Dostoyevsky's \"Crime and Punishment\". Roseanne is outwardly a perfect and popular teen. However, her image is hiding the abuse at her stepfather's hands, and she decides to take revenge. The events that follow are a mix of dark humor and an exploration of modern morality as Roseanne faces not only a fellow suburbanite who knows, but her own conscience as well. \u2014Anonymous",
                "synopsis": "This is a contemporary fable loosely based on Fyodor Dostoyevsky's \"Crime and Punishment\". Roseanne is outwardly a perfect and popular teen. However, her image is hiding the abuse at her stepfather's hands, and she decides to take revenge. The events that follow are a mix of dark humor and an exploration of modern morality as Roseanne faces not only a fellow suburbanite who knows, but her own conscience as well. \u2014Anonymous",
                "yt_trailer_code": "U1GgQED_vTw",
                "language": "en",
                "mpa_rating": "R",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/crime_punishment_in_suburbia_2000\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/crime_punishment_in_suburbia_2000\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/crime_punishment_in_suburbia_2000\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/crime_punishment_in_suburbia_2000\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/crime_punishment_in_suburbia_2000\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/7B2DB08641619A4994AF3FA7AD91A2D31EDAB300",
                        "hash": "7B2DB08641619A4994AF3FA7AD91A2D31EDAB300",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "904.83 MB",
                        "size_bytes": 948783022,
                        "date_uploaded": "2022-04-03 18:56:57",
                        "date_uploaded_unix": 1649005017
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/40FDC1105EA039AB47DDD07153D156E018FAD67A",
                        "hash": "40FDC1105EA039AB47DDD07153D156E018FAD67A",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.64 GB",
                        "size_bytes": 1760936591,
                        "date_uploaded": "2022-04-03 20:10:19",
                        "date_uploaded_unix": 1649009419
                    }
                ],
                "date_uploaded": "2022-04-03 18:56:57",
                "date_uploaded_unix": 1649005017
            },
            {
                "id": 41206,
                "url": "https:\/\/yts.mx\/movies\/evolver-1995",
                "imdb_code": "tt0112993",
                "title": "Evolver",
                "title_english": "Evolver",
                "title_long": "Evolver (1995)",
                "slug": "evolver-1995",
                "year": 1995,
                "rating": 5.5,
                "runtime": 87,
                "genres": [
                    "Action",
                    "Horror",
                    "Sci-Fi"
                ],
                "summary": "A popular virtual-reality video game gets ported to real life, and Kyle, one of the best Evolver players in the US, gets the opportunity to try playing against a little robot version of the arcade game. However, Evolver is programmed to win at all costs, and the match between Kyle and Evolver gradually becomes a frantic struggle for survival. \u2014Dave Smith",
                "description_full": "A popular virtual-reality video game gets ported to real life, and Kyle, one of the best Evolver players in the US, gets the opportunity to try playing against a little robot version of the arcade game. However, Evolver is programmed to win at all costs, and the match between Kyle and Evolver gradually becomes a frantic struggle for survival. \u2014Dave Smith",
                "synopsis": "A popular virtual-reality video game gets ported to real life, and Kyle, one of the best Evolver players in the US, gets the opportunity to try playing against a little robot version of the arcade game. However, Evolver is programmed to win at all costs, and the match between Kyle and Evolver gradually becomes a frantic struggle for survival. \u2014Dave Smith",
                "yt_trailer_code": "TPayRx3byb0",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/evolver_1995\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/evolver_1995\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/evolver_1995\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/evolver_1995\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/evolver_1995\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/377801E2E14EEE139CCCD987A08F21543C8846BD",
                        "hash": "377801E2E14EEE139CCCD987A08F21543C8846BD",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "841.67 MB",
                        "size_bytes": 882554962,
                        "date_uploaded": "2022-04-04 00:50:12",
                        "date_uploaded_unix": 1649026212
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/C78F9C11666FF74A7739C0BCCDBD26E2FFF438BA",
                        "hash": "C78F9C11666FF74A7739C0BCCDBD26E2FFF438BA",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.53 GB",
                        "size_bytes": 1642824991,
                        "date_uploaded": "2022-04-04 03:00:26",
                        "date_uploaded_unix": 1649034026
                    }
                ],
                "date_uploaded": "2022-04-04 00:50:12",
                "date_uploaded_unix": 1649026212
            },
            {
                "id": 41203,
                "url": "https:\/\/yts.mx\/movies\/porn-for-newbies-2018",
                "imdb_code": "tt8786106",
                "title": "Porn for Newbies",
                "title_english": "Porn for Newbies",
                "title_long": "Porn for Newbies (2018)",
                "slug": "porn-for-newbies-2018",
                "year": 2018,
                "rating": 5.4,
                "runtime": 88,
                "genres": [
                    "Comedy"
                ],
                "summary": "Victor is an amateur filmmaker who is about to sell his camera to get married when a local mobster forces him to direct a porn version of \"The Bride of Frankenstein\". His friend An\u00edbal, a videoclub employee obsessed with pornography, will accompany him on the mission. Everything gets worse when V\u00edctor falls in love with his protagonist, Ashley Cummings, an international porn star.",
                "description_full": "Victor is an amateur filmmaker who is about to sell his camera to get married when a local mobster forces him to direct a porn version of \"The Bride of Frankenstein\". His friend An\u00edbal, a videoclub employee obsessed with pornography, will accompany him on the mission. Everything gets worse when V\u00edctor falls in love with his protagonist, Ashley Cummings, an international porn star.",
                "synopsis": "Victor is an amateur filmmaker who is about to sell his camera to get married when a local mobster forces him to direct a porn version of \"The Bride of Frankenstein\". His friend An\u00edbal, a videoclub employee obsessed with pornography, will accompany him on the mission. Everything gets worse when V\u00edctor falls in love with his protagonist, Ashley Cummings, an international porn star.",
                "yt_trailer_code": "",
                "language": "es",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/porn_for_newbies_2018\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/porn_for_newbies_2018\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/porn_for_newbies_2018\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/porn_for_newbies_2018\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/porn_for_newbies_2018\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/E2649100F6E94FFA147CD3B32833C81636876CD9",
                        "hash": "E2649100F6E94FFA147CD3B32833C81636876CD9",
                        "quality": "720p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "852.64 MB",
                        "size_bytes": 894057841,
                        "date_uploaded": "2022-04-03 22:19:28",
                        "date_uploaded_unix": 1649017168
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/E55039B5BFDF857941FDD7F2D6B155E822CC7172",
                        "hash": "E55039B5BFDF857941FDD7F2D6B155E822CC7172",
                        "quality": "1080p",
                        "type": "web",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.71 GB",
                        "size_bytes": 1836098519,
                        "date_uploaded": "2022-04-03 23:12:43",
                        "date_uploaded_unix": 1649020363
                    }
                ],
                "date_uploaded": "2022-04-03 22:19:28",
                "date_uploaded_unix": 1649017168
            },
            {
                "id": 41202,
                "url": "https:\/\/yts.mx\/movies\/the-blood-of-jesus-1941",
                "imdb_code": "tt0033406",
                "title": "The Blood of Jesus",
                "title_english": "The Blood of Jesus",
                "title_long": "The Blood of Jesus (1941)",
                "slug": "the-blood-of-jesus-1941",
                "year": 1941,
                "rating": 5.4,
                "runtime": 68,
                "genres": [
                    "Drama",
                    "Fantasy"
                ],
                "summary": "In the rural south of the United States, a godly young woman is accidently wounded by her unchurched husband. She succumbs to the injuries, whereupon a good angel bids her to journey with him to the Crossroads of Life. Before she can travel far, the devil lures her with the temptations of juke joints and the city. Can she regain the straight and narrow before it's too late? And what is to become of those she left behind? \u2014Thomas McWilliams",
                "description_full": "In the rural south of the United States, a godly young woman is accidently wounded by her unchurched husband. She succumbs to the injuries, whereupon a good angel bids her to journey with him to the Crossroads of Life. Before she can travel far, the devil lures her with the temptations of juke joints and the city. Can she regain the straight and narrow before it's too late? And what is to become of those she left behind? \u2014Thomas McWilliams",
                "synopsis": "In the rural south of the United States, a godly young woman is accidently wounded by her unchurched husband. She succumbs to the injuries, whereupon a good angel bids her to journey with him to the Crossroads of Life. Before she can travel far, the devil lures her with the temptations of juke joints and the city. Can she regain the straight and narrow before it's too late? And what is to become of those she left behind? \u2014Thomas McWilliams",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_blood_of_jesus_1941\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/the_blood_of_jesus_1941\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_blood_of_jesus_1941\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_blood_of_jesus_1941\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_blood_of_jesus_1941\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/F3175DCD102694F8F7CE2C501D362056F3B45EE5",
                        "hash": "F3175DCD102694F8F7CE2C501D362056F3B45EE5",
                        "quality": "720p",
                        "type": "bluray",
                        "seeds": 0,
                        "peers": 0,
                        "size": "518.89 MB",
                        "size_bytes": 544095601,
                        "date_uploaded": "2022-04-03 16:05:58",
                        "date_uploaded_unix": 1648994758
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/2A4A9F329B1D26F526184C9153DC61BF410437FA",
                        "hash": "2A4A9F329B1D26F526184C9153DC61BF410437FA",
                        "quality": "1080p",
                        "type": "bluray",
                        "seeds": 44,
                        "peers": 10,
                        "size": "963.1 MB",
                        "size_bytes": 1009883546,
                        "date_uploaded": "2022-04-03 16:44:54",
                        "date_uploaded_unix": 1648997094
                    }
                ],
                "date_uploaded": "2022-04-03 16:05:58",
                "date_uploaded_unix": 1648994758
            },
            {
                "id": 41201,
                "url": "https:\/\/yts.mx\/movies\/the-bronze-buckaroo-1939",
                "imdb_code": "tt0031122",
                "title": "The Bronze Buckaroo",
                "title_english": "The Bronze Buckaroo",
                "title_long": "The Bronze Buckaroo (1939)",
                "slug": "the-bronze-buckaroo-1939",
                "year": 1939,
                "rating": 5,
                "runtime": 0,
                "genres": [
                    "Action",
                    "Adventure",
                    "Music"
                ],
                "summary": "Bob Blake and his boys arrive at Joe Jackson's ranch to find him missing. While Slim cheats Dusty out of his money using ventriloquism and marked cards, Blake tries to find Jackson. Learning that Thorne and his gang hold him prisoner, he and his men trail them. When Thorne's gang gets the drop on them, Slim puts his ventriloquism to work. \u2014Maurice VanAuken",
                "description_full": "Bob Blake and his boys arrive at Joe Jackson's ranch to find him missing. While Slim cheats Dusty out of his money using ventriloquism and marked cards, Blake tries to find Jackson. Learning that Thorne and his gang hold him prisoner, he and his men trail them. When Thorne's gang gets the drop on them, Slim puts his ventriloquism to work. \u2014Maurice VanAuken",
                "synopsis": "Bob Blake and his boys arrive at Joe Jackson's ranch to find him missing. While Slim cheats Dusty out of his money using ventriloquism and marked cards, Blake tries to find Jackson. Learning that Thorne and his gang hold him prisoner, he and his men trail them. When Thorne's gang gets the drop on them, Slim puts his ventriloquism to work. \u2014Maurice VanAuken",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_bronze_buckaroo_1939\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/the_bronze_buckaroo_1939\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_bronze_buckaroo_1939\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_bronze_buckaroo_1939\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/the_bronze_buckaroo_1939\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/04641BBA2D789FE41CA82B7E4E6AE608573CA8A7",
                        "hash": "04641BBA2D789FE41CA82B7E4E6AE608573CA8A7",
                        "quality": "720p",
                        "type": "bluray",
                        "seeds": 34,
                        "peers": 8,
                        "size": "533.45 MB",
                        "size_bytes": 559362867,
                        "date_uploaded": "2022-04-03 19:59:54",
                        "date_uploaded_unix": 1649008794
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/C0855A8887AFF402285254BCC654C771202A265B",
                        "hash": "C0855A8887AFF402285254BCC654C771202A265B",
                        "quality": "1080p",
                        "type": "bluray",
                        "seeds": 0,
                        "peers": 0,
                        "size": "989.93 MB",
                        "size_bytes": 1038016840,
                        "date_uploaded": "2022-04-03 20:37:43",
                        "date_uploaded_unix": 1649011063
                    }
                ],
                "date_uploaded": "2022-04-03 19:59:54",
                "date_uploaded_unix": 1649008794
            },
            {
                "id": 41200,
                "url": "https:\/\/yts.mx\/movies\/dirty-gertie-from-harlem-u-s-a-1946",
                "imdb_code": "tt0038480",
                "title": "Dirty Gertie from Harlem U.S.A.",
                "title_english": "Dirty Gertie from Harlem U.S.A.",
                "title_long": "Dirty Gertie from Harlem U.S.A. (1946)",
                "slug": "dirty-gertie-from-harlem-u-s-a-1946",
                "year": 1946,
                "rating": 5.2,
                "runtime": 65,
                "genres": [
                    "Drama"
                ],
                "summary": "An all-black Caribbean island resort welcomes flashy dancer Gertie La Rue, forced to perform in this remote spot because she two-timed Al, her Harlem lover and backer, once too often. As Gertie amuses herself by dazzling the local men with her sex appeal, sanctimonious Mr. Christian (shades of 'Rain') schemes to either reform her or have her thrown off the island. On opening night, her sensuous performance exceeds Christian's worst fears...but more serious trouble awaits. \u2014Rod Crawford",
                "description_full": "An all-black Caribbean island resort welcomes flashy dancer Gertie La Rue, forced to perform in this remote spot because she two-timed Al, her Harlem lover and backer, once too often. As Gertie amuses herself by dazzling the local men with her sex appeal, sanctimonious Mr. Christian (shades of 'Rain') schemes to either reform her or have her thrown off the island. On opening night, her sensuous performance exceeds Christian's worst fears...but more serious trouble awaits. \u2014Rod Crawford",
                "synopsis": "An all-black Caribbean island resort welcomes flashy dancer Gertie La Rue, forced to perform in this remote spot because she two-timed Al, her Harlem lover and backer, once too often. As Gertie amuses herself by dazzling the local men with her sex appeal, sanctimonious Mr. Christian (shades of 'Rain') schemes to either reform her or have her thrown off the island. On opening night, her sensuous performance exceeds Christian's worst fears...but more serious trouble awaits. \u2014Rod Crawford",
                "yt_trailer_code": "",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/dirty_gertie_from_harlem_u_s_a_1946\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/dirty_gertie_from_harlem_u_s_a_1946\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/dirty_gertie_from_harlem_u_s_a_1946\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/dirty_gertie_from_harlem_u_s_a_1946\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/dirty_gertie_from_harlem_u_s_a_1946\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/3AD55BDAD23F09F45A1CEFBE0A5EA360CFEBF0DC",
                        "hash": "3AD55BDAD23F09F45A1CEFBE0A5EA360CFEBF0DC",
                        "quality": "720p",
                        "type": "bluray",
                        "seeds": 0,
                        "peers": 0,
                        "size": "554.93 MB",
                        "size_bytes": 581886280,
                        "date_uploaded": "2022-04-03 15:19:23",
                        "date_uploaded_unix": 1648991963
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/462C132DCE8D3D4FF066B7B6E101C794AB20FFBB",
                        "hash": "462C132DCE8D3D4FF066B7B6E101C794AB20FFBB",
                        "quality": "1080p",
                        "type": "bluray",
                        "seeds": 0,
                        "peers": 0,
                        "size": "1.01 GB",
                        "size_bytes": 1084479242,
                        "date_uploaded": "2022-04-03 15:58:19",
                        "date_uploaded_unix": 1648994299
                    }
                ],
                "date_uploaded": "2022-04-03 15:19:23",
                "date_uploaded_unix": 1648991963
            },
            {
                "id": 41199,
                "url": "https:\/\/yts.mx\/movies\/death-ring-1992",
                "imdb_code": "tt0106688",
                "title": "Death Ring",
                "title_english": "Death Ring",
                "title_long": "Death Ring (1992)",
                "slug": "death-ring-1992",
                "year": 1992,
                "rating": 4.5,
                "runtime": 90,
                "genres": [
                    "Action"
                ],
                "summary": "Ex-Green Beret Matt Collins is kidnapped along with his fianc\u00e9e, Lauren Sadler, by crazed hunter extraordinaire Danton Vachs. Every year he holds a contest where people can purchase the right to hunt down and kill a human being. This time, Collins is to be the hunted. Vachs uses Lauren as motivation for Collins to really fight to survive and thus provide the buyers with a truly exceptional hunt. Collins is turned loose on an uncharted island and four killers set out to find and kill him. \u2014R.J. Kizer",
                "description_full": "Ex-Green Beret Matt Collins is kidnapped along with his fianc\u00e9e, Lauren Sadler, by crazed hunter extraordinaire Danton Vachs. Every year he holds a contest where people can purchase the right to hunt down and kill a human being. This time, Collins is to be the hunted. Vachs uses Lauren as motivation for Collins to really fight to survive and thus provide the buyers with a truly exceptional hunt. Collins is turned loose on an uncharted island and four killers set out to find and kill him. \u2014R.J. Kizer",
                "synopsis": "Ex-Green Beret Matt Collins is kidnapped along with his fianc\u00e9e, Lauren Sadler, by crazed hunter extraordinaire Danton Vachs. Every year he holds a contest where people can purchase the right to hunt down and kill a human being. This time, Collins is to be the hunted. Vachs uses Lauren as motivation for Collins to really fight to survive and thus provide the buyers with a truly exceptional hunt. Collins is turned loose on an uncharted island and four killers set out to find and kill him. \u2014R.J. Kizer",
                "yt_trailer_code": "fdhtsuGBuAI",
                "language": "en",
                "mpa_rating": "",
                "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/death_ring_1992\/background.jpg",
                "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/death_ring_1992\/background.jpg",
                "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/death_ring_1992\/small-cover.jpg",
                "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/death_ring_1992\/medium-cover.jpg",
                "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/death_ring_1992\/large-cover.jpg",
                "state": "ok",
                "torrents": [
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/BD83E8AAB2B87E80D9965A91AD367EA48028BE40",
                        "hash": "BD83E8AAB2B87E80D9965A91AD367EA48028BE40",
                        "quality": "720p",
                        "type": "bluray",
                        "seeds": 0,
                        "peers": 0,
                        "size": "831.43 MB",
                        "size_bytes": 871817544,
                        "date_uploaded": "2022-04-03 19:29:47",
                        "date_uploaded_unix": 1649006987
                    },
                    {
                        "url": "https:\/\/yts.mx\/torrent\/download\/094F02D47BF22B0519F819146BAE7043C4FFCEDB",
                        "hash": "094F02D47BF22B0519F819146BAE7043C4FFCEDB",
                        "quality": "1080p",
                        "type": "bluray",
                        "seeds": 56,
                        "peers": 27,
                        "size": "1.51 GB",
                        "size_bytes": 1621350154,
                        "date_uploaded": "2022-04-03 20:34:59",
                        "date_uploaded_unix": 1649010899
                    }
                ],
                "date_uploaded": "2022-04-03 19:29:47",
                "date_uploaded_unix": 1649006987
            }
        ]
    },
    "@meta": {
        "server_time": 1649044767,
        "server_timezone": "CET",
        "api_version": 2,
        "execution_time": "0.01 ms"
    }
}
