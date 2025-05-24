<template>
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <router-link to="/" class="nav-item nav-link" exact-active-class="active">Home</router-link>
                        <router-link to="/about" class="nav-item nav-link" active-class="active">About</router-link>
                        <router-link to="/services" class="nav-item nav-link"
                            active-class="active">Services</router-link>
                        <router-link to="/contact" class="nav-item nav-link" active-class="active">Contact</router-link>
                    </div>
                </div>
            </nav>
</template>