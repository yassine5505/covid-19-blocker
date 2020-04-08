$(document).ready(function() {
    // Get all post divs
    var articleDivs = $("div[data-pagelet*='Feed']");
    var articles = Object.values(articleDivs);
    articles.forEach(article => {
        console.log(article);
        if(article.has("p") || article.has("div") || article.has("span")) {
            var articleChildren = article.children();
            articleChildren.forEach(child => {
                // Check if text
                if(child.is("p") || child.is("span") || child.is("div")) {
                    if(child.innerText.toLowerCase().includes("covid")) {
                        console.log("removing article: " + article);
                        article.remove();
                    }
                }
            })
        }
    });
});