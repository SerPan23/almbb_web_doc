<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <router-link to="/" class="router-link">
            <a class="navbar-brand" ref="MainPage">ALMBB</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <div class="anim-bar anim-2">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto sidenav" id="navAccordion">
                <li class="nav-item active">
                    <router-link to="/" class="router-link">
                        <a class="nav-link" ref="MainPage">Home <span class="sr-only">(current)</span></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/animated-hamburger" class="router-link">
                        <a class="nav-link" ref="AnimatedHamburger">Animated hamburger</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/carousel-overlay" class="router-link">
                        <a class="nav-link" ref="CarouselOverlay">Carousel overlay</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/buttons" class="router-link">
                        <a class="nav-link" ref="Buttons">Buttons</a>
                    </router-link>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse"
                        data-target="#collapseSubItems2" aria-controls="collapseSubItems2" aria-expanded="false">Item 2</a>
                    <ul class="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span class="nav-link-text">Item 2.1</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span class="nav-link-text">Item 2.2</span>
                            </a>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
    .router-link:hover {
        text-decoration: none; /* отменяем подчеркивание ссылки */
    }
</style>