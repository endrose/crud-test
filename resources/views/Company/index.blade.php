@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="card">
                <div class="card-header">
                    CRUD
                </div>
                <div class="card-body">
                    <router-view name="indexCompany"></router-view>
                    <router-view></router-view>
                </div>
            </div>
            {{-- <router-view></router-view> --}}
        </div>
    </div>
@endsection
