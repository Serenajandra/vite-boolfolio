<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid mx-4">
                <a class="navbar-brand text-primary" href="#">SERENA'S BOOLFOLIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div>
                <a class="mx-4" href="http://127.0.0.1:8000/admin">Login</a>
            </div>
        </nav>
    </header>
</template>