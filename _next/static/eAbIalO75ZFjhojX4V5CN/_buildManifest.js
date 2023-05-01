self.__BUILD_MANIFEST = function(s, e, c, a, t) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, e, a, c, "static/chunks/pages/index-ad003c1bfd414ec7.js"],
        "/404": [s, "static/chunks/pages/404-e22ad228f4219757.js"],
        "/_error": ["static/chunks/pages/_error-0c350db57a1293df.js"],
        "/news": [t, s, e, c, "static/chunks/pages/news-fded9b50d517deef.js"],
        "/news/[slug]": [t, s, e, a, c, "static/chunks/pages/news/[slug]-273513005948250f.js"],
        "/[slug]": [s, e, a, c, "static/chunks/pages/[slug]-19371ca2f370f6ad.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/news", "/news/[slug]", "/[slug]"]
    }
}("static/chunks/4163-cc0be7df79e9359b.js", "static/chunks/5472-208ac865dd42a017.js", "static/chunks/8150-b9e8068b4cfbff49.js", "static/chunks/8658-b4e8e76b55dbc351.js", "static/chunks/75fc9c18-16094ab146eff2f8.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();