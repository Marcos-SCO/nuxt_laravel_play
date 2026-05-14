<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->input('s');

        $request->validate(['s' => 'required|string']);

        $posts = Post::where('title', 'like', '%' . $search . '%')
            ->orWhere('content', 'like', '%' . $search . '%')
            ->get();

        $users = User::where('name', 'like', '%' . $search . '%')->get();

        // return ['posts' => $posts, 'users' => $users];
        return response()->json(['posts' => $posts, 'users' => $users]);
    }
}
