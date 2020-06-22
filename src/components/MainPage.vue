<template>
    <div class="main content-wrapper">
        <div>
            <h2>Installation:</h2>
            <ul>
                <li>Download bootstrap 4, FontAwesome, jquery.js, popper.js or use cdn links</li>
                <li>
                    <span>You can use this link:</span>
                    <div class="codeblock">
                    <pre class="html5" style="font-family:monospace;">
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">link</span> <span style="color: #000066;">rel</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;stylesheet&quot;</span> <span style="color: #000066;">href</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css&quot;</span></span>
<span style="color: #009900;">      integrity<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk&quot;</span> crossorigin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;anonymous&quot;</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">script</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;https://kit.fontawesome.com/827a6fbe84.js&quot;</span> crossorigin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;anonymous&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">script</span>&gt;</span>
        &nbsp;
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">script</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;https://code.jquery.com/jquery-3.5.1.js&quot;</span> integrity<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=&quot;</span></span>
<span style="color: #009900;">      crossorigin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;anonymous&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">script</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">script</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js&quot;</span></span>
<span style="color: #009900;">      integrity<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo&quot;</span> crossorigin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;anonymous&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">script</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">script</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js&quot;</span></span>
<span style="color: #009900;">      integrity<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI&quot;</span> crossorigin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;anonymous&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">script</span>&gt;</span>
                    </pre>
                    </div>
                </li>
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
.codeblock{
    background: #ffffff; 
    overflow:auto;width:auto; 
    background-color: rgba(245, 245, 245, 0.877); 
    font-size: 1.5em;
}
</style>