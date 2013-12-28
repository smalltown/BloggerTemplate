<!-- Generate random post for all, and local post -->
<script language="javascript">
//<![CDATA[
var randomAllPostNumber = 5;
var randomLocalPostNumber = 4;
var randomChars = 40;


function randomArray(totalPostNumber, displayPostNumber)
{// generate a random array
	var temp = new Array();
	var randomArrayResult = new Array();

    for(i = 0; i < totalPostNumber; i++)
		{temp[i] = i;}
	
	for(i = 0; i < displayPostNumber; i++)
	{
	    j = Math.floor(Math.random()*temp.length);
	    randomArrayResult[i] = temp[j];
		temp.splice(j, 1);
	}
	
	return randomArrayResult;
}


function getPostDetailInformation(onePost)
{// get the URL, image, content from one post

	var result = new Object();
	
	for(k=0; k < onePost.link.length; k++)
	{
		if(onePost.link[k].rel=='alternate')
		{
			var item='';
			var re = /<\S[^>]*>/g; 
			result.postTitle = onePost.title.$t;
			result.postUrl = onePost.link[k].href;
			   
			if ("content" in onePost) {result.postContent = onePost.content.$t;}
            else if ("summary" in onePost) {result.postContent = onePost.summary.$t;}
            else result.postContent = "";

            result.postContent = result.postContent.replace(re, "");

            if (result.postContent.length > randomChars) result.postContent = result.postContent.substring(0,randomChars);
			   
			result.photoUrl = onePost.media$thumbnail.url;

			s=onePost.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
			result.photoUrl = d;
			   
			   
			break;
		  }
	}
	
	return result;
}

function generateRandomPosts(json)
{
    var allPostNumber = parseInt(json.feed.openSearch$totalResults.$t,10);
	var totalPostsSequence = randomArray(allPostNumber, randomAllPostNumber);
	
	
	// fill random post from all the post
	for(i = 0; i < randomAllPostNumber; i++)
	{
		allPostObject = getPostDetailInformation(json.feed.entry[totalPostsSequence[i]]);

	    $("img#fragment-img-"+(randomAllPostNumber-i)).attr("src", allPostObject.photoUrl);
            $("img#fragment-img-"+(randomAllPostNumber-i)).attr("width", "518px");
            $("img#fragment-img-"+(randomAllPostNumber-i)).attr("height", "306px");
	    $("img#fragment-img-"+(randomAllPostNumber-i)).attr("alt", allPostObject.postTitle);
	    $("a#fragment-a-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		
	}
}


function generateTaipeiPosts(json)
{
    var allPostNumber = parseInt(json.feed.openSearch$totalResults.$t,10);
	var totalPostsSequence = randomArray(allPostNumber, randomAllPostNumber);
	
	
	// fill random post from all the post
	for(i = 0; i < randomAllPostNumber; i++)
	{
		allPostObject = getPostDetailInformation(json.feed.entry[totalPostsSequence[i]]);

	        $("img#mega-taipei-image-"+(randomAllPostNumber-i)).attr("src", allPostObject.photoUrl);
		$("a#mega-taipei-a-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		$("a#mega-taipei-a-title-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		$("a#mega-taipei-a-title-"+(randomAllPostNumber-i)).append(allPostObject.postTitle);
		
	}
}

function generateKaohsiungPosts(json)
{
    var allPostNumber = parseInt(json.feed.openSearch$totalResults.$t,10);
	var totalPostsSequence = randomArray(allPostNumber, randomAllPostNumber);
	
	
	// fill random post from all the post
	for(i = 0; i < randomAllPostNumber; i++)
	{
		allPostObject = getPostDetailInformation(json.feed.entry[totalPostsSequence[i]]);

	        $("img#mega-kaohsiung-image-"+(randomAllPostNumber-i)).attr("src", allPostObject.photoUrl);
		$("a#mega-kaohsiung-a-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		$("a#mega-kaohsiung-a-title-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		$("a#mega-kaohsiung-a-title-"+(randomAllPostNumber-i)).append(allPostObject.postTitle);
		
	}
}

function generateTaoyuanPosts(json)
{
    var allPostNumber = parseInt(json.feed.openSearch$totalResults.$t,10);
	var totalPostsSequence = randomArray(allPostNumber, randomAllPostNumber);
	
	
	// fill random post from all the post
	for(i = 0; i < randomAllPostNumber; i++)
	{
		allPostObject = getPostDetailInformation(json.feed.entry[totalPostsSequence[i]]);

	        $("img#mega-taoyuan-image-"+(randomAllPostNumber-i)).attr("src", allPostObject.photoUrl);
		$("a#mega-taoyuan-a-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		$("a#mega-taoyuan-a-title-"+(randomAllPostNumber-i)).attr("href", allPostObject.postUrl);
		$("a#mega-taoyuan-a-title-"+(randomAllPostNumber-i)).append(allPostObject.postTitle);
		
	}
}

function showRandomPosts()
{
    var sFeedURL = '/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1000&callback=generateRandomPosts';
	var script = document.createElement('script');
	script.setAttribute('src', sFeedURL);
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script); 
}

function showTaipeiPosts()
{
    var sFeedURL = '/feeds/posts/default/-/%5B食記%5D台北?alt=json-in-script&start-index=1&max-results=1000&callback=generateTaipeiPosts';
	var script = document.createElement('script');
	script.setAttribute('src', sFeedURL);
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script); 
}

function showKaohsiungPosts()
{
    var sFeedURL = '/feeds/posts/default/-/%5B食記%5D高雄?alt=json-in-script&start-index=1&max-results=1000&callback=generateKaohsiungPosts';
	var script = document.createElement('script');
	script.setAttribute('src', sFeedURL);
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script); 
}

function showTaoyuanPosts()
{
    var sFeedURL = '/feeds/posts/default/-/%5B食記%5D桃園?alt=json-in-script&start-index=1&max-results=1000&callback=generateTaoyuanPosts';
	var script = document.createElement('script');
	script.setAttribute('src', sFeedURL);
	script.setAttribute('type', 'text/javascript');
	document.documentElement.firstChild.appendChild(script); 
}
//]]>
</script>


<script language="javascript">showRandomPosts();</script>
<script language="javascript">showTaipeiPosts();</script>
<script language="javascript">showKaohsiungPosts();</script>
<script language="javascript">showTaoyuanPosts();</script>