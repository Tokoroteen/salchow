Vue.component('header-template', {
    data: function() {
        return {
            currentRoute: null
        }
    },
    template: `
        <div class="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Salchow</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" :class="{ 'active': currentRoute === '/' }" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="{ 'active': currentRoute === '/member.html' }" href="/member.html">Member</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="{ 'active': currentRoute === '/contact.html' }" href="/contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `,
    created: function() {
        // 現在のルートを取得するために、window.location.pathnameを使用し、それをcurrentRouteデータプロパティに割り当てる
        this.currentRoute = window.location.pathname;
    }
})

Vue.component('footer-template', {
    template: `
        <footer>
            <p>&copy; 2023 Salcow</p>
        </footer>
    `,
})

Vue.component('card-template', {
    props: {
        img_src: {
            type: String,
            default: './static/images/member/demo.png'
        },
        member_name: {
            type: String,
            default: 'name'
        },
        basic: {
            type: String,
            default: 'position, height'
        },
        text: {
            type: String,
            default: 'detail'
        }
    },
    template: `
        <div class="card" style="width: 18rem;">
            <img v-bind:src="img_src" class="card-img-top" alt="demo">
            <div class="card-body">
                <h5 class="card-title">{{ member_name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ basic }}</h6>
                <p class="card-text" v-html="text"></p>
            </div>
        </div>
    `,
})

new Vue({
    el: '#app',
})