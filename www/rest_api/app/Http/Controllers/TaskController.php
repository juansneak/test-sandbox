<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::all();

        $response = [
            'msg' => 'List of all Tasks',
            'tasks' => $tasks
        ];
        return response()->json($response,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:50',
            'description' => 'required|max:100',
        ]);

        $task = Task::create($request->all());

        $response = [
            'msg' => 'Task created!',
            'task' => $task
        ];

        return response()->json($response,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = Task::findOrFail($id);

        $response = [
            'msg' => 'Task information',
            'task' => $task
        ];
        return response()->json($response,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $request->validate([
            'title' => 'required|max:50',
            'description' => 'required|max:100',
        ]);

        $new_values = $request->all();

        $task->fill($new_values)->save();

        $response = [
            'msg' => 'Task updated',
            'task' => $task
        ];

        return response()->json($response,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);

        if (!$task->delete()){
            return response()->json(['msg' => 'deletion failed'], 404);
        }

        $response = [
            'msg' => 'Task deleted'
        ];

        return response()->json($response,200);
    }
}