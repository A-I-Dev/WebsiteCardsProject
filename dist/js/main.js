(() => {
    const 
        mainNavigation = document.getElementById("card-link-list"),
        mainNavigationItems = mainNavigation.children,
        cardsList = document.getElementById("card-list");
        cardsListItems = cardsList.children
    ;

    for (let navItem of mainNavigationItems) {
        navItem.addEventListener("click", showCard);
    }

    function showCard() {
        let 
            thisId = this.id,
            cardId = thisId.slice(4),
            cardElement = document.getElementById(cardId)
        ;

        for (let cardItem of cardsListItems) {
            if (cardItem.classList.contains("visible")) {
                cardItem.classList.remove("visible");
                break;
            }
        }

        cardElement.classList.add("visible");
    }
    
})()