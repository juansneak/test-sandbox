<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HTTPTest extends TestCase
{

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAllTasksTest()
    {
        
      $response = $this->withHeaders([
          'Content-Type' => 'application/json',
      ])->json('GET', '/api/v1/task/');

      $response
          ->assertStatus(200)
          ->assertJsonStructure([
			        'msg',
			        'tasks'=>[],
					]);
    }

    public function testAddTaskTest()
    {
        
      $response = $this->withHeaders([
          'Content-Type' => 'application/json',
      ])->json('POST', '/api/v1/task/', ['title' => 'Test Task', 'description'=> 'Description goes here']);

      $response
          ->assertStatus(201)
          ->assertJson([
                "msg" => "Task created!",
            ]);
    }
}