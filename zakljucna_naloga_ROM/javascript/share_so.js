document.addEventListener("DOMContentLoaded", function () {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    document.querySelector(".share-btn.facebook").addEventListener("click", function () {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, "_blank");
    });

    document.querySelector(".share-btn.twitter").addEventListener("click", function () {
        window.open(`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`, "_blank");
    });

    document.querySelector(".share-btn.linkedin").addEventListener("click", function () {
        window.open(`https://www.linkedin.com/shareArticle?url=${pageUrl}&title=${pageTitle}`, "_blank");
    });
});