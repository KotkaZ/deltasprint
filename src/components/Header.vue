<template>
    <nav>

        <ul>
            <li class="logo">
                <router-link to="/">
                    <p>Delta<span id="bold">Sprint</span></p>
                </router-link>
            </li>
            <li class="items">
                <router-link to="/statute">
                    <p>Statuut</p>
                </router-link>
            </li>

            <li class="items">
                <router-link to="/competition">
                    <p>Võistlema</p>
                </router-link>
            </li>

            <li class="items">
                <router-link to="/results">
                    <p>Tulemused</p>
                </router-link>
            </li>
            <li class="btn" @click="toggleMenu">
                <a href="#"><p>&#9776;</p></a>
            </li>
        </ul>

    </nav>
</template>

<script>
export default {
    name: "Header",
    methods: {
        toggleMenu: function () {
            document.querySelectorAll(".items").forEach(v => v.classList.toggle("show"));
            document.querySelectorAll("ul li").forEach(v => v.classList.toggle("hide"))
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,600,700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik';
}
nav{
    background: #151515;
    padding: 5px 40px;
}
nav ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
nav ul li{
    padding: 15px 0;
    cursor: pointer;
    text-transform: uppercase;
}
nav ul li.items{
    position: relative;
    width: auto;
    margin: 0 16px;
    text-align: center;
    order: 3;
    letter-spacing: 4px;
}
nav ul li.items:after{
    position: absolute;
    content: '';
    left: 0;
    bottom: 5px;
    height: 2px;
    width: 100%;
    background: #B5002F;
    opacity: 0;
    transition: all 0.2s linear;
}
nav ul li.items:hover:after{
    opacity: 1;
    bottom: 8px;
}
nav ul li.logo{
    flex: 1;
    color: white;
    font-size: 23px;
    cursor: default;
    user-select: none;
    letter-spacing: 10px;
}

nav ul li.logo p{
    font-weight: 100;
}

nav ul li.logo #bold{
    font-weight: 900;
}

nav ul li a{
    color: white;
    font-size: 18px;
    text-decoration: none;
    transition: .4s;
}
nav ul li:hover a{
    color: #fff;
}
nav ul li i{
    font-size: 23px;
}
nav ul li.btn{
    display: none;
}
nav ul li.btn.hide i:before{
    content: '\f0c9';
}
@media all and (max-width: 900px){
    nav{
        padding: 5px 30px;
    }
    nav ul li.items{
        width: 100%;
        display: none;
    }
    nav ul li.items.show{
        display: block;
    }
    nav ul li.btn{
        display: block;
    }
    nav ul li.items:hover{
        border-radius: 5px;
        box-shadow: inset 0 0 5px #B5002F,
        inset 0 0 10px #B5002F;
    }
    nav ul li.items:hover:after{
        opacity: 0;
    }
}


</style>