@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="card">
            <div class="card-header">CRUD - VUEX</div>
            <div class="card-body">
                <router-view name="crudVuex"></router-view>
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>

@endsection
