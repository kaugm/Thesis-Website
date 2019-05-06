# kaugm.github.io
### Preface
I had 2 qualtrics surveys for my thesis experiment, and needed a way to ensure random grouping of respondents. Sending 2 different links does not guarantee random sorting, and many times our contacts on the other end refused to sort respondents for us.

### About
This is a website performs the sorting function. Respondents click on the button on the page and are redirected to one of the 2 surveys we had. This way, only one link is sent to resondents and random sorting is ensured.  
<br>
Javascript code:
~~~~
<script>
    var urls = [
        "http://www.survey1.com",
        'http://www.survey2.com/',
    ];

    function goSomewhere() {
        var url = urls[Math.floor(Math.random()*urls.length)];
        window.location = url; // redirect
    }
</script>~~~~
<br>
Added the button to the website:
~~~~
<h2><button class="w3-button" onclick="randomsort()"><span class="w3-center w3-padding-large w3-xlarge">Take Survey!</span></button></h2>
~~~~
<br>
Idea from: <a href="https://stackoverflow.com/questions/18038671/how-can-i-create-a-button-that-links-to-multiple-websites-randomly">Stack Overflow</a>