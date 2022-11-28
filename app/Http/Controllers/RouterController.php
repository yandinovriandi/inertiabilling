<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouterMikrotikResource;
use App\Http\Resources\RouterResource;
use App\Http\Resources\TrafficResource;
use App\Models\Router;
use Illuminate\Http\Request;
use RouterOS\Client;
use RouterOS\Query;

class RouterController
{
    public function index()
    {
        $routers = Router::query()->select('id','name','host','user','pass','port','status','location','slug')->paginate('6');
        return inertia('Routers/Index',[
            'routers' => RouterResource::collection($routers)
        ]);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(Router $router,Request $request)
    {
        $client = new Client([
            'host' => $router->host,
            'user' => $router->user,
            'pass' => $router->pass,
            'port' => (int) $router->port,
        ]);
        $query = (new Query('/system/resource/print'));
        $rsc = $client->query($query)->read();
        $query = (new Query('/interface/print'));
        $interfaces = $client->query($query)->read();
        $response = (new Query('/log/print', ['?topics' => 'hotspot,info,debug']));
        $logs = $client->query($response)->read();
        $totalLogs = count($logs);
        $query =
            (new Query('/interface/monitor-traffic'))
                ->equal('interface', 'ether5')
                ->equal('once');
        $traffic = $client->query($query)->read();
        return inertia('Routers/Show',[
            'router' => $router,
            'interfaces' => $interfaces,
            'logs' => $logs,
            'traffic' => TrafficResource::collection($traffic),
            'rsc' => RouterMikrotikResource::collection($rsc),
            'totalLogs' => $totalLogs,
        ]);
    }

    public function edit(Router $router)
    {
    }

    public function update(Request $request, Router $router)
    {
    }

    public function destroy(Router $router)
    {
    }
}
