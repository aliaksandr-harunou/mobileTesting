const selectors = {
    CURRENCY_AMOUNT: {
        type: "XPATH",
        selector: "//*[@id='navigation-sidebar']/div[2]/div[2]/div[2]/ul[4]/li[1]/a/span"
    },
    HUMBURGER:{
        type: "CSS",
        selector: ".header-style__underlay"
    },
    FORUM:{
        type: "CSS",
        selector: "#navigation-sidebar > div.header-style__aside > div.header-style__navigation > div.header-style__middle > ul:nth-child(1) > li:nth-child(8) > a"
    },
    FORUM_TITLE: {
        type: "CSS",
        selector: "#minWidth > div > div.l-gradient-wrapper > div.b-whbd > div > div.b-mnforum-header > h1"
    },
    WEATHER: {
        type: "CSS",
        selector: "#navigation-sidebar > div.header-style__aside > div.header-style__navigation > div.header-style__middle > ul:nth-child(7) > li.header-style__item.js-weather-widget > a > span"
    }
};

module.exports = selectors;