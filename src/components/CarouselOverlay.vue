<template>
    <div class="main content-wrapper">
        <h2 style="text-align: center;">Carousel overlay</h2>
        <h4>Add div as in the example to all carousel-item divs</h4>
<div class="codeblock">
<pre class="html5" style="font-family:monospace;">
    
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;carousel-item active&quot;</span>&gt;</span>
    <span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;carousel_overlay&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
    ...

</pre>
</div>
    </div>
</template>

<script>
export default {
    name: 'CarouselOverlay',
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