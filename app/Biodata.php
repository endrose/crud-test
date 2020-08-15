<?php

namespace App;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Biodata extends Model
{
    //
    protected $table = 'biodatas';
    protected $fillable = ['nama', 'hoby', 'alamat', 'website'];



    public static function getAutonumberBiodata(): Biodata
    {
        $char = 'BOD';
        $kode = DB::table('biodatas')->max('kode');
        $newKode = $kode;
        $kode1 = (int) substr($newKode, 6, 3);
        $newKode1Count = $kode1 + 1;


        $generateKode = $char . "-" . sprintf("%03s", $newKode1Count);

        return static::where('kode', $generateKode)->get()->first();
    }
}
