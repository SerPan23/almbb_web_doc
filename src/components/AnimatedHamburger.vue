<template>
    <div class="main content-wrapper">
        <h2 style="text-align: center;">Animated hamburger</h2>
        <h4>Usage:</h4> 
        Simple navbar-toggler:
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <!-- border:solid gray;border-width:.1em .1em .1em .1em; -->
<div class="codeblock">
<pre class="html5" style="font-family:monospace; margin-bottom: 0px;">

<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">button</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;navbar-toggler&quot;</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;button&quot;</span> data-toggle<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;collapse&quot;</span> data-<span style="color: #000066;">target</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;#navbarSupportedContent&quot;</span> aria-controls<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;navbarSupportedContent&quot;</span>   aria-expanded<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;false&quot;</span> aria-<span style="color: #000066;">label</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Toggle navigation&quot;</span>&gt;</span>
    <span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">span</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;navbar-toggler-icon&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">span</span>&gt;</span>
<span style="color: #009900; margin-bottom: 1em;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">button</span>&gt;</span>

</pre>
</div>
        <br>
        <h3>You need change to this (choose anim-1 or anim-2):</h3> 
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="anim-bar anim-1">  
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
        </button> -->
<div class="codeblock">
<pre class="html5" style="font-family:monospace; margin-bottom: 0px;">

<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">button</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;navbar-toggler&quot;</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;button&quot;</span> data-toggle<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;collapse&quot;</span> data-<span style="color: #000066;">target</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;#navbarSupportedContent&quot;</span> aria-controls<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;navbarSupportedContent&quot;</span> aria-expanded<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;false&quot;</span> aria-<span style="color: #000066;">label</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Toggle navigation&quot;</span>&gt;</span>
    <span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;anim-bar-light anim-1&quot;</span>&gt;</span>  
    <span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">span</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;icon-bar&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">span</span>&gt;</span>
    <span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">span</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;icon-bar&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">span</span>&gt;</span>
    <span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">span</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;icon-bar&quot;</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">span</span>&gt;</span>
    <span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">button</span>&gt;</span>

</pre>
</div>

    <div class="navtest">
        <h4>It is anim-bar-dark:</h4>
        <nav class="navbar  navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#a1"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <div class="anim-bar-dark anim-1">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="a1">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link disabled" href="#">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="navtest">
        <h4>And it is anim-bar-light:</h4>
        <nav class="navbar  navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#a2"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <div class="anim-bar-light anim-2">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="a2">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link disabled" href="#">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    </div>
</template>

<script>
export default {
    name: 'AnimatedHamburger',
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
.navtest{
    margin: 2em 0em;
}
</style>