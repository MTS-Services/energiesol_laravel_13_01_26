<?php

namespace App\Jobs;

use App\Mail\EstimateMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class EstimateMailJob implements ShouldQueue
{
    use Queueable , SerializesModels;

    /**
     * Create a new job instance.
     */
    public $url;

    public $email;
    public function __construct(string $url, $email )
    {
        $this->url = $url;
        $this->email = $email;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->email)->send(new EstimateMail($this->url));
    }
}
