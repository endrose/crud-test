@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="card">
                <div class="card-header">
                    <h2>CRUD - VUE APPS</h2>
                </div>
                <div class="card-body">
                    <router-view name="indexCrud"></router-view>

                    <router-view></router-view>

                </div>
            </div>
        </div>
    </div>
@endsection
