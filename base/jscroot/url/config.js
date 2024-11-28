// Base URL
export const croot = "https://chekoutgobiz.github.io/fe_web/base/jscroot/";

// Folder Struktur
export const folder = {
    template: croot + "template/",
    controller: croot + "controller/",
    view: croot + "view/",
};

// URL Struktur
export const url = {
    template: {
        content: folder.template + "content/", // Perbaikan: Menambahkan "content"
        header: folder.template + "header.html",
        navbar: folder.template + "navbar.html",
        settings: folder.template + "settings.html",
        sidebar: folder.template + "sidebar.html",
        footer: folder.template + "footer.html",
        rightbar: folder.template + "rightbar.html",
        register: folder.template + "register.html",
        login: folder.template + "login.html",
        product: folder.template + "product.html",
        cart: folder.template + "cart.html",

    },
    controller: {
        main: folder.controller + "main.js",
        navbar: folder.controller + "load-navbar.js",
    },
    view: {
        content: folder.view + "content/", // Ditambahkan untuk `url.contentview`
        header: folder.view + "header.js",
        search: folder.view + "search.js",
        settings: folder.view + "settings.js",
        sidebar: folder.view + "sidebar.js",
        footer: folder.view + "footer.js",
        // Menambahkan rute untuk login, register, product, cart, dll
        login: folder.view + "login.js",
        register: folder.view + "register.js",
        product: folder.view + "product.js",
        cart: folder.view + "cart.js",
    },
};
