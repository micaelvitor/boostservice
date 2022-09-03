<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/meusdados', function () {
    return Inertia::render('Meusdados');
})->middleware(['auth', 'verified'])->name('meusdados');

Route::get('/meuplano', function () {
    return Inertia::render('Meuplano');
})->middleware(['auth', 'verified'])->name('meuplano');

Route::get('/checkout', function () {
    return Inertia::render('Checkout');
})->middleware(['auth', 'verified'])->name('checkout');

Route::get('/adminPanel', function () {
    return Inertia::render('Adminpanel');
})->middleware(['auth', 'verified', 'admin'])->name('adminpanel');

require __DIR__.'/auth.php';
