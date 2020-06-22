<template>
    <div class="main content-wrapper">
        <div style="margin-bottom: 1em;">
            <h2 style="text-align: center; font-weight: bold;">Buttons</h2>
            <div style="font-size: 1.2em;">
                In this page you can see new type of button, it's list of colors for buttons:
                <ul>
                    <li>blue</li>
                    <li>indigo</li>
                    <li>light-yellow</li>
                    <li>red-orange</li>
                    <li>light-blue</li>
                    <li>light-green</li>
                </ul>
            </div>
        </div>
        
        <a name="newcolor" class="iacor"></a>
        <div style="margin: 3em 0em;">
            <h3 style="text-align: center; margin-bottom: 1em;">New color</h3>
            <p style="font-size: 1.2em;">To use color you need add class: btn-colorname</p>
            <p style="font-size: 1.2em;">For example: class="btn btn-blue" </p>
            <div class="row justify-content-center">
                <div class="col-12 col-md-2 bb"><button class="btn btn-blue">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-indigo">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-light-yellow">test</button></div>
            </div> <br>
            <div class="row justify-content-center">
                <div class="col-12 col-md-2 bb"><button class="btn btn-red-orange">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-light-blue">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-light-green">test</button></div>
            </div>
        </div>

        <a name="rounded" class="iacor"></a>
        <div style="margin: 3em 0em;">
            <h3 style="text-align: center; margin-bottom: 1em;">Rounded button</h3>
            <p style="font-size: 1.2em;">To use rounded button you need add class: btn-rounded-colorname</p>
            <p style="font-size: 1.2em;">For example: class="btn btn-rounded-blue" </p>
            <div class="row justify-content-center">
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-blue">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-indigo">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-light-yellow">test</button></div>
            </div> <br>
            <div class="row justify-content-center">
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-red-orange">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-light-blue">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-light-green">test</button></div>
            </div>
        </div>
        <a name="gradient-button" class="iacor"></a>
        <div style="margin: 3em 0em;">
            <h3 style="text-align: center; margin-bottom: 1em;">Gradient button</h3>
            <p style="font-size: 1.2em;">To use rounded gradient button you need add class: btn-rounded-gradient-colorname</p>
            <p style="font-size: 1.2em;">For example: class="btn btn-rounded-gradient-blue" </p>
            <p style="font-size: 1.2em;">To use simple gradient button you need add class: btn-gradient-colorname</p>
            <p style="font-size: 1.2em;">For example: class="btn btn-gradient-blue" </p>
            <ul style="font-size: 1.2em;">
                <li>blue</li>
                <li>peach</li>
                <li>aqua</li>
            </ul>

            <div class="row justify-content-center">
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-gradient-blue">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-gradient-peach">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-rounded-gradient-aqua">test</button></div>
            </div> <br>
            <div class="row justify-content-center">
                <div class="col-12 col-md-2 bb"><button class="btn btn-gradient-blue">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-gradient-peach">test</button></div>
                <div class="col-12 col-md-2 bb"><button class="btn btn-gradient-aqua">test</button></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Buttons',
}
</script>

<style lang="scss">
.main{
    background-color: #fff;
    padding: 1em;
}
.iacor{
    border-top: 3.5rem solid transparent;
	margin-top: -3.5rem;
	padding: 5px; /* паддинги - без проблем */
	-moz-background-clip: padding;
	-webkit-background-clip: padding-box;
    background-clip: padding-box;
}
.bb{
    text-align: center;
    @media (max-width: 992px) {
        margin-bottom: 0.5em;
    }
}
</style>