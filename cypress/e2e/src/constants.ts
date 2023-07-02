export default {
    EMPTY_STRING: "",
    URL: {
        BASE: "/",
        RESULTS: "/searchresults",
    },
    SEARCH: {
        FROM: "1",
        TO: "7",
        CITY: "Porto",
        COUNTRY: "Portugal"
    },
    MONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    NEXT_MONTH: String((new Date().getMonth()+1)%12 + 1)
}