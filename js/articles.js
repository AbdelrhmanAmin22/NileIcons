//articles 
$(document).ready(function() {
    var showCount = 3; 
    var $articlesContainer = $('.articles-container');
    var $moreButton = $('#more');
    var $noArticlesMessage = $('#no');

    var $articles = $articlesContainer.find('.article');

    if ($articles.length === 0) {
        $noArticlesMessage.show();
        $moreButton.hide();
        return;
    }

    $articles.hide();
    $articles.slice(0, showCount).show();

    updateButtonAndMessage();

    $moreButton.on('click', function() {
        var $hiddenArticles = $articlesContainer.find('.article:hidden');
        if ($hiddenArticles.length > 0) {
            // Show all hidden articles
            $articles.slideDown('slow');
            $moreButton.text('Show Less');
        } else {
            // Hide articles except the first 'showCount' articles
            $articles.slice(showCount).slideUp('slow');
            $moreButton.text('Show More');
        }
        updateButtonAndMessage();
    });

    function updateButtonAndMessage() {
        var $hiddenArticles = $articlesContainer.find('.article:hidden');
        if ($hiddenArticles.length === 0 && $articles.length > showCount) {
            $noArticlesMessage.hide();
            $moreButton.show();
        } else if ($articles.length <= showCount) {
            $noArticlesMessage.hide();
            $moreButton.hide();
        } else {
            $noArticlesMessage.hide();
            $moreButton.show();
        }
    }
});
