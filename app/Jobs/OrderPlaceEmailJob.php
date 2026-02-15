<?php

namespace App\Jobs;

use App\Mail\OrderPlaceEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class OrderPlaceEmailJob implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public $url;

    public $email;

    public function __construct(string $url, $email)
    {
        $this->url = $url;
        $this->email = $email;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            Mail::to($this->email)->send(new OrderPlaceEmail($this->url));
        } catch (\Exception $e) {
            \Log::error('OrderPlaceEmailJob failed: '.$e->getMessage(), [
                'email' => $this->email,
                'url' => $this->url,
                'exception' => $e,
            ]);
        }
    }
}
