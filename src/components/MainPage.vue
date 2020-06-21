<template>
    <div class="main content-wrapper">
        <div>
            <h2>Installation:</h2>
            <ul>
                <li>Download bootstrap 4, jquery.js, popper.js or use cdn links</li>
                <li>Download archive and add css and js files in your project</li>
                <li>Link almbb.css in head</li>
                <li>Add almbb.js in head after bootstrap 4, jquery.js, popper.js or before body end</li>
            </ul>
            <a class="btn btn-outline-success" :href="`${publicPath}for_download/almbb.rar`" download>
                Download
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
    data: () => ({ publicPath: process.env.BASE_URL })
}

</script>

<style lang="scss">
.main{
    background-color: #fff;
    padding: 1em;
}
</style>