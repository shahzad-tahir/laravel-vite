<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        @vite(['resources/css/app.scss', 'resources/js/app.js'])
    </head>
    <body>
        <h1>Hello, <span>SCSS!</span></h1>
        <div class="bg-blue-700 text-white">Hello, Vite!</div>
    </body>
</html>
