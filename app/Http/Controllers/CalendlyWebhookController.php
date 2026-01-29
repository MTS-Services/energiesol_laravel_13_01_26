<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CalendlyWebhookController extends Controller
{
    public function handle(Request $request)
    {
        // ✅ Verify webhook signature
        $this->verifySignature($request);

        $data = $request->all();

        if (($data['event'] ?? '') === 'invitee.created') {

            $payload = $data['payload'];

            DB::table('appointments')->insert([
                'name'        => $payload['name'] ?? null,
                'email'       => $payload['email'] ?? null,
                'start_time'  => $payload['scheduled_event']['start_time'] ?? null,
                'end_time'    => $payload['scheduled_event']['end_time'] ?? null,
                'timezone'    => $payload['timezone'] ?? null,
                'raw_payload' => json_encode($payload),
                'created_at'  => now(),
                'updated_at'  => now(),
            ]);
        }

        return response()->json(['status' => 'ok'], 200);
    }

    private function verifySignature(Request $request)
    {
        $signature = $request->header('Calendly-Webhook-Signature');

        if (!$signature) {
            abort(401, 'Missing signature');
        }

        $secret = config('services.calendly.webhook_secret');

        $computed = hash_hmac('sha256', $request->getContent(), $secret);

        if (!hash_equals($computed, $signature)) {
            abort(403, 'Invalid signature');
        }
    }

}
