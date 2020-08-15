@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="card">
            <div class="card-header">Biodata CRUD</div>
            <div class="card-body">
                <router-view name="indexBiodata"></router-view>
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>

@endsection
